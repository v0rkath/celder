export type Project = {
  name: string;
  description: string;
  tech: string[];
  github_link: string;
  deployed_link: string;
};

export const Projects: Project[] = [
  {
    name: "FlyMil",
    description: "A live tracking tool for government and military aircraft.",
    tech: ["React", "Typescript", "Leaflet.js", "TailwindCSS", "Shadcn"],
    github_link: "https://github.com/v0rkath/FlyMil",
    deployed_link: "/",
  },
  {
    name: "ClearScore Idea Board",
    description: "ClearScore's frontend developer take-home assessment.",
    tech: ["React", "Typescript", "Vitest", "TailwindCSS", "Shadcn"],
    github_link: "https://github.com/v0rkath/clearscore-idea-board",
    deployed_link: "https://clearscore-idea-board.vercel.app/",
  },
  {
    name: "Flipdish Menu",
    description: "A frontend assessment provided by Flipdish.",
    tech: ["React", "Typescript", "Vitest", "MSW", "TailwindCSS"],
    github_link: "https://github.com/v0rkath/Flipdish-Assessment",
    deployed_link: "https://flipdish-assessment.vercel.app/",
  },
];
