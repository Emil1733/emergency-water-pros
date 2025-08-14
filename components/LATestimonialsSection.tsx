'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

const laTestimonials = [
  {
    name: "Jennifer Martinez",
    role: "Beverly Hills Homeowner",
    neighborhood: "Beverly Hills",
    content: "When our master bathroom flooded at 2 AM, Emergency Water Pros was at our door within 20 minutes. They understood the value of our custom finishes and saved everything. Truly the best in LA.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=4",
    projectType: "Luxury Home Restoration"
  },
  {
    name: "David Kim",
    role: "Santa Monica Business Owner",
    neighborhood: "Santa Monica",
    content: "Our beachfront restaurant flooded during a storm. They worked around our schedule and had us reopened in 4 days. Their understanding of coastal properties is unmatched.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
    projectType: "Commercial Water Damage"
  },
  {
    name: "Maria Rodriguez",
    role: "Hollywood Resident",
    neighborhood: "Hollywood",
    content: "Living in a 1920s building, we needed specialists who understood historic properties. They preserved the original character while modernizing the infrastructure. Perfect work.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=6",
    projectType: "Historic Building Restoration"
  },
  {
    name: "Robert Chen",
    role: "Pasadena Property Manager",
    neighborhood: "Pasadena",
    content: "Managing 12 properties across LA, I've worked with many contractors. Emergency Water Pros is the only one I trust for emergency situations. Fast, reliable, and honest.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=7",
    projectType: "Multi-Property Management"
  },
  {
    name: "Sarah Williams",
    role: "West Hollywood Condo Owner",
    neighborhood: "West Hollywood",
    content: "Pipe burst in my high-rise condo affected multiple units. They coordinated with the HOA, handled all permits, and restored everything perfectly. Stress-free experience.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=8",
    projectType: "High-Rise Water Damage"
  },
  {
    name: "Michael Thompson",
    role: "Downtown LA Loft Owner",
    neighborhood: "Downtown LA",
    content: "HVAC leak in my converted loft required specialized knowledge of industrial buildings. They understood the unique challenges and delivered exceptional results.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9",
    projectType: "Industrial Conversion"
  }
]

const stats = [
  { number: "5,000+", label: "LA Properties Restored" },
  { number: "18 min", label: "Average LA Response Time" },
  { number: "4.9/5", label: "LA Customer Rating" },
  { number: "98%", label: "LA Customer Retention" }
]

export default function LATestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            What Los Angeles Says About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Real testimonials from real Los Angeles residents and business owners. 
            From Beverly Hills to Downtown, we've earned the trust of our community.
          </p>
        </div>

        {/* LA Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl md:text-4xl heading-primary text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 body-text-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {laTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 ${
                index === 2 ? 'lg:scale-105' : ''
              }`}
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Neighborhood Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-blue-500" />
                  <Badge variant="outline" className="text-blue-700 border-blue-200">
                    {testimonial.neighborhood}
                  </Badge>
                </div>
                
                {/* Content */}
                <p className="text-gray-600 body-text mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Project Type */}
                <div className="mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                    {testimonial.projectType}
                  </Badge>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={`${testimonial.name} avatar`}
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl la-gradient text-white shadow-2xl">
            <h3 className="text-2xl heading-secondary mb-4">
              Join Thousands of Satisfied LA Customers
            </h3>
            <p className="body-text mb-6 opacity-90">
              Experience the same exceptional service that has made us Los Angeles' most trusted restoration company
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-300 body-text-medium">
                Get Your Free LA Assessment
              </button>
              <a 
                href="tel:3235551234"
                className="px-8 py-4 border-2 border-white bg-white/10 text-white hover:bg-white hover:text-blue-600 rounded-full transition-all duration-300 body-text-medium backdrop-blur-sm"
              >
                Call (323) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}