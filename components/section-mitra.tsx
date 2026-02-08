"use client";

import type { PartnerItem } from "@/lib/content";
import { mitra as defaultPartners } from "@/data/mitra";
import Image from "next/image";

interface SectionMitraProps {
  title: string;
  description: string;
  partners?: PartnerItem[];
}

export default function SectionMitra({ title, description, partners = defaultPartners }: SectionMitraProps) {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-cyan-50/20 pt-16 md:pt-20 py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230e6d7c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Premium Header */}
        <div className="mx-auto max-w-4xl pb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-cyan-700 text-sm font-medium">Trusted Partners</span>
          </div>
          
          <h2 className="pb-4 font-nacelle text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
        </div>
        
        {/* Ultra Professional Marquee */}
        <div className="relative">
          {/* Enhanced Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>
          
          {/* Marquee Container with Better Spacing */}
          <div className="overflow-hidden bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
            <div className="flex animate-scroll-left py-12">
              {/* First set of logos */}
              {partners.map((partner) => (
                <div key={`first-${partner.id}`} className="flex items-center justify-center px-12 flex-shrink-0">
                  <div className="flex items-center justify-center w-48 h-24 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 group border border-gray-100">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      {/* Logo Container with Proper Constraints */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={160}
                          height={80}
                          className="object-contain transition-all duration-500 group-hover:scale-105 max-w-full max-h-full opacity-80 group-hover:opacity-100"
                          style={{
                            objectFit: 'contain',
                            maxWidth: '100%',
                            maxHeight: '100%'
                          }}
                        />
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Partner Name on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-xs font-medium text-center truncate">
                          {partner.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div key={`second-${partner.id}`} className="flex items-center justify-center px-12 flex-shrink-0">
                  <div className="flex items-center justify-center w-48 h-24 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 group border border-gray-100">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      {/* Logo Container with Proper Constraints */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={160}
                          height={80}
                          className="object-contain transition-all duration-500 group-hover:scale-105 max-w-full max-h-full opacity-80 group-hover:opacity-100"
                          style={{
                            objectFit: 'contain',
                            maxWidth: '100%',
                            maxHeight: '100%'
                          }}
                        />
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Partner Name on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-xs font-medium text-center truncate">
                          {partner.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Premium Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 font-light">
            Partnering with industry leaders worldwide to deliver excellence
          </p>
        </div>
      </div>
    </section>
  );
}