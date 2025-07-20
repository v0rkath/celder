import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto flex min-h-screen max-w-3xl flex-col p-8 font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className="mb-12 hover:underline">
        ← Back to posts
      </Link>
      <div className="mx-auto">
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            className="mx-auto aspect-video rounded-xl"
            width="550"
            height="310"
          />
        )}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold">{post.title}</h1>
          <p className="text-xs text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>

        <div className="prose">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </div>
    </main>
  );
}
