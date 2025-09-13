import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Canvas3D } from './Canvas3D';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SustainabilitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const technologies = [
    {
      id: 'water',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 13.5L9 20.5L15.5 14L22 20.5V2.5L15.5 8.5L9 2.5L2 8.5V13.5Z"/>
        </svg>
      ),
      title: "Water Management Systems",
      description: "Expert design and implementation of efficient irrigation and water conservation systems specifically for agroforestry operations in Karnataka.",
      stats: { efficiency: 85, savings: 40 },
      color: "blue"
    },
    {
      id: 'organic',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2C17 7 14.5 8 13.5 11C12.5 14 11 20 11 20Z"/>
          <path d="M12.5 11.5L15 14"/>
        </svg>
      ),
      title: "Organic Certification",
      description: "Comprehensive support for organic certification process, ensuring your farmland meets all requirements for premium organic produce.",
      stats: { efficiency: 92, savings: 35 },
      color: "green"
    },
    {
      id: 'agroforestry',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L12 22"/>
          <path d="M8 6L12 10L16 6"/>
          <path d="M8 10L12 14L16 10"/>
          <path d="M8 14L12 18L16 14"/>
        </svg>
      ),
      title: "Agroforestry Models",
      description: "Specialized design of integrated farming systems combining trees (sandalwood, melia dubia) with crops for sustainable productivity.",
      stats: { efficiency: 88, savings: 50 },
      color: "emerald"
    },
    {
      id: 'management',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Professional Management",
      description: "Complete farmland management services by our team of agriculture and forestry graduates, ensuring optimal crop performance.",
      stats: { efficiency: 90, savings: 45 },
      color: "purple"
    },
    {
      id: 'market',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      title: "Market Linkage",
      description: "Strong connections with buyers and processors to ensure best prices for sandalwood, guava, and other agroforestry produce.",
      stats: { efficiency: 85, savings: 55 },
      color: "indigo"
    },
    {
      id: 'monitoring',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <line x1="9" y1="1" x2="9" y2="4"/>
          <line x1="15" y1="1" x2="15" y2="4"/>
          <line x1="9" y1="20" x2="9" y2="23"/>
          <line x1="15" y1="20" x2="15" y2="23"/>
          <line x1="20" y1="9" x2="23" y2="9"/>
          <line x1="20" y1="14" x2="23" y2="14"/>
          <line x1="1" y1="9" x2="4" y2="9"/>
          <line x1="1" y1="14" x2="4" y2="14"/>
        </svg>
      ),
      title: "Crop Monitoring",
      description: "Regular monitoring and care of plantations with expert guidance on growth optimization and disease prevention.",
      stats: { efficiency: 94, savings: 30 },
      color: "yellow"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sustainability" ref={sectionRef} className="relative min-h-screen bg-gray-900 text-white py-16 sm:py-20 overflow-hidden rounded-t-3xl">
      {/* 3D Canvas Background */}
      <Canvas3D variant="geometric-crops" className="opacity-20" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">Agroforestry & Technology</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Darvi Group combines traditional agroforestry wisdom with modern agricultural technology, 
            creating sustainable managed farmland solutions that benefit both investors and the environment.
          </p>
        </motion.div>

        {/* Water Conservation Scrollytelling */}
        <motion.div
          className="mb-16 sm:mb-20 bg-gradient-to-r from-blue-900/50 to-green-900/50 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm"
          data-animate
          id="water-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Water Management Systems</h3>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={visibleElements.has('water-section') ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Efficient Irrigation Design</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Custom water management systems designed specifically for agroforestry needs in Karnataka's climate.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={visibleElements.has('water-section') ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Rainwater Harvesting</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Advanced collection and storage systems to maximize water availability for crop irrigation.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={visibleElements.has('water-section') ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Sustainable Drainage</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Proper drainage systems that prevent waterlogging while conserving precious water resources.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visibleElements.has('water-section') ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <ImageWithFallback
                src="/iot-home.jpg"
                alt="Smart farming technology"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              data-animate
              id={`tech-${tech.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 h-full backdrop-blur-sm rounded-3xl">
                <div className="p-4 sm:p-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${tech.color}-500/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}>
                    <div className={`text-${tech.color}-400`}>{tech.icon()}</div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">{tech.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{tech.description}</p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Efficiency</span>
                        <span className="text-sm text-white font-medium">{tech.stats.efficiency}%</span>
                      </div>
                      <Progress 
                        value={visibleElements.has(`tech-${tech.id}`) ? tech.stats.efficiency : 0} 
                        className="h-2" 
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Cost Savings</span>
                        <span className="text-sm text-white font-medium">{tech.stats.savings}%</span>
                      </div>
                      <Progress 
                        value={visibleElements.has(`tech-${tech.id}`) ? tech.stats.savings : 0} 
                        className="h-2" 
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-serif text-center mb-8 sm:mb-12">Our Impact</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "500+", label: "Acres Under Management", suffix: "" },
              { value: "Organic", label: "Certification Services", suffix: "" },
              { value: "Karnataka", label: "Prime Agricultural Location", suffix: "" },
              { value: "25+", label: "Years Combined Experience", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Join the Agroforestry Revolution</h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Partner with Darvi Group for professionally managed farmland investments that combine traditional agroforestry wisdom with modern agricultural practices in Karnataka.
          </p>
          <motion.button
            className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl text-base sm:text-lg hover:bg-green-700 transition-colors shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Agroforestry Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}