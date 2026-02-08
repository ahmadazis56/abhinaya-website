export const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
export const IMPACT_MAP_GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
export const NEWS_RSS_URL = "https://news.abhinaya.co.id/category/abhinaya/";

export type Division = "Techno" | "Publisher" | "Creative";

export const DIVISION_CONFIG: {
  name: Division;
  color: string;
  label: string;
  sublabel: string;
}[] = [
  { name: "Techno", color: "#1E3A8A", label: "Techno", sublabel: "Technology" },
  { name: "Publisher", color: "#FACC15", label: "Publisher", sublabel: "Publishing" },
  { name: "Creative", color: "#06B6D4", label: "Creative", sublabel: "Design" },
];
