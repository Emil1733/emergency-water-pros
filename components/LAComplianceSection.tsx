'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, CheckCircle, Building } from "lucide-react"

const compliance = [
  {
    icon: FileText,
    title: "LA Building Permits",
    description: "We handle all necessary permits for structural repairs and major restoration work in Los Angeles.",
    details: ["LADBS permit applications", "Expedited processing", "Code compliance verification", "Final inspections"],
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "California Licensing",
    description: "Fully licensed and bonded in California with specialized certifications for restoration work.",
    details: ["CA Contractor License #123456", "IICRC Master Certification", "EPA Lead-Safe Certified", "Asbestos Abatement Licensed"],
    color: "text-green-500"
  },
  {
    icon: Building,
    title: "Historic Preservation",
    description: "Expertise in LA's historic districts with proper preservation protocols and city coordination.",
    details: ["HPOZ compliance", "Cultural Heritage Commission", "Secretary of Interior Standards", "Period-appropriate materials"],
    color: "text-yellow-500"
  },
  {
    icon: CheckCircle,
    title: "Insurance Coordination",
    description: "Direct billing and coordination with major insurance providers serving Los Angeles area.",
    details: ["State Farm partnerships", "Allstate preferred vendor", "USAA approved contractor", "Direct insurance billing"],
    color: "text-purple-500"
  }
]

const certifications = [
  { name: "CA Contractor License", number: "#123456", authority: "CSLB" },
  { name: "IICRC Master Certified", number: "#WRT-2024", authority: "IICRC" },
  { name: "EPA Lead-Safe", number: "#EPA-RRP-123", authority: "EPA" },
  { name: "LADBS Approved", number: "#LA-2024-001", authority: "City of LA" }
]

export default function LAComplianceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary text-gray-900 mb-6">
            Los Angeles Compliance & Licensing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto body-text">
            Fully licensed, bonded, and compliant with all Los Angeles and California regulations. 
            We handle permits, inspections, and regulatory requirements so you don't have to.
          </p>
        </div>

        {/* Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {compliance.map((item, index) => (
            <Card 
              key={item.title}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden ${
                index % 2 === 0 ? 'md:translate-y-4' : ''
              }`}
            >
              <div className="absolute inset-0 la-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={32} className={item.color} />
                </div>
                <CardTitle className="text-xl heading-secondary text-gray-900 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 body-text mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 body-text">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Display */}
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-3xl p-8 border border-gray-200 mb-16">
          <h3 className="text-2xl heading-secondary text-center text-gray-900 mb-8">
            Our Certifications & Licenses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg heading-secondary text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 body-text mb-1">{cert.number}</p>
                  <Badge variant="outline" className="text-xs">
                    {cert.authority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LA-Specific Regulations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg heading-secondary text-gray-900 flex items-center gap-2">
                <Building size={20} className="text-blue-500" />
                LADBS Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 body-text mb-4">
                All structural work requires permits from LA Department of Building and Safety.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Permit applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Plan reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Inspections</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg heading-secondary text-gray-900 flex items-center gap-2">
                <Shield size={20} className="text-green-500" />
                Environmental Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 body-text mb-4">
                California has strict environmental regulations for restoration work.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Lead paint protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Asbestos handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Waste disposal</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg heading-secondary text-gray-900 flex items-center gap-2">
                <FileText size={20} className="text-yellow-500" />
                Insurance Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 body-text mb-4">
                We meet all insurance requirements for restoration contractors in California.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">$2M liability coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Workers compensation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 body-text">Bonded contractor</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}