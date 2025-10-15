const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const Visit = require('../models/Visit');
const Message = require('../models/Message');

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return forwarded.split(',')[0];
  return req.connection.remoteAddress || req.socket.remoteAddress || 'unknown';
};

// ✅ Record a visit
// ✅ Record a visit (with proper location object)
router.post('/visit', async (req, res) => {
  try {
    const { page, duration } = req.body;
    const ip = getClientIp(req).replace('::ffff:', '');

    // Default fallback location
    let location = {
      country: 'Unknown',
      state: 'Unknown',
      label: 'Unknown',
    };

    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      const geo = await geoRes.json();

      if (geo && (geo.country_name || geo.region)) {
        location.country = geo.country_name || 'Unknown';
        location.state = geo.region || 'Unknown';
      }
    } catch (e) {
      console.warn('Geo lookup failed:', e.message);
    }

    // Visit document (auto-generates label via pre-save middleware)
    const visit = new Visit({ ip, page, duration, location });
    await visit.save();

    res.json({ success: true, msg: 'Visit recorded successfully' });
  } catch (err) {
    console.error('Visit error:', err);
    res.status(500).json({ success: false, msg: 'Error recording visit' });
  }
});

// ✅ Update location after browser permission
router.post('/update-location', async (req, res) => {
  try {
    const { country, state } = req.body;
    if (!country && !state)
      return res.status(400).json({ message: 'No location provided' });

    const latestVisit = await Visit.findOne().sort({ timestamp: -1 });
    if (latestVisit) {
      latestVisit.location = {
        country: country || 'Unknown',
        state: state || 'Unknown',
      };
      await latestVisit.save();
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error updating location:', err);
    res.status(500).json({ error: 'Failed to update location' });
  }
});


// ✅ Return analytics summary
router.get('/summary', async (req, res) => {
  try {
    const visits = await Visit.find().sort({ timestamp: -1 });
    const totalVisits = visits.length;
    const uniqueVisitors = new Set(visits.map(v => v.ip)).size;
    const avgSession = visits.length ? (visits.reduce((s,v)=>s+(v.duration||0),0)/visits.length) : 0;

    const pageCounts = {};
    visits.forEach(v => pageCounts[v.page] = (pageCounts[v.page] || 0) + 1);
    const topPages = Object.entries(pageCounts)
      .map(([page, visits])=>({ page, visits }))
      .sort((a,b)=>b.visits-a.visits);

    const locCounts = {};
    visits.forEach(v => {
      const label = v.location?.label || 'Unknown';
      locCounts[label] = (locCounts[label] || 0) + 1;
    });
    const topLocations = Object.entries(locCounts)
      .map(([location,visits])=>({ location, visits }))
      .sort((a,b)=>b.visits-a.visits);

    const contacts = await Message.find().sort({ createdAt: -1 }).limit(100);

    res.json({
      success: true,
      totalVisits,
      uniqueVisitors,
      averageSessionDuration: avgSession,
      topPages,
      topLocations,
      pageVisits: visits.slice(0,50),
      contactSubmissions: contacts,
      userImpressions: []
    });
  } catch (err) {
    console.error('Summary error:', err);
    res.status(500).json({ success: false, msg: 'Error building summary' });
  }
});

module.exports = router;
