import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The James Pitts Band | Fan Support & City Requests",
  description:
    "Say hi to the James Pitts Band—share your story, request a hometown show, or get Inner Circle and merch support straight from the crew.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

