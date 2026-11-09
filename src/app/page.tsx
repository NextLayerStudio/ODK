import { HallsCarousel } from "@/components/HallsCarousel";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { BrandButton, Container, WhiteCard } from "@/components/ui";
import { ContactForm, ContactInfo } from "@/components/forms";
import { events } from "@/data/events";

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="Pre oslavy, konferencie a kultúrne akcie"
        title="Prenájom priestorov"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        action={
          <BrandButton href="/o-nas" className="px-6">
            Otvorí celý zoznam
          </BrandButton>
        }
      />

      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[240px_1fr] md:gap-16 lg:grid-cols-[280px_1fr]">
          <div className="order-2 mx-auto aspect-square w-full max-w-[280px] bg-[#eeeae4] md:order-1">
            <Placeholder label="img" />
          </div>
          <div className="order-1 max-w-[560px] md:order-2">
            <p className="font-display text-[22px] md:text-[24px]">Kto sme</p>
            <h2 className="mt-1 font-display text-[28px] leading-tight md:text-[34px]">
              Odborový dom kultúry Prešov
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/90">
              <p>
                Dom kultúry bol v Prešove otvorený v roku 1968. Odvtedy slúži občanom Prešova na
                kultúrne a spoločenské podujatia. Prešiel niekoľkými prestavbami a renováciami,
                posledná v roku 2014, kedy došlo k úprave dvora a rozšíreniu parkovacích miest.
              </p>
              <p>Sme pripravení poskytnúť Vám výnimočné služby v našich vynovených priestoroch.</p>
            </div>
          </div>
        </Container>
      </section>

      <HallsCarousel />

      <section className="py-14 md:py-16">
        <Container>
          <h2 className="font-display text-center text-[32px] md:text-[40px]">Najbližšie podujatia</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {events.map((event, index) => (
              <article key={event.slug} className={index > 1 ? "hidden md:block" : undefined}>
                <p className="mb-3 text-[13px]">{event.dateLabel}</p>
                <div className="aspect-[4/5] bg-[#ece8e2]">
                  <Placeholder />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center md:justify-end">
            <BrandButton href="/podujatia" arrow>
              Ďalšie podujatia
            </BrandButton>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="font-display text-center text-[32px] md:text-[40px]">Kontakt</h2>
          <div className="mt-8 grid items-stretch gap-5 pb-10 md:grid-cols-2">
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
