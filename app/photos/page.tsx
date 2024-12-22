import { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { PhotoGrid } from '@/components/photo-grid';

const photos = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    alt: 'Sunset over mountains',
    width: 1600,
    height: 1600,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1682687220063-4742bd7c8f1b',
    alt: 'Ocean waves crashing on rocks',
    width: 1600,
    height: 1600,
  },
];

export const metadata: Metadata = {
  title: 'Photos - Hunter Yeagley',
  description: 'A collection of my photography and visual experiences.',
};

export default function Photos() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <section className="space-y-8">
        <SectionHeader
          title="Photos"
          description="A collection of moments captured through my lens"
        />
        <PhotoGrid photos={photos} />
      </section>
    </div>
  );
}