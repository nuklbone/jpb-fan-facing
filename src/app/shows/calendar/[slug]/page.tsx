import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { formatDate, formatTime } from "@/lib/format";

// Mock data - replace with Bandsintown or database
const shows: Record<string, {
  date: string;
  city: string;
  state: string;
  venue: string;
  venueAddress: string;
  doors: string;
  showtime: string;
  tickets: string;
  status: "available" | "low" | "sold-out";
}> = {
  "concord-2025-03-14": {
    date: "March 14, 2025",
    city: "Concord",
    state: "NH",
    venue: "The Bank of NH Stage",
    venueAddress: "16 S Main St, Concord, NH 03301",
    doors: "7:00 PM",
    showtime: "8:00 PM",
    tickets: "https://example.com/tickets",
    status: "low",
  },
  "hutchinson-2025-03-29": {
    date: "March 29, 2025",
    city: "Hutchinson",
    state: "KS",
    venue: "HutchFest Main Stage",
    venueAddress: "Main Street, Hutchinson, KS",
    doors: "6:00 PM",
    showtime: "7:00 PM",
    tickets: "https://example.com/tickets",
    status: "available",
  },
  "boston-2025-04-12": {
    date: "April 12, 2025",
    city: "Boston",
    state: "MA",
    venue: "The Sinclair",
    venueAddress: "52 Church St, Cambridge, MA 02138",
    doors: "8:00 PM",
    showtime: "9:00 PM",
    tickets: "https://example.com/tickets",
    status: "available",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const show = shows[slug];
  
  if (!show) {
    return {
      title: "Show Not Found | James Pitts Band",
    };
  }

  return {
    title: `${show.city}, ${show.state} - ${show.date} | James Pitts Band`,
    description: `Catch the James Pitts Band in ${show.city}, ${show.state} on ${show.date} at ${show.venue}. Get tickets and plan your night.`,
  };
}

export default async function CityShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = shows[slug];

  if (!show) {
    notFound();
  }

  const statusBadge = {
    available: { label: "Tickets Available", color: "bg-brand" },
    low: { label: "Low Tickets", color: "bg-accent" },
    "sold-out": { label: "Sold Out", color: "bg-white/20" },
  }[show.status];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden w-full py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: "url('/images/shows/James%201%20WBC.jpg')"}} />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {show.city}, {show.state}—Let's Pack the Dance Floor on {show.date.split(",")[0]}
          </h1>
          <p className="text-xl text-white/80 md:text-2xl">
            {show.venue} • {show.date}
          </p>
        </div>
      </section>

      {/* Event Overview */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-white">Event Details</h2>
              <div className="space-y-4 text-white/70">
                <div>
                  <p className="font-semibold text-white">Date</p>
                  <p>{show.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Venue</p>
                  <p>{show.venue}</p>
                  <p className="text-sm">{show.venueAddress}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Doors</p>
                  <p>{show.doors}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Showtime</p>
                  <p>{show.showtime}</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">Get Tickets</h2>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadge.color} text-white`}>
                  {statusBadge.label}
                </span>
              </div>
              <Button size="lg" href={show.tickets} className="mb-4 w-full" target="_blank">
                Buy Tickets
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`/shows/calendar/${slug}/plan-your-night`}
                className="w-full"
              >
                Plan Your Night →
              </Button>
              <div className="mt-6 rounded-lg border border-white/10 bg-brand-muted/20 p-4">
                <h3 className="mb-2 font-semibold text-white">VIP Available</h3>
                <p className="mb-4 text-sm text-white/70">
                  Upgrade for early entry, meet & greet, and exclusive perks.
                </p>
                <Button variant="ghost" size="sm" href="/tickets">
                  Learn More →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Night Module */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Plan Your Night</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-3 text-3xl">🅿️</div>
              <h3 className="mb-2 text-xl font-semibold text-white">Parking</h3>
              <p className="text-white/70">Free evening parking in nearby garages</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-3 text-3xl">🎚️</div>
              <h3 className="mb-2 text-xl font-semibold text-white">Volume</h3>
              <p className="text-white/70">dB monitoring keeps the mix powerful but comfortable</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-3 text-3xl">♿</div>
              <h3 className="mb-2 text-xl font-semibold text-white">Accessibility</h3>
              <p className="text-white/70">ADA seating available—email for arrangements</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" href={`/shows/calendar/${slug}/plan-your-night`}>
              View Full Planning Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Live Clips */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Feel the Energy</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50">
                <div className="aspect-video rounded-t-lg bg-brand-muted/20">
                  <p className="flex h-full items-center justify-center text-white/60">
                    Previous {show.city} Show Clip {i}
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-white">Live Performance</h3>
                  <p className="text-sm text-white/70">From our last show in {show.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Quick Answers</h2>
          <div className="space-y-4">
            {[
              {
                q: "Are the shows all-ages?",
                a: "Most venues are 18+ with some all-ages options; check the Plan Your Night link for specifics.",
              },
              {
                q: "When should we arrive?",
                a: `Doors open at ${show.doors}. The band hits within 30 minutes of posted start.`,
              },
              {
                q: "Can I bring a camera?",
                a: "Phone recording encouraged; pro gear requires venue approval.",
              },
              {
                q: "What's the refund policy?",
                a: "Follow ticketing partner policy; contact us for transfers if plans change.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Don't Miss Your Spot</h2>
          <p className="mb-8 text-lg text-white/70">
            {show.city} nights like this don't happen twice—lock in your tickets and let the crew
            know you're coming.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href={show.tickets} target="_blank">
              Buy Tickets
            </Button>
            <Button size="lg" variant="outline" href="/tickets">
              Upgrade to VIP
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

