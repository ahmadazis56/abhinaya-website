import React from 'react';
import Image from 'next/image';

interface SponsorItem {
  id: number;
  name: string;
  logo: string;
  link?: string;
}

// Sample sponsor data
const sponsors: SponsorItem[] = [
  {
    id: 1,
    name: "Tech Innovation Lab",
    logo: "/images/1.png",
    link: "#"
  },
  {
    id: 2,
    name: "Digital Creative Agency",
    logo: "/images/2.png",
    link: "#"
  }
];

const SponsorSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Ultra Professional Sponsor Image */}
      <div className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
        {/* Premium Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] backdrop-blur-sm px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Partner Spotlight</h3>
                <p className="text-white/90 text-sm">Featured Collaboration</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-white/20 rounded-full">
              <span className="text-white text-xs font-semibold">Premium</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Image Container */}
        <div className="relative w-full h-[600px] mt-16 p-6">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src="/images/flayer_1.jpeg"
              alt="Featured Partner"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        {/* Hover Accent Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0e6d7c] via-[#14aecf] to-[#0e6d7c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default SponsorSection;
