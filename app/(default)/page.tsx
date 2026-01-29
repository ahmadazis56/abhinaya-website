
import AbhinayaImpactSection from "@/components/author-diversity-section";
import SectionKlien from "@/components/section-klien";
import SectionMitra from "@/components/section-mitra";
export const metadata = {
  title: "Abhinaya Indo Group - IT Solutions, Creative Services & Scientific Publishing",
  description: "Abhinaya Indo Group offers innovative IT solutions, creative branding, and scientific publishing services. Transform your vision with Techno, Creative, and Publisher divisions.",
};


import HeroSlider from "@/components/hero-slider";
import SectionLayanan from "@/components/section-layanan";

import SectionBerita from "@/components/section-berita";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">

      {/* Hero/Slider */}
      <HeroSlider />

      {/* Layanan */}
      <SectionLayanan />



      {/* Berita & Kegiatan */}
      <SectionBerita />

      {/* Impact Map */}
      <AbhinayaImpactSection />

      {/* Klien Kami */}
      <SectionKlien />

      {/* Mitra Kami */}
      <SectionMitra />
      </main>
    </>
  );
}
      

