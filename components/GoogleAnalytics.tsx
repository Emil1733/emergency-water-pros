'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  // Don't render in development or if no GA ID is configured
  if (process.env.NODE_ENV === 'development' || !GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Export gtag function for use in other components
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
    timestamp: new Date().toISOString()
  })
}

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    phone_number: '(888) 680-6768',
    timestamp: new Date().toISOString()
  })
}

export const trackServiceView = (citySlug: string, serviceSlug?: string) => {
  trackEvent('service_view', {
    city: citySlug,
    service: serviceSlug || 'city_overview',
    timestamp: new Date().toISOString()
  })
}