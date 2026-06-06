import { notFound } from "next/navigation";
import { LvlzArticle } from "@lvlz/sdk/react";
import { lvlz } from "@/lib/lvlz";
import { buildPostMetadata } from "@/lib/post-metadata";

export const revalidate = 600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  if (!lvlz) return [];

  try {
    const { posts } = await lvlz.getPosts({ limit: 100 });
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (!lvlz) return {};

  const post = await lvlz.getPost(slug);
  if (!post) return {};

  return buildPostMetadata(post);
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!lvlz) notFound();

  const post = await lvlz.getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <LvlzArticle post={post} />
    </main>
  );
}
