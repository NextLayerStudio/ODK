export type EventItem = {
  slug: string;
  title: string;
  day: string;
  month: string;
  time: string;
  dateLabel: string;
  excerpt: string;
  description: string;
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.";

const loremLong = `${lorem} Risus commodo viverra maecenas accumsan lacus vel facilisis.`;

export const events: EventItem[] = [
  {
    slug: "koncert-26-oct",
    title: "Večerný koncert v estrádnej sále",
    day: "26",
    month: "OCT",
    time: "12:00",
    dateLabel: "20.11.2026",
    excerpt: lorem,
    description: loremLong,
  },
  {
    slug: "ples-sezony",
    title: "Ples sezóny",
    day: "26",
    month: "OCT",
    time: "12:00",
    dateLabel: "20.11.2026",
    excerpt: lorem,
    description: loremLong,
  },
  {
    slug: "stuzkova-slava",
    title: "Stužková slávnosť",
    day: "26",
    month: "OCT",
    time: "12:00",
    dateLabel: "20.11.2026",
    excerpt: lorem,
    description: loremLong,
  },
  {
    slug: "firemny-vecierok",
    title: "Firemný večierok",
    day: "26",
    month: "OCT",
    time: "12:00",
    dateLabel: "20.11.2026",
    excerpt: lorem,
    description: loremLong,
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
