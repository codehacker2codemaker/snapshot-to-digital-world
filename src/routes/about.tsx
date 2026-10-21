import { createFileRoute, Link } from "@tanstack/react-router";
import band from "@/assets/band.jpg";
import { PageIntro, DraftNote } from "@/components/PageIntro";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sylviquek Studio" },
      { name: "description", content: "The story and philosophy behind Sylviquek Studio's bespoke silver and diamond jewellery." },
      { property: "og:title", content: "About Sylviquek Studio" },
      { property: "og:description", content: "Detailing Elegance — the philosophy behind our jewellery." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro eyebrow="About Us" title="Detailing Elegance" />
      <DraftNote>Draft brand story — placeholder copy for the owner to review and replace.</DraftNote>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 md:grid-cols-2">
        <img src={band} alt="Stacked silver and diamond rings on silk" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        <div className="space-y-6 text-muted-foreground">
          <h2 className="text-4xl text-foreground">Jewellery, personally.</h2>
          <p>Sylviquek Studio creates bespoke silver and diamond jewellery for people who want something that feels unmistakably theirs.</p>
          <p>We believe true luxury is in the details — the curve of a band, the angle of a claw, the way a stone catches evening light. Each design begins with a conversation and ends with a piece meant to be worn for a lifetime.</p>
          <p>Whether you choose from our collections or commission something entirely new, our promise is the same: thoughtful design, careful making and a personal experience from first message to final reveal.</p>
          <Link to="/bespoke" className="btn-luxe">Start a Commission</Link>
        </div>
      </section>
    </>
  );
}
