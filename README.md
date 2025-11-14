# James Pitts Band - Fan-Facing Website

A Next.js website built for the James Pitts Band to engage with fans, promote shows, sell merch, and grow the Inner Circle community.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4 + PrelineUI
- **Database:** Supabase (PostgreSQL)
- **Email:** Resend
- **E-commerce:** Shopify
- **Show Data:** Bandsintown API
- **Deployment:** Vercel
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone git@github.com:nuklbone/jpb-fan-facing.git
cd jpb-fan-facing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Fill in your environment variables in `.env.local`:
- Supabase URL and keys
- Resend API key
- Shopify credentials
- Bandsintown API key
- Admin email addresses

4. Run database migrations:
- Execute `supabase/schema.sql` in your Supabase dashboard
- Optionally run `supabase/seed.sql` for initial data

5. Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
fan-facing-site/
├── public/
│   └── images/          # Add your images here
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── api/         # API routes
│   │   ├── shows/       # Shows pages and dynamic routes
│   │   └── [pages]/     # Core pages (music, join, etc.)
│   ├── components/
│   │   ├── layout/      # Header, Footer, Layout
│   │   ├── media/       # Spotify embeds, video players
│   │   ├── seo/         # SEO helpers and schema
│   │   └── ui/          # Reusable UI components
│   ├── lib/
│   │   ├── bandsintown.ts  # Bandsintown API client
│   │   ├── resend.ts    # Email client
│   │   ├── shopify.ts   # Shopify client
│   │   ├── supabase.ts  # Supabase client
│   │   └── env.ts       # Environment variables
│   └── types/           # TypeScript type definitions
└── supabase/
    ├── schema.sql       # Database schema
    └── seed.sql         # Seed data
```

## Key Features

### Pages
- **Homepage** - Hero, value props, Spotify embeds, shows preview
- **Shows** - Bandsintown integration, tour calendar, city pages
- **Music** - Album embeds, featured tracks, fan playlists
- **Join** - Inner Circle membership signup with tiers
- **About** - Band bio, milestones, members
- **Contact** - Fan mail, city requests, support
- **Videos** - Music videos, live highlights, BTS
- **News** - Announcements, fan spotlights, tour diaries
- **Store** - Merch showcase, bundles, Inner Circle exclusives
- **Tickets** - VIP tiers, testimonials, FAQ
- **Photos** - Live shots, fan gallery, BTS
- **Social Hub** - Fan feed, weekly spotlights

### API Routes
- `/api/join` - Inner Circle signup with email
- `/api/contact` - Contact form submission
- `/api/city-request` - City request form submission

### Dynamic Routes
- `/shows/calendar/[slug]` - City-specific show pages
- `/shows/calendar/[slug]/plan-your-night` - Planning guides

## Environment Variables

See `.env.local.example` for all required variables.

Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `BANDSINTOWN_APP_ID`
- `BANDSINTOWN_ARTIST`
- `ADMIN_EMAIL`

Optional:
- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_ADMIN_API_TOKEN`
- `SHOPIFY_STOREFRONT_API_TOKEN`

## Building for Production

```bash
npm run build
npm start
```

Or deploy to Vercel:

```bash
vercel deploy
```

## Adding Images

1. Place images in `public/images/`
2. Reference them in components: `/images/filename.jpg`
3. Use the `ImagePlaceholder` component for graceful fallbacks

## Database Setup

1. Create a Supabase project
2. Run `supabase/schema.sql` in the SQL editor
3. Optionally run `supabase/seed.sql` for test data
4. Set up Row Level Security (RLS) policies as needed

## Email Setup

1. Create a Resend account
2. Verify your domain
3. Add `RESEND_API_KEY` to `.env.local`
4. Set `RESEND_FROM_EMAIL` to your verified domain

## Bandsintown Integration

1. Get your API key from Bandsintown
2. Add `BANDSINTOWN_APP_ID` to `.env.local`
3. Set `BANDSINTOWN_ARTIST` to "James Pitts Band"
4. Shows will automatically sync on page load

## Shopify Integration (Future)

1. Create a Shopify store
2. Get API tokens from Shopify admin
3. Add credentials to `.env.local`
4. Products will sync via the Shopify client

## Contributing

This is a private repository. For issues or questions, contact the project maintainer.

## License

Private - All rights reserved
