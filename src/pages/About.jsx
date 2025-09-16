import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Users, Award, Clock, Heart, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const stats = [
    { number: "500+", label: "Events Coordinated" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Cultural Ceremonies" }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Protocol Coordinator",
      experience: "12 years in event coordination",
      specialties: ["Wedding Ceremonies", "Corporate Events", "Cultural Protocols"]
    },
    {
      name: "Michael Chen",
      role: "Cultural Ceremony Specialist",
      experience: "10 years in traditional ceremonies",
      specialties: ["Asian Ceremonies", "Religious Protocols", "Family Traditions"]
    },
    {
      name: "Emily Rodriguez",
      role: "Corporate Event Manager",
      experience: "8 years in business events",
      specialties: ["Executive Meetings", "Award Ceremonies", "Conference Protocol"]
    }
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "Respect & Dignity",
      description: "We honor every tradition and ensure all participants feel valued and respected throughout the ceremony."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring your event exceeds expectations."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Precision",
      description: "Meticulous planning and timing ensure your event flows seamlessly from start to finish."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Collaboration",
      description: "We work closely with you, your family, and vendors to create a unified vision."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % team.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % team.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + team.length) % team.length)
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Imbuga Protocol</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional event coordination with cultural sensitivity and attention to detail
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                Founded in 2009, Imbuga Protocol began with a simple mission: to ensure that every 
                special occasion is celebrated with the dignity, respect, and precision it deserves. 
                Our founder, recognizing the need for professional protocol services in the community, 
                started with a passion for cultural ceremonies and traditional events.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                Over the years, we have expanded our services to include weddings, corporate events, 
                anniversaries, and cultural ceremonies. Our team brings together expertise in event 
                coordination, cultural traditions, and modern event management to create seamless 
                experiences for our clients.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-100">
                Today, we are proud to be the trusted protocol service provider for families, 
                businesses, and organizations throughout the region, helping them celebrate life's 
                most important moments with grace and professionalism.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-100 mb-6">
                To provide exceptional protocol services that honor traditions, respect cultural 
                diversity, and ensure every event is executed with precision and elegance.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-100">
                To be the premier protocol service provider, known for our cultural sensitivity, 
                attention to detail, and commitment to making every celebration memorable and meaningful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-600 dark:text-gray-100 font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100">
              Years of dedication to excellence in event protocol
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-gray-600 dark:text-gray-100 font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4"><Heart className="h-8 w-8 text-gray-900 dark:text-gray-100" /></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100">
              Experienced professionals dedicated to your event's success
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {team.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="text-center p-8 bg-gray-50 dark:bg-slate-800 mx-4 rounded-lg">
                      <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-${index === 0 ? '1494790108755-2616c5e29c3c' : index === 1 ? '1507003211169-0a1dd7228f2d' : '1573496359142-b8d87734a5a2'}?w=200&h=200&fit=crop&crop=face`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{member.name}</h3>
                      <p className="text-white font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-100 mb-6">{member.experience}</p>
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                          <Facebook className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                          <Instagram className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                          <MessageCircle className="h-5 w-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-500 text-slate-900 rounded-full flex items-center justify-center bg-green-500 transition-colors shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-500 text-slate-900 rounded-full flex items-center justify-center bg-green-500 transition-colors shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-green-500' : 'bg-gray-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About