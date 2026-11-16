"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconChevronDown, IconClose, IconMenu, IconPhone } from "@/components/icons";
import { navItems, rentalLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [rentalOpen, setRentalOpen] = useState(false);

  function close() {
    setOpen(false);
    setRentalOpen(false);
  }

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
            onClick={close}
            className="font-logo text-[12px] leading-[1.08] font-bold text-brand md:text-[13px]"
          >
            <span className="block">Odborový</span>
            <span className="block">dom kultúry</span>
            <span className="block">Prešov</span>
            <span className="sr-only">{site.name}</span>
          </Link>

          <div className="hidden items-center gap-9 text-[15px] text-ink min-[980px]:flex">
            <div className="group relative">
              <button type="button" className="inline-flex items-center gap-1.5 hover:text-brand">
                Prenájom priestorov
                <IconChevronDown />
              </button>
              <div className="invisible absolute top-full left-1/2 z-20 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="rounded-xl bg-white p-2 text-[14px] shadow-[0_12px_32px_rgba(43,43,43,0.16)]">
                  {rentalLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-baseline justify-between gap-3 rounded-lg px-3 py-2 hover:bg-cream hover:text-brand"
                      >
                        <span>{item.label}</span>
                        <span className="text-[12px] text-muted">{item.note}</span>
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
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[14px] text-white transition hover:bg-[#9b1b23]"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 min-[980px]:hidden">
            <a
              href={site.phoneHref}
              aria-label={`Zavolať ${site.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white"
            >
              <IconPhone className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <IconClose className="h-7 w-7" /> : <IconMenu />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="nav-shadow menu-in mt-2 max-h-[calc(100dvh-110px)] overflow-y-auto rounded-[20px] bg-cream px-6 py-5 min-[980px]:hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between py-2 text-left text-ink"
              aria-expanded={rentalOpen}
              onClick={() => setRentalOpen((value) => !value)}
            >
              Prenájom priestorov
              <IconChevronDown className={cn("transition", rentalOpen && "rotate-180")} />
            </button>
            {rentalOpen ? (
              <ul className="mb-2 ml-2 space-y-2.5 border-l border-line pl-4 text-sm">
                {rentalLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={close} className="flex justify-between gap-3">
                      <span>{item.label}</span>
                      <span className="text-muted">{item.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={close} className="block py-2">
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-white"
            >
              <IconPhone className="h-4 w-4" />
              Zavolať {site.phone}
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
