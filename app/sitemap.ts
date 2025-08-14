import { MetadataRoute } from 'next'
import { parseCSVData, getCitiesData } from '@/lib/csvData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://emergencywaterpros.com'
  
  // Get all data
  const allServices = parseCSVData()
  const cities = getCitiesData()
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Homepage
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  })
  
  // City pages
  cities.forEach((city) => {
    sitemapEntries.push({
      url: `${baseUrl}/${city.city_slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })
  
  // Service pages for each city
  allServices.forEach((service) => {
    sitemapEntries.push({
      url: `${baseUrl}/${service.city_slug}/${service.service_slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })
  
  return sitemapEntries
}