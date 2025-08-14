'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, Clock, Shield, Users, Zap } from "lucide-react"
import { ServiceData } from "@/lib/csvData"

interface ServiceProcessSectionProps {
  serviceData: ServiceData
}

const processSteps = [
  {
    step: "1",
    title: "Emergency Call",
    description: "Call us 24/7 and speak directly with our emergency dispatch team. We'll gather details about your situation and dispatch a certified technician immediately.",
    icon: Phone,
    duration: "Immediate"
  },
  {
    step: "2", 
    title: "Rapid Response",
    description: "Our certified restoration experts arrive within 45 minutes with professional equipment and begin assessment and damage mitigation right away.",
    icon: Zap,
    duration: "45 Minutes"
  },
  {
    step: "3",
    title: "Damage Assessment", 
    description: "We conduct a thorough inspection using advanced moisture detection equipment and provide you with a detailed assessment and restoration plan.",
    icon: CheckCircle,
    duration: "1-2 Hours"
  },
  {
    step: "4",
    title: "Insurance Coordination",
    description: "We work directly with your insurance company, handling all documentation and communication to ensure maximum coverage for your claim.",
    icon: Shield,
    duration: "Same Day"
  },
  {
    step: "5",
    title: "Professional Restoration", 
    description: "Our IICRC-certified technicians use industry-leading equipment and techniques to restore your property to pre-loss condition or better.",
    icon: Users,
    duration: "2-7 Days"
  },
  {
    step: "6",
    title: "Final Inspection",
    description: "We conduct a comprehensive final inspection and provide you with documentation of all work completed, ensuring your complete satisfaction.",
    icon: CheckCircle,
    duration: "Final Day"
  }
]

export default function ServiceProcessSection({ serviceData }: ServiceProcessSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock size={16} />
            <span>Our Proven Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            How We Handle <span className="text-blue-600">{serviceData.service}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Our streamlined 6-step process ensures rapid response, thorough restoration, and complete customer satisfaction for {serviceData.service.toLowerCase()} in {serviceData.city}.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={step.step} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 transition-colors">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <IconComponent size={20} className="text-blue-500 group-hover:text-blue-600 transition-colors" />
                        <h3 className="text-xl heading-secondary text-gray-900 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                        <div className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                          {step.duration}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 body-text leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-blue-500 rounded-2xl p-8 text-white mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl heading-secondary mb-6">
              Why {serviceData.city} Chooses Emergency Water Pros
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-lg font-semibold mb-1">Lightning Fast</div>
                <div className="text-blue-100 text-sm">45-minute response time guaranteed</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-lg font-semibold mb-1">Certified Experts</div>
                <div className="text-blue-100 text-sm">IICRC certified restoration specialists</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <div className="text-lg font-semibold mb-1">Insurance Direct</div>
                <div className="text-blue-100 text-sm">We handle all insurance paperwork</div>
              </div>
            </div>

            <div className="bg-blue-600/50 rounded-lg p-6 mb-6">
              <p className="text-blue-100 body-text italic">
                "{serviceData.why_choose_us}"
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full shadow-lg"
            >
              <Phone className="mr-2" size={20} />
              <a href="tel:+1-800-WATER-911">Get Started: (800) WATER-911</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}