import Link from "next/link";
import { LvlzPostList } from "@lvlz/sdk/react";
import { lvlz } from "@/lib/lvlz";

export const revalidate = 600;

export default async function Blog() {
  if (!lvlz) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
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
        <Link
          href="/"
          className="w-fit text-sm text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400"
        >
          ← Home
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Posts published from LVLZ.ai
        </p>
      </div>
      {posts.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">No posts yet.</p>
      ) : (
        <LvlzPostList posts={posts} />
      )}
    </main>
  );
}
