import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-brand text-brand-foreground hover:bg-brand/90 focus-visible:ring-brand",
  secondary:
    "bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent",
  outline:
    "border-2 border-white/20 bg-transparent text-white hover:border-brand hover:bg-white/5 focus-visible:ring-brand",
  ghost:
    "bg-transparent text-brand hover:bg-white/10 focus-visible:ring-brand",
} as const;

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
} as const;

export type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href" | "target" | "rel">;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  asChild = false,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = clsx(baseStyles, variants[variant], sizes[size], className);
  const content = (
    <>
      {leftIcon ? <span className="mr-2 flex items-center">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="ml-2 flex items-center">{rightIcon}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
