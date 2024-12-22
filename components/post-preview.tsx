import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface PostPreviewProps {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export function PostPreview({ title, description, date, slug }: PostPreviewProps) {
  return (
    <article className="group relative space-y-2">
      <Link href={`/writing/${slug}`}>
        <h3 className="font-medium transition-colors group-hover:text-foreground/80">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
        <p className="text-sm text-muted-foreground">{formatDate(date)}</p>
      </Link>
    </article>
  );
}