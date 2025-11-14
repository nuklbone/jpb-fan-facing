import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { BandsintownEvent } from "@/types/bandsintown";
import { formatShortDate } from "@/lib/format";

interface ShowCardProps {
  event: BandsintownEvent;
  slug?: string;
}

export function ShowCard({ event, slug }: ShowCardProps) {
  const eventDate = new Date(event.datetime);
  const ticketOffer = event.offers?.find((offer) => offer.type === "Tickets");
  const isAvailable = ticketOffer?.status === "available";

  // Generate slug if not provided
  if (!slug) {
    const citySlug = event.venue.city.toLowerCase().replace(/\s+/g, "-");
    const stateSlug = event.venue.region.toLowerCase().replace(/\s+/g, "-");
    const dateSlug = eventDate.toISOString().split("T")[0].replace(/-/g, "-");
    slug = `/shows/calendar/${citySlug}-${stateSlug}-${dateSlug}`;
  }

  return (
    <div className="rounded-lg border border-white/10 bg-black/50 p-6 transition-all hover:border-brand">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand">
          {formatShortDate(eventDate)}
        </span>
        {isAvailable && (
          <span className="rounded-full bg-brand px-2 py-1 text-xs font-semibold text-brand-foreground">
            Tickets Available
          </span>
        )}
      </div>
      <h3 className="mb-1 text-xl font-semibold text-white">
        {event.venue.city}, {event.venue.region}
      </h3>
      <p className="mb-4 text-white/70">{event.venue.name}</p>
      {ticketOffer?.url ? (
        <Button href={ticketOffer.url} className="mb-2 w-full" target="_blank" rel="noreferrer">
          Get Tickets
        </Button>
      ) : event.url ? (
        <Button href={event.url} className="mb-2 w-full" target="_blank" rel="noreferrer">
          Learn More
        </Button>
      ) : null}
      <Button variant="ghost" size="sm" href={slug} className="w-full text-xs">
        Plan Your Night →
      </Button>
    </div>
  );
}

