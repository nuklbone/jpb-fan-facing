const missingVar = (key: string) => {
  // During build phase, never throw - just return empty string
  const isBuild = process.env.NEXT_PHASE === "phase-production-build";
  
  if (isBuild) {
    return "";
  }
  
  // Only throw in actual production runtime (not during build)
  if (process.env.NODE_ENV === "production" && typeof window === "undefined") {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  
  // During development/build, just warn
  if (typeof window === "undefined") {
    console.warn(`⚠️ Missing env var ${key}. Using empty string for build.`);
  }
  
  return "";
};

// Check if we're in build phase
const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build";

export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  supabaseUrl:
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? (isBuildPhase ? "" : missingVar("NEXT_PUBLIC_SUPABASE_URL")),
  supabaseAnonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? (isBuildPhase ? "" : missingVar("NEXT_PUBLIC_SUPABASE_ANON_KEY")),
  supabaseServiceRoleKey:
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? (isBuildPhase ? "" : missingVar("SUPABASE_SERVICE_ROLE_KEY")),
  resendApiKey: process.env.RESEND_API_KEY ?? (isBuildPhase ? "" : missingVar("RESEND_API_KEY")),
  resendFromEmail:
    process.env.RESEND_FROM_EMAIL ?? "no-reply@yourdomain.com",
  shopifyStoreDomain:
    process.env.SHOPIFY_STORE_DOMAIN ?? (isBuildPhase ? "" : missingVar("SHOPIFY_STORE_DOMAIN")),
  shopifyAdminToken:
    process.env.SHOPIFY_ADMIN_API_TOKEN ?? (isBuildPhase ? "" : missingVar("SHOPIFY_ADMIN_API_TOKEN")),
  shopifyStorefrontToken:
    process.env.SHOPIFY_STOREFRONT_API_TOKEN ?? (isBuildPhase ? "" : missingVar("SHOPIFY_STOREFRONT_API_TOKEN")),
  shopifyStorefrontApiVersion:
    process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2024-01",
  bandsintownAppId:
    process.env.BANDSINTOWN_APP_ID ?? (isBuildPhase ? "" : missingVar("BANDSINTOWN_APP_ID")),
  bandsintownArtist:
    process.env.BANDSINTOWN_ARTIST ?? (isBuildPhase ? "" : missingVar("BANDSINTOWN_ARTIST")),
  adminEmail: process.env.ADMIN_EMAIL ?? "admin@yourdomain.com",
  fanSupportEmail: process.env.FAN_SUPPORT_EMAIL ?? "support@yourdomain.com",
};
