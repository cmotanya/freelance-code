import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="border-border bg-background sticky top-0 z-50 border-b px-4 py-4 backdrop-blur-md sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <ThemeToggle />

        <button
          type="button"
          className="bg-primary text-background rounded-2xl p-3 text-lg leading-5 shadow-xs transition-all duration-200 ease-in-out hover:scale-105 focus:ring-4 active:scale-95"
        >
          <Link href="/contact" className="flex items-center gap-1">
            Let&apos;s Talk
            <ArrowUpRight className="animate-float-slow size-4" />
          </Link>
        </button>
      </div>
    </header>
  );
}
