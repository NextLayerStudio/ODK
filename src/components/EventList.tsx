import { DarkButton } from "@/components/ui";
import { Placeholder } from "@/components/Placeholder";
import { events } from "@/data/events";
import { cn } from "@/lib/cn";

export function EventList({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      {events.map((event) => (
        <article
          key={event.slug}
          className="grid grid-cols-[118px_1fr] gap-x-4 py-6 md:grid-cols-[110px_150px_minmax(0,1fr)] md:items-start md:gap-x-8 md:py-8"
        >
          <div className="h-[148px] overflow-hidden bg-ink md:order-2 md:h-[158px] md:w-[150px]">
            <Placeholder tone="dark" />
          </div>

          <div className="md:order-1 md:pt-2 md:text-right">
            <p className="text-[20px] leading-none font-bold tracking-[0.04em] md:text-[18px]">
              {event.day} {event.month}
            </p>
            <p className="mt-1 text-[13px] text-muted">{event.time}</p>
            <div className="mt-3 border-b border-[#d7d1c8] pb-5 md:hidden">
              <p className="text-[13px] leading-relaxed text-ink/90">{event.excerpt}</p>
              <div className="mt-4">
                <DarkButton href={`/podujatia/${event.slug}`}>Viac informácií</DarkButton>
              </div>
            </div>
          </div>

          <div className="col-span-2 hidden border-b border-[#d7d1c8] pb-8 md:order-3 md:col-auto md:block">
            <p className="max-w-[540px] text-[15px] leading-relaxed text-ink/90">{event.excerpt}</p>
            <div className="mt-5">
              <DarkButton href={`/podujatia/${event.slug}`}>Viac informácií</DarkButton>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
