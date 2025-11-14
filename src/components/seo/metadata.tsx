import type { Metadata } from "next";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "music.song" | "music.album";
  publishedTime?: string;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
  type = "website",
  publishedTime,
}: GenerateMetadataOptions): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://jamespittsband.com";
  const fullUrl = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "James Pitts Band",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

