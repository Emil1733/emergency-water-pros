'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Clock, Shield, MapPin, Star } from "lucide-react"
import { ServiceData } from "@/lib/csvData"

interface ServiceHeroSectionProps {
  serviceData: ServiceData
}

const serviceIcons = {
  'water-damage-restoration': '💧',
  'fire-damage-restoration': '🔥',
  'mold-removal': '🦠',
  'storm-damage-repair': '⛈️',
  'sewage-cleanup': '🚽',
  'basement-flood-cleanup': '🏠'
}

export default function ServiceHeroSection({ serviceData }: ServiceHeroSectionProps) {
  const serviceIcon = serviceIcons[serviceData.service_slug as keyof typeof serviceIcons] || '🔧'
  
  return (
    <section className="relative min-h-[calc(100vh-var(--total-header-with-breadcrumbs))] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={serviceData.image_url}
          alt={`${serviceData.service} in ${serviceData.city}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-[var(--water-primary)]/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-water-secondary/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-water-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-water-secondary/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Service Badge */}
          <div className="inline-flex items-center gap-3 bg-water-primary text-white px-6 py-3 rounded-full text-sm font-medium">
            <span className="text-xl">{serviceIcon}</span>
            <span>{serviceData.service} Specialists</span>
          </div>

          {/* Emergency Banner */}
          <div className="inline-flex items-center gap-2 bg-emergency text-emergency-foreground px-6 py-3 rounded-full text-sm font-medium animate-pulse">
            <Phone size={16} />
            <span>24/7 Emergency Response in {serviceData.city}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            <span className="block heading-primary">{serviceData.service}</span>
            <span className="block heading-primary text-water-secondary/80 mt-2">{serviceData.city}, {serviceData.state_abbr}</span>
            <span className="block heading-primary text-water-secondary/60 mt-2 text-3xl md:text-4xl">Professional & Fast</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-water-secondary/60 max-w-3xl mx-auto body-text">
            {serviceData.intro_paragraph}
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto my-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Clock className="w-6 h-6 mx-auto mb-2 text-water-secondary/70" />
              <div className="text-sm font-medium">45-Min Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Shield className="w-6 h-6 mx-auto mb-2 text-water-secondary/70" />
              <div className="text-sm font-medium">Licensed & Insured</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <Star className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
              <div className="text-sm font-medium">IICRC Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-water-secondary/70" />
              <div className="text-sm font-medium">Local {serviceData.city} Team</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              variant="emergency"
              className="px-8 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2" size={20} />
              <a href="tel:+18886806768">Emergency: (888) 680-6768</a>
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              className="hover:text-water-primary px-8 py-6 text-lg rounded-full"
            >
              Free {serviceData.city} Estimate
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/80">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="body-text-medium">Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <span className="body-text-medium">Direct Insurance Billing</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="body-text-medium">Serving All {serviceData.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="body-text-medium">500+ Local Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}