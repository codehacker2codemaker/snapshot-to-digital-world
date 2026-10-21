import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Ctx = { items: string[]; toggle: (slug: string) => void; has: (slug: string) => boolean };
const WishlistContext = createContext<Ctx | null>(null);
const KEY = "sylviquek-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { /* ignore */ }
  }, []);
  const toggle = (slug: string) =>
    setItems((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  return (
    <WishlistContext.Provider value={{ items, toggle, has: (s) => items.includes(s) }}>{children}</WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const c = useContext(WishlistContext);
  if (!c) throw new Error("useWishlist outside provider");
  return c;
};
