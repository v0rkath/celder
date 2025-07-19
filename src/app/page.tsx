import { WorkItem } from "@/components/WorkItem";
import { Projects } from "@/utils/work-items";

export default function Home() {
  return (
    <div className="z-[1000] grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <nav className="mt-12 rounded border-1 border-slate-400 bg-[#090909] p-4">
        <ul className="flex gap-x-6">
          <li className="font-[family-name:var(--font-geist-mono)]">
            <a href="#about">abouts</a>
          </li>
          <li className="font-[family-name:var(--font-geist-mono)]">
            <a href="#projects">projects</a>
          </li>
          <li className="font-[family-name:var(--font-geist-mono)]">
            <a href="#background">background</a>
          </li>
          <li className="font-[family-name:var(--font-geist-mono)]"><a href="/Callum_Elder_Resume_2025.pdf">resume</a></li>
        </ul>
      </nav>
      <main className="mt-8 w-[380px] md:w-[460px]">
        <section className="mb-24 mt-8" id="about">
          <h2 className="mb-4 border-b-1 border-gray-500 pb-4 text-3xl flex justify-between items-center">
            About<img className="inline h-14 w-14 aspect-square" src="/me.png" />
          </h2>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm">Hi, my name is Callum.
            I&apos;m a self taught <span className="font-semibold">frontend developer</span>{" "}
            with a passion for problem solving which comes from my background in
            avionics engineering when dealing with complex systems.
          </p>
        </section>
        <section className="mb-24 flex flex-col gap-y-4" id="projects">
          <h2 className="mb-4 border-b-1 border-gray-500 pb-4 text-3xl">
            Projects
          </h2>
          {Projects.map((project) => (
            <WorkItem key={project.name} project={project} />
          ))}
        </section>
        <section id="background">
          <h2 className="mb-4 text-3xl">Background</h2>
          <div className="border-y-1 border-gray-500 py-4">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm text-gray-500">
              ROYAL AIR FORCE
            </p>
            <h3 className="text-2xl">Avionics Engineer</h3>
            <p className="mb-2 font-[family-name:var(--font-geist-mono)] text-xs text-gray-500">
              2020 - Present
            </p>
            <p className="text-sm">
              Specialised in{" "}
              <span className="font-semibold">troubleshooting</span> avionics on
              Eurofighter Typhoons, achieving{" "}
              <span className="font-semibold">100% operational readiness</span>{" "}
              for multiple exercises by{" "}
              <span className="font-semibold">resolving complex issues</span>.
            </p>
            <p className="mt-2 text-sm">
              Achieved <span className="font-semibold">top rankings</span> (98%)
              in specialised airframe training, demonstrating{" "}
              <span className="font-semibold">
                strong technical proficiency
              </span>
              .
            </p>
            <p className="mt-2 text-sm">
              Mentored junior engineers, improving their qualification exam pass
              rates by ~30% through focused training.
            </p>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <p className="text-gray-500">Design & Code by Callum Elder</p>
      </footer>
    </div>
  );
}
