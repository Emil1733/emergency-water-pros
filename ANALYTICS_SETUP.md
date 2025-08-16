# Analytics Setup Guide - Emergency Water Pros

## Google Analytics 4 Setup

### 1. Create Google Analytics 4 Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account named "Emergency Water Pros"
4. Create a property named "Emergency Water Pros Website"
5. Set up data stream for "emergencywaterpros.com"
6. Copy the Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure Environment Variables
Update your `.env.local` file with your actual GA4 Measurement ID:

```bash
# Replace G-XXXXXXXXXX with your actual measurement ID
NEXT_PUBLIC_GA_ID=G-ABCD123456
```

### 3. Deploy and Verify
1. Deploy the changes to production
2. Wait 24-48 hours for data to appear
3. Check Google Analytics for real-time data

## Google Search Console Setup

### 1. Add Property to Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter "https://emergencywaterpros.com"

### 2. Verify Ownership (Option A: Meta Tag)
1. Choose "HTML tag" verification method
2. Copy the verification code
3. Add it to your `.env.local`:
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code_here
```
4. Deploy to production
5. Click "Verify" in Search Console

### 2. Verify Ownership (Option B: HTML File)
1. Choose "HTML file upload" verification method
2. Download the verification file
3. Replace `/public/google-site-verification.html` with the downloaded file
4. Deploy to production
5. Click "Verify" in Search Console

## Analytics Events Being Tracked

### Automatic Events
- **Page Views**: Tracked on all city and service pages
- **Core Web Vitals**: LCP, INP, CLS, FCP, TTFB performance metrics
- **Form Submissions**: Lead capture form success/failure
- **Phone Clicks**: Emergency banner phone button clicks

### Custom Events
- `form_submission`: When users submit the lead capture form
- `phone_click`: When users click phone numbers
- `service_view`: When users view city or service pages
- `web_vitals`: Core Web Vitals performance data

### Event Parameters
All events include:
- `timestamp`: When the event occurred
- `page_location`: Current page URL
- `page_title`: Current page title
- Custom parameters specific to each event type

## Monitoring and Analysis

### Key Metrics to Watch
1. **Lead Generation**: Form submission rates by city/service
2. **Phone Engagement**: Click-through rates on phone numbers
3. **Page Performance**: Core Web Vitals scores
4. **User Journey**: Most viewed cities and services
5. **Traffic Sources**: Where users come from

### Recommended Dashboards
1. **Lead Conversion Funnel**: Page view → Form view → Form submission
2. **City Performance**: Which cities generate most leads
3. **Service Popularity**: Most requested services
4. **Technical Performance**: Core Web Vitals trends

## Advanced Setup (Optional)

### Enhanced Ecommerce Tracking
For future expansion, consider tracking:
- Service inquiry values
- Lead quality scoring
- Customer lifetime value

### Custom Dimensions
Set up custom dimensions for:
- Service Type
- City/State
- Lead Source
- Device Type
- Time of Day

## Troubleshooting

### Analytics Not Working
1. Check `.env.local` has correct GA4 ID
2. Verify deployment includes environment variables
3. Check browser console for gtag errors
4. Confirm GA4 property is set up correctly

### Search Console Verification Failed
1. Ensure verification file is accessible at root domain
2. Check meta tag is properly formatted
3. Wait 24 hours and try verification again
4. Clear CDN cache if using one

## Data Privacy & GDPR Compliance

### Current Implementation
- No personal data collected without consent
- Analytics data is anonymized
- Performance metrics don't include personal information

### For EU Users
Consider adding:
- Cookie consent banner
- Privacy policy updates
- Data retention policies
- User data deletion capabilities

## Next Steps

After analytics are live:
1. Set up conversion goals in GA4
2. Create custom audiences for remarketing
3. Connect to Google Ads for campaign optimization
4. Set up automated reports and alerts