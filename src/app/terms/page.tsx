import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service | James Pitts Band",
  description:
    "Terms of service for the James Pitts Band website—rules and guidelines for using our site and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="border-b border-white/10 bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Terms of Service</h1>
          <p className="text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="bg-black px-4 py-16">
        <div className="mx-auto w-full max-w-4xl space-y-8 text-white/80">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Agreement to Terms</h2>
            <p>
              By accessing or using the {SITE_CONFIG.name} website, you agree to be bound by these
              Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Use License</h2>
            <p>
              Permission is granted to temporarily view and stream content on the {SITE_CONFIG.name}
              website for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>Modifying or copying materials</li>
              <li>Using materials for commercial purposes</li>
              <li>Removing copyright or proprietary notations</li>
              <li>Transferring materials to another person</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Inner Circle Membership</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Membership is subject to acceptance and payment terms</li>
              <li>Benefits and perks may change with notice</li>
              <li>Membership fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to terminate memberships for violations of these terms</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Ticket Sales</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>All ticket sales are final unless otherwise specified</li>
              <li>Refunds are subject to venue and ticketing partner policies</li>
              <li>We are not responsible for third-party ticketing platform issues</li>
              <li>VIP packages are subject to availability and terms</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">User Content</h2>
            <p>
              By submitting content (photos, videos, comments) tagged with {SITE_CONFIG.hashtag},
              you grant us permission to use, display, and share your content on our website and
              social media channels.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Prohibited Uses</h2>
            <p>You may not use our website to:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Harass, abuse, or harm others</li>
              <li>Impersonate the band or staff</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Intellectual Property</h2>
            <p>
              All content on this website, including music, images, text, and logos, is the
              property of {SITE_CONFIG.name} or its licensors and is protected by copyright and
              trademark laws.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Disclaimers</h2>
            <p>
              The materials on our website are provided "as is." We make no warranties, expressed
              or implied, regarding the accuracy, reliability, or availability of our services.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Limitation of Liability</h2>
            <p>
              In no event shall {SITE_CONFIG.name} be liable for any damages arising out of the use
              or inability to use our website, including but not limited to data loss or service
              interruptions.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Modifications</h2>
            <p>
              We reserve the right to revise these Terms of Service at any time. By continuing to
              use the website after changes are posted, you agree to be bound by the revised terms.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Contact Information</h2>
            <p>
              For questions about these Terms of Service, contact us at{" "}
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

