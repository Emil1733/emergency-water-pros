'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Shield, Award, Users } from "lucide-react"

const certifications = [
  { name: "IICRC Certified", icon: Shield },
  { name: "EPA Approved", icon: Award },
  { name: "BBB A+ Rating", icon: Star },
  { name: "Licensed & Insured", icon: Shield }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Emergency Water Pros saved our home after a major flood. Their team was professional, fast, and incredibly thorough. They made a devastating situation manageable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/96?img=1"
  },
  {
    name: "Mike Chen",
    role: "Business Owner",
    content: "When our office flooded, they had us back up and running in just 3 days. Outstanding service and communication throughout the entire process.",
    rating: 5,
    avatar: "https://i.pravatar.cc/96?img=2"
  },
  {
    name: "Lisa Rodriguez",
    role: "Property Manager",
    content: "We've used Emergency Water Pros for multiple properties. Their consistency, quality, and reliability make them our go-to restoration company.",
    rating: 5,
    avatar: "https://i.pravatar.cc/96?img=3"
  }
]

const stats = [
  { number: "10,000+", label: "Properties Restored" },
  { number: "24/7", label: "Emergency Response" },
  { number: "4.9/5", label: "Customer Rating" },
  { number: "15+", label: "Years Experience" }
]

export default function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Our commitment to excellence and customer satisfaction has made us the most 
            trusted restoration company in the region.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl md:text-4xl heading-primary text-water-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 body-text-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl heading-secondary text-center text-gray-900 mb-8">
            Certifications & Accreditations
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert) => (
              <Badge 
                key={cert.name}
                variant="outline"
                className="px-6 py-3 text-lg border-water-primary/30 text-water-primary hover:bg-water-primary/10 transition-colors duration-300"
              >
                <cert.icon size={20} className="mr-2" />
                {cert.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl heading-secondary text-center text-gray-900 mb-12">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 ${
                  index === 1 ? 'md:scale-105' : ''
                }`}
              >
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-600 body-text mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} avatar`}
                        loading="lazy"
                        style={{ width: '48px', height: '48px' }}
                      />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 body-text-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-sm body-text">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Before/After Showcase */}
        <div className="text-center">
          <h3 className="text-2xl heading-secondary text-gray-900 mb-8">
            See the Difference We Make
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-emergency text-emergency-foreground">Before</Badge>
              </div>
              <img
                src="https://images.unsplash.com/photo-1446712146541-843e336d8154?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHx3YXRlciUyMGRhbWFnZSUyMGZsb29kZWQlMjByb29tJTIwZGFtYWdlZCUyMGludGVyaW9yfGVufDB8MHx8fDE3NTQ5OTk4NjN8MA&ixlib=rb-4.1.0&q=85"
                alt="Water damaged room before restoration by Paco S on Unsplash"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                style={{ width: '100%', height: '256px' }}
              />
            </div>
            <div className="relative group">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-chart-4 text-white">After</Badge>
              </div>
              <img
                src="https://images.unsplash.com/photo-1648475237029-7f853809ca14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxjbGVhbiUyMHJvb20lMjBtb2Rlcm4lMjBpbnRlcmlvciUyMHJlc3RvcmVkJTIwaG9tZXxlbnwwfDB8fHwxNzU0OTk5ODYzfDA&ixlib=rb-4.1.0&q=85"
                alt="Clean restored room after water damage repair by Bailey Alexander on Unsplash"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                style={{ width: '100%', height: '256px' }}
              />
            </div>
          </div>
          <p className="text-gray-600 body-text mt-6 max-w-2xl mx-auto">
            From devastating water damage to complete restoration - we transform disasters into opportunities 
            to make your property better than before.
          </p>
        </div>
      </div>
    </section>
  )
}