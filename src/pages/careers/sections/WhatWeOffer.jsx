import { careerPage } from '../../../data/content'
import SectionHeading from '../../../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

const benefitIcons = {
  currency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  balance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
}

export default function WhatWeOffer() {
  const { benefits } = careerPage

  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-twilightIndigo/12 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-twilightIndigo/12 to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          description={benefits.subtitle}
          align="center"
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {benefits.items.map((item) => (
            <StaggerItem key={item.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white p-8 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-twilightIndigo/15 hover:shadow-[0_20px_50px_-16px_rgba(31,50,88,0.22)] md:p-9">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-racingRed/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-twilightIndigo/10 bg-aliceBlue/60 text-twilightIndigo transition-all duration-300 group-hover:border-racingRed/20 group-hover:bg-racingRed/8 group-hover:text-racingRed">
                    {benefitIcons[item.icon]}
                  </span>
                  <span className="font-display text-5xl font-semibold text-twilightIndigo/[0.06] transition-colors duration-300 group-hover:text-racingRed/10">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold tracking-tight text-twilightIndigo md:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-twilightIndigo/65 md:text-base">
                  {item.description}
                </p>

                <span className="mt-8 block h-px w-8 bg-racingRed transition-all duration-500 group-hover:w-14" aria-hidden />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
