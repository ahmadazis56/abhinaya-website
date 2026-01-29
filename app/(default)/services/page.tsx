export const metadata = {
  title: "Services - Abhinaya Indo Group",
  description: "Explore our comprehensive services in IT solutions, creative services, and scientific publishing.",
};

export default function Services() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="pb-4 font-nacelle text-4xl font-semibold text-gray-900 md:text-5xl">
            Our Services
          </h1>
          <p className="mb-12 text-xl text-gray-700">
            We offer innovative IT solutions, creative branding, and scientific publishing services tailored to meet your unique business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Abhinaya Techno */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-cyan-200">
            <svg
              className="mb-4 h-12 w-12 fill-cyan-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
            </svg>
            <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-900">
              Abhinaya Techno
            </h3>
            <p className="text-gray-700">
              We provide innovative IT solutions, including web and mobile app development, business management systems, and AI-powered digital transformation to help your business grow.
            </p>
          </div>

          {/* Abhinaya Creative */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-cyan-200">
            <svg
              className="mb-4 h-12 w-12 fill-cyan-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
              <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
            </svg>
            <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-900">
              Abhinaya Creative
            </h3>
            <p className="text-gray-700">
              Elevate your brand with our expert services in branding, graphic design, content creation, and digital marketing strategies tailored to make a lasting impact.
            </p>
          </div>

          {/* Abhinaya Publisher */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-cyan-200">
            <svg
              className="mb-4 h-12 w-12 fill-cyan-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
              <path
                fillOpacity=".48"
                d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
              />
            </svg>
            <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-900">
              Abhinaya Publisher
            </h3>
            <p className="text-gray-700">
              Publish high-quality scientific journals with us, supported by rigorous peer review, global indexing, and international collaborations to enhance research visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
