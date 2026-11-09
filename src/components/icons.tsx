import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-7 w-7", className)} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={cn("h-3 w-3", className)} aria-hidden>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path
        d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path
        d="M7.5 3.8h3.2l1.1 4.2-2 1.2a12.5 12.5 0 0 0 5 5l1.2-2 4.2 1.1v3.2c0 .7-.5 1.3-1.2 1.4C10.4 19.2 4.8 13.6 3.5 5c0-.7.6-1.2 1.4-1.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPeople({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 19c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconRuler({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <rect x="3.2" y="8.2" width="17.6" height="7.6" rx="1.4" transform="rotate(-20 12 12)" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 14.2l1.2-1.1M9.2 13l1.1-1M11.4 11.8l1.1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconTag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path
        d="M4 12.5V5.8A1.8 1.8 0 0 1 5.8 4h6.7L20 11.5l-6.8 6.8L4 12.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8.2" cy="8.2" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
