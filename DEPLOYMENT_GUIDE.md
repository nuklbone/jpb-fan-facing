# Deployment Guide - James Pitts Band Fan-Facing Website

## 📋 Pre-Deployment Checklist

### ✅ Step 1: Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Fill in your `.env.local` file with real values:**
   - **Supabase:** Create project at https://app.supabase.com
   - **Resend:** Sign up at https://resend.com and get API key
   - **Bandsintown:** Already configured with default app ID
   - **Shopify:** Optional - only if using merch store
   - **Admin Emails:** Update to your actual email addresses

3. **For Vercel deployment**, you'll also need to add these in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local` (except `NEXT_PUBLIC_APP_URL`)

### ✅ Step 2: Image Organization

Images from `JPB PICS` folder should be organized in `public/images/`:

```
public/images/
├── hero/              # Homepage hero backgrounds
├── shows/             # Show photos
├── gallery/           # Photo gallery images
├── merch/             # Merchandise photos
├── band/              # Band member photos
└── logos/             # Logos and branding
```

**To copy images (run from fan-facing-site directory):**
```bash
# Create image directories
mkdir -p public/images/hero
mkdir -p public/images/shows
mkdir -p public/images/gallery
mkdir -p public/images/merch
mkdir -p public/images/band
mkdir -p public/images/logos

# Copy images (adjust paths as needed)
# Windows PowerShell:
Copy-Item "../JPB PICS/*.jpg" "public/images/gallery/" -Recurse
Copy-Item "../JPB PICS/homepage 2.jpg" "public/images/hero/" -Force
Copy-Item "../JPB PICS/JPB 1 Sheet.jpg" "public/images/logos/" -Force
```

### ✅ Step 3: Database Setup (Supabase)

1. **Create Supabase Project:**
   - Go to https://app.supabase.com
   - Create new project
   - Note your project URL and API keys

2. **Run Schema:**
   - Open SQL Editor in Supabase dashboard
   - Copy contents of `supabase/schema.sql`
   - Paste and execute

3. **Seed Data (Optional):**
   - Copy contents of `supabase/seed.sql`
   - Paste and execute in SQL Editor

4. **Update `.env.local` with Supabase credentials**

### ✅ Step 4: Git Setup & Commit

1. **Check current status:**
   ```bash
   git status
   ```

2. **Stage all changes:**
   ```bash
   git add .
   ```

3. **Commit:**
   ```bash
   git commit -m "Complete fan-facing website build with all pages and features"
   ```

4. **Push to GitHub:**
   ```bash
   git push origin main
   ```

### ✅ Step 5: Vercel Deployment

#### Option A: Via Vercel Dashboard (Recommended)

1. **Connect Repository:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository: `nuklbone/jpb-fan-facing`

2. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `fan-facing-site`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install`

3. **Add Environment Variables:**
   - Copy all variables from `.env.local` except `NEXT_PUBLIC_APP_URL`
   - Vercel will auto-set the app URL

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

#### Option B: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd fan-facing-site
   vercel
   ```

4. **Follow prompts:**
   - Link to existing project or create new
   - Set root directory: `fan-facing-site`
   - Add environment variables when prompted

### ✅ Step 6: Post-Deployment

1. **Test Your Live Site:**
   - Visit your Vercel URL
   - Test all pages
   - Submit test forms
   - Check email delivery

2. **Set Custom Domain (Optional):**
   - In Vercel project settings
   - Go to "Domains"
   - Add your custom domain
   - Follow DNS instructions

3. **Configure Analytics:**
   - Add Google Analytics if desired
   - Update `NEXT_PUBLIC_GA_ID` in Vercel env vars

4. **Monitor:**
   - Check Vercel dashboard for build logs
   - Monitor error logs
   - Set up uptime monitoring

## 🔧 Troubleshooting

### Build Errors

**Issue:** Missing environment variables
- **Solution:** Ensure all required vars are in Vercel dashboard

**Issue:** TypeScript errors
- **Solution:** Run `npm run build` locally first to catch errors

**Issue:** Image 404s
- **Solution:** Ensure images are in `public/images/` and referenced correctly

### Runtime Errors

**Issue:** API routes not working
- **Solution:** Check serverless function logs in Vercel dashboard

**Issue:** Database connection errors
- **Solution:** Verify Supabase URL and keys are correct in Vercel env vars

**Issue:** Email not sending
- **Solution:** Verify Resend API key and domain verification

## 📊 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Emails are delivered
- [ ] Images load properly
- [ ] Spotify embeds work
- [ ] Bandsintown shows display (if API configured)
- [ ] Mobile responsive design works
- [ ] SEO meta tags present
- [ ] Analytics tracking (if configured)
- [ ] Custom domain configured (if applicable)

## 🔄 Continuous Deployment

Vercel automatically deploys on every push to `main` branch:
- Push to GitHub → Automatic build → Deploy
- Preview deployments for pull requests

## 📝 Environment Variables Reference

### Required for Production:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `BANDSINTOWN_APP_ID`
- `BANDSINTOWN_ARTIST`
- `ADMIN_EMAIL`
- `FAN_SUPPORT_EMAIL`

### Optional:
- `SHOPIFY_*` (if using merch store)
- `NEXT_PUBLIC_GA_ID` (for analytics)
- `MAILCHIMP_*` (if using Mailchimp)

## 🎯 Next Steps After Deployment

1. **Content Updates:**
   - Add real images from JPB PICS
   - Update show dates with real events
   - Add actual merch products (if using Shopify)

2. **SEO Optimization:**
   - Submit sitemap to Google Search Console
   - Verify robots.txt is working
   - Check meta tags on all pages

3. **Performance:**
   - Optimize images (use Next.js Image component)
   - Enable Vercel Analytics
   - Monitor Core Web Vitals

4. **Marketing:**
   - Share site on social media
   - Add to email signatures
   - Link from existing social profiles

---

**Need Help?**
- Check Vercel logs: Project → Deployments → [Latest] → Functions/Logs
- Check Supabase logs: Project → Logs
- Check Resend dashboard for email delivery status

