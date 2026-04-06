import Hero from "./Hero/page";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 py-8">
      <div className="pointer-events-none absolute inset-0 -z-40 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_2px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_2px)] bg-size-[56px_56px] opacity-35" />
      <Hero />
    </main>
  );
}
