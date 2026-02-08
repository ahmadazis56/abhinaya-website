import SectionBerita from "@/components/section-berita";

export const metadata = {
  title: "News - Abhinaya Indo Group",
  description: "Latest news and updates from Abhinaya Indo Group",
};

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest News
            </h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest news and announcements from Abhinaya Indo Group
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <SectionBerita headlineCount={20} />
    </div>
  );
}
