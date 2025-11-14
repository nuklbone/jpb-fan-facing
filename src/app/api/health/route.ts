import { NextResponse } from "next/server";

/**
 * Health check endpoint
 * Useful for monitoring and deployment verification
 */
export async function GET() {
  // Check env vars directly to avoid build-time errors from env.ts
  const checks = {
    timestamp: new Date().toISOString(),
    status: "healthy",
    services: {
      supabase: !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      resend: !!process.env.RESEND_API_KEY,
      shopify: !!process.env.SHOPIFY_STORE_DOMAIN,
      bandsintown: !!(process.env.BANDSINTOWN_APP_ID && process.env.BANDSINTOWN_ARTIST),
    },
  };

  const allHealthy = Object.values(checks.services).every((status) => status === true);

  return NextResponse.json(checks, {
    status: allHealthy ? 200 : 503,
  });
}

