export const metadata = {
  title: "Events - Abhinaya Indo Group",
  description: "Stay updated with our latest events, workshops, and seminars.",
};

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Digital Transformation Workshop",
      date: "February 15, 2026",
      location: "Jakarta",
      description: "Learn about the latest trends in digital transformation and how to implement them in your business.",
    },
    {
      id: 2,
      title: "Creative Design Masterclass",
      date: "March 1, 2026",
      location: "Bali",
      description: "Join our expert designers in this intensive masterclass on modern creative design principles.",
    },
    {
      id: 3,
      title: "Scientific Publishing Seminar",
      date: "March 20, 2026",
      location: "Surabaya",
      description: "Discover best practices for publishing high-quality scientific research journals.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="pb-4 font-nacelle text-4xl font-semibold text-gray-900 md:text-5xl">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-700">
            Join us for workshops, seminars, and networking events
          </p>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
          {events.map((event) => (
            <div key={event.id} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-cyan-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 font-nacelle text-2xl font-semibold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="mb-4 text-gray-700">
                    {event.description}
                  </p>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href="https://wa.me/6285646603602"
                    className="inline-block rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-gray-900 transition hover:bg-cyan-600"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
