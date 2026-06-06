import Link from "next/link";
import { LvlzPostList } from "@lvlz/sdk/react";
import { lvlz } from "@/lib/lvlz";

export const revalidate = 100;

export default async function Home() {
  const posts = lvlz ? (await lvlz.getPosts({ limit: 6 })).posts : [];

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Simple Project</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A Next.js site powered by LVLZ.ai blog posts.
        </p>
        <Link
          href="/blog"
          className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          View Blog
        </Link>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Latest posts</h2>
        {!lvlz ? (
          <p className="text-zinc-600 dark:text-zinc-400">
            Add <code className="font-mono text-sm">LVLZ_KEY</code> to{" "}
            <code className="font-mono text-sm">.env.local</code> to load posts.
          </p>
        ) : posts.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">No posts yet.</p>
        ) : (
          <LvlzPostList posts={posts} />
        )}
      </section>
    </main>
  );
}
