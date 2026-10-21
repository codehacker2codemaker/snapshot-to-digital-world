export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary px-5 py-16 text-center lg:py-24">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="animate-rise mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h1>
      {children && <div className="mx-auto mt-5 max-w-xl text-muted-foreground">{children}</div>}
    </section>
  );
}

export function DraftNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto my-8 max-w-3xl border border-gold/50 bg-champagne/60 px-4 py-3 text-center text-xs tracking-wide text-muted-foreground">
      {children}
    </p>
  );
}
