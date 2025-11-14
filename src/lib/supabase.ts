import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

// Only create clients if URLs exist (prevents build errors)
const supabaseUrl = env.supabaseUrl || "https://placeholder.supabase.co";
const supabaseAnonKey = env.supabaseAnonKey || "placeholder-key";
const supabaseServiceKey = env.supabaseServiceRoleKey || "placeholder-service-key";

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseAdminClient = createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
