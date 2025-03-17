import Image from "next/image";

import { WorkItem } from "@/components/WorkItem";
import { Projects } from "@/utils/work-items";

export default function Home() {
  return (
    <div className="z-[1000] grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <nav className="rounded border-1 border-slate-800 p-4">
        <ul className="flex gap-x-8">
          <li className="font-[family-name:var(--font-geist-mono)]">about</li>
          <li className="font-[family-name:var(--font-geist-mono)]">projects</li>
          <li className="font-[family-name:var(--font-geist-mono)]">
            background
          </li>
        </ul>
      </nav>
      <main className="md:w-[460px]">
        <section className="mb-24">
          <h2 className="mb-4 text-3xl">About</h2>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm">
            I'm a <span className="font-semibold">frontend developer</span> with
            a passion for problem solving which comes from my background in
            avionics engineering.
          </p>
        </section>
        <section className="flex flex-col gap-y-4">
          <h2 className="mb-4 text-3xl">Projects</h2>
          {Projects.map((project) => (
            <WorkItem key={project.name} project={project} />
          ))}
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
