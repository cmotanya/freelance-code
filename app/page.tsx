import Link from "next/link";
import Image from "next/image";
import {
  featuredProjects,
  process,
  stack,
  stats,
  testimonials,
} from "@/data/hero";
import {
  ArrowRight02Icon,
  BubbleChatSpark01Icon,
  Happy01Icon,
  Link04Icon,
  Note03Icon,
  QuoteUpIcon,
  ServerStack01Icon,
  StartUp01Icon,
  ToolsIcon,
} from "hugeicons-react";
import { nova } from "@/data/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="bg-card my-5 min-h-screen overflow-hidden">
      <div className="bg-card w-full space-y-3 ps-3 pt-12">
        <div className="text-foreground/50 ms-5 inline-flex items-center gap-2 font-semibold tracking-widest">
          Hi there <Happy01Icon strokeWidth={2} />
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-6xl leading-[0.9] font-extrabold tracking-tighter">
            <span>Cornelius</span>
            <br />
            <span className={cn("text-foreground/60", nova.className)}>
              Motanya
            </span>
          </h1>

          <div className="size-40 shrink-0 overflow-hidden rounded-full p-1">
            <Image
              src="/hero/avatar.webp"
              alt="Cornelius"
              width={110}
              height={110}
              className="block aspect-square size-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-warning text-sm font-semibold tracking-widest">
            Taking you from zero to hero
          </p>
          <p className="text-base leading-relaxed">
            Delivering practical tailored solutions for uncomfortable users
            through the <strong>web</strong>,{" "}
            <strong>network installations</strong> and{" "}
            <strong>security setups</strong>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="my-10 flex flex-col gap-3 px-10 font-semibold">
          <Link href="/project">
            <button className="bg-foreground text-background w-full rounded-2xl py-4.5 text-xs tracking-widest uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-105">
              Explore Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="w-full rounded-2xl border py-4 text-xs tracking-widest uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-105">
              Initiate Contact
            </button>
          </Link>
        </div>
      </div>

      {/* Stat strip */}
      <div className="mx-2 my-15 grid grid-cols-3 gap-2">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="bg-muted pt- relative flex flex-col items-center gap-1 overflow-hidden rounded-2xl border px-4 py-2 pt-8 text-center"
          >
            <span className="text-warning bg-warning/10 border-warning/30 absolute -top-0.5 -right-0.5 rounded-full border p-1">
              <Icon size={20} strokeWidth={2} />
            </span>
            <span className="text-primary text-3xl font-extrabold">
              {value}
            </span>
            <span className="text-foreground/60 text-[10px] leading-tight font-bold tracking-wide uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Recent deployments */}
      <div className="mx-5 my-15 space-y-2">
        <h2 className="text-foreground/70 flex items-center gap-3 text-base font-bold tracking-widest uppercase">
          <StartUp01Icon size={25} color="#4a4a4a" strokeWidth={2} />
          Recent Deployments
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {featuredProjects.map((t) => (
            <div
              key={t.name}
              className="bg-warning/5 relative space-y-3 rounded-3xl border p-5 transition-all duration-300 ease-in-out hover:shadow-xl active:scale-102"
            >
              <div>
                <h3 className="text-primary text-lg font-bold">{t.name}</h3>
                <p>{t.type}</p>
              </div>

              <p className="text-foreground/60 text-[10px] font-medium">
                {t.desc}
              </p>

              <Link04Icon className="absolute top-1.5 right-1.5" />

              <div className="flex flex-wrap gap-1 overflow-hidden">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-warning/15 text-warning border-warning rounded-md border px-1.5 text-[10px] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Details */}
      <div className="mx-5 my-15 space-y-3">
        <h2 className="text-foreground/70 flex items-center gap-3 text-base font-bold tracking-widest uppercase">
          <ServerStack01Icon size={25} color="#4a4a4a" strokeWidth={2} />
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 gap-2">
          {stack.map(({ category, tools, icon: Icon }) => (
            <div
              key={category}
              className="flex flex-col space-y-2 rounded-3xl border p-5"
            >
              <div className="text-primary flex items-center gap-2">
                <Icon stroke="2" strokeWidth={2} />
                <h3 className="font-bold uppercase">{category}</h3>
              </div>

              <p className="text-foreground/70 text-xs font-medium">{tools}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Workflow */}
      <div className="mx-5 my-15 space-y-2">
        <h2 className="text-foreground/70 flex items-center gap-1.5 text-base font-bold tracking-widest uppercase">
          <Note03Icon size={25} color="#4a4a4a" strokeWidth={2} /> Workflow
        </h2>

        <div>
          {process.map((p, i) => (
            <div key={p.step} className="relative flex gap-5">
              {i < process.length - 1 && (
                <div
                  className="absolute -bottom-6 left-[1.1rem] h-full w-0.5"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--border), transparent)",
                  }}
                />
              )}

              <span className="bg-muted text-primary z-50 flex size-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
                {p.step}
              </span>

              <div className="mt-1.5 mb-5">
                <p className="font-bold">{p.title}</p>
                <p className="text-foreground/60 text-xs leading-tight font-medium">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-5 my-15 space-y-4">
        <h2 className="text-foreground/70 flex items-center gap-1.5 text-base font-bold tracking-widest uppercase">
          <BubbleChatSpark01Icon size={25} color="#4a4a4a" strokeWidth={2} />{" "}
          Feedback
        </h2>

        <div className="mx-6 space-y-5">
          {testimonials.map((t, i) => (
            <div key={i} className="relative">
              <QuoteUpIcon
                color="#bfbfbf"
                size={35}
                strokeWidth={3}
                className="absolute -left-8"
              />
              <p className="text-foreground/50 ms-4 text-xs font-medium">
                {t.quote}
              </p>

              <div className="pt-2">
                <p className="font-bold tracking-widest uppercase">
                  {t.author}
                </p>
                <p className="text-primary font-semibold">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mx-5 my-15 space-y-2">
        <h2 className="text-foreground/70 flex items-center gap-1.5 text-base font-bold tracking-widest uppercase">
          <ToolsIcon size={25} color="#4a4a4a" strokeWidth={2} /> Ready to build
        </h2>

        <p>
          Available for local contract projects in Mombasa and across remotely.
        </p>

        <Link href="/contact" className="inline-block">
          <button className="bg-foreground text-background group flex items-center gap-2 rounded-2xl px-5 py-3.5 tracking-widest uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-100">
            Start A Conversation
            <ArrowRight02Icon className="transition-transform group-active:translate-x-1" />
          </button>
        </Link>
      </div>
    </section>
  );
}
