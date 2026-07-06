import { company, routes } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import Button from '../../../components/ui/Button'

export default function ResourcesCta() {
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/60">
            Need more detail?
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            Talk to a team that knows your freight
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Didn&apos;t find what you need? Our dispatch and account teams are ready to help with lane-specific questions, quotes, and program design.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to={{ pathname: routes.home, hash: 'contact' }}>
              Request a quote
            </Button>
            <Button href={`tel:${company.phone}`} variant="secondary">
              Call dispatch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
