'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  cityName: string
  serviceName?: string
}

export default function FAQSection({ cityName, serviceName }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const generalFAQs: FAQ[] = [
    {
      question: `How quickly can you respond to emergencies in ${cityName}?`,
      answer: `We provide 24/7 emergency response in ${cityName} with an average arrival time of 45 minutes. Our local team is always ready to respond to water damage, fire damage, and other restoration emergencies throughout ${cityName}.`
    },
    {
      question: `Do you work with insurance companies in ${cityName}?`,
      answer: `Yes, we work directly with all major insurance companies and can handle the entire claims process for ${cityName} residents. We provide detailed documentation and work directly with your adjuster to ensure maximum coverage.`
    },
    {
      question: `Are you licensed and certified for restoration work in ${cityName}?`,
      answer: `Absolutely. Emergency Water Pros is fully licensed, bonded, and insured to operate in ${cityName}. Our technicians are IICRC certified and follow all state and local regulations for restoration work.`
    },
    {
      question: `What areas of ${cityName} do you serve?`,
      answer: `We serve all of ${cityName} and surrounding areas within a 30-mile radius. Our local team knows the area well and can quickly reach any neighborhood in ${cityName} for emergency restoration services.`
    },
    {
      question: `Do you provide free estimates in ${cityName}?`,
      answer: `Yes, we provide free estimates for all restoration projects in ${cityName}. Our certified technicians will assess the damage and provide a detailed estimate with no obligation. Emergency assessments are available 24/7.`
    }
  ]

  const serviceFAQs: { [key: string]: FAQ[] } = {
    "Water Damage Restoration": [
      {
        question: `How long does water damage restoration take in ${cityName}?`,
        answer: `Water damage restoration in ${cityName} typically takes 3-7 days depending on the extent of damage. We begin water extraction immediately, followed by drying (2-3 days), then cleaning and restoration. Emergency mitigation starts within 45 minutes.`
      },
      {
        question: `Will my insurance cover water damage restoration in ${cityName}?`,
        answer: `Most homeowner's insurance policies cover sudden water damage in ${cityName}, such as burst pipes or appliance failures. We work directly with your insurance company to maximize coverage and handle all paperwork.`
      }
    ],
    "Fire Damage Restoration": [
      {
        question: `Can smoke odor be completely removed from my ${cityName} property?`,
        answer: `Yes, we use advanced ozone treatment and thermal fogging to completely eliminate smoke odors from ${cityName} properties. Our IICRC-certified technicians ensure all smoke damage and odors are properly addressed.`
      },
      {
        question: `How soon should I start fire damage restoration in ${cityName}?`,
        answer: `Fire damage restoration should begin immediately in ${cityName}. The longer smoke and soot remain, the more permanent the damage becomes. We provide 24/7 emergency response to begin mitigation within 45 minutes.`
      }
    ],
    "Mold Removal": [
      {
        question: `How do you test for mold in ${cityName} properties?`,
        answer: `We provide comprehensive mold testing in ${cityName} using air samples and surface samples. Our certified mold inspectors identify the type and extent of mold contamination before creating a customized remediation plan.`
      },
      {
        question: `Is mold removal safe for my family in ${cityName}?`,
        answer: `Yes, our mold removal process in ${cityName} follows strict safety protocols. We use containment barriers and negative air pressure to prevent spore spread, ensuring your family's safety throughout the remediation process.`
      }
    ]
  }

  const faqs = serviceName && serviceFAQs[serviceName] 
    ? [...generalFAQs, ...serviceFAQs[serviceName]]
    : generalFAQs

  // Structured data for FAQ
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="py-16 bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl heading-primary text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 body-text">
            Common questions about {serviceName ? serviceName.toLowerCase() : 'restoration services'} in {cityName}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <span className="text-lg heading-secondary text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} className="text-water-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 body-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl heading-secondary text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 body-text mb-4">
            Our {cityName} restoration experts are available 24/7 to answer your questions
          </p>
          <a 
            href="tel:+18886806768"
            className="inline-flex items-center gap-2 bg-water-primary text-white px-6 py-3 rounded-lg hover:bg-water-secondary transition-colors font-medium"
          >
            Call (888) 680-6768
          </a>
        </div>
      </div>
    </section>
  )
}