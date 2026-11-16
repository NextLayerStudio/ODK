import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/data/site";
import { bodyFont, displayFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description:
    "Prenájom priestorov pre oslavy, konferencie a kultúrne akcie v Prešove. Estrádna sála, salóniky a Reštaurácia Klub.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sk" suppressHydrationWarning data-scroll-behavior="smooth" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <head>
        {/* zapne animácie len keď beží JS – bez neho je obsah hneď viditeľný */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.dataset.anim='1'" }} />
      </head>
      <body className="min-h-full bg-cream font-sans text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
