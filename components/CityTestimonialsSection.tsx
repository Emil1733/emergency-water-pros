'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

interface CityTestimonialsSectionProps {
  cityName: string
}

export default function CityTestimonialsSection({ cityName }: CityTestimonialsSectionProps) {
  // Generate city-specific testimonials
  const testimonials = [
    {
      name: "Sarah M.",
      location: `${cityName} Homeowner`,
      rating: 5,
      text: `Emergency Water Pros saved my home after a pipe burst in my ${cityName} house. They arrived within 30 minutes and had everything under control quickly. Professional, efficient, and caring team.`,
      service: "Water Damage Restoration"
    },
    {
      name: "Mike R.",
      location: `${cityName} Business Owner`,
      rating: 5,
      text: `When our office flooded, Emergency Water Pros responded immediately. Their team worked through the night to get us back in business. Excellent service and communication throughout the process.`,
      service: "Emergency Water Removal"
    },
    {
      name: "Jennifer L.",
      location: `${cityName} Resident`,
      rating: 5,
      text: `I called after discovering mold in my basement. The team was knowledgeable, thorough, and handled everything including insurance. They made a stressful situation so much easier.`,
      service: "Mold Remediation"
    },
    {
      name: "David C.",
      location: `${cityName} Property Manager`,
      rating: 5,
      text: `We use Emergency Water Pros for all our ${cityName} properties. They're reliable, professional, and always deliver quality work. Their response time is unmatched in the area.`,
      service: "Property Restoration"
    },
    {
      name: "Lisa K.",
      location: `${cityName} Family`,
      rating: 5,
      text: `After storm damage, Emergency Water Pros restored our home beautifully. They kept us informed every step of the way and the final result exceeded our expectations. Highly recommend!`,
      service: "Storm Damage Repair"
    },
    {
      name: "Robert T.",
      location: `${cityName} Homeowner`,
      rating: 5,
      text: `Professional, honest, and reliable. Emergency Water Pros handled our sewage backup with care and expertise. They treated our home like it was their own. Outstanding service!`,
      service: "Sewage Cleanup"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} />
            <span>Customer Reviews</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            What <span className="text-blue-600">{cityName}</span> Customers Say
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Don't just take our word for it. Here's what {cityName} residents and business owners say about 
            our emergency water damage restoration services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote size={24} className="text-blue-200 group-hover:text-blue-400 transition-colors" />
                    
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Service Badge */}
                  <div className="inline-block">
                    <div className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                      {testimonial.service}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 body-text italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="w-10 h-10 bg-blue-500">
                      <AvatarFallback className="text-white font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="bg-blue-500 rounded-2xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className="text-yellow-300 fill-current" />
                ))}
              </div>
            </div>
            
            <h3 className="text-3xl heading-secondary mb-4">
              5.0 Star Rating from {cityName} Customers
            </h3>
            
            <p className="text-blue-100 body-text mb-6">
              Join hundreds of satisfied {cityName} customers who trust Emergency Water Pros for their 
              water damage restoration needs. Experience the difference professional service makes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-blue-100 text-sm">Properties Restored</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-blue-100 text-sm">Emergency Response</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-blue-100 text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}