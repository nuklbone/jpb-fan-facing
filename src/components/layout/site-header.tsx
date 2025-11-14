"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="flex w-full items-center justify-between px-6 py-4 lg:px-12">
            <Link href="/" className="text-lg font-semibold tracking-wide">
              {SITE_CONFIG.name}
            </Link>
            <nav className="hidden items-center gap-6 text-sm md:flex">
              {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button size="sm" variant="secondary" href="/tickets">
            Tickets & VIP
          </Button>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-sm md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen ? (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
              <nav className="flex flex-col space-y-1 px-4 py-4 text-sm">
                {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 transition-colors hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="sm"
              variant="secondary"
              href="/tickets"
              className="mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Tickets & VIP
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
