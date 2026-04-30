import { stats } from "@/data/project";

const ProjectPage = () => {
  return (
    <section className="my-10 min-h-screen space-y-8">
      <div className="space-y-4 px-5">
        <h1 className="text-center text-6xl font-extrabold tracking-tighter uppercase">
          {" "}
          Project <span className="text-foreground/50">Archive</span>
        </h1>
        <p className="text-foreground/80 leading-tight">
          Here are some of my selected work to showcase my skillfulness ,
          presenting a well documented and resource-skilled professional
          determined to handle your next project.
        </p>
      </div>

      <div className="mx-5 grid grid-cols-2 justify-center gap-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-stretch gap-4 rounded-3xl border p-3"
          >
            <Icon strokeWidth={2} className="text-warning" />

            <div className="text-foreground/70 text-center">
              <p className="text-primary text-3xl font-bold">{value}</p>
              <p className="text-xs font-medium tracking-widest">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
