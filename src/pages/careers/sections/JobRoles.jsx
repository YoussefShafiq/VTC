import { careerPage, company, routes } from '../../../data/content'
import SectionHeading from '../../../components/ui/SectionHeading'
import Button from '../../../components/ui/Button'
import { roleIcons } from '../../../lib/careerIcons'

export default function JobRoles() {
  const { opportunities, roles } = careerPage

  return (
    <section id="open-roles" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={opportunities.eyebrow}
          title={opportunities.title}
          description={opportunities.subtitle}
          align="center"
          animate={false}
        />

        <div className="space-y-5">
          {roles.map((role, index) => (
            <div key={role.id}>
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white transition-all duration-500 hover:border-twilightIndigo/15 hover:shadow-[0_20px_50px_-16px_rgba(31,50,88,0.18)] lg:flex lg:flex-row lg:items-stretch">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-racingRed/60 via-racingRed/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                <div className="flex items-center gap-5 border-b border-twilightIndigo/8 bg-aliceBlue/25 px-6 py-5 lg:w-56 lg:shrink-0 lg:flex-col lg:justify-center lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-twilightIndigo/10 bg-white text-twilightIndigo transition-all duration-300 group-hover:border-racingRed/20 group-hover:bg-racingRed/8 group-hover:text-racingRed">
                    {roleIcons[role.icon]}
                  </span>
                  <div className="lg:text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-racingRed">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-twilightIndigo md:text-2xl">
                      {role.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-8 lg:p-10">
                  <div>
                    <p className="text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                      {role.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-twilightIndigo md:text-base">
                      {role.ctaLine}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button to={`${routes.careers}/${role.id}`} className="!px-6 !py-2.5 !text-xs">
                      Apply now
                    </Button>
                    <a
                      href={`tel:${company.phone}`}
                      className="text-sm font-semibold text-twilightIndigo/60 transition-colors hover:text-racingRed"
                    >
                      Or call {company.phone}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
