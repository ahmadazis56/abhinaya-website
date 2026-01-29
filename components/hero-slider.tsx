
export default function HeroSlider() {
  return (
    <section className="w-full h-[450px] md:h-[520px] flex items-center justify-center relative overflow-hidden">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-cyan-700 via-blue-900 to-white opacity-90 absolute z-0"></div>
        <img
          src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=600&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover object-center absolute z-0 mix-blend-overlay opacity-80"
        />
      </div>
      <div className="relative z-10 text-center max-w-2xl px-8 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-200 mb-4 drop-shadow-lg" style={{textShadow: '0 4px 24px #0e7490'}}>Membangun Talenta Digital Berkelas Dunia</h1>
        <p className="text-white text-lg md:text-2xl mb-6 drop-shadow">Membangun Talenta Digital Berkelas Dunia</p>
        <a href="#" className="inline-block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 hover:from-cyan-400 hover:to-blue-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">Pelajari Lebih Lanjut</a>
      </div>
      {/* Smooth gradient to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" style={{zIndex: 9}}></div>
    </section>
  );
}
