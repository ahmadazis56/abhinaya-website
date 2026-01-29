
import Image from 'next/image';

export default function SectionLayanan() {
  return (
    <section className="relative py-16 px-2 md:px-0">
      {/* Background gradasi lembut */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-cyan-50 via-white to-white pointer-events-none -z-10" />
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12 text-blue-900 tracking-tight drop-shadow-sm">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Techno */}
        <div className="group bg-white/30 backdrop-blur-md border border-blue-900/20 text-blue-900 rounded-3xl p-10 shadow-xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/50">
          <Image src="/images/1.png" alt="Abhinaya Techno" width={80} height={80} className="mb-5" />
          <h3 className="font-bold text-xl mb-3 tracking-tight">Abhinaya Techno</h3>
          <p className="text-center text-base mb-2 opacity-90">Solusi IT inovatif: web & mobile app, sistem manajemen bisnis, digital transformation berbasis AI.</p>
        </div>
        {/* Creative */}
        <div className="group bg-white/30 backdrop-blur-md border border-cyan-400/20 text-blue-900 rounded-3xl p-10 shadow-xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/50">
          <Image src="/images/2.png" alt="Abhinaya Creative" width={80} height={80} className="mb-5" />
          <h3 className="font-bold text-xl mb-3 tracking-tight">Abhinaya Creative</h3>
          <p className="text-center text-base mb-2 opacity-90">Branding, desain grafis, konten kreatif, dan strategi digital marketing untuk dampak maksimal.</p>
        </div>
        {/* Publisher */}
        <div className="group bg-white/30 backdrop-blur-md border border-yellow-400/20 text-blue-900 rounded-3xl p-10 shadow-xl flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/50">
          <Image src="/images/3.png" alt="Abhinaya Publisher" width={80} height={80} className="mb-5" />
          <h3 className="font-bold text-xl mb-3 tracking-tight">Abhinaya Publisher</h3>
          <p className="text-center text-base mb-2 opacity-90">Publikasi jurnal ilmiah berkualitas, peer review, global indexing, dan kolaborasi internasional.</p>
        </div>
      </div>
    </section>
  );
}
