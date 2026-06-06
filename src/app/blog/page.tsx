import type { Metadata } from "next";
import { LvlzPostList } from "@lvlz/sdk/react";
import { lvlz } from "@/lib/lvlz";
import { siteConfig } from "@/lib/site";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Live blog posts rendered from LVLZ.ai via @lvlz/sdk.",
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: "Live blog posts rendered from LVLZ.ai via @lvlz/sdk.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default async function Blog() {
  if (!lvlz) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-muted">
          Add <code className="font-mono text-sm">LVLZ_KEY</code> to{" "}
          <code className="font-mono text-sm">.env.local</code> to load posts.
        </p>
      </main>
    );
  }

  const { posts } = await lvlz.getPosts();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-muted">Posts published from LVLZ.ai via @lvlz/sdk</p>
      </div>
      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <LvlzPostList posts={posts} />
      )}
    </main>
  );
}
