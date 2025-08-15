import { LocalClimateData, LocalHousingData, LocalRiskFactors, LocalBusinessData } from './localDataTypes'

// Generate unique intro paragraphs based on local data
export function generateClimateIntro(city: string, climate: LocalClimateData): string {
  const intros: string[] = []
  
  if (climate.flood_risk_zone === 'A' || climate.flood_risk_zone === 'AE') {
    intros.push(`${city} sits in a high-risk flood zone, making professional water damage services critical for homeowners.`)
  }
  
  if (climate.average_rainfall_inches > 40) {
    intros.push(`With ${climate.average_rainfall_inches} inches of annual rainfall, ${city} faces frequent water intrusion challenges.`)
  } else if (climate.average_rainfall_inches < 15) {
    intros.push(`Despite ${city}'s dry climate (${climate.average_rainfall_inches}" annual rainfall), sudden storms can cause severe water damage to unprepared properties.`)
  }
  
  if (climate.hurricane_risk) {
    intros.push(`As a hurricane-prone area, ${city} requires specialized storm damage restoration expertise.`)
  }
  
  if (climate.wildfire_risk === 'high') {
    intros.push(`${city}'s high wildfire risk means residents need rapid fire damage restoration services when disaster strikes.`)
  }
  
  if (climate.humidity_levels.summer_avg > 70) {
    intros.push(`${city}'s high summer humidity (${climate.humidity_levels.summer_avg}%) creates perfect conditions for mold growth after water damage.`)
  }
  
  return intros.join(' ') || `Professional emergency restoration services in ${city}.`
}

// Generate risk analysis based on local factors
export function generateRiskAnalysis(city: string, risks: LocalRiskFactors, housing: LocalHousingData, climate: LocalClimateData): string {
  const analysis: string[] = []
  
  if (housing.median_home_age > 40) {
    analysis.push(`With a median home age of ${housing.median_home_age} years, ${city} properties often feature aging plumbing systems prone to failures.`)
  }
  
  if (risks.soil_type === 'clay') {
    analysis.push(`${city}'s clay soil expands and contracts with moisture changes, frequently causing foundation shifts and water intrusion.`)
  }
  
  if (risks.common_damage_causes.includes('burst pipes') && climate.freeze_days_per_year > 30) {
    analysis.push(`${city} experiences ${climate.freeze_days_per_year} freeze days annually, significantly increasing burst pipe incidents.`)
  }
  
  if (housing.homes_with_basements_percent > 30) {
    analysis.push(`Over ${housing.homes_with_basements_percent}% of ${city} homes have basements, requiring specialized below-grade water damage expertise.`)
  }
  
  return analysis.join(' ') || `${city} faces unique water damage challenges requiring local expertise.`
}

// Generate seasonal recommendations
export function generateSeasonalAdvice(city: string, climate: LocalClimateData, risks: LocalRiskFactors): string[] {
  const advice: string[] = []
  
  risks.peak_damage_months.forEach(month => {
    if (month === 'January' || month === 'February' || month === 'December') {
      if (climate.freeze_days_per_year > 15) {
        advice.push(`${month}: Monitor for frozen pipe damage as ${city} temperatures drop below freezing`)
      }
    }
    
    if (month === 'June' || month === 'July' || month === 'August') {
      if (climate.hurricane_risk) {
        advice.push(`${month}: Hurricane season preparedness is critical for ${city} properties`)
      }
      if (climate.humidity_levels.summer_avg > 65) {
        advice.push(`${month}: High humidity increases mold risk after any water intrusion in ${city}`)
      }
    }
    
    if (month === 'March' || month === 'April') {
      if (climate.average_rainfall_inches > 30) {
        advice.push(`${month}: Spring rains often overwhelm ${city}'s drainage systems`)
      }
    }
  })
  
  return advice.length > 0 ? advice : [`Year-round vigilance prevents costly water damage in ${city}`]
}

// Generate local expertise content
export function generateLocalExpertise(city: string, housing: LocalHousingData, business: LocalBusinessData): string {
  const expertise: string[] = []
  
  if (business.average_response_time_minutes < 60) {
    expertise.push(`Our ${city} team maintains a ${business.average_response_time_minutes}-minute average response time, faster than the industry standard.`)
  }
  
  if (housing.median_home_value > 500000) {
    expertise.push(`Understanding ${city}'s luxury home market (median value $${housing.median_home_value.toLocaleString()}), we provide premium restoration services that protect your investment.`)
  } else if (housing.median_home_value < 200000) {
    expertise.push(`We offer cost-effective restoration solutions tailored to ${city}'s affordable housing market.`)
  }
  
  if (business.building_permits_per_year > 1000) {
    expertise.push(`With ${business.building_permits_per_year} new construction permits annually, our ${city} team stays current with the latest building materials and techniques.`)
  }
  
  expertise.push(`Our certified technicians have restored over 500 ${city} properties, understanding the unique challenges of your local environment.`)
  
  return expertise.join(' ')
}

// Main content enhancement function
export function enhanceContentWithLocalData(
  city: string, 
  service: string,
  climate: LocalClimateData,
  housing: LocalHousingData, 
  risks: LocalRiskFactors,
  business: LocalBusinessData
) {
  return {
    enhanced_intro: generateClimateIntro(city, climate),
    risk_analysis: generateRiskAnalysis(city, risks, housing, climate),
    seasonal_advice: generateSeasonalAdvice(city, climate, risks),
    local_expertise: generateLocalExpertise(city, housing, business),
    meta_description_enhancement: `Specialized ${service.toLowerCase()} in ${city}. Local experts understanding ${city}'s unique ${risks.soil_type} soil and ${climate.flood_risk_zone} flood zone challenges.`
  }
}