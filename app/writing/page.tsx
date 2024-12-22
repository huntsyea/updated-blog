import { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { PostPreview } from '@/components/post-preview';

const posts = [
  {
    title: 'Building a Modern Personal Website',
    description: 'How I built my personal website using Next.js, Tailwind CSS, and shadcn/ui.',
    date: '2024-03-21',
    slug: 'building-modern-personal-website',
  },
  {
    title: 'The Future of Product Management',
    description: 'Thoughts on where product management is heading in the next decade.',
    date: '2024-03-15',
    slug: 'future-of-product-management',
  },
];

export const metadata: Metadata = {
  title: 'Writing - Hunter Yeagley',
  description: 'Thoughts on product, leadership, and technology.',
};

export default function Writing() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <section className="space-y-8">
        <SectionHeader
          title="Writing"
          description="Essays on product, leadership, and technology"
        />
        <div className="space-y-8">
          {posts.map((post) => (
            <PostPreview key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}