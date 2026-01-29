"use client";

import { useEffect, useState } from "react";

export default function SectionMitra() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: "Logo",
      logo: "/images/LOGO MITRA PERGURUAN TINGGI/logo.png",
    },
    {
      id: 2,
      name: "Unizar",
      logo: "/images/LOGO MITRA PERGURUAN TINGGI/unizar.png",
    },
    {
      id: 3,
      name: "UNRAM",
      logo: "/images/LOGO MITRA PERGURUAN TINGGI/UNRAM-LOGO-FIX-STATUTA-.png",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${partners.length * 11}rem));
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }
        .marquee-container:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-900 md:text-4xl">
            Mitra Kami
          </h2>
          <p className="text-lg text-gray-700">
          Kami menjalin kemitraan strategis dengan berbagai institusi untuk mendorong inovasi dan mencapai tujuan bersama.
          </p>
        </div>

        {/* Animated Logos Container */}
        <div className="relative marquee-container overflow-hidden rounded-lg py-12">
          <div className="animate-scroll-left flex gap-16">
            {isMounted &&
              duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex h-28 w-40 flex-shrink-0 items-center justify-center rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}