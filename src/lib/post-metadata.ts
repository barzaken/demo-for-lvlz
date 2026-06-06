import type { Metadata } from "next";
import type { PublicPost } from "@lvlz/sdk";
import { getMetadataBase, siteConfig } from "@/lib/site";

function getSiteUrl(): URL {
  return getMetadataBase();
}

function getPostImage(post: PublicPost): string | undefined {
  if (post.coverImage) return post.coverImage;

  const match = post.html.match(/<img[^>]+src=["']([^"']+)["']/i);
  const src = match?.[1];
  if (!src) return undefined;

  try {
    return new URL(src, getSiteUrl()).toString();
  } catch {
    return src.startsWith("http") ? src : undefined;
  }
}

export function buildPostMetadata(post: PublicPost): Metadata {
  const siteUrl = getSiteUrl();
  const image = getPostImage(post);
  const postUrl = new URL(`/blog/${post.slug}`, siteUrl).toString();
  const description = post.description ?? post.excerpt ?? undefined;

  const images = image
    ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ]
    : undefined;

  return {
    title: post.title,
    description,
    keywords: post.keywords,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: postUrl,
      siteName: siteConfig.name,
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
