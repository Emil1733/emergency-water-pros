'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, User, MapPin, AlertCircle, CheckCircle } from "lucide-react"
import { ServiceData } from "@/lib/csvData"
import { trackFormSubmission } from "@/components/GoogleAnalytics"

interface LeadCaptureFormProps {
  cityData: ServiceData
  serviceType?: string
}

export default function LeadCaptureForm({ cityData, serviceType }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceType || 'Water Damage Restoration',
    city: cityData.city,
    description: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [errorMessage, setErrorMessage] = useState('')

  const services = [
    'Water Damage Restoration',
    'Fire Damage Restoration',
    'Mold Removal',
    'Storm Damage Repair',
    'Sewage Cleanup',
    'Basement Flood Cleanup'
  ]

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '')
    return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // TODO: Replace with actual Supabase integration
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          created_at: new Date().toISOString(),
          source: 'website',
          city_slug: cityData.city_slug,
          state: cityData.state,
          state_abbr: cityData.state_abbr
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setErrors({})
        
        // Track successful form submission
        trackFormSubmission('lead_capture_form', true)
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: serviceType || 'Water Damage Restoration',
          city: cityData.city,
          description: ''
        })
      } else {
        const errorData = await response.json()
        setSubmitStatus('error')
        setErrorMessage(errorData.error || 'Submission failed. Please try again.')
        
        // Track failed form submission
        trackFormSubmission('lead_capture_form', false)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      
      // Track failed form submission
      trackFormSubmission('lead_capture_form', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-0">
      <CardContent className="p-8">
        {/* Form Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emergency/10 text-emergency px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone size={16} />
            <span>Free Emergency Assessment</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl heading-secondary text-gray-900 mb-4">
            Get Help Now in {cityData.city}
          </h3>
          
          <p className="text-gray-600 body-text">
            Fill out this form for immediate response or call <strong>(888) 680-6768</strong> for emergency service.
          </p>
        </div>

        {/* Submit Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-success-light border border-success rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-success" />
              <div>
                <div className="text-success-dark font-medium">Request Submitted Successfully!</div>
                <div className="text-success text-sm">We'll contact you within 15 minutes to schedule your free assessment.</div>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-emergency/5 border border-emergency rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <AlertCircle size={20} className="text-emergency" />
              <div>
                <div className="text-emergency font-medium">Submission Failed</div>
                <div className="text-emergency text-sm">
                  {errorMessage || 'Please try again or call us directly at (888) 680-6768'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-2" />
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full ${errors.name ? 'border-emergency' : ''}`}
            />
            {errors.name && <p className="text-emergency text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              <Phone size={16} className="inline mr-2" />
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className={`w-full ${errors.phone ? 'border-emergency' : ''}`}
            />
            {errors.phone && <p className="text-emergency text-sm mt-1">{errors.phone}</p>}
            <p className="text-xs text-gray-500 mt-1">Required for emergency contact</p>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail size={16} className="inline mr-2" />
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`w-full ${errors.email ? 'border-emergency' : ''}`}
            />
            {errors.email && <p className="text-emergency text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Service Type */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-water-primary focus:border-transparent ${errors.service ? 'border-emergency' : 'border-gray-300'}`}
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && <p className="text-emergency text-sm mt-1">{errors.service}</p>}
          </div>

          {/* City Field (Pre-filled) */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin size={16} className="inline mr-2" />
              City
            </label>
            <Input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-gray-50"
              readOnly
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Describe Your Situation
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about the water damage, when it occurred, affected areas, etc."
              rows={4}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Help us prepare the right equipment for your situation</p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="emergency"
            className="w-full py-6 text-lg rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Phone size={20} />
                Get Free Assessment Now
              </div>
            )}
          </Button>

          {/* Emergency Contact */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-2">For immediate emergency service:</p>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="border-emergency text-emergency hover:bg-emergency/5"
              onClick={() => window.location.href = 'tel:+18886806768'}
            >
              <Phone size={20} className="mr-2" />
              Call (888) 680-6768 Now
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}