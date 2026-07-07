import { Link } from 'react-router-dom'
import { routes, services, servicesPage } from '../../../data/content'
import { getServiceImage } from '../../../lib/images'
import SectionHeading from '../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'

function ServiceRow({ service, index }) {
  const isReversed = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')
  const previewItems = service.items.slice(0, 4)

  return (
    <article
      id={service.id}
      className={`scroll-mt-28 overflow-x-hidden py-16 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f4f8ff]'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20 ${
            isReversed ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <AnimateOnScroll variant={isReversed ? 'fadeLeft' : 'fadeRight'}>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-racingRed">
                Service {number}
              </p>
              <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-twilightIndigo md:text-3xl lg:text-[2rem]">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-twilightIndigo/70 md:text-lg">
                {service.summary}
              </p>

              <ul className="mt-8 space-y-3">
                {previewItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-twilightIndigo/75 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racingRed" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              {service.items.length > previewItems.length && (
                <p className="mt-4 text-sm text-twilightIndigo/45">
                  +{service.items.length - previewItems.length} more capabilities
                </p>
              )}

              <Link
                to={`${routes.services}/${service.id}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
              >
                View service details
                <span aria-hidden>→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant={isReversed ? 'fadeRight' : 'fadeLeft'} delay={0.08}>
            <div className="relative">
              <div
                className={`absolute -top-2 h-16 w-16 border-2 border-racingRed ${
                  isReversed ? '-left-2 border-l-0 border-t-0' : '-right-2 border-r-0 border-t-0'
                }`}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-24px_rgba(31,50,88,0.35)]">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={getServiceImage(service.id)}
                    alt=""
                    className="h-full w-full object-cover"
                    style={{ objectPosition: service.imagePosition ?? 'center 40%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo/85 via-twilightIndigo/20 to-transparent" aria-hidden />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-twilightIndigo/88 px-4 py-2 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-racingRed" aria-hidden />
                    <p className="text-xs font-semibold text-white/85">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </article>
  )
}

export default function ServicesList() {
  const { overview } = servicesPage

  return (
    <section className="relative overflow-x-hidden">
      <div className="border-b border-twilightIndigo/8 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={overview.eyebrow}
            title={overview.title}
            description={overview.description}
            align="center"
          />
        </div>
      </div>

      {services.map((service, index) => (
        <ServiceRow key={service.id} service={service} index={index} />
      ))}
    </section>
  )
}
