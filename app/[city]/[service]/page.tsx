import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getCitiesData, loadServiceData } from '@/lib/serviceData'
import dynamicImport from 'next/dynamic'
import Image from "next/image"
import EmergencyBanner from "@/components/EmergencyBanner"
import ServiceHeroSection from "@/components/ServiceHeroSection"
import Breadcrumbs from "@/components/Breadcrumbs"
import PageTracker from "@/components/PageTracker"
import NearbyCitiesSection from "@/components/NearbyCitiesSection"

// Lazy load below-the-fold components for better performance
const ServiceProcessSection = dynamicImport(() => import("@/components/ServiceProcessSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})
const ServiceTestimonialsSection = dynamicImport(() => import("@/components/ServiceTestimonialsSection"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
})
const ServiceComplianceSection = dynamicImport(() => import("@/components/ServiceComplianceSection"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
})
const ContactSection = dynamicImport(() => import("@/components/ContactSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})
const RelatedServices = dynamicImport(() => import("@/components/RelatedServices"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
})
const FAQSection = dynamicImport(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
})

interface ServicePageProps {
  params: {
    city: string
    service: string
  }
}

// SOLUTION: Force dynamic rendering to avoid Jest worker issues
export const dynamicParams = true
export const dynamic = 'force-dynamic'

// Simple validation lists to avoid heavy CSV parsing during static generation
const VALID_CITIES = [
  // California cities (original 10)
  'los-angeles', 'san-diego', 'san-francisco', 'san-jose', 
  'fresno', 'sacramento', 'long-beach', 'oakland', 
  'bakersfield', 'anaheim',
  // National expansion cities (10)
  'new-york', 'chicago', 'houston', 'phoenix',
  'philadelphia', 'san-antonio', 'dallas', 'austin',
  'jacksonville', 'fort-worth',
  // Strategic expansion cities (5) - August 2025
  'miami', 'denver', 'seattle', 'atlanta', 'las-vegas'
]

const VALID_SERVICES = [
  'water-damage-restoration', 'fire-damage-restoration', 'mold-removal',
  'storm-damage-repair', 'sewage-cleanup', 'basement-flood-cleanup'
]

export async function generateStaticParams() {
  // Return empty array to disable static generation in development
  if (process.env.NODE_ENV === 'development') {
    return []
  }
  
  try {
    const allServices = loadServiceData()
    console.log(`Generating ${allServices.length} service params`)
    return allServices.map((service) => ({
      city: service.city_slug,
      service: service.service_slug,
    }))
  } catch (error) {
    console.error('Error generating service static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const serviceData = getServiceBySlug(params.city, params.service)
  if (!serviceData) {
    return {
      title: 'Service Not Found',
      description: 'Service not found'
    }
  }
  
  return {
    title: serviceData.meta_title,
    description: `${serviceData.service} in ${serviceData.city}, ${serviceData.state_abbr} - 45-min emergency response! IICRC certified, 5-star rated, direct insurance billing. Available 24/7. Call (888) 680-6768 now!`,
    keywords: serviceData.service_keywords,
    openGraph: {
      title: serviceData.meta_title,
      description: `#1 ${serviceData.service.toLowerCase()} company in ${serviceData.city}. 45-min response, 5-star rated, direct insurance billing. Call (888) 680-6768!`,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: serviceData.image_url,
          width: 1200,
          height: 630,
          alt: `${serviceData.service} in ${serviceData.city}`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.emergencywaterpros.com/${params.city}/${params.service}`
    }
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceData = getServiceBySlug(params.city, params.service)
  
  if (!serviceData) {
    notFound()
  }
  
  return (
    <main className="min-h-screen">
      {/* Structured Data for Service SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Emergency Water Pros ${serviceData.city}`,
            "description": serviceData.intro_paragraph,
            "url": `https://emergencywaterpros.com/${params.city}/${params.service}`,
            "telephone": "+1-888-680-6768",
            "email": "help@emergencywaterpros.com",
            "logo": "https://emergencywaterpros.com/logo.png",
            "image": serviceData.image_url,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": serviceData.city,
              "addressRegion": serviceData.state_abbr,
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": serviceData.lat || "0",
              "longitude": serviceData.lon || "0"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "City",
              "name": serviceData.city,
              "addressRegion": serviceData.state_abbr,
              "addressCountry": "US"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Sarah Johnson"
                },
                "reviewBody": `Excellent ${serviceData.service.toLowerCase()} service in ${serviceData.city}. Professional team, fast response, and quality work.`
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": serviceData.service,
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": serviceData.service,
                    "description": serviceData.intro_paragraph,
                    "serviceType": serviceData.service,
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Emergency Water Pros",
                      "telephone": "+1-888-680-6768"
                    },
                    "areaServed": {
                      "@type": "City",
                      "name": serviceData.city,
                      "addressRegion": serviceData.state_abbr
                    },
                    "availability": "https://schema.org/InStock",
                    "businessFunction": "https://schema.org/Sell"
                  },
                  "availability": "https://schema.org/InStock",
                  "businessFunction": "https://schema.org/Sell"
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/emergencywaterpros",
              "https://www.linkedin.com/company/emergencywaterpros",
              "https://www.bbb.org/us/ca/emergencywaterpros"
            ],
            "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
            "currenciesAccepted": "USD"
          })
        }}
      />

      <PageTracker citySlug={params.city} serviceSlug={params.service} />
      <EmergencyBanner />
      <Breadcrumbs items={[
        { label: serviceData.city, href: `/${params.city}` },
        { label: 'Services', href: `/${params.city}#services` },
        { label: serviceData.service }
      ]} />
      <div>
        <ServiceHeroSection serviceData={serviceData} />
        <ServiceProcessSection serviceData={serviceData} />
        <ServiceComplianceSection serviceData={serviceData} />
        <ServiceTestimonialsSection serviceData={serviceData} />
        <RelatedServices 
          citySlug={params.city} 
          currentService={params.service}
          cityName={serviceData.city}
        />
        <NearbyCitiesSection 
          currentCity={serviceData.city}
          currentCitySlug={params.city}
          serviceType={params.service}
        />
        <FAQSection cityName={serviceData.city} serviceName={serviceData.service} />
        <ContactSection cityData={serviceData} />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-4">
                <Image
                  src="/images/logo-desktop.svg"
                  alt="Emergency Water Pros"
                  width={220}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </div>
              <p className="text-gray-300 body-text mb-4 max-w-md">
                Professional {serviceData.service.toLowerCase()} and emergency response services in {serviceData.city}, {serviceData.state_abbr}. 
                Your trusted local partner in property restoration.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 body-text">
                <li>
                  <a href={`/${params.city}`} className="hover:text-blue-400 transition-colors">
                    All Services in {serviceData.city}
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">
                    Get Free Estimate
                  </a>
                </li>
                <li>
                  <a href="tel:+18886806768" className="hover:text-blue-400 transition-colors">
                    Emergency Hotline
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300 body-text">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+18886806768" className="hover:text-blue-400 transition-colors">
                    (888) 680-6768
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>help@emergencywaterpros.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Serving {serviceData.city}, {serviceData.state_abbr}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>24/7 Emergency Response</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">Service Area</h4>
              <div className="text-gray-300 body-text">
                <p className="mb-2">Serving {serviceData.city} and surrounding areas within {serviceData.service_area_radius_miles} miles.</p>
                <p className="text-sm">Licensed & insured in {serviceData.state}.</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 body-text">
            <p>&copy; 2024 Emergency Water Pros. All rights reserved. Licensed & Insured in {serviceData.state}.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}