import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  ArrowLeft,
  Users,
  Mail,
  MapPin,
  TrendingUp,
  Clock,
  Eye,
  Star,
  Globe
} from "lucide-react";
import { useAnalytics } from "../context/AnalyticsContext";
import API_BASE from "../config";

// --- Utility Functions ---
const formatDistanceToNow = (date: Date, options: { addSuffix?: boolean } = {}) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) return options.addSuffix ? `${days} day${days > 1 ? "s" : ""} ago` : `${days} day${days > 1 ? "s" : ""}`;
  if (hours > 0) return options.addSuffix ? `${hours} hour${hours > 1 ? "s" : ""} ago` : `${hours} hour${hours > 1 ? "s" : ""}`;
  return options.addSuffix ? `${minutes} minute${minutes > 1 ? "s" : ""} ago` : `${minutes} minute${minutes > 1 ? "s" : ""}`;
};

const formatDuration = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
};

const getLocationFlag = (location: string) => {
  const flags: Record<string, string> = {
    "United States": "🇺🇸",
    USA: "🇺🇸",
    India: "🇮🇳",
    "United Kingdom": "🇬🇧",
    UK: "🇬🇧",
    Canada: "🇨🇦",
    Germany: "🇩🇪"
  };
  return flags[location] || "🌍";
};

// --- Component ---
interface AnalyticsDashboardProps {
  onBack: () => void;
}

export function AnalyticsDashboard({ onBack }: AnalyticsDashboardProps) {
  const { analyticsData } = useAnalytics();
  const [userLocation, setUserLocation] = useState<{ country?: string; state?: string } | null>(null);

  // --- Fetch Browser Location ---
  useEffect(() => {
    const fetchLocation = async () => {
      let loc = { country: "Unknown", state: "Unknown" };

      // Try browser geolocation
      if (navigator.geolocation) {
        await new Promise<void>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              loc = { latitude: position.coords.latitude, longitude: position.coords.longitude } as any;
              resolve();
            },
            () => resolve(),
            { timeout: 10000 }
          );
        });
      }

      try {
        // Use IP-based fallback API
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        loc.country = data.country_name || "Unknown";
        loc.state = data.region || "Unknown";
      } catch (err) {
        console.warn("Location fetch failed:", err);
      }

      setUserLocation(loc);

      // Only send POST if backend route exists (or comment for now)
      try {
        await fetch(`${API_BASE}/api/analytics/update-location`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loc),
        });
      } catch {
        console.warn("POST to update-location failed, skipping for now");
      }
    };

    fetchLocation();
  }, []);


  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/feedback`);
        const data = await res.json();

        // calculate average rating
        const avg =
          data.length > 0
            ? data.reduce((sum, fb) => sum + (fb.rating || 0), 0) / data.length
            : 0;

        setFeedbacks(data);
        setAverageRating(avg);
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    };
    fetchFeedbacks();
  }, []);



  if (!analyticsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Loading analytics...</p>
      </div>
    );
  }

  const {
    totalVisits = 0,
    uniqueVisitors = 0,
    averageSessionDuration = 0,
    topPages = [],
    topLocations = [],
    pageVisits = [],
    contactSubmissions = [],
    userImpressions = []
  } = analyticsData;


  // --- Normalize Locations ---
  const normalizedLocations = topLocations.map((loc) => {
    let visits = (loc as any).visits || 1;
    let label = "Unknown";

    if (typeof loc === "string") label = loc;
    else if ("location" in loc) label = String((loc as any).location);
    else if ("country" in loc || "state" in loc) {
      const country = String((loc as any).country || "Unknown");
      const state = String((loc as any).state || "Unknown");

      if (state !== "Unknown" && country !== "Unknown") label = `${state}, ${country}`;
      else if (state !== "Unknown") label = state;
      else if (country !== "Unknown") label = country;
      else label = "Unknown";
    } else label = JSON.stringify(loc);

    return { label, visits };
  });

  // Optionally add current user location
  if (userLocation) {
    const userLabel =
      userLocation.state && userLocation.country
        ? `${userLocation.state}, ${userLocation.country}`
        : userLocation.country || userLocation.state || "Unknown";

    if (!normalizedLocations.some((loc) => loc.label === userLabel)) {
      normalizedLocations.unshift({ label: userLabel, visits: 1 });
    }
  }

  // --- Normalize User Impressions ---
  const normalizedImpressions = userImpressions.map((imp) => {
    let locationLabel = "Unknown";

    if (typeof imp.location === "string") {
      locationLabel = imp.location;
    } else if (imp.location && ("country" in imp.location || "state" in imp.location)) {
      const country = String((imp.location as any).country || "Unknown");
      const state = String((imp.location as any).state || "Unknown");

      if (state !== "Unknown" && country !== "Unknown") locationLabel = `${state}, ${country}`;
      else if (state !== "Unknown") locationLabel = state;
      else if (country !== "Unknown") locationLabel = country;
      else locationLabel = "Unknown";
    } else {
      locationLabel = JSON.stringify(imp.location);
    }

    return { ...imp, locationLabel };
  });


  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <Button variant="ghost" onClick={onBack} className="mb-6 hover:bg-accent">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Portfolio Analytics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights into portfolio performance, visitor engagement, and professional connections.
            </p>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard icon={<Eye className="h-6 w-6 text-blue-600" />} label="Total Visits" value={totalVisits.toLocaleString()} bg="bg-blue-100 bg-blue-900/20" />
          <MetricCard icon={<Users className="h-6 w-6 text-green-600" />} label="Unique Visitors" value={uniqueVisitors.toLocaleString()} bg="bg-green-100 bg-green-900/20" />
          <MetricCard icon={<Mail className="h-6 w-6 text-orange-600" />} label="Contact Inquiries" value={contactSubmissions.length} bg="bg-orange-100 bg-orange-900/20" />
          <MetricCard icon={<Clock className="h-6 w-6 text-purple-600" />} label="Avg. Session" value={formatDuration(averageSessionDuration)} bg="bg-purple-100 bg-purple-900/20" />
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="locations">Locations</TabsTrigger>
              <TabsTrigger value="feedbacks">User Impressions</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Top Pages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Top Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  {topPages.length > 0 ? topPages.map((page, idx) => (
                    <div key={`${page.page}-${idx}`} className="flex items-center justify-between mb-2">
                      <span>#{idx + 1} {page.page.replace("-", " ")}</span>
                      <Badge variant="secondary">{page.visits} visits</Badge>
                    </div>
                  )) : <p className="text-muted-foreground text-sm">No page data yet.</p>}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5" /> Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  {pageVisits.length > 0 ? pageVisits.slice(0, 5).map((visit, idx) => (
                    <div key={`${visit.page}-${visit.timestamp}-${idx}`} className="flex items-center justify-between mb-2">
                      <div>
                        <p>{visit.page.replace("-", " ")}</p>
                        <p className="text-sm text-muted-foreground">{formatDistanceToNow(new Date(visit.timestamp), { addSuffix: true })}</p>
                      </div>
                      <div className="text-right">
                        <p>{formatDuration(visit.duration)}</p>
                        <p className="text-xs text-muted-foreground">{typeof visit.location === "string" ? visit.location : JSON.stringify(visit.location)}</p>
                      </div>
                    </div>
                  )) : <p className="text-muted-foreground text-sm">No recent activity.</p>}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Locations Tab */}
            <TabsContent value="locations">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5" /> Visitor Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  {normalizedLocations.length > 0 ? normalizedLocations.map((loc, idx) => {
                    const maxVisits = normalizedLocations[0]?.visits || 1;
                    const widthPercent = (loc.visits / maxVisits) * 100;
                    return (
                      <div key={`${loc.label}-${idx}`} className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span>{getLocationFlag(loc.label.split(", ").pop() || "")}</span>
                          <span>{loc.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${widthPercent}%` }} />
                          </div>
                          <Badge variant="secondary">{loc.visits}</Badge>
                        </div>
                      </div>
                    );
                  }) : <p className="text-muted-foreground text-sm">No location data yet.</p>}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedbacks">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Overall Rating</h3>
                    <div className="flex items-center gap-2">
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                      <span className="text-2xl font-bold">
                        {averageRating ? averageRating.toFixed(1) : "0.0"}
                      </span>
                      <span className="text-muted-foreground">/5</span>
                    </div>
                  </div>
                </CardContent>

                <div className="grid gap-6 mt-6 p-6">
                  {feedbacks && feedbacks.length > 0 ? (
                    feedbacks.map((fb, idx) => (
                      <Card key={`${fb._id || fb.name}-${idx}`}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold">{fb.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {fb.role || "N/A"} at {fb.company || "N/A"}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < fb.rating
                                      ? "text-yellow-500 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <p className="text-sm mb-3 italic text-gray-800">
                            "{fb.feedback}"
                          </p>

                          <div className="flex items-center justify-between text-muted-foreground text-xs">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{fb.locationLabel || "Unknown"}</span>
                            </div>
                            <span>
                              {new Date(fb.timestamp).toLocaleDateString()}{" "}
                              {new Date(fb.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm px-6 pb-6">
                      No feedbacks yet.
                    </p>
                  )}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

// --- Metric Card ---
function MetricCard({ icon, label, value, bg }: { icon: React.ReactNode; label: string; value: string | number; bg: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className={`${bg} p-3 rounded-full`}>{icon}</div>
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

