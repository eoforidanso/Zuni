import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full bg-coral text-white flex items-center justify-center shadow-glow-coral transition-all duration-300 hover:bg-coral-dark hover:scale-110 active:scale-95 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  )
}
