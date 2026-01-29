# Abhinaya Impact Map - API Integration Guide 🗺️

## Overview

Saat ini **Abhinaya Impact Map** menggunakan data statis dari `data/authorCountries.ts`. Untuk membuat dinamis dari database, ikuti panduan ini.

## 📊 Data Structure

### Current Static Data Format

```typescript
// data/authorCountries.ts
export interface CountryContribution {
  iso3: string;        // ISO 3-letter country code (e.g., "IDN")
  iso2: string;        // ISO 2-letter country code (e.g., "ID")
  name: string;        // Country name
  techno: boolean;     // Abhinaya Techno has contributions
  publisher: boolean;  // Abhinaya Publisher has contributions
  creative: boolean;   // Abhinaya Creative has contributions
}
```

### Example Data

```typescript
const authorCountriesData = [
  { iso3: "IDN", iso2: "ID", name: "Indonesia", techno: true, publisher: true, creative: true },
  { iso3: "MYS", iso2: "MY", name: "Malaysia", techno: true, publisher: true, creative: false },
  { iso3: "IRQ", iso2: "IQ", name: "Iraq", techno: false, publisher: true, creative: false },
  // ...
];
```

## 🔄 How to Fetch from Database

### Step 1: Create API Endpoint

**File:** `app/api/impact/route.ts`

```typescript
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch dari database Anda (Prisma, MongoDB, SQL, etc.)
    const countryContributions = await fetchCountryContributionsFromDB();
    
    // Transform ke format yang sesuai
    const formattedData = countryContributions.map((item) => ({
      iso3: item.countryISO3,
      iso2: item.countryISO2,
      name: item.countryName,
      techno: item.hasTechnoContent === true,
      publisher: item.hasPublisherContent === true,
      creative: item.hasCreativeContent === true,
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Failed to fetch impact data:", error);
    return NextResponse.json(
      { error: "Failed to fetch impact data" },
      { status: 500 }
    );
  }
}

// Helper function - sesuaikan dengan setup database Anda
async function fetchCountryContributionsFromDB() {
  // Example dengan Prisma:
  // const countries = await prisma.countryContribution.findMany({
  //   select: {
  //     countryISO3: true,
  //     countryISO2: true,
  //     countryName: true,
  //     hasTechnoContent: true,
  //     hasPublisherContent: true,
  //     hasCreativeContent: true,
  //   },
  // });
  // return countries;

  // Atau dengan fetch dari REST API external:
  // const response = await fetch("https://your-api.com/countries/contributions");
  // return response.json();
}
```

### Step 2: Update Frontend Component

**File:** `data/authorCountries.ts` → buat file baru `hooks/useImpactData.ts`

```typescript
import { useEffect, useState } from "react";

export interface CountryContribution {
  iso3: string;
  iso2: string;
  name: string;
  techno: boolean;
  publisher: boolean;
  creative: boolean;
}

export function useImpactData() {
  const [data, setData] = useState<CountryContribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/impact");
        if (!response.ok) throw new Error("Failed to fetch impact data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
```

### Step 3: Update Components to Use Hook

**File:** `components/author-diversity-map.tsx`

```typescript
"use client";

import { useImpactData } from "@/hooks/useImpactData";
import { getCountryColor, getDivisions } from "@/data/authorCountries";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";

// ... component code ...

export default function AbhinayaImpactMap() {
  const { data: authorCountriesData, loading, error } = useImpactData();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  if (loading) return <div className="text-center py-12">Loading map...</div>;
  if (error) return <div className="text-center py-12 text-red-600">Error: {error}</div>;

  // ... rest of component stays the same ...
}
```

## 📈 Database Schema Examples

### Prisma Schema (if using Prisma)

```prisma
model CountryContribution {
  id                    String   @id @default(cuid())
  countryISO3           String   @unique
  countryISO2           String
  countryName           String
  hasTechnoContent      Boolean  @default(false)
  hasPublisherContent   Boolean  @default(false)
  hasCreativeContent    Boolean  @default(false)
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt

  @@map("country_contributions")
}
```

### MongoDB Collection

```javascript
db.country_contributions.insertMany([
  {
    countryISO3: "IDN",
    countryISO2: "ID",
    countryName: "Indonesia",
    hasTechnoContent: true,
    hasPublisherContent: true,
    hasCreativeContent: true,
    createdAt: new Date(),
  },
  // ...
]);
```

## 🔗 Integration Checklist

- [ ] Create `/api/impact` endpoint
- [ ] Connect to your database
- [ ] Create `hooks/useImpactData.ts` hook
- [ ] Update `author-diversity-map.tsx` to use hook
- [ ] Update `author-country-list.tsx` to use hook
- [ ] Test API with `curl` or Postman
- [ ] Verify all countries load with correct divisions
- [ ] Add error handling and loading states

## 🧪 Testing the API

```bash
# Test endpoint locally
curl http://localhost:3000/api/impact

# Expected response:
[
  {
    "iso3": "IDN",
    "iso2": "ID",
    "name": "Indonesia",
    "techno": true,
    "publisher": true,
    "creative": true
  },
  // ... more countries
]
```

## 📝 Notes

1. **Static vs Dynamic**: Current implementation menggunakan data statis yang cocok untuk initial development
2. **Caching**: Pertimbangkan implement caching di API untuk performa
3. **Revalidation**: Gunakan `revalidatePath()` untuk update data di Next.js
4. **Error Handling**: Tambahkan fallback ke data statis jika API gagal

## 🎯 Next Steps

1. Setup database Anda (PostgreSQL, MongoDB, etc.)
2. Implement logic untuk mendeteksi divisi berdasarkan data artikel/author
3. Buat automated job untuk update data kontribusi countries
4. Add admin panel untuk manage country contributions

---

**Pertanyaan?** Modifikasi file sesuai kebutuhan database Anda! 🚀
