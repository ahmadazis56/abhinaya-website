import React from 'react';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery - Abhinaya Techno',
  description: 'Explore our IT solutions and technology activities, projects, and innovations',
};

// Sample images for Abhinaya Techno
const technoImages = [
  '/images/techno/tech-1.jpg',
  '/images/techno/tech-2.jpg',
  '/images/techno/tech-3.jpg',
  '/images/techno/tech-4.jpg',
  '/images/techno/tech-5.jpg',
  '/images/techno/tech-6.jpg',
  '/images/techno/tech-7.jpg',
  '/images/techno/tech-8.jpg',
];

export default function TechnoGallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/abhinaya-techno" className="text-gray-500 hover:text-gray-700">
              Abhinaya Techno
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Gallery</span>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Abhinaya Techno Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our innovative IT solutions, cutting-edge technology projects, and team activities
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Component */}
      <Gallery
        title="Technology Activities & Projects"
        description="From web development to AI solutions, explore our technical journey and innovations"
        images={technoImages}
        category="Technology"
      />

      {/* Additional Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">Custom web applications and responsive websites</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-600">iOS and Android application development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Solutions</h3>
              <p className="text-gray-600">Artificial intelligence and machine learning projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
