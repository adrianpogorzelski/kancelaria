// Jedno źródło prawdy: dane kancelarii używane w nagłówku, stopce, kontakcie i JSON-LD.

export type NavLink = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavLink[] };

export const site = {
  name: "Kancelaria Notarialna Anna Wawszczak",
  owner: "Anna Wawszczak",
  url: "https://spychalskiego13.pl",
  email: "notariusz@spychalskiego13.pl",
  phones: [
    { label: "77 55 77 898", tel: "+48775577898", kind: "landline", name: "Telefon" },
    { label: "533 987 456", tel: "+48533987456", kind: "mobile", name: "Komórka" },
  ],
  address: {
    street: "ul. Stanisława Spychalskiego 13",
    streetFull: "ul. Stanisława Spychalskiego 13/101A",
    unit: "lokal 101A",
    floor: "1 piętro",
    zip: "45-716",
    city: "Opole",
    country: "PL",
  },
  geo: { lat: 50.66778361473626, lng: 17.91257848661452 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=50.66778361473626,17.91257848661452",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.812804480113!2d17.9125785!3d50.6677361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471052fd9dc0543b%3A0x26b56dd919d20a2!2sStanis%C5%82awa%20Spychalskiego%2013%2C%2045-716%20Opole!5e0!3m2!1spl!2spl!4v1656449942574!5m2!1spl!2spl",
  nip: "754 299 28 52",
  regon: "523 540 579",
  facebook: "https://www.facebook.com/profile.php?id=100088032353559",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
    text: "od poniedziałku do piątku",
    range: "9.00 – 17.00",
  },
  transport: {
    stop: "Spychalskiego",
    stopNumbers: "347/348",
    lines: ["5", "9", "13", "15", "25"],
    planner: "https://jakdojade.pl/opole/trasa/?fn=&tn=Spychalskiego",
  },
  bank: {
    name: "ING Bank Śląski",
    // Rachunek do wpłat podatków, opłat sądowych i wynagrodzenia notariusza
    main: "75 1050 1575 1000 0097 6817 2711",
    // Rachunek depozytowy (wyłącznie depozyt notarialny)
    deposit: "04 1050 1575 1000 0097 6910 2667",
  },
  // Taksa za oświadczenie najemcy (najem okazjonalny) = 1/10 minimalnego wynagrodzenia.
  // AKTUALIZOWAĆ co roku w styczniu (rozporządzenie Rady Ministrów o płacy minimalnej).
  minimumWage: { year: 2026, amount: 4806 },
  // Polityka prywatności: uzupełnić brakujące pola, po akceptacji przez notariusza (i IOD, jeśli jest)
  // ustawić ready: true. Dopiero wtedy pojawią się linki do polityki w stopce i formularzu.
  privacy: {
    ready: false,
    updated: null as string | null, // np. "3 listopada 2026"
    iod: null as string | null, // dane kontaktowe IOD albo "brak", jeśli nie wyznaczono
    retention: null as string | null, // np. "przez czas potrzebny na udzielenie odpowiedzi i obsługę sprawy, nie dłużej niż ..."
    mailProvider: null as string | null, // dostawca poczty e-mail kancelarii
  },
  nav: [
    {
      label: "Czynności",
      children: [
        { label: "Zakres czynności", href: "/czynnosci" },
        { label: "Dokumenty", href: "/dokumenty" },
        { label: "Najem okazjonalny", href: "/najem-okazjonalny" },
        { label: "Postępowanie spadkowe", href: "/postepowanie-spadkowe" },
      ],
    },
    { label: "Płatności", href: "/platnosci" },
    { label: "Pytania i odpowiedzi", href: "/pytania" },
    { label: "Kontakt", href: "/kontakt" },
  ] as NavItem[],
};
