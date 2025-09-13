import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Canvas3D } from './Canvas3D';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/farm.jpg",
      title: "Managed Farmland Excellence",
      subtitle: "Professional agroforestry investments in Karnataka's premium agricultural lands"
    },
    {
      image: "/IMG-20250428-WA0080.jpg",
      title: "Sandalwood & High-Value Crops",
      subtitle: "Specialized cultivation of sandalwood, guava, and melia dubia with expert management"
    },
    {
      image: "/IMG-20250428-WA0081.jpg",
      title: "Your Agriculture Investment Partner",
      subtitle: "From farmland selection to organic certification - complete agricultural management solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 rounded-b-3xl">
      {/* Dynamic Background Images */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-b-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-transparent"></div>
        </motion.div>
      ))}

      {/* Enhanced 3D Canvas Background */}
      <Canvas3D variant="growing-fields" className="opacity-20" />

      {/* Agricultural Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="farmPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <g fill="white" opacity="0.3">
                <circle cx="30" cy="15" r="2"/>
                <circle cx="15" cy="30" r="2"/>
                <circle cx="45" cy="30" r="2"/>
                <circle cx="30" cy="45" r="2"/>
                <path d="M20,20 L40,40 M40,20 L20,40" stroke="white" strokeWidth="1" opacity="0.2"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#farmPattern)" />
        </svg>
      </div>

      {/* Enhanced Controls */}
      <div className="absolute top-20 sm:top-24 right-3 sm:right-6 z-20 flex flex-col gap-2 sm:gap-3">
        {/* Audio Toggle */}
        <motion.button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className="p-2 sm:p-3 rounded-2xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all border border-white/20 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          {audioEnabled ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          )}
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex flex-col gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-6xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            key={currentSlide}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 font-serif leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          
          <motion.p 
            key={`subtitle-${currentSlide}`}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg sm:max-w-2xl mx-auto mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all text-base sm:text-lg font-medium shadow-xl backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Explore Managed Farmlands</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12L19 12"/>
                  <path d="M12 5L19 12L12 19"/>
                </svg>
              </span>
            </motion.button>
            
            <motion.button
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-green-800 transition-all text-base sm:text-lg font-medium backdrop-blur-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                <span>Watch Our Story</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Farm Statistics */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-xs sm:text-sm text-white/80">Acres Managed</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-xs sm:text-sm text-white/80">Happy Investors</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">Karnataka</div>
              <div className="text-xs sm:text-sm text-white/80">Prime Location</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center text-white/80 cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => {
              document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-xs sm:text-sm mb-3 group-hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">Discover Our Philosophy</span>
            <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/60 rounded-2xl flex justify-center group-hover:border-white transition-all">
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full mt-2 sm:mt-3 group-hover:bg-white"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Decorative Agricultural Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 fill-white"
        >
          <defs>
            <pattern id="wavePattern" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
              <path d="M0,4 Q10,0 20,4 T40,4" stroke="#22c55e" strokeWidth="0.5" fill="none" opacity="0.3"/>
            </pattern>
          </defs>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#wavePattern)"
          />
        </svg>
      </div>
    </section>
  );
}