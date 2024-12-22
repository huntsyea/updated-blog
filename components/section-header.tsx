interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-medium tracking-tight">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}