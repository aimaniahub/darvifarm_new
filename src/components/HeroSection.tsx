import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Canvas3D } from './Canvas3D';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/farm.jpg"
          alt="Agroforestry at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      {/* Sophisticated Particle Animation */}
      <Canvas3D variant="organic-flow" className="opacity-20" />

      {/* Organic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organicPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g fill="white" opacity="0.4">
                <path d="M60,20 Q80,40 60,60 Q40,80 60,100 Q80,80 100,60 Q80,40 60,20Z" strokeWidth="1" stroke="white" fill="none"/>
                <circle cx="30" cy="30" r="2"/>
                <circle cx="90" cy="90" r="2"/>
                <path d="M20,60 Q40,40 60,60 Q80,80 100,60" stroke="white" strokeWidth="0.5" fill="none"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organicPattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-6xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-mono text-sm text-white/90 tracking-wider uppercase">Premium Agroforestry Investment</span>
          </motion.div>

          {/* Main Headlines */}
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            The Art of <span className="text-yellow-400">Agroforestry</span>
          </motion.h1>
          
          <motion.h2 
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            The Science of <span className="text-yellow-400">Investment</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Cultivating generational wealth through sustainable sandalwood, guava, and melia dubia plantations in the heart of Karnataka.
          </motion.p>

          {/* Premium CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-xl text-lg font-semibold shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Discover Our Managed Farmlands</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12L19 12"/>
                  <path d="M12 5L19 12L12 19"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </motion.div>

          {/* Premium Statistics */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { value: "500+", label: "Acres Under Expert Management", unit: "" },
              { value: "25+", label: "Years Combined Experience", unit: "" },
              { value: "100+", label: "Satisfied Investors", unit: "" },
              { value: "Karnataka", label: "Prime Agricultural Location", unit: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 + index * 0.1 }}
              >
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs sm:text-sm text-white/70 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center text-white/60 cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => {
              document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="font-mono text-xs mb-4 group-hover:text-white/80 transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              Explore Our Philosophy
            </span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-all">
              <motion.div
                className="w-1 h-2 bg-white/40 rounded-full mt-2 group-hover:bg-white/60"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sophisticated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 sm:h-24 fill-current text-stone-50"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#F5F0E6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#FEFCF8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F5F0E6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
            opacity="0.8"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#waveGradient)"
            opacity="0.6"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}