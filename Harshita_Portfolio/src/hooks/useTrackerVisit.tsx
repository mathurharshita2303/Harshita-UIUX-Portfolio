import { useEffect } from 'react';

const getLocation = async (): Promise<{ state: string; country: string }> => {
  // Try browser geolocation first
  if (navigator.geolocation) {
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 })
      );
      const { latitude, longitude } = pos.coords;
      // Use IP-based API or reverse geocoding
      const res = await fetch(`https://ipapi.co/${latitude},${longitude}/json/`);
      const data = await res.json();
      return {
        state: data.region || 'Unknown',
        country: data.country_name || 'Unknown',
      };
    } catch {}
  }

  // Fallback: IP-based location
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    return {
      state: data.region || 'Unknown',
      country: data.country_name || 'Unknown',
    };
  } catch {
    return { state: 'Unknown', country: 'Unknown' };
  }
};

export function useTrackVisit(page: string) {
  useEffect(() => {
    const start = Date.now();

    const sendVisit = async () => {
      const duration = Date.now() - start;
      const location = await getLocation();

      try {
        await fetch('http://localhost:5002/api/analytics/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page,
            duration,
            location,
          }),
        });
      } catch (err) {
        console.error('Visit track failed', err);
      }
    };

    window.addEventListener('beforeunload', sendVisit);
    return () => {
      window.removeEventListener('beforeunload', sendVisit);
      sendVisit();
    };
  }, [page]);
}
