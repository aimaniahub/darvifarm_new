import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Canvas3D } from './Canvas3D';

export function ElysianDifferenceSection() {
  const differences = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Expert-Led Agroforestry",
      description: "Our team of agriculture and forestry graduates brings decades of combined expertise to every project. We don't just plant trees; we design sustainable ecosystems that maximize both environmental and financial returns.",
      features: ["Agriculture & Forestry Graduates", "25+ Years Combined Experience", "Scientific Approach", "Continuous Research & Development"]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Prime Karnataka Farmland",
      description: "Strategically located in Karnataka's most fertile regions, our farmlands benefit from ideal climate conditions, rich soil composition, and excellent water access. Location is everything in agriculture.",
      features: ["Ideal Climate Conditions", "Rich Soil Composition", "Excellent Water Access", "Strategic Market Proximity"]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L12 22"/>
          <path d="M8 6L12 10L16 6"/>
          <path d="M8 10L12 14L16 10"/>
          <path d="M8 14L12 18L16 14"/>
        </svg>
      ),
      title: "Turnkey Investment Solution",
      description: "From initial consultation to harvest and sales, we handle every aspect of your agroforestry investment. You own the land, we manage the growth, and you enjoy the returns.",
      features: ["Complete Management", "Professional Oversight", "Market Linkage", "Transparent Reporting"]
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 py-20 sm:py-32 overflow-hidden">
      {/* Subtle Background Animation */}
      <Canvas3D variant="geometric-crops" className="opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="font-mono text-sm text-amber-800 tracking-wider uppercase">The Darvi Difference</span>
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-800 mb-8 leading-tight">
            Why Choose <span className="text-amber-600">Darvi Group</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            We don't just offer farmland; we provide a complete agroforestry investment ecosystem designed for long-term success and sustainable returns.
          </p>
        </motion.div>

        {/* Main Differences Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {differences.map((difference, index) => (
            <motion.div
              key={difference.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="premium-card h-full group">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-white">{difference.icon}</div>
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-slate-800 mb-4">{difference.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{difference.description}</p>

                {/* Features List */}
                <div className="space-y-3">
                  {difference.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Overview */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl sm:text-4xl mb-6">Our Proven Process</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A systematic approach to agroforestry investment that ensures optimal returns and sustainable growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understand your investment goals and risk profile"
              },
              {
                step: "02", 
                title: "Selection",
                description: "Choose the perfect farmland and crop combination"
              },
              {
                step: "03",
                title: "Management",
                description: "Professional cultivation and ongoing care"
              },
              {
                step: "04",
                title: "Returns",
                description: "Harvest, sales, and profit distribution"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="font-mono text-4xl font-bold text-amber-400 mb-4">{process.step}</div>
                <h4 className="font-serif text-xl mb-3">{process.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl sm:text-4xl text-slate-800 mb-6">Ready to Experience the Difference?</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Join the growing community of investors who trust Darvi Group for their agroforestry investments. 
            Schedule a consultation to learn how we can help you cultivate sustainable wealth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Investment Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}