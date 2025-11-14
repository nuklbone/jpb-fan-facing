"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    topic: "just-saying-hi",
  });

  const [cityFormData, setCityFormData] = useState({
    cityName: "",
    email: "",
    city: "",
    venue: "",
    why: "",
  });

  const [isSubmittingCity, setIsSubmittingCity] = useState(false);
  const [citySubmitStatus, setCitySubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message || "Thanks for reaching out!" });
        setFormData({ name: "", email: "", message: "", topic: "just-saying-hi" });
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
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20 px-6 lg:px-12">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand/20 via-brand/10 to-black" />
        <div className="relative z-10 w-full text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Stay in Touch with the James Pitts Band Crew
          </h1>
          <p className="text-xl text-white/80 md:text-2xl">
            We read every note. Drop your song requests, wild night stories, or let us know how our
            music soundtracked your week.
          </p>
        </div>
      </section>

      {/* Fan Mail Form */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">Fan Mail</h2>
          <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-black/50 p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
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
                  className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="topic" className="mb-2 block text-sm text-white/70">
                  What's this about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white focus:border-brand focus:outline-none"
                >
                  <option value="just-saying-hi">Just Saying Hi</option>
                  <option value="song-request">Song Request</option>
                  <option value="memory-to-share">Memory to Share</option>
                  <option value="accessibility">Accessibility Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <Button size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
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
                Thanks for reaching out! Expect a reply within a week—faster when we're off the road.
                We appreciate you keeping the groove alive.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Bring Us to Your Town */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            Want Us in Your City?
          </h2>
          <p className="mb-8 text-center text-lg text-white/70">
            Tell us where the dance floor needs some soul-blues fire. Share your favorite venue or
            festival and why your town is ready.
          </p>
          <div className="rounded-lg border border-white/10 bg-black/50 p-8">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmittingCity(true);
                setCitySubmitStatus(null);

                try {
                  const response = await fetch("/api/city-request", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: cityFormData.cityName,
                      email: cityFormData.email,
                      city: cityFormData.city,
                      venue: cityFormData.venue,
                      why: cityFormData.why,
                    }),
                  });

                  const data = await response.json();

                  if (response.ok) {
                    setCitySubmitStatus({
                      type: "success",
                      message:
                        data.message ||
                        `Thanks for the request! We'll keep ${cityFormData.city} in mind for future tours.`,
                    });
                    setCityFormData({
                      cityName: "",
                      email: "",
                      city: "",
                      venue: "",
                      why: "",
                    });
                  } else {
                    setCitySubmitStatus({
                      type: "error",
                      message: data.error || "Something went wrong. Please try again.",
                    });
                  }
                } catch (error) {
                  setCitySubmitStatus({
                    type: "error",
                    message: "Network error. Please try again.",
                  });
                } finally {
                  setIsSubmittingCity(false);
                }
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="cityName" className="mb-2 block text-sm text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="cityName"
                    name="cityName"
                    value={cityFormData.cityName}
                    onChange={(e) =>
                      setCityFormData({ ...cityFormData, cityName: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="cityEmail" className="mb-2 block text-sm text-white/70">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="cityEmail"
                    name="cityEmail"
                    value={cityFormData.email}
                    onChange={(e) =>
                      setCityFormData({ ...cityFormData, email: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="city" className="mb-2 block text-sm text-white/70">
                  City & State *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={cityFormData.city}
                  onChange={(e) =>
                    setCityFormData({ ...cityFormData, city: e.target.value })
                  }
                  className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                  placeholder="City, State"
                />
              </div>
              <div>
                <label htmlFor="venue" className="mb-2 block text-sm text-white/70">
                  Favorite Venue or Event
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={cityFormData.venue}
                  onChange={(e) =>
                    setCityFormData({ ...cityFormData, venue: e.target.value })
                  }
                  className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                  placeholder="Venue name or festival"
                />
              </div>
              <div>
                <label htmlFor="why" className="mb-2 block text-sm text-white/70">
                  Why This Stop Matters
                </label>
                <textarea
                  id="why"
                  name="why"
                  rows={4}
                  value={cityFormData.why}
                  onChange={(e) =>
                    setCityFormData({ ...cityFormData, why: e.target.value })
                  }
                  className="w-full rounded-md border border-white/10 bg-black/50 px-6 lg:px-12 py-2 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
                  placeholder="Tell us why your city is ready for the James Pitts Band..."
                />
              </div>
              <Button size="lg" type="submit" className="w-full" disabled={isSubmittingCity}>
                {isSubmittingCity ? "Submitting..." : "Request My City"}
              </Button>
              {citySubmitStatus && (
                <div
                  className={`rounded-lg p-4 text-sm ${
                    citySubmitStatus.type === "success"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {citySubmitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Fan Club & Merch Support */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            Need Help with Your Inner Circle Perks?
          </h2>
          <p className="mb-8 text-center text-lg text-white/70">
            Questions about membership access, exclusive content, order tracking, sizing swaps, or
            billing? We're here to help.
          </p>
          <div className="text-center">
            <p className="mb-4 text-white">
              Email us at{" "}
              <a
                href="mailto:innercircle@jamespittsband.com"
                className="text-brand hover:underline"
              >
                innercircle@jamespittsband.com
              </a>
            </p>
            <p className="text-white/70">
              We reply within 48 hours—Inner Circle members get priority routing.
            </p>
          </div>
        </div>
      </section>

      {/* Press Corner */}
      <section className="border-t border-white/10 bg-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Storytellers & Press
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Covering the band or need assets for a feature? We've got hi-res photos, live clips, and
            tech specs ready.
          </p>
          <div className="space-y-4">
            <Button size="lg" variant="outline" href="/about">
              View Press Kit
            </Button>
            <p className="text-white/70">
              Email{" "}
              <a href="mailto:stories@jamespittsband.com" className="text-brand hover:underline">
                stories@jamespittsband.com
              </a>{" "}
              for media inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="border-t border-white/10 bg-gradient-to-b from-brand-muted/20 to-black py-16 px-6 lg:px-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Stay Connected</h2>
          <p className="mb-8 text-lg text-white/70">
            Tag @JamesPittsBand or #JMPBParty so we can share your moments on the social wall.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" href="https://instagram.com" target="_blank">
              Instagram
            </Button>
            <Button variant="outline" href="https://tiktok.com" target="_blank">
              TikTok
            </Button>
            <Button variant="outline" href="https://youtube.com" target="_blank">
              YouTube
            </Button>
            <Button variant="outline" href="https://facebook.com" target="_blank">
              Facebook
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

