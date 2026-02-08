import React from 'react';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery - Abhinaya Creative',
  description: 'Explore our creative projects, branding designs, and marketing campaigns',
};

// Sample images for Abhinaya Creative
const creativeImages = [
  '/images/creative/design-1.jpg',
  '/images/creative/design-2.jpg',
  '/images/creative/design-3.jpg',
  '/images/creative/design-4.jpg',
  '/images/creative/design-5.jpg',
  '/images/creative/design-6.jpg',
  '/images/creative/design-7.jpg',
  '/images/creative/design-8.jpg',
];

export default function CreativeGallery() {
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
            <Link href="/abhinaya-creative" className="text-gray-500 hover:text-gray-700">
              Abhinaya Creative
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Gallery</span>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Abhinaya Creative Gallery
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Explore our creative designs, branding projects, and marketing campaigns
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Component */}
      <Gallery
        title="Creative Projects & Designs"
        description="From logo design to marketing campaigns, discover our creative journey and artistic solutions"
        images={creativeImages}
        category="Creative"
      />

      {/* Additional Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Branding Design</h3>
              <p className="text-gray-600">Logo design and brand identity development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Campaigns</h3>
              <p className="text-gray-600">Digital marketing and promotional campaigns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">User interface and user experience design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
