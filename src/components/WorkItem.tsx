import { Project } from "@/utils/work-items";

type Props = {
  project: Project;
};

export function WorkItem({project}: Props) {
  return (
    <div className="rounded-lg border-1 border-slate-400 p-4">
      <h3 className="mb-2 text-3xl">{project.name}</h3>
      <p className="font-[family-name:var(--font-geist-mono)] text-sm">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-4 font-[family-name:var(--font-geist-mono)] text-xs text-slate-400">
        {project.tech.map((item) => <p>{item}</p>)}
      </div>
    </div>
  );
}
