import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { BrandButton, Container } from "@/components/ui";
import { events, getEvent } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  return { title: event?.title ?? "Podujatie" };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <>
      <PageHero title={event.title} compact />
      <section className="bg-white py-12 md:py-16">
        <Container className="max-w-3xl">
          <p className="text-sm font-bold tracking-wide">
            {event.day} {event.month} · {event.time}
          </p>
          <div className="mt-6 h-[280px] overflow-hidden md:h-[360px]">
            <Placeholder tone="dark" />
          </div>
          <p className="mt-8 text-[16px] leading-relaxed text-ink/90">{event.description}</p>
          <div className="mt-8">
            <BrandButton href="/podujatia">Späť na podujatia</BrandButton>
          </div>
        </Container>
      </section>
    </>
  );
}
