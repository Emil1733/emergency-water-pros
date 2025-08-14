import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AquaRestore Pro - Water Damage Restoration Experts',
  description: 'Professional water damage restoration, mold remediation, and emergency response services. Available 24/7 for immediate assistance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}