import { Metadata } from 'next'
import EmergencyBanner from "@/components/EmergencyBanner"
import LAHeroSection from "@/components/LAHeroSection"
import LAServiceAreasSection from "@/components/LAServiceAreasSection"
import LADamageCausesSection from "@/components/LADamageCausesSection"
import LACaseStudiesSection from "@/components/LACaseStudiesSection"
import LAComplianceSection from "@/components/LAComplianceSection"
import LATestimonialsSection from "@/components/LATestimonialsSection"
import ContactSection from "@/components/ContactSection"

export const metadata: Metadata = {
  title: 'Water Damage Restoration Los Angeles | Emergency Response 24/7 | AquaRestore Pro',
  description: 'Professional water damage restoration services in Los Angeles. 24/7 emergency response across Hollywood, Beverly Hills, Santa Monica, Downtown LA. Licensed, insured, and IICRC certified.',
  keywords: 'water damage restoration Los Angeles, emergency water damage LA, flood cleanup Hollywood, Beverly Hills water damage, Santa Monica restoration, Downtown LA water damage, California water damage contractor',
  openGraph: {
    title: 'Water Damage Restoration Los Angeles | AquaRestore Pro',
    description: 'Expert water damage restoration across all Los Angeles neighborhoods. 20-minute emergency response, licensed & insured.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://aquarestorepro.com/los-angeles'
  }
}

export default function LosAngelesWaterRestorationPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AquaRestore Pro Los Angeles",
            "description": "Professional water damage restoration services in Los Angeles",
            "url": "https://aquarestorepro.com/los-angeles",
            "telephone": "+1-323-555-1234",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90210",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 34.0522,
              "longitude": -118.2437
            },
            "areaServed": [
              "Los Angeles",
              "Hollywood",
              "Beverly Hills",
              "Santa Monica",
              "West Hollywood",
              "Pasadena",
              "Downtown Los Angeles"
            ],
            "serviceType": [
              "Water Damage Restoration",
              "Emergency Water Extraction",
              "Flood Cleanup",
              "Mold Remediation",
              "Fire Damage Restoration"
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1247"
            }
          })
        }}
      />

      <EmergencyBanner />
      <div className="pt-16"> {/* Account for fixed emergency banner */}
        <LAHeroSection />
        <LAServiceAreasSection />
        <LADamageCausesSection />
        <LACaseStudiesSection />
        <LAComplianceSection />
        <LATestimonialsSection />
        <ContactSection cityData={{
          service: "Water Damage Restoration",
          service_slug: "water-damage-restoration",
          slug: "water-damage-restoration-los-angeles-ca",
          city: "Los Angeles",
          city_slug: "los-angeles",
          state: "California",
          state_abbr: "CA",
          population: 3857897,
          image_url: "",
          meta_title: "",
          meta_description: "",
          intro_paragraph: "",
          why_choose_us: "",
          map_embed_url: "https://www.google.com/maps?q=Los%20Angeles%2C%20CA&output=embed",
          state_fips: "06",
          place_fips: "44000",
          place_geoid: "0644000",
          place_type: "Incorporated Place",
          classfp: "",
          timezone: "America/Los_Angeles",
          service_keywords: "",
          msa_cbsa_code: "",
          county_name: "",
          phone_placeholder: "",
          service_area_radius_miles: 30
        }} />
      </div>
      
      {/* Footer with LA-specific information */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl heading-secondary mb-4">AquaRestore Pro Los Angeles</h3>
              <p className="text-gray-300 body-text mb-4 max-w-md">
                Los Angeles' premier water damage restoration company. Serving all LA neighborhoods 
                with 24/7 emergency response and expert restoration services.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">LA</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">LA Service Areas</h4>
              <ul className="space-y-2 text-gray-300 body-text">
                <li>Hollywood</li>
                <li>Beverly Hills</li>
                <li>Santa Monica</li>
                <li>West Hollywood</li>
                <li>Downtown LA</li>
                <li>Pasadena</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">Contact LA Office</h4>
              <ul className="space-y-2 text-gray-300 body-text">
                <li>Emergency: (323) 555-HELP</li>
                <li>Office: (323) 555-1234</li>
                <li>la@aquarestorepro.com</li>
                <li>123 Main St, LA 90210</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 body-text">
            <p>&copy; 2024 AquaRestore Pro Los Angeles. All rights reserved. CA License #123456 | Licensed, Bonded & Insured in California</p>
          </div>
        </div>
      </footer>
    </main>
  )
}