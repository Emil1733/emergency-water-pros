'use client'

import { Button } from "@/components/ui/button"
import { Phone, Siren } from "lucide-react"

export default function EmergencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-emergency text-emergency-foreground py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
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
            variant="outline"
            className="border-white bg-white/10 text-white hover:bg-white hover:text-emergency transition-colors backdrop-blur-sm"
          >
            <Phone size={16} className="mr-2" />
            (555) 123-HELP
          </Button>
        </div>
      </div>
    </div>
  )
}