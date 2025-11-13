import type { BandsintownEvent } from "@/types/bandsintown";
import { env } from "@/lib/env";

const BASE_URL = "https://rest.bandsintown.com";

export async function getUpcomingEvents(limit = 10): Promise<BandsintownEvent[]> {
  const params = new URLSearchParams({
    app_id: env.bandsintownAppId,
    date: "upcoming",
  });

  const response = await fetch(
    `${BASE_URL}/artists/${encodeURIComponent(env.bandsintownArtist)}/events?${params.toString()}`,
    {
      next: { revalidate: 1800 },
    }
  );

  if (!response.ok) {
    throw new Error(`Bandsintown API error: ${response.statusText}`);
  }

  const events = (await response.json()) as BandsintownEvent[];
  return events.slice(0, limit);
}
