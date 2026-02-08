"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { openWhatsApp } from "@/utils/whatsapp";

export default function ProfessionalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      href: "#", 
      label: "Divisions", 
      dropdown: [
        { href: "/divisions", label: "Our Divisions" },
        { href: "/abhinaya-techno", label: "Abhinaya Techno" },
        { href: "/abhinaya-creative", label: "Abhinaya Creative" },
        { href: "/abhinaya-publisher", label: "Abhinaya Publisher" },
      ]
    },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "https://news.abhinaya.co.id/", label: "News", external: true },
    { href: "/team-management", label: "Team Management" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out transform ${
        scrolled 
          ? "bg-gradient-to-r from-[#0e6d7c] to-[#14aecf] shadow-2xl border-b border-[#0e6d7c]/50 backdrop-blur-xl" 
          : "bg-gradient-to-r from-[#0e6d7c]/90 to-[#14aecf]/90 backdrop-blur-2xl border-b border-[#0e6d7c]/30"
      }`}>
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-10">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-1 group">
                <div className="relative w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <Image
                    src="/images/logo.png"
                    alt="Abhinaya Indo Group Logo"
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
                <div className="hidden sm:block transition-all duration-300 group-hover:translate-x-1">
                  <div className="text-xs font-bold text-white group-hover:text-blue-100 transition-colors duration-300">ABHINAYA</div>
                  <div className="text-xs text-white/80 group-hover:text-white/90 transition-colors duration-300">INDO GROUP</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-4">
              {navLinks.map((link, index) => {
                if (link.dropdown) {
                  return (
                    <div key={link.href} className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-1 text-white/90 hover:text-white px-2 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-sm rounded-lg relative group"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <svg className="w-3 h-3 transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 py-2 transform transition-all duration-300 ease-out animate-in slide-in-from-top-2 fade-in">
                          {link.dropdown.map((item, itemIndex) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#0e6d7c]/10 hover:to-[#14aecf]/10 hover:text-[#0e6d7c] transition-all duration-300 hover:translate-x-2 relative group"
                              style={{
                                animationDelay: `${itemIndex * 50}ms`
                              }}
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              <span className="relative z-10">{item.label}</span>
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0e6d7c] to-[#14aecf] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white px-2 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-sm rounded-lg relative group"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-white/90 hover:text-white px-2 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:backdrop-blur-sm rounded-lg relative group ${
                      pathname === link.href ? "text-white font-semibold bg-white/20" : ""
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    {pathname === link.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-blue-200"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/90 hover:text-white p-2 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <svg className="w-5 h-5 relative z-10 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#0e6d7c]/50 bg-gradient-to-r from-[#0e6d7c]/95 to-[#14aecf]/95 backdrop-blur-2xl transform transition-all duration-500 ease-out animate-in slide-in-from-top-4 fade-in">
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.href} className="space-y-2">
                      <div className="text-sm font-semibold text-white px-3 py-2">
                        {link.label}
                      </div>
                      <div className="pl-6 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-white/80 hover:text-white py-2 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-white/90 hover:text-white px-3 py-2 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-sm text-white/90 hover:text-white px-3 py-2 transition-colors duration-200 ${
                      pathname === link.href ? "text-white font-semibold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-10"></div>
    </>
  );
}
