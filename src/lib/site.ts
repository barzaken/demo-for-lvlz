export const siteConfig = {
  name: "LVLZ",
  title: "LVLZ SDK Demo",
  description:
    "A live demo of @lvlz/sdk — publish SEO-optimized blog posts from lvlz.ai on your own domain with server-side rendering.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  keywords: [
    "LVLZ",
    "lvlz.ai",
    "SEO",
    "GEO",
    "blog SDK",
    "Next.js",
    "headless CMS",
    "@lvlz/sdk",
  ],
  links: {
    home: "https://lvlz.ai",
    npm: "https://www.npmjs.com/package/@lvlz/sdk",
  },
};

export function getMetadataBase(): URL {
  return new URL(siteConfig.url);
}
