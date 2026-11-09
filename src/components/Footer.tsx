"use client";

import { FormEvent } from "react";
import { Container } from "@/components/ui";
import { IconArrowRight, IconHome, IconMail, IconPhone } from "@/components/icons";
import { site } from "@/data/site";

export function Footer() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-10 md:grid-cols-2 md:items-start md:py-12">
        <div>
          <h2 className="text-[26px] font-medium md:text-[30px]">Kontaktujte nás</h2>
          <ul className="mt-5 space-y-3 text-[15px] text-white/95">
            <li className="flex items-start gap-3">
              <IconHome className="mt-1 h-[18px] w-[18px] shrink-0" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <IconPhone className="mt-1 h-[18px] w-[18px] shrink-0" />
              <a href={site.phoneHref} className="hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IconMail className="mt-1 h-[18px] w-[18px] shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h2 className="text-[26px] font-medium md:text-[30px]">Odber noviniek</h2>
          <form onSubmit={onSubmit} className="relative mt-5 w-full max-w-[260px]">
            <input
              type="email"
              required
              placeholder="Email"
              className="h-11 w-full rounded-full bg-white pr-12 pl-5 text-sm text-ink outline-none"
            />
            <button
              type="submit"
              aria-label="Odoberať novinky"
              className="absolute top-1/2 right-1 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white"
            >
              <IconArrowRight />
            </button>
          </form>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/80">
        Copyright © 2025 Domkulturypresov.sk
      </div>
    </footer>
  );
}
