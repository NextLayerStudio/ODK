import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const caslon = localFont({
  src: "../fonts/BigCaslon.ttf",
  variable: "--font-caslon",
  display: "swap",
  weight: "400",
});

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
    <html lang="sk" data-scroll-behavior="smooth" className={`${caslon.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
