-- Create the leads table for storing form submissions
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    service VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    city_slug VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    state_abbr VARCHAR(5) NOT NULL,
    description TEXT,
    source VARCHAR(50) DEFAULT 'website',
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);

-- Create an index on city_slug for analytics
CREATE INDEX IF NOT EXISTS idx_leads_city_slug ON public.leads (city_slug);

-- Create an index on service for analytics
CREATE INDEX IF NOT EXISTS idx_leads_service ON public.leads (service);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows reading all leads for service role
CREATE POLICY "Allow service role full access" ON public.leads
    FOR ALL USING (auth.role() = 'service_role');

-- Create a policy that allows inserting leads for authenticated and anonymous users
CREATE POLICY "Allow insert for all users" ON public.leads
    FOR INSERT WITH CHECK (true);

-- Create a function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing (optional)
-- INSERT INTO public.leads (name, phone, email, service, city, city_slug, state, state_abbr, description, source)
-- VALUES 
--     ('John Doe', '(555) 123-4567', 'john@example.com', 'Water Damage Restoration', 'Los Angeles', 'los-angeles', 'California', 'CA', 'Basement flooded after pipe burst', 'website'),
--     ('Jane Smith', '(555) 987-6543', 'jane@example.com', 'Mold Removal', 'San Francisco', 'san-francisco', 'California', 'CA', 'Found mold in bathroom', 'website');

-- Create a view for lead analytics (optional)
CREATE OR REPLACE VIEW public.lead_analytics AS
SELECT 
    city_slug,
    service,
    COUNT(*) as lead_count,
    COUNT(*) FILTER (WHERE status = 'new') as new_leads,
    COUNT(*) FILTER (WHERE status = 'contacted') as contacted_leads,
    COUNT(*) FILTER (WHERE status = 'converted') as converted_leads,
    DATE(created_at) as lead_date
FROM public.leads 
GROUP BY city_slug, service, DATE(created_at)
ORDER BY lead_date DESC, lead_count DESC;