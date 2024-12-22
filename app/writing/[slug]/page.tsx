import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';

// This would typically come from a CMS or database
const posts = [
  {
    title: 'Building a Modern Personal Website',
    description: 'How I built my personal website using Next.js, Tailwind CSS, and shadcn/ui.',
    date: '2024-03-21',
    slug: 'building-modern-personal-website',
    content: `
      Building a modern personal website requires careful consideration of design, performance, and user experience. 
      In this post, I'll share how I built this website using Next.js, Tailwind CSS, and shadcn/ui.
      
      More content coming soon...
    `,
  },
  {
    title: 'The Future of Product Management',
    description: 'Thoughts on where product management is heading in the next decade.',
    date: '2024-03-15',
    slug: 'future-of-product-management',
    content: `
      Product management is evolving rapidly with the advent of AI, changing user expectations, 
      and new ways of building products. Here's my perspective on where the field is heading.
      
      More content coming soon...
    `,
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: \`\${post.title} - Hunter Yeagley\`,
    description: post.description,
  };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <article className="prose prose-neutral dark:prose-invert">
        <header className="mb-8 space-y-4 not-prose">
          <h1 className="text-3xl font-medium tracking-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
          <time className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
        </header>
        <div className="whitespace-pre-line">{post.content}</div>
      </article>
    </div>
  );
}