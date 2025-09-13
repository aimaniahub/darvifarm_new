import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Canvas3D } from './Canvas3D';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    budget: '',
    message: '',
    preferredDate: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Visit Our Office",
      details: [
        "Darvi Agro Developers LLP",
        "#2 Totad Building, Near HP Gas Agency",
        "Arjun Vihar, Gokul Road-580030",
        "Hubli, Karnataka, India"
      ]
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92V22A2 2 0 0 1 20 24A18 18 0 0 1 2 4A2 2 0 0 1 4 2H9.08A2 2 0 0 1 11 3.84L12.5 8.5A2 2 0 0 1 11.76 10.78L10.36 12.18A16 16 0 0 0 11.82 13.64L13.22 12.24A2 2 0 0 1 15.5 11.5L20.16 13A2 2 0 0 1 22 16.92Z"/>
        </svg>
      ),
      title: "Call Us",
      details: [
        "+91 9986-980777",
        "+91 9986-890777",
        "Available Mon-Sat",
        "9:00 AM - 6:00 PM IST"
      ]
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: "Email Us",
      details: [
        "nitingoudar@icloud.com",
        "info@darvigroup.com",
        "farmlands@darvigroup.com",
        "Response within 24 hours"
      ]
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-16 sm:py-20 overflow-hidden rounded-t-3xl">
      {/* 3D Canvas Background */}
      <Canvas3D variant="harvest-particles" className="opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to explore managed farmland opportunities in Karnataka? Our agroforestry specialists are here to guide you through every step of your agricultural investment journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-8 shadow-xl rounded-3xl bg-white/90 backdrop-blur-sm border border-green-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-gray-900">Schedule Your Farm Visit</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="rounded-2xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="rounded-2xl"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Visit Date
                    </label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="rounded-2xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest
                    </label>
                    <Select onValueChange={(value) => handleInputChange('interest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sandalwood">Sandalwood Plantation</SelectItem>
                        <SelectItem value="guava">Guava Agroforestry</SelectItem>
                        <SelectItem value="melia">Melia Dubia Timber</SelectItem>
                        <SelectItem value="mixed">Mixed Agroforestry</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-50">₹25L - ₹50L</SelectItem>
                        <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                        <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                        <SelectItem value="200+">₹2Cr+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your agroforestry interests, preferred crops, or any questions about our managed farmland services..."
                    rows={4}
                    className="rounded-2xl"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 py-3 text-base sm:text-lg rounded-2xl"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                        </svg>
                        Schedule Farm Visit
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 rounded-2xl">
                <p className="text-xs sm:text-sm text-green-800">
                  <strong>What happens next?</strong> Our agroforestry team will contact you within 24 hours to discuss your requirements and arrange a comprehensive farm visit to our Karnataka properties.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 rounded-3xl bg-white/90 backdrop-blur-sm border border-green-100">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <div className="text-green-600">{info.icon()}</div>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-xs sm:text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Office Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-3xl shadow-lg">
                <div className="relative h-48 sm:h-64">
                  <ImageWithFallback
                    src="/iot-home2.jpg"
                    alt="Darvi Group Office in Hubli"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <h3 className="text-lg sm:text-xl font-medium mb-1">Our Hubli Office</h3>
                    <p className="text-xs sm:text-sm opacity-90">Visit us for detailed agroforestry consultation</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4 text-center">Why Choose Darvi Group?</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div className="p-2 sm:p-3">
                    <div className="text-xl sm:text-2xl font-medium text-green-600">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Acres Managed</div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <div className="text-xl sm:text-2xl font-medium text-green-600">100+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Happy Investors</div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <div className="text-xl sm:text-2xl font-medium text-green-600">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <div className="text-xl sm:text-2xl font-medium text-green-600">Karnataka</div>
                    <div className="text-xs sm:text-sm text-gray-600">Prime Location</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-green-100">
            <h3 className="text-xl sm:text-2xl font-serif text-gray-900 text-center mb-6 sm:mb-8">Frequently Asked Questions</h3>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  question: "What is included in the farm visit?",
                  answer: "Our comprehensive farm visit includes agroforestry property tour, soil analysis report, crop suitability assessment, and consultation with our agriculture and forestry specialists."
                },
                {
                  question: "How does managed farmland work?",
                  answer: "We provide complete farmland management services including cultivation, maintenance, harvesting, and marketing of produce while you own the land and receive returns."
                },
                {
                  question: "What crops do you specialize in?",
                  answer: "We specialize in high-value agroforestry crops including sandalwood plantations, guava, and melia dubia (hebbevu), along with organic intercropping options."
                },
                {
                  question: "Do you provide organic certification?",
                  answer: "Yes, we offer comprehensive support for organic certification and maintain sustainable farming practices across all our managed farmland properties."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="space-y-2 p-4 bg-green-50/50 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">{faq.question}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}