import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({ title, description, tags, github, demo }: ProjectCardProps) {
  return (
    <div className="group relative space-y-4 rounded-lg border p-6 transition-all hover:border-foreground/20">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {github && (
          <Link
            href={github}
            className="text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        )}
        {demo && (
          <Link
            href={demo}
            className="text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
}