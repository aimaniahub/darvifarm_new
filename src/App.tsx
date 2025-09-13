import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ElysianDifferenceSection } from './components/ElysianDifferenceSection';
import { FarmlandsSection } from './components/FarmlandsSection';
import { OurCropsSection } from './components/OurCropsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <div id="difference">
        <ElysianDifferenceSection />
      </div>
      <div id="farmlands">
        <FarmlandsSection />
      </div>
      <div id="crops">
        <OurCropsSection />
      </div>
      <div id="journey">
        <ExperienceSection />
      </div>
      <div id="insights">
        <JournalSection />
      </div>
      <ContactSection />
      
      {/* Premium Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/darvi-farm-logo.svg" 
                  alt="Darvi Group Logo" 
                  className="h-10 w-auto object-contain filter brightness-0 invert"
                />
                <div>
                  <div className="font-serif text-xl font-semibold">Darvi Group</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-white/70">Agroforestry Excellence</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed max-w-md">
                Cultivating generational wealth through sustainable sandalwood, guava, and melia dubia plantations. 
                Expert-managed agroforestry investments in Karnataka's prime agricultural regions.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#philosophy" className="hover:text-white transition-colors">Our Philosophy</a></li>
                <li><a href="#difference" className="hover:text-white transition-colors">The Darvi Difference</a></li>
                <li><a href="#farmlands" className="hover:text-white transition-colors">Premium Farmlands</a></li>
                <li><a href="#crops" className="hover:text-white transition-colors">Our Crops</a></li>
                <li><a href="#journey" className="hover:text-white transition-colors">Investment Journey</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Darvi Agro Developers LLP</li>
                <li>#2 Totad Building, Near HP Gas Agency</li>
                <li>Arjun Vihar, Gokul Road</li>
                <li>Hubli, Karnataka 580030</li>
                <li className="pt-2">
                  <a href="tel:+919986980777" className="hover:text-white transition-colors">+91 9986-980777</a>
                </li>
                <li>
                  <a href="mailto:nitingoudar@icloud.com" className="hover:text-white transition-colors">nitingoudar@icloud.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              © 2024 Darvi Agro Developers LLP. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Investment Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}