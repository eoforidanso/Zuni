import { stats } from '../data/content'
import { TrendingUp, Star, Award, HeartHandshake } from 'lucide-react'

const icons = [TrendingUp, Star, Award, HeartHandshake]
const iconColors = ['text-coral', 'text-gold', 'text-teal', 'text-coral-light']
const iconBgs = ['bg-coral/15', 'bg-gold/15', 'bg-teal/15', 'bg-coral-light/15']

export default function StatsSection() {
  return (
    <section className="py-20 bg-dark-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob w-80 h-80 bg-coral/8 top-0 right-0 animate-float" />
      <div className="blob w-64 h-64 bg-gold/8 bottom-0 left-10 animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top label */}
        <p className="text-center text-gold font-semibold text-xs tracking-[0.2em] uppercase mb-10">
          Trusted by guests across Ghana &amp; beyond
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <div
                key={stat.label}
                className="glass-charcoal gradient-border rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${iconBgs[index]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={iconColors[index]} />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-white/50 text-xl ml-0.5">{stat.suffix}</span>
                </div>
                <p className="text-white/55 text-sm font-medium leading-snug">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
