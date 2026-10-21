import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, DraftNote } from "@/components/PageIntro";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sylviquek Studio" },
      { name: "description", content: "Terms of use for the Sylviquek Studio website." },
      { property: "og:title", content: "Terms & Conditions — Sylviquek Studio" },
      { property: "og:description", content: "Terms of use for this website." },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Legal" title="Terms & Conditions" />
      <DraftNote>Draft template — must be reviewed by the business and a legal advisor before publishing.</DraftNote>
      <article className="mx-auto max-w-3xl space-y-6 px-5 pb-24 text-muted-foreground">
        <h2 className="text-2xl text-foreground">Demonstration website</h2>
        <p>This is a demonstration site. Products, prices, specifications and images are illustrative and do not constitute an offer for sale.</p>
        <h2 className="text-2xl text-foreground">Orders & payment</h2>
        <p>No online checkout, payment or order processing takes place on this site. Any purchase is agreed personally with the studio.</p>
        <h2 className="text-2xl text-foreground">Bespoke commissions</h2>
        <p>Design, pricing, timelines and terms for bespoke work are confirmed individually before work begins.</p>
        <h2 className="text-2xl text-foreground">Intellectual property</h2>
        <p>Designs and content on this site belong to the studio and may not be reproduced without permission.</p>
      </article>
    </>
  ),
});
