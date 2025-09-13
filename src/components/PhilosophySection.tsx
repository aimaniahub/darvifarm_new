import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Canvas3D } from './Canvas3D';

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const values = [
    {
      icon: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L12 22"/>
          <path d="M8 6L12 10L16 6"/>
          <path d="M8 10L12 14L16 10"/>
          <path d="M8 14L12 18L16 14"/>
        </svg>
      ),
      title: "Managed Farmland Services",
      description: "Professional management of your agricultural investment with expert oversight from our team of agriculture and forestry graduates, ensuring optimal returns."
    },
    {
      icon: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L22 7L12 12L2 7L12 2Z"/>
          <path d="M2 17L12 22L22 17"/>
          <path d="M2 12L12 17L22 12"/>
        </svg>
      ),
      title: "Agroforestry Specialization",
      description: "Expertise in integrating trees and shrubs with crops like sandalwood, guava, and melia dubia to create diverse, productive, and sustainable farming systems."
    },
    {
      icon: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Complete Service Portfolio",
      description: "From farm model design and water management to organic certification and market linkage - we provide end-to-end agricultural solutions."
    }
  ];

  return (
    <section id="philosophy" ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 overflow-hidden rounded-t-3xl">
      {/* Enhanced Agricultural Canvas Background */}
      <Canvas3D variant="organic-flow" className="opacity-10" />
      
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <ImageWithFallback
          src="/iot-home.jpg"
          alt="Sustainable farming practices"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-50/80 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Mission Statement */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          style={{ y: textY }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Agroforestry <span className="text-green-600">Excellence</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Darvi Group, we specialize in managed farmland solutions that combine modern agroforestry 
            techniques with traditional agricultural wisdom. Our team of agriculture and forestry graduates 
            provides comprehensive services from land selection to organic certification, ensuring your 
            investment flourishes under expert management.
          </motion.p>
        </motion.div>

        {/* Agricultural Expertise Showcase */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/farm.jpg"
                alt="Agricultural Expert"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/30 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                  <div className="text-sm text-green-600 font-medium">25+ Years Experience</div>
                  <div className="text-base sm:text-lg font-medium text-gray-900">Agricultural Innovation</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed">
              "Our mission is to provide investors with professionally managed farmland that delivers 
              sustainable returns while supporting the agricultural community through modern agroforestry practices."
            </blockquote>
            <div className="space-y-2">
              <div className="text-xl sm:text-2xl font-serif text-gray-900">Darvi Agro Developers LLP</div>
              <div className="text-base sm:text-lg text-green-600">Agricultural & Forestry Specialists</div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Based in Hubli, Karnataka, our team of agriculture and forestry graduates specializes in 
              agroforestry solutions. We focus on high-value crops like sandalwood, guava, and melia dubia, 
              providing comprehensive services from farm model design to market linkage for sustainable agricultural investments.
            </p>
            
            {/* Agricultural Credentials */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-green-200">
                <div className="text-xl sm:text-2xl font-bold text-green-600">Karnataka</div>
                <div className="text-xs sm:text-sm text-gray-600">Prime Location</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-green-200">
                <div className="text-xl sm:text-2xl font-bold text-green-600">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Acres Managed</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Agricultural Values */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-white">{value.icon()}</div>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Agricultural Innovation Timeline */}
        <motion.div 
          className="mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 text-center mb-8 sm:mb-12">Our Agroforestry Journey</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
            
            {[
              { 
                year: "Founded", 
                title: "Darvi Agro Developers LLP", 
                description: "Established as agricultural product dealers and agroforestry service providers in Hubli, Karnataka",
                icon: "🌱"
              },
              { 
                year: "Specialization", 
                title: "High-Value Crop Focus", 
                description: "Developed expertise in sandalwood plantations, guava, and melia dubia cultivation with managed farmland services",
                icon: "🌳"
              },
              { 
                year: "Services", 
                title: "Comprehensive Solutions", 
                description: "Expanded to offer farm model design, water management, organic certification, and market linkage services",
                icon: "📊"
              },
              { 
                year: "Impact", 
                title: "Agricultural Excellence", 
                description: "Built reputation as trusted partner for managed farmland investments with professional agricultural management",
                icon: "🏆"
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center mb-8 sm:mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4 sm:pr-8 text-right' : 'pl-4 sm:pl-8 text-left'}`}>
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-3xl shadow-lg border border-green-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl sm:text-2xl">{milestone.icon}</span>
                      <div className="text-green-600 font-medium text-base sm:text-lg">{milestone.year}</div>
                    </div>
                    <h4 className="text-lg sm:text-xl font-medium text-gray-900 mt-2">{milestone.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">{milestone.description}</p>
                  </motion.div>
                </div>
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agricultural Impact Statistics */}
        <motion.div
          className="mt-16 sm:mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-6 sm:p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-serif text-center mb-6 sm:mb-8">Agroforestry Impact</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold">500+</div>
              <div className="text-xs sm:text-sm text-green-100">Acres Under Management</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold">Organic</div>
              <div className="text-xs sm:text-sm text-green-100">Certification Focus</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold">Water</div>
              <div className="text-xs sm:text-sm text-green-100">Management Systems</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold">Karnataka</div>
              <div className="text-xs sm:text-sm text-green-100">Prime Location</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}