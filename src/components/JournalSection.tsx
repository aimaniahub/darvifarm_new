import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function JournalSection() {
  const articles = [
    {
      id: 1,
      title: "The Future of Regenerative Agriculture in India",
      excerpt: "Exploring how traditional farming methods combined with modern technology are creating sustainable solutions for India's agricultural future.",
      category: "Sustainability",
      author: "Dr. Meera Krishnan",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/IMG-20250428-WA0080.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Smart Irrigation: Maximizing Yield with Minimal Water",
      excerpt: "Learn how IoT-powered irrigation systems are revolutionizing water usage in agriculture, reducing waste by up to 40%.",
      category: "Technology",
      author: "Arjun Sharma",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "/iot-home.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Building Your Dream Farmhouse: Design Principles",
      excerpt: "From sustainable materials to solar integration, discover the key elements that make a modern farmhouse both beautiful and eco-friendly.",
      category: "Lifestyle",
      author: "Priya Patel",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "/iot-home2.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Organic Farming: From Soil to Soul",
      excerpt: "Understanding the holistic approach to organic farming and how it creates healthier ecosystems while producing premium crops.",
      category: "Organic",
      author: "Rajesh Darvi",
      date: "March 8, 2024",
      readTime: "12 min read",
      image: "/farm.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Investment Trends: Farmland as an Asset Class",
      excerpt: "Why savvy investors are turning to agricultural land as a hedge against inflation and a source of stable, long-term returns.",
      category: "Investment",
      author: "Sandeep Kumar",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "/IMG-20250428-WA0081.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Community Gardens: Building Connections Through Agriculture",
      excerpt: "How shared farming spaces are fostering community bonds and creating sustainable local food systems in rural areas.",
      category: "Community",
      author: "Maya Singh",
      date: "March 3, 2024",
      readTime: "9 min read",
      image: "/iot-home.jpg",
      featured: false
    }
  ];

  const categories = ["All", "Sustainability", "Technology", "Lifestyle", "Organic", "Investment", "Community"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <section id="journal" className="relative min-h-screen bg-white py-16 sm:py-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 sm:mb-6">Journal & Insights</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Stay informed with the latest trends, insights, and stories from the world of sustainable agriculture and premium farmland investment.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-100 p-2 rounded-full flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && activeCategory === "All" && (
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover min-h-[250px] sm:min-h-[300px]"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge className="bg-green-600 text-white text-xs sm:text-sm">Featured</Badge>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-3 sm:mb-4 text-xs sm:text-sm">
                    {featuredArticle.category}
                  </Badge>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="w-fit bg-green-600 hover:bg-green-700 rounded-2xl text-sm sm:text-base">
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12,5 19,12 12,19"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full rounded-3xl">
                <div className="relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge variant="secondary" className="text-xs sm:text-sm">{article.category}</Badge>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 flex-grow text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4 mt-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-500">{article.date}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 text-xs sm:text-sm"
                      >
                        Read More 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12,5 19,12 12,19"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 sm:mt-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 sm:p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-3 sm:mb-4">Stay Updated</h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter for the latest insights, market trends, and exclusive opportunities in sustainable agriculture.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 transition-colors text-sm sm:text-base"
            />
            <Button className="bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}