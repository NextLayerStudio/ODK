"use client";

import { useEffect, useState } from "react";
import { IconArrowRight, IconClose } from "@/components/icons";
import { Photo } from "@/components/Photo";

export function HallGallery({ photos, name }: { photos: string[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);
  const count = photos.length;

  function step(direction: 1 | -1) {
    setActive((current) => (current === null ? current : (current + direction + count) % count));
  }

  useEffect(() => {
    if (active === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, count]);

  function open(index: number) {
    if (count > 0) setActive(Math.min(index, count - 1));
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-[1.4fr_1fr] md:gap-2.5">
        <button
          type="button"
          onClick={() => open(0)}
          className="col-span-2 h-[210px] overflow-hidden md:col-span-1 md:h-[320px]"
          aria-label={`Otvoriť galériu – ${name}`}
        >
          <Photo src={photos[0]} alt={name} priority />
        </button>
        <div className="col-span-2 grid grid-cols-2 gap-2 md:col-span-1 md:grid-cols-1 md:gap-2.5">
          <button type="button" onClick={() => open(1)} className="h-[100px] overflow-hidden md:h-[154px]">
            <Photo src={photos[1]} alt={name} />
          </button>
          <button
            type="button"
            onClick={() => open(2)}
            className="relative h-[100px] overflow-hidden md:h-[154px]"
          >
            <Photo src={photos[2]} alt={name} />
            {count > 0 ? (
              <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-base text-white md:text-lg">
                {count} {count === 1 ? "fotka" : count < 5 ? "fotky" : "fotiek"}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
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
            className="absolute left-4 z-10 rotate-180 text-white"
            aria-label="Predchádzajúca fotka"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
          >
            <IconArrowRight className="h-8 w-8" />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Photo src={photos[active]} alt={`${name} – fotka ${active + 1}`} fit="contain" priority />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {active + 1} / {count}
            </span>
          </div>
          <button
            type="button"
            className="absolute right-4 z-10 text-white"
            aria-label="Ďalšia fotka"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          >
            <IconArrowRight className="h-8 w-8" />
          </button>
        </div>
      ) : null}
    </>
  );
}
