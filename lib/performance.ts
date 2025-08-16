// Core Web Vitals monitoring for Emergency Water Pros
// Track real-world performance metrics

export interface PerformanceMetric {
  name: string
  value: number
  delta: number
  id: string
  navigationType?: string
}

// Send performance data to analytics
function sendToAnalytics(metric: PerformanceMetric & { rating?: string }) {
  // Log to console for development/debugging
  console.log('Performance Metric:', {
    metric: metric.name,
    value: Math.round(metric.value),
    delta: Math.round(metric.delta),
    rating: metric.rating,
    id: metric.id,
    url: window.location.href,
    timestamp: new Date().toISOString()
  })

  // Send to Google Analytics 4 if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_delta: Math.round(metric.delta),
      metric_rating: metric.rating,
      metric_id: metric.id,
      custom_map: {
        metric_name: 'custom_parameter_1',
        metric_value: 'custom_parameter_2'
      }
    })
  }
}

// Web Vitals thresholds
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 }, 
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
  import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
    // Largest Contentful Paint
    onLCP((metric) => {
      const rating = getPerformanceRating('LCP', metric.value)
      sendToAnalytics({ ...metric, rating } as any)
    })

    // Interaction to Next Paint (replaces FID)
    onINP((metric) => {
      const rating = getPerformanceRating('INP', metric.value)
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
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
        load: Math.round(navigation.loadEventEnd - navigation.fetchStart)
      }

      console.log('Page Load Metrics:', {
        ...metrics,
        url: window.location.href,
        timestamp: new Date().toISOString()
      })
    }
  })
}