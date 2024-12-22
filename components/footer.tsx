import { Github, Rss, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { href: '/rss.xml', icon: Rss, label: 'RSS' },
  { href: 'https://github.com/hunteryeagley', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com/hunteryeagley', icon: Twitter, label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="py-6 md:py-0">
      <div className="container mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 px-6 md:h-14 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hunter Yeagley
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}