import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HallGallery } from "@/components/HallGallery";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { ReservationForm } from "@/components/forms";
import { IconArrowRight, IconPeople, IconPhone, IconRuler, IconTag } from "@/components/icons";
import { Container } from "@/components/ui";
import { getHall, halls } from "@/data/halls";
import { site } from "@/data/site";

export const dynamicParams = false;

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
  return { title: hall?.name ?? "Prenájom", description: hall?.short };
}

export default async function HallPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hall = getHall(slug);
  if (!hall) notFound();

  const others = halls.filter((item) => item.slug !== hall.slug);

  return (
    <>
      <PageHero title={hall.name} compact image={hall.photos[0]} subtitle={hall.short} />
      <section className="py-6 md:py-10">
        <Container>
          <nav aria-label="Navigácia" className="mb-5 text-[13px] text-ink/60">
            <Link href="/" className="hover:text-brand">
              Úvod
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#priestory" className="hover:text-brand">
              Prenájom priestorov
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{hall.name}</span>
          </nav>
        </Container>
        <Container className="grid items-start gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="reveal card-shadow rounded-[22px] bg-white p-4 md:p-6">
            {hall.photos.length > 0 ? (
              <HallGallery photos={hall.photos} name={hall.name} />
            ) : (
              <div className="relative h-[210px] overflow-hidden rounded-lg md:h-[320px]">
                <Photo />
                <span className="absolute inset-0 flex items-center justify-center text-sm text-white/80">
                  Fotky tohto priestoru pripravujeme
                </span>
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
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
            <p className="mt-5 text-[15px] leading-relaxed text-ink/90">{hall.description}</p>
            <h2 className="mt-7 font-display text-[24px]">Vybavenie a služby</h2>
            <ul className="mt-3 grid gap-x-8 gap-y-2 text-[14px] leading-snug sm:grid-cols-2">
              {hall.amenities.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside id="dopyt" className="reveal card-shadow scroll-mt-28 rounded-[22px] bg-white p-6 md:p-7 lg:sticky lg:top-28"
            style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
            <h2 className="font-display text-[30px] leading-tight md:text-[34px]">Nezáväzný dopyt</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/75">
              Napíšte nám termín a počet hostí – ozveme sa s dostupnosťou a cenou.
            </p>
            <div className="mt-5">
              <ReservationForm hallName={hall.name} />
            </div>
            <div className="mt-6 border-t border-line pt-5 text-[14px]">
              <p className="text-ink/70">Radšej telefonicky?</p>
              <a
                href={site.phoneHref}
                className="mt-1 inline-flex items-center gap-2 text-[18px] text-brand hover:underline"
              >
                <IconPhone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </aside>
        </Container>
      </section>

      <section className="pt-6 pb-14 md:pb-20">
        <Container>
          <h2 className="font-display text-[28px] md:text-[32px]">Ďalšie priestory</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((item) => (
              <Link key={item.slug} href={`/prenajom/${item.slug}`} className="reveal lift group block">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <Photo
                    src={item.photos[0]}
                    alt={item.name}
                    className="transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-[20px]">{item.name}</p>
                    <p className="text-[13px] text-ink/60">{item.capacity}</p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
