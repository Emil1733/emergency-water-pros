'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin } from "lucide-react"

interface NearbyCitiesSectionProps {
  currentCity: string
  currentCitySlug: string
  serviceType?: string // If on service page, show same service in nearby cities
}

// California cities served - organized by region for better recommendations
const nearbyMapping: Record<string, string[]> = {
  'los-angeles': ['san-diego', 'san-francisco', 'long-beach', 'anaheim'],
  'san-diego': ['los-angeles', 'long-beach', 'anaheim', 'san-jose'],
  'san-francisco': ['oakland', 'san-jose', 'sacramento', 'los-angeles'],
  'san-jose': ['san-francisco', 'oakland', 'sacramento', 'fresno'],
  'oakland': ['san-francisco', 'san-jose', 'sacramento', 'fresno'],
  'sacramento': ['san-francisco', 'fresno', 'oakland', 'san-jose'],
  'fresno': ['sacramento', 'bakersfield', 'san-jose', 'los-angeles'],
  'bakersfield': ['fresno', 'los-angeles', 'long-beach', 'anaheim'],
  'long-beach': ['los-angeles', 'anaheim', 'san-diego', 'bakersfield'],
  'anaheim': ['los-angeles', 'long-beach', 'san-diego', 'bakersfield']
}

const cityNames: Record<string, string> = {
  'los-angeles': 'Los Angeles',
  'san-diego': 'San Diego', 
  'san-francisco': 'San Francisco',
  'san-jose': 'San Jose',
  'oakland': 'Oakland',
  'sacramento': 'Sacramento',
  'fresno': 'Fresno',
  'bakersfield': 'Bakersfield',
  'long-beach': 'Long Beach',
  'anaheim': 'Anaheim'
}

export default function NearbyCitiesSection({ currentCity, currentCitySlug, serviceType }: NearbyCitiesSectionProps) {
  const nearbySllugs = nearbyMapping[currentCitySlug] || []
  const nearbyCities = nearbySllugs.slice(0, 4) // Show 4 nearby cities

  if (nearbyCities.length === 0) return null

  const isServicePage = !!serviceType
  const linkPath = (citySlug: string) => 
    isServicePage ? `/${citySlug}/${serviceType}` : `/${citySlug}`

  const sectionTitle = isServicePage 
    ? `${serviceType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} in Nearby Cities`
    : `Emergency Water Damage Services in Nearby Cities`

  const sectionDescription = isServicePage
    ? `Professional ${serviceType.replace(/-/g, ' ')} services available in surrounding areas`
    : `Emergency Water Pros serves these nearby California cities with the same professional standards`

  return (
    <section className="py-16 bg-water-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl heading-primary text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 body-text max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyCities.map((citySlug) => (
            <Card key={citySlug} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-water-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-water-primary/20 transition-colors">
                  <MapPin size={24} className="text-water-primary" />
                </div>
                <h3 className="text-lg heading-secondary text-gray-900 mb-3 group-hover:text-water-primary transition-colors">
                  {cityNames[citySlug]}
                </h3>
                <p className="text-gray-600 body-text text-sm mb-4">
                  {isServicePage ? 'Same-day emergency response' : '24/7 emergency services'}
                </p>
                <Link 
                  href={linkPath(citySlug)}
                  className="inline-flex items-center gap-2 text-water-primary hover:text-water-secondary transition-colors font-medium"
                >
                  {isServicePage ? 'Get Service' : 'Learn More'}
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Area Note */}
        <div className="text-center mt-8 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-600 body-text">
            <strong>Serving All of California:</strong> Emergency Water Pros provides rapid response 
            emergency services throughout California with local teams in each major metropolitan area.
          </p>
        </div>
      </div>
    </section>
  )
}