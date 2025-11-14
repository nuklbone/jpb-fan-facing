import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout/site-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "High-Energy Soul-Blues Shows | The James Pitts Band Official Site",
  description:
    "Dive into the James Pitts Band's soul-blues party—stream new music, grab tickets, and join the Inner Circle for exclusive drops and presale perks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-black antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
