export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Submarine - Astra Honda Motor",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    },
    {
      id: 2,
      title: "Feeds - Folio",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=350&fit=crop",
    },
    {
      id: 3,
      title: "Event Incubator",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    },
    {
      id: 4,
      title: "Design Portfolio Poster",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-900 md:text-4xl">
            Portfolio
          </h2>
          <p className="text-gray-600">
            Showcasing our best work, innovation, and expertise across various
            projects that drive impact and success.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="rounded bg-cyan-500 px-8 py-3 font-semibold text-gray-900 transition hover:bg-cyan-600"
          >
            EXPLORE MORE
          </a>
        </div>
      </div>
    </section>
  );
}
