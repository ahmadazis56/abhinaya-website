"use client";

import { useEffect, useState } from "react";

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: "500", label: "Projects Completed", suffix: "+" },
  { value: "50", label: "Expert Team", suffix: "+" },
  { value: "10", label: "Years Experience", suffix: "+" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
];

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const newCounters: { [key: string]: number } = {};
      
      stats.forEach((stat) => {
        const targetValue = parseInt(stat.value);
        let currentValue = 0;
        const increment = targetValue / 50; // Animation duration: 50 steps
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          newCounters[stat.value] = Math.floor(currentValue);
          setCounters({ ...newCounters });
        }, 40); // Update every 40ms
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-[#0e6d7c] to-[#14aecf] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-nacelle text-white mb-6">
            Our Achievements in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Delivering excellence and innovation across all our divisions with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-white tabular-nums">
                    {isVisible ? counters[stat.value] || 0 : 0}
                    <span className="text-4xl md:text-5xl">{stat.suffix}</span>
                  </div>
                  
                  {/* Animated underline */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                <p className="text-white/90 font-medium text-lg leading-tight">
                  {stat.label}
                </p>
              </div>

              {/* Floating animation */}
              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full animate-pulse">
                  <div className="w-6 h-6 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </section>
  );
}
