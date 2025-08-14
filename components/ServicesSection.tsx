'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Flame, Zap, Home } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    description: "Complete water extraction, drying, and restoration services for floods, leaks, and burst pipes.",
    features: ["24/7 Emergency Response", "Advanced Drying Equipment", "Moisture Detection", "Structural Repairs"],
    color: "text-water-primary"
  },
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description: "Comprehensive fire and smoke damage cleanup, odor removal, and complete property restoration.",
    features: ["Smoke Odor Removal", "Soot Cleanup", "Content Restoration", "Structural Rebuilding"],
    color: "text-emergency"
  },
  {
    icon: Zap,
    title: "Mold Remediation",
    description: "Professional mold inspection, removal, and prevention to ensure a healthy living environment.",
    features: ["Mold Testing", "Safe Removal", "Air Purification", "Prevention Solutions"],
    color: "text-chart-4"
  },
  {
    icon: Home,
    title: "Emergency Services",
    description: "Immediate response for urgent situations requiring immediate attention and stabilization.",
    features: ["Board-Up Services", "Tarping", "Water Extraction", "Emergency Repairs"],
    color: "text-water-accent"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Complete Restoration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            From emergency response to complete restoration, we handle every aspect of property damage 
            with precision, care, and industry-leading expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden ${
                index % 2 === 0 ? 'md:translate-y-8' : ''
              }`}
            >
              <div className="absolute inset-0 water-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className={service.color} />
                </div>
                <CardTitle className="text-2xl heading-secondary text-gray-900 group-hover:text-water-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 body-text mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-water-primary rounded-full"></div>
                      <span className="text-gray-700 body-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-water-primary group-hover:text-white group-hover:border-water-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl water-gradient text-white shadow-2xl">
            <h3 className="text-2xl heading-secondary mb-4 text-black">
              Need Immediate Assistance?
            </h3>
            <p className="body-text mb-6 text-black">
              Our certified technicians are standing by 24/7 to help restore your property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                type="button"
                className="bg-white text-black border-black hover:bg-black hover:text-white"
                aria-label="Get free water damage assessment"
              >
                Get Free Assessment
              </Button>
              <Button 
                size="lg"
                variant="emergency"
                href="tel:+18009283791"
                aria-label="Call Emergency Water Pros hotline"
              >
                Emergency Hotline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}