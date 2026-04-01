"use client";

import { useState } from "react";
import {
  AlarmClock,
  ArrowUpRight,
  ClipboardCheck,
  FolderKanban,
  Plus,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Wrench,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skills_group } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
  const [open, setOpen] = useState<string>(skills_group[0]?.category ?? "");
  const [statsVisible, setStatsVisible] = useState(false);

  return (
    <section
      id="about"
      className="border-foreground relative mt-16 space-y-10 border-t-4 pt-10"
    >
      <div className="border-foreground bg-card flex w-full items-start justify-between space-y-6 border-4 p-5 shadow-[6px_6px_0_var(--copy)]">
        <div>
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
            system_profile
          </p>
          <h2 className="text-copy font-serif text-3xl leading-none uppercase sm:text-4xl">
            Where Precision meets Reliability.
          </h2>
        </div>
        <span className="border-foreground bg-accent border-2 p-2 font-mono text-xs tracking-[0.2em] uppercase">
          [01]
        </span>
      </div>

      <article
        data-intro="true"
        className="border-border bg-primary-strong/50 flex w-full flex-col items-start justify-between space-y-5 border-4 p-5 shadow-[10px_10px_0_var(--foreground)] backdrop-blur-sm" 
      >
        <h3 className="font-display font-medium uppercase">about me</h3>
        <p className="font-serif text-5xl leading-[0.88] tracking-wide text-balance uppercase">
          Looking for Solutions that are tailored to your needs.
        </p>
        <p className="max-w-2xl sm:text-lg">
          I&apos;m Cornelius. I design and deliver practical digital and
          physical systems, from <strong>web products</strong> to
          <strong> network installations</strong> and
          <strong> surveillance setups</strong>. The goal is always the same:
          make it clear, solid, and ready for real people to use.
        </p>
      </article>
    </section>
  );
}
