"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">500</h1>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Something Went Wrong</h2>
        <p className="mb-8 text-lg text-white/70">
          We hit a wrong note. Don't worry—the groove will be back soon.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={reset}>
            Try Again
          </Button>
          <Button size="lg" variant="outline" href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}

