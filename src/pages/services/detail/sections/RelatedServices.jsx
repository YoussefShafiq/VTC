import { Link } from 'react-router-dom'
import { services, routes } from '../../../../data/content'
import AnimateOnScroll from '../../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../../components/ui/Stagger'

export default function RelatedServices({ currentId }) {
  const related = services.filter((s) => s.id !== currentId).slice(0, 4)

  return (
    <section className="relative bg-[#f4f8ff] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-twilightIndigo/10 to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-twilightIndigo/45">
                Explore other services
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-twilightIndigo md:text-3xl">
                More ways Vital can help
              </h2>
            </div>
            <Link
              to={routes.services}
              className="text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
            >
              View all services →
            </Link>
          </div>
        </AnimateOnScroll>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((service, index) => (
            <StaggerItem key={service.id}>
              <Link
                to={`${routes.services}/${service.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-twilightIndigo/16 hover:shadow-[0_16px_40px_-16px_rgba(31,50,88,0.18)]"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span className="font-display text-3xl font-semibold text-twilightIndigo/[0.07] transition-colors duration-300 group-hover:text-racingRed/12">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-twilightIndigo/10 text-xs transition-all duration-300 group-hover:border-racingRed/40 group-hover:bg-racingRed group-hover:text-white">
                    →
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold leading-snug text-twilightIndigo flex-1">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-twilightIndigo/55 line-clamp-2">
                  {service.summary}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
