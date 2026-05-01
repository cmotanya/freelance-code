import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  const linear = "linear-gradient(135deg, #C2714F, #E8A838, #2A9D8F)";

  return (
    <header className="bg-muted sticky top-0 z-50 border-b px-4 py-4 shadow-xs backdrop-blur-md sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <ThemeToggle />

        <Link href="/">
          <div
            className="relative flex size-12 shrink-0 items-center rounded-full p-0.5 transition-all duration-300 ease-in-out hover:scale-95 active:scale-105"
            style={{ background: linear }}
          >
            <div className="bg-muted flex size-full items-center justify-center rounded-full">
              <Image
                src="/header/avatar.webp"
                alt="Cornelius Motanya"
                width={30}
                height={30}
                className="size-full rounded-full object-cover object-center p-0.5"
              />
            </div>

            <div className="absolute top-0.5 right-0.5 flex size-2.5">
              <span className="bg-success absolute inline-flex size-full animate-ping rounded-full opacity-75" />
              <span className="bg-success relative inline-flex size-2.5 rounded-full" />
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
