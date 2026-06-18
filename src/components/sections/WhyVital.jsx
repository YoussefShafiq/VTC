import { whyVital } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function WhyVital() {
  return (
    <section id="why-vital" className="bg-twilightIndigo py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Vital"
          title={whyVital.title}
          description={whyVital.description}
          light
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyVital.pillars.map((pillar, index) => (
            <div
              key={pillar}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/8"
            >
              <span className="text-xs font-bold text-racingRed">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/85">
                {pillar}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-racingRed/20 to-transparent p-8 md:p-10">
          <blockquote className="max-w-3xl">
            <p className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
              “Customers work directly with knowledgeable team members who understand their freight and communicate with precision.”
            </p>
            <footer className="mt-4 text-sm text-white/55">
              — The Vital service model
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
