import { WorkItem } from "@/components/WorkItem";
import { Projects } from "@/utils/work-items";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <nav className="rounded border-1 border-slate-800 p-4">
        <ul className="flex gap-x-4">
          <li className="font-[family-name:var(--font-geist-mono)]">about</li>
          <li className="font-[family-name:var(--font-geist-mono)]">work</li>
          <li className="font-[family-name:var(--font-geist-mono)]">background</li>
        </ul>
      </nav>
      <main className="w-[460px]">
        <div className="mb-12">
          <h2 className="text-3xl">about</h2>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm">
            I'm a <span className="font-semibold">frontend developer</span> with a previous background in avionics
            engineering. I've always had a strong passion for problem-solving.
          </p>
        </div>
        <section className="flex flex-col gap-y-4">
            <h2 className="text-3xl mb-4">work</h2>
            {Projects.map((project) => <WorkItem key={project.name} project={project} />)} 
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
