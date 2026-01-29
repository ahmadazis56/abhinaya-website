"use client";

import { useEffect, useState } from "react";

export default function SectionKlien() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const clients = [
    {
      id: 1,
      name: "Client 1",
      logo: "/images/CLIENT IT/20220719_103554_0000-removebg-preview.png",
    },
    {
      id: 2,
      name: "Astra",
      logo: "/images/CLIENT IT/astra.png",
    },
    {
      id: 3,
      name: "DMO Senggigi",
      logo: "/images/CLIENT IT/dmo senggigi.png",
    },
    {
      id: 4,
      name: "Joki Logo",
      logo: "/images/CLIENT IT/joki logo.png",
    },
    {
      id: 5,
      name: "Apotek Maya",
      logo: "/images/CLIENT IT/logo apotek maya (1).jpg",
    },
    {
      id: 6,
      name: "ATB",
      logo: "/images/CLIENT IT/logo atb.png",
    },
    {
      id: 7,
      name: "Elpshop",
      logo: "/images/CLIENT IT/logo elpshop.png",
    },
    {
      id: 8,
      name: "MSP",
      logo: "/images/CLIENT IT/logoMSP.png",
    },
    {
      id: 9,
      name: "Yayasan",
      logo: "/images/CLIENT IT/logo_yayasan1.png",
    },
    {
      id: 10,
      name: "MAN 3 Bantul",
      logo: "/images/CLIENT IT/man 3 bantul.png",
    },
    {
      id: 11,
      name: "MHD",
      logo: "/images/CLIENT IT/mhd.png",
    },
    {
      id: 12,
      name: "SHI",
      logo: "/images/CLIENT IT/shi.jpg",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="bg-white py-20 md:py-32">
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${clients.length * 11}rem));
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .marquee-container:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-900 md:text-4xl">
            Klien Kami
          </h2>
          <p className="text-lg text-gray-700">
          Kami bangga dapat melayani berbagai klien, menyediakan solusi inovatif yang disesuaikan dengan kebutuhan unik mereka dan membantu mendorong kesuksesan mereka.
          </p>
        </div>

        {/* Animated Logos Container */}
        <div className="relative marquee-container overflow-hidden rounded-lg py-12">
          <div className="animate-scroll-left flex gap-16">
            {isMounted &&
              duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex h-28 w-40 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 p-4 shadow-md transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
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