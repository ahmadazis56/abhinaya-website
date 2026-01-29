"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function ImpactMap() {
  const countries = [
    { name: "Indonesia", flag: "🇮🇩", description: "Headquarters" },
    { name: "China", flag: "🇨🇳", description: "Partners" },
    { name: "India", flag: "🇮🇳", description: "Collaboration" },
    { name: "United States", flag: "🇺🇸", description: "Global Network" },
    { name: "Malaysia", flag: "🇲🇾", description: "Southeast Asia" },
    { name: "Philippines", flag: "🇵🇭", description: "Partners" },
    { name: "Thailand", flag: "🇹🇭", description: "Collaboration" },
    { name: "Vietnam", flag: "🇻🇳", description: "Network" },
    { name: "Singapore", flag: "🇸🇬", description: "Hub" },
    { name: "Japan", flag: "🇯🇵", description: "Partners" },
    { name: "South Korea", flag: "🇰🇷", description: "Collaboration" },
    { name: "Australia", flag: "🇦🇺", description: "Regional" },
    { name: "Germany", flag: "🇩🇪", description: "Europe" },
    { name: "United Kingdom", flag: "🇬🇧", description: "Europe" },
    { name: "France", flag: "🇫🇷", description: "Europe" },
    { name: "United Arab Emirates", flag: "🇦🇪", description: "Middle East" },
  ];

  const impactedCountries = new Set(countries.map(c => c.name));

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-nacelle text-4xl font-semibold text-gray-900 md:text-5xl mb-4">
            Abhinaya Global Impact
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our reach extends across continents with partnerships, collaborations, and authors from 16+ countries. Abhinaya Publisher connects global researchers and creators.
          </p>
        </div>

        {/* Main Impact Grid */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          {/* World Map Visualization */}
          <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 p-8 md:p-12">
            <ComposableMap
              projectionConfig={{
                scale: 155,
                rotation: [-11, 0, 0],
              }}
              width={800}
              height={400}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isImpacted = impactedCountries.has(geo.properties.name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isImpacted ? "#16a34a" : "#E9EDF1"}
                        stroke="#D6D6DA"
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

          {/* Countries Grid */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Our Presence in {countries.length}+ Countries
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {countries.map((country, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 text-center hover:shadow-lg hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 border border-cyan-100 hover:border-cyan-300 cursor-pointer"
                >
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {country.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {country.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl font-bold text-cyan-600 mb-2">16+</div>
            <h4 className="font-semibold text-gray-900 mb-2">Countries Reached</h4>
            <p className="text-gray-600 text-sm">
              Spanning across Asia, Americas, Europe, and Middle East
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl font-bold text-cyan-600 mb-2">500+</div>
            <h4 className="font-semibold text-gray-900 mb-2">Global Authors</h4>
            <p className="text-gray-600 text-sm">
              Contributing researchers and creative professionals
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <div className="text-5xl font-bold text-cyan-600 mb-2">1000+</div>
            <h4 className="font-semibold text-gray-900 mb-2">Published Works</h4>
            <p className="text-gray-600 text-sm">
              Scientific journals and creative publications globally
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join our global network of creators and researchers
          </p>
          <a
            href="https://wa.me/6285646603602"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
}
