import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { PageIntro } from "@/components/PageIntro";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Sylviquek Studio" },
      { name: "description", content: "Explore Sylviquek Studio collections: diamond rings, silver jewellery, statement necklaces, pendants, earrings and bespoke creations." },
      { property: "og:title", content: "Collections — Sylviquek Studio" },
      { property: "og:description", content: "Six collections, one philosophy: detailing elegance." },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <>
      <PageIntro eyebrow="Collections" title="Six worlds of elegance" />
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-20 lg:px-10">
        {CATEGORIES.map((c, i) => {
          const count = PRODUCTS.filter((p) => p.category === c.slug).length;
          return (
            <div key={c.slug} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img src={c.image} alt={c.name} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover md:aspect-[5/4]" />
              <div className="text-center md:text-left">
                <p className="eyebrow">Collection {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-4xl md:text-5xl">{c.name}</h2>
                <div className="gold-rule mx-auto mt-6 md:mx-0" />
                <p className="mt-6 text-muted-foreground">{count} sample piece{count === 1 ? "" : "s"} · each available to personalise.</p>
                <Link to="/shop" search={{ category: c.slug }} className="btn-outline-luxe mt-8">Explore</Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
