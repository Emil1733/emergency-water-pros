'use client'

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {/* Home */}
          <li>
            <Link 
              href="/" 
              className="flex items-center gap-1 hover:text-water-primary transition-colors"
              aria-label="Go to homepage"
            >
              <Home size={16} />
              <span>Home</span>
            </Link>
          </li>
          
          {/* Dynamic breadcrumb items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              {item.href && index < items.length - 1 ? (
                <Link 
                  href={item.href}
                  className="hover:text-water-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}