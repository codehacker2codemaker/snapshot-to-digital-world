import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist";
import { ProductCard } from "@/components/ProductCard";
import { PageIntro } from "@/components/PageIntro";
import { formatINR, SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your Wishlist — Sylviquek Studio" },
      { name: "description", content: "Your saved Sylviquek Studio pieces." },
      { property: "og:title", content: "Wishlist — Sylviquek Studio" },
      { property: "og:description", content: "Saved jewellery pieces." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Wishlist,
});

function Wishlist() {
  const { items } = useWishlist();
  const saved = PRODUCTS.filter((p) => items.includes(p.slug));
  const msg = `Hello ${SITE.name}, I'd like to enquire about these pieces:\n` + saved.map((p) => `• ${p.name} (${formatINR(p.price)})`).join("\n");
  return (
    <>
      <PageIntro eyebrow="Wishlist" title="Your saved pieces">Saved on this device only.</PageIntro>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        {saved.length ? (
          <>
            <div className="text-center"><a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn-luxe"><MessageCircle className="h-4 w-4" /> Enquire about all on WhatsApp</a></div>
            <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
              {saved.map((p) => <ProductCard key={p.slug} p={p} />)}
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl">Your wishlist is empty.</p>
            <Link to="/shop" className="btn-luxe mt-8">Explore Collection</Link>
          </div>
        )}
      </section>
    </>
  );
}
