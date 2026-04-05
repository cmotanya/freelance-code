"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import { glitchEffect } from "@/components/animations/glitch";
import { animateHeroEntrance } from "@/components/animations/animateHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      <div className="border-border bg-muted text-muted-foreground gap-2 rounded-full border px-3 py-2 text-sm font-medium tracking-widest uppercase">
        Available for Freelance Work
      </div>

      <Card className="bg-card w-full p-5 text-center">
        <h3 className="text-primary font-medium">Hi, I&apos;m Cornelius 👋</h3>

        <h1 className="font-serif text-6xl leading-[0.88] font-bold tracking-wider uppercase">
          <span className="font-mono text-2xl font-medium">
            let me take you
          </span>{" "}
          <br />
          <span className="text-muted-foreground/80">from</span>{" "}
          <span className="font-display text-error">zero</span> <br />
          <span className="">to</span>{" "}
          <span className="font-display text-primary">hero</span>
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
      </Card>

      <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-5 sm:flex-row sm:justify-center">
        {/* Button 1 */}
        <Button className="active:bg-secondary/90 group h-auto w-full px-8 py-4 text-xl tracking-tighter sm:w-auto">
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
          className="active:bg-background/90 bg-muted group h-auto w-full py-4 text-xl sm:w-auto"
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
