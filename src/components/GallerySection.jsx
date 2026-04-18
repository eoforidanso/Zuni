import { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const photos = [
  {
    src: '/hero.jpg',
    alt: 'Double-height living room with staircase and leather sofas',
    label: 'Grand Living Room',
    span: 'col-span-2',
  },
  {
    src: '/exterior.jpg',
    alt: 'Zuni Apartments building exterior — Sunyani, Ghana',
    label: 'Building Exterior',
    span: 'col-span-1',
  },
  {
    src: '/lounge.jpg',
    alt: 'Open-plan lounge with feature ceiling and art',
    label: 'Feature Lounge',
    span: 'col-span-1',
  },
  {
    src: '/living-room.jpg',
    alt: 'Living room with built-in TV unit and dining area',
    label: 'Living & Dining',
    span: 'col-span-1',
  },
  {
    src: '/dining.jpg',
    alt: 'Elegant dining area with marble tile floor',
    label: 'Dining Room',
    span: 'col-span-1',
  },
  {
    src: '/kitchen.jpg',
    alt: 'Fully-equipped kitchen with gas cooker and refrigerator',
    label: 'Full Kitchen',
    span: 'col-span-2',
  },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null) // index or null

  const openLightbox = useCallback((i) => {
    setLightbox(i)
    document.body.classList.add('lightbox-open')
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.classList.remove('lightbox-open')
  }, [])

  const prev = useCallback(() => {
    setLightbox((i) => (i - 1 + photos.length) % photos.length)
  }, [])

  const next = useCallback(() => {
    setLightbox((i) => (i + 1) % photos.length)
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox, prev, next])

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-tag block mb-3">Photo Gallery</span>
            <h2 className="section-title mb-4">
              See It For
              <br />
              <span className="gold-text">Yourself</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Real photos of the actual apartments — no filters, no stock imagery. What you see
              is exactly what you get at Zuni Apartments.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 80} direction="scale" className={photo.span}>
              <button
                onClick={() => openLightbox(i)}
                className={`relative group overflow-hidden rounded-2xl w-full block ${
                  photo.src === '/hero.jpg' || photo.src === '/kitchen.jpg' ? 'h-56 sm:h-64' : 'h-48 sm:h-56'
                }`}
                aria-label={`View ${photo.label}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ '--tw-scale-x': 1.08, '--tw-scale-y': 1.08 }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300" />
                {/* Label + zoom icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full glass-md flex items-center justify-center mb-2">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                  <span className="glass-white text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {photo.label}
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/92 backdrop-blur-sm" />

          {/* Image panel */}
          <div
            className="relative z-10 max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full glass-white text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-float">
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
            </div>

            {/* Caption */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-white/70 text-sm">{photos[lightbox].label}</span>
              <span className="text-white/40 text-xs">
                {lightbox + 1} / {photos.length}
              </span>
            </div>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full glass-white text-white flex items-center justify-center hover:bg-white/20 transition-colors hidden sm:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full glass-white text-white flex items-center justify-center hover:bg-white/20 transition-colors hidden sm:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:hidden z-10">
            <button onClick={prev} className="w-11 h-11 rounded-full glass-white text-white flex items-center justify-center">
              <ChevronLeft size={20} />
            </button>
            <span className="text-white/50 text-xs">{lightbox + 1}/{photos.length}</span>
            <button onClick={next} className="w-11 h-11 rounded-full glass-white text-white flex items-center justify-center">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
