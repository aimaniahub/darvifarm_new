import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Canvas3D } from './Canvas3D';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ExperienceSection() {
  const experiences = [
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L12 22"/>
          <path d="M8 6L12 10L16 6"/>
          <path d="M8 10L12 14L16 10"/>
        </svg>
      ),
      title: "Precision Agriculture",
      description: "Experience modern farming with drone monitoring, soil sensors, and data-driven crop management systems.",
      image: "/IMG-20250428-WA0081.jpg"
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 2V7C3 9.67 5.33 12 8 12H16C18.67 12 21 9.67 21 7V2"/>
          <path d="M7 2V12"/>
          <path d="M17 2V12"/>
        </svg>
      ),
      title: "Organic Certification",
      description: "Join our certified organic farming program with guaranteed premium pricing and export market access.",
      image: "/farm.jpg"
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="7" cy="18" r="3"/>
          <circle cx="18" cy="18" r="3"/>
          <path d="M5 18H3V12L7 8H15V18"/>
        </svg>
      ),
      title: "Equipment & Infrastructure",
      description: "Access to shared agricultural machinery, storage facilities, and processing units for maximum efficiency.",
      image: "/iot-home.jpg"
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 19A2 2 0 0 1 21 21H3A2 2 0 0 1 1 19V8A2 2 0 0 1 3 6H6L8 3H16L18 6H21A2 2 0 0 1 23 8V19Z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      ),
      title: "Agritourism Opportunities", 
      description: "Develop additional revenue streams through farm stays, educational tours, and agricultural workshops.",
      image: "/iot-home2.jpg"
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61A5.5 5.5 0 0 0 12 2A5.5 5.5 0 0 0 3.16 4.61A5.5 5.5 0 0 0 1 9.5C1 16 12 22 12 22S23 16 23 9.5A5.5 5.5 0 0 0 20.84 4.61Z"/>
        </svg>
      ),
      title: "Expert Mentorship",
      description: "Ongoing support from agricultural scientists and experienced farmers to maximize your farming success.",
      image: "/IMG-20250428-WA0080.jpg"
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8H6A2 2 0 0 0 4 10V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V10A2 2 0 0 0 18 8Z"/>
          <path d="M7 8V6A5 5 0 0 1 17 6V8"/>
        </svg>
      ),
      title: "Farming Community",
      description: "Connect with like-minded agricultural entrepreneurs and participate in knowledge-sharing networks.",
      image: "/farm.jpg"
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-green-50 py-20 overflow-hidden">
      {/* Enhanced Agricultural Canvas Background */}
      <Canvas3D variant="harvest-particles" className="opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            The <span className="text-green-600">Agricultural</span> Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            More than farmland ownership – access a complete agricultural ecosystem designed 
            to maximize your farming success, profitability, and sustainable practices.
          </p>
        </motion.div>

        {/* Agricultural Innovation Showcase */}
        <motion.div
          className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 md:h-[500px]">
            <ImageWithFallback
              src="/IMG-20250428-WA0080.jpg"
              alt="Modern agricultural experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-end">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">Smart Farming Revolution</h3>
                  <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                    Experience the future of agriculture with technology-driven farming solutions 
                    that increase yields while preserving environmental sustainability.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-sm opacity-80">Yield Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">60%</div>
                    <div className="text-sm opacity-80">Water Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">25%</div>
                    <div className="text-sm opacity-80">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agricultural Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm border border-green-200">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-green-600">{experience.icon()}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{experience.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stories from Agricultural Community */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-green-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif text-gray-900 text-center mb-12">Agricultural Success Stories</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Krishnan",
                role: "Organic Rice Farmer & Exporter",
                content: "My 15-acre organic rice farm through Darvi Group now exports to 3 countries. The soil quality and water management systems are exceptional.",
                image: "/farm.jpg",
                yield: "4.2 tons/acre",
                crop: "Organic Basmati Rice"
              },
              {
                name: "Arjun Reddy",
                role: "Spice Farmer & Agripreneur",
                content: "From software engineer to successful turmeric farmer. Darvi Group's mentorship program and market connections made this transition seamless.",
                image: "/iot-home.jpg",
                yield: "8.5 tons/acre",
                crop: "Premium Turmeric"
              },
              {
                name: "Maya & Raj Sharma",
                role: "Cotton Farmers & Agritourism",
                content: "Our 25-acre cotton farm not only produces premium organic cotton but also hosts 500+ visitors annually for educational tours.",
                image: "/iot-home2.jpg",
                yield: "2.8 tons/acre",
                crop: "Organic Cotton"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2 text-center">
                    <div className="font-medium text-green-600">{testimonial.yield}</div>
                    <div className="text-gray-500 text-xs">Average Yield</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2 text-center">
                    <div className="font-medium text-gray-700">{testimonial.crop}</div>
                    <div className="text-gray-500 text-xs">Primary Crop</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agricultural Training & Support Program */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif mb-4">Comprehensive Agricultural Support</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              From soil preparation to harvest, our expert team provides continuous guidance 
              to ensure your agricultural success and maximum profitability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L12 22"/>
                  <path d="M8 6L12 10L16 6"/>
                </svg>
              </div>
              <div className="text-2xl font-bold">Pre-Farming</div>
              <div className="text-green-100 text-sm">Soil analysis & crop selection</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="7" cy="18" r="3"/>
                  <circle cx="18" cy="18" r="3"/>
                  <path d="M5 18H3V12L7 8H15V18"/>
                </svg>
              </div>
              <div className="text-2xl font-bold">Cultivation</div>
              <div className="text-green-100 text-sm">Modern equipment & techniques</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 2V7C3 9.67 5.33 12 8 12H16C18.67 12 21 9.67 21 7V2"/>
                </svg>
              </div>
              <div className="text-2xl font-bold">Harvest</div>
              <div className="text-green-100 text-sm">Quality control & processing</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M18 8H6A2 2 0 0 0 4 10V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V10A2 2 0 0 0 18 8Z"/>
                </svg>
              </div>
              <div className="text-2xl font-bold">Marketing</div>
              <div className="text-green-100 text-sm">Premium pricing & export</div>
            </div>
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
          <h3 className="text-3xl font-serif text-gray-900 mb-6">Ready to Begin Your Agricultural Journey?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a visit to our model farms and experience firsthand the quality of our farmlands, 
            infrastructure, and support systems that ensure your agricultural success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Farm Visit
            </motion.button>
            <motion.button
              className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-3xl text-base sm:text-lg hover:bg-green-50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}