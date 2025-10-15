import { useEffect, useRef, useCallback } from 'react';
import { useAnalytics } from "../context/AnalyticsContext";

interface PageTrackerProps {
  page: string;
}

export function PageTracker({ page }: PageTrackerProps) {
  const analytics = useAnalytics();
  const currentPageRef = useRef(page);
  const startTimeRef = useRef<number>(Date.now());
  const hasTrackedRef = useRef<boolean>(false);

  // Stable functions using useCallback
  const trackVisit = useCallback((pageName: string) => {
    if (!hasTrackedRef.current || currentPageRef.current !== pageName) {
      analytics.trackPageVisit(pageName);
      startTimeRef.current = Date.now();
      currentPageRef.current = pageName;
      hasTrackedRef.current = true;
    }
  }, [analytics.trackPageVisit]);

  const updateDuration = useCallback(() => {
    if (hasTrackedRef.current) {
      analytics.updatePageDuration(currentPageRef.current, startTimeRef.current);
    }
  }, [analytics.updatePageDuration]);

  // Track page changes
  useEffect(() => {
    if (page !== currentPageRef.current) {
      // Update duration for previous page
      updateDuration();
      // Track new page
      trackVisit(page);
    }
  }, [page, trackVisit, updateDuration]);

  // Track visibility and unload events
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        updateDuration();
      } else if (document.visibilityState === 'visible' && hasTrackedRef.current) {
        // Re-track visit when page becomes visible again
        trackVisit(currentPageRef.current);
      }
    };

    const handleBeforeUnload = () => {
      updateDuration();
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);

    // Initial tracking
    trackVisit(page);

    return () => {
      // Final duration update
      updateDuration();

      // Remove event listeners
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
    };
  }, []); // Empty dependency array - all logic uses refs

  return null; // This component doesn't render anything
}