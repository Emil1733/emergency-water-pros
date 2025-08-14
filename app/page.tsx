import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Emergency Water Pros | 24/7 Water Damage Restoration',
  description: '24/7 emergency water damage restoration services across California. IICRC certified technicians, direct insurance billing, and 45-minute response time guaranteed.',
  keywords: 'water damage restoration, emergency water damage, flood cleanup, mold remediation, fire damage restoration, California',
  openGraph: {
    title: 'Emergency Water Pros | 24/7 Water Damage Restoration',
    description: '24/7 emergency water damage restoration services across California. IICRC certified technicians, direct insurance billing.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://emergencywaterpros.com'
  }
}

// For now, redirect to the main water restoration page
// You can replace this with a dedicated homepage component later
export default function HomePage() {
  redirect('/water-restoration')
}

// Alternative: Create a proper homepage component
// Uncomment this and remove the redirect above if you want a dedicated homepage

/*
'use client'

import EmergencyBanner from "@/components/EmergencyBanner"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ProcessTimeline from "@/components/ProcessTimeline"
import TrustSection from "@/components/TrustSection"
import ContactSection from "@/components/ContactSection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <EmergencyBanner />
      <div className="pt-16">
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
    </main>
  )
}
*/