import Link from "next/link";
import { stats } from "@/data/project";
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";
import { nova } from "@/data/fonts";
import ProjectTabs from "@/components/project-tabs";

const ProjectPage = () => {
  return (
    <section className="my-10 min-h-screen space-y-8">
      <div className="space-y-4 px-5">
        <h1 className="text-6xl font-extrabold tracking-tighter uppercase">
          {" "}
          Project{" "}
          <span className={cn("text-foreground/50", nova.className)}>
            Archive
          </span>
        </h1>
        <p className="leading-tight">
          Some of the selected work to showcase my professionalism. Plan ahead,
          sit back and let me handle your next project.
        </p>
      </div>

      <div className="mx-5 grid grid-cols-2 justify-center gap-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-stretch gap-2 rounded-3xl border p-3"
          >
            <Icon strokeWidth={2} className="text-warning" />

            <div className="text-foreground/70 text-center">
              <p className="text-primary text-3xl font-bold">{value}</p>
              <p className="text-foreground/60 text-[10px] font-bold tracking-wide uppercase">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5">
        <Link href="/contact">
          <button className="bg-foreground text-background group flex items-center gap-2 rounded-2xl px-5 py-3.5 font-medium tracking-widest uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-100">
            Start A Project{" "}
            <ArrowRight02Icon className="transition-transform group-active:translate-x-1" />
          </button>
        </Link>
      </div>

      <ProjectTabs />

      <div className="flex items-center justify-center">
        <Link href="/">
          <button className="bg-foreground group text-background flex items-center gap-2 rounded-2xl px-5 py-3.5 font-medium tracking-widest uppercase shadow-xl transition-all duration-200 ease-in-out hover:scale-95 active:scale-100">
            <ArrowLeft02Icon className="transition-all group-active:-translate-x-1" />{" "}
            Return to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectPage;
