import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Canvas3D } from './Canvas3D';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OurCropsSection() {
  const [activeTab, setActiveTab] = useState('sandalwood');

  const crops = {
    sandalwood: {
      name: "Sandalwood",
      scientific: "Santalum album",
      tagline: "The Golden Wood of India",
      description: "Sandalwood is one of the world's most valuable trees, prized for its aromatic heartwood and essential oils. Our sandalwood plantations represent the pinnacle of agroforestry investment, offering exceptional long-term returns.",
      image: "/IMG-20250428-WA0080.jpg",
      marketValue: "₹15,000 - ₹25,000 per kg",
      maturityPeriod: "12-15 years",
      roi: "18-25% annually",
      features: [
        "Government-approved cultivation",
        "High-value essential oil production",
        "Sustainable harvesting practices",
        "Premium export market access",
        "Drought-resistant variety",
        "Expert plantation management"
      ],
      process: [
        "Soil preparation and testing",
        "Seedling selection and planting",
        "Regular monitoring and care",
        "Pest and disease management",
        "Harvesting and processing",
        "Market linkage and sales"
      ]
    },
    guava: {
      name: "Guava",
      scientific: "Psidium guajava",
      tagline: "The Superfruit Investment",
      description: "Our premium guava varieties offer excellent returns through both fresh fruit sales and value-added processing. With year-round production potential and growing health-conscious consumer demand, guava represents a stable, profitable investment.",
      image: "/farm.jpg",
      marketValue: "₹40 - ₹80 per kg",
      maturityPeriod: "2-3 years",
      roi: "25-35% annually",
      features: [
        "High-yielding varieties",
        "Year-round production",
        "Organic certification available",
        "Value-added processing options",
        "Strong domestic and export demand",
        "Climate-resilient cultivation"
      ],
      process: [
        "Variety selection and grafting",
        "Orchard establishment",
        "Irrigation system setup",
        "Pruning and canopy management",
        "Harvest and post-harvest handling",
        "Marketing and distribution"
      ]
    },
    melia: {
      name: "Melia Dubia",
      scientific: "Melia dubia",
      tagline: "The Fast-Growing Timber Giant",
      description: "Melia Dubia, locally known as Hebbevu, is a fast-growing timber species that offers excellent returns in a shorter timeframe. Its versatile wood is in high demand for furniture, construction, and paper industries.",
      image: "/IMG-20250428-WA0081.jpg",
      marketValue: "₹8,000 - ₹12,000 per ton",
      maturityPeriod: "5-7 years",
      roi: "20-30% annually",
      features: [
        "Rapid growth rate",
        "High timber quality",
        "Multiple industry applications",
        "Carbon credit potential",
        "Low maintenance requirements",
        "Excellent soil improvement properties"
      ],
      process: [
        "Site selection and preparation",
        "High-quality seedling plantation",
        "Spacing and density optimization",
        "Growth monitoring and thinning",
        "Timber harvesting",
        "Value addition and marketing"
      ]
    }
  };

  const currentCrop = crops[activeTab as keyof typeof crops];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-20 sm:py-32 overflow-hidden">
      {/* Background Animation */}
      <Canvas3D variant="growing-fields" className="opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="font-mono text-sm text-emerald-800 tracking-wider uppercase">Our Premium Crops</span>
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-800 mb-8 leading-tight">
            Cultivating <span className="text-emerald-600">Excellence</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our expertise spans three high-value crops, each carefully selected for their market potential, 
            sustainability, and ability to generate exceptional returns for our investors.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-emerald-200">
            {Object.entries(crops).map(([key, crop]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {crop.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Crop Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={currentCrop.image}
                  alt={currentCrop.name}
                  className="w-full h-96 sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <div className="font-mono text-sm text-emerald-600 uppercase tracking-wider mb-2">{currentCrop.scientific}</div>
                    <div className="font-serif text-2xl text-slate-800 mb-2">{currentCrop.tagline}</div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="font-serif text-lg font-bold text-emerald-600">{currentCrop.roi}</div>
                        <div className="font-mono text-xs text-slate-600 uppercase">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="font-serif text-lg font-bold text-emerald-600">{currentCrop.maturityPeriod}</div>
                        <div className="font-mono text-xs text-slate-600 uppercase">Maturity</div>
                      </div>
                      <div className="text-center">
                        <div className="font-serif text-sm font-bold text-emerald-600">{currentCrop.marketValue}</div>
                        <div className="font-mono text-xs text-slate-600 uppercase">Market Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-slate-800 mb-4">{currentCrop.name}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{currentCrop.description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-serif text-xl text-slate-800 mb-4">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentCrop.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="font-serif text-xl text-slate-800 mb-4">Our Cultivation Process</h4>
                <div className="space-y-3">
                  {currentCrop.process.map((step, index) => (
                    <motion.div
                      key={step}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-mono text-sm font-bold text-emerald-600">{index + 1}</span>
                      </div>
                      <span className="text-slate-600">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Comparison Table */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-emerald-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl text-slate-800 text-center mb-8">Investment Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-emerald-200">
                  <th className="text-left py-4 px-4 font-serif text-slate-800">Crop</th>
                  <th className="text-center py-4 px-4 font-mono text-xs uppercase text-slate-600">ROI</th>
                  <th className="text-center py-4 px-4 font-mono text-xs uppercase text-slate-600">Maturity</th>
                  <th className="text-center py-4 px-4 font-mono text-xs uppercase text-slate-600">Market Value</th>
                  <th className="text-center py-4 px-4 font-mono text-xs uppercase text-slate-600">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(crops).map(([key, crop]) => (
                  <tr key={key} className="border-b border-emerald-100 hover:bg-emerald-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-serif text-lg text-slate-800">{crop.name}</div>
                      <div className="font-mono text-xs text-slate-500">{crop.scientific}</div>
                    </td>
                    <td className="text-center py-4 px-4 font-semibold text-emerald-600">{crop.roi}</td>
                    <td className="text-center py-4 px-4 text-slate-600">{crop.maturityPeriod}</td>
                    <td className="text-center py-4 px-4 text-slate-600">{crop.marketValue}</td>
                    <td className="text-center py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        key === 'sandalwood' ? 'bg-yellow-100 text-yellow-800' :
                        key === 'guava' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {key === 'sandalwood' ? 'Medium' : key === 'guava' ? 'Low' : 'Low-Medium'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl sm:text-4xl text-slate-800 mb-6">Ready to Invest in Premium Crops?</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Each crop offers unique advantages and returns. Our experts will help you choose the perfect combination 
            for your investment goals and risk profile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Crop Consultation
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Crop Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}