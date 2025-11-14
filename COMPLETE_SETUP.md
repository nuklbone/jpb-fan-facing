# Complete Setup & Deployment Guide

## 🎯 Quick Start

### Step 1: Environment Variables Setup

```powershell
# Run the setup script (or manually copy .env.local.example)
.\scripts\setup-env.ps1

# Then edit .env.local and add your actual API keys
```

**Required Services:**
1. **Supabase** - https://app.supabase.com
   - Create project
   - Get URL and API keys from Settings → API
   
2. **Resend** - https://resend.com
   - Sign up and verify domain
   - Get API key from API Keys section
   
3. **Bandsintown** - Already configured!
   - Default app ID: `21104e6fc9bc9f230d92fca25d397c36`
   - Artist: `James Pitts Band`

4. **Shopify** (Optional) - https://shopify.com
   - Only needed if using merch store
   - Get tokens from Admin → Settings → Apps → Development

### Step 2: Copy Images

```powershell
# Run the image copy script
.\scripts\copy-images.ps1
```

This will organize images from `../JPB PICS` into:
- `public/images/hero/` - Homepage backgrounds
- `public/images/shows/` - Show photos
- `public/images/gallery/` - Photo gallery
- `public/images/merch/` - Merchandise photos
- `public/images/band/` - Band member photos
- `public/images/logos/` - Logos and branding

### Step 3: Database Setup (Supabase)

1. Go to your Supabase project dashboard
2. Open SQL Editor
3. Run `supabase/schema.sql` to create tables
4. Optionally run `supabase/seed.sql` for test data

### Step 4: Test Locally

```powershell
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 and test:
- [ ] All pages load
- [ ] Forms submit correctly
- [ ] Images display
- [ ] Spotify embeds work
- [ ] Mobile menu works
- [ ] Navigation is smooth

### Step 5: Prepare for Deployment

```powershell
# Run deployment preparation script
.\scripts\deploy.ps1
```

This will:
- Build the project to check for errors
- Show Git status
- Optionally commit and push changes

### Step 6: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Import repository: `nuklbone/jpb-fan-facing`
3. Configure:
   - **Root Directory:** `fan-facing-site`
   - **Framework Preset:** Next.js (auto-detected)
4. Add Environment Variables:
   - Copy all from `.env.local` (except `NEXT_PUBLIC_APP_URL`)
   - Add them in Vercel dashboard
5. Click "Deploy"

#### Option B: Via Vercel CLI

```powershell
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd fan-facing-site
vercel
```

### Step 7: Post-Deployment

1. **Test Live Site:**
   - Visit your Vercel URL
   - Test all functionality
   - Submit test forms
   - Check email delivery

2. **Set Custom Domain (Optional):**
   - In Vercel project → Settings → Domains
   - Add your domain
   - Update DNS records

3. **Configure Analytics (Optional):**
   - Add Google Analytics ID to Vercel env vars
   - Enable Vercel Analytics in dashboard

## 📋 Environment Variables Checklist

Copy these to Vercel dashboard:

- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `RESEND_API_KEY`
- [ ] `RESEND_FROM_EMAIL`
- [ ] `BANDSINTOWN_APP_ID`
- [ ] `BANDSINTOWN_ARTIST`
- [ ] `ADMIN_EMAIL`
- [ ] `FAN_SUPPORT_EMAIL`
- [ ] `SHOPIFY_*` (if using Shopify)
- [ ] `NEXT_PUBLIC_GA_ID` (if using analytics)

## 🖼️ Image Organization

After running `copy-images.ps1`, update these files to use actual images:

1. **Homepage** (`src/app/page.tsx`):
   - Hero background: `/images/hero/hero-bg.jpg`

2. **Shows Page** (`src/app/shows/page.tsx`):
   - Tour background: `/images/shows/tour-bg.jpg`

3. **Photo Gallery** (`src/app/photos/page.tsx`):
   - Gallery images: `/images/gallery/*.jpg`

4. **About Page** (`src/app/about/page.tsx`):
   - Band photos: `/images/band/*.jpg`

## 🔧 Troubleshooting

### Build Errors

**Missing env vars:**
- Ensure `.env.local` has all required variables
- For Vercel, add all vars in dashboard

**TypeScript errors:**
- Run `npm run build` locally first
- Fix any type errors before deploying

### Runtime Errors

**API routes not working:**
- Check Vercel function logs
- Verify environment variables are set

**Database errors:**
- Verify Supabase credentials
- Check Row Level Security policies

**Email not sending:**
- Verify Resend API key
- Check domain verification in Resend
- Review email logs in Resend dashboard

### Image Issues

**Images not loading:**
- Ensure images are in `public/images/`
- Check file paths in components
- Verify file extensions match

## 📊 Feature Status

- ✅ All pages built and functional
- ✅ API routes working
- ✅ Forms with validation
- ✅ Spotify embeds
- ✅ Bandsintown integration
- ✅ Responsive design
- ✅ SEO meta tags
- ✅ Error handling
- ✅ Loading states
- ⏳ Images from JPB PICS (run script)
- ⏳ Supabase setup (manual)
- ⏳ Email delivery (add Resend key)
- ⏳ Shopify integration (optional)

## 🚀 Next Steps After Deployment

1. **Content:**
   - Add real show dates
   - Update band bio with latest info
   - Add actual merch products

2. **SEO:**
   - Submit sitemap to Google Search Console
   - Verify robots.txt
   - Check meta descriptions

3. **Marketing:**
   - Share on social media
   - Add to email signatures
   - Link from existing profiles

4. **Monitoring:**
   - Set up error tracking (Sentry, etc.)
   - Monitor analytics
   - Track form submissions

## 📞 Support

For issues or questions:
- Check Vercel logs: Project → Deployments → [Latest] → Logs
- Check Supabase logs: Project → Logs
- Review error messages in browser console

---

**Ready to deploy?** Run `.\scripts\deploy.ps1` to get started!

