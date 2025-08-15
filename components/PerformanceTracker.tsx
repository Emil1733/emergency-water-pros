'use client'

import { useEffect } from 'react'
import { initPerformanceTracking, trackPageLoad } from '@/lib/performance'

export default function PerformanceTracker() {
  useEffect(() => {
    // Initialize Core Web Vitals tracking
    initPerformanceTracking()
    
    // Track page load performance
    trackPageLoad()
  }, [])

  // This component renders nothing, it's just for tracking
  return null
}