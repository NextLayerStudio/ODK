"use client";

import { FormEvent, useState } from "react";
import { IconCalendar } from "@/components/icons";
import { Area, Field, SubmitButton } from "@/components/ui";
import { site } from "@/data/site";

/**
 * Formuláre zatiaľ nemajú vlastný server na odosielanie – po odoslaní otvoria
 * e-mailový program návštevníka s vyplnenou správou pre ODK.
 */
function openMail(subject: string, lines: [string, FormDataEntryValue | null][]) {
  const body = lines
    .filter(([, value]) => value && String(value).trim())
    .map(([label, value]) => `${label}: ${String(value).trim()}`)
    .join("\n");
  window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatDate(value: FormDataEntryValue | null) {
  if (!value) return null;
  const [y, m, d] = String(value).split("-");
  return y && m && d ? `${Number(d)}. ${Number(m)}. ${y}` : String(value);
}

function SentNote() {
  return (
    <p className="text-sm text-ink/80">
      Otvorili sme váš e-mailový program s pripravenou správou, stačí ju odoslať. Ak sa neotvoril,
      napíšte nám na{" "}
      <a className="text-brand underline" href={`mailto:${site.contactEmail}`}>
        {site.contactEmail}
      </a>{" "}
      alebo zavolajte na{" "}
      <a className="text-brand underline" href={site.phoneHref}>
        {site.phone}
      </a>
      .
    </p>
  );
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openMail(String(data.get("subject") || "Otázka z webu"), [
      ["Meno", data.get("name")],
      ["E-mail", data.get("email")],
      ["Telefón", data.get("phone")],
      ["Správa", data.get("message")],
    ]);
    setSent(true);
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <Field name="name" required placeholder="Meno a priezvisko" autoComplete="name" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="email" type="email" required placeholder="E-mail" autoComplete="email" />
        <Field name="phone" type="tel" placeholder="Telefón" autoComplete="tel" />
      </div>
      {compact ? null : <Field name="subject" placeholder="Predmet" />}
      <Area
        name="message"
        required
        placeholder="S čím vám môžeme pomôcť?"
        className={compact ? "min-h-[96px]" : undefined}
      />
      <div className="pt-2">
        <SubmitButton>Odoslať správu</SubmitButton>
      </div>
      {sent ? <SentNote /> : null}
    </form>
  );
}

export function ReservationForm({ hallName }: { hallName: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openMail(`Dopyt na prenájom – ${hallName}`, [
      ["Priestor", hallName],
      ["Termín", formatDate(data.get("date"))],
      ["Typ podujatia", data.get("eventType")],
      ["Počet hostí", data.get("guests")],
      ["Meno", data.get("name")],
      ["E-mail", data.get("email")],
      ["Telefón", data.get("phone")],
      ["Poznámka", data.get("message")],
    ]);
    setSent(true);
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block pl-4 text-[12px] text-muted">Termín podujatia</span>
          <span className="relative block">
            <Field name="date" type="date" required className="date-input pr-12" />
            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted">
              <IconCalendar />
            </span>
          </span>
        </label>
        <label className="block">
          <span className="mb-1 block pl-4 text-[12px] text-muted">Počet hostí</span>
          <Field name="guests" inputMode="numeric" placeholder="napr. 120" />
        </label>
      </div>
      <Field name="eventType" placeholder="Typ podujatia (svadba, školenie, oslava…)" />
      <Field name="name" required placeholder="Meno a priezvisko" autoComplete="name" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="email" type="email" required placeholder="E-mail" autoComplete="email" />
        <Field name="phone" type="tel" placeholder="Telefón" autoComplete="tel" />
      </div>
      <Area name="message" placeholder="Poznámka – usporiadanie, catering, technika (voliteľné)" />
      <div className="pt-2">
        <SubmitButton>Poslať nezáväzný dopyt</SubmitButton>
      </div>
      {sent ? <SentNote /> : null}
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
          <a href={site.phoneHref} className="hover:text-brand">
            {site.phone}
          </a>
        </p>
        <p>
          <a href={`mailto:${site.contactEmail}`} className="hover:text-brand">
            {site.contactEmail}
          </a>
        </p>
        {site.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="mt-6 text-[14px] leading-relaxed text-ink/75">
        Priestory radi ukážeme aj osobne – stačí sa vopred ohlásiť telefonicky. Parkovať môžete priamo
        v areáli.
      </p>
      <a
        href={site.mapLink}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-[14px] text-brand underline underline-offset-4"
      >
        Navigovať v Google Mapách
      </a>
    </div>
  );
}
