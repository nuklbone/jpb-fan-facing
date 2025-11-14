"use client";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function YouTubeEmbed({ 
  videoId, 
  title = "YouTube video player", 
  width = "100%",
  height = "100%",
  className 
}: YouTubeEmbedProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`;

  return (
    <div className={`relative w-full ${className || ""}`} style={{ paddingBottom: "56.25%" }}>
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 h-full w-full"
        frameBorder="0"
        loading="lazy"
      />
    </div>
  );
}

