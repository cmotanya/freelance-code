import { skills_group } from "@/data/skills";
import { cn } from "@/lib/utils";

const SkillsAccordion = () => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-2xl font-semibold">Skills that matter</h4>
        <p className="text-muted-foreground text-sm leading-6">
          See the tools, platforms, and systems I use across various projects.
        </p>
      </div>

      <div>
        {skills_group.map((group) => {
          return (
            <div key={group.index} className="leading-none">
              <div
                className={cn(
                  "border-border bg-muted my-2 cursor-pointer rounded-3xl border p-3 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-sm",
                )}
              >
                <div className="relative">
                  <span className="text-muted-foreground border-border bg-background absolute inset-0 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border text-xs tracking-wide uppercase">
                    {group.index}
                  </span>
                  <h5 className="ml-10 font-bold tracking-tight">
                    {group.category}
                  </h5>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 p-3">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-background border-border text-muted-foreground rounded-md border px-2 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsAccordion;
