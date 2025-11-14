import { getUpcomingEvents } from "@/lib/bandsintown";
import { ShowCard } from "@/components/shows/show-card";
import { Button } from "@/components/ui/button";

export async function ShowsList() {
  const events = await getUpcomingEvents(20).catch(() => []);

  if (events.length > 0) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <ShowCard key={event.id} event={event} />
        ))}
      </div>
    );
  }

  // Fallback hardcoded shows if no Bandsintown data
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border border-white/10 bg-black/50 p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Mar 14, 2025
          </span>
          <span className="rounded-full bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
            Low Tickets
          </span>
        </div>
        <h3 className="mb-1 text-xl font-semibold text-white">Concord, NH</h3>
        <p className="mb-4 text-white/70">The Bank of NH Stage</p>
        <Button href="/shows/calendar/concord-2025-03-14" className="mb-2 w-full">
          Get Tickets
        </Button>
        <Button
          variant="ghost"
          size="sm"
          href="/shows/calendar/concord-2025-03-14/plan-your-night"
          className="w-full text-xs"
        >
          Plan Your Night →
        </Button>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/50 p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Mar 29, 2025
          </span>
          <span className="rounded-full bg-brand px-2 py-1 text-xs font-semibold text-brand-foreground">
            VIP Available
          </span>
        </div>
        <h3 className="mb-1 text-xl font-semibold text-white">Hutchinson, KS</h3>
        <p className="mb-4 text-white/70">HutchFest Main Stage</p>
        <Button href="/shows/calendar/hutchinson-2025-03-29" className="mb-2 w-full">
          Get Tickets
        </Button>
        <Button
          variant="ghost"
          size="sm"
          href="/shows/calendar/hutchinson-2025-03-29/plan-your-night"
          className="w-full text-xs"
        >
          Plan Your Night →
        </Button>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/50 p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Apr 12, 2025
          </span>
        </div>
        <h3 className="mb-1 text-xl font-semibold text-white">Boston, MA</h3>
        <p className="mb-4 text-white/70">The Sinclair</p>
        <Button href="/shows/calendar/boston-2025-04-12" className="mb-2 w-full">
          Get Tickets
        </Button>
        <Button
          variant="ghost"
          size="sm"
          href="/shows/calendar/boston-2025-04-12/plan-your-night"
          className="w-full text-xs"
        >
          Plan Your Night →
        </Button>
      </div>
    </div>
  );
}

