import AbhinayaImpactMap from "@/components/author-diversity-map";
import AuthorCountryList from "@/components/author-country-list";

export default function AbhinayaImpactSection() {
  return (
    <>
      <AbhinayaImpactMap />
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AuthorCountryList />
        </div>
      </section>
    </>
  );
}
