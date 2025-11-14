import { Button } from "@/components/ui/button";
import { ShowsList } from "@/components/shows/shows-list";
import { ShowsLoading } from "@/components/shows/shows-loading";
import { Suspense } from "react";

export const metadata = {
  title: "James Pitts Band Tour Dates | High-Energy Soul-Blues Shows",
  description:
    "See where the James Pitts Band brings the soul-blues party next—grab tickets, watch live clips, and plan your night before the floor fills up.",
};

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Tour Poster Header */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Where You Can Catch Us Live
          </h1>
          <p className="mb-8 text-xl text-white/80 md:text-2xl">
            Every night is engineered for a packed dance floor. Scan the dates, rally your crew,
            and let's make the next night one to brag about.
          </p>
        </div>
      </section>

      {/* Upcoming Shows Calendar */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Upcoming Shows</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-white hover:border-brand hover:bg-white/5">
                All Shows
              </button>
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-white hover:border-brand hover:bg-white/5">
                Near Me
              </button>
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-white hover:border-brand hover:bg-white/5">
                VIP Events
              </button>
              <button className="rounded-full border border-white/20 px-6 lg:px-12 py-2 text-white hover:border-brand hover:bg-white/5">
                Past Shows
              </button>
            </div>
          </div>

          <Suspense fallback={<ShowsLoading />}>
            <ShowsList />
          </Suspense>
        </div>
      </section>

      {/* Live Show Sampler */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Feel the Room</h2>
          <p className="mb-12 text-lg text-white/70">
            Catch a glimpse of the energy we bring to every stage.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="aspect-video w-full rounded bg-brand-muted/20"></div>
              <p className="mt-4 text-white/70">"Shaky Ground" – Live at The Brickyard</p>
              <p className="text-sm italic text-white/60">"The crowd never stopped moving."</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="aspect-video w-full rounded bg-brand-muted/20"></div>
              <p className="mt-4 text-white/70">"Fishnet" – James Pitts Band at WBS Blues Bash</p>
              <p className="text-sm italic text-white/60">"Tight, loud, and still perfectly mixed."</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="aspect-video w-full rounded bg-brand-muted/20"></div>
              <p className="mt-4 text-white/70">"Misery" – Live at Oak Hill Music</p>
              <p className="text-sm italic text-white/60">
                "For the first time my parents and kids loved the same show."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Notification CTA */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Don't Miss the Next Drop</h2>
          <p className="mb-8 text-lg text-white/70">
            Get presale codes, city announcements, and Inner Circle-only perks before they hit socials.
          </p>
          <form className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full max-w-sm rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder-white/50 focus:border-brand focus:outline-none"
            />
            <input
              type="text"
              placeholder="Zip/Postal Code (Optional)"
              className="w-full max-w-sm rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder-white/50 focus:border-brand focus:outline-none"
            />
            <Button type="submit" size="lg">
              Join the Alert List
            </Button>
          </form>
          <p className="mt-4 text-sm text-white/60">Expect 2-3 hype drops a month. No spam—just groove.</p>
        </div>
      </section>

      {/* FAQ Highlights */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">FAQs</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">Are the shows all-ages?</h3>
              <p className="text-white/70">
                Most venues are 18+ with some all-ages options; check the Plan Your Night link for each city.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">When should we arrive?</h3>
              <p className="text-white/70">
                Doors open 60 minutes ahead; the band hits within 30 minutes of posted start.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">How loud does it get?</h3>
              <p className="text-white/70">
                We monitor decibels to keep the mix powerful but comfortable.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">Is merch available?</h3>
              <p className="text-white/70">
                Yes! Grab limited drops on-site and score Inner Circle exclusives when you check in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

