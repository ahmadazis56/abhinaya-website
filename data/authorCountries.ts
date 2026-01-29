export const authorCountriesData = [
  { iso3: "USA", iso2: "US", name: "United States", techno: true, publisher: true, creative: false },
  { iso3: "CHN", iso2: "CN", name: "China", techno: false, publisher: true, creative: true },
  { iso3: "IDN", iso2: "ID", name: "Indonesia", techno: true, publisher: true, creative: true },
  { iso3: "IND", iso2: "IN", name: "India", techno: true, publisher: true, creative: true },
  { iso3: "EGY", iso2: "EG", name: "Egypt", techno: false, publisher: true, creative: false },
  { iso3: "DZA", iso2: "DZ", name: "Algeria", techno: false, publisher: true, creative: false },
  { iso3: "IRQ", iso2: "IQ", name: "Iraq", techno: false, publisher: true, creative: false },
  { iso3: "LBY", iso2: "LY", name: "Libya", techno: false, publisher: true, creative: false },
  { iso3: "MYS", iso2: "MY", name: "Malaysia", techno: false, publisher: true, creative: false },
  { iso3: "NGA", iso2: "NG", name: "Nigeria", techno: false, publisher: true, creative: false },
  { iso3: "PHL", iso2: "PH", name: "Philippines", techno: false, publisher: true, creative: false },
  { iso3: "QAT", iso2: "QA", name: "Qatar", techno: false, publisher: true, creative: false },
  { iso3: "THA", iso2: "TH", name: "Thailand", techno: false, publisher: true, creative: false },
  { iso3: "TUN", iso2: "TN", name: "Tunisia", techno: false, publisher: true, creative: false },
  { iso3: "DEU", iso2: "DE", name: "Germany", techno: false, publisher: true, creative: false },
  { iso3: "GBR", iso2: "GB", name: "United Kingdom", techno: false, publisher: true, creative: false },
];

export const authorCountriesList = authorCountriesData.map((c) => c.iso3);

export const getCountryByISO2 = (iso2: string) =>
  authorCountriesData.find((c) => c.iso2 === iso2);

export const getCountryByISO3 = (iso3: string) =>
  authorCountriesData.find((c) => c.iso3 === iso3);

export function getDivisions(country: typeof authorCountriesData[0]) {
  const divisions = [];
  if (country.techno) divisions.push("Techno");
  if (country.publisher) divisions.push("Publisher");
  if (country.creative) divisions.push("Creative");
  return divisions;
}

export function getCountryColor(country: typeof authorCountriesData[0]) {
  // Priority: Techno > Publisher > Creative
  if (country.techno) return "#1E3A8A"; // Dark Blue - Techno
  if (country.publisher) return "#FACC15"; // Yellow Gold - Publisher
  if (country.creative) return "#06B6D4"; // Cyan / Teal - Creative
  return "#D1D5DB"; // Light Gray - No activity
}
