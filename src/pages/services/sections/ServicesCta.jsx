import { Link } from 'react-router-dom'
import { company, routes, servicesPage } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'

export default function ServicesCta() {
  const { cta } = servicesPage

  return (
    <section className="relative overflow-hidden py-24 text-white md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-[center_40%] bg-no-repeat"
        style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-twilightIndigo/91" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-twilightIndigo/55 via-twilightIndigo/75 to-twilightIndigo/95" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/55">
              {cta.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
              {cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {cta.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to={{ pathname: routes.home, hash: 'contact' }}
                className="inline-flex items-center gap-2 rounded-full bg-racingRed px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-racingRed/20 transition-all duration-300 hover:bg-racingRed/90"
              >
                {cta.primaryCta}
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                {company.phone}
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
