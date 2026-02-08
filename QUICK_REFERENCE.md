# Quick Reference - Abhinaya Impact Map 🚀

## 📂 File Locations

| File | Purpose |
|------|---------|
| `data/authorCountries.ts` | Country data + helper functions |
| `components/author-diversity-map.tsx` | Interactive world map |
| `components/author-country-list.tsx` | Country grid with flags |
| `components/author-diversity-section.tsx` | Wrapper component |
| `app/(default)/page.tsx` | Homepage (includes section) |

## 🎨 Color Values

```typescript
// Techno Division
"#1a3a52" // Navy Blue

// Publisher Division
"#fbbf24" // Yellow Gold

// Creative Division
"#06b6d4" // Cyan

// No Activity
"#d1d5db" // Gray

// Hover State
"#fbbf24" // Yellow Gold
```

## 📊 Data Structure

```typescript
interface CountryContribution {
  iso3: string;       // "IDN"
  iso2: string;       // "ID"
  name: string;       // "Indonesia"
  techno: boolean;    // true/false
  publisher: boolean; // true/false
  creative: boolean;  // true/false
}
```

## 🔧 Common Tasks

### Add a Country
```typescript
// In data/authorCountries.ts
{
  iso3: "AUS",
  iso2: "AU",
  name: "Australia",
  techno: true,
  publisher: true,
  creative: false
}
```

### Change a Division Color
```typescript
// In data/authorCountries.ts, getCountryColor()
if (country.techno) return "#YOUR_HEX_CODE";
```

### Update Country Name
```typescript
// In data/authorCountries.ts
{ iso3: "IDN", iso2: "ID", name: "New Name", ... }
```

## 🌐 Map URLs

- **Geographic Data**: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json`
- **Development**: `http://localhost:3001`
- **API Endpoint** (when built): `/api/impact`

## 📦 Dependencies

```bash
npm install react-simple-maps react-country-flag --legacy-peer-deps
```

## ✨ Key Functions

```typescript
// Get divisions for a country
getDivisions(country) → ["Techno", "Publisher"]

// Get color for a country
getCountryColor(country) → "#1a3a52"

// Get country by ISO code
getCountryByISO3(iso3) → CountryData | undefined
getCountryByISO2(iso2) → CountryData | undefined
```

## 🎯 Component Props

### AbhinayaImpactMap
- No props required
- Uses data from `authorCountriesData`

### AuthorCountryList
- No props required
- Uses data from `authorCountriesData`

### AbhinayaImpactSection
- No props required
- Combines both map and list

## 📈 Statistics

**16 Countries** with:
- **12** with Techno
- **15** with Publisher
- **14** with Creative

## 🐛 Debugging

Check browser console for:
- Map rendering errors
- Missing country flags
- API fetch errors

## 🔄 Update Flow

```
User hovers country
    ↓
Map highlights (yellow)
    ↓
Shows country name + divisions
    ↓
Country list shows matching dots
```

## 📝 TypeScript Interfaces

```typescript
interface GeographyData {
  type: string;
  properties: {
    ISO_A3: string;
    name: string;
  };
  rsmKey: string;
}

interface CountryContribution {
  iso3: string;
  iso2: string;
  name: string;
  techno: boolean;
  publisher: boolean;
  creative: boolean;
}
```

## 🚀 Build Command

```bash
npm run build
# Output: ✓ Compiled successfully
```

## 💻 Dev Server

```bash
npm run dev
# Runs on: http://localhost:3000 (or 3001 if port busy)
```

## 🌐 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive

## 📊 Import Statements

```typescript
// Map
import AbhinayaImpactMap from "@/components/author-diversity-map";

// List
import AuthorCountryList from "@/components/author-country-list";

// Section
import AbhinayaImpactSection from "@/components/author-diversity-section";

// Data & Functions
import {
  authorCountriesData,
  getDivisions,
  getCountryColor,
  getCountryByISO2,
  getCountryByISO3
} from "@/data/authorCountries";
```

## ⚙️ Component Relationships

```
HomePage
  ├── AbhinayaImpactSection (wrapper)
  │   ├── AbhinayaImpactMap
  │   │   └── ComposableMap (react-simple-maps)
  │   │       └── Geographies
  │   │           └── Geography (per country)
  │   └── AuthorCountryList
  │       └── ReactCountryFlag (per country)
```

---

**Last Updated**: January 2026
**Status**: ✅ Production Ready
