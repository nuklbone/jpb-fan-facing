"use client";

import { Button } from "@/components/ui/button";

export default function SocialHubPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Intro */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Join the Ongoing Party
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/80 md:text-2xl">
            Your Posts, Our Stage
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
            This is the pulse of the James Pitts Band community. Watch the live feed light up,
            shout out your crew, and get your best moments featured in front of the fans who feel
            just like you.
          </p>
        </div>
      </section>

      {/* Live Social Feed Wall */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            What's Happening Right Now
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <div className="mb-4 aspect-square rounded-lg bg-brand-muted/20">
                  <p className="flex h-full items-center justify-center text-xs text-white/60">
                    Social Post {i + 1}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <span className="font-semibold">@FanHandle</span>
                  <span>•</span>
                  <span>#JMPBParty</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/70">
              Embedded Instagram, TikTok, and YouTube Shorts feed filtered by #JMPBParty and
              @JamesPittsBand tags, moderated for vibe-positive energy.
            </p>
          </div>
        </div>
      </section>

      {/* Top Fan Content of the Week */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Spotlight: You
          </h2>
          <p className="mb-8 text-center text-lg text-white/70">
            Four rotating tiles highlighting the week's best dance-floor clip, merch fit, fan art,
            and tour photo—each with credit and a short celebratory caption.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { type: "Dance Floor Clip", credit: "@BeatsByCee" },
              { type: "Merch Fit", credit: "@SoulfulShutter" },
              { type: "Fan Art", credit: "@ArtFan2025" },
              { type: "Tour Photo", credit: "@RoadTripper" },
            ].map((feature, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <div className="mb-4 aspect-video rounded-lg bg-brand-muted/20">
                  <p className="flex h-full items-center justify-center text-xs text-white/60">
                    {feature.type}
                  </p>
                </div>
                <p className="mb-2 text-sm font-semibold text-white">This Week's Best</p>
                <p className="text-xs text-white/70">Credit: {feature.credit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Love CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Share Your Love</h2>
          <p className="mb-8 text-lg text-white/70">
            Tag #JMPBParty, mention @JamesPittsBand, or upload through the submission form to join
            the wall.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="/social-hub/ugc-submission">
              Tag Us to Get Featured
            </Button>
            <Button size="lg" variant="outline" href="#">
              View Submission Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Keep It Vibe-Positive
          </h2>
          <div className="space-y-4 text-white/70">
            <div className="flex items-start gap-3">
              <span className="text-brand">✓</span>
              <p>Celebrate every fan—no gatekeeping or hate speech.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand">✓</span>
              <p>Share original content or give credit when you repost.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand">✓</span>
              <p>Respect venue rules and fellow fans when filming.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand">✓</span>
              <p>Keep graphics and language PG-13 so everyone can enjoy.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
