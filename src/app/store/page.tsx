import { Button } from "@/components/ui/button";

export const metadata = {
  title: "James Pitts Band Merch Store | Limited Drops & Fan Bundles",
  description:
    "Shop the James Pitts Band merch store—limited drops, fan bundles, Inner Circle exclusives, and tour collectibles that keep the groove going.",
};

export default function StorePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Rep the Band Your Way
          </h1>
        </div>
      </section>

      {/* Featured Drops */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Fresh Off the Press</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border-2 border-accent bg-black/50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Limited
                </span>
                <span className="text-xs text-white/60">Only 75 left</span>
              </div>
              <div className="mb-4 aspect-square rounded-lg bg-brand-muted/20"></div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                HutchFest 2025 Limited Tee
              </h3>
              <p className="mb-4 text-white/70">
                Numbered run with back print of the setlist
              </p>
              <div className="mb-4 text-2xl font-bold text-white">$35</div>
              <Button className="w-full">Add to Cart</Button>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-4 aspect-square rounded-lg bg-brand-muted/20"></div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                "Shaky Ground" Live Vinyl
              </h3>
              <p className="mb-4 text-white/70">
                Translucent blue pressing + digital download
              </p>
              <div className="mb-4 text-2xl font-bold text-white">$25</div>
              <Button className="w-full">Add to Cart</Button>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-4 aspect-square rounded-lg bg-brand-muted/20"></div>
              <h3 className="mb-2 text-xl font-semibold text-white">Inner Circle Badge Hoodie</h3>
              <p className="mb-4 text-white/70">Glow ink logo that pops under stage lights</p>
              <div className="mb-4 text-2xl font-bold text-white">$65</div>
              <Button className="w-full" variant="outline">
                Members Only
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Collection */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Everyday Favorites</h2>
          <p className="mb-8 text-lg text-white/70">
            Premium fabrics, true-to-size fits, and designs inspired by stage lighting palettes.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Tees", "Hoodies", "Hats", "Posters"].map((category) => (
              <div key={category} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <div className="mb-4 aspect-square rounded-lg bg-brand-muted/20"></div>
                <h3 className="mb-2 text-lg font-semibold text-white">{category}</h3>
                <p className="text-sm text-white/70">Starting at $20</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fan-Favorite Bundles */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Bundle & Save</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">"Road Notes" Pack</h3>
              <p className="mb-4 text-white/70">
                Tour tee + signed poster + live download
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">$55</span>
                <span className="ml-2 text-sm text-white/60 line-through">$65</span>
                <span className="ml-2 rounded-full bg-brand px-2 py-1 text-xs font-semibold text-brand-foreground">
                  15% off
                </span>
              </div>
              <Button className="w-full">Get the Bundle</Button>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">"Family Night" Kit</h3>
              <p className="mb-4 text-white/70">
                Two tees + kids' bandana + sticker sheet
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">$50</span>
                <span className="ml-2 text-sm text-white/60 line-through">$60</span>
              </div>
              <Button className="w-full">Get the Bundle</Button>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">"Stage Left" Bundle</h3>
              <p className="mb-4 text-white/70">
                Snapback + pick tin + VIP laminate keychain
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">$45</span>
                <span className="ml-2 text-sm text-white/60 line-through">$55</span>
              </div>
              <Button className="w-full">Get the Bundle</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inner Circle Exclusives */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            For the Inner Circle Only
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Members unlock secret merch drops, autographed setlists, and quarterly mystery packs when
            they log in.
          </p>
          <div className="rounded-lg border border-white/10 bg-black/50 p-8">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Unlock Exclusive Merch
              </h3>
              <p className="mb-6 text-white/70">
                Join the Inner Circle to access limited drops and member-only collectibles
              </p>
              <Button size="lg" href="/join">
                Unlock with Membership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Size Guide & Reviews */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Fit & Fan Love
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Size Guide</h3>
              <p className="mb-4 text-white/70">
                Detailed size charts for every product, plus real fit photos submitted by fans.
              </p>
              <Button variant="outline">View Size Chart</Button>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Fan Reviews</h3>
              <p className="mb-2 italic text-white">
                "Softest tee I own—survived a full night of dancing."
              </p>
              <p className="text-sm text-white/70">– Morgan, KC</p>
              <p className="mt-4 text-white/70">
                Need help with sizing or orders? Contact{" "}
                <a href="mailto:innercircle@jamespittsband.com" className="text-brand hover:underline">
                  innercircle@jamespittsband.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

