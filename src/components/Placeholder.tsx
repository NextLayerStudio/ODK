import { cn } from "@/lib/cn";

type PlaceholderProps = {
  className?: string;
  label?: string;
  tone?: "light" | "dark" | "photo";
};

export function Placeholder({ className, label, tone = "light" }: PlaceholderProps) {
  const tones = {
    light: "bg-[#d9d4cc] text-[#8a847c]",
    dark: "bg-[#5c564f] text-white/70",
    photo: "placeholder-photo text-white/55",
  };

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center overflow-hidden",
        tones[tone],
        className,
      )}
    >
      {label ? <span className="text-sm tracking-wide">{label}</span> : null}
    </div>
  );
}
