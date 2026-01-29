"use client";

import { useEffect, useState } from "react";

export default function UniversityPartner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const universities = [
    {
      id: 1,
      name: "UNIQHBA",
      logo: "https://images.unsplash.com/photo-1557821552-17105176677c?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "University 2",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "University 3",
      logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "University 4",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "University 5",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop",
    },
  ];

  // Duplicate untuk seamless loop
  const duplicatedUniversities = [...universities, ...universities];

  return (
    <section className="bg-blue-50 py-20 md:py-32">
      <style>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
        }
        .marquee-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-900 md:text-4xl">
            Our University Partner
          </h2>
          <p className="text-gray-700">
            We collaborate with leading universities to foster innovation,
            research, and talent development, creating opportunities for growth
            and excellence.
          </p>
        </div>

        {/* Animated Logos Container */}
        <div className="relative mb-12 overflow-hidden rounded-lg bg-white py-12 shadow-sm">
          <div className="marquee-container overflow-hidden">
            <div className="animate-scroll-right flex gap-8">
              {isMounted &&
                duplicatedUniversities.map((uni, index) => (
                  <div
                    key={`${uni.id}-${index}`}
                    className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 p-4"
                  >
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
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
