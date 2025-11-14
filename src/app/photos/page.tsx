import { Button } from "@/components/ui/button";

export const metadata = {
  title: "James Pitts Band Photo Gallery | Live Shots & Fan Moments",
  description:
    "Relive the James Pitts Band in photos—onstage energy, backstage moments, fan submissions, and downloadable tour art.",
};

// Live performance images from gallery
const liveImages = [
  "JPB RS 3.jpg",
  "JPB RS.jpg",
  "JP LIve.jpg",
  "JP Yellow Tele Live.jpg",
  "James 1 WBC.jpg",
  "James 2 WBC.jpg",
  "James 3 WBC.jpg",
  "James 4 WBC.jpg",
  "James 5 WBC.jpg",
  "James 6 WBC.jpg",
  "James 7 WBC.jpg",
  "James 8 WBC.jpg",
  "James 9 WBC.jpg",
  "James 10 WBC.jpg",
  "James 11 WBC.jpg",
  "JPB Blues Bash Dancing.jpg",
  "JPB Charlies BEer Garden.jpg",
  "JPB StrangeBRew.jpg",
  "JPB StrangeBRew 2.jpg",
];

// Fan gallery images
const fanImages = [
  "Audience.jpg",
  "Audience 2.jpg",
  "Aud Aub Pitts.jpg",
  "Aud SCBC 1.jpg",
  "Aud SCBC 2.jpg",
  "Dance 1.jpg",
  "Dance 2.jpg",
  "Dance 3.jpg",
  "Dance 4.jpg",
  "Dance 5.jpg",
  "Dance 6.jpg",
  "Dance 7.jpg",
];

// Behind the scenes images
const btsImages = [
  "JPB SCBC Sound Check.jpg",
  "JPB Recording CTPTB.jpg",
  "JPB Bike Week.jpg",
  "The Needle.jpg",
  "Red Shed Drum View.jpg",
  "Lights.jpg",
  "McGraws.jpg",
  "Gig Time.jpg",
];

export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Intro */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
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
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">On Stage</h2>
          <p className="mb-8 text-lg text-white/70">
            High-energy frames capturing solos, call-and-response moments, and the exact second the
            beat drops. Each gallery links to the full show recap and Plan Your Night guide for
            next time.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {liveImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-brand transition-colors cursor-pointer"
              >
                <img
                  src={`/images/gallery/${encodeURIComponent(img)}`}
                  alt={`Live performance photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Fan Gallery */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">You Shot This</h2>
          <p className="mb-8 text-lg text-white/70">
            Spotlighting fan-submitted photos and Polaroids from the rail. We rotate new images
            monthly and tag the photographers so you get the shine.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {fanImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-brand transition-colors cursor-pointer"
              >
                <img
                  src={`/images/gallery/${encodeURIComponent(img)}`}
                  alt={`Fan photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
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
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Offstage Moments</h2>
          <p className="mb-8 text-lg text-white/70">
            Rehearsal snapshots, van life candids, crew shoutouts, and lighting design previews that
            show how the show comes together.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {btsImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-brand transition-colors cursor-pointer"
              >
                <img
                  src={`/images/gallery/${encodeURIComponent(img)}`}
                  alt={`Behind the scenes photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posters & Artwork */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Era Posters & Album Art
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Download share-safe screen sizes or purchase limited prints in the store. Includes tour
            posters, lyric art, and album covers.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {[
              { img: "JPB 1 Sheet.jpg", title: "JPB One Sheet" },
              { img: "JPB Tiers.jpg", title: "Tier Packages" },
              { img: "Promo 1.png", title: "Promo Art 1" },
              { img: "Promo 2.jpg", title: "Promo Art 2" },
              { img: "Promo 3.jpg", title: "Promo Art 3" },
              { img: "BLUES TONE AWARD.png", title: "Blues Tone Award" },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={`/images/gallery/${encodeURIComponent(item.img)}`}
                    alt={item.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
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
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
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

