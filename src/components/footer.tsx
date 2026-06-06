import Link from "next/link";
import { LvlzLogo } from "@/components/lvlz-logo";

const links = [
  { href: "/blog", label: "Blog", external: false },
  { href: "https://lvlz.ai", label: "lvlz.ai", external: true },
  {
    href: "https://www.npmjs.com/package/@lvlz/sdk",
    label: "@lvlz/sdk",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <LvlzLogo href="/" />

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <p className="text-sm text-muted">© {new Date().getFullYear()} LVLZ</p>
      </div>
    </footer>
  );
}
