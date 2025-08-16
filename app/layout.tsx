import type { Metadata } from 'next'
import './globals.css'
import PerformanceTracker from '@/components/PerformanceTracker'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Emergency Water Pros - Water Damage Restoration Experts',
  description: 'Professional water damage restoration, mold remediation, and emergency response services. Available 24/7 for immediate assistance.',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
        <PerformanceTracker />
      </body>
    </html>
  )
}