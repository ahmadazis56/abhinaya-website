import "./css/style.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = Inter({
  subsets: ["latin"],
  variable: "--font-nacelle",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abhinaya.co.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abhinaya Indo Group | IT Solutions, Creative & Scientific Publishing",
    template: "%s | Abhinaya Indo Group",
  },
  description:
    "Transform your vision with Abhinaya Indo Group. Innovative IT solutions (Techno), creative branding (Creative), and scientific publishing (Publisher) across Indonesia and globally.",
  keywords: [
    "Abhinaya Indo Group",
    "IT solutions",
    "scientific publishing",
    "creative agency",
    "Indonesia",
    "Abhinaya Techno",
    "Abhinaya Creative",
    "Abhinaya Publisher",
  ],
  authors: [{ name: "Abhinaya Indo Group" }],
  creator: "Abhinaya Indo Group",
  openGraph: {
    type: "website",
    locale: "en_ID",
    url: siteUrl,
    siteName: "Abhinaya Indo Group",
    title: "Abhinaya Indo Group | IT Solutions, Creative & Scientific Publishing",
    description:
      "Innovative IT solutions, creative branding, and scientific publishing. Techno, Creative, and Publisher divisions.",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "Abhinaya Indo Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinaya Indo Group | IT Solutions, Creative & Scientific Publishing",
    description: "Innovative IT solutions, creative branding, and scientific publishing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { 
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e6d7c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-white font-inter text-base text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-x-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
