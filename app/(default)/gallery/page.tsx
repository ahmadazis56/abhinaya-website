export const metadata = {
  title: "Gallery - Abhinaya Indo Group",
  description: "Browse our portfolio gallery of projects and work.",
};

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Project 1",
      image: "https://images.unsplash.com/photo-1661288537646-63eb4b3e7519?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Project 2",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Project 3",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Project 4",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Project 5",
      image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Project 6",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="pb-4 font-nacelle text-4xl font-semibold text-gray-900 md:text-5xl">
            Gallery
          </h1>
          <p className="text-xl text-gray-700">
            Explore our portfolio of innovative projects and creative work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl shadow-lg transition hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
