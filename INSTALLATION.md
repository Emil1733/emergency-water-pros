# Installation Instructions

## Prerequisites

Ensure you have these installed on your system:
- **Node.js 18+** (https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Git** (for version control)

## Step 1: Install Dependencies

Run this command in your project directory:

```bash
npm install
```

This will install all required packages:

### Core Dependencies:
- **next** (14.1.0) - React framework
- **react** (18.2.0) - UI library  
- **react-dom** (18.2.0) - React DOM rendering
- **typescript** (5.3.3) - TypeScript support
- **tailwindcss** (3.4.1) - CSS framework

### UI Components:
- **@radix-ui/react-avatar** - Avatar component
- **@radix-ui/react-label** - Form labels
- **@radix-ui/react-slot** - Composition primitive
- **lucide-react** - Icon library
- **class-variance-authority** - Styling utilities
- **clsx** - Conditional classes
- **tailwind-merge** - Tailwind class merging

### Database:
- **@supabase/supabase-js** - Supabase client

### Development Tools:
- **eslint** - Code linting
- **autoprefixer** - CSS vendor prefixes
- **postcss** - CSS processing

## Step 2: Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Fill in your environment variables in `.env.local`:
```env
# Required for production
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key  
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=https://emergencywaterpros.com
```

## Step 3: Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:
- **Main site**: http://localhost:3000
- **City pages**: http://localhost:3000/los-angeles
- **Service pages**: http://localhost:3000/los-angeles/water-damage-restoration

## Step 4: Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## Step 5: Type Checking

To check TypeScript types:
```bash
npm run type-check
```

## Step 6: Linting

To run ESLint:
```bash
npm run lint
```

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Run `npm install` to ensure all dependencies are installed.

### Issue: TypeScript errors
**Solution**: 
1. Check your TypeScript configuration in `tsconfig.json`
2. Run `npm run type-check` to see specific errors
3. Ensure all imports have proper types

### Issue: Tailwind styles not working
**Solution**:
1. Verify `tailwind.config.ts` is properly configured
2. Check that `globals.css` imports are correct
3. Restart the development server

### Issue: Environment variables not working
**Solution**:
1. Ensure `.env.local` file exists in project root
2. Check variable names match exactly (case-sensitive)
3. Restart development server after changes
4. Use `NEXT_PUBLIC_` prefix for client-side variables

### Issue: Supabase connection errors
**Solution**:
1. Verify your Supabase URL and keys are correct
2. Check that your Supabase project is active
3. Follow the `SUPABASE_SETUP.md` guide for database setup

## File Structure Verification

Ensure your project has this structure:

```
emergency-water-pros/
├── app/
│   ├── [city]/
│   │   ├── page.tsx
│   │   └── [service]/
│   │       └── page.tsx
│   ├── api/
│   │   └── leads/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/
│   └── [various components].tsx
├── lib/
│   └── csvData.ts
├── data/
│   └── ca_seed_services_batch1.csv
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── .env.local (you create this)
```

## Production Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard

### Other Platforms
1. Build the project: `npm run build`  
2. Upload the `.next` folder and other files
3. Configure environment variables
4. Start with: `npm run start`

## Performance Verification

After installation, verify:
- ✅ All pages load without errors
- ✅ Forms submit successfully
- ✅ Phone numbers are clickable
- ✅ Images load properly
- ✅ Mobile responsive design works
- ✅ SEO meta tags appear correctly

## Support

If you encounter issues:
1. Check this installation guide
2. Review error messages carefully
3. Verify all environment variables
4. Check Node.js version compatibility
5. Try clearing node_modules and reinstalling

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```