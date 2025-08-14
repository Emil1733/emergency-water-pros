# Troubleshooting Guide

## 🔧 Common Issues & Solutions

### Issue: 404 Page Not Found

**Symptoms:**
- Homepage shows "404 This page could not be found"
- City pages like `/los-angeles` show 404
- Service pages like `/los-angeles/water-damage-restoration` show 404

**Solutions:**

1. **Check Server Status**
   ```bash
   npm run dev
   ```
   Make sure you see: "✓ Ready in [time]s"

2. **Verify File Structure**
   Your `/app` directory should look like:
   ```
   app/
   ├── page.tsx                    (Homepage)
   ├── [city]/
   │   ├── page.tsx               (City pages)
   │   └── [service]/
   │       └── page.tsx           (Service pages)
   ├── los-angeles/
   │   └── page.tsx               (Static LA page)
   ├── water-restoration/
   │   └── page.tsx               (Static homepage)
   └── layout.tsx
   ```

3. **Test Individual Routes**
   - ✅ Homepage: http://localhost:3000 or http://localhost:3001
   - ✅ Water Restoration: http://localhost:3001/water-restoration
   - ✅ Los Angeles: http://localhost:3001/los-angeles
   - ✅ City Page: http://localhost:3001/san-diego
   - ✅ Service Page: http://localhost:3001/san-diego/water-damage-restoration

4. **Clear Next.js Cache**
   ```bash
   rm -rf .next
   npm run build
   npm run dev
   ```

### Issue: CSV Data Not Loading

**Symptoms:**
- Dynamic pages show errors about missing city data
- Build process takes very long or fails

**Solutions:**

1. **Verify CSV File Location**
   ```bash
   ls data/ca_seed_services_batch1.csv
   ```

2. **Test CSV Parsing**
   Create a test file `test-csv.js`:
   ```javascript
   const { parseCSVData } = require('./lib/csvData.ts');
   console.log('Cities:', parseCSVData().length);
   ```

3. **Check File Permissions**
   ```bash
   chmod 644 data/ca_seed_services_batch1.csv
   ```

### Issue: Components Not Found

**Symptoms:**
- Import errors for components
- Missing UI elements on pages

**Solutions:**

1. **Verify Component Imports**
   Check that these files exist:
   ```
   components/
   ├── CityHeroSection.tsx
   ├── CityServicesSection.tsx
   ├── ServiceHeroSection.tsx
   ├── LeadCaptureForm.tsx
   ├── ContactSection.tsx
   └── ui/
       ├── button.tsx
       ├── card.tsx
       ├── input.tsx
       └── textarea.tsx
   ```

2. **Check Missing Components**
   If any components are missing, you can create simple placeholder versions.

### Issue: Build Errors

**Symptoms:**
- TypeScript errors during build
- CSS compilation errors
- Webpack errors

**Solutions:**

1. **Fix TypeScript Errors**
   ```bash
   npm run type-check
   ```

2. **Fix CSS Issues**
   Make sure `globals.css` starts with:
   ```css
   @tailwind base;
   @tailwind components;  
   @tailwind utilities;
   ```

3. **Update Dependencies**
   ```bash
   npm update
   npm audit fix
   ```

### Issue: Supabase Errors

**Symptoms:**
- Form submissions fail
- API route errors in console

**Solutions:**

1. **Check Environment Variables**
   Verify `.env.local` exists with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_key
   ```

2. **Test Without Supabase**
   The forms should work without Supabase - they'll just log to console.

3. **Check API Route**
   Visit: http://localhost:3001/api/leads
   Should show: "Method not allowed"

## 🚀 Quick Start Checklist

1. ✅ **Install Dependencies**
   ```bash
   npm install
   ```

2. ✅ **Start Development Server**
   ```bash
   npm run dev
   ```

3. ✅ **Test Homepage**
   Visit: http://localhost:3000 (or 3001)

4. ✅ **Test Dynamic Routes**
   - http://localhost:3001/los-angeles
   - http://localhost:3001/san-diego  
   - http://localhost:3001/san-diego/water-damage-restoration

5. ✅ **Test Form Submission**
   Fill out contact form and check browser console

6. ✅ **Build for Production**
   ```bash
   npm run build
   ```

## 🔍 Debug Commands

```bash
# Check file structure
ls -la app/

# Test CSV parsing
node -e "console.log(require('./lib/csvData.ts').parseCSVData().length)"

# Check port usage
netstat -an | grep 3000

# Clear everything and restart
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## 📞 Working Routes

If everything is set up correctly, these routes should work:

- ✅ `/` → Redirects to `/water-restoration`
- ✅ `/water-restoration` → Homepage  
- ✅ `/los-angeles` → Los Angeles city page
- ✅ `/san-diego` → San Diego city page (dynamic)
- ✅ `/san-diego/water-damage-restoration` → Service page
- ✅ `/san-francisco/mold-removal` → Service page
- ✅ `/api/leads` → API endpoint for forms

Total pages generated: **70+ pages**

## 💡 Tips

1. **Use Browser Dev Tools** to see specific error messages
2. **Check the Terminal** for build/runtime errors  
3. **Test Mobile View** for responsive design
4. **Verify Phone Links** work on mobile devices
5. **Check Network Tab** for failed API calls

The system is designed to be robust, but if you encounter issues, start with the Quick Start Checklist above!