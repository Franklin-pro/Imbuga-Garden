import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Calendar, Users, Award, Heart, Building, Star, Crown, Sparkles, CheckCircle, ArrowRight, Phone } from 'lucide-react'

const Services = () => {
  const navigate = useNavigate()

  const handleServiceSelect = (serviceId) => {
    navigate('/booking', { state: { selectedService: serviceId } })
  }

  const services = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Wedding Protocol",
      subtitle: "Elegant Ceremonies",
      description: "Complete ceremonial coordination for your perfect wedding day with cultural sensitivity",
      features: ["Ceremony coordination", "Bridal party guidance", "Guest seating protocol"],
      price: "$1,500",
      popular: true
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Corporate Events",
      subtitle: "Executive Excellence", 
      description: "Professional Protocol & Services for business gatherings and corporate celebrations",
      features: ["Executive meetings", "Conference management", "VIP guest handling"],
      price: "$800"
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Anniversary Celebrations",
      subtitle: "Milestone Moments",
      description: "Sophisticated coordination for anniversary celebrations and family milestones",
      features: ["Milestone planning", "Family coordination", "Memory presentations"],
      price: "$600"
    },
    {
      icon: <Crown className="h-8 w-8 text-white" />,
      title: "Cultural Ceremonies",
      subtitle: "Traditional Excellence",
      description: "Respectful coordination of traditional and cultural events with authentic protocols",
      features: ["Traditional guidance", "Cultural expertise", "Religious protocols"],
      price: "$700"
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Special Occasions",
      subtitle: "Memorable Moments",
      description: "Protocol & Services for graduations, birthdays, and life's special celebrations",
      features: ["Graduation ceremonies", "Birthday celebrations", "Retirement parties"],
      price: "$400"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Award Ceremonies",
      subtitle: "Recognition Events",
      description: "Professional coordination for recognition events and achievement celebrations",
      features: ["Award presentations", "Speaker coordination", "Honoree management"],
      price: "$900"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://www.mi.edu/wp-content/uploads/2022/05/8-Vocal-Techniques-Every-Singer-Must-Know.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom text-center relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white text-sm font-medium tracking-widest uppercase mb-6 block">Our Services</span>
            <h1 className="text-5xl md:text-6xl  font-bold mb-6 text-white">
              Protocol & Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional coordination and etiquette guidance for every type of event
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-green-500 text-slate-100 px-3 py-1 text-xs font-bold rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full group-hover:-translate-y-1">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500/75 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl  font-bold text-slate-800 dark:text-gray-100 mb-2">{service.title}</h3>
                    <p className="text-white dark:text-gray-100 font-medium text-sm">{service.subtitle}</p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-gray-100 text-center mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700 dark:text-gray-100">
                        <CheckCircle className="h-4 w-4 text-white mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-slate-200 dark:border-slate-600 pt-6 text-center">
                    <div className="text-3xl  text-slate-800 dark:text-gray-100 font-bold mb-4">
                      {service.price}
                    </div>
                    <button 
                      onClick={() => handleServiceSelect(service.id)}
                      className="w-full bg-green-500 text-slate-100 py-3 font-semibold hover:bg-green-500 transition-colors rounded-lg"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold text-slate-800 dark:text-gray-100 mb-4">
              How We Work
            </h2>
            <div className="h-1 w-20 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 text-gray-900 dark:text-gray-100 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial meeting to understand your vision" },
              { step: "02", title: "Planning", desc: "Detailed protocol planning and timeline" },
              { step: "03", title: "Execution", desc: "Flawless event coordination" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 dark:bg-green-500/35 bg-green-500/75 dark:text-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-gray-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-slate-700 bg-slate-100 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl text-gray-900 dark:text-gray-100 font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl mb-8 text-gray-900 dark:text-gray-100 max-w-2xl mx-auto">
            Contact us today for a complimentary consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
             className=" dark:text-gray-100 px-8 py-4 font-semibold bg-green-500 transition-colors rounded-lg">
              Get Free Consultation
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+250790009332'}
            className="border-2 dark:border-white border-green-500 text-gray-900 dark:text-gray-100 px-8 py-4 font-semibold hover:bg-white hover:text-slate-800 transition-colors rounded-lg flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services