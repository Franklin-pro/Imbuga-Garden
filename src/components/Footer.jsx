import { Crown, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Crown className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl  font-bold">Imbuga</span>
                <div className="text-xs text-white font-medium tracking-wider">Protocol & Services</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Professional Protocol & Services for weddings, corporate events, and special occasions. 
              We ensure every ceremony runs with elegance and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg  font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Wedding Protocol</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Corporate Events</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Anniversary Celebrations</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cultural Ceremonies</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Award Ceremonies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg  font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-sm">(+250) 790 009 332</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-sm">kellogademu@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div>Imbuga Garden</div>
                  <div>Kigali,Kicukiro, KK 500 ST</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div>Mon-sun: 9:00 AM - end PM</div>
                  <div>We are available 24/7 for emergencies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Imbuga Protocol & Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer