import fs from "fs";
import path from "path";
import { slides } from "@/data/hero-slides";
import { clients } from "@/data/clients";
import { mitra } from "@/data/mitra";
import { getAuthorCountries as getAuthorCountriesData } from "@/data/authorCountries";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readJson<T>(file: string, fallback: T): T {
  try {
    const filePath = path.join(CONTENT_DIR, file);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(raw) as T;
    }
  } catch {
    // ignore
  }
  return fallback;
}

function ensureContentDir() {
  try {
    if (!fs.existsSync(CONTENT_DIR)) {
      fs.mkdirSync(CONTENT_DIR, { recursive: true });
    }
  } catch {
    // On Vercel/serverless the filesystem may be read-only; use a database or blob storage for production persistence.
  }
}

export function writeJson(file: string, data: unknown): void {
  ensureContentDir();
  const filePath = path.join(CONTENT_DIR, file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export type HeroSlide = { title: string; subtitle: string; description?: string; image?: string; video?: string; buttonText: string; buttonLink: string };
export type ClientItem = { id: number; name: string; logo: string };
export type PartnerItem = { id: number; name: string; logo: string };

export function getHeroSlides(): HeroSlide[] {
  return readJson<HeroSlide[]>("hero.json", slides);
}

export function getClients(): ClientItem[] {
  return readJson<ClientItem[]>("clients.json", clients);
}

export function getPartners(): PartnerItem[] {
  return readJson<PartnerItem[]>("partners.json", mitra);
}

export function getAuthorCountries() {
  return getAuthorCountriesData();
}
