import { resourcesPage } from '../../../data/resources'

export default function ResourcesIntro() {
  const { sustainability, caseStudies } = resourcesPage

  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-twilightIndigo/12 to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white p-8 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-twilightIndigo/15 hover:shadow-[0_20px_50px_-16px_rgba(31,50,88,0.2)] md:p-10">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-racingRed/60 via-racingRed/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-twilightIndigo/55">
              {sustainability.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-twilightIndigo md:text-3xl">
              {sustainability.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
              {sustainability.body}
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white p-8 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-twilightIndigo/15 hover:shadow-[0_20px_50px_-16px_rgba(31,50,88,0.2)] md:p-10">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-twilightIndigo/40 via-twilightIndigo/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-twilightIndigo/55">
                {caseStudies.eyebrow}
              </p>
              <span className="rounded-full border border-twilightIndigo/10 bg-aliceBlue/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-twilightIndigo/55">
                {caseStudies.status}
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-twilightIndigo md:text-3xl">
              {caseStudies.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
              {caseStudies.body}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
