import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, DraftNote } from "@/components/PageIntro";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sylviquek Studio" },
      { name: "description", content: "How Sylviquek Studio handles your information." },
      { property: "og:title", content: "Privacy Policy — Sylviquek Studio" },
      { property: "og:description", content: "How we handle your information." },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy" />
      <DraftNote>Draft template — must be reviewed by the business and a legal advisor before publishing.</DraftNote>
      <article className="mx-auto max-w-3xl space-y-6 px-5 pb-24 text-muted-foreground">
        <h2 className="text-2xl text-foreground">Information we collect</h2>
        <p>This website does not store form submissions. When you send an enquiry, your details are passed directly into a WhatsApp message that you choose to send.</p>
        <h2 className="text-2xl text-foreground">Wishlist</h2>
        <p>Your wishlist is saved only in your own browser's local storage and is never sent to us.</p>
        <h2 className="text-2xl text-foreground">Third parties</h2>
        <p>Enquiries are handled through WhatsApp and Instagram, which have their own privacy policies.</p>
        <h2 className="text-2xl text-foreground">Contact</h2>
        <p>For any privacy questions, contact us on WhatsApp.</p>
      </article>
    </>
  ),
});
