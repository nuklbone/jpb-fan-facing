"use client";

import { useEffect, useRef, useState } from "react";

interface SpotifyEmbedProps {
  /** Spotify embed URL (e.g., https://open.spotify.com/embed/track/...) */
  url: string;
  /** Width of the embed (default: 100%) */
  width?: string;
  /** Height of the embed (default: 352 for tracks, 380 for albums) */
  height?: number;
  /** Show compact player (default: false) */
  compact?: boolean;
  /** Theme: dark or light (default: dark) */
  theme?: "dark" | "light";
  /** Allow fullscreen (default: true) */
  allowFullScreen?: boolean;
}

export function SpotifyEmbed({
  url,
  width = "100%",
  height = 352,
  compact = false,
  theme = "dark",
  allowFullScreen = true,
}: SpotifyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Convert regular Spotify URL to embed URL if needed
  let embedUrl = url;
  if (!url.includes("/embed/")) {
    // Convert regular Spotify URLs to embed format
    // Examples:
    // https://open.spotify.com/track/... -> https://open.spotify.com/embed/track/...
    // https://open.spotify.com/album/... -> https://open.spotify.com/embed/album/...
    // https://open.spotify.com/artist/... -> https://open.spotify.com/embed/artist/...
    embedUrl = url.replace(/open\.spotify\.com\/(track|album|artist|playlist)\//, "open.spotify.com/embed/$1/");
  }

  // Add theme and compact params
  try {
    const embedUrlObj = new URL(embedUrl);
    embedUrlObj.searchParams.set("theme", theme);
    if (compact) {
      embedUrlObj.searchParams.set("compact", "true");
    }
    embedUrl = embedUrlObj.toString();
  } catch {
    // If URL parsing fails, use as-is
  }

  useEffect(() => {
    if (iframeRef.current) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-black/50" style={{ width }}>
      {!isLoaded && (
        <div className="flex h-32 items-center justify-center">
          <p className="text-white/60">Loading player...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={embedUrl}
        width={width}
        height={height}
        frameBorder="0"
        allowTransparency
        allow={allowFullScreen ? "encrypted-media; fullscreen; picture-in-picture" : "encrypted-media"}
        className="rounded-lg"
        loading="lazy"
        title="Spotify Player"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

