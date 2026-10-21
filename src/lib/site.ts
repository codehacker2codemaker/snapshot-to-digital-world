// Edit brand contact details here — used across the whole site.
export const SITE = {
  name: "Sylviquek Studio",
  tagline: "Detailing Elegance",
  whatsapp: "919315483321", // country code + number, digits only
  whatsappDisplay: "+91 93154 83321",
  instagram: "sylviquekstudio",
  instagramUrl: "https://instagram.com/sylviquekstudio",
};

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const waLink = (message: string, number: string = SITE.whatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** Indian mobile: optional +91/91/0 prefix, then 10 digits starting 6-9. */
export const isValidIndianPhone = (raw: string) => {
  const d = raw.replace(/[\s\-()]/g, "");
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(d);
};

export type BespokeEnquiry = {
  name: string; phone: string; type: string; material: string; budget: string; description: string;
};

export const bespokeMessage = (e: BespokeEnquiry) =>
  [
    `Hello ${SITE.name}, I'd like to enquire about a bespoke piece.`,
    ``,
    `Name: ${e.name}`,
    `WhatsApp: ${e.phone}`,
    `Jewellery type: ${e.type}`,
    `Preferred material: ${e.material}`,
    `Budget: ${e.budget}`,
    `Design: ${e.description}`,
  ].join("\n");
