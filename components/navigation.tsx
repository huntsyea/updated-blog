'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const links = [
  { href: '/', label: 'home' },
  { href: '/photos', label: 'photos' },
  { href: '/writing', label: 'writing' },
  { href: '/projects', label: 'projects' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50 w-full">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6">
        <div className="flex w-full items-center gap-2 rounded-[16px] border bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'relative rounded-[12px] px-4 py-2 text-sm font-medium transition-colors',
                pathname === href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground/60 hover:bg-muted hover:text-foreground'
              )}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}