import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { cn } from "#/lib/utils";
import { AlarmClock, ClipboardCheck, Plus, SmilePlus } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills_group } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1.6, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration,
      ease: "power2.out",
      onUpdate: () => setValue(Math.round(obj.val)),
    });
  }, [start, target, duration]);
  return value;
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  label,
  target,
  suffix = "+",
  colorClass,
  badgeClass,
  badge,
  icon,
  animate,
}: {
  label: string;
  target: number;
  suffix?: string;
  colorClass: string;
  badgeClass: string;
  badge: string;
  icon: React.ReactNode;
  animate: boolean;
}) {
  const count = useCountUp(target, 1.8, animate);
  return (
    <div className="border-outline-variant/40 flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0">
      <div className="flex flex-col items-center gap-1">
        <p className="text-muted flex items-center gap-1 text-xs font-medium tracking-wide">
          {label} {icon}
        </p>
        <p className={cn("text-5xl font-bold", colorClass)}>
          {count}
          {suffix}
        </p>
      </div>
      <span
        className={cn(
          "rounded-full border px-2 py-1 text-xs font-semibold",
          badgeClass,
        )}
      >
        {badge}
      </span>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function AboutSection() {
  const [open, setOpen] = useState<string | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const skillsHeaderRef = useRef<HTMLParagraphElement>(null);
  const skillItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const toggle = (category: string) => {
    setOpen((prev) => (prev === category ? null : category));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. Section heading: slide in from left + fade ──────────────────────
      gsap.fromTo(
        headingRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );

      // ── 2. Intro paragraphs: staggered fade-up ─────────────────────────────
      gsap.fromTo(
        introRef.current!.querySelectorAll("p"),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // ── 3. Skills header ───────────────────────────────────────────────────
      gsap.fromTo(
        skillsHeaderRef.current,
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsHeaderRef.current,
            start: "top 87%",
            toggleActions: "play none none none",
          },
        },
      );

      // ── 4. Skill rows: stagger slide-up ───────────────────────────────────
      const validItems = skillItemRefs.current.filter(Boolean);
      gsap.fromTo(
        validItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: validItems[0],
            start: "top 87%",
            toggleActions: "play none none none",
          },
        },
      );

      // ── 5. Stats card: scale in from slightly below ────────────────────────
      gsap.fromTo(
        statsRef.current,
        { y: 48, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            onEnter: () => setStatsVisible(true),
          },
        },
      );

      // ── 6. CTA block: fade + gentle rise ──────────────────────────────────
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-surface-high relative space-y-8 border-t px-6 pt-15 pb-24"
    >
      {/* ── Heading ────────────────────────────────────────────────────────── */}
      <div ref={headingRef} className="relative flex flex-col opacity-0">
        <h1 className="text-primary z-10 w-fit pr-5 font-mono tracking-widest uppercase">
          system_profile
        </h1>
        <span className="from-primary to-surface absolute top-1/2 ml-38 h-px w-40 -translate-y-1/2 bg-linear-to-r" />
        <span className="text-primary absolute top-1/2 right-0 -translate-y-1/2 rounded-sm p-px text-xs font-semibold">
          [01]
        </span>
      </div>

      {/* ── Hero text (not scroll-triggered — visible on load) ─────────────── */}
      <p className="max-w-6xl text-3xl leading-none font-bold tracking-tighter text-balance">
        My experience in tech and projects I have worked on, is prove of my{" "}
        <span className="text-muted">skills</span>.
      </p>

      {/* ── Intro paragraphs ───────────────────────────────────────────────── */}
      <div ref={introRef} className="space-y-5">
        <p>
          I'm Cornelius, a focused individual who takes pride in building
          systems that are <strong>resilient</strong> and{" "}
          <strong>centric</strong> on user experience.
        </p>
        <p>
          Whether I am taking on a project about{" "}
          <strong>web development</strong>,{" "}
          <strong>network installation</strong> or{" "}
          <strong>security setup</strong>, I always deliver products that
          actually work.
        </p>
      </div>

      {/* ── Skills accordion ───────────────────────────────────────────────── */}
      <div className="space-y-3">
        <p ref={skillsHeaderRef} className="text-muted font-medium opacity-0">
          Here are my core skills:
        </p>

        {skills_group.map((skill, i) => {
          const isOpen = open === skill.category;

          return (
            <div
              key={skill.category}
              ref={(el) => {
                skillItemRefs.current[i] = el;
              }}
              className="relative mb-2 pl-3 opacity-0"
            >
              {/* Left accent bar */}
              <div className="bg-muted/10 absolute top-0 left-0 h-full w-0.5 overflow-hidden rounded-full">
                <span
                  className={cn(
                    "bg-muted absolute inset-0 origin-top transition-all duration-500 ease-in-out",
                    isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
                  )}
                />
              </div>

              {/* Row header */}
              <div
                onClick={() => toggle(skill.category)}
                className="group w-full cursor-pointer leading-none transition-all duration-150 ease-in"
              >
                <span className="text-muted text-xs font-medium">
                  Category {skill.index}
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    {skill.category}
                  </span>
                  <span className="border-muted/50 group-hover:border-muted ml-auto flex size-7 items-center justify-center rounded-full border transition-all duration-150 ease-in group-hover:border-2">
                    <Plus
                      strokeWidth={3}
                      size={16}
                      className={cn(
                        "text-muted transition-all duration-300 ease-in-out",
                        isOpen ? "rotate-45" : "rotate-0",
                      )}
                    />
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div
                className={cn(
                  "grid overflow-hidden pt-1 transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="flex flex-wrap gap-2 overflow-hidden">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-outline-variant text-muted hover:bg-outline-variant/20 rounded-md border px-1 py-0.5 text-xs font-medium transition-all duration-150 ease-in-out hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Stats card ─────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p>
          Through the years of experience and effort placed, shows my commitment
          to <strong>quality</strong> and <strong>excellence</strong> in my
          work.
        </p>

        <div
          ref={statsRef}
          className="border-outline-variant space-y-6 rounded-xl border p-4 opacity-0 backdrop-blur-sm"
        >
          <StatCard
            label="Years Of Experience"
            target={5}
            colorClass="text-tertiary"
            badgeClass="bg-tertiary-container/30 border-tertiary text-tertiary"
            badge="Active"
            icon={<AlarmClock size={16} strokeWidth={2.5} />}
            animate={statsVisible}
          />
          <StatCard
            label="Projects Undertaken"
            target={150}
            colorClass="text-error"
            badgeClass="bg-error-container/30 text-error border-error"
            badge="Completed"
            icon={<ClipboardCheck size={16} strokeWidth={2.5} />}
            animate={statsVisible}
          />
          <StatCard
            label="Happy Clients Served"
            target={100}
            colorClass="text-secondary"
            badgeClass="bg-secondary-container/30 text-secondary border-secondary"
            badge="Trusted"
            icon={<SmilePlus size={16} strokeWidth={2.5} />}
            animate={statsVisible}
          />
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <div ref={ctaRef} className="space-y-2 opacity-0">
        <p>Available for new projects!</p>
        <Button
          variant="outline"
          size="lg"
          className="hover:bg-surface-bright border-outline-variant bg-surface-bright border transition-transform duration-150 hover:scale-105 active:scale-95"
        >
          <a
            href="#contact"
            className="text-primary font-semibold hover:underline"
          >
            Get In Touch 👉
          </a>
        </Button>
      </div>
    </section>
  );
}
