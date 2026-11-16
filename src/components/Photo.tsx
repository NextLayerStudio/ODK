import { Placeholder } from "@/components/Placeholder";
import { cn } from "@/lib/cn";

type PhotoProps = {
  src?: string;
  alt?: string;
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  tone?: "light" | "dark" | "photo";
};

/** Fotka priestoru; ak fotka ešte nie je, zobrazí sivý zástupný blok. */
export function Photo({ src, alt = "", className, fit = "cover", priority, tone = "photo" }: PhotoProps) {
  if (!src) return <Placeholder tone={tone} className={className} />;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-full w-full", fit === "cover" ? "object-cover" : "object-contain", className)}
    />
  );
}
