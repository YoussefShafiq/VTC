import { resourceLinks } from '../../data/content'
import { FLEET_IMAGE } from '../../lib/images'
import SectionHeading from '../ui/SectionHeading'

export default function Resources() {
  return (
    <section id="resources" className="relative overflow-hidden py-24 text-white md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-[center_55%] bg-no-repeat"
        style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-twilightIndigo/92" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo via-twilightIndigo/85 to-twilightIndigo/75" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resources"
          title="A hub built for return visits"
          description="Resources, sustainability, and case studies — structured now so you can populate rich content over time and keep prospects coming back."
          align="center"
          light
        />

        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          {resourceLinks.map((resource, index) => (
            <article
              key={resource.title}
              className="group flex flex-col gap-4 py-8 transition-colors duration-300 first:pt-0 last:pb-0 md:flex-row md:items-center md:gap-10"
            >
              <span className="shrink-0 font-display text-4xl font-semibold text-white/10 transition-colors duration-300 group-hover:text-racingRed/40 md:w-16 md:text-5xl">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                    {resource.title}
                  </h3>
                  <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    {resource.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/55 md:text-base">
                  {resource.description}
                </p>
              </div>

              <a
                href={resource.href}
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-aliceBlue/80 transition-all duration-300 group-hover:gap-3 group-hover:text-white md:self-center"
              >
                Learn more
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs transition-all duration-300 group-hover:border-racingRed group-hover:bg-racingRed group-hover:text-white">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
