"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Cable,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Globe,
  ShieldCheck,
  Wrench,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "24+", label: "Total Projects", note: "Across all disciplines" },
  { value: "9", label: "In Progress", note: "Active right now" },
  { value: "15+", label: "Delivered", note: "Shipped and handed over" },
  { value: "4", label: "Service Areas", note: "Web, networks, CCTV, support" },
];

type Status = "ongoing" | "completed";
type Category = "web" | "installations";

interface Project {
  title: string;
  description: string;
  status: Status;
  category: Category;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  // Web — Ongoing
  {
    title: "Business Website Refinement",
    description:
      "Performance pass, layout clarity, and conversion tuning for a service-focused business site.",
    status: "ongoing",
    category: "web",
    tags: ["Next.js", "Tailwind", "Performance"],
    year: "2025",
  },
  {
    title: "Personal Portfolio & Brand Site",
    description:
      "Custom UI with responsive layouts, polished interactions, and a brand identity system.",
    status: "ongoing",
    category: "web",
    tags: ["React", "GSAP", "TypeScript"],
    year: "2025",
  },
  {
    title: "Internal Admin Tool",
    description:
      "Lightweight dashboard that simplifies day-to-day ops for a small client team.",
    status: "ongoing",
    category: "web",
    tags: ["Next.js", "shadcn/ui", "Postgres"],
    year: "2025",
  },
  // Web — Completed
  {
    title: "Marketing Landing Page",
    description:
      "Responsive landing page for a service business — focused on clarity and lead capture.",
    status: "completed",
    category: "web",
    tags: ["Next.js", "Tailwind", "SEO"],
    year: "2024",
  },
  {
    title: "Freelancer Portfolio",
    description:
      "Tailored portfolio site for a creative professional with a custom component system.",
    status: "completed",
    category: "web",
    tags: ["React", "CSS Modules"],
    year: "2024",
  },
  {
    title: "Product Redesign Pass",
    description:
      "Feature upgrades and full visual redesign on an existing web product.",
    status: "completed",
    category: "web",
    tags: ["Figma", "Next.js", "Redesign"],
    year: "2023",
  },
  // Installations — Ongoing
  {
    title: "Office Network Setup",
    description:
      "Structured cabling, MikroTik routing, and Ubiquiti AP deployment for a growing office.",
    status: "ongoing",
    category: "installations",
    tags: ["MikroTik", "Ubiquiti", "Fiber"],
    year: "2025",
  },
  {
    title: "Retail CCTV Expansion",
    description:
      "Additional camera placements and NVR upgrade for a multi-location retail client.",
    status: "ongoing",
    category: "installations",
    tags: ["CCTV", "NVR", "Hikvision"],
    year: "2025",
  },
  // Installations — Completed
  {
    title: "Home Network & Starlink Setup",
    description:
      "Starlink integration with indoor mesh routing and clean cable management.",
    status: "completed",
    category: "installations",
    tags: ["Starlink", "Mesh", "Ubiquiti"],
    year: "2024",
  },
  {
    title: "Warehouse CCTV & Access Control",
    description:
      "End-to-end CCTV layout, ZKTeco biometric access, and full documentation handover.",
    status: "completed",
    category: "installations",
    tags: ["ZKTeco", "CCTV", "Biometrics"],
    year: "2024",
  },
  {
    title: "GPON Fiber Installation",
    description:
      "Fiber termination, splitter deployment, and ONT configuration for a residential block.",
    status: "completed",
    category: "installations",
    tags: ["GPON", "Fiber", "ONT"],
    year: "2023",
  },
];

const focusAreas = [
  {
    title: "Web Development",
    text: "Interfaces that load fast and stay easy to manage.",
    icon: Globe,
  },
  {
    title: "Network Installations",
    text: "Reliable connectivity with clean routing and coverage.",
    icon: Cable,
  },
  {
    title: "Security Systems",
    text: "CCTV and access control built for real spaces.",
    icon: ShieldCheck,
  },
  {
    title: "Project Coordination",
    text: "Clear scoping and communication that keeps work moving.",
    icon: FolderKanban,
  },
];

// ─── Tab config ───────────────────────────────────────────────────────────────

const STATUS_TABS: {
  value: Status | "all";
  label: string;
  icon: React.ElementType;
}[] = [
  { value: "all", label: "All", icon: FolderKanban },
  { value: "ongoing", label: "Ongoing", icon: Clock3 },
  { value: "completed", label: "Completed", icon: CheckCircle2 },
];

const CATEGORY_TABS: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "web", label: "Web Dev" },
  { value: "installations", label: "Installations" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProjectPage() {
  const [status, setStatus] = useState<Status | "all">("all");
  const [category, setCategory] = useState<Category | "all">("all");

  const filtered = projects.filter((p) => {
    const matchStatus = status === "all" || p.status === status;
    const matchCategory = category === "all" || p.category === category;
    return matchStatus && matchCategory;
  });

  const webCount = filtered.filter((p) => p.category === "web").length;
  const installationCount = filtered.filter(
    (p) => p.category === "installations",
  ).length;

  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 py-8">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-40 bg-[radial-gradient(circle_at_top_left,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_32%),radial-gradient(circle_at_bottom_right,color-mix(in_oklab,var(--accent)_20%,transparent),transparent_28%),linear-gradient(to_right,var(--grid-line)_1px,transparent_2px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_2px)] bg-size-[auto,auto,56px_56px,56px_56px] opacity-90" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 py-8 lg:py-14">
        {/* ── Header ── */}
        <div className="flex flex-col gap-5">
          <Button
            asChild
            variant="outline"
            className="w-fit px-4 py-5 font-mono text-xs tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="size-3.5" /> Back Home
            </Link>
          </Button>

          <div className="max-w-3xl space-y-4">
            <span className="bg-background/85 text-muted-foreground border-border inline-flex rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.24em] uppercase shadow-sm backdrop-blur-sm">
              Projects
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Digital builds and real-world installations.
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base leading-7">
              Websites, network setups, CCTV installs, and support work —
              delivered with the same standard across every discipline.
            </p>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ value, label, note }) => (
            <Card
              key={label}
              className="bg-card/80 border-white/10 backdrop-blur-sm"
            >
              <CardContent className="space-y-1 pt-6 pb-5">
                <p className="text-primary font-mono text-3xl font-bold tracking-tight">
                  {value}
                </p>
                <p className="font-mono text-xs font-semibold tracking-[0.18em] uppercase">
                  {label}
                </p>
                <p className="text-muted-foreground text-xs leading-5">
                  {note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Filters ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Status tabs */}
          <div className="border-border bg-muted/40 flex w-fit items-center gap-1 rounded-full border p-1 backdrop-blur-sm">
            {STATUS_TABS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setStatus(value)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200",
                  status === value
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="size-3" />
                {label}
              </button>
            ))}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORY_TABS.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setCategory(value)}
                className={cn(
                  "border-border rounded-full border px-4 py-1.5 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200",
                  category === value
                    ? "border-primary text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:border-foreground/40",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results summary ── */}
        <div className="flex items-center gap-3">
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </p>
          {category === "all" && filtered.length > 0 && (
            <>
              <span className="text-muted-foreground/40">·</span>
              <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                {webCount} web · {installationCount} installs
              </p>
            </>
          )}
        </div>

        {/* ── Project grid ── */}
        {filtered.length === 0 ? (
          <div className="border-border rounded-2xl border border-dashed py-20 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              No projects match this filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

        {/* ── Bottom row: focus areas + CTA ── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Focus areas */}
          <Card className="bg-card/80 border-white/10 backdrop-blur-sm">
            <CardContent className="grid gap-3 pt-6 sm:grid-cols-2">
              <div className="col-span-full mb-2 space-y-1">
                <p className="text-muted-foreground font-mono text-[10px] tracking-[0.22em] uppercase">
                  What this covers
                </p>
                <h2 className="text-xl font-bold tracking-tight">
                  Four disciplines, one standard of work.
                </h2>
              </div>
              {focusAreas.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="bg-background/60 border-border flex items-start gap-3 rounded-2xl border p-4"
                >
                  <span className="bg-muted mt-0.5 inline-flex shrink-0 rounded-xl p-2">
                    <Icon className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="text-muted-foreground text-xs leading-5">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-white/10 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--primary)_18%,var(--card)_82%),var(--card))] backdrop-blur-sm">
            <CardContent className="flex h-full flex-col justify-between gap-6 pt-6 pb-6">
              <div className="space-y-3">
                <p className="text-muted-foreground font-mono text-[10px] tracking-[0.22em] uppercase">
                  Next Step
                </p>
                <h2 className="text-2xl leading-tight font-bold tracking-tight">
                  Want your project on this list?
                </h2>
                <p className="text-muted-foreground text-sm leading-6">
                  Website, network setup, CCTV, or a technical refresh — start
                  with a conversation and we'll shape the right scope from
                  there.
                </p>
              </div>
              <Button
                asChild
                className="w-full py-6 font-mono text-xs font-bold tracking-widest uppercase"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  Start a Project
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const isOngoing = project.status === "ongoing";

  return (
    <div className="group border-border bg-card/80 hover:border-primary/40 relative flex flex-col gap-4 rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {/* Category icon */}
          <span className="bg-muted border-border inline-flex rounded-xl border p-2">
            {project.category === "web" ? (
              <Globe className="size-3.5" />
            ) : (
              <Wrench className="size-3.5" />
            )}
          </span>
          {/* Status dot */}
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase",
              isOngoing
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground",
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                isOngoing
                  ? "bg-primary animate-pulse"
                  : "bg-muted-foreground/60",
              )}
            />
            {isOngoing ? "Ongoing" : "Done"}
          </span>
        </div>
        <span className="text-muted-foreground font-mono text-[10px]">
          {project.year}
        </span>
      </div>

      {/* Title + description */}
      <div className="flex-1 space-y-1.5">
        <h3 className="leading-snug font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-5">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-background/80 border-border text-muted-foreground rounded-lg border px-2 py-0.5 font-mono text-[10px] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
