import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  className?: string;
}

export function Alert({ children, variant = "info", className }: AlertProps) {
  const variantClasses = {
    success: "bg-green-500/20 text-green-400 border-green-500/30",
    error: "bg-red-500/20 text-red-400 border-red-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        variantClasses[variant],
        className
      )}
      role="alert"
    >
      {children}
    </div>
  );
}

