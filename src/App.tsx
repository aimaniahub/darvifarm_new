import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { FarmlandsSection } from './components/FarmlandsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <FarmlandsSection />
      <ExperienceSection />
      <SustainabilitySection />
      <JournalSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex justify-center mb-4">
                <img 
                  src="/darvi-farm-logo.svg" 
                  alt="Darvi Group Logo" 
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Specialized managed farmland services in Karnataka, focusing on sandalwood, guava, and melia dubia agroforestry with professional agricultural management.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#philosophy" className="hover:text-white transition-colors">Our Philosophy</a></li>
                <li><a href="#farmlands" className="hover:text-white transition-colors">Managed Farmlands</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Agroforestry Experience</a></li>
                <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainable Farming</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Managed Farmland</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agroforestry Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organic Certification</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Linkage</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>#2 Totad Building, Near HP Gas Agency</li>
                <li>Arjun Vihar, Gokul Road</li>
                <li>Hubli, Karnataka 580030</li>
                <li>+91 9986-980777</li>
                <li>nitingoudar@icloud.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Darvi Agro Developers LLP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}