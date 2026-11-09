import Link from "next/link";
import { cn } from "@/lib/cn";
import { IconArrowRight } from "@/components/icons";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function BrandButton({
  href,
  children,
  className,
  arrow = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm text-white transition hover:bg-[#9b1b23]",
        className,
      )}
    >
      {arrow ? <IconArrowRight /> : null}
      {children}
    </Link>
  );
}

export function DarkButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-ink px-5 py-2 text-[13px] text-white transition hover:bg-black",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Field({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-11 w-full rounded-full border border-[#e4dfd8] bg-white px-4 text-sm text-ink outline-none transition placeholder:text-[#9a9590] focus:border-brand/40",
        className,
      )}
    />
  );
}

export function Area({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-[120px] w-full resize-y rounded-[22px] border border-[#e4dfd8] bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-[#9a9590] focus:border-brand/40",
        className,
      )}
    />
  );
}

export function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-8 text-sm text-white transition hover:bg-[#9b1b23]"
    >
      {children}
    </button>
  );
}

export function WhiteCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card-shadow rounded-[22px] bg-white p-6 md:p-8", className)}>
      {children}
    </div>
  );
}
