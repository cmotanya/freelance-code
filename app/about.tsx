"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
  return (
    <section id="about" className="relative mt-16 space-y-10 pt-10">
      <Card className="bg-muted/50 w-full p-5 backdrop-blur-sm">
        <article data-intro="true" className="w-full space-y-4">
          <h3 className="font-display text-2xl font-medium uppercase">
            about me
          </h3>
          <p className="text-copy font-serif text-5xl leading-[0.88] tracking-wide text-balance uppercase">
            Looking for Solutions that are tailored to your needs.
          </p>
          <p className="max-w-2xl text-base leading-7">
            I&apos;m Cornelius. I design and deliver practical digital and
            physical systems, from <strong>web products</strong> to
            <strong> network installations</strong> and
            <strong> surveillance setups</strong>. The goal is always the same:
            make it clear, solid, and ready for real people to use.
          </p>
        </article>
      </Card>
    </section>
  );
}
