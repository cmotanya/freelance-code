"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { glitchEffect } from "@/components/animations/glitch";
import { animateHeroEntrance } from "@/components/animations/animateHero";
import { Card } from "@/components/ui/card";
import SkillsAccordion from "@/components/skills-accordion";
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
      className="flex flex-col items-center justify-center gap-10"
    >
      <div className="bg-background text-muted-foreground border-border relative flex gap-2 rounded-2xl border py-2.5 pr-5 pl-2 text-base font-medium tracking-tight uppercase">
        Available for Freelance Work{" "}
      </div>

      <Card className="bg-card w-full p-5 backdrop-blur-sm">
        <article data-intro="true" className="w-full space-y-4 text-base">
          <p className="max-w-2xl leading-7">
            I&apos;m Cornelius. I design and deliver practical digital and
            physical systems, from <strong>web products</strong> to
            <strong> network installations</strong> and
            <strong> surveillance setups</strong>. The goal is always the same:
            make it clear, solid, and ready for real people to use.
          </p>
        </article>

        <div className="px-6">
          <Button className="w-full px-3 py-7 text-base font-semibold uppercase">
            View Projects{" "}
            <ArrowRight className="animate-float-left ml-1 transition-transform group-hover:translate-x-2" />
          </Button>
        </div>

        <div>
          <SkillsAccordion />
        </div>
      </Card>
    </section>
  );
}
