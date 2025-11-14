import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Link from "next/link";

const shows: Record<string, {
  city: string;
  state: string;
  venue: string;
  date: string;
}> = {
  "concord-2025-03-14": {
    city: "Concord",
    state: "NH",
    venue: "The Bank of NH Stage",
    date: "March 14, 2025",
  },
  "hutchinson-2025-03-29": {
    city: "Hutchinson",
    state: "KS",
    venue: "HutchFest Main Stage",
    date: "March 29, 2025",
  },
  "boston-2025-04-12": {
    city: "Boston",
    state: "MA",
    venue: "The Sinclair",
    date: "April 12, 2025",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = shows[slug];
  
  if (!show) {
    return { title: "Plan Your Night | James Pitts Band" };
  }

  return {
    title: `Plan Your Night in ${show.city} | James Pitts Band`,
    description: `Everything you need to know for the James Pitts Band show in ${show.city} on ${show.date}—parking, accessibility, dining, and more.`,
  };
}

export default async function PlanYourNightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = shows[slug];

  if (!show) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Plan an Unforgettable {show.city} Night Out
          </h1>
          <p className="text-xl text-white/80 md:text-2xl">
            We took the guesswork out of planning—follow these simple steps and focus on the fun.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">How It Works</h2>
          <div className="space-y-6">
            {[
              "Pick your date and tickets",
              "Choose your experience (GA dance floor, reserved balcony, or VIP)",
              "Add a bundle or merch pre-order for keepsakes",
              "Review parking, dining, and accessibility tips",
              "Capture and share your night with #JMPBPartyFamily",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg border border-white/10 bg-black/50 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground font-semibold">
                  {i + 1}
                </div>
                <p className="text-lg text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Logistics</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Parking & Travel</h3>
              <p className="mb-4 text-white/70">
                Free evening parking in the Capitol Street Garage; rideshare drop-off on Main Street.
              </p>
              <p className="text-white/70">
                Best arrival times: Arrive by 7:15 PM for best seating options.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Dining & Partner Spots</h3>
              <p className="mb-4 text-white/70">
                Pre-show drinks at Whiskey Wine & Dine; post-show late bites at Revival Kitchen.
              </p>
              <p className="text-white/70">
                All within walking distance of the venue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family & Accessibility */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Family & Accessibility</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Seating</h3>
              <p className="text-white/70">
                Reserved seating options on main floor and balcony. ADA sections available.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Volume Level</h3>
              <p className="text-white/70">
                Volume hovers around 95 dB with quiet zones available for sensitive ears.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">All-Ages</h3>
              <p className="text-white/70">
                Most venues are 18+ with balcony seating recommended for families. Ear protection available at door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadables */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Download Your Guide</h2>
          <p className="mb-8 text-lg text-white/70">
            Printable PDF and calendar file to keep everything organized.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="outline">
              Download PDF Guide
            </Button>
            <Button size="lg" variant="outline">
              Add to Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Show */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <Button size="lg" href={`/shows/calendar/${slug}`}>
            ← Back to Show Details
          </Button>
        </div>
      </section>
    </main>
  );
}

