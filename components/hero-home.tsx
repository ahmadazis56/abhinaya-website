import type { HeroSlide as HeroSlideType } from "@/lib/content";
import Link from "next/link";
import GetStartedButton from "@/components/GetStartedButton";

interface HeroHomeProps {
  slides: HeroSlideType[];
}

export default function HeroHome({ slides }: HeroHomeProps) {
  // Use the first slide or create a default one with the requested text
  const slide = slides[0] || {
    title: "Abhinaya Indo Group",
    subtitle: "Transforming Visions Into Reality",
    description: "Leading the future with innovative IT solutions, creative excellence, and scientific publishing. Empowering businesses across Indonesia and globally since 2010.",
    video: "/videos/video.mp4",
    buttonText: "Start Your Journey",
    buttonLink: "/contact"
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={slide.video || "/videos/video.mp4"} type="video/mp4" />
      </video>
      
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/50 z-10"></div>
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 z-15">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-30 left-30 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-60 w-1 h-1 bg-cyan-300/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 transform translate-y-0 opacity-100">
        {/* Premium Badge */}
        <div className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-cyan-300 text-sm font-medium">Global Innovation Leader</span>
        </div>
        
        {/* Main Title with Gradient Effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
            {slide.title}
          </span>
        </h1>
        
        {/* Subtitle with Typography Excellence */}
        <p className="text-2xl md:text-3xl lg:text-4xl mb-6 font-light text-cyan-100 leading-relaxed">
          {slide.subtitle}
        </p>
        
        {/* Description with Perfect Spacing */}
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
          {slide.description}
        </p>
        
        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <GetStartedButton 
            text={slide.buttonText}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          />
          
          <Link 
            href="/divisions"
            className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Divisions
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span>13+ Years Excellence</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            <span>500+ Global Clients</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <span>ISO Certified</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

