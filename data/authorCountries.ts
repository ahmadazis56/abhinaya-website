export interface AuthorCountry {
  iso3: string;
  iso2: string;
  name: string;
  techno: number;
  publisher: number;
  creative: number;
}

export const authorCountries: AuthorCountry[] = [
  { iso3: "IDN", iso2: "ID", name: "Indonesia", techno: 45, publisher: 32, creative: 28 },
  { iso3: "MYS", iso2: "MY", name: "Malaysia", techno: 23, publisher: 18, creative: 15 },
  { iso3: "SGP", iso2: "SG", name: "Singapore", techno: 19, publisher: 14, creative: 12 },
  { iso3: "THA", iso2: "TH", name: "Thailand", techno: 17, publisher: 13, creative: 11 },
  { iso3: "VNM", iso2: "VN", name: "Vietnam", techno: 15, publisher: 12, creative: 10 },
  { iso3: "PHL", iso2: "PH", name: "Philippines", techno: 13, publisher: 10, creative: 8 },
  { iso3: "MMR", iso2: "MM", name: "Myanmar", techno: 8, publisher: 6, creative: 5 },
  { iso3: "KHM", iso2: "KH", name: "Cambodia", techno: 6, publisher: 4, creative: 3 },
  { iso3: "LAO", iso2: "LA", name: "Laos", techno: 4, publisher: 3, creative: 2 },
  { iso3: "BRN", iso2: "BN", name: "Brunei", techno: 3, publisher: 2, creative: 2 },
];

export function getAuthorCountries(): AuthorCountry[] {
  return authorCountries;
}

export function getCountryColor(country: AuthorCountry): string {
  if (country.techno > country.publisher && country.techno > country.creative) {
    return "#3B82F6"; // blue for techno
  } else if (country.publisher > country.creative) {
    return "#F59E0B"; // yellow for publisher
  } else {
    return "#06B6D4"; // cyan for creative
  }
}

export function getDivisions(country: AuthorCountry): string[] {
  const divisions: string[] = [];
  if (country.techno > 0) divisions.push("Techno");
  if (country.publisher > 0) divisions.push("Publisher");
  if (country.creative > 0) divisions.push("Creative");
  return divisions;
}
