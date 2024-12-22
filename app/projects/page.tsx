import { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'Personal Website',
    description: 'My personal website built with Next.js, Tailwind CSS, and shadcn/ui.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/hunteryeagley/website',
  },
  {
    title: 'Project Management Tool',
    description: 'A minimalist project management tool for small teams.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    demo: 'https://demo.project.com',
  },
];

export const metadata: Metadata = {
  title: 'Projects - Hunter Yeagley',
  description: 'A showcase of my personal projects and experiments.',
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <section className="space-y-8">
        <SectionHeader
          title="Projects"
          description="Personal experiments and weekend hacks"
        />
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}