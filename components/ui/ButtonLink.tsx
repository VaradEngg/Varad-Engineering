import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900";
  const variantClasses = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
    ghost: "text-slate-900 hover:bg-slate-200/70",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
