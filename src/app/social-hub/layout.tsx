import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "James Pitts Band Social Hub | Fan Feed & Challenges",
  description:
    "Plug into the James Pitts Band social hub—live fan feed, weekly spotlights, and challenges. Tag #JMPBParty to get featured.",
};

export default function SocialHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

