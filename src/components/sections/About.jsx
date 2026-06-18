import { about } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="bg-aliceBlue/35 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About Vital"
              title={about.title}
              description={about.paragraphs[0]}
            />
            <div className="space-y-4 text-sm leading-relaxed text-twilightIndigo/75 md:text-base">
              {about.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-twilightIndigo/8 bg-white p-6 shadow-sm"
              >
                <p className="font-display text-3xl font-semibold text-twilightIndigo md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-twilightIndigo/55">
                  {stat.label}
                </p>
              </div>
            ))}
            <div className="col-span-2 overflow-hidden rounded-3xl border border-twilightIndigo/8 bg-twilightIndigo p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-racingRed">
                Headquarters
              </p>
              <p className="mt-3 font-display text-2xl font-semibold">
                Piscataway, New Jersey
              </p>
              <p className="mt-2 text-sm text-white/65">
                Centrally located to support importers, exporters, manufacturers, retailers, and distribution networks throughout the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
