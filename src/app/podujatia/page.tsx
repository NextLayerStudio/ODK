import type { Metadata } from "next";
import { EventList } from "@/components/EventList";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Podujatia",
};

export default function EventsPage() {
  return (
    <>
      <PageHero title="Podujatia" compact />
      <section className="bg-white py-10 md:py-14">
        <Container>
          <h2 className="font-display border-b border-[#cfc9c0] pb-3 text-[32px] md:text-[40px]">
            Aktuálne podujatia
          </h2>
          <EventList />
        </Container>
      </section>
    </>
  );
}
