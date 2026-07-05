import { company, routes } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import Button from '../../../components/ui/Button'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'

export default function CareerCta() {
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
              Ready to join?
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Drive your future forward with Vital
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              Whether you&apos;re behind the wheel, in the shop, or powering operations from the office — we&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${company.email}?subject=${encodeURIComponent('Career Inquiry')}`}>
                Apply now
              </Button>
              <Button to={{ pathname: routes.home, hash: 'contact' }} variant="secondary">
                Contact us
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                {company.email}
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
