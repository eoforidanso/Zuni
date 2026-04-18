import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Rooms & Suites', path: '/rooms' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  // On home page, start transparent; on other pages always white
  const isTransparent = isHome && !isScrolled && !isMobileOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
        isTransparent
          ? 'bg-transparent py-5'
          : 'bg-white shadow-nav py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg leading-none">Z</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif font-semibold text-lg leading-tight transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-charcoal'
                }`}
              >
                Zuni Apartments
              </span>
              <span
                className={`text-xs leading-tight transition-colors duration-300 ${
                  isTransparent ? 'text-white/70' : 'text-muted'
                }`}
              >
                Sunyani, Ghana
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isTransparent
                        ? 'text-gold-light'
                        : 'text-coral'
                      : isTransparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-charcoal hover:text-coral hover:bg-soft-gray'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+233538739877"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-muted hover:text-charcoal'
              }`}
            >
              <Phone size={14} />
              +233 538 739 877
            </a>
            <Link to="/rooms" className="btn-primary text-sm py-2.5 px-5">
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-charcoal hover:bg-soft-gray'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-coral bg-coral/5'
                    : 'text-charcoal hover:text-coral hover:bg-soft-gray'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-border space-y-2">
            <a
              href="tel:+233538739877"
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted"
            >
              <Phone size={14} />
              +233 538 739 877
            </a>
            <Link to="/rooms" className="btn-primary w-full justify-center text-sm py-3">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
