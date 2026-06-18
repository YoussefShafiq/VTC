import { resourceLinks } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function Resources() {
  return (
    <section id="resources" className="bg-aliceBlue/35 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resources"
          title="A hub built for return visits"
          description="Resources, sustainability, and case studies — structured now so you can populate rich content over time and keep prospects coming back."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {resourceLinks.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col rounded-3xl border border-twilightIndigo/10 bg-white p-8 shadow-sm"
            >
              <span className="mb-4 inline-flex w-fit rounded-full bg-aliceBlue px-3 py-1 text-xs font-semibold uppercase tracking-wider text-twilightIndigo">
                {resource.status}
              </span>
              <h3 className="font-display text-xl font-semibold text-twilightIndigo">
                {resource.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-twilightIndigo/70">
                {resource.description}
              </p>
              <a
                href={resource.href}
                className="mt-6 text-sm font-semibold text-racingRed hover:underline"
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
