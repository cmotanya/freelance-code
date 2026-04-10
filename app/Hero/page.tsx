"use client";

import { useRef } from "react";
import { gsap } from "gsap";

import { ArrowBigRight } from "lucide-react";
import { animateHeroEntrance } from "@/components/animations/animateHero";
import SkillsAccordion from "@/components/skills-accordion";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      let cleanupEntrance: (() => void) | undefined;

      if (textRef.current) {
        cleanupEntrance = animateHeroEntrance({
          textEl: textRef.current,
        });
      }

      return () => {
        cleanupEntrance?.();
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="hero"
      className="flex flex-col items-center justify-center gap-10"
    >
      <div className="bg-background text-muted-foreground border-muted-foreground/30 relative flex gap-2 rounded-3xl border py-2.5 pr-5 pl-2 text-base font-medium tracking-tight uppercase">
        Available for Freelance Work{" "}
      </div>

      <div className="bg-card border-muted-foreground/30 w-full space-y-8 rounded-3xl border p-5 backdrop-blur-sm">
        <article data-intro="true" className="w-full space-y-4 text-base">
          <p ref={textRef} className="max-w-2xl leading-7">
            I&apos;m Cornelius. I design and deliver practical digital and
            physical systems, from <strong>web products</strong> to
            <strong> network installations</strong> and
            <strong> surveillance setups</strong>. The goal is always the same:
            make it clear, solid, and ready for real people to use through the
            web.
          </p>
        </article>

        <div className="flex w-full justify-start py-4">
          <button
            type="button"
            className="bg-primary text-background rounded-2xl px-3 py-3.5 text-lg leading-5 shadow-xs transition-all duration-200 ease-in-out hover:scale-105 focus:ring-4 active:scale-95"
          >
            <Link href="/project" className="flex items-center gap-3">
              View Projects
              <ArrowBigRight
                size={15}
                className="animate-float-right transition-all"
              />{" "}
            </Link>
          </button>
        </div>

        <div>
          <SkillsAccordion />
        </div>
      </div>
    </section>
  );
}
