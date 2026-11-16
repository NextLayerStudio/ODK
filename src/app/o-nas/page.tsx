import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { BrandButton, Container } from "@/components/ui";
import { halls } from "@/data/halls";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "O nás",
};

const features = [
  {
    title: "Široká ponuka priestorov.",
    text: "Naše priestory sú prispôsobené pre rôzne podujatia – od svadieb a plesov po školenia a rodinné oslavy.",
  },
  {
    title: "Kvalitné stravovanie.",
    text: "V reštaurácii ponúkame pestrý výber jedál a špecialít teplej a studenej kuchyne.",
  },
  {
    title: "Profesionálny prístup.",
    text: "Náš tím odborníkov je pripravený zabezpečiť hladký priebeh vašich podujatí.",
  },
  {
    title: "Všetko na jednom mieste.",
    text: "Sála, catering z vlastnej kuchyne, technika aj parkovanie v areáli – bez zháňania dodávateľov.",
  },
];

function PhotoPair({ className, photos = [] }: { className?: string; photos?: string[] }) {
  return (
    <div className={cn("grid gap-3", className)}>
      <div className="aspect-[16/10] overflow-hidden">
        <Photo src={photos[0]} />
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        <Photo src={photos[1]} />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const estradna = halls[0];
  const klub = halls[3];
  const saloniky = halls[2];

  return (
    <div className="pt-28 pb-10 md:pt-32">
      <Container className="reveal max-w-[820px] text-center">
        <h1 className="font-display text-[32px] leading-tight md:text-[42px]">
          Zažite s nami jedinečné chvíle
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-ink/90">
          Odborový dom kultúry v Prešove je významným centrom kultúrneho a spoločenského života v
          regióne. Tento multifunkčný priestor ponúka široké možnosti pre organizovanie rôznych
          podujatí, od kultúrnych akcií po profesionálne školenia. S moderným vybavením a pohodlnými
          priestormi je ideálny pre firmy, organizácie aj jednotlivcov.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/90">
          Budovu postupne modernizujeme – upravili sme dvor a rozšírili parkovisko, vymenili kotolňu
          aj elektrorozvody a skvalitnili interiéry a balkóny. Tešíme sa na vašu návštevu.
        </p>
      </Container>

      <Container className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} className="reveal lift card-shadow rounded-[20px] bg-white px-6 py-7 text-center">
            <h2 className="text-[15px] font-bold">{feature.title}</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-ink/80">{feature.text}</p>
          </article>
        ))}
      </Container>

      <Container className="mt-16 space-y-16 md:mt-20 md:space-y-24">
        <section
          id="kratkodoby-prenajom"
          className="reveal grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14"
        >
          <div>
            <h2 className="font-display text-[28px] md:text-[34px]">Krátkodobý prenájom priestorov</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">
              Ponúkame krátkodobý prenájom priestorov na spoločenské a firemné oslavy. Priestory sú
              vhodné na svadby, firemné prezentácie, plesy, stužkové slávnosti, konferencie, školenia
              aj umelecké podujatia. Užite si vašu oslavu v slávnostnom prostredí, ktoré spraví z
              bežného dňa výnimočný zážitok.
            </p>
            <div className="mt-6">
              <BrandButton href="/kontakt" arrow>
                Kontaktujte nás
              </BrandButton>
            </div>
          </div>
          <PhotoPair photos={[klub.photos[1], saloniky.photos[0]]} />
        </section>

        <section
          id="dlhodoby-prenajom"
          className="reveal grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14"
        >
          <PhotoPair className="md:order-1" photos={[saloniky.photos[1], klub.photos[2]]} />
          <div className="md:order-2 md:text-right">
            <h2 className="font-display text-[28px] md:text-[34px]">Dlhodobý prenájom priestorov</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">
              Ponúkame dlhodobý prenájom kancelárskych, obchodných a spoločenských priestorov. Naše
              priestory sú prispôsobené pre firmy, ktoré hľadajú dôstojné zázemie v centre Prešova.
              Radi vám pripravíme ponuku podľa vašich predstáv a požiadaviek – zavolajte na{" "}
              <a href="tel:+421905529499" className="text-brand underline underline-offset-4">
                0905 529 499
              </a>
              .
            </p>
            <div className="mt-6 md:flex md:justify-end">
              <BrandButton href="/kontakt" arrow>
                Kontaktujte nás
              </BrandButton>
            </div>
          </div>
        </section>

        <section className="reveal grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="font-display text-[28px] md:text-[34px]">{estradna.name}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{estradna.description}</p>
            <div className="mt-6">
              <BrandButton href={`/prenajom/${estradna.slug}`} arrow>
                Pozrieť priestor
              </BrandButton>
            </div>
          </div>
          <PhotoPair photos={[estradna.photos[0], estradna.photos[1]]} />
        </section>

        <section className="reveal grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14">
          <PhotoPair className="md:order-1" photos={[klub.photos[0], klub.photos[3]]} />
          <div className="md:order-2 md:text-right">
            <h2 className="font-display text-[28px] md:text-[34px]">{klub.name}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{klub.description}</p>
            <div className="mt-6 md:flex md:justify-end">
              <BrandButton href={`/prenajom/${klub.slug}`} arrow>
                Pozrieť priestor
              </BrandButton>
            </div>
          </div>
        </section>

        <section className="reveal grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="font-display text-[28px] md:text-[34px]">{saloniky.name}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{saloniky.description}</p>
            <div className="mt-6">
              <BrandButton href={`/prenajom/${saloniky.slug}`} arrow>
                Pozrieť priestor
              </BrandButton>
            </div>
          </div>
          <PhotoPair photos={[saloniky.photos[0], saloniky.photos[2]]} />
        </section>
      </Container>
    </div>
  );
}
