import { Placeholder } from "@/components/Placeholder";
import { cn } from "@/lib/cn";

export function PageHero({
  title,
  kicker,
  subtitle,
  action,
  compact = false,
}: {
  title: string;
  kicker?: string;
  subtitle?: string;
  action?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        compact ? "h-[250px] md:h-[320px]" : "h-[460px] md:h-[520px]",
      )}
    >
      <Placeholder tone="photo" className="absolute inset-0" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-16 text-center text-white">
        {kicker ? (
          <p className="font-display text-[15px] md:text-[18px]">{kicker}</p>
        ) : null}
        <h1
          className={cn(
            "font-display leading-[1.05]",
            compact
              ? "text-[42px] md:text-[64px]"
              : "mt-1 text-[40px] tracking-[0.06em] uppercase md:text-[68px]",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-[460px] text-[13px] leading-relaxed text-white/92 md:text-[14px]">
            {subtitle}
          </p>
        ) : null}
        {action ? <div className="mt-6">{action}</div> : null}
      </div>
    </section>
  );
}

export function TitleBlock({ title }: { title: string }) {
  return (
    <div className="pt-28 pb-8 md:pt-32">
      <h1 className="font-display text-center text-[44px] md:text-[56px]">{title}</h1>
      <div className="mx-auto mt-2 h-px w-full bg-[#cfc9c0]" />
    </div>
  );
}
