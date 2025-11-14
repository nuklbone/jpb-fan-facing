import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "James Pitts Band News & Fan Updates",
  description:
    "Catch the latest James Pitts Band tour announcements, live diaries, fan spotlights, and merch drops—updated every time the groove changes.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Intro */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Stay in the Loop
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/80 md:text-2xl">
            This is your control room for everything James Pitts Band. From new city announcements
            to Inner Circle exclusives and fan stories, check back here to see what's dropping next.
          </p>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Hot Off the Stage</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Tour Announcement",
                title: "Spring Tour Dates Announced",
                excerpt: "We're hitting New England and the Midwest this spring...",
                date: "Feb 15, 2025",
              },
              {
                category: "New Release",
                title: "Fire In My Hands Now Available",
                excerpt: "Our latest album is out now on all streaming platforms...",
                date: "Jan 20, 2025",
              },
              {
                category: "Special Event",
                title: "Charity Night at HutchFest",
                excerpt: "Join us for a special show supporting local music education...",
                date: "Dec 10, 2024",
              },
            ].map((post, i) => (
              <article
                key={i}
                className="rounded-lg border border-white/10 bg-black/50 p-6 hover:border-brand transition-colors"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/60">{post.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mb-4 text-white/70">{post.excerpt}</p>
                <Button variant="ghost" size="sm" href={`/news/${i}`}>
                  Read More →
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Spotlights */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">You Rocked This</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-4 aspect-video rounded-lg bg-brand-muted/20">
                <p className="flex h-full items-center justify-center text-white/60">
                  Fan Spotlight Image
                </p>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Fan of the Month</h3>
              <p className="mb-4 text-white/70">
                This month we're highlighting a superfan who's been with us from the start...
              </p>
              <Button variant="ghost" size="sm" href="/news/fan-spotlight-1">
                Read Their Story →
              </Button>
            </article>
            <article className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-4 aspect-video rounded-lg bg-brand-muted/20">
                <p className="flex h-full items-center justify-center text-white/60">
                  #JMPBParty Gallery
                </p>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">#JMPBParty Highlights</h3>
              <p className="mb-4 text-white/70">
                Check out the best fan photos and clips from recent shows...
              </p>
              <Button variant="ghost" size="sm" href="/social-hub">
                View Gallery →
              </Button>
            </article>
          </div>
          <div className="mt-8 text-center">
            <Button href="/social-hub/ugc-submission">Submit Your Story</Button>
          </div>
        </div>
      </section>

      {/* Behind-the-Scenes Posts */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Road & Studio Diaries</h2>
          <p className="mb-8 text-lg text-white/70">
            Weekly entries from the van, rehearsal room stories, lighting design breakdowns, and
            pre-show rituals—each with embedded clips.
          </p>
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <article
                key={i}
                className="rounded-lg border border-white/10 bg-black/50 p-6 md:flex md:gap-6"
              >
                <div className="mb-4 aspect-video w-full rounded-lg bg-brand-muted/20 md:mb-0 md:w-1/3">
                  <p className="flex h-full items-center justify-center text-white/60">
                    Diary Image/Video
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="mb-2 text-sm text-white/60">March {i}, 2025</div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Road Notes: Hutchinson to Concord
                  </h3>
                  <p className="mb-4 text-white/70">
                    What happens when the van breaks down two hours before load-in? Find out in this
                    week's diary entry...
                  </p>
                  <Button variant="ghost" size="sm" href={`/news/tour-diary-${i}`}>
                    Read Full Entry →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Merch & Release Drop Alerts */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Next Drop Incoming</h2>
          <p className="mb-8 text-lg text-white/70">
            Tease limited-run merch, presave links, and livestream premiere details with countdown
            timers.
          </p>
          <div className="rounded-lg border border-white/10 bg-black/50 p-8">
            <div className="mb-4 text-4xl font-bold text-brand">3 Days</div>
            <h3 className="mb-2 text-2xl font-semibold text-white">Limited Edition Tour Tee</h3>
            <p className="mb-6 text-white/70">
              Numbered run with back print of the setlist. Only 100 available.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">Set a Reminder</Button>
              <Button size="lg" variant="outline" href="/store">
                Shop the Drop
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Archive & Search */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Archive & Search
          </h2>
          <p className="mb-8 text-center text-lg text-white/70">
            Dig through past eras, resurface favorite shows, and relive the nights that made you a
            believer.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="search"
              placeholder="Search news, stories, announcements..."
              className="w-full max-w-md rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none sm:w-auto"
            />
            <div className="flex gap-2">
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-sm text-white hover:border-brand hover:bg-white/5">
                All
              </button>
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-sm text-white hover:border-brand hover:bg-white/5">
                Tour
              </button>
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-sm text-white hover:border-brand hover:bg-white/5">
                Releases
              </button>
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-sm text-white hover:border-brand hover:bg-white/5">
                Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

