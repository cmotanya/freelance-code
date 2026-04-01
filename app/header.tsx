import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header
      className="border-foreground sticky top-0 z-50 border-b-4 px-4 py-4 backdrop-blur-md sm:px-6 md:px-8"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--ui-canvas) 95%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <Link
          href="#hero"
          className="border-foreground bg-accent border-4 px-4 py-3 font-semibold tracking-wide uppercase shadow-[7px_7px_0_var(--copy)] transition-transform duration-200 hover:-translate-y-1"
        >
          Freelancer
        </Link>

        <Link
          href="#contact"
          className="border-foreground bg-foreground group text-primary-foreground inline-flex items-center justify-center gap-2 border-4 px-4 py-3 font-semibold tracking-widest uppercase shadow-[7px_7px_0_var(--secondary)] transition-transform duration-200 hover:-translate-y-1"
        >
          Let&apos;s Talk
          <ArrowUpRight className="animate-float-slow size-4" strokeWidth={3} />
        </Link>
      </div>
    </header>
  );
}
