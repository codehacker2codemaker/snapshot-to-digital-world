import { createFileRoute } from "@tanstack/react-router";
import craft from "@/assets/craft.jpg";
import { PageIntro } from "@/components/PageIntro";
import { BespokeForm } from "@/components/BespokeForm";

export const Route = createFileRoute("/bespoke")({
  head: () => ({
    meta: [
      { title: "Bespoke Jewellery — Sylviquek Studio" },
      { name: "description", content: "Commission a one-of-one silver and diamond piece. Share your vision and we'll craft it." },
      { property: "og:title", content: "Bespoke Jewellery — Your Vision. Our Craftsmanship." },
      { property: "og:description", content: "Design your own jewellery with Sylviquek Studio." },
    ],
  }),
  component: Bespoke,
});

function Bespoke() {
  return (
    <>
      <PageIntro eyebrow="Bespoke Jewellery" title="Your Vision. Our Craftsmanship.">
        A piece made for one person, one moment, one story — yours.
      </PageIntro>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 lg:px-10">
        <img src={craft} alt="Jeweller setting a diamond by hand beside design sketches" loading="lazy" width={1280} height={1024} className="w-full object-cover" />
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl">How it works</h2>
          <ol className="mt-8 space-y-6">
            {[
              ["Share your idea", "Tell us the occasion, inspiration and budget using the form below."],
              ["Design consultation", "We discuss details on WhatsApp and propose sketches."],
              ["Approve & craft", "Once you approve the design and quote, crafting begins."],
              ["Receive", "Your finished piece is delivered with care."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span className="font-serif text-3xl text-gold">{i + 1}</span>
                <div><h3 className="text-2xl">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-muted-foreground">Timelines and pricing are confirmed individually (process shown is draft content for approval).</p>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow text-center">Bespoke Enquiry</p>
          <h2 className="mt-3 text-center text-4xl md:text-5xl">Tell us your story</h2>
          <div className="mt-12"><BespokeForm /></div>
        </div>
      </section>
    </>
  );
}
