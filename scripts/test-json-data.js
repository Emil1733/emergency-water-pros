// Test JSON data loading
const { loadServiceData, getCitiesData, getServiceBySlug, getCityServices } = require('../lib/serviceData.ts');

console.log('🧪 Testing JSON data loading...');

try {
  // Test loading all data
  const allData = loadServiceData();
  console.log(`✅ Loaded ${allData.length} services`);
  
  // Test cities data
  const cities = getCitiesData();
  console.log(`✅ Found ${cities.length} cities`);
  cities.forEach(city => {
    console.log(`   - ${city.city}: ${city.services.length} services`);
  });
  
  // Test specific service lookup
  const testService = getServiceBySlug('los-angeles', 'water-damage-restoration');
  if (testService) {
    console.log(`✅ Found service: ${testService.meta_title}`);
  } else {
    console.log('❌ Could not find test service');
  }
  
  // Test city services
  const laServices = getCityServices('los-angeles');
  console.log(`✅ Los Angeles has ${laServices.length} services`);
  
} catch (error) {
  console.error('❌ Error testing JSON data:', error.message);
}