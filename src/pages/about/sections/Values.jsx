import { aboutPage } from '../../../data/content'
import SectionHeading from '../../../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

const valueIcons = {
  'shield-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  'lightning-bolt': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
    </svg>
  ),
}

export default function Values() {
  const { values } = aboutPage

  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-twilightIndigo/12 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-twilightIndigo/12 to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={values.eyebrow}
          title={values.title}
          description={values.subtitle}
          align="center"
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {values.items.map((item) => (
            <StaggerItem key={item.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white p-8 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-twilightIndigo/15 hover:shadow-[0_20px_50px_-16px_rgba(31,50,88,0.22)] md:p-9">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-racingRed/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-twilightIndigo/10 bg-aliceBlue/60 text-twilightIndigo transition-all duration-300 group-hover:border-racingRed/20 group-hover:bg-racingRed/8 group-hover:text-racingRed">
                    {valueIcons[item.icon]}
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
