import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Star, Shield, ChevronDown, Sparkles } from 'lucide-react'
import BookingWidget from './BookingWidget'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury apartment with pool view at Zuni Apartments, Sunyani"
          className="w-full h-full object-cover scale-105"
          style={{ transformOrigin: 'center center' }}
        />
        {/* Directional gradient: dark left → transparent right */}
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Bottom fade into cream */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent" />
      </div>

      {/* ── Decorative blobs ── */}
      <div className="blob w-96 h-96 bg-coral/15 top-1/4 left-[5%] animate-float" />
      <div className="blob w-72 h-72 bg-gold/12 bottom-1/3 left-[20%] animate-float-slow" />

      {/* ── Trust badges (top-right) ── */}
      <div className="absolute top-24 right-6 hidden xl:flex flex-col gap-2 z-10">
        <div className="glass-white rounded-xl px-3 py-2 flex items-center gap-2">
          <Star size={13} className="text-gold fill-gold" />
          <span className="text-white text-xs font-semibold">4.9 · Exceptional</span>
        </div>
        <div className="glass-white rounded-xl px-3 py-2 flex items-center gap-2">
          <Shield size={13} className="text-teal" />
          <span className="text-white text-xs font-semibold">Verified & Secure</span>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 sm:pt-28 pb-10 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-20 items-center">

            {/* Left — Hero text */}
            <div className="text-white">
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 glass-white rounded-full px-4 py-2 mb-7 animate-fade-in">
                <MapPin size={13} className="text-gold-light" />
                <span className="text-sm font-medium text-white/90">
                  Sunyani · Bono Region · Ghana
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-semibold leading-[1.1] mb-4 sm:mb-6">
                <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                  Your Luxury
                </span>
                <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}>
                  <em className="not-italic gold-text">Home Away</em>
                </span>
                <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.40s', animationFillMode: 'forwards' }}>
                  From Home
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-[480px] opacity-0 animate-fade-up"
                style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
              >
                Fully furnished, air-conditioned suites in the vibrant heart of Sunyani.
                Premium amenities, 24/7 security, and genuine Ghanaian hospitality.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-4 mb-10 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.70s', animationFillMode: 'forwards' }}
              >
                <Link to="/rooms" className="btn-primary py-3.5 px-7 text-base">
                  Explore Rooms
                  <ArrowRight size={17} />
                </Link>
                <Link
                  to="/about"
                  className="glass-white rounded-xl py-3.5 px-7 text-base font-semibold text-white hover:bg-white/20 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <Sparkles size={15} className="text-gold" />
                  Learn More
                </Link>
              </div>

              {/* Glass stats row */}
              <div
                className="flex flex-wrap items-center gap-4 glass-white rounded-2xl px-5 py-4 opacity-0 animate-fade-up w-fit"
                style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
              >
                {[
                  { value: '500+', label: 'Happy Guests' },
                  { value: '₵350', label: 'From / night' },
                  { value: '4.9★', label: 'Rating' },
                ].map((stat, i) => (
                  <div key={stat.label} className={`text-center ${i > 0 ? 'border-l border-white/20 pl-6' : ''}`}>
                    <div className="font-serif text-xl font-bold text-gold-light">{stat.value}</div>
                    <div className="text-white/55 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Booking widget (desktop only) */}
            <div className="hidden lg:block w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <BookingWidget />
            </div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="relative z-10 flex justify-center pb-10">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
          <ChevronDown size={16} className="animate-scroll-bounce" />
        </div>
      </div>
    </section>
  )
}
