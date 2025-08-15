'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign } from "lucide-react"

const caseStudies = [
  {
    location: "Beverly Hills Mansion",
    neighborhood: "Beverly Hills",
    beforeImage: "https://images.unsplash.com/photo-1446712146541-843e336d8154?w=400&h=400&q=75&fm=webp&auto=format",
    afterImage: "https://images.unsplash.com/photo-1511894622069-3ed55ebf8f57?w=400&h=400&q=75&fm=webp&auto=format",
    challenge: "Burst pipe in luxury master suite caused extensive damage to custom millwork and marble flooring",
    solution: "Specialized drying techniques preserved original materials, custom millwork restoration, marble refinishing",
    timeline: "5 days",
    value: "$2.3M property",
    testimonial: "They saved our irreplaceable custom features. The restoration exceeded our expectations."
  },
  {
    location: "Santa Monica Coastal Home",
    neighborhood: "Santa Monica",
    beforeImage: "https://images.unsplash.com/photo-1444762908691-c8461d64d5f6?w=400&h=400&q=75&fm=webp&auto=format",
    afterImage: "https://images.unsplash.com/photo-1663124343477-2cf4b9fa5529?w=400&h=400&q=75&fm=webp&auto=format",
    challenge: "Storm surge flooding affected ground floor, salt water damage to hardwood and electrical systems",
    solution: "Salt water extraction, specialized dehumidification, electrical system restoration, hardwood refinishing",
    timeline: "7 days",
    value: "$1.8M property",
    testimonial: "Living two blocks from the beach, we needed experts who understand coastal damage. Perfect job."
  },
  {
    location: "Hollywood Historic Building",
    neighborhood: "Hollywood",
    beforeImage: "https://images.unsplash.com/photo-1543244176-0be2dfa150bc?w=400&h=400&q=75&fm=webp&auto=format",
    afterImage: "https://images.unsplash.com/photo-1648475237029-7f853809ca14?w=400&h=400&q=75&fm=webp&auto=format",
    challenge: "1920s apartment building with original plaster walls, vintage fixtures, and historic preservation requirements",
    solution: "Heritage-compliant restoration, original plaster repair, period-appropriate materials, city permit coordination",
    timeline: "10 days",
    value: "Historic landmark",
    testimonial: "They understood the historic significance and worked within preservation guidelines perfectly."
  }
]

export default function LACaseStudiesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Los Angeles Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Real restoration projects from across Los Angeles. Each property presented unique 
            challenges that required our specialized local expertise.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.location}
              className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Images */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="grid grid-cols-2 h-full">
                      <div className="relative">
                        <Image
                          src={study.beforeImage}
                          alt={`Before restoration at ${study.location}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-emergency text-emergency-foreground">Before</Badge>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src={study.afterImage}
                          alt={`After restoration at ${study.location}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-chart-4 text-white">After</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Location Header */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={20} className="text-blue-500" />
                          <Badge variant="outline" className="text-blue-700 border-blue-200">
                            {study.neighborhood}
                          </Badge>
                        </div>
                        <h3 className="text-2xl heading-secondary text-gray-900 mb-4">
                          {study.location}
                        </h3>
                      </div>

                      {/* Project Stats */}
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-green-500" />
                          <span className="text-sm body-text-medium text-gray-700">{study.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign size={16} className="text-yellow-500" />
                          <span className="text-sm body-text-medium text-gray-700">{study.value}</span>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div>
                        <h4 className="text-lg heading-secondary text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 body-text leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-lg heading-secondary text-gray-900 mb-2">Our Solution</h4>
                        <p className="text-gray-600 body-text leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-gray-700 body-text italic">
                          "{study.testimonial}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-3xl la-gradient text-white shadow-2xl">
            <h3 className="text-2xl heading-secondary mb-4">
              Your LA Property Deserves Expert Care
            </h3>
            <p className="body-text mb-6 opacity-90">
              Every Los Angeles property is unique. Let us create a custom restoration plan for your specific needs.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-300 body-text-medium">
              Get Your Free LA Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}