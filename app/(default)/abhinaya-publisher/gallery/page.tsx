import React from 'react';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery - Abhinaya Publisher',
  description: 'Explore our scientific publications, journals, and academic activities',
};

// Sample images for Abhinaya Publisher
const publisherImages = [
  '/images/publisher/pub-1.jpg',
  '/images/publisher/pub-2.jpg',
  '/images/publisher/pub-3.jpg',
  '/images/publisher/pub-4.jpg',
  '/images/publisher/pub-5.jpg',
  '/images/publisher/pub-6.jpg',
  '/images/publisher/pub-7.jpg',
  '/images/publisher/pub-8.jpg',
];

export default function PublisherGallery() {
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
            <Link href="/abhinaya-publisher" className="text-gray-500 hover:text-gray-700">
              Abhinaya Publisher
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Gallery</span>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Abhinaya Publisher Gallery
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Explore our scientific publications, academic journals, and research activities
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Component */}
      <Gallery
        title="Publications & Academic Activities"
        description="From scientific journals to academic conferences, discover our publishing journey and research contributions"
        images={publisherImages}
        category="Publications"
      />

      {/* Additional Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scientific Journals</h3>
              <p className="text-gray-600">Academic journals and scientific publications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conferences</h3>
              <p className="text-gray-600">Academic conferences and research presentations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Papers</h3>
              <p className="text-gray-600">Scientific research and academic papers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
