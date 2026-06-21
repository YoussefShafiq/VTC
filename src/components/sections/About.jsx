import { about, company } from '../../data/content'
import { FLEET_IMAGE } from '../../lib/images'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-cover bg-no-repeat opacity-[0.07] lg:block"
        style={{ backgroundImage: `url(${FLEET_IMAGE})`, backgroundPosition: 'center 40%' }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="About Vital"
              title={about.title}
              description={about.paragraphs[0]}
            />

            <div className="space-y-6">
              {about.paragraphs.slice(1).map((paragraph, index) => (
                <div key={paragraph.slice(0, 40)} className="flex gap-5">
                  <span
                    className="mt-1.5 shrink-0 font-display text-xs font-semibold text-racingRed"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-twilightIndigo/75 md:text-base">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-twilightIndigo/8 bg-aliceBlue/20 px-4 py-5 transition-all duration-300 hover:border-racingRed/25 hover:bg-aliceBlue/40"
                >
                  <p className="font-display text-2xl font-semibold text-twilightIndigo transition-colors duration-300 group-hover:text-racingRed md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-twilightIndigo/8 lg:-inset-4" aria-hidden />
              <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-racingRed lg:-right-4 lg:-top-4 lg:h-24 lg:w-24" aria-hidden />

              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/5] w-full sm:aspect-[5/6]">
                  <img
                    src={FLEET_IMAGE}
                    alt="Vital Transportation fleet and logistics operations"
                    className="h-full w-full object-cover object-[center_40%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo via-twilightIndigo/25 to-transparent" aria-hidden />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="rounded-xl border border-white/10 bg-twilightIndigo/90 p-5 backdrop-blur-sm md:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-racingRed">
                      Headquarters
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold text-white">
                      {company.address.city}, {company.address.state}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {company.address.line1} · Centrally located for importers, exporters, and distribution networks across the NY/NJ region.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-twilightIndigo/10 bg-white px-5 py-4 shadow-xl shadow-twilightIndigo/10 md:block lg:-left-8">
                <p className="font-display text-3xl font-semibold text-twilightIndigo">
                  Since {company.since}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/45">
                  Trusted regional carrier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
