// Core Web Vitals monitoring for Emergency Water Pros
// Track real-world performance metrics

export interface PerformanceMetric {
  name: string
  value: number
  delta: number
  id: string
  navigationType?: string
}

// Send performance data to analytics (placeholder for future implementation)
function sendToAnalytics(metric: PerformanceMetric) {
  // Log to console for now - replace with actual analytics endpoint
  console.log('Performance Metric:', {
    metric: metric.name,
    value: Math.round(metric.value),
    delta: Math.round(metric.delta),
    id: metric.id,
    url: window.location.href,
    timestamp: new Date().toISOString()
  })

  // TODO: Send to Google Analytics 4 or other analytics service
  // gtag('event', 'web_vitals', {
  //   metric_name: metric.name,
  //   metric_value: Math.round(metric.value),
  //   metric_delta: Math.round(metric.delta),
  //   metric_id: metric.id
  // })
}

// Web Vitals thresholds
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 }, 
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 },
  FCP: { good: 1800, poor: 3000 }
}

// Get performance rating
function getPerformanceRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[metricName as keyof typeof THRESHOLDS]
  if (!threshold) return 'good'
  
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

// Initialize Core Web Vitals tracking
export function initPerformanceTracking() {
  // Only run in browser
  if (typeof window === 'undefined') return

  // Dynamic import of web-vitals library
  import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
    // Largest Contentful Paint
    onLCP((metric) => {
      const rating = getPerformanceRating('LCP', metric.value)
      sendToAnalytics({ ...metric, rating } as any)
    })

    // First Input Delay
    onFID((metric) => {
      const rating = getPerformanceRating('FID', metric.value)
      sendToAnalytics({ ...metric, rating } as any)
    })

    // Cumulative Layout Shift
    onCLS((metric) => {
      const rating = getPerformanceRating('CLS', metric.value)
      sendToAnalytics({ ...metric, rating } as any)
    })

    // First Contentful Paint
    onFCP((metric) => {
      const rating = getPerformanceRating('FCP', metric.value)
      sendToAnalytics({ ...metric, rating } as any)
    })

    // Time to First Byte
    onTTFB((metric) => {
      const rating = getPerformanceRating('TTFB', metric.value)
      sendToAnalytics({ ...metric, rating } as any)
    })
  }).catch((error) => {
    console.warn('Failed to load web-vitals library:', error)
  })
}

// Track page navigation performance
export function trackPageLoad() {
  if (typeof window === 'undefined') return

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    if (navigation) {
      // Track key timing metrics
      const metrics = {
        dns: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
        connect: Math.round(navigation.connectEnd - navigation.connectStart),
        ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        download: Math.round(navigation.responseEnd - navigation.responseStart),
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart),
        load: Math.round(navigation.loadEventEnd - navigation.navigationStart)
      }

      console.log('Page Load Metrics:', {
        ...metrics,
        url: window.location.href,
        timestamp: new Date().toISOString()
      })
    }
  })
}