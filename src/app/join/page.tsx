"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    zip: "",
    sms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message || "Welcome to the Inner Circle!" });
        setFormData({ firstName: "", email: "", zip: "", sms: false });
      } else {
        setSubmitStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero & Incentive */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Join the Inner Circle Crew
          </h1>
          <p className="mb-4 text-xl text-white/80 md:text-2xl">
            Get closer to the soul-blues party than ever before.
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
            We send the energy straight to you—before the timeline ever sees it.
          </p>
          <div className="rounded-lg border border-white/10 bg-black/50 p-6">
            <p className="text-lg text-white">
              🎁 Welcome Gift: "Shaky Ground (Live at The Brickyard)" + 10% merch code + presale
              alerts
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Snapshot */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What You Get</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎫</div>
              <h3 className="mb-2 text-xl font-semibold text-white">Early Ticket Alerts</h3>
              <p className="text-white/70">
                Get presale codes and city announcements before they hit socials
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎵</div>
              <h3 className="mb-2 text-xl font-semibold text-white">Exclusive Content</h3>
              <p className="text-white/70">
                Live recordings, rehearsal clips, and setlist breakdowns not available anywhere else
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎁</div>
              <h3 className="mb-2 text-xl font-semibold text-white">Member-Only Perks</h3>
              <p className="text-white/70">
                Merch drops, birthday shoutouts, contests, and quarterly mystery packs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Comparison */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Choose Your Circle
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Free Newsletter */}
            <div className="rounded-lg border border-white/10 bg-black/50 p-6">
              <h3 className="mb-4 text-2xl font-semibold text-white">Free Newsletter</h3>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Show announcements</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Playlist updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Merch previews</span>
                </div>
              </div>
            </div>

            {/* Backstage Crew */}
            <div className="rounded-lg border-2 border-brand bg-black/50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Backstage Crew</h3>
                <span className="rounded-full bg-brand px-3 py-1 text-sm font-semibold text-brand-foreground">
                  $5/mo
                </span>
              </div>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Everything in Free</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Early ticket codes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Exclusive videos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">Monthly AMAs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand">✓</span>
                  <span className="text-white/70">5% merch discount</span>
                </div>
              </div>
            </div>

            {/* Inner Circle VIP */}
            <div className="rounded-lg border-2 border-accent bg-black/50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Inner Circle VIP</h3>
                <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                  $15/mo
                </span>
              </div>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Everything in Backstage Crew</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Full replay vault</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Exclusive stems</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">Quarterly mystery merch</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">VIP upgrade lotteries</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-white/70">15% merch discount</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opt-In Form */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Get Started</h2>
            <p className="text-lg text-white/70">
              Start with the free newsletter, or upgrade anytime to unlock exclusive perks.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-black/50 p-8">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm text-white/70">
                    First Name (optional)
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="zip" className="mb-2 block text-sm text-white/70">
                  Zip/Postal Code (optional)
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                  placeholder="12345"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="sms"
                  name="sms"
                  checked={formData.sms}
                  onChange={(e) => setFormData({ ...formData, sms: e.target.checked })}
                  className="h-4 w-4 rounded border-white/10 bg-black/50 text-brand focus:ring-brand"
                />
                <label htmlFor="sms" className="text-sm text-white/70">
                  Opt-in to SMS alerts for my city
                </label>
              </div>
              <Button size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join the Inner Circle"}
              </Button>
              {submitStatus && (
                <div
                  className={`rounded-lg p-4 text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <p className="text-center text-xs text-white/60">
                Expect 2–3 high-value messages per month. Zero spam, all groove.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Exclusive Preview */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Exclusive Preview</h2>
          <p className="mb-8 text-lg text-white/70">
            Members get access to unreleased soundcheck videos and annotated setlists
          </p>
          <div className="rounded-lg border border-white/10 bg-black/50 p-8">
            <div className="aspect-video rounded bg-brand-muted/20">
              <p className="flex h-full items-center justify-center text-white/60">
                Locked preview - Join to unlock full content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust */}
      <section className="border-t border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl text-center text-sm text-white/70">
          <p className="mb-4">
            We respect your data—only the band and our fan engine see it. One click to opt out
            anytime, though we'll miss you.
          </p>
          <p>
            Questions? Contact{" "}
            <a href="mailto:innercircle@jamespittsband.com" className="text-brand hover:underline">
              innercircle@jamespittsband.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
