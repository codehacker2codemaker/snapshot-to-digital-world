import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { categoryName } from "@/lib/products";
import { formatINR } from "@/lib/site";
import { useWishlist } from "@/lib/wishlist";

export function ProductCard({ p }: { p: Product }) {
  const { has, toggle } = useWishlist();
  const saved = has(p.slug);
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-champagne">
        <Link to="/product/$slug" params={{ slug: p.slug }}>
          <img src={p.image} alt={`${p.name} — ${categoryName(p.category)}`} loading="lazy" width={1024} height={1280}
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
        </Link>
        <button onClick={() => toggle(p.slug)} aria-pressed={saved} aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur transition hover:bg-background">
          <Heart className={`h-4 w-4 ${saved ? "fill-gold text-gold" : ""}`} strokeWidth={1.3} />
        </button>
      </div>
      <div className="pt-5 text-center">
        <p className="eyebrow text-[0.6rem]">{categoryName(p.category)}</p>
        <h3 className="mt-2 font-serif text-xl">{p.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{formatINR(p.price)}</p>
        <Link to="/product/$slug" params={{ slug: p.slug }}
          className="mt-4 inline-block border-b border-foreground/40 pb-1 text-[0.65rem] uppercase tracking-[0.25em] transition-colors hover:border-gold hover:text-gold">
          View Details
        </Link>
      </div>
    </article>
  );
}
