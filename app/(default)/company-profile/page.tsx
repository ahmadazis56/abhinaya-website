export const metadata = {
  title: "Company Profile - Abhinaya Indo Group",
  description: "Learn more about Abhinaya Indo Group, our mission, vision, and values.",
};

export default function CompanyProfile() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="pb-4 font-nacelle text-4xl font-semibold text-gray-900 md:text-5xl">
            Company Profile
          </h1>
          <p className="text-xl text-gray-700">
            Discover who we are and what drives our success
          </p>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-900">
              About Us
            </h2>
            <p className="mb-4 text-gray-700">
              CV. Abhinaya Indo Group is a leading company specializing in innovative IT solutions, creative services, and scientific publishing. With three main divisions—Abhinaya Techno, Abhinaya Creative, and Abhinaya Publisher—we are committed to delivering excellence in every project.
            </p>
            <p className="text-gray-700">
              Our team of experienced professionals is dedicated to transforming businesses and ideas into reality through cutting-edge technology and creative expertise.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mb-4 text-gray-700">
              To provide innovative, reliable, and sustainable solutions that help businesses and organizations achieve their goals through technology, creativity, and scientific excellence.
            </p>
            <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To be a trusted partner in digital transformation and innovation, recognized for our excellence, integrity, and commitment to client success.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="mb-6 font-nacelle text-2xl font-semibold text-gray-900">
            Core Values
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-700">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Integrity</h3>
              <p className="text-gray-700">
                We conduct business with honesty, transparency, and accountability in all our dealings.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest quality in every project, service, and interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
