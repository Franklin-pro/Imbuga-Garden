import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"]
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email",
      details: ["info@imbugaprotocol.com", "events@imbugaprotocol.com"]
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Address",
      details: ["123 Event Plaza", "City, State 12345"]
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"]
    }
  ]

  const eventTypes = [
    "Wedding",
    "Anniversary",
    "Corporate Event",
    "Cultural Ceremony",
    "Award Ceremony",
    "Special Occasion",
    "Other"
  ]

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://www.mi.edu/wp-content/uploads/2022/05/8-Vocal-Techniques-Every-Singer-Must-Know.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to plan your perfect event? Get in touch for a free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get Your Free Quote</h2>
              <p className="text-gray-600 dark:text-gray-100 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a 
                personalized quote for your event.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800">Thank you! We'll contact you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Tell us about your event, guest count, specific requirements, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-gray-100 hover:bg-green-600 cursor-pointer py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-100 mb-8">
                We're here to help make your event perfect. Reach out to us through any 
                of the following methods.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-green-100 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-900 dark:text-gray-100">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 dark:bg-slate-700 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex text-gray-900 dark:text-gray-100 items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    Free initial consultation
                  </li>
                  <li className="flex text-gray-900 dark:text-gray-100 items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    15+ years of experience
                  </li>
                  <li className="flex text-gray-900 dark:text-gray-100 items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    Cultural sensitivity expertise
                  </li>
                  <li className="flex text-gray-900 dark:text-gray-100 items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    24/7 event day support
                  </li>
                  <li className="flex text-gray-900 dark:text-gray-100 items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    Comprehensive insurance coverage
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-700 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl mb-8">
            Don't wait - the best dates book up quickly. Contact us today to secure your event date.
          </p>
          <div className="space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row justify-center">
            <a
              href="tel:+250790009332"
              className="dark:bg-white dark:text-gray-800 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a
              href="mailto:kellogademu@gmail.com"
              className="border-2 dark:border-white border-green-400 dark:text-white text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
            <a
              href="https://wa.me/250790009332"
              className=" bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact