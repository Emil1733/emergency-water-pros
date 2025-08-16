'use client'

import { useEffect } from 'react'
import { trackServiceView } from '@/components/GoogleAnalytics'

interface PageTrackerProps {
  citySlug: string
  serviceSlug?: string
}

export default function PageTracker({ citySlug, serviceSlug }: PageTrackerProps) {
  useEffect(() => {
    // Track page view when component mounts
    trackServiceView(citySlug, serviceSlug)
  }, [citySlug, serviceSlug])

  // This component renders nothing, it's just for tracking
  return null
}