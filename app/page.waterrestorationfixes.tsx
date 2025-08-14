'use client'

import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import TrustSection from "@/components/TrustSection"
import ContactSection from "@/components/ContactSection"

// Mock city data for ContactSection
const mockCityData = {
  city: "Los Angeles",
  state: "California", 
  state_abbr: "CA",
  service_area_radius_miles: 50,
  map_embed_url: "https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Los+Angeles,+CA&t=&z=10&ie=UTF8&iwloc=B&output=embed"
}

export default function WaterRestorationFixesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <ContactSection cityData={mockCityData} serviceType="water-damage" />
    </main>
  )
}