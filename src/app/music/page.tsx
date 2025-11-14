import { Button } from "@/components/ui/button";
import { SpotifyEmbed } from "@/components/media/spotify-embed";

export const metadata = {
  title: "The James Pitts Band Music | Soul-Blues Discography & Live Cuts",
  description:
    "Stream the James Pitts Band's soul-blues catalog—studio singles, live sessions, fan-made playlists, and exclusive Inner Circle cuts in one place.",
};

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Introduction */}
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Dive Into the Sound
          </h1>
          <p className="text-xl text-white/80 md:text-2xl">
            Every Era. Every Groove. All in One Place.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
            From festival-tested originals to electrified Hendrix tributes, this is where the James
            Pitts Band archives it all. Explore the releases that built our soul-blues party, catch
            the latest live drops, and learn the stories behind the songs.
          </p>
        </div>
      </section>

      {/* Featured Songs Block */}
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Start with These Crowd Favorites
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Fire In My Hands</h3>
              <p className="mb-4 text-white/70">Latest release - 2025</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/album/5Y7gF08XhOL4ecixNmYzR5"
                height={352}
                theme="dark"
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Come to Play the Blues</h3>
              <p className="mb-4 text-white/70">Studio cut that sparked the modern era - 2019</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/artist/6x5AxZMtIgABsr2dlnurk7"
                height={352}
                theme="dark"
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">Full Catalog</h3>
              <p className="mb-4 text-white/70">Browse all releases and live sessions</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/artist/6x5AxZMtIgABsr2dlnurk7"
                height={352}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Album & EP Showcase */}
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Albums & EPs</h2>
            <p className="text-lg text-white/70">
              "Come to Play the Blues" anchors the catalogue, while new live sessions from HutchFest
              and The Brickyard keep the energy current.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                  New
                </span>
                <span className="text-sm text-white/60">2025</span>
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-white">Fire In My Hands</h3>
              <p className="mb-4 text-white/70">Latest album release</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/album/5Y7gF08XhOL4ecixNmYzR5"
                height={380}
                theme="dark"
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm text-white/60">2019</span>
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-white">Come to Play the Blues</h3>
              <p className="mb-4 text-white/70">Studio release that sparked the modern era</p>
              <SpotifyEmbed
                url="https://open.spotify.com/embed/artist/6x5AxZMtIgABsr2dlnurk7"
                height={380}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live & Alternate Versions */}
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Only at the Show</h2>
          <p className="mb-8 text-lg text-white/70">
            Unlock unreleased board mixes, acoustic rehearsal takes, and livestream recordings
            available exclusively to Inner Circle members.
          </p>
          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-brand-muted/20 to-black/50 p-8">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Join the Inner Circle to Access
              </h3>
              <p className="mb-6 text-white/70">
                Full replay vault, exclusive stems, quarterly digital collectibles, and first-in-line
                for collaborations.
              </p>
              <Button size="lg" href="/join">
                Unlock Exclusive Content
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fan-Curated Playlists */}
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Fans Made These</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">
                #JMPBParty Floor Starters
              </h3>
              <p className="mb-4 text-white/70">
                High-energy set curated by Inner Circle ambassadors
              </p>
              <div className="aspect-video rounded border border-white/10 bg-brand-muted/20">
                <p className="flex h-full items-center justify-center text-white/60">
                  Playlist embed placeholder
                </p>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Follow the playlist on Spotify or Apple Music
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">Soul Slow Burn</h3>
              <p className="mb-4 text-white/70">Late-night favorites compiled by fans</p>
              <div className="aspect-video rounded border border-white/10 bg-brand-muted/20">
                <p className="flex h-full items-center justify-center text-white/60">
                  Playlist embed placeholder
                </p>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Follow the playlist on Spotify or Apple Music
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Everywhere CTA */}
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Stream Everywhere</h2>
          <p className="mb-8 text-lg text-white/70">
            Add the James Pitts Band to your daily mix and help fuel the next release.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" href="https://open.spotify.com/artist/6x5AxZMtIgABsr2dlnurk7" target="_blank">
              Spotify
            </Button>
            <Button variant="outline" href="#" target="_blank">
              Apple Music
            </Button>
            <Button variant="outline" href="#" target="_blank">
              YouTube Music
            </Button>
            <Button variant="outline" href="#" target="_blank">
              Amazon Music
            </Button>
            <Button variant="outline" href="#" target="_blank">
              Bandcamp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
