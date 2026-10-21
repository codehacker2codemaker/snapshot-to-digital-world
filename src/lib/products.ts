import ring from "@/assets/ring.jpg";
import band from "@/assets/band.jpg";
import necklace from "@/assets/necklace.jpg";
import hero from "@/assets/hero.jpg";
import earrings from "@/assets/earrings.jpg";
import pendant from "@/assets/pendant.jpg";
import bracelet from "@/assets/bracelet.jpg";
import craft from "@/assets/craft.jpg";

// Illustrative demo catalogue — names, prices and specs are placeholders pending brand approval.
export const CATEGORIES = [
  { slug: "diamond-rings", name: "Diamond Rings", image: ring },
  { slug: "silver-jewellery", name: "Silver Jewellery", image: bracelet },
  { slug: "statement-necklaces", name: "Statement Necklaces", image: necklace },
  { slug: "pendants", name: "Pendants", image: pendant },
  { slug: "earrings", name: "Earrings", image: earrings },
  { slug: "bespoke-creations", name: "Bespoke Creations", image: craft },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export type Product = {
  slug: string; name: string; category: CategorySlug; price: number; image: string;
  description: string; material: string; stones: string; sizes?: string[];
  customisations: string[]; bestseller?: boolean;
};

export const PRODUCTS: Product[] = [
  { slug: "aurelle-solitaire", name: "Aurelle Solitaire Ring", category: "diamond-rings", price: 84500, image: ring, bestseller: true,
    description: "A single brilliant held aloft in four slender claws — quiet, luminous, forever.",
    material: "925 sterling silver, rhodium finish", stones: "Round brilliant diamond (illustrative spec)",
    sizes: ["8", "10", "12", "14", "16", "18"], customisations: ["Engraving", "Stone size", "Band width"] },
  { slug: "celeste-eternity-stack", name: "Céleste Eternity Stack", category: "diamond-rings", price: 126000, image: band, bestseller: true,
    description: "Three bands, one story — round, baguette and solitaire rings designed to be worn together or apart.",
    material: "925 sterling silver, rhodium finish", stones: "Round & baguette diamonds (illustrative spec)",
    sizes: ["8", "10", "12", "14", "16"], customisations: ["Select bands", "Engraving"] },
  { slug: "lumiere-cascade-necklace", name: "Lumière Cascade Necklace", category: "statement-necklaces", price: 248000, image: necklace, bestseller: true,
    description: "A graduated fall of marquise and pear stones that frames the collarbone like light on water.",
    material: "925 sterling silver", stones: "Marquise, pear & round diamonds (illustrative spec)",
    customisations: ["Length adjustment", "Clasp style"] },
  { slug: "vine-teardrop-necklace", name: "Vine Teardrop Necklace", category: "statement-necklaces", price: 168000, image: hero,
    description: "Leaf-cut stones wind towards a haloed pear drop — botanical, romantic, unmistakably refined.",
    material: "925 sterling silver", stones: "Marquise & pear diamonds (illustrative spec)",
    customisations: ["Length adjustment", "Detachable drop"] },
  { slug: "solenne-pear-pendant", name: "Solenne Pear Pendant", category: "pendants", price: 42500, image: pendant, bestseller: true,
    description: "A pear-cut stone suspended on a whisper-fine chain. Everyday elegance, distilled.",
    material: "925 sterling silver", stones: "Pear-cut diamond (illustrative spec)",
    sizes: ["16 in", "18 in", "20 in"], customisations: ["Chain length", "Initial engraving on bail"] },
  { slug: "feuille-drop-earrings", name: "Feuille Drop Earrings", category: "earrings", price: 96000, image: earrings,
    description: "Clustered leaves descending into pear drops that move with every turn of the head.",
    material: "925 sterling silver, rhodium finish", stones: "Pear & marquise diamonds (illustrative spec)",
    customisations: ["Clip-on conversion", "Drop length"] },
  { slug: "onda-pave-cuff", name: "Onda Pavé Cuff", category: "silver-jewellery", price: 138000, image: bracelet, bestseller: true,
    description: "A sculptural wave of polished silver, crested with hand-set pavé.",
    material: "925 sterling silver", stones: "Pavé-set diamonds (illustrative spec)",
    sizes: ["S", "M", "L"], customisations: ["Wrist size", "Inner engraving"] },
  { slug: "atelier-signature-commission", name: "Atelier Signature Commission", category: "bespoke-creations", price: 75000, image: craft,
    description: "A one-of-one piece designed with you — from sketch to stone setting. Price shown is an indicative starting point.",
    material: "Your choice of silver finishes", stones: "Chosen in consultation",
    customisations: ["Fully bespoke design", "Stone selection", "Engraving", "Packaging"] },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const categoryName = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;

export const searchProducts = (list: Product[], q?: string, category?: string) => {
  const term = (q ?? "").trim().toLowerCase();
  return list.filter(
    (p) =>
      (!category || p.category === category) &&
      (!term || [p.name, p.description, categoryName(p.category), p.stones].join(" ").toLowerCase().includes(term)),
  );
};
