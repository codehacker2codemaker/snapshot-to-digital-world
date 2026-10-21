import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import hero from "@/assets/hero.jpg";
import craft from "@/assets/craft.jpg";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { BespokeForm } from "@/components/BespokeForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sylviquek Studio — Jewellery That Tells Your Story" },
      { name: "description", content: "Discover bespoke silver and diamond jewellery, thoughtfully designed to reflect your individuality." },
      { property: "og:title", content: "Sylviquek Studio — Jewellery That Tells Your Story" },
      { property: "og:description", content: "Bespoke silver and diamond jewellery. Detailing Elegance." },
    ],
  }),
  component: Home,
});

const STEPS = [
  ["01", "Consult", "Share your story, inspiration and budget over WhatsApp."],
  ["02", "Design", "Receive hand sketches and refined renders for approval."],
  ["03", "Craft", "Your piece is shaped, set and polished by hand."],
  ["04", "Reveal", "Delivered in signature packaging, ready to be treasured."],
];

function Home() {
  const best = PRODUCTS.filter((p) => p.bestseller);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden bg-ink">
        <img src={hero} alt="Diamond and silver necklace draped on ivory silk" width={1600} height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent md:bg-gradient-to-r md:from-ink/75 md:via-ink/30" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-20 md:items-center lg:px-10">
          <div className="max-w-xl text-ink-foreground">
            <p className="eyebrow animate-rise">{SITE.tagline}</p>
            <h1 className="animate-rise mt-5 text-5xl leading-[1.02] md:text-7xl">Jewellery That Tells <em>Your</em> Story.</h1>
            <p className="animate-rise mt-6 max-w-md text-base opacity-85 md:text-lg">
              Discover bespoke silver and diamond jewellery, thoughtfully designed to reflect your individuality.
            </p>
            <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/shop" className="btn-luxe border-gold bg-gold text-ink hover:bg-ink-foreground hover:border-ink-foreground">Explore Collection</Link>
              <Link to="/bespoke" className="btn-outline-luxe text-ink-foreground hover:border-ink-foreground hover:bg-ink-foreground hover:text-ink">Design Your Own</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
        <div className="text-center">
          <p className="eyebrow">Shop by Category</p>
          <h2 className="mt-3 text-4xl md:text-5xl">The Collections</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/shop" search={{ category: c.slug }} className="group relative overflow-hidden">
              <img src={c.image} alt={c.name} loading="lazy" width={1024} height={1280}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <span className="absolute bottom-5 left-0 right-0 text-center font-serif text-xl text-ink-foreground md:text-2xl">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
            <div className="text-center md:text-left">
              <p className="eyebrow">Most Loved</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Bestselling Designs</h2>
            </div>
            <Link to="/shop" className="text-[0.7rem] uppercase tracking-[0.25em] underline-offset-8 hover:text-gold hover:underline">View all</Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
            {best.slice(0, 4).map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">Sample prices shown for demonstration only.</p>
        </div>
      </section>

      {/* Bespoke experience */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
        <div className="text-center">
          <p className="eyebrow">The Bespoke Experience</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Your Vision. <em>Our Craftsmanship.</em></h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {STEPS.map(([n, t, d]) => (
            <div key={n} className="border-t border-gold pt-6">
              <p className="font-serif text-3xl text-gold">{n}</p>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center"><Link to="/bespoke" className="btn-luxe">Begin Your Commission</Link></div>
      </section>

      {/* Craftsmanship */}
      <section className="grid bg-ink text-ink-foreground md:grid-cols-2">
        <img src={craft} alt="Artisan hand-setting a diamond into a silver ring" loading="lazy" width={1280} height={1024} className="h-full min-h-[360px] w-full object-cover" />
        <div className="flex flex-col justify-center px-6 py-20 md:px-16">
          <p className="eyebrow">Our Craftsmanship</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Every detail, considered.</h2>
          <p className="mt-6 max-w-md opacity-75">
            From the first pencil line to the final polish, each piece is shaped with patience and precision —
            because elegance lives in the details.
          </p>
          <div className="mt-8"><Link to="/about" className="btn-outline-luxe text-ink-foreground hover:border-gold hover:bg-gold hover:text-ink">Our Story</Link></div>
        </div>
      </section>

      {/* Testimonials — placeholders */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center">
        <p className="eyebrow">Client Words</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Testimonials</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <figure key={i} className="border border-border bg-card p-8">
              <blockquote className="font-serif text-xl italic text-muted-foreground">"Real client testimonial to be added here, with permission."</blockquote>
              <figcaption className="eyebrow mt-6 text-[0.6rem]">Placeholder · Awaiting approval</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-10">
          <p className="eyebrow">Follow the Studio</p>
          <h2 className="mt-3 text-4xl md:text-5xl">@{SITE.instagram}</h2>
          <div className="mt-12 grid grid-cols-3 gap-2 md:grid-cols-6">
            {PRODUCTS.slice(0, 6).map((p) => (
              <a key={p.slug} href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="group relative block overflow-hidden" aria-label={`View ${p.name} on Instagram`}>
                <img src={p.image} alt="" loading="lazy" width={1024} height={1280} className="aspect-square w-full object-cover transition group-hover:scale-105 group-hover:opacity-80" />
              </a>
            ))}
          </div>
          <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline-luxe mt-10"><Instagram className="h-4 w-4" /> Follow on Instagram</a>
        </div>
      </section>

      {/* Enquiry */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">Enquire</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Begin a conversation</h2>
          <p className="mt-4 text-muted-foreground">Tell us what you're dreaming of — we'll reply on WhatsApp.</p>
        </div>
        <div className="mt-12"><BespokeForm /></div>
      </section>
    </>
  );
}
