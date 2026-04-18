import { stats } from '../data/content'
import { TrendingUp, Star, Award, HeartHandshake } from 'lucide-react'

const icons = [TrendingUp, Star, Award, HeartHandshake]

export default function StatsSection() {
  return (
    <section className="py-16 bg-coral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <div key={stat.label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>
                <div className="font-serif text-4xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-white/70 text-xl">{stat.suffix}</span>
                </div>
                <p className="text-white/80 text-sm font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
