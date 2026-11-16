import Link from "next/link";
import { HallsCarousel } from "@/components/HallsCarousel";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { IconArrowRight, IconPhone } from "@/components/icons";
import { BrandButton, Container, WhiteCard } from "@/components/ui";
import { ContactForm, ContactInfo } from "@/components/forms";
import { occasions, site } from "@/data/site";

const facts = [
  { value: "1968", label: "slúžime Prešovu" },
  { value: "400", label: "hostí v estrádnej sále" },
  { value: "4", label: "priestory na prenájom" },
  { value: "110", label: "miest v Reštaurácii Klub" },
];

const steps = [
  {
    title: "Pošlite dopyt alebo zavolajte",
    text: "Stačí nám povedať termín, typ podujatia a približný počet hostí.",
  },
  {
    title: "Ozveme sa s možnosťami",
    text: "Potvrdíme, či je termín voľný, odporučíme vhodný priestor a pošleme cenu.",
  },
  {
    title: "Prídete na obhliadku",
    text: "Priestor si pozriete na mieste a doladíme usporiadanie, catering aj techniku.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="Námestie mieru 1, Prešov"
        title="Prenájom priestorov"
        image="/foto/estradna-sala/01.webp"
        subtitle="Estrádna sála pre 400 hostí, Sála X, salóniky a Reštaurácia Klub pod jednou strechou. Na svadby, plesy, stužkové, firemné akcie aj rodinné oslavy."
        action={
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <BrandButton href="/#priestory" className="px-6">
              Pozrieť priestory
            </BrandButton>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-ink"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        }
      />

      <section className="border-b border-line bg-white">
        <Container className="grid grid-cols-2 md:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              style={{ "--reveal-delay": `${index * 0.08}s` } as React.CSSProperties}
              className={`reveal py-6 text-center md:py-8 ${index % 2 === 1 ? "border-l border-line" : ""} ${index === 2 ? "border-t border-line md:border-t-0 md:border-l" : ""} ${index === 3 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <p className="font-display text-[34px] leading-none text-brand md:text-[42px]">{fact.value}</p>
              <p className="mt-2 text-[13px] text-ink/70">{fact.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="reveal aspect-[4/3] overflow-hidden rounded-xl">
            <Photo src="/foto/estradna-sala/02.webp" alt="Estrádna sála s pódiom pripravená na stužkovú" />
          </div>
          <div className="reveal max-w-[540px]" style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
            <p className="font-display text-[22px] md:text-[24px]">Kto sme</p>
            <h2 className="mt-1 font-display text-[28px] leading-tight md:text-[36px]">
              Odborový dom kultúry Prešov
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/90">
              <p>
                Dom kultúry bol v Prešove otvorený v roku 1968. Odvtedy slúži Prešovčanom na kultúrne a
                spoločenské podujatia – od plesov a stužkových až po školenia a rodinné oslavy.
              </p>
              <p>
                Budova prešla viacerými rekonštrukciami. Posledné roky sme upravili dvor, rozšírili
                parkovisko, vymenili kotolňu aj elektrorozvody a skvalitnili interiéry.
              </p>
            </div>
            <div className="mt-7">
              <BrandButton href="/o-nas" arrow>
                Viac o nás
              </BrandButton>
            </div>
          </div>
        </Container>
      </section>

      <HallsCarousel />

      <section className="py-14 md:py-20">
        <Container className="max-w-[980px]">
          <h2 className="reveal font-display text-center text-[30px] md:text-[40px]">
            Akú sálu na aké podujatie?
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-center text-[15px] text-ink/75">
            Rýchla orientácia. Ak si nie ste istí, zavolajte – poradíme podľa počtu hostí.
          </p>
          <ul className="mt-10 border-t border-line">
            {occasions.map((item, index) => (
              <li
                key={item.slug}
                className="reveal border-b border-line"
                style={{ "--reveal-delay": `${index * 0.06}s` } as React.CSSProperties}
              >
                <Link
                  href={`/prenajom/${item.slug}`}
                  className="group grid gap-1 py-5 md:grid-cols-[1.3fr_1fr_auto] md:items-center md:gap-8"
                >
                  <span className="text-[16px] md:text-[17px]">{item.what}</span>
                  <span>
                    <span className="font-display text-[20px] text-brand md:text-[22px]">{item.hall}</span>
                    <span className="block text-[13px] text-ink/60">{item.note}</span>
                  </span>
                  <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-line transition group-hover:border-brand group-hover:bg-brand group-hover:text-white md:flex">
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="reveal font-display text-center text-[30px] md:text-[40px]">Ako si prenajať priestor</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="reveal border-t-2 border-brand pt-5"
                style={{ "--reveal-delay": `${index * 0.1}s` } as React.CSSProperties}
              >
                <span className="font-display text-[40px] leading-none text-brand">{index + 1}.</span>
                <h3 className="mt-3 text-[17px] font-bold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="kontakt" className="scroll-mt-24 pt-14 md:pt-20">
        <Container>
          <h2 className="reveal font-display text-center text-[32px] md:text-[40px]">Kontakt</h2>
          <div className="reveal mt-8 grid items-stretch gap-5 pb-10 md:grid-cols-2">
            <WhiteCard>
              <h3 className="font-display text-[32px] md:text-[36px]">Napíšte nám</h3>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </WhiteCard>
            <WhiteCard>
              <ContactInfo />
            </WhiteCard>
          </div>
        </Container>
        <MapEmbed />
      </section>
    </>
  );
}
