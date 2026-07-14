import { aboutPage, company, serviceRegion } from '../../../data/content'
import { ABOUT_STORY_IMAGE, FLEET_IMAGE } from '../../../lib/images'
import SectionHeading from '../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'
import ServiceRegionLink from '../../../components/ui/ServiceRegionLink'

export default function OurStory() {
  const { story } = aboutPage

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/10" aria-hidden />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] bg-cover bg-no-repeat opacity-[0.05] lg:block"
        style={{ backgroundImage: `url(${FLEET_IMAGE})`, backgroundPosition: 'center 35%' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">

          {/* Left — text */}
          <AnimateOnScroll variant="fadeRight">
            <SectionHeading eyebrow="Our story" title="An empire built from one truck" />

            <p className="mb-10 text-base font-medium leading-relaxed text-twilightIndigo md:text-lg">
              {story.lead}
            </p>

            <Stagger className="space-y-5">
              {story.paragraphs.map((para, i) => (
                <StaggerItem key={i} className="flex gap-4">
                  <span
                    className="mt-1 shrink-0 font-display text-xs font-semibold text-racingRed"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                    {para}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </AnimateOnScroll>

          {/* Right — milestones + image */}
          <AnimateOnScroll variant="fadeLeft" delay={0.1}>
            <div className="space-y-4">
              {story.milestones.map((ms, i) => (
                <div
                  key={ms.year}
                  className="group relative overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-aliceBlue/20 p-6 transition-all duration-300 hover:border-twilightIndigo/20 hover:bg-aliceBlue/35"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-racingRed to-racingRed/20 transition-all duration-500 group-hover:w-1"
                    aria-hidden
                  />
                  <div className="flex items-start gap-5 pl-4">
                    <div className="shrink-0">
                      <p className="font-display text-2xl font-semibold text-twilightIndigo md:text-3xl">
                        {ms.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-racingRed">
                        {ms.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-twilightIndigo/65 md:text-base">
                        {ms.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-6 overflow-hidden rounded-2xl">
              <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-racingRed" aria-hidden />
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <img
                  src={ABOUT_STORY_IMAGE}
                  alt="Vital Transportation fleet"
                  className="h-full w-full object-cover object-[center_40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo/80 via-twilightIndigo/20 to-transparent" aria-hidden />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-twilightIndigo/85 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-racingRed" aria-hidden />
                  <p className="text-xs font-semibold tracking-wide text-white">
                    Piscataway, NJ ·{' '}
                    <ServiceRegionLink className="text-white underline decoration-white/30 underline-offset-2 transition-colors hover:decoration-racingRed">
                      {serviceRegion.title}
                    </ServiceRegionLink>
                    {' '}· Est. {company.since}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
