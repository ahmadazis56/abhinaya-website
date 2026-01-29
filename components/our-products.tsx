"use client";

import { useState } from "react";

export default function OurProducts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Abhinaya Farma",
      category: "ecommerce",
      description: "E-commerce Platform",
      screenshot: "https://images.unsplash.com/photo-1661288537646-63eb4b3e7519?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Abhinaya Journal",
      category: "webapp",
      description: "Scientific Journal Platform",
      screenshot: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Abhinaya CMS",
      category: "webapp",
      description: "Content Management System",
      screenshot: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Enterprise Portal",
      category: "enterprise",
      description: "Business Management System",
      screenshot: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Mobile App",
      category: "webapp",
      description: "Cross-platform Mobile Solution",
      screenshot: "https://images.unsplash.com/photo-1585864299861-351f8f6a0009?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Digital Marketing Suite",
      category: "enterprise",
      description: "Marketing Automation Platform",
      screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
  ];

  const categories = [
    { id: "all", label: "View All" },
    { id: "webapp", label: "Web Apps" },
    { id: "ecommerce", label: "eCommerce" },
    { id: "enterprise", label: "Enterprise" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-900 md:text-4xl">
           our Products
          </h2>
          <p className="text-lg text-gray-600">
            We provide tech-first solutions that empower decision-makers to build
            healthier and happier workspaces from anywhere in the world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                activeCategory === category.id
                  ? "bg-cyan-500 text-gray-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 transition duration-300"
            >
              {/* Product Card Container */}
              <div className="relative h-64 overflow-hidden">
                {/* Background Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>

                {/* Screenshot Image - Always visible */}
                <img
                  src={product.screenshot}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-gray-950/80 via-transparent to-transparent p-6 transition duration-300 group-hover:opacity-0">
                  <div className="text-center">
                    <h3 className="mb-2 font-nacelle text-xl font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-300">{product.description}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-white">View Product</p>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-300 bg-gray-50 px-6 py-4 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-cyan-600">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
