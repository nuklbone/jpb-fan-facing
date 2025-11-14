import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "elevated";
  onClick?: () => void;
}

export function Card({
  children,
  className,
  variant = "default",
  onClick,
}: CardProps) {
  const variantClasses = {
    default: "border border-white/10 bg-black/50",
    outline: "border-2 border-brand bg-black/30",
    elevated: "border border-white/10 bg-black/50 shadow-lg shadow-brand/10",
  };

  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-colors",
        variantClasses[variant],
        onClick && "cursor-pointer hover:border-brand",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
    >
      {children}
    </div>
  );
}

