import { type SanityDocument } from "next-sanity";
import Link from "next/link";

import { WorkItem } from "@/components/WorkItem";
import { client } from "@/sanity/client";
import { Projects } from "@/utils/work-items";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <div className="z-[1000] grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <nav className="mt-12 rounded border-1 border-slate-400 bg-[#090909] p-4">
        <ul className="flex gap-x-6">
          <li className="font-[family-name:var(--font-geist-mono)]">
            <a href="#about">about</a>
          </li>
          <li className="font-[family-name:var(--font-geist-mono)]">
            <a href="#projects">projects</a>
          </li>
          <li className="font-[family-name:var(--font-geist-mono)]">
            <a href="#background">background</a>
          </li>
          <li className="font-[family-name:var(--font-geist-mono)]">
            <a href="/Callum_Elder_Resume_2025.pdf">resume</a>
          </li>
        </ul>
      </nav>
      <main className="mt-8 w-[380px] md:w-[460px]">
        <section className="mt-8 mb-24" id="about">
          <h2 className="mb-4 flex items-center justify-between border-b-1 border-gray-500 pb-4 text-3xl">
            About
            <img className="inline aspect-square h-14 w-14" src="/me.png" />
          </h2>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm">
            Hi, my name is Callum. I&apos;m a Customer Support Engineer for
            Vercel! I used to work as an avionics engineer on fast jets.
          </p>
        </section>
        <section className="mb-24 flex flex-col gap-y-4" id="projects">
          <h2 className="mb-4 border-b-1 border-gray-500 pb-4 text-3xl">
            Recent Posts
          </h2>
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
          {Projects.map((project) => (
            <WorkItem key={project.name} project={project} />
          ))}
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <p className="text-xs text-gray-500">Design & Code by Callum Elder</p>
      </footer>
    </div>
  );
}
