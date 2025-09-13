import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['philosophy', 'farmlands', 'experience', 'sustainability', 'journal', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Philosophy', href: '#philosophy', icon: 'sprout' },
    { name: 'Farmlands', href: '#farmlands', icon: 'wheat' },
    { name: 'Experience', href: '#experience', icon: 'tractor' },
    { name: 'Sustainability', href: '#sustainability', icon: 'leaf' },
    { name: 'Journal', href: '#journal', icon: 'book' },
    { name: 'Contact', href: '#contact', icon: 'mail' }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      sprout: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 20H4C2.89 20 2 19.11 2 18V14C2 11.79 3.79 10 6 10H7L12 5L17 10H18C20.21 10 22 11.79 22 14V18C22 19.11 21.11 20 20 20H17"/>
          <path d="M12 5V2"/>
          <path d="M8 2L12 5L16 2"/>
        </svg>
      ),
      wheat: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L12 22"/>
          <path d="M8 6L12 10L16 6"/>
          <path d="M8 10L12 14L16 10"/>
          <path d="M8 14L12 18L16 14"/>
        </svg>
      ),
      tractor: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="7" cy="18" r="3"/>
          <circle cx="18" cy="18" r="3"/>
          <path d="M5 18H3V12L7 8H15V18"/>
          <path d="M15 8V6H11"/>
          <path d="M21 12V18H15"/>
        </svg>
      ),
      leaf: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2C17 7 14.5 8 13.5 11C12.5 14 11 20 11 20Z"/>
          <path d="M12.5 11.5L15 14"/>
        </svg>
      ),
      book: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5V8A2.5 2.5 0 0 1 6.5 5.5H18A2.5 2.5 0 0 1 20.5 8V19.5L12 14.5L4 19.5Z"/>
        </svg>
      ),
      mail: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="M22 7L13.03 12.7C12.72 12.89 12.28 12.89 11.97 12.7L2 7"/>
        </svg>
      )
    };
    return icons[iconName as keyof typeof icons];
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
            : 'bg-gradient-to-b from-black/50 to-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Agricultural Canvas Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg 
            className="absolute -top-2 left-0 w-full h-full opacity-10"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z" 
              fill="url(#farmPattern)"
            />
            <defs>
              <pattern id="farmPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M15,15 L25,25 M25,15 L15,25" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center group cursor-pointer z-50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/darvi-farm-logo.svg" 
                alt="Darvi Group Logo" 
                className="h-10 sm:h-16 w-auto object-contain transition-all duration-300"
                style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
              />
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`group flex items-center space-x-2 px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-green-100 text-green-700 shadow-md'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                        : 'text-white hover:text-green-300 hover:bg-white/10'
                  } backdrop-blur-sm relative`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <span className="transition-transform group-hover:scale-110">
                    {getIcon(item.icon)}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 w-2 h-2 bg-green-500 rounded-full"
                      style={{ translateX: '-50%' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button & Desktop CTA */}
            <div className="flex items-center space-x-3">
              {/* Desktop CTA Button */}
              <motion.button
                className={`hidden sm:block px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white text-green-700 shadow-lg hover:shadow-xl'
                } backdrop-blur-sm`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="flex items-center space-x-2">
                  <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 2V8L12 12L16 8V2"/>
                    <path d="M8 22V16L12 12L16 16V22"/>
                  </svg>
                  <span className="hidden sm:inline">Schedule Farm Visit</span>
                  <span className="sm:hidden">Visit</span>
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-green-50' 
                    : 'text-white hover:bg-white/10'
                } backdrop-blur-sm z-50`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}
                >
                  {isMobileMenuOpen ? (
                    <path d="M18 6L6 18M6 6L18 18"/>
                  ) : (
                    <>
                      <path d="M3 12H21"/>
                      <path d="M3 6H21"/>
                      <path d="M3 18H21"/>
                    </>
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Agricultural Bottom Border */}
        <motion.div 
          className={`h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
          style={{
            background: 'linear-gradient(90deg, #22c55e 0%, #eab308 25%, #22c55e 50%, #eab308 75%, #22c55e 100%)'
          }}
        />
      </motion.nav>

      {/* Curved Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Curved Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Curved Background with Agricultural Theme */}
              <div className="relative w-full h-full">
                <svg 
                  viewBox="0 0 320 800" 
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="sidebarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#16a34a', stopOpacity: 0.95 }} />
                      <stop offset="50%" style={{ stopColor: '#15803d', stopOpacity: 0.95 }} />
                      <stop offset="100%" style={{ stopColor: '#166534', stopOpacity: 0.95 }} />
                    </linearGradient>
                    <pattern id="mobileFarmPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.1"/>
                      <path d="M15,15 L25,25 M25,15 L15,25" stroke="white" strokeWidth="0.5" opacity="0.05"/>
                    </pattern>
                  </defs>
                  
                  {/* Main curved background */}
                  <path 
                    d="M80,0 Q20,0 20,60 L20,740 Q20,800 80,800 L320,800 L320,0 Z" 
                    fill="url(#sidebarGradient)"
                  />
                  
                  {/* Agricultural pattern overlay */}
                  <path 
                    d="M80,0 Q20,0 20,60 L20,740 Q20,800 80,800 L320,800 L320,0 Z" 
                    fill="url(#mobileFarmPattern)"
                  />
                </svg>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col pt-20 pb-8 px-6">
                  {/* Header */}
                  <div className="flex items-center justify-center mb-8 pl-12">
                    <img 
                      src="/darvi-farm-logo.svg" 
                      alt="Darvi Group Logo" 
                      className="h-12 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Navigation Items */}
                  <nav className="flex-1 space-y-4 pl-12">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                          activeSection === item.href.substring(1)
                            ? 'bg-white/20 text-white shadow-lg'
                            : 'text-white/90 hover:bg-white/10 hover:text-white'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                        whileHover={{ x: 4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                          activeSection === item.href.substring(1)
                            ? 'bg-white/20' 
                            : 'bg-white/10'
                        }`}>
                          {getIcon(item.icon)}
                        </div>
                        <span className="font-medium text-base">{item.name}</span>
                      </motion.button>
                    ))}
                  </nav>

                  {/* Footer CTA */}
                  <motion.div 
                    className="mt-8 pl-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    <button className="w-full bg-white text-green-700 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 2V8L12 12L16 8V2"/>
                        <path d="M8 22V16L12 12L16 16V22"/>
                      </svg>
                      <span>Schedule Farm Visit</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}