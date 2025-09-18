import { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Award, CheckCircle, ArrowRight, Star, Shield, Clock, ChevronRight, ChevronLeft, Phone, Mail, MapPin, Play, Sun, Moon, Heart, Sparkles, Quote } from 'lucide-react';

// Importing optimized images (Assuming they are in the public folder or imported)
// Place these images in your public/images folder or import them if using a bundler
const heroBackground = "https://www.fluxmagazine.com/wp-content/smush-webp/2022/11/Occasion-Web-1.jpg.webp";
const weddingService = "https://storyamour.com/wp-content/uploads/2023/04/what-is-a-white-wedding.jpg";
const corporateService = "https://alwaince.com/wp-content/uploads/2021/05/corporate-events.jpg";
const specialService = "https://www.fluxmagazine.com/wp-content/smush-webp/2022/11/Occasion-Web-1.jpg.webp";
const client1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJ7L_FteCQx0lz87BFr0UL2ixv-TUg5qrTg&s";
const client2 = "https://www.adventinternational.com/wp-content/uploads/2024/10/David-Chen-1400x1049.jpg";
const client3 = "https://media.themoviedb.org/t/p/w500/xtVgFYaAVzPZplXnWs91QLhnGnh.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const serviceInterval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 4000);
    
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });
    
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      clearInterval(serviceInterval);
      clearInterval(testimonialInterval);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  const nextTestimonial = () => {
    const maxSlides = (!isMobile && testimonials.length > 2) ? testimonials.length - 1 : testimonials.length - 1;
    setCurrentTestimonial((prev) => (prev + 1) % (maxSlides + 1));
  };

  const prevTestimonial = () => {
    const maxSlides = (!isMobile && testimonials.length > 2) ? testimonials.length - 1 : testimonials.length - 1;
    setCurrentTestimonial((prev) => (prev - 1 + maxSlides + 1) % (maxSlides + 1));
  };

  const services = [
    {
      image: weddingService,
      icon: <Calendar className="h-8 w-8 md:h-12 md:w-12 text-green-400" />,
      title: "Wedding Ceremonies",
      description: "Elegant coordination for your perfect wedding day with cultural sensitivity and attention to detail",
      features: ["Traditional ceremony expertise", "Vendor coordination", "Timeline management"],
      color: "from-rose-500/10 to-pink-500/10",
      accent: "rose"
    },
    {
      image: corporateService,
      icon: <Users className="h-8 w-8 md:h-12 md:w-12 text-green-400" />,
      title: "Corporate Events",
      description: "Professional Protocol & Services for executive meetings, conferences, and business celebrations",
      features: ["Executive protocol standards", "International delegation handling", "Brand-aligned execution"],
      color: "from-blue-500/10 to-indigo-500/10",
      accent: "blue"
    },
    {
      image: specialService,
      icon: <Award className="h-8 w-8 md:h-12 md:w-12 text-green-400" />,
      title: "Special Occasions",
      description: "Sophisticated coordination for anniversaries, cultural ceremonies, and milestone celebrations",
      features: ["Cultural ceremony expertise", "Personalized planning", "Guest management"],
      color: "from-emerald-500/10 to-teal-500/10",
      accent: "emerald"
    }
  ];

  const stats = [
    { number: "500+", label: "Events Coordinated", icon: <Calendar className="h-6 w-6 text-green-400" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="h-6 w-6 text-green-400" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6 text-green-400" /> },
    { number: "24/7", label: "Event Support", icon: <Shield className="h-6 w-6 text-green-400" /> }
  ];

  const testimonials = [
    {
      image: client1,
      name: "Sarah Mitchell",
      role: "Bride",
      content: "Imbuga Protocol made our wedding absolutely perfect. Every detail was handled with such care and professionalism.",
      rating: 5
    },
    {
      image: client2,
      name: "David Chen",
      role: "Corporate Executive",
      content: "Outstanding service for our international conference. The team's attention to protocol was impeccable.",
      rating: 5
    },
    {
      image: client3,
      name: "Marie Dubois",
      role: "Event Organizer",
      content: "Working with Imbuga Protocol has been a game-changer for our events. Truly exceptional service.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

      {/* Hero Section with 3D background and parallax effect */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
 
      >
        {/* 3D Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-slate-900 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: 'center',
            transform: 'scale(1.1)',
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/80"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-green-400 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-green-400/30 rounded-full animate-float-slower"></div>
        <div className="absolute bottom-60 right-32 w-3 h-3 bg-green-400/40 rounded-full animate-ping opacity-70"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Animated badge with micro-interaction */}
            <div className="mb-6 md:mb-8 animate-pulse-slow">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase bg-green-400/20 text-green-300 border border-green-400/30 backdrop-blur-sm hover:bg-green-400/30 transition-all duration-300 cursor-pointer group">
                <Sparkles className="h-3 w-3 mr-2 group-hover:rotate-180 transition-transform duration-700" />
                Premium Protocol & Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✨</span>
              </span>
            </div>
            
            {/* Main Heading with text reveal animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight text-white">
              <span className="block">Excellence in Every</span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 via-green-400 to-green-500 bg-clip-text text-transparent animate-gradient">
                Celebration
              </span>
            </h1>
            
            {/* Description with staggered animation */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 md:mb-12 text-slate-200 leading-relaxed max-w-4xl mx-auto px-4 animate-fade-in-up delay-300">
              Professional event coordination with impeccable attention to detail. 
              We ensure your weddings, corporate events, and special occasions reflect elegance and precision.
            </p>
            
            {/* CTA Buttons with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <button
                onClick={() => window.location.href = '/services'}
               className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-500 text-white px-6 md:px-8 py-3 md:py-4 font-semibold tracking-wide hover:from-green-500 hover:to-green-600 transition-all duration-300 inline-flex items-center justify-center group rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                EXPLORE SERVICES 
                <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
              onClick={() => window.location.href = '/contact'}
               className="w-full sm:w-auto border-2 border-white/80 text-white px-6 md:px-8 py-3 md:py-4 font-semibold tracking-wide hover:bg-white hover:text-slate-900 transition-all duration-300 rounded-xl backdrop-blur-sm hover:shadow-lg">
                SCHEDULE CONSULTATION
              </button>
            </div>
            
            {/* Quick Contact with micro-interactions */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-slate-300 text-sm md:text-base">
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 cursor-pointer">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+250 790 009 332</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 cursor-pointer">
                <Mail className="h-4 w-4 text-green-400" />
                <span>kellogademu@gmail.com</span>
              </div>
              <div 
                className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 cursor-pointer"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Imbuga Service & Protocol Team', '_blank')}
              >
                <MapPin className="h-4 w-4 text-green-400" />
                <span>Kigali,Kicukiro, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8 transform rotate-90 text-green-400 hover:text-green-300 transition-colors duration-300 cursor-pointer" />
        </div>
      </section>

      {/* Services Section with 3D card effect and images */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="py-16 md:py-24 bg-white dark:bg-slate-800 relative overflow-hidden transition-colors duration-300 opacity-0"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              Protocol & Services
            </h2>
            <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-green-400 to-green-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
              Comprehensive event coordination with cultural sensitivity and professional excellence
            </p>
          </div>

          {/* Services Grid with enhanced cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 hover:border-green-200 dark:hover:border-green-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  activeService === index ? 'ring-2 ring-green-400/50 shadow-xl' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Image background */}
                <div 
                  className="h-48 overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-xl group-hover:bg-green-400/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative p-6 md:p-8 lg:p-10">
                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3 md:mb-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm md:text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <button
                    onClick={() => window.location.href = '/services'}
                    className="w-full bg-slate-900 dark:bg-slate-800 text-white py-3 md:py-4 px-4 md:px-6 font-semibold hover:bg-green-600 transition-all duration-300 rounded-xl group-hover:shadow-lg flex items-center justify-center transform group-hover:-translate-y-1"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with counter animation */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="py-16 md:py-24 bg-slate-200 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300 opacity-0"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-3 md:mb-4 flex justify-center">
                  <div className="p-3 bg-green-400/10 rounded-full group-hover:bg-green-400/20 transition-colors duration-300 group-hover:scale-110">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300 animate-countup">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium tracking-wide  transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with enhanced visuals */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300 opacity-0"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Excellence</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 md:mb-8">
                Why Choose Imbuga Protocol?
              </h2>
              <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-green-400 to-green-500 mb-8 md:mb-10 rounded-full"></div>
              
              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: <Shield className="h-6 w-6 md:h-7 md:w-7 text-green-500" />, text: "15+ years of professional event coordination" },
                  { icon: <Star className="h-6 w-6 md:h-7 md:w-7 text-green-500" />, text: "Cultural sensitivity and traditional ceremony expertise" },
                  { icon: <Clock className="h-6 w-6 md:h-7 md:w-7 text-green-500" />, text: "Meticulous timeline management and execution" },
                  { icon: <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-green-500" />, text: "Comprehensive insurance and emergency planning" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 md:space-x-6 group hover:bg-slate-100 dark:hover:bg-slate-800 p-4 rounded-xl transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors duration-300 group-hover:scale-105">
                      {item.icon}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed pt-2 md:pt-3 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card with 3D effect */}
            <div className="relative">
              <div className="relative bg-slate-900 dark:bg-slate-800 text-white p-8 md:p-12 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">
                    <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">Get Started</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Begin?</h3>
                  <p className="text-slate-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    Schedule a complimentary consultation to discuss your event vision. 
                    Our team will create a customized protocol plan tailored to your specific needs.
                  </p>
                  
                  <button 
                    onClick={() => window.location.href = '/booking'}
                    className="w-full bg-gradient-to-r from-green-400 to-green-500 text-slate-100 py-3 md:py-4 px-6 font-semibold tracking-wide hover:from-green-500 hover:to-green-600 transition-all duration-300 rounded-xl mb-6 md:mb-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    SCHEDULE CONSULTATION
                  </button>
                  
                  {/* Features Grid */}
                  <div className="pt-6 border-t border-slate-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="group">
                        <div className="text-green-400 font-bold text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">Free</div>
                        <div className="text-xs md:text-sm text-slate-100 group-hover:text-slate-300 transition-colors duration-300">Consultation</div>
                      </div>
                      <div className="group">
                        <div className="text-green-400 font-bold text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">Custom</div>
                        <div className="text-xs md:text-sm text-slate-100 group-hover:text-slate-300 transition-colors duration-300">Proposals</div>
                      </div>
                      <div className="group">
                        <div className="text-green-400 font-bold text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-xs md:text-sm text-slate-100 group-hover:text-slate-300 transition-colors duration-300">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with enhanced cards */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="py-16 md:py-24 bg-white dark:bg-slate-800 transition-colors duration-300 opacity-0"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-green-600 dark:text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * (!isMobile && testimonials.length > 2 ? 50 : 100)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`${testimonials.length > 2 ? 'w-full md:w-1/2' : 'w-full'} flex-shrink-0`}>
                    <div className="bg-slate-50 dark:bg-slate-700 p-6 md:p-8 mx-2 rounded-2xl text-center shadow-lg">
                      <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 italic text-base leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-white">{testimonial.name}</div>
                        <div className="text-green-600 dark:text-green-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-green-500' : 'bg-gray-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with parallax effect */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden transition-colors duration-300 opacity-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,206,84,0.1),_transparent_70%)]"></div>
        
        {/* Animated elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-green-400/5 rounded-full animate-ping-slow"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Let's Create Something
            <span className="block text-green-400 animate-pulse-slow">Extraordinary Together</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto">
            Contact us today to start planning your perfect event with professional Protocol & Services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-lg mx-auto">
            <button 
              onClick={() => window.location.href = '/booking'}
              className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-500 text-gray-100 px-6 md:px-8 py-3 md:py-4 font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              GET STARTED TODAY
            </button>
            <button
              onClick={() => window.location.href = 'tel:+250790009332'}
              className="w-full sm:w-auto border-2 border-green-400 px-6 md:px-8 py-3 md:py-4 font-semibold hover:bg-green-400 text-slate-100 transition-all duration-300 rounded-xl flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              CALL US NOW
            </button>
          </div>
          
          {/* Social proof footer */}
          <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Trusted by 500+ clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-green-400" />
              <span>Industry award winner</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-green-400" />
              <span>5-star rated service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(3deg); }
          66% { transform: translateY(8px) rotate(-3deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(4px) rotate(-1deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite; 
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  )
}

export default Home;