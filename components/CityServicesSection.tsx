'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight, Clock, Shield, Users, Zap } from "lucide-react"
import { ServiceData } from "@/lib/csvData"
import { scrollToContactWithFocus } from "@/lib/scrollUtils"

interface CityServicesSectionProps {
  services: ServiceData[]
  citySlug: string
}

const serviceIcons = {
  'water-damage-restoration': '💧',
  'fire-damage-restoration': '🔥',
  'mold-removal': '🦠',
  'storm-damage-repair': '⛈️',
  'sewage-cleanup': '🚽',
  'basement-flood-cleanup': '🏠'
}

export default function CityServicesSection({ services, citySlug }: CityServicesSectionProps) {
  const cityName = services[0]?.city || ''
  
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-water-primary/10 text-water-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield size={16} />
            <span>Professional Restoration Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Water Damage Services in <span className="text-water-primary">{cityName}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Emergency Water Pros provides comprehensive restoration services across {cityName}. 
            Our certified technicians respond within 45 minutes to minimize damage and restore your property.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.service_slug} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center">
                  {/* Service Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-water-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-water-primary group-hover:scale-110 transition-all duration-300">
                    <span className="group-hover:text-white transition-colors">
                      {serviceIcons[service.service_slug as keyof typeof serviceIcons] || '🔧'}
                    </span>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl heading-secondary text-gray-900 mb-4 group-hover:text-water-primary transition-colors">
                    {service.service}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 body-text mb-6 line-clamp-3">
                    {service.intro_paragraph}
                  </p>
                  
                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Clock size={14} className="text-water-primary" />
                      <span>24/7 Emergency Response</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Shield size={14} className="text-water-primary" />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users size={14} className="text-water-primary" />
                      <span>IICRC Certified Techs</span>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button 
                      asChild
                      className="w-full bg-water-primary hover:bg-water-secondary text-white rounded-lg group-hover:bg-emergency group-hover:hover:bg-emergency-hover transition-all duration-300"
                    >
                      <a href={`/${citySlug}/${service.service_slug}`}>
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-water-primary/30 text-water-primary hover:bg-water-primary/5 rounded-lg"
                    >
                      <Phone size={16} className="mr-2" />
                      <a href="tel:+18886806768">Call Now</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-water-primary rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap size={24} className="text-yellow-300" />
              <span className="text-lg font-medium">Emergency Response Available Now</span>
            </div>
            
            <h3 className="text-3xl heading-secondary mb-4">
              Need Water Damage Help in {cityName}?
            </h3>
            
            <p className="text-white/80 body-text mb-6">
              Don't wait - water damage gets worse every minute. Our certified restoration experts 
              are standing by 24/7 to help protect your {cityName} property.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-emergency hover:bg-emergency-hover text-emergency-foreground px-8 py-4 rounded-full shadow-lg"
              >
                <Phone className="mr-2" size={20} />
                <a href="tel:+18886806768">Emergency: (888) 680-6768</a>
              </Button>
              
              <Button 
                variant="outline-light" 
                size="lg"
                className="hover:text-water-primary px-8 py-4 rounded-full"
                onClick={scrollToContactWithFocus}
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}