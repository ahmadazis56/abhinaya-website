'use client'

import { useState, useEffect } from 'react'

interface Flyer {
  id: number
  title: string
  description?: string
  image: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function FlyersSection() {
  const [flyers, setFlyers] = useState<Flyer[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetchFlyers()
  }, [])

  const fetchFlyers = async () => {
    try {
      const response = await fetch('/api/flyers')
      if (response.ok) {
        const data = await response.json()
        setFlyers(data)
      }
    } catch (error) {
      console.error('Error fetching flyers:', error)
    } finally {
      setLoading(false)
    }
  }

  const nextFlyer = () => {
    setCurrentIndex((prev) => (prev + 1) % flyers.length)
  }

  const prevFlyer = () => {
    setCurrentIndex((prev) => (prev - 1 + flyers.length) % flyers.length)
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">📰 Latest Flyers</h3>
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-purple-600"></div>
        </div>
      </div>
    )
  }

  if (flyers.length === 0) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">📰 Latest Flyers</h3>
        <div className="text-center py-16">
          <div className="text-gray-400 text-8xl mb-6">📄</div>
          <p className="text-gray-600 text-lg">No flyers available</p>
          <p className="text-gray-500 text-sm mt-2">Check back later for updates</p>
        </div>
      </div>
    )
  }

  const currentFlyer = flyers[currentIndex]

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900">📰 Latest Flyers</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {currentIndex + 1} of {flyers.length}
          </span>
        </div>
      </div>

      {/* Main Flyer Display */}
      <div className="relative">
        {/* Navigation Buttons */}
        {flyers.length > 1 && (
          <>
            <button
              onClick={prevFlyer}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Previous flyer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextFlyer}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Next flyer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Flyer Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Flyer Image - Large Display */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] bg-gray-100">
            {currentFlyer.image && (
              <img
                src={currentFlyer.image}
                alt={currentFlyer.title}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`inline-flex items-center px-3 py-1 text-sm font-bold rounded-full shadow-lg ${
                currentFlyer.isActive 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-500 text-white'
              }`}>
                {currentFlyer.isActive ? '✓ Active' : '○ Draft'}
              </span>
            </div>

            {/* Download Button */}
            <div className="absolute bottom-4 right-4">
              <a
                href={currentFlyer.image}
                download={currentFlyer.title}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                title="Download flyer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Flyer Content */}
          <div className="p-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">{currentFlyer.title}</h4>
            {currentFlyer.description && (
              <p className="text-gray-600 text-base leading-relaxed mb-4">{currentFlyer.description}</p>
            )}
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500">
                📅 {new Date(currentFlyer.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                  currentFlyer.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {currentFlyer.isActive ? 'Published' : 'Draft'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {flyers.length > 1 && (
        <div className="mt-8">
          <div className="flex gap-3 justify-center overflow-x-auto pb-2">
            {flyers.map((flyer, index) => (
              <button
                key={flyer.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 transition-all ${
                  index === currentIndex 
                    ? 'ring-4 ring-purple-500 ring-offset-2 scale-110' 
                    : 'hover:scale-105'
                }`}
              >
                <div className="relative w-20 h-24 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  {flyer.image && (
                    <img
                      src={flyer.image}
                      alt={flyer.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-purple-600/20"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
