export const site = {
  name: "Odborový dom kultúry Prešov",
  shortName: "ODK Prešov",
  phone: "0905 529 499",
  phoneHref: "tel:+421905529499",
  email: "info@domkulturypresov.sk",
  contactEmail: "odk@condornet.sk",
  address: "Námestie mieru č.1, 080 01 Prešov",
  addressLines: ["Námestie mieru 1,", "080 01 Prešov"],
  mapEmbed:
    "https://maps.google.com/maps?q=Odborov%C3%BD%20dom%20kult%C3%BAry%20Pre%C5%A1ov%2C%20N%C3%A1mestie%20mieru%201&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Odborov%C3%BD%20dom%20kult%C3%BAry%20Pre%C5%A1ov%20N%C3%A1mestie%20mieru%201",
};

export const navItems = [
  { href: "/podujatia", label: "Podujatia" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const rentalLinks = [
  { href: "/o-nas#kratkodoby-prenajom", label: "Krátkodobý prenájom" },
  { href: "/o-nas#dlhodoby-prenajom", label: "Dlhodobý prenájom" },
  { href: "/prenajom/estradna-sala", label: "Estrádna sála" },
  { href: "/prenajom/sala-x", label: "Sála X" },
  { href: "/prenajom/saloniky", label: "Salóniky" },
  { href: "/prenajom/restauracia-klub", label: "Reštaurácia Klub" },
] as const;
