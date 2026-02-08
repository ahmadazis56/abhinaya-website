export const metadata = {
  title: "Abhinaya Techno - Digital Technology & Creative Solutions",
  description: "Digital Solutions That Build Your Future - Leading IT solutions provider specializing in web development, mobile apps, business systems, and AI-powered digital transformation.",
};

import Link from "next/link";
import Image from "next/image";
import GetStartedButton from "@/components/GetStartedButton";

export default function AbhinayaTechnoPage() {
  const packages = [
    {
      name: "Basic Digital",
      price: "Rp 3,5 Juta",
      period: "per project",
      features: [
        "Company profile website / landing page",
        "Desain UI/UX dasar",
        "Mobile responsive",
        "Domain & hosting setup (jika tersedia)",
        "Form kontak",
        "SEO dasar",
        "1 bulan support teknis"
      ],
      highlighted: false
    },
    {
      name: "Professional Digital",
      price: "Rp 5 Juta",
      period: "per project",
      features: [
        "Website / sistem informasi sederhana",
        "UI/UX custom design",
        "Mobile responsive",
        "SEO on-page",
        "Integrasi WhatsApp Business",
        "CMS / admin panel",
        "Keamanan dasar (SSL + security layer)",
        "Training admin",
        "6 bulan support teknis"
      ],
      highlighted: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Sistem informasi enterprise",
        "Web aplikasi",
        "Mobile app (Android/iOS)",
        "ERP mini system",
        "POS system",
        "Portal berita",
        "E-Government system",
        "AI-based system",
        "Dashboard big data",
        "API integration",
        "Cloud deployment",
        "Multi-role user system",
        "Maintenance kontrak tahunan",
        "Dedicated developer team"
      ],
      highlighted: false
    }
  ];

  const projects = [
    {
      title: "Sipeta Lombok Utara",
      category: "Tourism Platform",
      description: "Comprehensive tourism platform for North Lombok with destination management and booking system",
      image: "/images/abhinaya-techno/sipeta.png",
      url: "https://sipetalombokutara.id"
    },
    {
      title: "Tiuloka Lombok Holiday",
      category: "Travel Platform",
      description: "Holiday and travel management platform with integrated booking and destination discovery features",
      image: "/images/abhinaya-techno/tiuloka.png",
      url: "https://tiulokalombokholiday.com"
    },
    {
      title: "Kammipusat",
      category: "Business Platform",
      description: "Comprehensive business management platform with integrated workflow and reporting systems",
      image: "/images/abhinaya-techno/kammi.png",
      url: "https://kammipusat.id/"
    },
    {
      title: "Satu Hukum Indonesia",
      category: "Legal Platform",
      description: "Digital legal information platform providing comprehensive legal resources and consultation services",
      image: "/images/abhinaya-techno/satuHukum.png",
      url: "https://satuhukumindonesia.co.id"
    },
    {
      title: "Explore Nesia",
      category: "Travel Discovery",
      description: "Travel discovery platform with destination guides, tour packages, and travel planning tools",
      image: "/images/abhinaya-techno/lombok.png",
      url: "http://explorenesia.com"
    }
  ];

  const team = [
    {
      name: "Murni S.Kom., M.Kom",
      position: "Manager of Abhinaya Techno",
      expertise: "System Architecture, Project Management",
      image: "/images/techno-tim/murni.png"
    },
    {
      name: "Sultan Fakhrur Rassyi, M.Pd",
      position: "IT",
      expertise: "IT Support, System Administration",
      image: "/images/techno-tim/sultan.jpeg"
    },
    {
      name: "Ridwan Satriadi",
      position: "IT",
      expertise: "IT Support, Technical Assistance",
      image: "/images/techno-tim/ridwan.png"
    },
    {
      name: "Angga Wiranata",
      position: "IT",
      expertise: "IT Support, Technical Operations",
      image: "/images/techno-tim/angga.png"
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-full">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-blue-300 text-sm font-medium">Currently viewing: Abhinaya Techno</span>
              </div>
            </div>

            {/* Division Cards Slider */}
            <div className="relative">
              {/* Cards Container */}
              <div className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide py-2">
                {/* Abhinaya Techno - Current */}
                <div className="flex-shrink-0 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 border border-blue-400/30">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center relative">
                        <Image
                          src="/images/1.png"
                          alt="Abhinaya Techno logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Abhinaya Techno</div>
                        <div className="text-blue-200 text-sm">Current Division</div>
                      </div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Abhinaya Creative */}
                <a 
                  href="/abhinaya-creative" 
                  className="flex-shrink-0 relative group block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-500 relative">
                        <Image
                          src="/images/2.png"
                          alt="Abhinaya Creative logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg group-hover:text-purple-300 transition-all duration-500">Abhinaya Creative</div>
                        <div className="text-purple-300 text-sm">Branding & Design</div>
                      </div>
                      <svg className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>

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
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Digital Technology & Creative Solutions
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Abhinaya
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Techno
              </span>
            </h1>
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-full">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-blue-300 text-lg font-medium">Digital Solutions That Build Your Future</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We provide innovative IT solutions, including web and mobile app development, 
              business management systems, and AI-powered digital transformation to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions to drive your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web & Mobile Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom web applications and mobile solutions built with modern frameworks and best practices for optimal performance and user experience.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Management Systems</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive ERP and management systems to streamline operations, improve efficiency, and drive business growth with data-driven insights.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Artificial intelligence and machine learning solutions to automate processes, gain valuable business insights, and create intelligent systems.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing plans tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${pkg.highlighted ? 'ring-2 ring-blue-500 ring-offset-4 transform scale-105' : ''}`}>
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <GetStartedButton 
                    text="Get Started"
                    messageKey="techno"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                      pkg.highlighted 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white hover:from-blue-700 hover:via-cyan-700 hover:to-blue-700' 
                        : 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white hover:from-gray-800 hover:via-gray-900 hover:to-gray-800'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.category}
                    </span>
                    {project.url && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.url ? (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                    >
                      Visit Website
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                      View Case Study
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
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
              Our Technology Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center relative">
                {/* Animated Background Orb */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-1000 ease-out"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-xl group-hover:scale-125 transition-all duration-1000 ease-out delay-100"></div>
                </div>
                
                <div className="relative mb-6 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                  {/* Floating Ring Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-36 h-36 border-2 border-blue-200/20 rounded-full animate-pulse-slow"></div>
                    <div className="absolute w-40 h-40 border border-blue-300/10 rounded-full animate-pulse-slower"></div>
                  </div>
                  
                  {/* Avatar Container with 3D Effect */}
                  <div className="relative w-32 h-32 mx-auto transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 scale-110"></div>
                    
                    {/* Main Avatar */}
                    <div className="relative w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full overflow-hidden shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                      {/* Team Member Photo */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    </div>
                  </div>
                  
                  {/* Animated Bottom Accent */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-pulse-slow"></div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 rounded-full blur-sm"></div>
                </div>
                
                {/* Text Content with Animation */}
                <div className="space-y-2 animate-fade-in-up" style={{animationDelay: `${index * 150 + 200}ms`}}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transform transition-all duration-500 group-hover:scale-105">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2 transform transition-all duration-500 group-hover:scale-105">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 transform transition-all duration-500 group-hover:scale-105">
                    {member.expertise}
                  </p>
                </div>
                
                {/* Hover Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-100"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-200"></div>
                  <div className="absolute bottom-6 left-8 w-2.5 h-2.5 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-300"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-indigo-300 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our IT solutions can help accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
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
