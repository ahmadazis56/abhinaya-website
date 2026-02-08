import { NextResponse } from "next/server";
import { getAuthorCountries, writeJson } from "@/lib/content";
import type { AuthorCountry } from "@/data/authorCountries";

export async function GET() {
  const data = getAuthorCountries();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AuthorCountry[];
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid body: expected array" }, { status: 400 });
    }
    writeJson("countries.json", body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
