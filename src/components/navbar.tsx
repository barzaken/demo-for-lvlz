import Link from "next/link";
import { LvlzLogo } from "@/components/lvlz-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <LvlzLogo />

        <nav className="flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
