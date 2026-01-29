"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// @ts-expect-error: ZoomableGroup type missing in some d.ts, but works in runtime
import { ZoomableGroup } from "react-simple-maps";
import { authorCountriesData, getCountryColor, getDivisions } from "@/data/authorCountries";
import { useState } from "react";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GeographyData {
  type: string;
  properties: Record<string, string>;
  rsmKey: string;
}


const AuthorDiversityMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredCountryName, setHoveredCountryName] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([0, 0]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 relative z-10">
          <h2 className="font-nacelle text-4xl font-semibold text-blue-900 md:text-5xl mb-3 md:mb-5 drop-shadow-lg">
            Abhinaya Global Impact Map
          </h2>
        </div>

        {/* Map Container */}
        <div className="w-full bg-gradient-to-b from-black to-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 relative z-0 pt-2 pb-2 md:pt-6 md:pb-6 flex flex-col">
            {/* Zoom Controls */}
            <div className="flex gap-2 absolute right-6 top-6 z-20">
              <button
                className="bg-white/80 hover:bg-blue-100 border border-blue-300 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition"
                onClick={() => setZoom((z) => Math.min(z + 0.4, 6))}
                aria-label="Zoom In"
              >
                +
              </button>
              <button
                className="bg-white/80 hover:bg-blue-100 border border-blue-300 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow transition"
                onClick={() => setZoom((z) => Math.max(z - 0.4, 1))}
                aria-label="Zoom Out"
              >
                –
              </button>
            </div>
            <div style={{ width: "100%", minHeight: "440px", position: "relative" }}>
              <ComposableMap projectionConfig={{ scale: 160 }}>
                <ZoomableGroup
                  zoom={zoom}
                  center={center}
                  onMoveEnd={({ zoom, coordinates }: { zoom: number; coordinates: [number, number] }) => {
                    setZoom(zoom);
                    setCenter(coordinates);
                  }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: GeographyData[] }) =>
                      geographies.map((geo: GeographyData) => {
                        const countryData = authorCountriesData.find(
                          (c) => c.iso3 === geo.properties.ISO_A3
                        );
                        const isActive = !!countryData;
                        const originalColor =
                          isActive && countryData
                            ? getCountryColor(countryData)
                            : "#D1D5DB";

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={originalColor}
                            stroke="#ffffff"
                            strokeWidth={1}
                            style={{
                              default: {
                                outline: "none",
                                cursor: isActive ? "pointer" : "default",
                                transition: "fill 0.2s ease",
                              } as React.CSSProperties,
                              hover: {
                                outline: "none",
                                fill: "#fbbf24",
                                cursor: isActive ? "pointer" : "default",
                                transition: "fill 0.2s ease",
                              } as React.CSSProperties,
                              pressed: {
                                outline: "none",
                                fill: "#fbbf24",
                              } as React.CSSProperties,
                            }}
                            onMouseEnter={() => {
                              setHoveredCountry(geo.properties.ISO_A3);
                              setHoveredCountryName(geo.properties.name);
                            }}
                            onMouseLeave={() => {
                              setHoveredCountry(null);
                              setHoveredCountryName(null);
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            </div>

          {/* Hovered Country Info */}
          {hoveredCountryName && hoveredCountry && (
            <div className="px-6 py-4 bg-yellow-50 border-t-2 border-yellow-400">
              <div className="flex items-center justify-center gap-2">
                <span className="text-base font-bold text-yellow-900">{hoveredCountryName}</span>
                {(() => {
                  const country = authorCountriesData.find((c) => c.iso3 === hoveredCountry);
                  if (!country) return null;
                  const divisions = getDivisions(country);
                  if (divisions.length === 0) return null;
                  return (
                    <span className="text-sm text-yellow-700 ml-2">
                      → {divisions.join(" • ")}
                    </span>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="px-6 py-6 bg-gray-50 border-t border-gray-200 mt-4">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4 text-center">
              Division Legend
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                <div className="w-5 h-5 rounded" style={{ backgroundColor: '#1E3A8A' }}></div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Techno</p>
                  <p className="text-xs text-gray-600">Technology</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-yellow-200">
                <div className="w-5 h-5 rounded" style={{ backgroundColor: '#FACC15' }}></div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Publisher</p>
                  <p className="text-xs text-gray-600">Publishing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-cyan-200">
                <div className="w-5 h-5 rounded" style={{ backgroundColor: '#06B6D4' }}></div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Creative</p>
                  <p className="text-xs text-gray-600">Design</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="w-5 h-5 rounded" style={{ backgroundColor: '#D1D5DB' }}></div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Inactive</p>
                  <p className="text-xs text-gray-600">No Activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorDiversityMap;
