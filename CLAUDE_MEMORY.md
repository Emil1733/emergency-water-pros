# Claude Code Memory - Emergency Water Pros Project

## Project Overview
- **Project**: Next.js 14 programmatic SEO website for Emergency Water Pros (water damage restoration company)
- **Domain**: https://www.emergencywaterpros.com
- **GitHub**: https://github.com/Emil1733/emergency-water-pros.git
- **Hosting**: Vercel with auto-deployment from GitHub
- **Architecture**: 70 SEO-optimized pages (10 cities × 6 services + 10 city pages)

## Current Status (Last Session)
**URGENT ISSUE**: Button visibility problem with white text on white backgrounds - emergency buttons appearing invisible.

### Main Problem Identified
- Tailwind CSS was hardcoding emergency colors as `rgb(239 68 68)` instead of using CSS variables
- CSS variables for `--emergency`, `--emergency-foreground`, `--emergency-hover` were missing from compiled CSS
- Required direct CSS overrides with `!important` to fix

### Latest Actions Taken
1. **Fixed emergency button colors** with direct CSS overrides in `app/globals.css`:
   ```css
   .bg-emergency {
     background-color: var(--emergency) !important;
   }
   .text-emergency-foreground {
     color: var(--emergency-foreground) !important;
   }
   ```

2. **Converted emergency colors to HSL format** to match Tailwind structure:
   ```css
   --emergency: 0 84% 60%;
   --emergency-foreground: 0 0% 100%;
   --emergency-hover: 0 72% 50%;
   ```

3. **Fixed TypeScript error** in `components/ui/button.tsx` by adding `asChild?: boolean` to `LinkButtonProps` interface

4. **Latest commits**:
   - `8dbabd5` - Fix TypeScript error in Button component
   - `b05700a` - Fix emergency button colors with CSS overrides and HSL values
   - `f363fc6` - Trigger Vercel redeploy

### Current Issue
**Vercel build failing** - user reported production build failure. Need to investigate and fix build errors.

## Completed Tasks ✅
1. **Images optimized** - Next.js Image component with lazy loading
2. **Structured data** - LocalBusiness schema on all pages
3. **Git repository** - Set up and connected to GitHub
4. **Domain deployment** - emergencywaterpros.com on Vercel
5. **Button semantics** - Proper href links and accessibility
6. **Company branding** - Changed "AquaRestore Pro" to "Emergency Water Pros"

## Pending Tasks 📋
1. **[HIGH PRIORITY]** Fix Vercel build failure
2. **Error boundaries** and better 404 handling
3. **Google Analytics** and Search Console tracking
4. **Lead capture form** testing with Supabase integration
5. **Page loading optimization** and Core Web Vitals improvements
6. **Meta descriptions** and title tags for all pages
7. **Breadcrumb navigation** for better SEO

## Key Files Modified
- `app/globals.css` - Emergency color CSS variables and overrides
- `tailwind.config.ts` - Emergency color HSL format
- `components/ui/button.tsx` - TypeScript interface fix
- `components/ServicesSection.tsx` - Button variants
- `components/HeroSection.tsx` - Emergency button styling
- `components/ContactSection.tsx` - Emergency button styling

## Technical Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: Supabase for lead capture
- **Deployment**: Vercel with GitHub auto-deployment
- **SEO**: Programmatic generation with structured data

## User Feedback Pattern
User has consistently reported the same button visibility issue at https://www.emergencywaterpros.com/water-restoration/ where emergency buttons appear with invisible white text on white backgrounds. This was the main recurring problem throughout the session.

## Commands to Remember
- `npm run build` - Local build testing
- `npm run dev` - Development server
- `git status && git add . && git commit -m "message" && git push origin master` - Deploy changes
- Check live site: https://www.emergencywaterpros.com/water-restoration/

## Next Steps When Relaunched
1. **Investigate Vercel build failure** - check deployment logs and fix build errors
2. **Verify button visibility fix** once build succeeds
3. **Continue with error boundaries implementation** 
4. **Test lead capture form functionality**

## Important Notes
- Always test button visibility at `/water-restoration/` page specifically
- User expects proactive pushing to GitHub without asking
- Focus on practical fixes over explanations