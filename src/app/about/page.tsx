import { Button } from "@/components/ui/button";
import { SpotifyEmbed } from "@/components/media/spotify-embed";

export const metadata = {
  title: "The James Pitts Band | Official Bio & Story",
  description:
    "Discover the award-winning James Pitts Band—soul-blues power trio turned groove collective bringing high-energy shows, fan-first mission, and HutchFest glory to every stage.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Meet the James Pitts Band
          </h1>
        </div>
      </section>

      {/* 150-Word Bio */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none space-y-6 text-lg text-white/80">
            <p>
              The James Pitts Band is a soul-blues power trio that treats every room like a headliner
              slot. Led by guitarist and vocalist James Pitts, the band fuses road-tested blues grit
              with funk-driven grooves, volume-controlled sound, and a fan-first mission: keep the
              floor moving while making every listener feel like part of the crew.
            </p>
            <p>
              Pitts' tone and showcraft have earned five Blues Tone Magazine awards, the Granite
              State Blues Challenge crown, and festival stages from the Wichita Blues Bash to
              HutchFest. Night after night Troy Tolbert (bass) and Ruben Garza (drums) lock the
              rhythm section while the band scales up with horns, keys, and background singers for
              larger events.
            </p>
            <p>
              In 2025 the band is rolling out new live releases, limited Inner Circle drops, and an
              expanded tour across New England and the Midwest. Fans can expect the same promise:
              relentless energy, soulful storytelling, and a dance floor engineered for unforgettable
              nights.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Performance Clip */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-4xl">
            Signature Performance
          </h2>
          <p className="mb-8 text-center text-lg text-white/70">
            "Shaky Ground" – Live at The Brickyard (Wichita Blues Bash)
          </p>
          <p className="mb-8 text-center text-white/70">
            Signature crowd-favorite showing the band's groove-forward set, interactive
            call-and-response, and volume-controlled punch.
          </p>
          <div className="aspect-video rounded-lg border border-white/10 bg-black/50">
            <p className="flex h-full items-center justify-center text-white/60">
              Video embed placeholder - YouTube: Shaky Ground Live at The Brickyard
            </p>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Key Milestones
          </h2>
          <div className="space-y-8">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
                2016
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Wins Blues Tone "Instrumentalist – Guitar" and "Best Emerging Artist"
              </h3>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
                2018
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Granite State Blues Challenge champions with sold-out regional tour
              </h3>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
                2021
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                HutchFest headliner and live session release
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Band Member Credits */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Meet the Band
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 aspect-square rounded-lg border border-white/10 bg-black/50"></div>
              <h3 className="mb-2 text-xl font-semibold text-white">James Pitts</h3>
              <p className="text-white/70">Guitar, Lead Vocals</p>
            </div>
            <div className="text-center">
              <div className="mb-4 aspect-square rounded-lg border border-white/10 bg-black/50"></div>
              <h3 className="mb-2 text-xl font-semibold text-white">Troy Tolbert</h3>
              <p className="text-white/70">Bass, Backing Vocals</p>
            </div>
            <div className="text-center">
              <div className="mb-4 aspect-square rounded-lg border border-white/10 bg-black/50"></div>
              <h3 className="mb-2 text-xl font-semibold text-white">Ruben Garza</h3>
              <p className="text-white/70">Drums, Percussion</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/70">
              Expanded Collective – Rhythm guitar, keys, horns, background vocalists as needed
            </p>
          </div>
        </div>
      </section>

      {/* Fan & Media Praise */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            What People Are Saying
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 text-lg italic text-white">
                "The blues maestro ignites Hutchinson with modern soul swagger."
              </p>
              <p className="text-sm text-white/70">– Blues Beat Magazine</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-brand-muted/20 p-6">
              <p className="mb-4 text-lg italic text-white">
                "They kept us dancing until the lights came up."
              </p>
              <p className="text-sm text-white/70">– Danielle, Boston MA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Experience the Energy?
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Catch us live and feel the soul-blues party for yourself.
          </p>
          <Button size="lg" href="/shows">
            Catch Us Live
          </Button>
        </div>
      </section>
    </main>
  );
}

