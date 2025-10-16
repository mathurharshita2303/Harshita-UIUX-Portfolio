import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import API_BASE from "../config";


export interface UserImpression {
  id?: string;
  name: string;
  role?: string;
  company?: string;
  rating: number;
  feedback: string;
  location?: string;
  timestamp: number;
  verified?: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
}

export interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  topPages: { page: string; visits: number }[];
  topLocations: { location: string; visits: number }[];
  contactSubmissions: any[];
  userImpressions: UserImpression[];
  pageVisits: any[];
  userLocation: string; // store location on first visit
}

export interface AnalyticsContextType {
  analyticsData: AnalyticsData | null;
  trackPageVisit: (page: string) => void;
  trackContactSubmission: (data: ContactSubmission) => void;
  addUserImpression: (data: Partial<UserImpression>) => void;
  updatePageDuration: (page: string, startTime: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [userLocation, setUserLocation] = useState<string>("Unknown");

  // --- Get browser info ---
  const getBrowserInfo = () => {
    const ua = navigator.userAgent;
    if (ua.includes("Edg")) return "Edge";
    if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
    if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
    if (ua.includes("Firefox")) return "Firefox";
    return "Unknown";
  };

  // --- Prompt location on first page load ---
  const requestLocation = useCallback(async () => {
    if (!navigator.geolocation) return "Unknown";
    return new Promise<string>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = `${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)}`;
          setUserLocation(loc);
          resolve(loc);
        },
        () => resolve("Unknown"),
        { timeout: 10000 }
      );
    });
  }, []);

  // --- Fetch analytics summary ---
  const fetchAnalytics = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/analytics/summary`);
      const json = await res.json();
      if (!json.success) return;

      const fixedImpressions: UserImpression[] = (json.userImpressions || []).map((imp: any) => ({
        ...imp,
        location: imp.location || "Unknown",
      }));

      setAnalyticsData({
        ...json,
        userImpressions: fixedImpressions,
        userLocation: userLocation || "Unknown",
      });
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
    }
  }, [userLocation]);

  // --- Track page visit ---
  const trackPageVisit = useCallback(async (page: string) => {
    try {
      const location = userLocation || (await requestLocation());
      await fetch(`${API_BASE}/analytics/visit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page,
          duration: 0,
          userAgent: getBrowserInfo(),
          location,
        }),
      });
    } catch (err) {
      console.error("Failed to track page visit:", err);
    }
  }, [userLocation, requestLocation]);

  // --- Track contact submission ---
  const trackContactSubmission = useCallback(async (data: ContactSubmission) => {
    try {
      const location = userLocation || (await requestLocation());
      await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, location, timestamp: Date.now() }),
      });
    } catch (err) {
      console.error("Failed to track contact:", err);
    }
  }, [userLocation, requestLocation]);

  // --- Add user impression / feedback ---
  const addUserImpression = useCallback(async (data: Partial<UserImpression>) => {
    try {
      const location = userLocation || (await requestLocation());
      const newFeedback: UserImpression = {
        name: data.name || "Anonymous",
        role: data.role || "N/A",
        company: data.company || "N/A",
        rating: data.rating || 0,
        feedback: data.feedback || "No feedback provided.",
        location,
        timestamp: Date.now(),
        verified: false,
        id: Date.now().toString(),
      };

      const res = await fetch(`${API_BASE}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      });
      const result = await res.json();

      if (result.success && analyticsData) {
        setAnalyticsData({
          ...analyticsData,
          userImpressions: [newFeedback, ...analyticsData.userImpressions],
        });
      }
    } catch (err) {
      console.error("Failed to add feedback:", err);
    }
  }, [analyticsData, userLocation, requestLocation]);

  // --- Update page duration ---
  const updatePageDuration = useCallback(async (page: string, startTime: number) => {
    try {
      const location = userLocation || (await requestLocation());
      await fetch(`${API_BASE}/analytics/visit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page,
          duration: Date.now() - startTime,
          userAgent: getBrowserInfo(),
          location,
        }),
      });
    } catch (err) {
      console.error("Failed to update page duration:", err);
    }
  }, [userLocation, requestLocation]);

  // --- On mount, request location and fetch analytics ---
  useEffect(() => {
    requestLocation().then(() => fetchAnalytics());
  }, [fetchAnalytics, requestLocation]);

  return (
    <AnalyticsContext.Provider
      value={{
        analyticsData,
        trackPageVisit,
        trackContactSubmission,
        addUserImpression,
        updatePageDuration,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

// --- Hook ---
export function useAnalytics(): AnalyticsContextType {
  const ctx = useContext(AnalyticsContext);
  if (!ctx) throw new Error("useAnalytics must be used within AnalyticsProvider");
  return ctx;
}
