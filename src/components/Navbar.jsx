import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Crown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Book Now', path: '/booking' }
  ]

  return (
    <nav className="bg-white/95  dark:bg-slate-900/95 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-gray-100 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Crown className="h-6 w-6 text-slate-800 dark:text-white" />
            </div>
            <div>
              <span className="text-2xl  font-bold text-slate-800 dark:text-white">Imbuga</span>
              <div className="text-xs text-slate-800 dark:text-white font-medium tracking-wider">PROTOCOL SERVICES</div>
            </div>
          </Link>

          <div className="hidden md:flex text-slate-800 dark:text-gray-100 items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'dark:text-white text-green-500 border-green-500 border-b-2 border-gold pb-1'
                    : 'text-slate-800 dark:text-gray-100 hover:text-green-600 hover:border-b-2 hover:border-green-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              to="/booking"
              className="w-full text-sm text-slate-100 dark:text-gray-100 py-3  bg-green-500 px-4 dark:bg-green-700 hover:bg-green-600 hover:text-white transition-colors rounded-lg"
            >
              BOOK NOW
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 text-slate-700 hover:text-white hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-4 mt-4 bg-green-500 text-white px-6 py-3 text-center font-medium hover-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                GET CONSULTATION
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar