import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  Heart,
} from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Rooms & Suites', path: '/rooms' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
]

const services = [
  { label: 'Privacy Policy', path: '#' },
  { label: 'FAQ', path: '#' },
  { label: 'Terms & Conditions', path: '#' },
  { label: 'Cookie Policy', path: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Strip */}
      <div className="bg-coral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-1">
                Ready for a Luxury Stay in Sunyani?
              </h3>
              <p className="text-white/80 text-sm">
                Book your apartment today and experience comfort like never before.
              </p>
            </div>
            <Link
              to="/rooms"
              className="flex-shrink-0 bg-white text-coral font-semibold px-7 py-3.5 rounded-lg hover:bg-cream transition-all duration-200 hover:shadow-lg flex items-center gap-2"
            >
              Book Your Stay
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg leading-none">Z</span>
              </div>
              <div>
                <div className="font-serif font-semibold text-lg text-white leading-tight">
                  Zuni Apartments
                </div>
                <div className="text-xs text-white/50">Sunyani, Ghana</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Situated in the heart of Sunyani, Zuni Apartments delivers comfort, security, and
              exceptional service. Your luxury home in the Bono Region.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61579171847329"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-coral flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-coral flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-coral flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter / X"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-coral flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-coral text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-white/60 hover:text-coral text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-coral mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Plot No. 81, Block B, Dominase North,
                  <br />
                  Sector 17, Sunyani, Ghana
                </span>
              </li>
              <li>
                <a
                  href="tel:+233538739877"
                  className="flex items-center gap-3 text-white/60 hover:text-coral text-sm transition-colors duration-200"
                >
                  <Phone size={16} className="text-coral flex-shrink-0" />
                  +233 538 739 877
                </a>
              </li>
              <li>
                <a
                  href="tel:+233269576666"
                  className="flex items-center gap-3 text-white/60 hover:text-coral text-sm transition-colors duration-200"
                >
                  <Phone size={16} className="text-coral flex-shrink-0" />
                  +233 269 576 666
                </a>
              </li>
              <li>
                <a
                  href="mailto:zuniapartments@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-coral text-sm transition-colors duration-200"
                >
                  <Mail size={16} className="text-coral flex-shrink-0" />
                  zuniapartments@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="font-semibold text-white mb-1">Subscribe to Our Newsletter</h4>
              <p className="text-white/50 text-sm">
                Get travel tips, special offers, and updates from Zuni Apartments.
              </p>
            </div>
            <form
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-coral transition-colors duration-200"
              />
              <button
                type="submit"
                className="btn-primary py-2.5 px-5 text-sm flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Zuni Apartments. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-coral fill-coral" /> in Sunyani, Ghana
          </p>
        </div>
      </div>
    </footer>
  )
}
