import { describe, expect, it } from "vitest";
import { isValidIndianPhone, waLink, formatINR } from "@/lib/site";

describe("site rules", () => {
  it("accepts valid Indian mobiles and rejects bad ones", () => {
    expect(isValidIndianPhone("+91 93154 83321")).toBe(true);
    expect(isValidIndianPhone("9315483321")).toBe(true);
    expect(isValidIndianPhone("12345")).toBe(false);
    expect(isValidIndianPhone("5315483321")).toBe(false);
  });
  it("opens WhatsApp chat with the studio number", () => {
    expect(waLink("hi")).toBe("https://wa.me/919315483321?text=hi");
  });
  it("formats INR in Indian grouping", () => {
    expect(formatINR(126000)).toBe("₹1,26,000");
  });
});
