import { careerPage, company } from '../../../data/content'
import SectionHeading from '../../../components/ui/SectionHeading'
import Button from '../../../components/ui/Button'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

const roleIcons = {
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
    </svg>
  ),
  warehouse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
    </svg>
  ),
  partnership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  ),
}

function applyHref(subject) {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}`
}

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
        />

        <Stagger className="space-y-5">
          {roles.map((role, index) => (
            <StaggerItem key={role.id}>
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
                    <Button href={applyHref(role.applySubject)} className="!px-6 !py-2.5 !text-xs">
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
