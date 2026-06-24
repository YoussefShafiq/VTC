import { whyVital } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import SectionHeading from '../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

export default function WhyVital() {
  return (
    <section id="why-vital" className="relative overflow-hidden py-24 text-white md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-[center_45%] bg-no-repeat"
        style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-twilightIndigo/88" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-twilightIndigo/95 via-twilightIndigo/80 to-twilightIndigo/70" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <AnimateOnScroll variant="fadeRight" className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why Vital"
              title={whyVital.title}
              description={whyVital.description}
              light
            />
            <blockquote className="mt-10 border-l-2 border-racingRed pl-6">
              <p className="font-display text-xl font-medium leading-snug text-white/90 md:text-2xl">
                Customers work directly with knowledgeable team members who understand their freight and communicate with precision.
              </p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                The Vital service model
              </footer>
            </blockquote>
          </AnimateOnScroll>

          <Stagger className="grid gap-3 sm:grid-cols-2">
            {whyVital.pillars.map((pillar, index) => (
              <StaggerItem key={pillar}>
              <div
                className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1]"
              >
                <span className="absolute right-4 top-3 font-display text-3xl font-semibold text-white/[0.06] transition-colors duration-300 group-hover:text-racingRed/15">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mb-3 inline-block h-1 w-6 bg-racingRed" aria-hidden />
                <p className="relative pr-8 text-sm font-medium leading-relaxed text-white/80">
                  {pillar}
                </p>
              </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
