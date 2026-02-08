import { NextResponse } from "next/server";
import { getHeroSlides, writeJson, type HeroSlide } from "@/lib/content";

export async function GET() {
  const data = getHeroSlides();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as HeroSlide[];
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid body: expected array" }, { status: 400 });
    }
    writeJson("hero.json", body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
