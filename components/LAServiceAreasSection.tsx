'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone } from "lucide-react"

const neighborhoods = [
  {
    name: "Hollywood",
    responseTime: "15 min",
    specialties: ["Historic Properties", "Entertainment Industry", "High-Rise Buildings"],
    color: "bg-red-500"
  },
  {
    name: "Beverly Hills",
    responseTime: "18 min",
    specialties: ["Luxury Homes", "Premium Materials", "Discrete Service"],
    color: "bg-yellow-500"
  },
  {
    name: "Santa Monica",
    responseTime: "20 min",
    specialties: ["Coastal Properties", "Salt Air Damage", "Beach Homes"],
    color: "bg-blue-500"
  },
  {
    name: "Downtown LA",
    responseTime: "12 min",
    specialties: ["Commercial Buildings", "Lofts & Condos", "High-Rise Towers"],
    color: "bg-gray-600"
  },
  {
    name: "Pasadena",
    responseTime: "25 min",
    specialties: ["Historic Homes", "Craftsman Style", "Rose Bowl Area"],
    color: "bg-green-500"
  },
  {
    name: "West Hollywood",
    responseTime: "16 min",
    specialties: ["Modern Apartments", "Design District", "Celebrity Homes"],
    color: "bg-purple-500"
  }
]

export default function LAServiceAreasSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Los Angeles Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Comprehensive water damage restoration services across all Los Angeles neighborhoods. 
            Local expertise for every community from the coast to the hills.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <h3 className="text-2xl heading-secondary text-center text-gray-900 mb-8">
              Our Los Angeles Coverage Area
            </h3>
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=34.0522,-118.2437&t=&z=10&ie=UTF8&iwloc=B&output=embed" 
              width="100%" 
              height="400" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
            <div className="mt-6 text-center">
              <p className="text-gray-600 body-text">
                <strong className="text-gray-900">Emergency services available throughout LA County.</strong> 
                Average response time varies by location and traffic conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {neighborhoods.map((neighborhood, index) => (
            <Card 
              key={neighborhood.name}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden ${
                index % 2 === 0 ? 'lg:translate-y-4' : ''
              }`}
            >
              <div className="absolute inset-0 la-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-4 h-4 ${neighborhood.color} rounded-full`}></div>
                  <Badge variant="outline" className="text-xs">
                    <Clock size={12} className="mr-1" />
                    {neighborhood.responseTime}
                  </Badge>
                </div>
                <CardTitle className="text-xl heading-secondary text-gray-900 group-hover:text-blue-900 transition-colors flex items-center gap-2">
                  <MapPin size={20} className="text-blue-500" />
                  {neighborhood.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 body-text mb-4">
                  Specialized restoration services for {neighborhood.name} properties
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 body-text-medium">Specialties:</h4>
                  <ul className="space-y-1">
                    {neighborhood.specialties.map((specialty) => (
                      <li key={specialty} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm body-text">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl la-gradient text-white shadow-2xl">
            <h3 className="text-2xl heading-secondary mb-4">
              Emergency Response Across LA
            </h3>
            <p className="body-text mb-6 opacity-90">
              No matter where you are in Los Angeles, our certified technicians are ready to respond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:3235551234"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-300 body-text-medium"
              >
                <Phone className="mr-2" size={20} />
                (323) 555-1234
              </a>
              <button className="px-8 py-4 border-2 border-white bg-white/10 text-white hover:bg-white hover:text-blue-600 rounded-full transition-all duration-300 body-text-medium backdrop-blur-sm">
                Schedule Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}