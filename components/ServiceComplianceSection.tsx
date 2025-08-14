'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, FileCheck, Users, Clock, Zap } from "lucide-react"
import { ServiceData } from "@/lib/csvData"

interface ServiceComplianceSectionProps {
  serviceData: ServiceData
}

export default function ServiceComplianceSection({ serviceData }: ServiceComplianceSectionProps) {
  const certifications = [
    {
      title: "IICRC Certified",
      description: "Institute of Inspection Cleaning and Restoration Certification",
      icon: Award,
      color: "bg-chart-4/10 text-chart-4"
    },
    {
      title: `${serviceData.state_abbr} Licensed`,
      description: `Fully licensed contractor in ${serviceData.state}`,
      icon: Shield,
      color: "bg-water-primary/10 text-water-primary"
    },
    {
      title: "Fully Insured", 
      description: "Comprehensive liability and workers compensation insurance",
      icon: FileCheck,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "EPA Compliant",
      description: "Environmental Protection Agency compliant procedures",
      icon: Shield,
      color: "bg-green-100 text-green-700"
    }
  ]

  const qualityStandards = [
    {
      title: "24/7 Emergency Response",
      description: "Around-the-clock availability for emergency situations",
      icon: Clock,
      stat: "24/7"
    },
    {
      title: "Rapid Response Time", 
      description: `Guaranteed arrival within 45 minutes in ${serviceData.city}`,
      icon: Zap,
      stat: "45 min"
    },
    {
      title: "Certified Technicians",
      description: "All technicians are IICRC certified professionals",
      icon: Users,
      stat: "100%"
    },
    {
      title: "Customer Satisfaction",
      description: "Backed by our 100% satisfaction guarantee",
      icon: Award,
      stat: "100%"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-chart-4/10 text-chart-4 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield size={16} />
            <span>Licensed & Certified</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Trusted <span className="text-chart-4">{serviceData.service}</span> Professionals
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            When you choose Emergency Water Pros for {serviceData.service.toLowerCase()} in {serviceData.city}, you're getting a fully licensed, 
            insured, and certified restoration company that meets the highest industry standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${cert.color} rounded-full flex items-center justify-center`}>
                    <IconComponent size={24} />
                  </div>
                  
                  <h3 className="text-lg heading-secondary text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-600 body-text text-sm">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quality Standards */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl heading-secondary text-gray-900 mb-4">
              Our Quality Standards
            </h3>
            <p className="text-gray-600 body-text max-w-2xl mx-auto">
              We maintain the highest standards for {serviceData.service.toLowerCase()} services in {serviceData.city}, 
              ensuring quality workmanship and complete customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-water-primary text-white rounded-full flex items-center justify-center">
                      <IconComponent size={28} />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge variant="secondary" className="bg-white text-water-primary font-bold px-3 py-1">
                        {standard.stat}
                      </Badge>
                    </div>
                  </div>
                  
                  <h4 className="text-lg heading-secondary text-gray-900 mb-2">
                    {standard.title}
                  </h4>
                  
                  <p className="text-gray-600 body-text text-sm">
                    {standard.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Insurance & Warranty Information */}
        <div className="bg-water-primary rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield size={32} className="text-white/60" />
              <h3 className="text-3xl heading-secondary">
                Fully Protected Service
              </h3>
            </div>
            
            <p className="text-white/80 body-text mb-6 text-lg">
              Every {serviceData.service.toLowerCase()} project in {serviceData.city} is backed by comprehensive insurance coverage, 
              industry certifications, and our satisfaction guarantee. Your property and peace of mind are our top priorities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-water-secondary/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-lg font-semibold mb-1">Liability Coverage</div>
                <div className="text-white/80 text-sm">$2M general liability insurance</div>
              </div>
              
              <div className="bg-water-secondary/50 rounded-lg p-4">
                <div className="text-2xl mb-2">👥</div>
                <div className="text-lg font-semibold mb-1">Workers Comp</div>
                <div className="text-white/80 text-sm">Full workers compensation coverage</div>
              </div>
              
              <div className="bg-water-secondary/50 rounded-lg p-4">
                <div className="text-2xl mb-2">✅</div>
                <div className="text-lg font-semibold mb-1">Satisfaction Guarantee</div>
                <div className="text-white/80 text-sm">100% satisfaction guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}