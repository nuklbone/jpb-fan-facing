import { Button } from "@/components/ui/button";

export const metadata = {
  title: "James Pitts Band Tickets & VIP Experiences",
  description:
    "Grab James Pitts Band tickets, unlock VIP upgrades, and see what to expect before the soul-blues party hits your city.",
};

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Upgrade Your Night
          </h1>
          <p className="text-xl text-white/80 md:text-2xl">
            Shows move fast—snag your spot before the dance floor fills.
          </p>
        </div>
      </section>

      {/* Ticket Availability Overview */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Upcoming Shows
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Browse the dates below, then tap through for full details and Plan Your Night guides.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { date: "Mar 14", city: "Concord, NH", venue: "The Bank of NH Stage", status: "Low Tickets" },
              { date: "Mar 29", city: "Hutchinson, KS", venue: "HutchFest Main Stage", status: "VIP Available" },
              { date: "Apr 12", city: "Boston, MA", venue: "The Sinclair", status: null },
            ].map((show, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                    {show.date}, 2025
                  </span>
                  {show.status && (
                    <span className="rounded-full bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                      {show.status}
                    </span>
                  )}
                </div>
                <h3 className="mb-1 text-xl font-semibold text-white">{show.city}</h3>
                <p className="mb-4 text-white/70">{show.venue}</p>
                <Button href={`/shows/calendar/${show.city.toLowerCase().replace(", ", "-")}-2025-${show.date.toLowerCase().replace(" ", "-")}`} className="w-full">
                  Get Tickets
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Package Tiers */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Pick Your Backstage Pass
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-2xl font-semibold text-white">Backstage Crew</h3>
              <div className="mb-4 text-3xl font-bold text-brand">Starting at $75</div>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Early entry</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Crowd-free merch shopping</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Commemorative laminate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Download of the night's setlist</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-2 border-brand bg-black/50 p-6">
              <h3 className="mb-2 text-2xl font-semibold text-white">Inner Circle VIP</h3>
              <div className="mb-4 text-3xl font-bold text-brand">Starting at $150</div>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Everything in Backstage Crew</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Meet & greet photo</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Signed poster</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Side-stage access for one song</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">First dibs on next drop</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-2xl font-semibold text-white">All-Access Experience</h3>
              <div className="mb-4 text-3xl font-bold text-accent">Custom Quote</div>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Everything in Inner Circle VIP</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Private pre-show soundcheck</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Reserved seating or stage-side zone</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Hospitality package</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Personalized shoutout</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Contact for Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Testimonials */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Worth Every Penny
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 italic text-white">
                "Early entry meant we owned the rail all night."
              </p>
              <p className="text-sm text-white/70">– Victor, Kansas City</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 italic text-white">
                "James hung out, signed everything, and remembered us from the last tour."
              </p>
              <p className="text-sm text-white/70">– Steph & Ray, Manchester NH</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 italic text-white">
                "Side-stage during 'Voodoo Child' was a bucket-list moment."
              </p>
              <p className="text-sm text-white/70">– Devon, Hutchinson KS</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & What to Expect */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            FAQ & What to Expect
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">Check-in opens 60 minutes before doors</h3>
              <p className="text-white/70">
                Look for the VIP host near the main entrance. You'll receive your laminate and early
                entry instructions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">Professional photos are provided</h3>
              <p className="text-white/70">
                Personal snaps welcome between songs. We'll share the official meet & greet photos
                within 48 hours.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">Dress code? Come comfortable</h3>
              <p className="text-white/70">
                Ready to move; closed-toe shoes encouraged for side-stage access.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">Refunds follow venue/ticketing policy</h3>
              <p className="text-white/70">
                Contact us if something changes—we'll work with you to find a solution.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">Accessibility accommodations available</h3>
              <p className="text-white/70">
                Note any needs at checkout or email innercircle@jamespittsband.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Upgrade?</h2>
          <p className="mb-8 text-lg text-white/70">
            Planning a celebration or group VIP? We can customize packages for your crew.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/shows">
              Browse Shows
            </Button>
            <Button size="lg" variant="outline" href="mailto:innercircle@jamespittsband.com">
              Contact for Custom Package
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

