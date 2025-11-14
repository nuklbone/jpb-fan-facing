import { Button } from "@/components/ui/button";
import { SpotifyEmbed } from "@/components/media/spotify-embed";

export const metadata = {
  title: "High-Energy Soul-Blues Shows | The James Pitts Band Official Site",
  description:
    "Dive into the James Pitts Band's soul-blues party—stream new music, grab tickets, and join the Inner Circle for exclusive drops and presale perks.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-brand-muted">
      {/* Hero Panel */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="absolute inset-0 z-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Soul-blues engineered for packed dance floors and unforgettable nights.
          </h1>
          <p className="mb-8 text-xl text-white/80 md:text-2xl">
            HutchFest heroes, Granite State champions, your new favorite live show.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/shows" className="text-lg">
              See Upcoming Shows
            </Button>
            <Button size="lg" variant="outline" href="/join" className="text-lg">
              Join the Inner Circle
            </Button>
          </div>
        </div>
      </section>

      {/* Hooked in 20 Seconds */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              What you'll experience
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6 text-center">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                High-voltage soul-blues built for movement
              </h3>
              <p className="text-white/70">
                Every song drives the floor—no filler, just energy from first chord to final encore.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎵</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Fan-led setlists and encore moments
              </h3>
              <p className="text-white/70">
                Your voice shapes the night—request tracks, vote on covers, and feel like part of the
                crew.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎚️</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Volume-controlled, venue-friendly production
              </h3>
              <p className="text-white/70">
                Powerful mix without the pain—dB monitoring keeps every room comfortable while the
                groove hits hard.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="aspect-video rounded-lg border border-white/10 bg-black/50">
              <p className="flex h-full items-center justify-center text-white/60">
                Video: "Floor Goes Wild" Reel - Your next big night starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Credibility Wall */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 text-center">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/60">
              Blues Beat Magazine "Virtuoso Ignites Hutchinson" • 5× Blues Tone Award Winner •
              Granite State Blues Challenge Champions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 text-lg italic text-white">
                "I dragged ten friends to the Brickyard—every one of us is hooked."
              </p>
              <p className="text-sm text-white/70">– Kayla, Concord NH</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 text-lg italic text-white">
                "No sleepy blues. Just groove, grit, and nonstop energy."
              </p>
              <p className="text-sm text-white/70">– Marcus, Boston MA</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 text-lg italic text-white">
                "Finally a band my whole family loves—dance floor to slow jams."
              </p>
              <p className="text-sm text-white/70">– Erika, Manchester NH</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Sound & The Vibe */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              The Sound & The Vibe
            </h2>
            <p className="text-lg text-white/70">Start here, then explore the full catalog.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Start Here Playlist</h3>
              <p className="mb-4 text-white/70">Crowd-tested set list starter</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/artist/6x5AxZMtIgABsr2dlnurk7"
                height={352}
                theme="dark"
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Come to Play the Blues</h3>
              <p className="mb-4 text-white/70">Studio single - 2019</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/artist/6x5AxZMtIgABsr2dlnurk7"
                height={352}
                theme="dark"
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Fire In My Hands</h3>
              <p className="mb-4 text-white/70">Latest release - 2025</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/album/5Y7gF08XhOL4ecixNmYzR5"
                height={352}
                theme="dark"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" variant="outline" href="/music">
              Stream the Full Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Shows Snapshot */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Upcoming Shows
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
                Mar 14
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Concord, NH</h3>
              <p className="mb-4 text-white/70">The Bank of NH Stage</p>
              <Button href="/shows/calendar/concord-2025-03-14" className="w-full">
                Get Tickets
              </Button>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
                Mar 29
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Hutchinson, KS</h3>
              <p className="mb-4 text-white/70">HutchFest Main Stage</p>
              <Button href="/shows/calendar/hutchinson-2025-03-29" className="w-full">
                Get Tickets
              </Button>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
                Apr 12
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Boston, MA</h3>
              <p className="mb-4 text-white/70">The Sinclair</p>
              <Button href="/shows/calendar/boston-2025-04-12" className="w-full">
                Get Tickets
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" variant="outline" href="/shows">
              See Full Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Fan Funnel Entry */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Join the Inner Circle Crew
            </h2>
            <p className="text-lg text-white/70">
              Get first dibs on tickets, locked live recordings, AMA invites, and member-only merch
              drops.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/50 p-8">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm text-white/70">
                    First Name (optional)
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="sms"
                  name="sms"
                  className="h-4 w-4 rounded border-white/10 bg-black/50 text-brand focus:ring-brand"
                />
                <label htmlFor="sms" className="text-sm text-white/70">
                  Opt-in to SMS alerts for my city
                </label>
              </div>
              <Button size="lg" type="submit" className="w-full">
                Unlock Fan Perks
              </Button>
              <p className="text-center text-xs text-white/60">
                Expect 2–3 hype drops a month. No spam—just groove.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
