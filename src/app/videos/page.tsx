import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/media/youtube-embed";

export const metadata = {
  title: "Watch the James Pitts Band | Live Videos, Sessions & BTS",
  description:
    "Binge the James Pitts Band—music videos, crowd-fueled live highlights, rehearsal sessions, and fan-shot moments all in one hub.",
};

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Intro */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Press Play on the Soul-Blues Party
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/80 md:text-2xl">
            Missed the last show? We've got you. Dive into the clips that turned small clubs and
            festival stages into packed dance floors, then go behind the curtain to see how the
            groove gets built.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-white/10 bg-black/50 overflow-hidden">
              <YouTubeEmbed 
                videoId="XtsI5PZMqzU" 
                title="Shaky Ground - Live at The Brickyard (Wichita Blues Bash 2021)"
              />
            </div>
            <p className="mt-4 text-lg text-white/80">
              "Shaky Ground" – Live at The Brickyard (Wichita Blues Bash 2021)
              <br />
              <span className="text-sm text-white/60">Feel the floor shake before you grab tickets.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Music Video Gallery */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Official Videos</h2>
          <p className="mb-8 text-lg text-white/70">
            Curated playlists by era—studio stories, narrative videos, and visualizers for each
            release. Tap an era card to unlock the full set.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "XtsI5PZMqzU", title: "Shaky Ground", desc: "Live at The Brickyard (Wichita Blues Bash 2021)" },
              { id: "q0CNKedKKgw", title: "Fishnet", desc: "WBS Blues Bash" },
              { id: "nqZ1xIAzV-U", title: "Are You Experienced", desc: "Hendrix Cover" },
            ].map((video, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                <div className="rounded-t-lg overflow-hidden">
                  <YouTubeEmbed videoId={video.id} title={video.title} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  <p className="text-sm text-white/70">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Performance Highlight Reels */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Feel the Crowd</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div>
              <div className="mb-4 rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                <YouTubeEmbed videoId="XtsI5PZMqzU" title="Shaky Ground - Live at The Brickyard" />
              </div>
              <p className="mb-2 text-lg font-semibold text-white">"Shaky Ground"</p>
              <p className="mb-2 text-sm text-white/70">Live at The Brickyard (Wichita Blues Bash 2021)</p>
            </div>
            <div>
              <div className="mb-4 rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                <YouTubeEmbed videoId="q0CNKedKKgw" title="Fishnet - WBS Blues Bash" />
              </div>
              <p className="mb-2 text-lg font-semibold text-white">"Fishnet"</p>
              <p className="mb-2 text-sm text-white/70">James Pitts Band at the WBS Blues Bash</p>
            </div>
            <div>
              <div className="mb-4 rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                <YouTubeEmbed videoId="nqZ1xIAzV-U" title="Are You Experienced - Hendrix Cover" />
              </div>
              <p className="mb-2 text-lg font-semibold text-white">"Are You Experienced"</p>
              <p className="mb-2 text-sm text-white/70">Hendrix Cover</p>
            </div>
            <div>
              <div className="mb-4 rounded-lg border border-white/10 bg-black/50 overflow-hidden">
                <YouTubeEmbed videoId="frcMWr1oXzo" title="Driving South & Love Me" />
              </div>
              <p className="mb-2 text-lg font-semibold text-white">"Driving South & Love Me"</p>
              <p className="mb-2 text-sm text-white/70">James Pitts Band</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Life on the Road & In the Studio
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Rehearsal room jams, lighting design walkthroughs, travel diaries, crew interviews, and
            late-night arrangement sessions.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/50 overflow-hidden">
              <div className="rounded-t-lg overflow-hidden">
                <YouTubeEmbed videoId="frcMWr1oXzo" title="Driving South & Love Me" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Driving South & Love Me</h3>
                <p className="text-sm text-white/70">James Pitts Band</p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 overflow-hidden">
              <div className="rounded-t-lg overflow-hidden">
                <YouTubeEmbed videoId="nqZ1xIAzV-U" title="Are You Experienced - Hendrix Cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Are You Experienced</h3>
                <p className="text-sm text-white/70">Hendrix Cover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Submissions */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">You Shot This!</h2>
          <p className="mb-8 text-lg text-white/70">
            Tag #JMPBParty or upload via the submission form to get featured on the next rotation.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/50">
                <div className="aspect-video rounded-t-lg bg-brand-muted/20">
                  <p className="flex h-full items-center justify-center text-white/60">
                    Fan Clip {i}
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/70">Featured fan submission</p>
                  <p className="text-xs text-white/60">Credit: @FanHandle</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/social-hub/ugc-submission">Submit Your Clip</Button>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Subscribe for Weekly Drops
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Get live premiere chats, first looks at new music, and exclusive behind-the-scenes
            content.
          </p>
          <Button size="lg" href="https://youtube.com" target="_blank">
            Subscribe on YouTube
          </Button>
          <div className="mt-8">
            <div className="rounded-lg border border-white/10 bg-black/50 overflow-hidden mx-auto max-w-4xl">
              <YouTubeEmbed 
                videoId="XtsI5PZMqzU" 
                title="James Pitts Band Live Essentials - Shaky Ground"
              />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Subscribe to our YouTube channel for weekly live drops and behind-the-scenes content.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

