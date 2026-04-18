import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Star, Shield } from 'lucide-react'
import BookingWidget from './BookingWidget'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Zuni Apartments – spacious living room with double-height ceiling, Sunyani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Trust badges top-right */}
      <div className="absolute top-24 right-6 hidden xl:flex flex-col gap-2 z-10">
        <div className="bg-white/15 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-2 border border-white/20">
          <Star size={13} className="text-gold fill-gold" />
          <span className="text-white text-xs font-semibold">4.9 / 5 Rating</span>
        </div>
        <div className="bg-white/15 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-2 border border-white/20">
          <Shield size={13} className="text-teal" />
          <span className="text-white text-xs font-semibold">Verified &amp; Secure</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Hero text */}
            <div className="text-white">
              {/* Location pill */}
              <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
                <MapPin size={13} className="text-gold-light" />
                <span className="text-sm font-medium text-white/90">
                  Sunyani, Bono Region · Ghana
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5">
                Your Luxury
                <br />
                <em className="text-gold-light not-italic">Home Away</em>
                <br />
                From Home
              </h1>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Fully furnished, air-conditioned apartments in the heart of Sunyani. Premium
                amenities, 24/7 security, and unmatched value — experience the Zuni difference.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  to="/rooms"
                  className="btn-primary py-3.5 px-7 text-base"
                >
                  View Rooms & Suites
                  <ArrowRight size={17} />
                </Link>
                <Link
                  to="/about"
                  className="text-white font-semibold flex items-center gap-2 hover:text-gold-light transition-colors duration-200"
                >
                  Discover More
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { value: '500+', label: 'Happy Guests' },
                  { value: '₵350', label: 'Per Night From' },
                  { value: '4.9★', label: 'Guest Rating' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-2xl font-semibold text-gold-light">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Booking widget */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      {/* Scroll hint */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-1.5 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </div>
    </section>
  )
}
