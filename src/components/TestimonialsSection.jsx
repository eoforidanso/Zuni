import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/content'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold fill-gold' : 'text-border fill-border'}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  function prev() {
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  }

  function next() {
    setActive((a) => (a + 1) % testimonials.length)
  }

  // show 3 at a time on desktop, 1 on mobile
  const visible = [
    testimonials[active % testimonials.length],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ]

  return (
    <section className="py-24 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-gold font-semibold text-sm tracking-widest uppercase block mb-3">
              Guest Reviews
            </span>
            <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              What Our Guests
              <br />
              <span className="text-gold-light">Are Saying</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-coral flex items-center justify-center text-white hover:bg-coral-dark transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className={`glass-charcoal gradient-border rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02] shimmer-overlay ${
                i === 0 ? 'ring-1 ring-coral/30' : ''
              }`}
            >
              {/* Quote icon */}
              <Quote size={26} className="text-coral mb-4 opacity-70" />

              {/* Review */}
              <p className="text-white/75 text-sm leading-relaxed mb-6 line-clamp-5">
                "{t.review}"
              </p>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ring-2 ring-white/10 ${t.avatarColor}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/45 text-xs">{t.role} · {t.location}</div>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-white/25 text-xs">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-200 ${
                i === active % testimonials.length
                  ? 'w-6 h-2 bg-coral'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
