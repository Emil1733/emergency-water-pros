import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityServices } from '@/lib/serviceData'
import dynamicImport from 'next/dynamic'
import Image from "next/image"
import EmergencyBanner from "@/components/EmergencyBanner"
import CityHeroSection from "@/components/CityHeroSection"
import Breadcrumbs from "@/components/Breadcrumbs"
import PageTracker from "@/components/PageTracker"
import NearbyCitiesSection from "@/components/NearbyCitiesSection"

// Lazy load below-the-fold components for better Core Web Vitals
const CityServicesSection = dynamicImport(() => import("@/components/CityServicesSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})
const CityTestimonialsSection = dynamicImport(() => import("@/components/CityTestimonialsSection"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
})
const ContactSection = dynamicImport(() => import("@/components/ContactSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})
const FAQSection = dynamicImport(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />
})

interface CityPageProps {
  params: {
    city: string
  }
}

// SOLUTION: Force dynamic rendering to avoid Jest worker issues
export const dynamic = 'force-dynamic'
export const dynamicParams = true

// Simple list to validate city exists without heavy CSV parsing during static generation
const VALID_CITIES = [
  'los-angeles', 'san-diego', 'san-francisco', 'san-jose', 
  'fresno', 'sacramento', 'long-beach', 'oakland', 
  'bakersfield', 'anaheim'
]

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  // Quick validation without heavy CSV parsing
  if (!VALID_CITIES.includes(params.city)) {
    return {
      title: 'City Not Found',
      description: 'City not found'
    }
  }

  try {
    // Only do full CSV parsing when we know the city is valid
    const cityServices = getCityServices(params.city)
    if (!cityServices.length) {
      return {
        title: 'City Not Found',
        description: 'City not found'
      }
    }
    
    const cityData = cityServices[0]
    const cityName = cityData.city
    const state = cityData.state_abbr
    
    return {
      title: `Water Damage Restoration in ${cityName}, ${state} | Emergency Response 24/7 | Emergency Water Pros`,
      description: `Emergency water damage restoration in ${cityName}, ${state} - 45-min response time! IICRC certified, direct insurance billing, 5-star rated. Available 24/7. Call (888) 680-6768 now!`,
      keywords: `water damage restoration ${cityName}, emergency water damage ${cityName}, flood cleanup ${cityName}, ${cityName} water damage contractor, ${state} water damage restoration`,
      openGraph: {
        title: `Water Damage Restoration in ${cityName}, ${state} | Emergency Water Pros`,
        description: `#1 ${cityName} water damage restoration company. 45-min emergency response, 5-star rated, direct insurance billing. Call (888) 680-6768 now!`,
        type: 'website',
        locale: 'en_US',
      },
      alternates: {
        canonical: `https://emergencywaterpros.com/${params.city}`
      }
    }
  } catch (error) {
    console.error('Error generating city metadata:', error)
    return {
      title: 'Emergency Water Pros',
      description: 'Professional water damage restoration services'
    }
  }
}

export default function CityPage({ params }: CityPageProps) {
  // Quick validation first
  if (!VALID_CITIES.includes(params.city)) {
    notFound()
  }

  let cityServices
  try {
    cityServices = getCityServices(params.city)
    if (!cityServices.length) {
      notFound()
    }
  } catch (error) {
    console.error('Error loading city services:', error)
    notFound()
  }
  
  const cityData = cityServices[0]
  
  return (
    <main className="min-h-screen">
      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Emergency Water Pros ${cityData.city}`,
            "description": `Professional water damage restoration services in ${cityData.city}`,
            "url": `https://emergencywaterpros.com/${params.city}`,
            "telephone": "+1-888-680-6768",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityData.city,
              "addressRegion": cityData.state_abbr,
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": cityData.lat || "0",
              "longitude": cityData.lon || "0"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "email": "help@emergencywaterpros.com",
            "logo": "https://emergencywaterpros.com/logo.png",
            "image": cityData.image_url,
            "serviceArea": {
              "@type": "City",
              "name": cityData.city,
              "addressRegion": cityData.state_abbr,
              "addressCountry": "US"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Water Damage Restoration Services",
              "itemListElement": cityServices.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.service,
                  "description": service.intro_paragraph
                }
              }))
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

      <PageTracker citySlug={params.city} />
      <EmergencyBanner />
      <Breadcrumbs items={[
        { label: cityData.city, href: `/${params.city}` }
      ]} />
      <div>
        <CityHeroSection cityData={cityData} />
        <CityServicesSection services={cityServices} citySlug={params.city} />
        <NearbyCitiesSection 
          currentCity={cityData.city}
          currentCitySlug={params.city}
        />
        <CityTestimonialsSection cityName={cityData.city} />
        <FAQSection cityName={cityData.city} />
        <ContactSection cityData={cityData} />
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
                Professional water damage restoration, mold remediation, and emergency response services in {cityData.city}, {cityData.state_abbr}. 
                Your trusted local partner in property restoration.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 body-text">
                {cityServices.map((service) => (
                  <li key={service.service_slug}>
                    <span className="hover:text-blue-400 transition-colors">
                      {service.service}
                    </span>
                  </li>
                ))}
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
                  <span>{cityData.city}, {cityData.state_abbr}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>24/7 Emergency Response</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 body-text">
            <p>&copy; 2024 Emergency Water Pros. All rights reserved. Licensed & Insured in {cityData.state}.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}