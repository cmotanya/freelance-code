"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import { glitchEffect } from "@/components/animations/glitch";
import { animateHeroEntrance } from "@/components/animations/animateHero";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const heroElement = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      let cleanupEntrance: (() => void) | undefined;
      let cleanupGlitch: (() => void) | undefined;

      if (titleRef.current && subTextRef.current) {
        cleanupEntrance = animateHeroEntrance({
          titleEl: titleRef.current,
          subTextEl: subTextRef.current,
        });
      }

      if (heroElement.current) {
        cleanupGlitch = glitchEffect(heroElement.current);
      }

      return () => {
        cleanupEntrance?.();
        cleanupGlitch?.();
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="hero"
      className="text-foreground flex flex-col items-center justify-center gap-10"
    >
      <div className="border-foreground bg-muted-foreground text-primary-foreground gap-2 border-4 px-3 py-2 font-medium tracking-widest uppercase shadow-[6px_6px_0_var(--primary-strong)]">
        Available for Freelance Work
      </div>

      <div className="border-foreground bg-card w-full space-y-6 border-4 p-5 text-center shadow-[8px_8px_0_var(--foreground)]">
        <h3 className="text-primary font-medium">Hi, I&apos;m Cornelius 👋</h3>

        <h1 className="font-serif text-6xl leading-[0.88] font-bold tracking-wider uppercase">
          <span className="font-mono text-2xl">let me take you</span> <br />
          <span className="text-muted-foreground/80">from</span>{" "}
          <span className="font-display text-error">zero</span> <br />
          <span className="">to</span>{" "}
          <span className="font-display text-secondary">hero</span>
        </h1>

        <p
          ref={subTextRef}
          className="max-w-2xl text-center text-lg leading-relaxed"
        >
          I handle everything from setup to security. Every step from{" "}
          <strong>web apps</strong> to <strong>security</strong> and{" "}
          <strong>network infrastructure</strong>, we have a raw solution for
          you.{" "}
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
        {/* Button 1 */}
        <Button className="bg-secondary border-muted-foreground text-foreground hover:bg-secondary/90 active:bg-secondary/90 group h-auto w-full rounded-none border-4 px-8 py-4 text-xl tracking-tighter shadow-[7px_7px_0_var(--foreground)] sm:w-auto">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-3"
          >
            Start From Zero{" "}
            <ArrowBigRight className="animate-float-left size-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </Button>

        {/* Button 2 */}
        <Button
          variant="outline"
          className="border-foreground bg-background active:bg-background/90 group h-auto w-full rounded-none border-4 py-4 text-xl shadow-[7px_7px_0_var(--primary)] sm:w-auto"
        >
          <Link
            href="#contact"
            className="flex items-center justify-center gap-3"
          >
            View My Projects{" "}
            <ArrowUpRight className="animate-float-slow size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
