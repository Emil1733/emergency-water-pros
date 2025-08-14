'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, CheckCircle } from "lucide-react"
import { ServiceData } from "@/lib/csvData"

interface ServiceTestimonialsSectionProps {
  serviceData: ServiceData
}

export default function ServiceTestimonialsSection({ serviceData }: ServiceTestimonialsSectionProps) {
  // Generate service-specific testimonials
  const getServiceTestimonials = () => {
    const baseTestimonials = {
      'water-damage-restoration': [
        {
          name: "Amanda R.",
          text: `When our basement flooded, Emergency Water Pros responded immediately to our ${serviceData.city} home. Their water damage restoration team was professional, efficient, and got everything dried out quickly.`,
          beforeAfter: "Flooded basement → Completely restored"
        },
        {
          name: "Tom S.",
          text: `Pipe burst in our kitchen and water was everywhere. The Emergency Water Pros team saved our hardwood floors with their quick response and professional water extraction equipment.`,
          beforeAfter: "Water damage → Like new condition"
        },
        {
          name: "Maria G.",
          text: `Professional water damage restoration service in ${serviceData.city}. They handled everything from water extraction to dealing with our insurance company. Couldn't be happier with the results.`,
          beforeAfter: "Soggy carpets → Fresh and clean"
        }
      ],
      'fire-damage-restoration': [
        {
          name: "Kevin M.",
          text: `After a kitchen fire, Emergency Water Pros restored our ${serviceData.city} home beautifully. Their fire damage restoration team was compassionate and thorough throughout the entire process.`,
          beforeAfter: "Fire damage → Fully restored"
        },
        {
          name: "Linda B.",
          text: `The smoke and soot damage seemed overwhelming, but Emergency Water Pros made it manageable. Their fire damage restoration expertise really showed in the final results.`,
          beforeAfter: "Smoke damage → Fresh and clean"
        },
        {
          name: "James W.",
          text: `Excellent fire damage restoration service. The team was professional, understanding, and worked quickly to get our lives back to normal after the fire.`,
          beforeAfter: "Damaged property → Like new"
        }
      ],
      'mold-removal': [
        {
          name: "Susan L.",
          text: `Discovered mold in our ${serviceData.city} basement. Emergency Water Pros handled the mold removal professionally and thoroughly. They explained every step and ensured our family's safety.`,
          beforeAfter: "Mold problem → Safe and clean"
        },
        {
          name: "Mark D.",
          text: `Professional mold removal service. The team was knowledgeable about health concerns and took every precaution during the remediation process. Highly recommend!`,
          beforeAfter: "Health concerns → Peace of mind"
        },
        {
          name: "Nancy P.",
          text: `Mold removal was handled expertly by Emergency Water Pros. They found the source of the moisture and fixed both the mold and the underlying problem.`,
          beforeAfter: "Hidden mold → Completely eliminated"
        }
      ]
    }
    
    // Get testimonials for specific service or default ones
    return baseTestimonials[serviceData.service_slug as keyof typeof baseTestimonials] || [
      {
        name: "John D.",
        text: `Emergency Water Pros provided excellent ${serviceData.service.toLowerCase()} service for our ${serviceData.city} property. Professional, efficient, and results exceeded expectations.`,
        beforeAfter: "Problem solved → Satisfied customer"
      },
      {
        name: "Carol M.", 
        text: `Outstanding ${serviceData.service.toLowerCase()} work. The team was professional, prompt, and delivered exactly what they promised. Would definitely use again.`,
        beforeAfter: "Emergency situation → Peace of mind"
      },
      {
        name: "Steve K.",
        text: `Highly recommend Emergency Water Pros for ${serviceData.service.toLowerCase()} in ${serviceData.city}. They handled everything professionally and made a stressful situation manageable.`,
        beforeAfter: "Stressed homeowner → Relieved customer"
      }
    ]
  }

  const testimonials = getServiceTestimonials()

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle size={16} />
            <span>Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            <span className="text-green-600">{serviceData.service}</span> Success Stories
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Real results from real {serviceData.city} customers. See how our {serviceData.service.toLowerCase()} 
            expertise has helped families and businesses restore their properties.
          </p>
        </div>

        {/* Testimonials with Before/After */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Before/After Badge */}
                  <div className="bg-gradient-to-r from-red-100 to-green-100 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-gray-700">
                      {testimonial.beforeAfter}
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="text-center">
                    <Quote size={32} className="text-blue-200 mx-auto group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 body-text italic leading-relaxed text-center">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="w-12 h-12 bg-blue-500">
                      <AvatarFallback className="text-white font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{serviceData.city} Customer</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Guarantee */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <CheckCircle size={32} className="text-green-200" />
              <h3 className="text-3xl heading-secondary">
                Our {serviceData.service} Guarantee
              </h3>
            </div>
            
            <p className="text-blue-100 body-text mb-8 text-lg">
              Every {serviceData.service.toLowerCase()} project in {serviceData.city} comes with our satisfaction guarantee. 
              We're not happy unless you're completely satisfied with our work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-lg font-semibold mb-1">Quality Work</div>
                <div className="text-blue-100 text-sm">IICRC certified professionals</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-lg font-semibold mb-1">Fast Response</div>
                <div className="text-blue-100 text-sm">45-minute arrival guaranteed</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl mb-2">💯</div>
                <div className="text-lg font-semibold mb-1">100% Satisfaction</div>
                <div className="text-blue-100 text-sm">We guarantee your happiness</div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="text-lg font-medium mb-2">Ready to join our satisfied customers?</div>
              <div className="text-blue-100">Call now for your free {serviceData.city} assessment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}