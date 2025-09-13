import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Canvas3D } from './Canvas3D';

export function FarmlandsSection() {
  const [activeProperty, setActiveProperty] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const farmlands = [
    {
      id: 1,
      name: "Sandalwood Heritage Plantation",
      location: "Hubli-Dharwad, Karnataka",
      price: 45,
      acres: 15,
      soilType: "Red Laterite",
      cropSuitability: ["Sandalwood", "Intercropping", "Organic Vegetables"],
      features: ["Managed Farmland", "Organic Certified", "Expert Supervision", "Long-term Returns"],
      image: "/IMG-20250428-WA0080.jpg",
      soilHealth: 92,
      waterAccess: 95,
      rainfall: 800,
      temperature: "18-32°C",
      coordinates: { lat: 15.3647, lng: 75.1240 },
      nearbyMarkets: ["Hubli APMC", "Dharwad", "Bangalore"],
      infrastructure: {
        roadAccess: "National Highway 48 - 3km",
        electricity: "Available with subsidy",
        storage: "On-site processing facility"
      }
    },
    {
      id: 2,
      name: "Guava Grove Agroforestry",
      location: "Haveri District, Karnataka",
      price: 32,
      acres: 20,
      soilType: "Black Cotton",
      cropSuitability: ["Guava", "Melia Dubia", "Seasonal Crops"],
      features: ["Drip Irrigation", "Agroforestry Model", "Market Linkage", "Professional Management"],
      image: "/farm.jpg",
      soilHealth: 88,
      waterAccess: 85,
      rainfall: 650,
      temperature: "20-35°C",
      coordinates: { lat: 14.7951, lng: 75.4065 },
      nearbyMarkets: ["Haveri Market", "Ranebennur", "Hubli"],
      infrastructure: {
        roadAccess: "State Highway - Direct access",
        electricity: "3-phase available",
        storage: "Cold storage facility - 8km"
      }
    },
    {
      id: 3,
      name: "Melia Dubia Timber Estate",
      location: "Belgaum District, Karnataka",
      price: 28,
      acres: 25,
      soilType: "Red Sandy Loam",
      cropSuitability: ["Melia Dubia (Hebbevu)", "Timber Production", "Carbon Credits"],
      features: ["Fast Growing Trees", "Sustainable Forestry", "Carbon Sequestration", "Water Management"],
      image: "/IMG-20250428-WA0081.jpg",
      soilHealth: 85,
      waterAccess: 80,
      rainfall: 900,
      temperature: "16-30°C",
      coordinates: { lat: 15.8497, lng: 74.4977 },
      nearbyMarkets: ["Belgaum", "Gokak", "Kolhapur"],
      infrastructure: {
        roadAccess: "Village road - 2km to highway",
        electricity: "Available",
        storage: "Timber processing unit - 12km"
      }
    },
    {
      id: 4,
      name: "Mixed Agroforestry Model",
      location: "Gadag District, Karnataka",
      price: 38,
      acres: 18,
      soilType: "Alluvial",
      cropSuitability: ["Sandalwood", "Guava", "Seasonal Vegetables"],
      features: ["Diversified Plantation", "Organic Farming", "Expert Management", "Insurance Coverage"],
      image: "/iot-home.jpg",
      soilHealth: 90,
      waterAccess: 88,
      rainfall: 750,
      temperature: "18-34°C",
      coordinates: { lat: 15.4315, lng: 75.6300 },
      nearbyMarkets: ["Gadag", "Koppal", "Hubli"],
      infrastructure: {
        roadAccess: "NH-50 - 5km",
        electricity: "Solar + Grid connection",
        storage: "Multi-purpose storage - 6km"
      }
    }
  ];

  const filterFeatures = [
    "Managed Farmland", "Organic Certified", "Expert Supervision", 
    "Drip Irrigation", "Agroforestry Model", "Market Linkage", "Professional Management",
    "Water Management", "Carbon Sequestration", "Insurance Coverage", "Long-term Returns"
  ];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const filteredFarmlands = farmlands.filter(farmland => {
    const priceInRange = farmland.price >= priceRange[0] && farmland.price <= priceRange[1];
    const hasSelectedFeatures = selectedFeatures.length === 0 || 
      selectedFeatures.some(feature => farmland.features.includes(feature));
    return priceInRange && hasSelectedFeatures;
  });

  const MapView = () => (
    <div className="relative h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden">
      <Canvas3D variant="geometric-crops" className="opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Interactive Farmland Map</h3>
          <p className="text-gray-600 mb-4">Explore farmland locations with detailed geographic data</p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {filteredFarmlands.map(farmland => (
              <motion.div
                key={farmland.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-3 cursor-pointer border-2 border-transparent hover:border-green-500 transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveProperty(activeProperty === farmland.id ? null : farmland.id)}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-sm font-medium text-gray-900">{farmland.name}</div>
                </div>
                <div className="text-xs text-gray-600 mt-1">{farmland.acres} acres</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="farmlands" className="relative min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-20">
      <Canvas3D variant="farmland-seeds" className="opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-gray-900 mb-6">
            Premium <span className="text-green-600">Farmlands</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Discover Darvi Group's managed farmland opportunities specializing in high-value agroforestry crops 
            like sandalwood, guava, and melia dubia with professional management and proven track record in Karnataka.
          </p>
        </motion.div>

        {/* View Toggle */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'grid' 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'map' 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Map View
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Enhanced Filters Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 lg:p-6 bg-white/70 backdrop-blur-sm border border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                  <path d="M22 3L2 3L10 12.46L10 19L14 21L14 12.46L22 3Z"/>
                </svg>
                <h3 className="font-medium">Agricultural Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Investment Range (₹ Lakhs)
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

                {/* Agricultural Features */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Agricultural Features
                  </label>
                  <div className="space-y-2">
                    {filterFeatures.map(feature => (
                      <button
                        key={feature}
                        onClick={() => toggleFeature(feature)}
                        className={`text-left w-full px-3 py-2 rounded-lg text-sm transition-all ${
                          selectedFeatures.includes(feature)
                            ? 'bg-green-100 text-green-800 border border-green-200 shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700'
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

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {viewMode === 'map' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MapView />
              </motion.div>
            ) : (
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {filteredFarmlands.map((farmland, index) => (
                  <motion.div
                    key={farmland.id}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-green-200">
                      <div className="relative">
                        <ImageWithFallback
                          src={farmland.image}
                          alt={farmland.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-green-600 text-white shadow-lg">
                            {farmland.acres} Acres
                          </Badge>
                          <Badge className="bg-yellow-600 text-white shadow-lg">
                            {farmland.soilType}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Button
                            size="sm"
                            className="bg-white/90 hover:bg-white text-green-700 shadow-lg"
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
                              {farmland.name}
                            </h3>
                            <div className="flex items-center text-gray-600 text-sm">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                                <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z"/>
                                <circle cx="12" cy="10" r="3"/>
                              </svg>
                              {farmland.location}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-medium text-green-600">
                              ₹{farmland.price}L
                            </div>
                            <div className="text-sm text-gray-500">
                              ₹{Math.round(farmland.price / farmland.acres)}L/acre
                            </div>
                          </div>
                        </div>

                        {/* Crop Suitability */}
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-700 mb-2">Suitable Crops:</div>
                          <div className="flex flex-wrap gap-1">
                            {farmland.cropSuitability.map(crop => (
                              <Badge key={crop} variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                                {crop}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {farmland.features.map(feature => (
                            <Badge key={feature} className="text-xs bg-green-100 text-green-800 border border-green-200">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        {/* Agricultural Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                                <path d="M12 2L12 22"/>
                                <path d="M8 6L12 10L16 6"/>
                                <path d="M8 10L12 14L16 10"/>
                              </svg>
                            </div>
                            <div className="text-sm font-medium text-gray-900">{farmland.soilHealth}%</div>
                            <div className="text-xs text-gray-500">Soil Health</div>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                                <path d="M2 13.5L9 20.5L15.5 14L22 20.5V2.5L15.5 8.5L9 2.5L2 8.5V13.5Z"/>
                              </svg>
                            </div>
                            <div className="text-sm font-medium text-gray-900">{farmland.waterAccess}%</div>
                            <div className="text-xs text-gray-500">Water Access</div>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-600">
                                <path d="M18 10H22L20 7L22 4H18L16 7L18 10Z"/>
                                <path d="M14 4H10L8 7L10 10H14L16 7L14 4Z"/>
                                <path d="M6 10H2L4 7L2 4H6L8 7L6 10Z"/>
                              </svg>
                            </div>
                            <div className="text-sm font-medium text-gray-900">{farmland.rainfall}mm</div>
                            <div className="text-xs text-gray-500">Annual Rainfall</div>
                          </div>
                        </div>

                        {/* Climate & Market Info */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4 text-sm">
                          <div>
                            <div className="font-medium text-gray-700">Temperature Range</div>
                            <div className="text-gray-600">{farmland.temperature}</div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-700">Nearest Market</div>
                            <div className="text-gray-600">{farmland.nearbyMarkets[0]}</div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl text-xs sm:text-sm">
                            View Agroforestry Details
                          </Button>
                          <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50 rounded-2xl text-xs sm:text-sm">
                            Schedule Farm Visit
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {filteredFarmlands.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-gray-500 text-lg mb-4">No farmlands match your criteria</div>
                <Button 
                  onClick={() => {
                    setPriceRange([50, 500]);
                    setSelectedFeatures([]);
                  }}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Enhanced Agricultural Data Visualization */}
        <motion.div
          className="mt-12 sm:mt-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-green-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">Darvi Group Agroforestry Statistics</h3>
            <p className="text-sm sm:text-base text-gray-600">Performance metrics from our managed farmland portfolio in Karnataka</p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg width="24" height="24" className="sm:w-8 sm:h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3L21 21"/>
                    <path d="M9 9H5A2 2 0 0 0 3 11V20A2 2 0 0 0 5 22H19A2 2 0 0 0 21 20V11A2 2 0 0 0 19 9H15"/>
                    <path d="M9 21V9A2 2 0 0 1 11 7H13A2 2 0 0 1 15 9V21"/>
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Acres Under Management</div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg width="24" height="24" className="sm:w-8 sm:h-8 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
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
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Karnataka</div>
                <div className="text-sm sm:text-base text-gray-600">Prime Agricultural Region</div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg width="24" height="24" className="sm:w-8 sm:h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21V19A2 2 0 0 0 14 17H10A2 2 0 0 0 8 19V21"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-sm sm:text-base text-gray-600">Satisfied Investors</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}