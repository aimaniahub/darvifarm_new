import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EstatesSection() {
  const [activeProperty, setActiveProperty] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const properties = [
    {
      id: 1,
      name: "Golden Valley Estate",
      location: "Karnataka, India",
      price: 250,
      acres: 25,
      features: ["Riverfront", "Organic Certified", "Solar Ready"],
      image: "/IMG-20250428-WA0081.jpg",
      soilHealth: 92,
      waterAccess: 100,
      sunExposure: 88,
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    {
      id: 2,
      name: "Emerald Hills Farm",
      location: "Tamil Nadu, India",
      price: 180,
      acres: 15,
      features: ["Orchard Ready", "Mountain View", "Well Water"],
      image: "/iot-home2.jpg",
      soilHealth: 87,
      waterAccess: 95,
      sunExposure: 91,
      coordinates: { lat: 11.1271, lng: 78.6569 }
    },
    {
      id: 3,
      name: "Sunrise Meadows",
      location: "Andhra Pradesh, India",
      price: 320,
      acres: 40,
      features: ["Farmhouse Included", "Irrigation System", "Road Access"],
      image: "/farm.jpg",
      soilHealth: 95,
      waterAccess: 90,
      sunExposure: 96,
      coordinates: { lat: 15.9129, lng: 79.7400 }
    }
  ];

  const filterFeatures = ["Riverfront", "Organic Certified", "Solar Ready", "Orchard Ready", "Mountain View", "Well Water", "Farmhouse Included", "Irrigation System", "Road Access"];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const filteredProperties = properties.filter(property => {
    const priceInRange = property.price >= priceRange[0] && property.price <= priceRange[1];
    const hasSelectedFeatures = selectedFeatures.length === 0 || 
      selectedFeatures.some(feature => property.features.includes(feature));
    return priceInRange && hasSelectedFeatures;
  });

  return (
    <section id="estates" className="relative min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">Premium Estates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover handpicked farmland opportunities, each offering unique potential for sustainable agriculture and long-term investment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                  <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"/>
                </svg>
                <h3 className="font-medium">Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Price Range (₹ Lakhs)
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    min={50}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₹{priceRange[0]}L</span>
                    <span>₹{priceRange[1]}L</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Features
                  </label>
                  <div className="space-y-2">
                    {filterFeatures.map(feature => (
                      <button
                        key={feature}
                        onClick={() => toggleFeature(feature)}
                        className={`text-left w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedFeatures.includes(feature)
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600 text-white">
                          {property.acres} Acres
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                            <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                          Virtual Tour
                        </Button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900 mb-1">
                            {property.name}
                          </h3>
                          <div className="flex items-center text-gray-600 text-sm">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                              <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
                              <circle cx="12" cy="10" r="3"/>
                            </svg>
                            {property.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-medium text-green-600">
                            ₹{property.price}L
                          </div>
                          <div className="text-sm text-gray-500">
                            ₹{Math.round(property.price / property.acres)}L/acre
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {property.features.map(feature => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Land Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                              <path d="M2 20H6L16 10L12 6L2 16V20Z"/>
                              <path d="M15 5L19 9"/>
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-gray-900">{property.soilHealth}%</div>
                          <div className="text-xs text-gray-500">Soil Health</div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                              <path d="M2 13.5L9 20.5L15.5 14L22 20.5V2.5L15.5 8.5L9 2.5L2 8.5V13.5Z"/>
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-gray-900">{property.waterAccess}%</div>
                          <div className="text-xs text-gray-500">Water Access</div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-600">
                              <circle cx="12" cy="12" r="5"/>
                              <path d="M12 1V3"/>
                              <path d="M12 21V23"/>
                              <path d="M4.22 4.22L5.64 5.64"/>
                              <path d="M18.36 18.36L19.78 19.78"/>
                              <path d="M1 12H3"/>
                              <path d="M21 12H23"/>
                              <path d="M4.22 19.78L5.64 18.36"/>
                              <path d="M18.36 5.64L19.78 4.22"/>
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-gray-900">{property.sunExposure}%</div>
                          <div className="text-xs text-gray-500">Sun Exposure</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700">
                          View Details
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Schedule Visit
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredProperties.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-gray-500 text-lg mb-4">No properties match your criteria</div>
                <Button 
                  onClick={() => {
                    setPriceRange([50, 500]);
                    setSelectedFeatures([]);
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-6 border-b">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Property Locations</h3>
            <p className="text-gray-600">Interactive map showing all available estates</p>
          </div>
          <div className="h-96 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 mx-auto mb-4">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div className="text-gray-600">Interactive Map Component</div>
              <div className="text-sm text-gray-500 mt-2">
                Click on property markers to view details
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}