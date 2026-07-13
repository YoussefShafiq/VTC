import { company, cta, routes } from '../../data/content'
import Button from '../../components/ui/Button'
import ContactHero from './sections/ContactHero'
import ContactForm from './sections/ContactForm'
import ServiceRegionMap from './sections/ServiceRegionMap'

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-16">
            <div className="min-w-0 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-racingRed">
                  Direct contact
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-twilightIndigo md:text-3xl">
                  We&apos;re here to help
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                  For shipment updates, account questions, or partnership discussions, reach our team directly by phone or email — or use the form to send a message.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-twilightIndigo/10 bg-aliceBlue/20 p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/45">
                    Phone
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-2 block font-display text-xl font-semibold text-twilightIndigo transition-colors hover:text-racingRed"
                  >
                    {company.phone}
                  </a>
                </div>
                <div className="rounded-2xl border border-twilightIndigo/10 bg-aliceBlue/20 p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/45">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-2 block text-sm font-semibold text-twilightIndigo transition-colors hover:text-racingRed md:text-base"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-twilightIndigo/10 bg-[#f4f8ff] p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/45">
                  Headquarters
                </p>
                <address className="mt-3 not-italic text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                  {company.address.line1}
                  <br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </address>
              </div>

              <div className="rounded-2xl border border-twilightIndigo/10 bg-white p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/45">
                  Service footprint
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-twilightIndigo">
                  Northeast &amp; Mid-Atlantic Service Region
                </p>
                <p className="mt-2 text-sm leading-relaxed text-twilightIndigo/65">
                  See the states and East Coast ports we cover — and how we help beyond that range.
                </p>
                <a
                  href="#service-region"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
                >
                  View service region map
                  <span aria-hidden>→</span>
                </a>
              </div>

              <div className="rounded-2xl border border-racingRed/15 bg-racingRed/5 p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-racingRed">
                  Need a quote?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-twilightIndigo/70">
                  For freight quotes with pickup, delivery, and weight details, use our dedicated quote form.
                </p>
                <Button to={{ pathname: routes.home, hash: routes.quoteHash }} className="mt-4 !px-5 !py-2.5 !text-xs">
                  {cta.navButton}
                </Button>
              </div>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ServiceRegionMap />
    </>
  )
}
