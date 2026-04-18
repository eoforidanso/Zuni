import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

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
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMobileOpen(false) }, [location.pathname])

  // On home hero: pure glass | scrolled / other pages: white glass
  const onHero = isHome && !isScrolled && !isMobileOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        onHero
          ? 'py-5 bg-transparent'
          : 'py-3 glass-card border-b border-white/60 shadow-nav'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center shadow-glow-gold">
              <span className="text-white font-serif font-bold text-lg leading-none">Z</span>
            </div>
            <div>
              <div className={`font-serif font-semibold text-base leading-tight transition-colors duration-300 ${onHero ? 'text-white' : 'text-charcoal'}`}>
                Zuni Apartments
              </div>
              <div className={`text-[10px] leading-tight tracking-wide transition-colors duration-300 ${onHero ? 'text-white/60' : 'text-muted'}`}>
                Sunyani · Ghana
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? onHero
                        ? 'text-gold-light bg-white/10'
                        : 'text-coral bg-coral/8'
                      : onHero
                      ? 'text-white/85 hover:text-white hover:bg-white/12'
                      : 'text-charcoal/80 hover:text-coral hover:bg-soft-gray'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+233538739877"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                onHero ? 'text-white/75 hover:text-white' : 'text-muted hover:text-charcoal'
              }`}
            >
              <Phone size={13} />
              +233 538 739 877
            </a>
            <Link
              to="/rooms"
              className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 inline-flex items-center gap-1.5 ${
                onHero
                  ? 'glass-white text-white hover:bg-white/20 border border-white/25'
                  : 'bg-coral text-white hover:bg-coral-dark shadow-sm hover:shadow-glow-coral'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors duration-200 ${
              onHero ? 'text-white hover:bg-white/12' : 'text-charcoal hover:bg-soft-gray'
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
