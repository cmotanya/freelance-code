"use client";

import { Button } from "@/components/ui/button";
import { Category, Project_Categories } from "@/data/project";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ProjectPage = () => {
  const [category, setCategory] = useState<Category | "all">("all");

  return (
    <section className="mt-10 min-h-screen space-y-6">
      <div className="space-y-5 px-5">
        <h1 className="mt-8 text-3xl font-bold">Projects</h1>
        <p>Here are some of my recent projects that I&apos;ve worked on:</p>
      </div>

      <div className="flex justify-center gap-4">
        {Project_Categories.map(({ value, label }) => (
          <Button
            type="button"
            key={value}
            onClick={() => setCategory(value)}
            aria-pressed={category === value}
            className={cn(
              "px-3 py-1",
              category === value ? "text-background" : "",
            )}
          >
            {label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
