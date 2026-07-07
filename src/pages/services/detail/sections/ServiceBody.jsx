import { getServiceImage } from '../../../../lib/images'
import SectionHeading from '../../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../../components/ui/Stagger'

function HighlightCard({ item, number }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white p-7 shadow-[0_6px_28px_-10px_rgba(31,50,88,0.10)] transition-all duration-400 hover:-translate-y-0.5 hover:border-twilightIndigo/16 hover:shadow-[0_16px_44px_-16px_rgba(31,50,88,0.20)]">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-racingRed/50 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" aria-hidden />

      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-twilightIndigo/10 bg-aliceBlue/50 text-[11px] font-bold text-twilightIndigo/40 transition-all duration-300 group-hover:border-racingRed/20 group-hover:bg-racingRed/6 group-hover:text-racingRed/60">
          {number}
        </span>
        <span className="h-px flex-1 bg-twilightIndigo/8" aria-hidden />
      </div>

      <h3 className="font-display text-lg font-semibold tracking-tight text-twilightIndigo">
        {item.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-twilightIndigo/60 md:text-base">
        {item.body}
      </p>
    </div>
  )
}

export default function ServiceBody({ service }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/8" aria-hidden />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-cover bg-no-repeat opacity-[0.04] lg:block"
        style={{
          backgroundImage: `url(${getServiceImage(service.id)})`,
          backgroundPosition: service.imagePosition ?? 'center 40%',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Description + image */}
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <AnimateOnScroll variant="fadeRight">
            <SectionHeading eyebrow="What we offer" title="Delivering more than freight" />
            <p className="text-base leading-relaxed text-twilightIndigo/70 md:text-lg">
              {service.description}
            </p>

            {/* Stat strip */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-twilightIndigo/8 pt-8">
              {[
                { value: '24/7', label: 'Dispatch' },
                { value: 'NY/NJ', label: 'Port coverage' },
                { value: '100%', label: 'Asset-based' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-twilightIndigo md:text-3xl">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeLeft" delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute -right-2 -top-2 h-14 w-14 border-r-2 border-t-2 border-racingRed" aria-hidden />
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: service.imagePosition ?? 'center 40%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo/80 via-twilightIndigo/15 to-transparent" aria-hidden />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-twilightIndigo/88 px-4 py-2 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-racingRed" aria-hidden />
                  <p className="text-xs font-semibold text-white/80">Piscataway, NJ · NY/NJ Port Region</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Highlights */}
        {service.highlights?.length > 0 && (
          <div className="mt-20 md:mt-24">
            <AnimateOnScroll variant="fadeUp">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-twilightIndigo/45">
                Key advantages
              </p>
            </AnimateOnScroll>
            <Stagger className="grid gap-5 md:grid-cols-3">
              {service.highlights.map((item, i) => (
                <StaggerItem key={item.title}>
                  <HighlightCard item={item} number={String(i + 1).padStart(2, '0')} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}

        {/* Capabilities list */}
        <AnimateOnScroll variant="fadeUp" className="mt-20 md:mt-24">
          <div className="rounded-2xl border border-twilightIndigo/8 bg-[#f6f9ff] px-8 py-10 md:px-12 md:py-12">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-twilightIndigo/45">
              Capabilities
            </p>
            <ul className="grid gap-x-12 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-twilightIndigo/75 md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racingRed" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
