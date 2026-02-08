export const metadata = {
  title: "Abhinaya Creative - Creative Branding & Design Solutions",
  description: "Leading creative agency specializing in branding, graphic design, content creation, and digital marketing strategies to elevate your brand presence.",
};

import Link from "next/link";
import Image from "next/image";
import GetStartedButton from "@/components/GetStartedButton";

export default function AbhinayaCreativePage() {
  const packages = [
    {
      name: "BASIC PRESENCE",
      price: "Rp 1.8 Juta",
      period: "per bulan",
      focus: "Menjaga kehadiran brand tetap aktif dan konsisten di media sosial.",
      features: [
        "Konten Feed Instagram: 12 konten (3 konten/minggu: 3 feed visual + 1 video)",
        "Video TikTok: 8 konten",
        "Instagram Story: 1–3 per hari (template story + update aktivitas harian brand)",
        "Perencanaan: Ide & perencanaan konten bulanan",
        "Copywriting: Caption dasar + penyesuaian tone brand",
        "Riset: Riset hashtag relevan",
        "Operasional: Penjadwalan & publikasi konten",
        "Revisi: 2 kali revisi minor"
      ],
      highlighted: false
    },
    {
      name: "GROWTH CONTENT",
      price: "Rp 2.5 Juta",
      period: "per bulan",
      focus: "Dirancang untuk meningkatkan interaksi audiens dan performa konten.",
      features: [
        "Konten Feed Instagram: 12 konten (3 konten/minggu: 2 feed visual + 1 video)",
        "Video TikTok: 12 konten",
        "Instagram Story: 2–4 per hari (template story + interaksi & aktivitas harian)",
        "Perencanaan: Ide konten yang relevan & engaging",
        "Copywriting: Caption & copywriting",
        "Riset: Riset hashtag",
        "Operasional: Penjadwalan, publikasi, & pengelolaan akun (posting)",
        "Revisi: 3 kali revisi minor",
        "Laporan: Laporan performa bulanan & evaluasi"
      ],
      highlighted: true
    },
    {
      name: "BRANDING & CONVERSION",
      price: "Rp 3 Juta",
      period: "per bulan",
      focus: "Mendukung penguatan brand sekaligus mendorong konversi.",
      features: [
        "Konten Feed Instagram: 12 konten (3 konten/minggu: 2 feed visual + 1 video)",
        "Video TikTok / Reels: 12 konten",
        "Instagram Story: 6 per hari (template story, aktivitas harian, dan interaksi)",
        "Perencanaan: Ide konten strategis & terarah",
        "Copywriting: Caption copywriting + CTA (Call to Action)",
        "Riset: Riset hashtag",
        "Operasional: Penjadwalan, publikasi, & pengelolaan akun (posting)",
        "Revisi: 3 kali revisi minor",
        "Laporan: Laporan performa bulanan & evaluasi"
      ],
      highlighted: false
    }
  ];

  const projects = [
    {
      title: "Astra Brand Project",
      category: "Brand Identity",
      description: "Complete brand identity design for Astra including logo, visual guidelines, and marketing materials",
      image: "/images/creative/astra.png"
    },
    {
      title: "Desain Poster Campaign",
      category: "Graphic Design",
      description: "Creative poster design project with modern aesthetics and impactful visual communication",
      image: "/images/creative/desain-poster.png"
    },
    {
      title: "Event Documentation",
      category: "Photography",
      description: "Professional event documentation capturing key moments and atmosphere with creative styling",
      image: "/images/creative/event-documentation.png"
    },
    {
      title: "Social Media Feeds",
      category: "Content Creation",
      description: "Creative social media content design including feeds, stories, and engagement materials",
      image: "/images/creative/feeds-folio.png"
    }
  ];

  const team = [
    {
      name: "Nova Fitriani S.I.Kom",
      position: "Creative",
      expertise: "Creative Design, Visual Content",
      image: "/images/Abhinaya Creative/nova.png"
    },
    {
      name: "Putri Awwalia Sukma", 
      position: "Creative",
      expertise: "Creative Design, Content Creation",
      image: "/images/Abhinaya Creative/Putri Awwalia Sukma.jpg"
    },
    {
      name: "Muhammad Faisal Syafrudin",
      position: "Creative",
      expertise: "Creative Design, Brand Strategy",
      image: "/images/Abhinaya Creative/Muhammad Faisal Syafrudin.jpg"
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='30 30 0 0 60 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Navigation Bar - Ultra Professional */}
        <div className="relative z-10">
          {/* Clean Glass Background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border-b border-white/10"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6">
            {/* Current Division Indicator */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-purple-300 text-sm font-medium">Currently viewing: Abhinaya Creative</span>
              </div>
            </div>

            {/* Division Cards Slider */}
            <div className="relative">
              {/* Cards Container */}
              <div className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide py-2">
                {/* Abhinaya Creative - Current */}
                <div className="flex-shrink-0 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 border border-purple-400/30">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center relative">
                        <Image
                          src="/images/2.png"
                          alt="Abhinaya Creative logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Abhinaya Creative</div>
                        <div className="text-purple-200 text-sm">Current Division</div>
                      </div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Abhinaya Publisher */}
                <a 
                  href="/abhinaya-publisher" 
                  className="flex-shrink-0 relative group block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-500 relative">
                        <Image
                          src="/images/3.png"
                          alt="Abhinaya Publisher logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg group-hover:text-red-300 transition-all duration-500">Abhinaya Publisher</div>
                        <div className="text-red-300 text-sm">Scientific Publishing</div>
                      </div>
                      <svg className="w-5 h-5 text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Abhinaya Techno */}
                <a 
                  href="/abhinaya-techno" 
                  className="flex-shrink-0 relative group block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-500 relative">
                        <Image
                          src="/images/1.png"
                          alt="Abhinaya Techno logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg group-hover:text-blue-300 transition-all duration-500">Abhinaya Techno</div>
                        <div className="text-blue-300 text-sm">IT Solutions & Technology</div>
                      </div>
                      <svg className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Explore More Text */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore our complete ecosystem of digital solutions
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[calc(90vh-80px)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Creative Branding & Design Solutions
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Abhinaya
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                Creative
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Elevate your brand with our expert services in branding, graphic design, 
              content creation, and digital marketing strategies tailored to make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Creative Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative solutions to transform your brand presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Branding & Identity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete brand identity design including logos, color schemes, and visual guidelines that define your unique market position.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic digital marketing campaigns including social media management, content marketing, and performance advertising.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional content creation including copywriting, visual content, video production, and multimedia storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-purple-700 text-sm font-medium">Social Media Management</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Packages & Pricelist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Dari konten jadi engagement! Kelola Socmed bisnismu bareng <strong>Abhinaya Creative</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${pkg.highlighted ? 'ring-2 ring-purple-500 ring-offset-4 transform scale-105' : ''}`}>
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
                      {pkg.focus}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">/{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <GetStartedButton 
                    text="Get Started"
                    messageKey="creative"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.highlighted 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Packages Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Add-on services to enhance your social media presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Paid Ads Management</h3>
                <span className="text-xl font-bold text-purple-600">Rp250.000-500.000</span>
              </div>
              <p className="text-gray-600 text-sm">Meta / TikTok per bulan</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Script Video Tambahan</h3>
                <span className="text-xl font-bold text-purple-600">Rp200.000</span>
              </div>
              <p className="text-gray-600 text-sm">Per video</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Campaign Proposal</h3>
                <span className="text-xl font-bold text-purple-600">Rp500.000-1.500.000</span>
              </div>
              <p className="text-gray-600 text-sm">Proposal & pitching campaign</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <div className="text-left">
                <div className="font-semibold">Contact us for more information:</div>
                <div className="text-sm opacity-90">Instagram: abhinaya.creative | WhatsApp: 085646603602</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Creative Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest creative projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Creative Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the creative minds behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center relative">
                {/* Animated Background Orb */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-1000 ease-out"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-xl group-hover:scale-125 transition-all duration-1000 ease-out delay-100"></div>
                </div>
                
                <div className="relative mb-6 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                  {/* Floating Ring Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-36 h-36 border-2 border-purple-200/20 rounded-full animate-pulse-slow"></div>
                    <div className="absolute w-40 h-40 border border-purple-300/10 rounded-full animate-pulse-slower"></div>
                  </div>
                  
                  {/* Avatar Container with 3D Effect */}
                  <div className="relative w-32 h-32 mx-auto transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 scale-110"></div>
                    
                    {/* Main Avatar */}
                    <div className="relative w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden">
                      {/* Team Member Photo */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Inner Ring */}
                      <div className="absolute inset-2 border-2 border-white/20 rounded-full"></div>
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Animated Bottom Accent */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse-slow"></div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full blur-sm"></div>
                </div>
                
                {/* Text Content with Animation */}
                <div className="space-y-2 animate-fade-in-up" style={{animationDelay: `${index * 150 + 200}ms`}}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transform transition-all duration-500 group-hover:scale-105">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2 transform transition-all duration-500 group-hover:scale-105">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 transform transition-all duration-500 group-hover:scale-105">
                    {member.expertise}
                  </p>
                </div>
                
                {/* Hover Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-100"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-200"></div>
                  <div className="absolute bottom-6 left-8 w-2.5 h-2.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-300"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our creative solutions can help transform your brand presence and make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/divisions"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View Other Divisions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
