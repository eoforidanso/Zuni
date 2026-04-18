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
        'hero-gradient': 'linear-gradient(to bottom, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.3) 50%, rgba(26,26,26,0.65) 100%)',
        'card-gradient': 'linear-gradient(to top, rgba(26,26,26,0.85) 0%, transparent 60%)',
        'gold-gradient': 'linear-gradient(135deg, #C8A850 0%, #DFBe72 50%, #C8A850 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0,0,0,0.12)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'nav': '0 2px 20px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
