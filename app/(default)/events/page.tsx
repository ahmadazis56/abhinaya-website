import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Abhinaya Indo Group",
  description: "Stay updated with our latest events, workshops, and seminars.",
};

async function getEvents() {
  try {
    // For static build, return empty array
    // In production, this will fetch from API
    return []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function Events() {
  const events = await getEvents()
  
  console.log('Events data:', events)
  console.log('Events length:', events.length)

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Upcoming Events
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Transform Your Future
              <span className="block text-3xl md:text-4xl font-normal mt-2 text-white/90">
                Join Our Premium Events & Workshops
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Connect with industry leaders, gain cutting-edge insights, and accelerate your professional growth
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Events Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {events.length === 0 ? (
          /* No Events State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belum Ada Events</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Saat ini belum ada events yang tersedia. Events akan segera ditambahkan oleh tim kami. 
              Silakan cek kembali beberapa waktu lagi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6285646603602"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hubungi Kami
              </a>
              <a
                href="/"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0e6d7c] font-semibold rounded-lg border border-[#0e6d7c] hover:bg-gray-50 transition-all duration-300"
              >
                Kembali ke Beranda
              </a>
            </div>
          </div>
        ) : (
          /* Events Grid */
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event: any, index: number) => (
              <div 
                key={event.id} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#0e6d7c]/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Event Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] text-white">
                    Event
                  </span>
                </div>

                {/* Event Image */}
                {event.image && (
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}
                
                {/* Event Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0e6d7c] transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    {event.date && (
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-3 text-[#14aecf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/6285646603602"
                    className="block w-full text-center bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Register Now
                    <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {events.length === 0 ? 'Ingin Membuat Event?' : "Can't Find What You're Looking For?"}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {events.length === 0 
                ? 'Kami siap membantu membuat event khusus sesuai kebutuhan Anda. Hubungi kami untuk konsultasi.'
                : 'We organize custom events and workshops tailored to your specific needs. Get in touch with us to create your perfect event.'
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6285646603602"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0e6d7c] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
