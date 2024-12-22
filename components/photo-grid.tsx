'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {photos.map((photo) => (
        <div key={photo.id} className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={photo.src}
            alt={photo.alt}
            className={cn(
              'object-cover transition-all duration-300',
              isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
            )}
            onLoadingComplete={() => setIsLoading(false)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        </div>
      ))}
    </div>
  );
}