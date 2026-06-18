import { useCallback, useEffect, useRef, useState } from 'react'
import { services } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

function ServiceContent({ service, isActive }) {
  return (
    <article
      className={`overflow-hidden rounded-3xl border border-twilightIndigo/10 bg-gradient-to-br from-white to-aliceBlue/30 shadow-xl shadow-twilightIndigo/5 transition-all duration-700 ease-out ${
        isActive
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none absolute inset-0 translate-y-6 opacity-0'
      }`}
      aria-hidden={!isActive}
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex min-h-[220px] flex-col justify-end bg-twilightIndigo p-8 text-white md:min-h-[320px] lg:min-h-[400px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-racingRed">
            Photo placeholder
          </p>
          <p className="mt-3 font-display text-xl font-semibold leading-tight md:text-2xl">
            {service.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            {service.summary}
          </p>
        </div>
        <div className="max-h-[320px] overflow-y-auto p-6 md:max-h-none md:p-8 lg:p-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-twilightIndigo/45">
            Capabilities
          </p>
          <ul className="space-y-2.5">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-twilightIndigo/80"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-racingRed" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const stepRefs = useRef([])
  const isScrollingToStep = useRef(false)

  const scrollToStep = useCallback((index) => {
    const step = stepRefs.current[index]
    if (!step) return

    isScrollingToStep.current = true
    setActiveIndex(index)

    step.scrollIntoView({ behavior: 'smooth', block: 'center' })

    window.setTimeout(() => {
      isScrollingToStep.current = false
    }, 800)
  }, [])

  useEffect(() => {
    const observers = []

    stepRefs.current.forEach((step, index) => {
      if (!step) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (isScrollingToStep.current) return
          if (entry.isIntersecting) {
            setActiveIndex(index)
          }
        },
        {
          root: null,
          rootMargin: '-42% 0px -42% 0px',
          threshold: 0,
        },
      )

      observer.observe(step)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 lg:px-8">
        <SectionHeading
          eyebrow="Core Services"
          title="End-to-end solutions for the NY/NJ supply chain"
          description="Scroll to explore each capability — the section stays in place while services update."
          align="center"
        />
        <p className="-mt-8 mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-twilightIndigo/40">
          Scroll to explore
        </p>
      </div>

      <div className="relative">
        {/* Pinned panel — stays on screen while step divs scroll beneath */}
        <div className="sticky top-0 z-10 flex min-h-svh items-center bg-white py-20 pt-24 md:py-24 md:pt-28">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              {/* Service nav + progress */}
              <div className="flex flex-col gap-4">
                <div className="hidden lg:block">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-twilightIndigo/45">
                    {String(activeIndex + 1).padStart(2, '0')} /{' '}
                    {String(services.length).padStart(2, '0')}
                  </p>
                  <div className="h-1 overflow-hidden rounded-full bg-aliceBlue">
                    <div
                      className="h-full rounded-full bg-racingRed transition-all duration-500 ease-out"
                      style={{
                        width: `${((activeIndex + 1) / services.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <nav
                  className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
                  aria-label="Core services"
                >
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => scrollToStep(index)}
                      className={`min-w-[220px] rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 lg:min-w-0 ${
                        activeIndex === index
                          ? 'border-racingRed/30 bg-twilightIndigo text-white shadow-lg shadow-twilightIndigo/20'
                          : 'border-twilightIndigo/10 bg-aliceBlue/20 text-twilightIndigo hover:bg-aliceBlue/40'
                      }`}
                      aria-current={activeIndex === index ? 'true' : undefined}
                    >
                      <p className="text-sm font-semibold leading-snug">
                        {service.title}
                      </p>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Crossfading service panels */}
              <div className="relative min-h-[420px] md:min-h-[400px]">
                {services.map((service, index) => (
                  <ServiceContent
                    key={service.id}
                    service={service}
                    isActive={activeIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Invisible scroll steps — each one viewport tall */}
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              stepRefs.current[index] = el
            }}
            className="h-[75svh] md:h-screen"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  )
}
