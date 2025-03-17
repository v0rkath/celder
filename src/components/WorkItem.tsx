import { FiExternalLink, FiGithub } from "react-icons/fi";

import { Project } from "@/utils/work-items";

type Props = {
  project: Project;
};

export function WorkItem({ project }: Props) {
  return (
    <div className="z-[100] rounded-lg border-1 border-slate-400 bg-[#090909] p-4 hover:bg-gray-950">
      <div className="flex justify-between">
        <h3 className="mb-2 text-2xl md:text-3xl">{project.name}</h3>
        <div className="flex gap-x-3">
          <a href={project.github_link} target="_blank">
            <FiGithub size={24} />
          </a>
          <a href={project.deployed_link} target="_blank">
            <FiExternalLink size={24} />
          </a>
        </div>
      </div>
      <p className="font-[family-name:var(--font-geist-mono)] text-sm">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-4 font-[family-name:var(--font-geist-mono)] text-xs text-slate-400">
        {project.tech.map((item) => (
          <p key={item + project.name}>{item}</p>
        ))}
      </div>
    </div>
  );
}
