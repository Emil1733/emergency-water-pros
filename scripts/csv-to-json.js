const fs = require('fs');
const path = require('path');

// Read and convert CSV to JSON
function csvToJson() {
  try {
    console.log('📄 Reading CSV file...');
    const csvPath = path.join(__dirname, '..', 'data', 'ca_seed_services_batch1.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    
    const lines = csvContent.split('\n').filter(line => line.trim());
    console.log(`Found ${lines.length} lines`);
    
    // Parse headers
    const headerLine = lines[0];
    const headers = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < headerLine.length; i++) {
      const char = headerLine[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        headers.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    headers.push(current.trim());
    
    console.log(`Headers: ${headers.length}`);
    
    const data = [];
    
    // Parse data lines
    for (let lineIndex = 1; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      if (!line.trim()) continue;
      
      const values = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      
      if (values.length >= headers.length) {
        const row = {};
        headers.forEach((header, index) => {
          let value = values[index] || '';
          // Clean quotes
          value = value.replace(/^"|"$/g, '');
          row[header] = value;
        });
        
        // Convert specific fields to numbers
        row.population = parseInt(row.population) || 0;
        row.service_area_radius_miles = parseInt(row.service_area_radius_miles) || 30;
        
        data.push(row);
      }
    }
    
    console.log(`✅ Parsed ${data.length} records`);
    
    // Write JSON file
    const jsonPath = path.join(__dirname, '..', 'data', 'services.json');
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    console.log(`✅ Written to ${jsonPath}`);
    
    // Create summary
    const cities = [...new Set(data.map(item => item.city))];
    const services = [...new Set(data.map(item => item.service))];
    
    console.log(`\n📊 Summary:`);
    console.log(`Cities: ${cities.length} (${cities.join(', ')})`);
    console.log(`Services: ${services.length} (${services.join(', ')})`);
    console.log(`Total combinations: ${data.length}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

csvToJson();