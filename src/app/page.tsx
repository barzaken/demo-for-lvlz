import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const revalidate = 600;

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const features = [
  {
    title: "SEO / GEO",
    description:
      "Posts render as server HTML with BlogPosting JSON-LD — visible to Google and AI crawlers.",
  },
  {
    title: "SSR + ISR",
    description:
      "Posts are fetched at build time and revalidated every 10 minutes. Fast, fresh, cacheable.",
  },
  {
    title: "Rich posts",
    description:
      "Real slugs, cover images, and inline images from the LVLZ editor — rendered via LvlzArticle.",
  },
];

export default function Home() {
  return (
    <main>
      <section>
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 sm:py-28">
          <p className="text-sm font-medium text-accent">@lvlz/sdk demo</p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Publish SEO blog posts on your domain
          </h1>
          <p className="max-w-xl text-lg text-muted">
            This site is a live demo of the LVLZ Website SDK. Posts are
            generated in lvlz.ai and rendered here with server-side React
            components.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View Blog
            </Link>
            <a
              href="https://lvlz.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-medium shadow-sm transition-colors hover:bg-surface"
            >
              Go to lvlz.ai
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight">
            Why server-render?
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-background p-6 shadow-sm"
              >
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to publish?
          </h2>
          <p className="max-w-lg text-muted">
            Create SEO-optimized content in LVLZ, connect your site with a
            publishable API key, and ship posts to your domain in minutes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://lvlz.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get started on lvlz.ai
            </a>
            <Link
              href="/blog"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              See live blog output →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
