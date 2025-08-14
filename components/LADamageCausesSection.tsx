'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Home, Zap, Droplets } from "lucide-react"

const laCauses = [
  {
    icon: AlertTriangle,
    title: "Earthquake Damage",
    description: "Los Angeles sits on multiple fault lines. Seismic activity can cause pipe breaks, foundation cracks, and structural water damage.",
    stats: "40% of LA water damage claims",
    prevention: ["Seismic pipe retrofitting", "Foundation inspections", "Emergency shutoff valves"],
    color: "text-red-500"
  },
  {
    icon: Home,
    title: "Aging Infrastructure",
    description: "Many LA buildings date back decades. Old plumbing systems, especially in Hollywood and Downtown, are prone to sudden failures.",
    stats: "35% of restoration calls",
    prevention: ["Regular pipe inspections", "Preventive replacements", "Water pressure monitoring"],
    color: "text-orange-500"
  },
  {
    icon: Droplets,
    title: "Seasonal Weather",
    description: "LA's rare but intense rainstorms can overwhelm drainage systems, causing flooding in low-lying areas and hillside properties.",
    stats: "20% during rainy season",
    prevention: ["Proper drainage systems", "Waterproofing", "Sump pump installation"],
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "HVAC & Appliance Failures",
    description: "California's energy-efficient buildings often have complex HVAC systems. AC units and water heaters can fail, causing significant damage.",
    stats: "25% of emergency calls",
    prevention: ["Regular HVAC maintenance", "Smart leak detectors", "Professional installations"],
    color: "text-green-500"
  }
]

export default function LADamageCausesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Common Water Damage Causes in Los Angeles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Understanding the unique challenges of Los Angeles properties helps us provide 
            targeted solutions for prevention and rapid restoration.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {laCauses.map((cause, index) => (
            <Card 
              key={cause.title}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden ${
                index % 2 === 0 ? 'lg:translate-x-4' : 'lg:-translate-x-4'
              }`}
            >
              <div className="absolute inset-0 la-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <cause.icon size={32} className={cause.color} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl heading-secondary text-gray-900 group-hover:text-blue-900 transition-colors mb-2">
                      {cause.title}
                    </CardTitle>
                    <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm body-text-medium">
                      {cause.stats}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 body-text mb-6 leading-relaxed">
                  {cause.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 body-text-medium mb-3">Prevention Strategies:</h4>
                  <ul className="space-y-2">
                    {cause.prevention.map((strategy) => (
                      <li key={strategy} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 body-text">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LA-Specific Information */}
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-3xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} className="text-white" />
              </div>
              <h3 className="text-lg heading-secondary text-gray-900 mb-2">Seismic Preparedness</h3>
              <p className="text-gray-600 body-text">
                We understand LA's unique seismic risks and provide earthquake-resistant restoration solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home size={32} className="text-white" />
              </div>
              <h3 className="text-lg heading-secondary text-gray-900 mb-2">Historic Properties</h3>
              <p className="text-gray-600 body-text">
                Specialized techniques for LA's historic buildings, preserving character while ensuring safety.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-chart-4 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets size={32} className="text-white" />
              </div>
              <h3 className="text-lg heading-secondary text-gray-900 mb-2">Climate Adaptation</h3>
              <p className="text-gray-600 body-text">
                Solutions designed for LA's Mediterranean climate and occasional extreme weather events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}