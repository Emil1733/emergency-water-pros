'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import LeadCaptureForm from "./LeadCaptureForm"
import { ServiceData } from "@/lib/csvData"

interface ContactSectionProps {
  cityData: ServiceData
  serviceType?: string
}

export default function ContactSection({ cityData, serviceType }: ContactSectionProps) {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-water-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-water-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary mb-6">
            Get Help Now
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto body-text">
            Don't let water damage get worse. Contact our emergency response team immediately 
            for fast, professional restoration services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emergency Contact */}
          <div className="lg:col-span-1">
            <Card className="bg-emergency border-0 text-emergency-foreground h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="animate-pulse" />
                </div>
                <CardTitle className="text-2xl heading-secondary">
                  Emergency Hotline
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold mb-4 heading-primary">
                  (800) WATER-911
                </div>
                <p className="body-text mb-6 opacity-90">
                  Available 24/7 for immediate emergency response in {cityData.city}. 
                  Average response time: 45 minutes.
                </p>
                <Button 
                  size="lg" 
                  variant="outline-light"
                  className="w-full hover:text-emergency"
                  onClick={() => window.location.href = 'tel:+1-800-WATER-911'}
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-2">
              <LeadCaptureForm cityData={cityData} serviceType={serviceType} />
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-water-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg heading-secondary mb-2">Call Us</h3>
            <p className="text-gray-300 body-text">
              <a href="tel:+1-800-WATER-911" className="hover:text-water-secondary transition-colors">
                (800) WATER-911
              </a>
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-water-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg heading-secondary mb-2">Email Us</h3>
            <p className="text-gray-300 body-text">help@emergencywaterpros.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-water-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-lg heading-secondary mb-2">Live Chat</h3>
            <p className="text-gray-300 body-text">Available 24/7</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-water-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-lg heading-secondary mb-2">Response Time</h3>
            <p className="text-gray-300 body-text">45 minutes avg</p>
          </div>
        </div>

        {/* Service Area Map */}
        <div className="mt-16">
          <h3 className="text-2xl heading-secondary text-center mb-8">
            Service Area: {cityData.city}, {cityData.state_abbr}
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <iframe 
              src={cityData.map_embed_url}
              width="100%" 
              height="400" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
            <div className="mt-6 text-center">
              <p className="text-gray-300 body-text">
                Serving {cityData.city} and surrounding areas within {cityData.service_area_radius_miles} miles. 
                <strong className="text-white"> Emergency services available throughout {cityData.state}.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}