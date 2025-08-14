'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Search, Droplets, Wind, Hammer } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Assessment & Inspection",
    description: "Comprehensive damage evaluation using advanced moisture detection equipment to identify all affected areas.",
    duration: "30-60 minutes",
    color: "bg-water-primary"
  },
  {
    icon: Droplets,
    title: "Water Extraction",
    description: "Rapid water removal using industrial-grade pumps and extraction equipment to prevent further damage.",
    duration: "2-4 hours",
    color: "bg-cyan-500"
  },
  {
    icon: Wind,
    title: "Drying & Dehumidification",
    description: "Strategic placement of air movers and dehumidifiers to completely dry all affected materials.",
    duration: "3-5 days",
    color: "bg-success"
  },
  {
    icon: Hammer,
    title: "Restoration & Repair",
    description: "Complete restoration of damaged areas, returning your property to pre-loss condition or better.",
    duration: "1-2 weeks",
    color: "bg-orange-500"
  }
]

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-water-secondary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-water-secondary/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-water-secondary/30 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Our Proven Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Every restoration project follows our systematic 4-step process, ensuring thorough 
            damage mitigation and complete property restoration.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg">
                    <div className="absolute inset-0 water-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl heading-secondary text-gray-900">
                              {step.title}
                            </h3>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full body-text">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 body-text leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative">
                  <div className={`w-8 h-8 ${step.color} rounded-full border-4 border-white shadow-lg z-10 relative`}>
                    <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-current rounded-full opacity-20 animate-pulse"></div>
                </div>

                {/* Step Number (Mobile) */}
                <div className="lg:hidden w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <h3 className="text-xl heading-secondary text-gray-900 mb-2">
              Ready to Start Your Restoration?
            </h3>
            <p className="text-gray-600 body-text mb-4">
              Contact us today for a free assessment and detailed restoration plan
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 water-gradient text-white rounded-lg hover:shadow-lg transition-all duration-300 body-text-medium">
                Schedule Assessment
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 body-text-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}