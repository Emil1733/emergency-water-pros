# Emergency Water Pros - Programmatic SEO

A Next.js 14 application implementing programmatic SEO for water damage restoration services across California cities. Features dynamic routing, local SEO optimization, and lead capture with Supabase integration.

## 🎯 Project Goals

- **Rank 1-3** for local service keywords (e.g., "water damage restoration Los Angeles")
- Generate **70 SEO-optimized pages** (10 cities × 6 services + 10 city landing pages)
- **Capture leads** efficiently with Supabase database integration
- **Scale efficiently** with programmatic generation

## 🏗️ Architecture

### Dynamic Routing Structure
```
/ (homepage)
/[city] (city landing page with all services)
/[city]/[service] (specific service page)

Examples:
/los-angeles (all services in LA)
/los-angeles/water-damage-restoration
/san-diego/mold-removal
```

### Data Structure
- **CSV Data**: 10 California cities × 6 services = 60 service pages
- **Services**: Water Damage, Fire Damage, Mold Removal, Storm Damage, Sewage Cleanup, Basement Flooding
- **Cities**: Los Angeles, San Diego, San Francisco, San Jose, Fresno, Sacramento, Long Beach, Oakland, Bakersfield, Anaheim

## 🚀 Features

### SEO Optimization
- ✅ Unique meta titles and descriptions per page
- ✅ Localized content with city-specific information
- ✅ Schema.org markup (LocalBusiness + Service)
- ✅ Auto-generated sitemap.xml and robots.txt
- ✅ Click-to-call buttons with tel: links
- ✅ Optimized page load speeds

### Lead Capture
- ✅ Emergency contact forms with validation
- ✅ Supabase database integration
- ✅ Fast 5-field form (Name, Phone, Email, Service, Description)
- ✅ City pre-filled from URL parameters
- ✅ Mobile-optimized for emergency situations

### Design Consistency
- ✅ Matches existing Los Angeles page design exactly
- ✅ Consistent component structure and styling
- ✅ Responsive design for all devices
- ✅ Emergency-focused UI with clear CTAs

## 📁 Project Structure

```
├── app/
│   ├── [city]/
│   │   ├── page.tsx              # City landing pages
│   │   └── [service]/
│   │       └── page.tsx          # Individual service pages
│   ├── api/
│   │   └── leads/
│   │       └── route.ts          # Lead capture API
│   ├── sitemap.ts               # Auto-generated sitemap
│   ├── robots.ts                # SEO robots configuration
│   └── layout.tsx               # Root layout
├── components/
│   ├── CityHeroSection.tsx      # City landing page hero
│   ├── CityServicesSection.tsx  # Services grid for city pages
│   ├── ServiceHeroSection.tsx   # Service page hero
│   ├── ServiceProcessSection.tsx # Service process explanation
│   ├── LeadCaptureForm.tsx      # Contact form with Supabase
│   └── ContactSection.tsx       # Contact section with form
├── lib/
│   └── csvData.ts              # CSV parsing utilities
└── data/
    └── ca_seed_services_batch1.csv # Service data
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + shadcn/ui components
- **SEO**: Built-in Next.js SEO features + custom schema
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 📊 SEO Strategy

### Keyword Targeting
- **Primary**: "[service] [city]" (e.g., "water damage restoration Los Angeles")
- **Secondary**: "emergency [service] [city]", "[service] near me"
- **Long-tail**: "[service] [city] [qualifier]" (e.g., "water damage restoration Los Angeles certified")

### Content Differentiation
- City-specific landmarks and references
- Local phone numbers and addresses
- Unique testimonials per city
- Service area maps with actual city locations
- Population and demographic data integration

## 🚦 Getting Started

### 1. Installation
```bash
git clone [repository]
cd emergency-water-pros
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
```

Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Database Setup
Follow the instructions in `SUPABASE_SETUP.md` to configure your database.

### 4. Development
```bash
npm run dev
```

Visit `http://localhost:3000` to see the homepage.

## 📈 Performance Metrics

### Page Generation
- **70 total pages** generated from CSV data
- **Sub-second build times** with efficient data parsing
- **Optimized images** and lazy loading
- **Minimal JavaScript** for fast mobile loading

### SEO Scores (Target)
- **Lighthouse SEO**: 95+ score
- **Core Web Vitals**: All green
- **Mobile-friendly**: 100% responsive
- **Page Speed**: <3s load time

## 🔧 Customization

### Adding New Cities
1. Add new rows to `ca_seed_services_batch1.csv`
2. Include all 6 services per city
3. Run build to generate new pages automatically

### Adding New Services
1. Add new service type to CSV
2. Update service icons in components
3. Add service-specific testimonials

### Styling Changes
- Modify Tailwind classes in components
- Update `globals.css` for global styles
- Customize shadcn/ui component themes

## 📞 Lead Management

### Lead Capture Flow
1. User fills emergency contact form
2. Data validated and stored in Supabase
3. Email/SMS notifications sent to team
4. Lead status tracked in dashboard

### Lead Data Structure
- Contact info (name, phone, email)
- Service type and description
- Location data (city, state)
- Source tracking (SEO page, referrer)
- Timestamps and status

## 🔐 Security

- Environment variables for sensitive data
- Supabase Row Level Security (RLS)
- API rate limiting
- Input validation and sanitization
- No client-side secrets exposure

## 📱 Mobile Optimization

- Emergency-first design for mobile users
- Click-to-call buttons prominently placed
- Fast form submission for urgent situations
- Optimized for poor network conditions
- Touch-friendly interface elements

## 🎯 SEO Best Practices Implemented

1. **Technical SEO**
   - Clean URL structure
   - Proper heading hierarchy (H1, H2, H3)
   - Image alt tags with local keywords
   - Fast loading speeds
   - Mobile-first indexing ready

2. **Local SEO**
   - City-specific schema markup
   - Local business information
   - Google Maps integration
   - Service area definitions
   - Location-based content

3. **Content SEO**
   - Unique content per page
   - Local keyword integration
   - Service-specific information
   - Trust signals and certifications
   - Customer testimonials

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Environment Variables
Set these in your deployment platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 🔍 Monitoring

### Analytics Setup
- Google Analytics 4 for traffic tracking
- Google Search Console for SEO monitoring
- Supabase analytics for lead conversion
- Performance monitoring with Vercel Analytics

### Key Metrics to Track
- Organic traffic by city/service page
- Lead conversion rates per page
- Average response time to leads
- Search ranking positions for target keywords

## 📝 License

This project is proprietary to Emergency Water Pros.

---

**Emergency Water Pros**: Professional water damage restoration services across California. 24/7 emergency response with IICRC-certified technicians.