import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, Calendar, Users, Award, Heart, Building, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 6

  const categories = [
    { id: 'all', name: 'All Events', icon: <Star className="h-5 w-5" /> },
    { id: 'wedding', name: 'Weddings', icon: <Heart className="h-5 w-5" /> },
    { id: 'corporate', name: 'Corporate', icon: <Building className="h-5 w-5" /> },
    { id: 'anniversary', name: 'Anniversaries', icon: <Calendar className="h-5 w-5" /> },
    { id: 'cultural', name: 'Cultural', icon: <Users className="h-5 w-5" /> },
    { id: 'award', name: 'Awards', icon: <Award className="h-5 w-5" /> }
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
      category: 'wedding',
      title: 'Elegant Wedding Ceremony',
      description: 'Beautiful outdoor wedding with traditional protocol coordination'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      category: 'corporate',
      title: 'Corporate Gala Event',
      description: 'Professional corporate event with executive protocol management'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      category: 'anniversary',
      title: '50th Anniversary Celebration',
      description: 'Golden anniversary celebration with family protocol coordination'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
      category: 'cultural',
      title: 'Traditional Cultural Ceremony',
      description: 'Authentic cultural ceremony with respectful protocol guidance'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      category: 'award',
      title: 'Award Recognition Event',
      description: 'Professional award ceremony with honoree protocol management'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
      category: 'wedding',
      title: 'Garden Wedding Reception',
      description: 'Intimate garden wedding with personalized Protocol & Services'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800',
      category: 'corporate',
      title: 'Business Conference',
      description: 'International business conference with VIP protocol handling'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800',
      category: 'anniversary',
      title: 'Silver Anniversary Party',
      description: '25th anniversary celebration with elegant protocol coordination'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      category: 'cultural',
      title: 'Heritage Festival',
      description: 'Community heritage festival with cultural sensitivity protocols'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage)

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom text-center relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl  font-bold mb-6 text-white">
              Event Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Showcasing our professional Protocol & Services across various events and celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'dark:bg-green-500 dark:text-slate-100 bg-green-500/35 text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-green-500/20 dark:hover:bg-green-500/20'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl  font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 bg-green-500 rounded-full right-4">
                    <span className="bg-green-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {categories.find(cat => cat.id === image.category)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl  font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pb-12 bg-white dark:bg-slate-900">
          <div className="container-custom">
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? 'text-gray-400 dark:text-slate-500 cursor-not-allowed'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-green-500 hover:text-slate-900'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-green-500 text-slate-900'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-green-500/20'
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'text-gray-400 dark:text-slate-500 cursor-not-allowed'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-green-500 hover:text-slate-900'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="text-center mt-4 text-sm text-slate-500 dark:text-slate-400">
              Showing {startIndex + 1}-{Math.min(startIndex + imagesPerPage, filteredImages.length)} of {filteredImages.length} images
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 dark:bg-gray-700  dark:text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl  font-bold mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create memorable moments with our professional Protocol & Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/services'}
             className="bg-green-500 dark:text-slate-100 px-8 py-4 font-semibold hover:bg-green-600 cursor-pointer transition-colors rounded-lg">
              View Our Services
            </button>
            <button onClick={() => window.location.href = 'tel:+250790009332'} className="border-2 dark:border-white dark:text-white px-8 py-4 font-semibold hover:bg-white hover:text-slate-800 transition-colors rounded-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery