/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF385C',
        'coral-dark': '#E31C5F',
        'coral-light': '#FF6B81',
        gold: '#C8A850',
        'gold-light': '#DFBe72',
        'gold-dark': '#A88830',
        charcoal: '#1A1A1A',
        muted: '#717171',
        cream: '#FAFAF8',
        'soft-gray': '#F7F7F5',
        border: '#E8E8E8',
        teal: '#00A699',
        'teal-dark': '#007F77',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(15,15,15,0.88) 0%, rgba(15,15,15,0.55) 55%, rgba(15,15,15,0.20) 100%)',
        'card-gradient': 'linear-gradient(to top, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.55) 50%, transparent 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C8A850 0%, #DFBe72 50%, #C8A850 100%)',
        'coral-gradient': 'linear-gradient(135deg, #FF385C 0%, #E31C5F 100%)',
        'dark-gradient': 'linear-gradient(135deg, #111111 0%, #1e1e1e 50%, #0f0f0f 100%)',
        'warm-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2a1810 60%, #1A1A1A 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 65px rgba(0,0,0,0.15)',
        'card': '0 4px 28px rgba(0,0,0,0.08)',
        'nav': '0 2px 24px rgba(0,0,0,0.10)',
        'glass': '0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.18)',
        'glass-sm': '0 4px 16px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.14)',
        'glow-coral': '0 0 40px rgba(255,56,92,0.30)',
        'glow-gold': '0 0 40px rgba(200,168,80,0.30)',
        'float': '0 30px 60px -12px rgba(0,0,0,0.28)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scroll-bounce': 'scrollBounce 1.6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '60%': { transform: 'translateY(8px)', opacity: '0.3' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,56,92,0.25)' },
          '50%': { boxShadow: '0 0 45px rgba(255,56,92,0.55)' },
        },
      },
    },
  },
  plugins: [],
}
