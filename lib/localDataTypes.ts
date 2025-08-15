// Enhanced local data types for unique content generation

export interface LocalClimateData {
  flood_risk_zone: 'A' | 'AE' | 'X' | 'D' // FEMA flood zones
  average_rainfall_inches: number
  hurricane_risk: boolean
  wildfire_risk: 'high' | 'medium' | 'low'
  humidity_levels: {
    summer_avg: number
    winter_avg: number
  }
  freeze_days_per_year: number
  tornado_risk: boolean
}

export interface LocalHousingData {
  median_home_age: number
  median_home_value: number
  homes_with_basements_percent: number
  primary_construction_material: string[]
  population_density: number
  median_household_income: number
  flood_insurance_rate: number // Percentage of homes with flood insurance
}

export interface LocalRiskFactors {
  common_damage_causes: string[]
  peak_damage_months: string[]
  seasonal_weather_events: string[]
  building_code_adoption_year: number
  soil_type: 'clay' | 'sand' | 'loam' | 'rock'
  water_table_depth: 'shallow' | 'moderate' | 'deep'
}

export interface LocalBusinessData {
  local_competitors: string[]
  average_response_time_minutes: number
  insurance_companies_present: string[]
  building_permits_per_year: number
  recent_major_incidents: string[]
}

// Enhanced city data with local intelligence
export interface EnhancedCityData {
  // Existing fields
  city: string
  state: string
  population: number
  
  // New local data fields
  climate_data: LocalClimateData
  housing_data: LocalHousingData
  risk_factors: LocalRiskFactors
  business_data: LocalBusinessData
  
  // Generated content fields
  unique_selling_points: string[]
  local_expertise_content: string
  seasonal_recommendations: string[]
}

// Content generation helpers
export interface ContentTemplates {
  climate_intro: (data: LocalClimateData) => string
  risk_analysis: (risks: LocalRiskFactors) => string
  seasonal_advice: (climate: LocalClimateData, risks: LocalRiskFactors) => string[]
  local_expertise: (housing: LocalHousingData, business: LocalBusinessData) => string
}