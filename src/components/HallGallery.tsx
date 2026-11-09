"use client";

import { useState } from "react";
import { IconArrowRight, IconClose } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";

export function HallGallery({ count, name }: { count: number; name: string }) {
  const [active, setActive] = useState<number | null>(null);
  const photos = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-[1.4fr_1fr] md:gap-2.5">
        <button
          type="button"
          onClick={() => setActive(0)}
          className="col-span-2 h-[210px] overflow-hidden md:col-span-1 md:h-[320px]"
          aria-label={`Otvoriť galériu – ${name}`}
        >
          <Placeholder tone="photo" />
        </button>
        <div className="col-span-2 grid grid-cols-2 gap-2 md:col-span-1 md:grid-cols-1 md:gap-2.5">
          <button type="button" onClick={() => setActive(1)} className="h-[100px] overflow-hidden md:h-[154px]">
            <Placeholder tone="photo" />
          </button>
          <button
            type="button"
            onClick={() => setActive(2)}
            className="relative h-[100px] overflow-hidden md:h-[154px]"
          >
            <Placeholder tone="photo" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-base text-white md:text-lg">
              {count} fotiek
            </span>
          </button>
        </div>
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            className="absolute top-5 right-5 text-white"
            aria-label="Zavrieť galériu"
            onClick={() => setActive(null)}
          >
            <IconClose className="h-8 w-8" />
          </button>
          <button
            type="button"
            className="absolute left-4 rotate-180 text-white"
            aria-label="Predchádzajúca fotka"
            onClick={() => setActive((photos.indexOf(active) + photos.length - 1) % photos.length)}
          >
            <IconArrowRight className="h-8 w-8" />
          </button>
          <div className="h-[70vh] w-full max-w-4xl overflow-hidden rounded-xl">
            <Placeholder tone="photo" label={`${active + 1} / ${count}`} />
          </div>
          <button
            type="button"
            className="absolute right-4 text-white"
            aria-label="Ďalšia fotka"
            onClick={() => setActive((photos.indexOf(active) + 1) % photos.length)}
          >
            <IconArrowRight className="h-8 w-8" />
          </button>
        </div>
      ) : null}
    </>
  );
}
