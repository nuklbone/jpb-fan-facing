const missingVar = (key: string) => {
  if (process.env.NODE_ENV === "production") {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  console.warn(`⚠️ Missing env var ${key}. Using empty string.`);
  return "";
};

export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  supabaseUrl:
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? missingVar("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? missingVar("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  supabaseServiceRoleKey:
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? missingVar("SUPABASE_SERVICE_ROLE_KEY"),
  resendApiKey: process.env.RESEND_API_KEY ?? missingVar("RESEND_API_KEY"),
  resendFromEmail:
    process.env.RESEND_FROM_EMAIL ?? "no-reply@yourdomain.com",
  shopifyStoreDomain:
    process.env.SHOPIFY_STORE_DOMAIN ?? missingVar("SHOPIFY_STORE_DOMAIN"),
  shopifyAdminToken:
    process.env.SHOPIFY_ADMIN_API_TOKEN ?? missingVar("SHOPIFY_ADMIN_API_TOKEN"),
  shopifyStorefrontToken:
    process.env.SHOPIFY_STOREFRONT_API_TOKEN ?? missingVar("SHOPIFY_STOREFRONT_API_TOKEN"),
  shopifyStorefrontApiVersion:
    process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2024-01",
  bandsintownAppId:
    process.env.BANDSINTOWN_APP_ID ?? missingVar("BANDSINTOWN_APP_ID"),
  bandsintownArtist:
    process.env.BANDSINTOWN_ARTIST ?? missingVar("BANDSINTOWN_ARTIST"),
  adminEmail: process.env.ADMIN_EMAIL ?? "admin@yourdomain.com",
  fanSupportEmail: process.env.FAN_SUPPORT_EMAIL ?? "support@yourdomain.com",
};
