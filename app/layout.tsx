import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hunter Yeagley - Product Leader & Advisor',
  description: 'Personal site of Hunter Yeagley - Product Leader, Advisor, and Builder.',
  metadataBase: new URL('https://hunteryeagley.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hunteryeagley.com',
    title: 'Hunter Yeagley - Product Leader & Advisor',
    description: 'Personal site of Hunter Yeagley - Product Leader, Advisor, and Builder.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hunter Yeagley - Product Leader & Advisor',
    description: 'Personal site of Hunter Yeagley - Product Leader, Advisor, and Builder.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        'min-h-screen bg-background antialiased'
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}