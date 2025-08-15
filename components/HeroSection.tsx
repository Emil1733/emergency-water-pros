'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Clock, Shield } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488642945284-f5b65425f15a?w=1920&h=1080&q=75&fm=webp&auto=format"
          alt="Professional water damage restoration scene"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Emergency Banner */}
          <div className="inline-flex items-center gap-2 bg-emergency text-emergency-foreground px-6 py-3 rounded-full text-sm font-medium animate-pulse">
            <Phone size={16} />
            <span>24/7 Emergency Response</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            <span className="block heading-primary">Water Damage?</span>
            <span className="block heading-primary text-white mt-2">We Restore.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto body-text">
            Professional water damage restoration, mold remediation, and emergency response. 
            Your property restored to perfection, faster than you thought possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              variant="emergency"
              href="tel:+18886806768"
              className="px-8 py-6 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              aria-label="Call emergency hotline now"
            >
              <Phone className="mr-2" size={20} />
              Call Now: (888) 680-6768
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              type="button"
              className="hover:text-water-primary px-8 py-6 text-lg rounded-full"
              aria-label="Get free water damage assessment"
            >
              Get Free Estimate
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/80">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="body-text-medium">30-Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <span className="body-text-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="body-text-medium">4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}