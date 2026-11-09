import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HallGallery } from "@/components/HallGallery";
import { PageHero } from "@/components/PageHero";
import { ReservationForm } from "@/components/forms";
import { IconPeople, IconRuler, IconTag } from "@/components/icons";
import { Container } from "@/components/ui";
import { getHall, halls } from "@/data/halls";

export function generateStaticParams() {
  return halls.map((hall) => ({ slug: hall.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hall = getHall(slug);
  return { title: hall?.name ?? "Prenájom" };
}

export default async function HallPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hall = getHall(slug);
  if (!hall) notFound();

  return (
    <>
      <PageHero title={hall.name} compact />
      <section className="py-6 md:py-10">
        <Container className="grid items-start gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="card-shadow rounded-[22px] bg-white p-4 md:p-5">
            <HallGallery count={hall.photoCount} name={hall.name} />
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 text-[13px] text-white">
                <IconPeople />
                {hall.capacity}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 text-[13px] text-white">
                <IconRuler />
                {hall.area}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 text-[13px] text-white">
                <IconTag />
                {hall.price}
              </span>
            </div>
            <h2 className="mt-5 text-[16px] font-bold">Vybavenie a služby:</h2>
            <ul className="mt-1 space-y-0.5 text-[14px] leading-relaxed">
              {hall.amenities.map((item) => (
                <li key={item}>-{item}</li>
              ))}
            </ul>
          </article>

          <aside className="card-shadow rounded-[22px] bg-white p-6 md:p-7">
            <h2 className="font-display text-[30px] md:text-[34px]">Rezervácia sály</h2>
            <div className="mt-5">
              <ReservationForm hallName={hall.name} />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
