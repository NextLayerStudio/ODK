"use client";

import Link from "next/link";
import { useRef } from "react";
import { IconArrowRight } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { BrandButton, Container } from "@/components/ui";
import { halls } from "@/data/halls";

export function HallsCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    scroller.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  }

  return (
    <section className="bg-ink py-14 text-white md:py-16">
      <Container>
        <h2 className="font-display text-center text-[32px] md:text-[40px]">Naše priestory</h2>
        <div className="relative mt-8">
          <div
            ref={scroller}
            className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {halls.map((hall) => (
              <Link
                key={hall.slug}
                href={`/prenajom/${hall.slug}`}
                className="relative h-[240px] w-[min(78vw,260px)] shrink-0 snap-start overflow-hidden rounded-xl md:h-[220px] md:w-auto"
              >
                <Placeholder tone="photo" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-3 py-3">
                  <span className="text-sm">{hall.name}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40">
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <button
            type="button"
            aria-label="Ďalšie priestory"
            onClick={() => scroll(1)}
            className="absolute top-1/2 -right-2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white md:flex"
          >
            <IconArrowRight />
          </button>
        </div>
        <div className="mt-8 flex justify-center md:justify-end">
          <BrandButton href="/o-nas" arrow>
            Všetky sály
          </BrandButton>
        </div>
      </Container>
    </section>
  );
}
