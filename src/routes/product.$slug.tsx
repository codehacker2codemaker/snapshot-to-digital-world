import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { categoryName, getProduct, PRODUCTS } from "@/lib/products";
import { formatINR, SITE, waLink } from "@/lib/site";
import { useWishlist } from "@/lib/wishlist";
import { ProductCard } from "@/components/ProductCard";
import { BespokeForm } from "@/components/BespokeForm";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Sylviquek Studio` : "Piece not found — Sylviquek Studio";
    return {
      meta: [
        { title },
        { name: "description", content: p?.description ?? "Sylviquek Studio jewellery" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.description ?? "" },
        { property: "og:type", content: "product" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-4xl">This piece isn't available</h1>
      <Link to="/shop" className="btn-luxe mt-8">Back to shop</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [size, setSize] = useState<string>("");
  const [custom, setCustom] = useState<string[]>([]);
  const { has, toggle } = useWishlist();
  const related = PRODUCTS.filter((x) => x.slug !== p.slug && (x.category === p.category || x.bestseller)).slice(0, 4);
  const isBespoke = p.category === "bespoke-creations";

  const message = [
    `Hello ${SITE.name}, I'm interested in the ${p.name} (${formatINR(p.price)}).`,
    size && `Size: ${size}`,
    custom.length && `Customisation: ${custom.join(", ")}`,
    `Could you share availability and details?`,
  ].filter(Boolean).join("\n");

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-8 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
        <Link to="/shop" className="hover:text-gold">Shop</Link> / <Link to="/shop" search={{ category: p.category }} className="hover:text-gold">{categoryName(p.category)}</Link>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="bg-champagne">
          <img src={p.image} alt={p.name} width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="md:py-8">
          <p className="eyebrow">{categoryName(p.category)}</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{p.name}</h1>
          <p className="mt-4 text-xl">{isBespoke ? `From ${formatINR(p.price)}` : formatINR(p.price)}</p>
          <p className="mt-1 text-xs text-muted-foreground">Illustrative demo price — final quote confirmed on enquiry.</p>
          <p className="mt-8 leading-relaxed text-muted-foreground">{p.description}</p>

          <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
            <div className="flex justify-between gap-4 py-3"><dt className="eyebrow text-muted-foreground">Material</dt><dd className="text-right">{p.material}</dd></div>
            <div className="flex justify-between gap-4 py-3"><dt className="eyebrow text-muted-foreground">Stones</dt><dd className="text-right">{p.stones}</dd></div>
          </dl>

          {p.sizes && (
            <fieldset className="mt-8">
              <legend className="eyebrow text-muted-foreground">Size</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.sizes.map((s) => (
                  <button key={s} type="button" aria-pressed={size === s} onClick={() => setSize(s)}
                    className={`min-w-12 border px-3 py-2 text-sm transition ${size === s ? "border-ink bg-ink text-ink-foreground" : "border-border hover:border-gold"}`}>{s}</button>
                ))}
              </div>
            </fieldset>
          )}

          <fieldset className="mt-8">
            <legend className="eyebrow text-muted-foreground">Customisation options</legend>
            <div className="mt-3 space-y-2">
              {p.customisations.map((c) => (
                <label key={c} className="flex items-center gap-3 text-sm">
                  <input type="checkbox" className="accent-gold" checked={custom.includes(c)}
                    onChange={() => setCustom((x) => (x.includes(c) ? x.filter((y) => y !== c) : [...x, c]))} />
                  {c}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn-luxe flex-1"><MessageCircle className="h-4 w-4" /> Enquire on WhatsApp</a>
            <button onClick={() => toggle(p.slug)} className="btn-outline-luxe" aria-pressed={has(p.slug)}>
              <Heart className={`h-4 w-4 ${has(p.slug) ? "fill-gold text-gold" : ""}`} /> {has(p.slug) ? "Saved" : "Wishlist"}
            </button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Demo site: no online checkout or payment. Orders are arranged personally via WhatsApp.</p>
        </div>
      </section>

      {isBespoke && (
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-center text-4xl">Describe your piece</h2>
            <div className="mt-10"><BespokeForm /></div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <h2 className="text-center text-4xl">You may also love</h2>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
          {related.map((r) => <ProductCard key={r.slug} p={r} />)}
        </div>
      </section>
    </>
  );
}
