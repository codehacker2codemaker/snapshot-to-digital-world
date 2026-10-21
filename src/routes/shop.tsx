import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { CATEGORIES, PRODUCTS, searchProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { PageIntro } from "@/components/PageIntro";

const searchSchema = z.object({ category: z.string().optional(), q: z.string().optional() });

export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Shop All Jewellery — Sylviquek Studio" },
      { name: "description", content: "Browse diamond rings, silver jewellery, necklaces, pendants and earrings by Sylviquek Studio." },
      { property: "og:title", content: "Shop All Jewellery — Sylviquek Studio" },
      { property: "og:description", content: "Silver and diamond jewellery, crafted to be treasured." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const results = searchProducts(PRODUCTS, q, category);
  const chip = (active: boolean) =>
    `whitespace-nowrap border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition ${active ? "border-ink bg-ink text-ink-foreground" : "border-border hover:border-gold"}`;

  return (
    <>
      <PageIntro eyebrow="Shop All" title="The Jewellery Edit">Sample prices for demonstration — every piece can be personalised.</PageIntro>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2" role="group" aria-label="Filter by category">
            <Link to="/shop" search={{ q }} className={chip(!category)}>All</Link>
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to="/shop" search={{ category: c.slug, q }} className={chip(category === c.slug)}>{c.name}</Link>
            ))}
          </div>
          <div className="md:w-64">
            <label htmlFor="shop-q" className="sr-only">Search</label>
            <input id="shop-q" className="field-luxe" placeholder="Search…" defaultValue={q ?? ""}
              onChange={(e) => navigate({ search: (s) => ({ ...s, q: e.target.value || undefined }), replace: true })} />
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{results.length} piece{results.length === 1 ? "" : "s"}</p>
        {results.length ? (
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
            {results.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl">No pieces match your search.</p>
            <Link to="/bespoke" className="btn-luxe mt-8">Commission it instead</Link>
          </div>
        )}
      </section>
    </>
  );
}
