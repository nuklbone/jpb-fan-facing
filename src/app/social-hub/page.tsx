"use client";

import { Button } from "@/components/ui/button";

export default function SocialHubPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Intro */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden w-full py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: "url('/images/gallery/Audience%202.jpg')"}} />
        <div className="relative z-10 w-full text-center">
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
      <section className="border-t border-white/10 bg-black w-full py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            What's Happening Right Now
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Dance 1.jpg", "Dance 2.jpg", "Dance 3.jpg", 
              "Dance 4.jpg", "Dance 5.jpg", "Dance 6.jpg",
              "Dance 7.jpg", "Audience.jpg", "Audience 2.jpg"
            ].map((img, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg border border-white/10 bg-black/50">
                  <img
                    src={`/images/gallery/${encodeURIComponent(img)}`}
                    alt={`Social post ${i + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
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
      <section className="border-t border-white/10 bg-black w-full py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Spotlight: You
          </h2>
          <p className="mb-8 text-center text-lg text-white/70">
            Four rotating tiles highlighting the week's best dance-floor clip, merch fit, fan art,
            and tour photo—each with credit and a short celebratory caption.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { type: "Dance Floor Clip", credit: "@BeatsByCee", img: "Dance 1.jpg" },
              { type: "Merch Fit", credit: "@SoulfulShutter", img: "Promo 2.jpg" },
              { type: "Fan Art", credit: "@ArtFan2025", img: "JPB 1 Sheet.jpg" },
              { type: "Tour Photo", credit: "@RoadTripper", img: "JPB RS.jpg" },
            ].map((feature, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/50">
                  <img
                    src={`/images/${feature.type === "Merch Fit" ? "merch" : feature.type === "Fan Art" ? "gallery" : feature.type === "Tour Photo" ? "shows" : "gallery"}/${encodeURIComponent(feature.img)}`}
                    alt={feature.type}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mb-2 text-sm font-semibold text-white">This Week's Best</p>
                <p className="text-xs text-white/70">Credit: {feature.credit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Love CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black w-full py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
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
      <section className="border-t border-white/10 bg-black w-full py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
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
