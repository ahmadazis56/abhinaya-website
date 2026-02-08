import HeroHome from "@/components/hero-home";
import SectionBerita from "@/components/section-berita";
import SectionKlien from "@/components/section-klien";
import ProfessionalServices from "@/components/ProfessionalServices";
import SectionMitra from "@/components/section-mitra";
import UltraProfessionalFooter from "@/components/UltraProfessionalFooter";
import FlyersSection from "@/components/FlyersSection";
import AnimatedStats from "@/components/AnimatedStats";
import { getHeroSlides, getClients, getPartners } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhinaya Indo Group - IT Solutions, Creative & Scientific Publishing",
  description:
    "Abhinaya Indo Group offers IT solutions, creative branding, and scientific publishing. Techno, Creative, and Publisher divisions—trusted by companies and institutions worldwide.",
};

export default async function Home() {
  const [slides, clients, partners] = await Promise.all([
    Promise.resolve(getHeroSlides()),
    Promise.resolve(getClients()),
    Promise.resolve(getPartners()),
  ]);

  return (
    <>
      <section aria-label="Hero">
        <HeroHome slides={slides} />
      </section>

      <section id="services" aria-label="Our services">
        <ProfessionalServices />
      </section>

      <section id="stats" aria-label="Our achievements">
        <AnimatedStats />
      </section>

      <section id="news" aria-label="News and activities" className="bg-gray-50 py-16">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-nacelle text-gray-800 mb-4">
              Latest News & Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest news and meet our valued partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News Section - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
                <SectionBerita headlineCount={3} />
              </div>
            </div>
            
            {/* Flyers Section - 1 column */}
            <div className="lg:col-span-1">
              <FlyersSection />
            </div>
          </div>
        </div>
      </section>

      
      <section id="clients" aria-label="Our clients" className="mb-0">
        <SectionKlien
          title="Our Clients"
          description="We are trusted by the world's most innovative companies"
          clients={clients}
        />
      </section>

      <section id="partners" aria-label="Partners" className="mt-0">
        <SectionMitra
          title="Our Partners"
          description="Collaborating with leading institutions and organizations worldwide."
          partners={partners}
        />
      </section>

      <footer aria-label="Footer">
        <UltraProfessionalFooter />
      </footer>
    </>
  );
}

