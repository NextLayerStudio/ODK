import Link from "next/link";
import { Container } from "@/components/ui";
import { IconHome, IconMail, IconPhone } from "@/components/icons";
import { navItems, rentalLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:py-14">
        <div>
          <p className="font-display text-[26px] leading-tight md:text-[30px]">
            Odborový dom
            <br />
            kultúry Prešov
          </p>
          <ul className="mt-6 space-y-3 text-[15px] text-white/90">
            <li className="flex items-start gap-3">
              <IconHome className="mt-1 h-[18px] w-[18px] shrink-0" />
              <a href={site.mapLink} target="_blank" rel="noreferrer" className="hover:underline">
                {site.address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IconPhone className="mt-1 h-[18px] w-[18px] shrink-0" />
              <a href={site.phoneHref} className="hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IconMail className="mt-1 h-[18px] w-[18px] shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[13px] tracking-wide text-white/55">Priestory na prenájom</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {rentalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[13px] tracking-wide text-white/55">Stránky</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            <li>
              <Link href="/" className="hover:underline">
                Úvod
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col gap-1 text-[13px] text-white/60 md:flex-row md:justify-between">
          <span>
            © {year} {site.company}
          </span>
          <span>IČO {site.ico}</span>
        </Container>
      </div>
    </footer>
  );
}
