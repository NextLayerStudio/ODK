import { site } from "@/data/site";

export function MapEmbed({ className = "h-[280px] md:h-[340px]" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden bg-[#e8eee4] ${className}`}>
      <iframe
        title="Mapa – Odborový dom kultúry Prešov"
        src={site.mapEmbed}
        className="h-full w-full border-0 grayscale-[0.15]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
