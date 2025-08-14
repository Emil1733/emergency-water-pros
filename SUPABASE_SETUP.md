# Supabase Setup Instructions

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Choose a project name: `emergency-water-pros`
3. Create a strong database password
4. Select a region close to your users

## 2. Database Schema

Run this SQL in the Supabase SQL editor to create the leads table:

```sql
-- Create leads table
CREATE TABLE public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    
    -- Contact Information
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    
    -- Service Information
    service TEXT NOT NULL,
    description TEXT,
    
    -- Location Information
    city TEXT NOT NULL,
    city_slug TEXT NOT NULL,
    state TEXT NOT NULL,
    state_abbr TEXT NOT NULL,
    
    -- Lead Tracking
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'new',
    priority TEXT DEFAULT 'normal',
    
    -- Metadata
    user_agent TEXT,
    ip_address INET,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT
);

-- Create index for faster queries
CREATE INDEX idx_leads_created_at ON public.leads (created_at);
CREATE INDEX idx_leads_city_slug ON public.leads (city_slug);
CREATE INDEX idx_leads_status ON public.leads (status);
CREATE INDEX idx_leads_phone ON public.leads (phone);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for service role (API access)
CREATE POLICY "Service role can manage leads" ON public.leads
    FOR ALL USING (auth.role() = 'service_role');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER handle_leads_updated_at 
    BEFORE UPDATE ON public.leads
    FOR EACH ROW 
    EXECUTE FUNCTION public.handle_updated_at();
```

## 3. Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Optional: Email notifications
RESEND_API_KEY=your_resend_api_key
NOTIFICATION_EMAIL=your-team@emergencywaterpros.com

# Optional: SMS notifications  
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_phone
EMERGENCY_PHONE=+18009283791
```

## 4. Install Dependencies

```bash
npm install @supabase/supabase-js
npm install resend  # For email notifications
npm install twilio  # For SMS notifications
```

## 5. Update API Route

Uncomment the Supabase integration in `/app/api/leads/route.ts`:

```typescript
// Uncomment these lines:
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

// Uncomment the database insertion code
const { data, error } = await supabase
  .from('leads')
  .insert([leadData])
  .select()

if (error) {
  console.error('Supabase error:', error)
  return NextResponse.json(
    { error: 'Failed to save lead' },
    { status: 500 }
  )
}
```

## 6. Testing

1. Submit a test lead through your contact form
2. Check the Supabase dashboard to see if the lead was saved
3. Verify email/SMS notifications are working (if configured)

## 7. Lead Management Dashboard (Optional)

You can create a simple admin dashboard to view leads:

1. Go to Supabase Dashboard > Table Editor > leads
2. View and manage all leads directly in Supabase
3. Or build a custom admin panel using Next.js

## 8. Security Notes

- Never expose your `SUPABASE_SERVICE_ROLE_KEY` in client-side code
- The service role key is only used in API routes (server-side)
- RLS policies protect the leads table from unauthorized access
- Consider adding rate limiting to prevent spam submissions

## 9. Monitoring & Analytics

Consider adding:
- Lead volume tracking
- Conversion rate monitoring
- Response time metrics
- City/service performance analysis

This setup provides a robust foundation for capturing and managing leads from your programmatic SEO pages.