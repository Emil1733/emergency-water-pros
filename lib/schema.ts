import { ServiceData } from './serviceData'

export interface SchemaOrgProps {
  type: 'organization' | 'localBusiness' | 'service'
  data?: ServiceData
  citySlug?: string
  serviceSlug?: string
}

export function generateSchemaOrg({ type, data, citySlug, serviceSlug }: SchemaOrgProps) {
  const baseData = {
    "@context": "https://schema.org",
    "name": "Emergency Water Pros",
    "telephone": "+1-888-680-6768",
    "email": "help@emergencywaterpros.com",
    "logo": "https://emergencywaterpros.com/logo.png",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.facebook.com/emergencywaterpros",
      "https://www.linkedin.com/company/emergencywaterpros",
      "https://www.bbb.org/us/ca/emergencywaterpros"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "currenciesAccepted": "USD"
  }

  switch (type) {
    case 'organization':
      return {
        ...baseData,
        "@type": "Organization",
        "description": "Professional 24/7 water damage restoration services across California. IICRC certified technicians, direct insurance billing, and emergency response.",
        "url": "https://emergencywaterpros.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "California",
          "addressCountry": "US"
        },
        "serviceArea": {
          "@type": "State",
          "name": "California"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Water Damage Restoration Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Water Damage Restoration",
                "description": "Complete water damage restoration including extraction, drying, and structural repairs"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Fire Damage Restoration",
                "description": "Fire and smoke damage cleanup and restoration services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Mold Removal",
                "description": "Professional mold remediation and prevention services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Storm Damage Repair", 
                "description": "Storm and flood damage repair and restoration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sewage Cleanup",
                "description": "Safe sewage and contaminated water cleanup"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Basement Flood Cleanup",
                "description": "Basement flooding restoration and waterproofing"
              }
            }
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Los Angeles"
          },
          {
            "@type": "City", 
            "name": "San Diego"
          },
          {
            "@type": "City",
            "name": "San Francisco"
          },
          {
            "@type": "City",
            "name": "San Jose"
          },
          {
            "@type": "City",
            "name": "Fresno"
          },
          {
            "@type": "City",
            "name": "Sacramento"
          },
          {
            "@type": "City",
            "name": "Long Beach"
          },
          {
            "@type": "City",
            "name": "Oakland"
          },
          {
            "@type": "City",
            "name": "Bakersfield"
          },
          {
            "@type": "City",
            "name": "Anaheim"
          }
        ]
      }

    case 'localBusiness':
      if (!data) throw new Error('ServiceData required for localBusiness schema')
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "name": `Emergency Water Pros ${data.city}`,
        "description": `Professional water damage restoration services in ${data.city}`,
        "url": citySlug ? `https://emergencywaterpros.com/${citySlug}` : `https://emergencywaterpros.com`,
        "image": data.image_url,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": data.city,
          "addressRegion": data.state_abbr,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": data.lat || "0",
          "longitude": data.lon || "0"
        },
        "priceRange": "$$",
        "serviceArea": {
          "@type": "City",
          "name": data.city,
          "addressRegion": data.state_abbr,
          "addressCountry": "US"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        }
      }

    case 'service':
      if (!data) throw new Error('ServiceData required for service schema')
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "name": `Emergency Water Pros ${data.city}`,
        "description": data.intro_paragraph,
        "url": `https://emergencywaterpros.com/${citySlug}/${serviceSlug}`,
        "image": data.image_url,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": data.city,
          "addressRegion": data.state_abbr,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": data.lat || "0",
          "longitude": data.lon || "0"
        },
        "priceRange": "$$",
        "serviceArea": {
          "@type": "City",
          "name": data.city,
          "addressRegion": data.state_abbr,
          "addressCountry": "US"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Sarah Johnson"
            },
            "reviewBody": `Excellent ${data.service.toLowerCase()} service in ${data.city}. Professional team, fast response, and quality work.`
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": data.service,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": data.service,
                "description": data.intro_paragraph,
                "serviceType": data.service,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Emergency Water Pros",
                  "telephone": "+1-888-680-6768"
                },
                "areaServed": {
                  "@type": "City",
                  "name": data.city,
                  "addressRegion": data.state_abbr
                },
                "availability": "https://schema.org/InStock",
                "businessFunction": "https://schema.org/Sell"
              },
              "availability": "https://schema.org/InStock",
              "businessFunction": "https://schema.org/Sell"
            }
          ]
        }
      }

    default:
      throw new Error(`Unknown schema type: ${type}`)
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string, url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export function generateFAQSchema(faqs: Array<{ question: string, answer: string }>) {
  return {
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
}

export function generateHowToSchema(name: string, steps: Array<{ name: string, text: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  }
}