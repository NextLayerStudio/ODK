"use client";

import { FormEvent, useState } from "react";
import { IconCalendar } from "@/components/icons";
import { Area, Field, SubmitButton } from "@/components/ui";
import { site } from "@/data/site";

function handleSubmit(event: FormEvent<HTMLFormElement>, onDone: () => void) {
  event.preventDefault();
  onDone();
  event.currentTarget.reset();
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form className="space-y-3" onSubmit={(event) => handleSubmit(event, () => setSent(true))}>
      <Field name="name" required placeholder="Meno a priezvisko" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="email" type="email" required placeholder="Email" />
        <Field name="phone" type="tel" placeholder="Tel. číslo" />
      </div>
      {compact ? null : <Field name="subject" placeholder="Predmet" />}
      <Area name="message" required placeholder="Vaša správa.." className={compact ? "min-h-[96px]" : undefined} />
      <div className="pt-2">
        <SubmitButton>Odoslať</SubmitButton>
      </div>
      {sent ? (
        <p className="text-sm text-brand">Ďakujeme, správa bola pripravená na odoslanie.</p>
      ) : null}
    </form>
  );
}

export function ReservationForm({ hallName }: { hallName: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form className="space-y-3" onSubmit={(event) => handleSubmit(event, () => setSent(true))}>
      <input type="hidden" name="hall" value={hallName} />
      <Field name="name" required placeholder="Meno a priezvisko" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="email" type="email" required placeholder="Email" />
        <Field name="phone" type="tel" placeholder="Tel. číslo" />
      </div>
      <Field name="eventType" placeholder="Typ podujatia" />
      <Field name="guests" placeholder="Predpokladaný počet hostí" />
      <div className="relative">
        <Field name="date" type="date" required className="date-input pr-12" />
        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted">
          <IconCalendar />
        </span>
      </div>
      <Area name="message" placeholder="Vaša správa.. (voliteľné)" />
      <div className="pt-3">
        <SubmitButton>Odoslať</SubmitButton>
      </div>
      {sent ? (
        <p className="text-sm text-brand">Ďakujeme, dopyt na rezerváciu sme zaevidovali.</p>
      ) : null}
    </form>
  );
}

export function ContactInfo() {
  return (
    <div>
      <h3 className="font-display text-[32px] leading-[1.15] text-brand md:text-[38px]">
        Odborový dom
        <br />
        kultúry Prešov
      </h3>
      <div className="mt-6 space-y-1 text-[18px] leading-snug text-ink md:text-[20px]">
        <p>
          <a href={site.phoneHref}>{site.phone}</a>
        </p>
        <p>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </p>
        {site.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
