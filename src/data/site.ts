export const site = {
  name: "Odborový dom kultúry Prešov",
  shortName: "ODK Prešov",
  company: "Odborový dom kultúry, spol. s r.o.",
  ico: "31 665 071",
  phone: "0905 529 499",
  phoneHref: "tel:+421905529499",
  email: "odk@condornet.sk",
  contactEmail: "odk@condornet.sk",
  address: "Námestie mieru 1, 080 01 Prešov",
  addressLines: ["Námestie mieru 1,", "080 01 Prešov"],
  mapEmbed:
    "https://maps.google.com/maps?q=Odborov%C3%BD%20dom%20kult%C3%BAry%20Pre%C5%A1ov%2C%20N%C3%A1mestie%20mieru%201&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Odborov%C3%BD%20dom%20kult%C3%BAry%20Pre%C5%A1ov%20N%C3%A1mestie%20mieru%201",
};

export const navItems = [
  { href: "/prenajom/restauracia-klub", label: "Reštaurácia Klub" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const rentalLinks = [
  { href: "/prenajom/estradna-sala", label: "Estrádna sála", note: "do 400 osôb" },
  { href: "/prenajom/sala-x", label: "Sála X", note: "do 200 osôb" },
  { href: "/prenajom/restauracia-klub", label: "Reštaurácia Klub", note: "do 110 osôb" },
  { href: "/prenajom/saloniky", label: "Salóniky", note: "do 70 osôb" },
  { href: "/o-nas#dlhodoby-prenajom", label: "Dlhodobý prenájom", note: "kancelárie a obchody" },
] as const;

/** Na aké podujatie sa hodí ktorý priestor – sekcia na úvode. */
export const occasions = [
  {
    what: "Svadba, ples, stužková slávnosť",
    hall: "Estrádna sála",
    slug: "estradna-sala",
    note: "do 400 hostí, parket a pódium",
  },
  {
    what: "Konferencia, prednáška, koncert",
    hall: "Sála X",
    slug: "sala-x",
    note: "do 200 hostí, projekcia a ozvučenie",
  },
  {
    what: "Svadobná hostina, raut, firemný obed",
    hall: "Reštaurácia Klub",
    slug: "restauracia-klub",
    note: "do 110 hostí, vlastná kuchyňa",
  },
  {
    what: "Školenie, rokovanie, krstiny, jubileum, smútočné posedenie",
    hall: "Salóniky",
    slug: "saloniky",
    note: "do 70 hostí, komorné prostredie",
  },
] as const;
