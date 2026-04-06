import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="border-border bg-card sticky top-0 z-50 border-b px-4 py-4 backdrop-blur-md sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <ThemeToggle />

        <Button className="bg-foreground text-background px-3 py-6 font-medium tracking-wide">
          <Link href="/#contact" className="flex items-center gap-2">
            Let&apos;s Talk
            <ArrowUpRight className="animate-float-slow size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
