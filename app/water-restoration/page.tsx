'use client'

import EmergencyBanner from "@/components/EmergencyBanner"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ProcessTimeline from "@/components/ProcessTimeline"
import TrustSection from "@/components/TrustSection"
import ContactSection from "@/components/ContactSection"

export default function WaterRestorationPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for Organization SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Emergency Water Pros",
            "description": "Professional 24/7 water damage restoration services across California. IICRC certified technicians, direct insurance billing, and emergency response.",
            "url": "https://emergencywaterpros.com",
            "logo": "https://emergencywaterpros.com/logo.png",
            "telephone": "+1-888-680-6768",
            "email": "help@emergencywaterpros.com",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "California",
              "addressCountry": "US"
            },
            "serviceArea": {
              "@type": "State",
              "name": "California"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Water Damage Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Damage Restoration",
                    "description": "Complete water damage restoration including extraction, drying, and structural repairs"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fire Damage Restoration",
                    "description": "Fire and smoke damage cleanup and restoration services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Mold Removal",
                    "description": "Professional mold remediation and prevention services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Storm Damage Repair", 
                    "description": "Storm and flood damage repair and restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewage Cleanup",
                    "description": "Safe sewage and contaminated water cleanup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basement Flood Cleanup",
                    "description": "Basement flooding restoration and waterproofing"
                  }
                }
              ]
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "areaServed": [
              {
                "@type": "City",
                "name": "Los Angeles"
              },
              {
                "@type": "City", 
                "name": "San Diego"
              },
              {
                "@type": "City",
                "name": "San Francisco"
              },
              {
                "@type": "City",
                "name": "San Jose"
              },
              {
                "@type": "City",
                "name": "Fresno"
              },
              {
                "@type": "City",
                "name": "Sacramento"
              },
              {
                "@type": "City",
                "name": "Long Beach"
              },
              {
                "@type": "City",
                "name": "Oakland"
              },
              {
                "@type": "City",
                "name": "Bakersfield"
              },
              {
                "@type": "City",
                "name": "Anaheim"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/emergencywaterpros",
              "https://www.linkedin.com/company/emergencywaterpros",
              "https://www.bbb.org/us/ca/emergencywaterpros"
            ]
          })
        }}
      />

      <EmergencyBanner />
      <div className="pt-16"> {/* Account for fixed emergency banner */}
        <HeroSection />
        <ServicesSection />
        <ProcessTimeline />
        <TrustSection />
        <ContactSection cityData={{
          service: "Water Damage Restoration",
          service_slug: "water-damage-restoration",
          slug: "water-damage-restoration-california",
          city: "California",
          city_slug: "california",
          state: "California",
          state_abbr: "CA",
          population: 39538223,
          image_url: "",
          meta_title: "",
          meta_description: "",
          intro_paragraph: "",
          why_choose_us: "",
          map_embed_url: "https://www.google.com/maps?q=California&output=embed",
          state_fips: "06",
          place_fips: "00000",
          place_geoid: "06",
          place_type: "State",
          classfp: "",
          timezone: "America/Los_Angeles",
          service_keywords: "",
          msa_cbsa_code: "",
          county_name: "",
          phone_placeholder: "",
          service_area_radius_miles: 50
        }} />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl heading-secondary mb-4">Emergency Water Pros</h3>
              <p className="text-gray-300 body-text mb-4 max-w-md">
                Professional water damage restoration, mold remediation, and emergency response services. 
                Your trusted partner in property restoration.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AR</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 body-text">
                <li>Water Damage Restoration</li>
                <li>Fire Damage Cleanup</li>
                <li>Mold Remediation</li>
                <li>Emergency Response</li>
                <li>Structural Drying</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg heading-secondary mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300 body-text">
                <li>Emergency: (888) 680-6768</li>
                <li>Office: (888) 680-6768</li>
                <li>help@emergencywaterpros.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 body-text">
            <p>&copy; 2024 Emergency Water Pros. All rights reserved. Licensed, Bonded & Insured.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}