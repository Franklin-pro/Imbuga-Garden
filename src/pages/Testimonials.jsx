import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send, CheckCircle, Quote, Heart, Upload, User } from 'lucide-react'

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    rating: 5,
    testimonial: '',
    allowPublic: false,
    profileImage: null
  })

  const [imagePreview, setImagePreview] = useState(null)

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({ ...prev, profileImage: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const eventTypes = [
    "Wedding",
    "Anniversary", 
    "Corporate Event",
    "Cultural Ceremony",
    "Award Ceremony",
    "Special Occasion"
  ]

  return (
    <div className="pt-20 ">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom text-center relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
              Share Your Experience
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Help others discover our exceptional protocol services by sharing your testimonial
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Form */}
      <section className="py-20  bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                  <div className="text-center mb-8">
                    <Quote className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-gray-100 mb-4">
                      Share Your Story
                    </h2>
                    <p className="text-slate-600 dark:text-gray-100">
                      Your feedback helps us improve and helps others choose our services
                    </p>
                  </div>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800 dark:text-green-200">Thank you for your testimonial!</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Profile Image Upload */}
                    <div className="text-center mb-6">
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-100 mb-4">
                        Profile Photo (Optional)
                      </label>
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 dark:border-slate-600 flex items-center justify-center mb-4 overflow-hidden">
                          {imagePreview ? (
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-full" />
                          ) : (
                            <User className="h-12 w-12 text-gray-400" />
                          )}
                        </div>
                        <label className="cursor-pointer bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors flex items-center">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Photo
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-gray-100 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-gray-100 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-gray-100 mb-2">
                          Event Type *
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-gray-100 mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-100 mb-4">
                        Rating *
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                            className={`p-2 rounded-lg transition-colors ${
                              star <= formData.rating
                                ? 'text-green-500'
                                : 'text-gray-300 dark:text-slate-600'
                            }`}
                          >
                            <Star className={`h-8 w-8 ${star <= formData.rating ? 'text-yellow-500' : ''}`} />
                          </button>
                        ))}
                        <span className="ml-4 text-sm text-slate-600 dark:text-gray-100 self-center">
                          {formData.rating} out of 5 stars
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-100 mb-2">
                        Your Testimonial *
                      </label>
                      <textarea
                        name="testimonial"
                        value={formData.testimonial}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="Tell us about your experience with our protocol services. What made your event special? How did our team help make your day perfect?"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="allowPublic"
                        checked={formData.allowPublic}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-green-500 focus:ring-gold border-gray-300 rounded"
                      />
                      <label className="text-sm text-slate-600 dark:text-gray-100">
                        I allow this testimonial to be displayed publicly on your website and marketing materials
                      </label>
                    </div>

                    <button
                      type="submit"
                       className="w-full bg-green-500 text-gray-100 hover:bg-green-600 cursor-pointer py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Submit Testimonial
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Info Panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-gold/10 dark:bg-gold/20 p-8 rounded-xl">
                  <Heart className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-gray-100 mb-4">
                    Why Your Feedback Matters
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-gray-100">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Helps us continuously improve our services
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Assists future clients in making informed decisions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Recognizes our team's hard work and dedication
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Builds trust within our community
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-100 mb-4">
                    What to Include
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-gray-100 text-sm">
                    <li>• Specific details about your event</li>
                    <li>• How our team exceeded your expectations</li>
                    <li>• The impact our services had on your special day</li>
                    <li>• Any standout moments or team members</li>
                    <li>• Why you would recommend us to others</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Privacy Notice
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your personal information will be kept confidential. Only testimonials 
                    with explicit permission will be used publicly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-700 dark:text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Thank You for Choosing Us
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your trust in our services means everything to us. We're honored to have been part of your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={() => window.location.href = '/services'}
            className=" cursor-pointer  bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center">
              Book Another Event
            </button>
            <button 
            onClick={() => window.location.href = '/contact'}
             className="border-2 cursor-pointer dark:border-white border-green-400 dark:text-white text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center">
              Refer a Friend
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials