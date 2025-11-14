import { Button } from "@/components/ui/button";

export const metadata = {
  title: "James Pitts Band Photo Gallery | Live Shots & Fan Moments",
  description:
    "Relive the James Pitts Band in photos—onstage energy, backstage moments, fan submissions, and downloadable tour art.",
};

export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Intro */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            See the Night in Pictures
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/80 md:text-2xl">
            Scroll through the shots that keep us inspired—stage dives, packed floors, and the
            faces that make every tour worth it. We refresh the gallery after every run, so come
            back to find your crew.
          </p>
        </div>
      </section>

      {/* Live Action Shots */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">On Stage</h2>
          <p className="mb-8 text-lg text-white/70">
            High-energy frames capturing solos, call-and-response moments, and the exact second the
            beat drops. Each gallery links to the full show recap and Plan Your Night guide for
            next time.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg border border-white/10 bg-brand-muted/20 hover:border-brand transition-colors cursor-pointer">
                <p className="flex h-full items-center justify-center text-xs text-white/60">
                  Live Photo {i + 1}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Fan Gallery */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">You Shot This</h2>
          <p className="mb-8 text-lg text-white/70">
            Spotlighting fan-submitted photos and Polaroids from the rail. We rotate new images
            monthly and tag the photographers so you get the shine.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg border border-white/10 bg-brand-muted/20 hover:border-brand transition-colors cursor-pointer">
                <p className="flex h-full items-center justify-center text-xs text-white/60">
                  Fan Photo {i + 1}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-white/70">
            New selections drop the first Friday of every month; Inner Circle members see them
            early.
          </p>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Offstage Moments</h2>
          <p className="mb-8 text-lg text-white/70">
            Rehearsal snapshots, van life candids, crew shoutouts, and lighting design previews that
            show how the show comes together.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg border border-white/10 bg-brand-muted/20 hover:border-brand transition-colors cursor-pointer">
                <p className="flex h-full items-center justify-center text-xs text-white/60">
                  BTS Photo {i + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posters & Artwork */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Era Posters & Album Art
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Download share-safe screen sizes or purchase limited prints in the store. Includes tour
            posters, lyric art, and album covers.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <div className="mb-4 aspect-[3/4] rounded-lg bg-brand-muted/20"></div>
                <h3 className="mb-2 text-lg font-semibold text-white">Poster/Art Title</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                  <Button variant="ghost" size="sm" href="/store">
                    Buy Print
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Submission CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Want Your Shot Featured?
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Tag #JMPBParty or upload directly so we can share it with the community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/social-hub/ugc-submission">
              Send Us Your Shots
            </Button>
            <Button size="lg" variant="outline" href="/social-hub">
              View Social Hub
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
