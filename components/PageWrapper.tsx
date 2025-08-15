'use client'

import { ReactNode } from 'react'
import EmergencyBanner from './EmergencyBanner'
import Breadcrumbs from './Breadcrumbs'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageWrapperProps {
  children: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  className?: string
}

export default function PageWrapper({ children, breadcrumbs, className = '' }: PageWrapperProps) {
  return (
    <main className="min-h-screen">
      {/* Fixed Emergency Banner */}
      <EmergencyBanner />
      
      {/* Breadcrumbs (if provided) */}
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      
      {/* Content Container with Proper Spacing */}
      <div className={`
        ${breadcrumbs ? 'mt-[104px]' : 'mt-[56px]'}
        ${className}
      `}>
        {children}
      </div>
    </main>
  )
}

/* 
SPACING CALCULATIONS:
- Emergency Banner: 56px (py-3 = 24px + content height ~32px)
- Breadcrumbs: 48px (py-4 = 32px + content height ~16px)
- Total with breadcrumbs: 104px
- Total without breadcrumbs: 56px

Using margin-top instead of padding-top for cleaner layout.
*/