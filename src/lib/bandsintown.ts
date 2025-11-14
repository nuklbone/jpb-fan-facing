import type { BandsintownEvent } from "@/types/bandsintown";
import { env } from "@/lib/env";

const BASE_URL = "https://rest.bandsintown.com";

export async function getUpcomingEvents(limit = 10): Promise<BandsintownEvent[]> {
  const artistName = env.bandsintownArtist || "James Pitts Band";
  const appId = env.bandsintownAppId || "21104e6fc9bc9f230d92fca25d397c36";
  
  const params = new URLSearchParams({
    app_id: appId,
    date: "upcoming",
  });

  const response = await fetch(
    `${BASE_URL}/artists/${encodeURIComponent(artistName)}/events?${params.toString()}`,
    {
      next: { revalidate: 1800 },
    }
  );

  if (!response.ok) {
    console.error(`Bandsintown API error: ${response.statusText}`);
    return [];
  }

  const events = (await response.json()) as BandsintownEvent[];
  return events.slice(0, limit);
}
