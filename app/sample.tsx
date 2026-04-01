"use client";

import { useState, useRef } from "react";
import Link from "next/link";
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
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const focusAreas = [
  {
    title: "Build",
    description:
      "Web experiences that feel sharp, fast, and easy to use from the first click.",
    icon: FolderKanban,
    accent: "var(--primary)",
  },
  {
    title: "Secure",
    description:
      "Infrastructure and surveillance systems set up to stay dependable under pressure.",
    icon: ShieldCheck,
    accent: "var(--secondary)",
  },
  {
    title: "Support",
    description:
      "Delivery that stays practical: clean setup, handoff, and solutions people can actually run.",
    icon: Wrench,
    accent: "var(--accent)",
  },
] as const;

function useCountUp(target: number, duration = 1.6, start = false) {
  const [value, setValue] = useState(0);

  useGSAP(
    () => {
      if (!start) return;

      const counter = { value: 0 };
      const tween = gsap.to(counter, {
        value: target,
        duration,
        ease: "power2.out",
        onUpdate: () => setValue(Math.round(counter.value)),
      });

      return () => tween.kill();
    },
    { dependencies: [start, target, duration] },
  );

  return value;
}

function StatCard({
  label,
  target,
  suffix = "+",
  badge,
  icon,
  toneClass,
  animate,
}: {
  label: string;
  target: number;
  suffix?: string;
  badge: string;
  icon: React.ReactNode;
  toneClass: string;
  animate: boolean;
}) {
  const count = useCountUp(target, 1.8, animate);

  return (
    <article
      className={cn(
        "border-foreground bg-card flex h-full flex-col justify-between border-4 p-4 shadow-[6px_6px_0_var(--foreground)]",
        toneClass,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="max-w-[12rem] text-xs font-semibold tracking-[0.18em] uppercase">
          {label}
        </p>
        <span className="border-foreground bg-background flex size-10 items-center justify-center border-2">
          {icon}
        </span>
      </div>

      <div className="mt-8 space-y-3">
        <p className="font-serif text-5xl leading-none sm:text-6xl">
          {count}
          {suffix}
        </p>
        <p className="inline-flex w-fit border-2 border-current px-2 py-1 text-xs font-bold tracking-[0.18em] uppercase">
          {badge}
        </p>
      </div>
    </article>
  );
}

export default function AboutSection() {
  const [open, setOpen] = useState<string>(skills_group[0]?.category ?? "");
  const [statsVisible, setStatsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const introTargets = introRef.current?.querySelectorAll("[data-intro]");
      const cardTargets =
        cardsRef.current?.querySelectorAll("[data-focus-card]");
      const skillTargets =
        skillsRef.current?.querySelectorAll("[data-skill-row]");
      const statTargets =
        statsRef.current?.querySelectorAll("[data-stat-card]");

      if (introTargets?.length) {
        gsap.fromTo(
          introTargets,
          { y: 40, opacity: 0, rotate: -1.5 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      if (cardTargets?.length) {
        gsap.fromTo(
          cardTargets,
          { y: 32, opacity: 0, rotate: 2 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      }

      if (skillTargets?.length) {
        gsap.fromTo(
          skillTargets,
          { x: -24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      }

      if (statTargets?.length) {
        gsap.fromTo(
          statTargets,
          { y: 28, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 83%",
              once: true,
              onEnter: () => setStatsVisible(true),
            },
          },
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-foreground relative mt-16 space-y-10 border-t-4 pt-10"
    >
      <div className="border-foreground bg-card flex items-center justify-between gap-4 border-4 px-4 py-3 shadow-[6px_6px_0_var(--foreground)]">
        <div>
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
            system_profile
          </p>
          <h2 className="font-serif text-3xl leading-none uppercase sm:text-4xl">
            Built Loud. Wired Right.
          </h2>
        </div>
        <span className="border-foreground bg-accent border-2 px-3 py-2 font-mono text-xs tracking-[0.2em] uppercase">
          [01]
        </span>
      </div>

      <div
        ref={introRef}
        className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]"
      >
        <article
          data-intro
          className="border-foreground bg-primary text-primary-foreground space-y-6 border-4 p-6 shadow-[10px_10px_0_var(--foreground)] sm:p-8"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase">
            About The Operator
          </p>
          <div className="space-y-4">
            <h3 className="font-serif text-5xl leading-[0.9] uppercase sm:text-6xl">
              I build systems that do the job and look like they mean it.
            </h3>
            <p className="max-w-2xl text-base leading-7 sm:text-lg">
              I&apos;m Cornelius. I design and deliver practical digital and
              physical systems, from <strong>web products</strong> to
              <strong> network installations</strong> and
              <strong> surveillance setups</strong>. The goal is always the
              same: make it clear, solid, and ready for real people to use.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Web apps with personality",
              "Infrastructure that stays stable",
              "Security setups that stay usable",
            ].map((item) => (
              <div
                key={item}
                className="border-primary-foreground/80 bg-primary-foreground/10 px-3 py-3 text-sm font-semibold uppercase backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <aside data-intro className="grid gap-4">
          <div className="border-foreground bg-card relative border-4 p-5 shadow-[8px_8px_0_var(--secondary)]">
            <div className="animate-float-slow border-foreground bg-accent absolute top-3 right-3 border-2 px-2 py-1 font-mono text-[10px] tracking-[0.18em] uppercase">
              live mode
            </div>
            <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
              Why Clients Keep Coming Back
            </p>
            <div className="mt-5 space-y-4">
              <p className="text-2xl leading-tight font-bold uppercase">
                Fast decisions. Clean execution. Less guesswork.
              </p>
              <p className="text-muted-foreground text-sm leading-6">
                I like projects with moving parts, but the experience should
                still feel simple. That means strong communication, useful
                defaults, and systems that are easy to maintain after launch.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ["Response", "Quick and direct"],
              ["Style", "Brutalist but usable"],
              ["Focus", "Performance and clarity"],
              ["Delivery", "Built for handoff"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-foreground bg-card border-4 p-3 shadow-[5px_5px_0_var(--foreground)]"
              >
                <p className="text-muted-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase">{value}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div ref={cardsRef} className="grid gap-4 md:grid-cols-3">
        {focusAreas.map((area) => {
          const Icon = area.icon;

          return (
            <article
              key={area.title}
              data-focus-card
              className="border-foreground bg-card border-4 p-5 shadow-[7px_7px_0_var(--foreground)]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
                  {area.title}
                </p>
                <span
                  className="border-foreground flex size-11 items-center justify-center border-2"
                  style={{ backgroundColor: area.accent }}
                >
                  <Icon className="text-foreground size-5" strokeWidth={2.4} />
                </span>
              </div>
              <p className="text-muted-foreground mt-5 text-base leading-7">
                {area.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div
          ref={skillsRef}
          className="border-foreground bg-card border-4 p-5 shadow-[8px_8px_0_var(--foreground)] sm:p-6"
        >
          <div className="border-foreground flex items-end justify-between gap-4 border-b-4 pb-4">
            <div>
              <p className="text-primary font-mono text-xs tracking-[0.18em] uppercase">
                Capability Stack
              </p>
              <h3 className="mt-2 font-serif text-4xl leading-none uppercase">
                What I Actually Work On
              </h3>
            </div>
            <Sparkles className="text-primary mb-1 hidden size-6 sm:block" />
          </div>

          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-6 sm:text-base">
            Tap through the categories for the tools and systems behind the
            work. Each group is focused on shipping solutions that are visible,
            reliable, and easy to maintain.
          </p>

          <div className="mt-6 space-y-3">
            {skills_group.map((skill) => {
              const isOpen = open === skill.category;

              return (
                <article
                  key={skill.category}
                  data-skill-row
                  className={cn(
                    "border-foreground overflow-hidden border-4 transition-all duration-300",
                    isOpen
                      ? "bg-foreground text-background shadow-[8px_8px_0_var(--primary)]"
                      : "bg-background shadow-[5px_5px_0_var(--foreground)] hover:-translate-y-1",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? "" : skill.category)}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-xs tracking-[0.18em] uppercase opacity-75">
                      {skill.index}
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-bold uppercase sm:text-xl">
                        {skill.category}
                      </p>
                      <p className="text-xs uppercase opacity-70">
                        {skill.tags.length} tools / systems in rotation
                      </p>
                    </div>
                    <span className="flex size-10 items-center justify-center border-2 border-current">
                      <Plus
                        className={cn(
                          "size-5 transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                        strokeWidth={3}
                      />
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] border-t-4 border-current"
                        : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-2 px-4 py-4 sm:px-5">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className={cn(
                              "border-2 px-2 py-1 text-xs font-bold uppercase transition-transform duration-200 hover:-translate-y-0.5",
                              isOpen
                                ? "border-background/80 bg-background text-foreground"
                                : "border-foreground bg-card text-foreground",
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-foreground bg-accent text-foreground border-4 p-5 shadow-[8px_8px_0_var(--foreground)] sm:p-6">
            <p className="font-mono text-xs tracking-[0.18em] uppercase">
              Working Principle
            </p>
            <h3 className="mt-3 font-serif text-4xl leading-none uppercase">
              Strong systems should feel intuitive, not intimidating.
            </h3>
            <p className="mt-4 text-sm leading-6 sm:text-base">
              My approach is simple: understand the problem, build the right
              thing, remove friction, and leave behind something dependable.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-bold uppercase sm:grid-cols-4">
              {["Audit", "Design", "Deploy", "Support"].map((step) => (
                <div
                  key={step}
                  className="border-foreground bg-card border-4 px-3 py-3 text-center"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div
            ref={statsRef}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
          >
            <div data-stat-card>
              <StatCard
                label="Years Of Experience"
                target={5}
                badge="Active"
                icon={<AlarmClock className="size-5" strokeWidth={2.4} />}
                toneClass="text-primary"
                animate={statsVisible}
              />
            </div>
            <div data-stat-card>
              <StatCard
                label="Projects Undertaken"
                target={150}
                badge="Completed"
                icon={<ClipboardCheck className="size-5" strokeWidth={2.4} />}
                toneClass="text-error"
                animate={statsVisible}
              />
            </div>
            <div data-stat-card>
              <StatCard
                label="Happy Clients Served"
                target={100}
                badge="Trusted"
                icon={<SmilePlus className="size-5" strokeWidth={2.4} />}
                toneClass="text-secondary"
                animate={statsVisible}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={ctaRef}
        className="border-foreground bg-foreground text-background flex flex-col gap-5 border-4 p-6 shadow-[10px_10px_0_var(--primary)] md:flex-row md:items-center md:justify-between"
      >
        <div className="max-w-2xl space-y-2">
          <p className="text-accent font-mono text-xs tracking-[0.18em] uppercase">
            Ready For New Work
          </p>
          <h3 className="font-serif text-4xl leading-none uppercase sm:text-5xl">
            If the project needs edge and structure, let&apos;s build it.
          </h3>
          <p className="text-background/80 text-sm leading-6 sm:text-base">
            I take on work that needs clear thinking, durable execution, and a
            strong finish, whether it starts on a screen, a rack, or a wall.
          </p>
        </div>

        <Button
          asChild
          className="border-background bg-primary text-primary-foreground h-auto rounded-none border-4 px-7 py-4 text-lg uppercase shadow-[6px_6px_0_var(--accent)] hover:-translate-y-1 active:translate-y-0"
        >
          <Link href="#contact" className="flex items-center gap-3">
            Get In Touch
            <ArrowUpRight className="size-5 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
