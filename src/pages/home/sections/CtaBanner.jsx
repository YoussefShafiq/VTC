import { cta, company } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import QuoteForm from './QuoteForm'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll variant="scaleUp">
        <div className="relative overflow-hidden rounded-2xl border border-twilightIndigo/10">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat lg:left-1/3"
            style={{ backgroundImage: `url(${FLEET_IMAGE})`, backgroundPosition: 'center 40%' }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-twilightIndigo/90 lg:bg-gradient-to-r lg:from-twilightIndigo lg:from-45% lg:via-twilightIndigo/92 lg:to-twilightIndigo/75" aria-hidden />

          <div className="relative grid gap-10 p-10 md:p-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12 lg:p-16">
            <AnimateOnScroll variant="fadeRight" className="lg:sticky lg:top-28">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/70">
                Get started
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                {cta.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                {cta.description}
              </p>

              <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Call us
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-2 block font-display text-xl font-semibold text-white transition-colors hover:text-aliceBlue md:text-2xl"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-2 block text-sm font-medium text-white/80 transition-colors hover:text-white md:text-base"
                  >
                    {company.email}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Headquarters
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {company.address.line1}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeLeft" delay={0.12}>
            <QuoteForm />
            </AnimateOnScroll>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
