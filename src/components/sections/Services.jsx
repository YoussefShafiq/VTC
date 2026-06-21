import { useCallback, useEffect, useRef, useState } from 'react'
import { services } from '../../data/content'
import { FLEET_IMAGE, fleetImagePositions } from '../../lib/images'
import SectionHeading from '../ui/SectionHeading'

function ServiceContent({ service, index, isActive }) {
  return (
    <article
      className={`absolute inset-0 overflow-hidden rounded-2xl border border-twilightIndigo/10 bg-white transition-all duration-700 ease-out ${
        isActive
          ? 'z-10 translate-y-0 opacity-100'
          : 'pointer-events-none z-0 translate-y-8 opacity-0'
      }`}
      aria-hidden={!isActive}
    >
      <div className="grid h-full lg:grid-cols-[1fr_1.1fr]">
        <div className="relative flex min-h-[260px] flex-col justify-end overflow-hidden p-8 text-white md:min-h-[340px] lg:min-h-full lg:p-10">
          <img
            src={FLEET_IMAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: fleetImagePositions[index % fleetImagePositions.length] }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo via-twilightIndigo/80 to-twilightIndigo/55" aria-hidden />
          <span
            className="pointer-events-none absolute -left-2 bottom-0 font-display text-[9rem] font-semibold leading-none text-white/[0.04] md:text-[11rem]"
            aria-hidden
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-racingRed">
              Service {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight md:text-3xl">
              {service.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
              {service.summary}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center overflow-y-auto p-8 lg:p-10">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-twilightIndigo/40">
            Capabilities
          </p>
          <ul className="space-y-3">
            {service.items.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 border-b border-twilightIndigo/6 pb-3 text-sm leading-relaxed text-twilightIndigo/80 last:border-0 last:pb-0"
              >
                <span className="mt-0.5 shrink-0 font-display text-xs font-semibold text-racingRed/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
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
  const scrollAreaRef = useRef(null)
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
    }, 900)
  }, [])

  useEffect(() => {
    let observers = []
    let rafId = 0

    const setup = () => {
      const steps = stepRefs.current.filter(Boolean)
      if (steps.length !== services.length) {
        rafId = requestAnimationFrame(setup)
        return
      }

      observers = steps.map((step, index) => {
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
        return observer
      })
    }

    setup()

    return () => {
      cancelAnimationFrame(rafId)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="solutions" className="relative bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-cover bg-no-repeat opacity-[0.06]"
        style={{ backgroundImage: `url(${FLEET_IMAGE})`, backgroundPosition: 'center 30%' }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32 lg:px-8">
        <SectionHeading
          eyebrow="Core Services"
          title="End-to-end solutions for the NY/NJ supply chain"
          description="Scroll to explore each capability — the panel stays in place while services update."
          align="center"
        />
      </div>

      <div ref={scrollAreaRef} className="relative">
        <div className="sticky top-24 z-10 flex min-h-svh items-center bg-white py-20 pt-24 md:top-28 md:py-24 md:pt-28">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
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

              <div className="relative min-h-[420px] md:min-h-[400px]">
                {services.map((service, index) => (
                  <ServiceContent
                    key={service.id}
                    service={service}
                    index={index}
                    isActive={activeIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

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
