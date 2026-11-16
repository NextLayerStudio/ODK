import { Fraunces, Manrope } from "next/font/google";

/**
 * Písma webu – na skúšanie iných stačí zmeniť import a volanie nižšie
 * (napr. Cormorant_Garamond, Playfair_Display, DM_Serif_Display / DM_Sans, Inter, Work_Sans).
 * Súbory sa stiahnu pri builde a servírujú sa z našej domény (žiadne volania na Google).
 * Subset latin-ext je nutný kvôli slovenskej diakritike.
 */
export const displayFont = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const bodyFont = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});
