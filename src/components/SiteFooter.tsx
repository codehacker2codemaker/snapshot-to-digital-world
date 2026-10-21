import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl tracking-[0.12em]">SYLVIQUEK</p>
          <p className="eyebrow mt-2">Studio · {SITE.tagline}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">
            Bespoke silver and diamond jewellery, designed around the person who wears it.
          </p>
          <div className="mt-6 flex gap-5">
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold"><Instagram className="h-5 w-5" strokeWidth={1.3} /></a>
            <a href={waLink(`Hello ${SITE.name}!`)} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-gold"><MessageCircle className="h-5 w-5" strokeWidth={1.3} /></a>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow mb-4">Explore</p>
          <Link to="/shop" className="block opacity-70 hover:opacity-100">Shop All</Link>
          <Link to="/collections" className="block opacity-70 hover:opacity-100">Collections</Link>
          <Link to="/bespoke" className="block opacity-70 hover:opacity-100">Bespoke</Link>
          <Link to="/about" className="block opacity-70 hover:opacity-100">About Us</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow mb-4">Client Care</p>
          <Link to="/contact" className="block opacity-70 hover:opacity-100">Contact</Link>
          <Link to="/privacy" className="block opacity-70 hover:opacity-100">Privacy Policy</Link>
          <Link to="/terms" className="block opacity-70 hover:opacity-100">Terms & Conditions</Link>
          <p className="opacity-70">{SITE.whatsappDisplay}</p>
          <p className="opacity-70">@{SITE.instagram}</p>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 px-5 py-6 text-center text-[0.65rem] tracking-[0.2em] uppercase opacity-50">
        © {new Date().getFullYear()} {SITE.name} · Demonstration website — prices & products are illustrative
      </div>
    </footer>
  );
}
