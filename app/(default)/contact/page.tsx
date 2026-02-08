import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Abhinaya Indo Group. Operational and official addresses, email, phone, and WhatsApp.",
};

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Contact Us
              <span className="block text-3xl md:text-4xl font-normal mt-2 text-white/90">
                Let's Build Something Amazing Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Reach out for partnerships, projects, or general inquiries. We're here to help transform your ideas into reality.
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

      {/* Contact Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Operational Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0e6d7c] to-[#14aecf] rounded-xl flex items-center justify-center text-white mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Operational Address</h2>
              </div>
              <address className="not-italic text-gray-600 leading-relaxed">
                Jl Telabah Reban Jl. Krakatau, Midang<br />
                Kec. Gunungsari<br />
                Kabupaten Lombok Barat, Nusa Tenggara Barat 83351
              </address>
            </div>

            {/* Official Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0e6d7c] to-[#14aecf] rounded-xl flex items-center justify-center text-white mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Official Address</h2>
              </div>
              <address className="not-italic text-gray-600 leading-relaxed">
                Jl. Gunung Tambora No. 1<br />
                Dasan Agung Baru, Selaparang<br />
                Mataram City, West Nusa Tenggara
              </address>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-[#14aecf]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#0e6d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500">Email</span>
                    <a
                      href="mailto:abhinayaindogroup@gmail.com"
                      className="text-[#0e6d7c] hover:text-[#0e6d7c]/80 font-semibold transition-colors duration-200"
                    >
                      abhinayaindogroup@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-[#14aecf]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#0e6d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500">Phone</span>
                    <a href="tel:+6285646603602" className="text-[#0e6d7c] hover:text-[#0e6d7c]/80 font-semibold transition-colors duration-200">
                      +62 856-4660-3602
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-[#14aecf]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#0e6d7c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500">WhatsApp</span>
                    <a
                      href="https://wa.me/6285646603602"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0e6d7c] hover:text-[#0e6d7c]/80 font-semibold transition-colors duration-200"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] text-white">
                <h2 className="text-2xl font-bold flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Find Us on Map
                </h2>
                <p className="text-white/90 mt-2">Visit our operational office at GOR Tenis Meja Bintang Lombok</p>
              </div>
              <div className="p-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5121.073102555834!2d116.0739845760864!3d-8.613407987510888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbff0abf65451%3A0xd3a22200333d2b6c!2sGOR%20TENIS%20MEJA%20BINTANG%20LOMBOK!5e1!3m2!1sid!2sid!4v1770082992895!5m2!1sid!2sid" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-white/90 mb-6">
                Let's discuss how we can help transform your business with our comprehensive solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6285646603602"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0e6d7c] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start Conversation
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
