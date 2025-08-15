import type { Metadata } from 'next'
import './globals.css'
import PerformanceTracker from '@/components/PerformanceTracker'

export const metadata: Metadata = {
  title: 'Emergency Water Pros - Water Damage Restoration Experts',
  description: 'Professional water damage restoration, mold remediation, and emergency response services. Available 24/7 for immediate assistance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <PerformanceTracker />
      </body>
    </html>
  )
}