import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header
      className="border-border sticky top-0 z-50 border-b px-4 py-4 backdrop-blur-md sm:px-6 md:px-8"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--ui-canvas) 95%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center font-mono text-xl font-medium tracking-wide uppercase"
        >
          Cornelius
        </Link>

        <Button className="px-3 py-6 text-base font-medium tracking-wide">
          <Link href="/#contact" className="flex items-center gap-2">
            Let&apos;s Talk
            <ArrowUpRight
              className="animate-float-slow size-4"
              // strokeWidth={3}
            />
          </Link>
        </Button>
      </div>
    </header>
  );
}
