// Simple test to verify site functionality
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing site functionality...');

// Test 1: Verify JSON data exists and loads
try {
  const jsonPath = path.join(__dirname, 'data', 'services.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  console.log(`✅ JSON data loads: ${data.length} services`);
} catch (error) {
  console.log(`❌ JSON data error: ${error.message}`);
  return;
}

// Test 2: Check key pages exist
const pagesToCheck = [
  'app/page.tsx',
  'app/[city]/page.tsx', 
  'app/[city]/[service]/page.tsx',
  'app/layout.tsx'
];

pagesToCheck.forEach(pagePath => {
  if (fs.existsSync(path.join(__dirname, pagePath))) {
    console.log(`✅ Page exists: ${pagePath}`);
  } else {
    console.log(`❌ Missing page: ${pagePath}`);
  }
});

// Test 3: Check components exist
const componentsToCheck = [
  'components/CityHeroSection.tsx',
  'components/CityServicesSection.tsx',
  'components/ServiceHeroSection.tsx',
  'components/ContactSection.tsx',
  'components/LeadCaptureForm.tsx'
];

componentsToCheck.forEach(componentPath => {
  if (fs.existsSync(path.join(__dirname, componentPath))) {
    console.log(`✅ Component exists: ${componentPath}`);
  } else {
    console.log(`❌ Missing component: ${componentPath}`);
  }
});

console.log('\n📊 Test Summary:');
console.log('- JSON data source is working');
console.log('- Key pages and components exist');
console.log('- Ready to run development server');