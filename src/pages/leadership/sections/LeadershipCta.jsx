import { company, routes } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import Button from '../../../components/ui/Button'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'

export default function LeadershipCta() {
  return (
    <section className="relative overflow-hidden py-24 text-white md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-[center_50%] bg-no-repeat"
        style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-twilightIndigo/92" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-twilightIndigo/60 via-twilightIndigo/80 to-twilightIndigo/95" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/60">
              Work with Vital
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Leadership that stays close to the work — and to you.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              Tell us about your freight needs. Our team will respond with clear guidance and a tailored plan.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button to={{ pathname: routes.home, hash: routes.quoteHash }}>
                Request a Quote
              </Button>
              <Button to={routes.contact} variant="secondary">
                Contact us
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10">
              <a
                href={`tel:${company.phone}`}
                className="text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                {company.email}
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
