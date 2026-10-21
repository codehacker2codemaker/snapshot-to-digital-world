import { Link, useNavigate } from "@tanstack/react-router";
import { Heart, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useWishlist } from "@/lib/wishlist";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/shop", label: "Shop All" },
  { to: "/collections", label: "Collections" },
  { to: "/bespoke", label: "Bespoke" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [q, setQ] = useState("");
  const { items } = useWishlist();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(false); setOpen(false);
    navigate({ to: "/shop", search: { q: q || undefined } });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="bg-ink py-2 text-center text-[0.65rem] tracking-[0.3em] uppercase text-ink-foreground">
        Demo website · Enquiries via WhatsApp {SITE.whatsappDisplay}
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="text-center leading-none">
          <span className="block font-serif text-2xl tracking-[0.12em] lg:text-3xl">SYLVIQUEK</span>
          <span className="eyebrow mt-1 block text-[0.55rem]">Studio · {SITE.tagline}</span>
        </Link>
        <nav className="hidden gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search products" onClick={() => setSearching((s) => !s)}><Search className="h-5 w-5" strokeWidth={1.3} /></button>
          <Link to="/wishlist" aria-label={`Wishlist, ${items.length} items`} className="relative">
            <Heart className="h-5 w-5" strokeWidth={1.3} />
            {items.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[0.6rem] text-ink">{items.length}</span>
            )}
          </Link>
        </div>
      </div>
      {searching && (
        <form onSubmit={submit} className="mx-auto max-w-3xl px-5 pb-5">
          <label htmlFor="site-search" className="sr-only">Search jewellery</label>
          <input id="site-search" autoFocus value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Search rings, pendants, diamonds…" className="field-luxe font-serif text-xl" />
        </form>
      )}
      {open && (
        <nav className="border-t border-border px-5 py-6 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-serif text-2xl">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
