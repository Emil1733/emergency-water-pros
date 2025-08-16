'use client'

import { Button } from "@/components/ui/button"
import { Phone, Siren } from "lucide-react"
import Image from "next/image"
import { trackPhoneClick } from "@/components/GoogleAnalytics"

export default function EmergencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-emergency text-emergency-foreground py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile Logo - shows on small screens */}
          <div className="block md:hidden flex items-center">
            <Image
              src="/images/logo-mobile.svg"
              alt="EWP"
              width={100}
              height={38}
              className="h-[38px] w-auto"
              priority
            />
          </div>
          
          {/* Desktop Logo - shows on large screens */}
          <div className="hidden md:flex items-center">
            <Image
              src="/images/logo-desktop.svg"
              alt="Emergency Water Pros"
              width={220}
              height={40}
              className="h-[40px] w-auto object-center"
              priority
            />
          </div>
          
          <Siren size={20} className="animate-pulse" />
          <span className="body-text-medium">
            <strong>EMERGENCY?</strong> We're available 24/7 for immediate response
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="hidden sm:block body-text text-sm">
            Average response time: 30 minutes
          </span>
          <Button 
            size="sm" 
            variant="outline-light"
            href="tel:+18886806768"
            className="hover:text-emergency"
            aria-label="Call emergency hotline"
            onClick={trackPhoneClick}
          >
            <Phone size={16} className="mr-2" />
            (888) 680-6768
          </Button>
        </div>
      </div>
    </div>
  )
}