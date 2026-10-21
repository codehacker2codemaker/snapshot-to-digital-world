import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { BespokeForm } from "@/components/BespokeForm";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Sylviquek Studio" },
      { name: "description", content: "Reach Sylviquek Studio on WhatsApp +91 93154 83321 or Instagram @sylviquekstudio." },
      { property: "og:title", content: "Contact Sylviquek Studio" },
      { property: "og:description", content: "Enquire on WhatsApp or Instagram." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact Us" title="We'd love to hear from you" />
      <section className="mx-auto grid max-w-5xl gap-6 px-5 py-16 md:grid-cols-2">
        <a href={waLink(`Hello ${SITE.name}!`)} target="_blank" rel="noreferrer" className="group border border-border bg-card p-10 text-center transition hover:border-gold">
          <MessageCircle className="mx-auto h-8 w-8 text-gold" strokeWidth={1.2} />
          <p className="eyebrow mt-6">WhatsApp</p>
          <p className="mt-2 font-serif text-3xl">{SITE.whatsappDisplay}</p>
        </a>
        <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="group border border-border bg-card p-10 text-center transition hover:border-gold">
          <Instagram className="mx-auto h-8 w-8 text-gold" strokeWidth={1.2} />
          <p className="eyebrow mt-6">Instagram</p>
          <p className="mt-2 font-serif text-3xl">@{SITE.instagram}</p>
        </a>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <h2 className="text-center text-4xl">Send an enquiry</h2>
        <div className="mt-10"><BespokeForm /></div>
      </section>
    </>
  );
}
