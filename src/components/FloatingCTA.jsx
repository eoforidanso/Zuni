import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, Sparkles } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (~80vh)
      setVisible(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-400 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <Link
        to="/rooms"
        className="flex items-center gap-2 bg-charcoal/90 backdrop-blur-md border border-white/15 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-float hover:bg-coral hover:border-coral transition-all duration-250 hover:-translate-y-0.5 hover:shadow-glow-coral"
      >
        <Sparkles size={14} className="text-gold flex-shrink-0" />
        <span className="hidden sm:inline">Book a Room — </span>From ₵350/night
        <CalendarDays size={14} className="text-white/60 flex-shrink-0" />
      </Link>
    </div>
  )
}
