import { aboutPage } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import SectionHeading from '../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

export default function Safety() {
  const { safety } = aboutPage

  return (
    <section className="relative overflow-hidden py-24 text-white md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-[center_55%] bg-no-repeat"
        style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-twilightIndigo/90" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-twilightIndigo/98 via-twilightIndigo/85 to-twilightIndigo/70" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">

          <AnimateOnScroll variant="fadeRight" className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={safety.eyebrow}
              title={safety.title}
              description={safety.subtitle}
              light
            />

            <blockquote className="mt-10 border-l-2 border-racingRed pl-6">
              <p className="font-display text-lg font-medium leading-snug text-white/85 md:text-xl">
                &ldquo;{safety.quote}&rdquo;
              </p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Vital Operations — Safety commitment
              </footer>
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-aliceBlue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-white">Zero-accident</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Our operational goal</p>
              </div>
            </div>
          </AnimateOnScroll>

          <Stagger className="grid gap-3 sm:grid-cols-2">
            {safety.commitments.map((item, index) => (
              <StaggerItem key={item}>
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1]">
                  <span className="absolute right-4 top-3 font-display text-3xl font-semibold text-white/[0.05] transition-colors duration-300 group-hover:text-racingRed/12">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mb-3 block h-1 w-6 bg-racingRed" aria-hidden />
                  <p className="relative pr-8 text-sm font-medium leading-relaxed text-white/80">
                    {item}
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
