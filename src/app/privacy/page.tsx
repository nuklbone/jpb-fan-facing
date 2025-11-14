import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | James Pitts Band",
  description:
    "Privacy policy for the James Pitts Band website—how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl space-y-8 text-white/80">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Introduction</h2>
            <p>
              {SITE_CONFIG.name} ("we," "our," or "us") respects your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit
              our website or join the Inner Circle.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Information We Collect</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Email Address:</strong> Collected when you join the Inner Circle or
                subscribe to tour alerts
              </li>
              <li>
                <strong>Name:</strong> Optional, collected for personalization
              </li>
              <li>
                <strong>Zip/Postal Code:</strong> Optional, used for location-based show
                notifications
              </li>
              <li>
                <strong>Contact Information:</strong> Collected when you submit forms or request
                city visits
              </li>
              <li>
                <strong>Usage Data:</strong> Website analytics, page views, and interactions
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Send tour announcements and show updates</li>
              <li>Deliver Inner Circle exclusive content and perks</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve our website and services</li>
              <li>Send promotional emails (with your consent)</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with trusted service
              providers (email delivery, analytics) who assist in operating our website, subject to
              confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Your Rights</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access and update your information</li>
              <li>Unsubscribe from emails at any time</li>
              <li>Request deletion of your data</li>
              <li>Opt out of certain data collection</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.email.innerCircle}`} className="text-brand hover:underline">
                {SITE_CONFIG.email.innerCircle}
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze site
              usage, and deliver personalized content. You can control cookies through your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, no
              method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Children's Privacy</h2>
            <p>
              Our website is not directed to children under 13. We do not knowingly collect
              personal information from children.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated "Last updated" date.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.email.innerCircle}`} className="text-brand hover:underline">
                {SITE_CONFIG.email.innerCircle}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

