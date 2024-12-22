import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hunter Yeagley - Product Leader & Advisor',
  description: 'Personal site of Hunter Yeagley - Product Leader, Advisor, and Builder.',
};

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-medium tracking-tight">Hunter Yeagley</h1>
          <p className="text-lg text-muted-foreground">Product Leader & Advisor</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium">Mission Statement</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            To serve as a leader of craft and community. To exponentially grow ideas and
            people around me.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium">About Me</h2>
          <div className="space-y-4 leading-7">
            <p>
              Currently, I'm <span className="text-muted-foreground">building</span> a new
              advice platform at Ramsey Solutions, where I have spent the last four years
              focused on marketplace products.
            </p>
            <p>
              Every quarter, I devote time to{' '}
              <span className="text-muted-foreground">coaching</span> solo-founders through
              validation and PMF. The emphasis is on validating real user needs, identifying
              the best approach, and finding a viable business model as early as possible.
            </p>
            <p>
              I am <span className="text-muted-foreground">hacking</span> on a slew of
              personal projects. The majority of these are weekend projects to explore the
              topics I am learning.
            </p>
            <p>
              As far as <span className="text-muted-foreground">learning</span>, I am
              currently focused on natural language processing and computer vision. I am
              working through a learning pathway I compiled from Stanford and other
              resources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}