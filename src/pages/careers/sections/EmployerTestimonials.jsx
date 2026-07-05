import { careerPage } from '../../../data/content'
import SectionHeading from '../../../components/ui/SectionHeading'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-racingRed"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function EmployerTestimonials() {
  const { testimonials } = careerPage

  return (
    <section className="relative overflow-hidden py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-twilightIndigo" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-twilightIndigo via-twilightIndigo/95 to-[#162544]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.subtitle}
          align="center"
          light
          animate={false}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <div key={item.id}>
              <blockquote className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] md:p-7">
                <span className="absolute right-5 top-4 font-display text-4xl font-semibold text-white/[0.04] transition-colors duration-300 group-hover:text-racingRed/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <StarRating rating={item.rating} />

                <p className="mt-5 flex-1 text-sm leading-relaxed text-white/80 md:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/8 font-display text-xs font-semibold text-aliceBlue">
                    V
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                      {item.source}
                    </p>
                    <p className="text-sm font-medium text-white/75">Vital Transportation</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
