# Testing Guide - James Pitts Band Fan-Facing Website

## Quick Start

1. **Start Development Server:**
   ```bash
   cd fan-facing-site
   npm run dev
   ```

2. **Open Browser:**
   - Visit: http://localhost:3000

## Pages to Test

### Core Pages
- ✅ **Homepage** (`/`) - Hero, Spotify embeds, shows preview, Inner Circle CTA
- ✅ **Shows** (`/shows`) - Bandsintown integration, show cards, filters
- ✅ **Music** (`/music`) - Spotify embeds, album showcase
- ✅ **Join** (`/join`) - Tier comparison, signup form
- ✅ **Contact** (`/contact`) - Fan mail & city request forms
- ✅ **About** (`/about`) - Bio, milestones, band members
- ✅ **Videos** (`/videos`) - Video gallery sections
- ✅ **News** (`/news`) - Announcements, fan spotlights
- ✅ **Store** (`/store`) - Featured drops, bundles
- ✅ **Tickets** (`/tickets`) - VIP tiers, FAQs
- ✅ **Photos** (`/photos`) - Photo galleries
- ✅ **Social Hub** (`/social-hub`) - Fan feed
- ✅ **Privacy** (`/privacy`) - Privacy policy
- ✅ **Terms** (`/terms`) - Terms of service

### Dynamic Routes
- ✅ `/shows/calendar/concord-2025-03-14` - City show page
- ✅ `/shows/calendar/concord-2025-03-14/plan-your-night` - Planning guide

## Forms to Test

### 1. Inner Circle Signup (`/join`)
- Fill out form and submit
- Should show loading state
- Should show success/error message
- Check browser console for API calls

### 2. Contact Form (`/contact`)
- Fill out fan mail form
- Submit and verify response
- Try city request form
- Verify validation works

## Features to Test

### Spotify Embeds
- Navigate to `/music` or homepage
- Verify Spotify players load and play
- Ensure embeds don't redirect off-site

### Bandsintown Integration
- Navigate to `/shows`
- Check if shows load (may be empty if API not configured)
- Verify fallback shows display

### Responsive Design
- Test on mobile (narrow browser window)
- Check header hamburger menu
- Verify all pages are mobile-friendly

### Navigation
- Click through all main nav links
- Test footer links
- Verify mobile menu works

### Loading States
- Check `/shows` page for Suspense loading skeleton
- Verify loading states appear during API calls

## API Endpoints to Test

### Health Check
```bash
curl http://localhost:3000/api/health
```
Should return service status

### Join Endpoint (POST)
```bash
curl -X POST http://localhost:3000/api/join \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","firstName":"Test"}'
```

### Contact Endpoint (POST)
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## Common Issues & Solutions

### Build Errors
- **Issue:** Missing environment variables
- **Solution:** Create `.env.local` from `.env.local.example` (can be empty for testing)

### Spotify Not Loading
- **Issue:** Embeds not appearing
- **Solution:** Check browser console for CORS/embed errors

### Forms Not Submitting
- **Issue:** API errors in console
- **Solution:** Check that Resend API key is set (or forms will skip email sending)

### Shows Not Loading
- **Issue:** No shows appear
- **Solution:** Bandsintown API may need configuration - fallback shows should display

## Expected Behavior

✅ All pages should load without errors
✅ Navigation should work smoothly
✅ Forms should validate inputs
✅ Spotify embeds should play music
✅ Mobile menu should toggle
✅ Loading states should appear
✅ Error pages should show for 404s
✅ Build should complete successfully

## Browser Compatibility

Test in:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (if on Mac)
- ✅ Mobile browsers

## Performance

- Page load times should be fast
- Spotify embeds should lazy load
- Images should be optimized (once added)
- No console errors

## Accessibility

- All forms should be keyboard navigable
- Images should have alt text (once added)
- Color contrast should meet WCAG standards
- Screen reader compatible

---

**Note:** Some features require environment variables to be fully functional:
- Email sending (Resend API key)
- Database storage (Supabase)
- Show data (Bandsintown API)
- Store products (Shopify)

The site will work without these, but with limited functionality.

