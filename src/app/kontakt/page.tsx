import type { Metadata } from "next";
import { ContactForm, ContactInfo } from "@/components/forms";
import { MapEmbed } from "@/components/MapEmbed";
import { TitleBlock } from "@/components/PageHero";
import { Container, WhiteCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <>
      <Container>
        <TitleBlock title="Kontakt" />
        <div className="reveal grid items-stretch gap-5 pb-10 md:grid-cols-2">
          <WhiteCard>
            <h2 className="font-display text-[32px] md:text-[36px]">Napíšte nám</h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </WhiteCard>
          <WhiteCard>
            <ContactInfo />
          </WhiteCard>
        </div>
      </Container>
      <MapEmbed />
    </>
  );
}
