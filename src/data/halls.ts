export type Hall = {
  slug: string;
  name: string;
  capacity: string;
  area: string;
  price: string;
  photos: string[];
  short: string;
  description: string;
  amenities: string[];
};

export const halls: Hall[] = [
  {
    slug: "estradna-sala",
    name: "Estrádna sála",
    capacity: "400 osôb",
    area: "255 m²",
    price: "Cena na dopyt",
    photos: ["/foto/estradna-sala/01.webp", "/foto/estradna-sala/02.webp", "/foto/estradna-sala/03.webp", "/foto/estradna-sala/04.webp", "/foto/estradna-sala/05.webp", "/foto/estradna-sala/06.webp", "/foto/estradna-sala/07.webp", "/foto/estradna-sala/08.webp", "/foto/estradna-sala/09.webp"],
    short:
      "Ideálny priestor na svadby, plesy, stužkové slávnosti a veľké spoločenské akcie.",
    description:
      "Naša estrádna sála je ideálnym priestorom na usporiadanie spoločenských osláv a slávnostných rautov, ako sú svadby, plesy a stužkové slávnosti. S moderným vybavením a kapacitou až 400 osôb a parketovým tanečným priestorom je pripravená na slávnostnú atmosféru aj na náročnejšie kultúrne podujatia.",
    amenities: [
      "prenájom sály vrátane energií",
      "základné biele osvetlenie a farebné dosvietenie parketu LED osvetlením",
      "služba javiskového technika",
      "usporiadanie sály (skupinkové sedenie, sedenie do tvaru „U“ „E“ alebo iné)",
      "návleky na stoličky s mašľami",
      "sklad s chladničkou v bezprostrednej blízkosti sály",
      "služba SBS",
      "stand By stolíky",
      "parkovanie v areáli",
      "upratovanie sály",
    ],
  },
  {
    slug: "sala-x",
    name: "Sála X",
    capacity: "200 osôb",
    area: "180 m²",
    price: "Cena na dopyt",
    photos: [],
    short:
      "Univerzálna sála pre konferencie, školenia, koncerty a stredne veľké oslavy.",
    description:
      "Sála X je flexibilný multifunkčný priestor vhodný na konferencie, prednášky, koncerty aj rodinné oslavy. Usporiadanie vieme prispôsobiť charakteru podujatia – od divadelného sedenia až po rautové usporiadanie.",
    amenities: [
      "prenájom sály vrátane energií",
      "základné osvetlenie a ozvučenie",
      "dataprojektor a plátno",
      "usporiadanie sály podľa typu podujatia",
      "parkovanie v areáli",
      "upratovanie sály",
    ],
  },
  {
    slug: "saloniky",
    name: "Salóniky",
    capacity: "70 osôb",
    area: "80 m²",
    price: "Cena na dopyt",
    photos: ["/foto/saloniky/01.webp", "/foto/saloniky/02.webp", "/foto/saloniky/03.webp"],
    short:
      "Komorné priestory na rokovania, školenia, krstiny, jubileá aj smútočné posedenia.",
    description:
      "Salóniky ponúkajú intimnejšie prostredie pre pracovné rokovania, školenia, krstiny, narodeniny aj smútočné posedenia. Kapacita do 70 osôb a možnosť prepojenia miestností dávajú priestor na rôzne formáty podujatí.",
    amenities: [
      "prenájom priestoru vrátane energií",
      "možnosť prepojenia salónikov",
      "projekčná technika",
      "catering z Reštaurácie Klub",
      "parkovanie v areáli",
    ],
  },
  {
    slug: "restauracia-klub",
    name: "Reštaurácia Klub",
    capacity: "110 osôb",
    area: "120 m²",
    price: "Cena na dopyt",
    photos: ["/foto/restauracia-klub/01.webp", "/foto/restauracia-klub/02.webp", "/foto/restauracia-klub/03.webp", "/foto/restauracia-klub/04.webp", "/foto/restauracia-klub/05.webp", "/foto/restauracia-klub/06.webp", "/foto/restauracia-klub/07.webp"],
    short:
      "Reštaurácia s teplou a studenou kuchyňou pre rauty, obedové menu aj slávnostné hostiny.",
    description:
      "V Reštaurácii Klub varíme hotové jedlá a obedové menu, pripravíme aj rauty a slávnostné hostiny z teplej a studenej kuchyne. Priestor je vhodný na svadobné hostiny, firemné obedy, rodinné oslavy aj každodenné posedenie. Kapacita je približne 110 osôb.",
    amenities: [
      "teplá a studená kuchyňa",
      "rautové aj servírované menu",
      "slávnostné prestieranie",
      "možnosť prepojenia s ďalšími priestormi",
      "parkovanie v areáli",
    ],
  },
];

export function getHall(slug: string) {
  return halls.find((hall) => hall.slug === slug);
}
