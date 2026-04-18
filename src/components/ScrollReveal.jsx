import { useEffect, useRef } from 'react'

/**
 * Wraps children in a div that animates into view via IntersectionObserver.
 * direction: 'up' | 'down' | 'left' | 'right' | 'scale'
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('reveal-visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const dirClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[direction] || 'reveal-up'

  return (
    <div ref={ref} className={`reveal ${dirClass} ${className}`}>
      {children}
    </div>
  )
}
