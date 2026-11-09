"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconChevronDown, IconClose, IconMenu } from "@/components/icons";
import { navItems, rentalLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [rentalOpen, setRentalOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setRentalOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-8 md:pt-4">
      <div className="pointer-events-auto mx-auto max-w-[1240px]">
        <nav className="nav-shadow relative flex items-center justify-between rounded-[20px] bg-cream px-5 py-3 md:px-8 md:py-3.5">
          <Link
            href="/"
            className="font-logo text-[12px] leading-[1.08] font-bold text-brand md:text-[13px]"
          >
            <span className="block">Odborový</span>
            <span className="block">dom kultúry</span>
            <span className="block">Prešov</span>
            <span className="sr-only">{site.name}</span>
          </Link>

          <div className="hidden items-center gap-10 text-[15px] text-ink min-[980px]:flex">
            <div className="group relative">
              <button type="button" className="inline-flex items-center gap-1.5">
                Prenájom priestorov
                <IconChevronDown />
              </button>
              <div className="invisible absolute top-full left-1/2 z-20 w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="space-y-2.5 rounded-xl bg-white p-3.5 text-[14px] shadow-[0_12px_32px_rgba(43,43,43,0.16)]">
                  {rentalLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="block hover:text-brand">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="min-[980px]:hidden"
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose className="h-7 w-7" /> : <IconMenu />}
          </button>
        </nav>

        {open ? (
          <div className="nav-shadow mt-2 rounded-[20px] bg-cream px-6 py-5 min-[980px]:hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between py-2 text-left text-ink"
              onClick={() => setRentalOpen((value) => !value)}
            >
              Prenájom priestorov
              <IconChevronDown className={cn(rentalOpen && "rotate-180")} />
            </button>
            {rentalOpen ? (
              <ul className="mb-2 ml-2 space-y-2 border-l border-line pl-4 text-sm">
                {rentalLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2">
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
