import Link from "next/link";
import Image from "next/image";
import { DIVISION_CONFIG } from "@/config/constants";
import GetStartedButton from "@/components/GetStartedButton";

export const metadata = {
  title: "Our Divisions - Abhinaya Indo Group",
  description: "Discover our three core divisions: Abhinaya Techno for IT solutions, Abhinaya Creative for branding and design, and Abhinaya Publisher for scientific publishing.",
};

export default function Divisions() {
  const divisions = [
    {
      name: "Abhinaya Techno",
      title: "IT Solutions & Technology",
      description: "Innovative IT solutions including web development, mobile apps, business management systems, and AI-powered digital transformation.",
      image: "/images/1.png",
      gradient: "from-blue-600 to-indigo-600",
      features: ["Web & Mobile Development", "Business Management Systems", "AI-Powered Solutions"],
      stats: ["500+ Projects", "50+ Experts"],
      href: "/abhinaya-techno"
    },
    {
      name: "Abhinaya Creative", 
      title: "Branding & Design",
      description: "Elevate your brand with expert services in branding, graphic design, content creation, and digital marketing strategies.",
      image: "/images/2.png",
      gradient: "from-purple-600 to-pink-600",
      features: ["Branding & Identity", "Digital Marketing", "Content Creation"],
      stats: ["300+ Brands", "25+ Designers"],
      href: "/abhinaya-creative"
    },
    {
      name: "Abhinaya Publisher",
      title: "Scientific Publishing",
      description: "Publish high-quality scientific journals with rigorous peer review, global indexing, and international collaborations.",
      image: "/images/3.png",
      gradient: "from-red-600 to-orange-600",
      features: ["Scientific Journals", "Global Indexing", "International Collaboration"],
      stats: ["6 Journals", "100+ Papers"],
      href: "/abhinaya-publisher"
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='30 30 0 0 60 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[90vh]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Our Ecosystem of Excellence
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Three Divisions,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                One Unified Vision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Abhinaya Indo Group brings together technology, creativity, and academic excellence 
              under one roof to provide comprehensive solutions that transform businesses and advance knowledge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <GetStartedButton 
                text="Start Your Journey"
                messageKey="default"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              />
              <Link
                href="#divisions"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Explore Divisions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Divisions Showcase */}
      <section id="divisions" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Premium Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full backdrop-blur-sm mb-8">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-purple-700 text-sm font-medium">Core Divisions</span>
            </div>
            
            <h2 className="pb-6 text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-900 bg-clip-text text-transparent">
                Our Specialized Divisions
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Each division brings specialized expertise to deliver exceptional results
            </p>
          </div>

          {/* Division Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {divisions.map((division, index) => (
              <div key={index} className="group relative">
                {/* Floating Card Container */}
                <div className="relative perspective-1000">
                  {/* Card Shadow */}
                  <div className="absolute -bottom-8 left-4 right-4 h-16 bg-black/10 rounded-full blur-2xl transform scale-y-50 group-hover:scale-y-75 transition-transform duration-500"></div>
                  
                  {/* Main Card */}
                  <div className={`relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 overflow-hidden border border-gray-100`}>
                    {/* Top Gradient Bar */}
                    <div className={`h-2 bg-gradient-to-r ${division.gradient}`}></div>
                    
                    {/* Card Content */}
                    <div className="p-8">
                      {/* Image Section */}
                      <div className="relative mb-8">
                        <div className="relative w-20 h-20 mb-6 group-hover:scale-110 transition-all duration-500">
                          <Image
                            src={division.image}
                            alt={`${division.name} logo`}
                            fill
                            className="object-contain rounded-xl"
                          />
                        </div>
                        <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${division.gradient} rounded-full animate-pulse`}></div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {division.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 mb-4">
                        {division.title}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {division.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 mb-6">
                        {division.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className={`w-5 h-5 bg-gradient-to-r ${division.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {division.stats.map((stat, idx) => (
                          <span key={idx} className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${division.gradient}/10 text-gray-700 text-xs rounded-full border border-gray-200`}>
                            {stat}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={division.href}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${division.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        Explore {division.name.split(' ')[1]}
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full backdrop-blur-sm">
              <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-purple-700 font-medium">3 Divisions • 1000+ Projects • Global Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='30 30 0 0 60 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Ready to Transform Your Business?
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Discover how our integrated divisions can help transform your business with comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <GetStartedButton 
              text="Start Your Project"
              messageKey="default"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            />
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
