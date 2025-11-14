import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
}: ImagePlaceholderProps) {
  if (src) {
    if (fill) {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", className)}
        />
      );
    }
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  // Fallback placeholder
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-brand-muted/20 text-white/40",
        className
      )}
      style={fill ? {} : { width, height }}
    >
      <span className="text-xs">{alt}</span>
    </div>
  );
}

