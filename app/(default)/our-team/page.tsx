export const metadata = {
  title: "Our Team - Abhinaya Indo Group",
  description: "Meet the talented team behind Abhinaya Indo Group.",
};

export default function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Team Management",
      role: "Leadership",
      description: "Strategic vision and company direction",
    },
    {
      id: 2,
      name: "Abhinaya Techno Team",
      role: "Technology",
      description: "Expert developers and tech architects",
    },
    {
      id: 3,
      name: "Abhinaya Creative Team",
      role: "Design & Marketing",
      description: "Creative designers and marketing specialists",
    },
    {
      id: 4,
      name: "Abhinaya Publisher Team",
      role: "Publishing",
      description: "Editorial and publication experts",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="pb-4 font-nacelle text-4xl font-semibold text-gray-900 md:text-5xl">
            Our Team
          </h1>
          <p className="text-xl text-gray-700">
            Meet the talented professionals driving our success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-cyan-200 text-center"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500 mx-auto">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mb-2 text-sm font-semibold text-cyan-600">
                {member.role}
              </p>
              <p className="text-gray-700">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
