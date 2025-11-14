import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Page Not Found</h2>
        <p className="mb-8 text-lg text-white/70">
          Looks like you hit a wrong note. Let's get you back to the groove.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" href="/">
            Back to Home
          </Button>
          <Button size="lg" variant="outline" href="/shows">
            Find a Show
          </Button>
        </div>
      </div>
    </main>
  );
}

