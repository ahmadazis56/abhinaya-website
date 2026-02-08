import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery - Abhinaya Indo Group",
  description: "Explore our premium portfolio of innovative projects, creative solutions, and transformational work across industries.",
};

async function getGallery() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/gallery`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      console.log('Gallery API not available, using fallback data')
      return []
    }
    
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.log('Gallery API error, using fallback data:', error)
    return []
  }
}

export default async function Gallery() {
  const galleryItems = await getGallery()
  
  // Fallback static items if no data from API
  const staticItems = [
    {
      id: 1,
      title: "Digital Transformation",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=entropy",
      size: "large",
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1661288537646-63eb4b3e7519?w=800&h=900&fit=crop&crop=entropy",
      size: "tall",
    },
    {
      id: 3,
      title: "Mobile Application",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&crop=entropy",
      size: "wide",
    },
    {
      id: 4,
      title: "Scientific Publishing",
      category: "Publisher",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&crop=entropy",
      size: "square",
    },
  ]

  const items = galleryItems.length > 0 ? galleryItems : staticItems

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2';
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-1 md:col-span-2';
      case 'square':
      default:
        return '';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'from-blue-500/90 to-cyan-500/90';
      case 'Creative':
        return 'from-purple-500/90 to-pink-500/90';
      case 'Publisher':
        return 'from-green-500/90 to-emerald-500/90';
      default:
        return 'from-gray-500/90 to-gray-600/90';
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-cyan-700 text-sm font-medium">Premium Portfolio</span>
          </div>
          
          <h1 className="pb-6 font-nacelle text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-transparent">
              Our Gallery
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore our premium portfolio of innovative projects, creative solutions, and transformational work across industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Technology', 'Creative', 'Publisher'].map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'All'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {items.map((item: any) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${getSizeClasses(item.size)}`}
            >
              {/* Premium Image with Next.js */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Sophisticated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-medium rounded-full backdrop-blur-sm`}>
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
                
                {/* Subtle Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span>Load More Projects</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
