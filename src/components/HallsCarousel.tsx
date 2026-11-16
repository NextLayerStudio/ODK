import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { Photo } from "@/components/Photo";
import { Container } from "@/components/ui";
import { halls } from "@/data/halls";

export function HallsCarousel() {
  return (
    <section id="priestory" className="scroll-mt-24 bg-ink py-14 text-white md:py-20">
      <Container>
        <div className="reveal flex flex-col items-center text-center">
          <h2 className="font-display text-[32px] md:text-[40px]">Naše priestory</h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-white/75">
            Štyri priestory pod jednou strechou. Kliknite na sálu a uvidíte fotky, kapacitu, vybavenie
            a môžete rovno poslať dopyt na termín.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {halls.map((hall, index) => (
            <Link
              key={hall.slug}
              href={`/prenajom/${hall.slug}`}
              className="reveal lift group block"
              style={{ "--reveal-delay": `${index * 0.08}s` } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
                <Photo
                  src={hall.photos[0]}
                  alt={hall.name}
                  className="transition duration-500 group-hover:scale-[1.04]"
                />
                {hall.photos.length === 0 ? (
                  <span className="absolute inset-0 flex items-center justify-center text-[13px] text-white/70">
                    Fotky pripravujeme
                  </span>
                ) : null}
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[22px] leading-tight">{hall.name}</h3>
                  <p className="mt-1 text-[13px] text-white/60">
                    {hall.capacity} · {hall.area}
                  </p>
                </div>
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 transition group-hover:border-brand group-hover:bg-brand">
                  <IconArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-white/80">{hall.short}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
