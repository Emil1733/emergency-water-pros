import fs from 'fs'
import path from 'path'

export interface ServiceData {
  service: string
  service_slug: string
  slug: string
  city: string
  city_slug: string
  state: string
  state_abbr: string
  population: number
  image_url: string
  meta_title: string
  meta_description: string
  intro_paragraph: string
  why_choose_us: string
  map_embed_url: string
  lat?: string
  lon?: string
  state_fips: string
  place_fips: string
  place_geoid: string
  place_type: string
  classfp: string
  timezone: string
  service_keywords: string
  msa_cbsa_code: string
  county_name: string
  phone_placeholder: string
  service_area_radius_miles: number
}

let cachedData: ServiceData[] | null = null

export function loadServiceData(): ServiceData[] {
  if (cachedData) {
    return cachedData
  }

  try {
    console.log('📄 Loading JSON service data...')
    const jsonPath = path.join(process.cwd(), 'data', 'services.json')
    
    if (!fs.existsSync(jsonPath)) {
      console.error('❌ JSON file not found:', jsonPath)
      return []
    }
    
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
    const data: ServiceData[] = JSON.parse(jsonContent)
    
    cachedData = data
    console.log(`✅ Loaded ${data.length} services from JSON`)
    return data
    
  } catch (error) {
    console.error('❌ Error loading JSON data:', error)
    return []
  }
}

export function getCitiesData(): { city: string, city_slug: string, services: ServiceData[] }[] {
  const allData = loadServiceData()
  const citiesMap = new Map<string, ServiceData[]>()
  
  allData.forEach(item => {
    if (!citiesMap.has(item.city_slug)) {
      citiesMap.set(item.city_slug, [])
    }
    citiesMap.get(item.city_slug)!.push(item)
  })
  
  return Array.from(citiesMap.entries()).map(([city_slug, services]) => ({
    city: services[0]?.city || '',
    city_slug,
    services
  }))
}

export function getServiceBySlug(citySlug: string, serviceSlug: string): ServiceData | undefined {
  const allData = loadServiceData()
  return allData.find(item => 
    item.city_slug === citySlug && item.service_slug === serviceSlug
  )
}

export function getCityServices(citySlug: string): ServiceData[] {
  const allData = loadServiceData()
  return allData.filter(item => item.city_slug === citySlug)
}

// Legacy function names for compatibility
export const parseCSVData = loadServiceData