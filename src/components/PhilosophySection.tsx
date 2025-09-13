import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Canvas3D } from './Canvas3D';

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section id="philosophy" ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 overflow-hidden">
      {/* Subtle Canvas Background */}
      <Canvas3D variant="organic-flow" className="opacity-5" />
      
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <ImageWithFallback
          src="/iot-home.jpg"
          alt="Sustainable farming practices"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50/90 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          style={{ y: textY }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="font-mono text-sm text-amber-800 tracking-wider uppercase">Our Philosophy</span>
          </motion.div>

          <motion.h2 
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-800 mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Cultivating <span className="text-amber-600">Legacy</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Darvi Group, we believe that true wealth grows from the earth. Our approach combines time-honored agricultural wisdom with cutting-edge agroforestry science to create sustainable, profitable investments that benefit both investors and the environment.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Portrait & Story */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-amber-300 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/farm.jpg"
                  alt="Darvi Group Leadership"
                  className="w-full h-96 sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <div className="font-mono text-sm text-amber-600 uppercase tracking-wider mb-2">Founded on Expertise</div>
                    <div className="font-serif text-2xl text-slate-800 mb-2">25+ Years of Agricultural Excellence</div>
                    <div className="text-slate-600">Darvi Agro Developers LLP</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl sm:text-3xl font-serif text-slate-700 italic leading-relaxed border-l-4 border-amber-400 pl-8">
              "We don't just manage farmland; we cultivate relationships, nurture ecosystems, and grow sustainable prosperity for generations to come."
            </blockquote>
            
            <div className="space-y-4">
              <div className="font-serif text-2xl text-slate-800 mb-4">Our Mission</div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in the fertile landscapes of Karnataka, our team of agriculture and forestry graduates specializes in creating premium agroforestry investments. We focus on high-value crops like sandalwood, guava, and melia dubia, providing comprehensive services from farm design to market linkage.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every investment with us is backed by scientific precision, sustainable practices, and a deep commitment to environmental stewardship. We believe that the best investments are those that create value for all stakeholders – investors, communities, and the planet.
              </p>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-200">
                <div className="font-serif text-3xl font-bold text-amber-600 mb-2">Karnataka</div>
                <div className="font-mono text-sm text-slate-600 uppercase tracking-wider">Prime Location</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-200">
                <div className="font-serif text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="font-mono text-sm text-slate-600 uppercase tracking-wider">Acres Managed</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L12 22"/>
                  <path d="M8 6L12 10L16 6"/>
                  <path d="M8 10L12 14L16 10"/>
                  <path d="M8 14L12 18L16 14"/>
                </svg>
              ),
              title: "Expert-Led Agroforestry",
              description: "Our team of agriculture and forestry graduates brings decades of combined expertise to every project, ensuring optimal crop selection and management practices."
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              ),
              title: "Prime Karnataka Farmland",
              description: "Strategically located in Karnataka's most fertile regions, our farmlands benefit from ideal climate conditions and rich soil composition."
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              ),
              title: "Turnkey Investment",
              description: "From initial consultation to harvest and sales, we handle every aspect of your agroforestry investment, allowing you to focus on returns."
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              className="premium-card text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-white">{value.icon}</div>
              </motion.div>
              <h3 className="font-serif text-xl text-slate-800 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl sm:text-4xl text-slate-800 mb-6">Our Agroforestry Journey</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Karnataka's trusted agroforestry investment partner
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
            
            {[
              { 
                year: "Founded", 
                title: "Darvi Agro Developers LLP", 
                description: "Established as agricultural specialists in Hubli, Karnataka, with a vision to revolutionize agroforestry investment",
                icon: "🌱"
              },
              { 
                year: "Specialization", 
                title: "High-Value Crop Expertise", 
                description: "Developed deep expertise in sandalwood, guava, and melia dubia cultivation with comprehensive managed farmland services",
                icon: "🌳"
              },
              { 
                year: "Innovation", 
                title: "Comprehensive Solutions", 
                description: "Expanded to offer complete agroforestry solutions including farm design, water management, organic certification, and market linkage",
                icon: "📊"
              },
              { 
                year: "Excellence", 
                title: "Industry Leadership", 
                description: "Recognized as Karnataka's premier managed farmland investment partner with 500+ acres under expert management",
                icon: "🏆"
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div 
                    className="premium-card"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{milestone.icon}</span>
                      <div className="font-mono text-amber-600 font-medium text-lg uppercase tracking-wider">{milestone.year}</div>
                    </div>
                    <h4 className="font-serif text-xl text-slate-800 mb-3">{milestone.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-4 border-white shadow-lg z-10"
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl mb-6">Our Commitment to Excellence</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Acres Under Expert Management" },
              { value: "Organic", label: "Certification Focus" },
              { value: "24/7", label: "Professional Support" },
              { value: "Karnataka", label: "Prime Agricultural Location" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="font-mono text-xs sm:text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}