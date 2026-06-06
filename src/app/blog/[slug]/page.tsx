import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LvlzArticle } from "@lvlz/sdk/react";
import { lvlz } from "@/lib/lvlz";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!lvlz) return {};

  const post = await lvlz.getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description ?? post.excerpt ?? undefined,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: "article",
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
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
