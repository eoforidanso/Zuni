import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '../data/content'

export default function BlogSection() {
  return (
    <section className="py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag block mb-3">Travel Tips &amp; News</span>
          <h2 className="section-title mb-4">
            From the Zuni
            <br />
            <span className="text-gold">Travel Journal</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Insider guides, packing tips, and stories from guests and our team to make your
            Sunyani adventure unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 group ${
                index === 0 ? 'md:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-coral text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Calendar size={12} className="text-coral" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Clock size={12} className="text-coral" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2 leading-snug line-clamp-2 group-hover:text-coral transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-coral text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                >
                  Read More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
