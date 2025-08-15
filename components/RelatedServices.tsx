'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface RelatedService {
  name: string
  slug: string
  description: string
  icon: string
}

interface RelatedServicesProps {
  citySlug: string
  currentService: string
  cityName: string
}

const allServices: RelatedService[] = [
  {
    name: "Water Damage Restoration",
    slug: "water-damage-restoration", 
    description: "Emergency water extraction and structural drying",
    icon: "💧"
  },
  {
    name: "Fire Damage Restoration",
    slug: "fire-damage-restoration",
    description: "Smoke, soot, and fire damage cleanup",
    icon: "🔥"
  },
  {
    name: "Mold Removal",
    slug: "mold-removal", 
    description: "Professional mold remediation and prevention",
    icon: "🦠"
  },
  {
    name: "Storm Damage Repair",
    slug: "storm-damage-repair",
    description: "Weather-related property damage restoration",
    icon: "⛈️"
  },
  {
    name: "Sewage Cleanup",
    slug: "sewage-cleanup",
    description: "Biohazard sewage and wastewater cleanup",
    icon: "🚽"
  },
  {
    name: "Basement Flood Cleanup",
    slug: "basement-flood-cleanup",
    description: "Basement water removal and restoration", 
    icon: "🏠"
  }
]

export default function RelatedServices({ citySlug, currentService, cityName }: RelatedServicesProps) {
  // Filter out current service and show 3 related services
  const relatedServices = allServices
    .filter(service => service.slug !== currentService)
    .slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl heading-primary text-gray-900 mb-4">
            Other Services in {cityName}
          </h2>
          <p className="text-lg text-gray-600 body-text">
            Emergency Water Pros provides comprehensive restoration services across {cityName}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Card key={service.slug} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl heading-secondary text-gray-900 mb-3 group-hover:text-water-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 body-text mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link 
                    href={`/${citySlug}/${service.slug}`}
                    className="inline-flex items-center gap-2 text-water-primary hover:text-water-secondary transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Services Link */}
        <div className="text-center mt-8">
          <Link 
            href={`/${citySlug}`}
            className="inline-flex items-center gap-2 text-lg text-water-primary hover:text-water-secondary transition-colors font-medium"
          >
            View All {cityName} Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}