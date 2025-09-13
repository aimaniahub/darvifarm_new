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
      const sections = ['philosophy', 'difference', 'farmlands', 'crops', 'journey', 'insights', 'contact'];
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
    { name: 'Philosophy', href: '#philosophy', icon: 'philosophy' },
    { name: 'Our Difference', href: '#difference', icon: 'difference' },
    { name: 'Farmlands', href: '#farmlands', icon: 'farmlands' },
    { name: 'Our Crops', href: '#crops', icon: 'crops' },
    { name: 'The Journey', href: '#journey', icon: 'journey' },
    { name: 'Insights', href: '#insights', icon: 'insights' },
    { name: 'Contact', href: '#contact', icon: 'contact' }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      philosophy: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2C17 7 14.5 8 13.5 11C12.5 14 11 20 11 20Z"/>
          <path d="M12.5 11.5L15 14"/>
        </svg>
      ),
      difference: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L12 22"/>
          <path d="M8 6L12 10L16 6"/>
          <path d="M8 10L12 14L16 10"/>
        </svg>
      ),
      farmlands: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      crops: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L12 22"/>
          <path d="M8 6L12 10L16 6"/>
          <path d="M8 10L12 14L16 10"/>
          <path d="M8 14L12 18L16 14"/>
        </svg>
      ),
      journey: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="7" cy="18" r="3"/>
          <circle cx="18" cy="18" r="3"/>
          <path d="M5 18H3V12L7 8H15V18"/>
        </svg>
      ),
      insights: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5V8A2.5 2.5 0 0 1 6.5 5.5H18A2.5 2.5 0 0 1 20.5 8V19.5L12 14.5L4 19.5Z"/>
        </svg>
      ),
      contact: (
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
            ? 'bg-stone-50/95 backdrop-blur-md shadow-lg border-b border-amber-200' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Premium Logo */}
            <motion.div 
              className="flex items-center group cursor-pointer z-50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3">
                <img 
                  src="/darvi-farm-logo.svg" 
                  alt="Darvi Group" 
                  className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
                  style={{ 
                    filter: isScrolled ? 'none' : 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
                <div className={`transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                  <div className="font-serif text-lg sm:text-xl font-semibold">Darvi Group</div>
                  <div className="font-mono text-xs uppercase tracking-wider opacity-80">Agroforestry Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? isScrolled 
                        ? 'bg-amber-100 text-amber-800 shadow-md'
                        : 'bg-white/20 text-white shadow-md'
                      : isScrolled 
                        ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  } backdrop-blur-sm relative`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <span className="transition-transform group-hover:scale-110">
                    {getIcon(item.icon)}
                  </span>
                  <span>{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute -bottom-1 left-1/2 w-2 h-2 rounded-full ${
                        isScrolled ? 'bg-amber-500' : 'bg-white'
                      }`}
                      style={{ translateX: '-50%' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Desktop CTA */}
              <motion.button
                className={`hidden sm:block px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'btn-accent'
                    : 'bg-white/20 text-white border border-white/30 hover:bg-white hover:text-slate-800'
                } backdrop-blur-sm`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="flex items-center space-x-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 2V8L12 12L16 8V2"/>
                    <path d="M8 22V16L12 12L16 16V22"/>
                  </svg>
                  <span>Schedule Consultation</span>
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-700 hover:bg-amber-50' 
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
      </motion.nav>

      {/* Premium Mobile Menu */}
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
            
            {/* Premium Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-stone-50 to-amber-50 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-center pt-20 pb-8 px-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/darvi-farm-logo.svg" 
                      alt="Darvi Group" 
                      className="h-10 w-auto object-contain"
                    />
                    <div className="text-slate-800">
                      <div className="font-serif text-lg font-semibold">Darvi Group</div>
                      <div className="font-mono text-xs uppercase tracking-wider opacity-80">Agroforestry Excellence</div>
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-2 px-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? 'bg-amber-100 text-amber-800 shadow-md'
                          : 'text-slate-700 hover:bg-white/50 hover:text-amber-600'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        activeSection === item.href.substring(1)
                          ? 'bg-amber-200' 
                          : 'bg-white/50'
                      }`}>
                        {getIcon(item.icon)}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                </nav>

                {/* Footer CTA */}
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <button className="w-full btn-accent text-center">
                    <span className="flex items-center justify-center space-x-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 2V8L12 12L16 8V2"/>
                        <path d="M8 22V16L12 12L16 16V22"/>
                      </svg>
                      <span>Schedule Consultation</span>
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}