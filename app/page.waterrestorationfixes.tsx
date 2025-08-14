'use client'

import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import TrustSection from "@/components/TrustSection"
import ContactSection from "@/components/ContactSection"

// Mock city data for ContactSection
const mockCityData = {
  service: "Water Damage Restoration",
  service_slug: "water-damage-restoration", 
  slug: "water-damage-restoration-los-angeles",
  city: "Los Angeles",
  city_slug: "los-angeles",
  state: "California", 
  state_abbr: "CA",
  population: 3898747,
  image_url: "",
  meta_title: "",
  meta_description: "",
  intro_paragraph: "",
  why_choose_us: "",
  map_embed_url: "https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Los+Angeles,+CA&t=&z=10&ie=UTF8&iwloc=B&output=embed",
  state_fips: "06",
  place_fips: "44000", 
  place_geoid: "0644000",
  place_type: "City",
  classfp: "C1",
  timezone: "America/Los_Angeles",
  service_keywords: "",
  msa_cbsa_code: "31080",
  county_name: "Los Angeles County",
  phone_placeholder: "",
  service_area_radius_miles: 50
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