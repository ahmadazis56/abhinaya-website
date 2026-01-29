"use client";

import ReactCountryFlag from "react-country-flag";
import { authorCountriesData, getDivisions } from "@/data/authorCountries";
import { useState } from "react";

export default function AuthorCountryList() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countWithTechno = authorCountriesData.filter((c) => c.techno).length;
  const countWithPublisher = authorCountriesData.filter((c) => c.publisher).length;
  const countWithCreative = authorCountriesData.filter((c) => c.creative).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">
          Abhinaya Global Contributors ({authorCountriesData.length} countries)
        </h3>
        <p className="text-sm text-blue-800">
          Hover over a country to see which Abhinaya divisions contribute
        </p>
      </div>

      {/* Country Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {authorCountriesData.map((country) => {
          const divisions = getDivisions(country);
          
          return (
            <div
              key={country.iso2}
              onMouseEnter={() => setSelectedCountry(country.iso2)}
              onMouseLeave={() => setSelectedCountry(null)}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-cyan-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="text-4xl">
                  <ReactCountryFlag
                    countryCode={country.iso2}
                    svg
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "0.5rem",
                      boxShadow:
                        selectedCountry === country.iso2
                          ? "0 0 0 2px #fbbf24"
                          : "none",
                    }}
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-xs sm:text-sm text-blue-900 leading-tight">
                    {country.name}
                  </h4>
                  <div className="flex gap-1 justify-center mt-1">
                    {country.techno && (
                      <span className="inline-block w-2 h-2 bg-blue-900 rounded-full"></span>
                    )}
                    {country.publisher && (
                      <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                    )}
                    {country.creative && (
                      <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full"></span>
                    )}
                  </div>
                  {selectedCountry === country.iso2 && divisions.length > 0 && (
                    <p className="text-xs text-gray-600 mt-2 font-medium leading-tight">
                      {divisions.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 p-6 text-white text-center">
          <div className="text-4xl font-bold text-blue-100 mb-2">
            {countWithTechno}
          </div>
          <p className="text-blue-200 text-sm">Techno Division</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-400 p-6 text-blue-900 text-center">
          <div className="text-4xl font-bold text-blue-900 mb-2">
            {countWithPublisher}
          </div>
          <p className="text-blue-800 text-sm">Publisher Division</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-500 p-6 text-white text-center">
          <div className="text-4xl font-bold text-cyan-100 mb-2">
            {countWithCreative}
          </div>
          <p className="text-cyan-100 text-sm">Creative Division</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 text-white text-center">
          <div className="text-4xl font-bold text-gray-200 mb-2">
            {authorCountriesData.length}
          </div>
          <p className="text-gray-300 text-sm">Total Countries</p>
        </div>
      </div>
    </div>
  );
}
