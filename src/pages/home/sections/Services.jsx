import { useCallback, useEffect, useRef, useState } from 'react'
import { services } from '../../../data/content'
import { FLEET_IMAGE, fleetImagePositions } from '../../../lib/images'
import SectionHeading from '../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'

const STEP_VH = 34
const START_BUFFER_VH = 18
const END_BUFFER_VH = 12

function getStickyOffset() {
  return window.matchMedia('(min-width: 768px)').matches ? 96 : 80
}

function ServiceContent({ service, index, isActive }) {
  return (
    <article
      id={service.id}
      className={`absolute inset-0 overflow-hidden rounded-2xl border border-twilightIndigo/10 bg-white shadow-sm transition-all duration-500 ease-out ${
        isActive ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
      }`}
      aria-hidden={!isActive}
    >
      <div className="grid h-full grid-rows-[8.5rem_1fr] lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex flex-col justify-end overflow-hidden px-4 pb-3 pt-4 text-white lg:px-8 lg:pb-4 lg:pt-8">
          <img
            src={FLEET_IMAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: fleetImagePositions[index % fleetImagePositions.length] }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo via-twilightIndigo/85 to-twilightIndigo/50" aria-hidden />
          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-racingRed">
              Service {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-1.5 line-clamp-2 font-display text-base font-semibold leading-snug lg:mt-2 lg:text-2xl lg:line-clamp-none">
              {service.title}
            </h3>
            <p className="mt-1.5 hidden text-xs leading-relaxed text-white/60 sm:line-clamp-2 sm:block lg:mt-2 lg:text-sm">
              {service.summary}
            </p>
          </div>
        </div>

        <div className="min-h-0 overflow-y-hidden px-4 py-3 lg:overflow-y-auto lg:p-8">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/40">
            Capabilities
          </p>
          <ul className="space-y-1.5 lg:space-y-2">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-xs leading-relaxed text-twilightIndigo/80 lg:text-sm"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-racingRed" />
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
  const scrollRootRef = useRef(null)
  const isScrollingToStep = useRef(false)

  const totalTrackVh = START_BUFFER_VH + services.length * STEP_VH + END_BUFFER_VH

  const updateActiveIndex = useCallback(() => {
    if (isScrollingToStep.current) return

    const root = scrollRootRef.current
    if (!root) return

    const rect = root.getBoundingClientRect()
    const stickyTop = getStickyOffset()
    const totalScroll = root.offsetHeight - window.innerHeight

    if (totalScroll <= 0) return

    if (rect.bottom < stickyTop) {
      setActiveIndex(services.length - 1)
      return
    }
    if (rect.top > window.innerHeight) return

    const scrolled = Math.min(Math.max(stickyTop - rect.top, 0), totalScroll)
    const startPx = root.offsetHeight * (START_BUFFER_VH / totalTrackVh)
    const endPx = root.offsetHeight * (END_BUFFER_VH / totalTrackVh)
    const usableScroll = Math.max(totalScroll - startPx - endPx, 1)
    const normalized = Math.min(Math.max(scrolled - startPx, 0), usableScroll)
    const progress = normalized / usableScroll
    const index = Math.min(
      services.length - 1,
      Math.max(0, Math.floor(progress * services.length)),
    )

    setActiveIndex(index)
  }, [totalTrackVh])

  const scrollToStep = useCallback(
    (index) => {
      const root = scrollRootRef.current
      if (!root) return

      isScrollingToStep.current = true
      setActiveIndex(index)

      const totalScroll = root.offsetHeight - window.innerHeight
      const segment = totalScroll / services.length
      const rootTop = root.getBoundingClientRect().top + window.scrollY
      const startPx = root.offsetHeight * (START_BUFFER_VH / totalTrackVh)
      const target =
        rootTop + startPx + segment * index + segment * 0.5 - window.innerHeight / 2

      window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' })

      window.setTimeout(() => {
        isScrollingToStep.current = false
      }, 900)
    },
    [totalTrackVh],
  )

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (!hash) return

      const index = services.findIndex((service) => service.id === hash)
      if (index >= 0) {
        window.requestAnimationFrame(() => scrollToStep(index))
      }
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)

    return () => window.removeEventListener('hashchange', syncHash)
  }, [scrollToStep])

  useEffect(() => {
    window.addEventListener('scroll', updateActiveIndex, { passive: true })
    window.addEventListener('resize', updateActiveIndex)
    updateActiveIndex()

    return () => {
      window.removeEventListener('scroll', updateActiveIndex)
      window.removeEventListener('resize', updateActiveIndex)
    }
  }, [updateActiveIndex])

  return (
    <section id="services" className="relative bg-white pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:hidden lg:px-8">
        <SectionHeading
          eyebrow="Core Services"
          title="End-to-end solutions for the NY/NJ supply chain"
          align="center"
          className="!mb-0"
        />
      </div>

      <div ref={scrollRootRef} className="relative">
        <div className="sticky top-20 z-10 bg-white pb-8 md:top-24 md:pb-10 lg:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-10">
            <div className="hidden lg:block">
              <SectionHeading
                eyebrow="Core Services"
                title="End-to-end solutions for the NY/NJ supply chain"
                description="Scroll to explore each capability — the panel stays in place while services update."
                align="center"
                className="!mb-6"
              />
            </div>

            <div className="mt-5 space-y-3 lg:mt-0 lg:grid lg:grid-cols-[220px_1fr] lg:gap-8 lg:space-y-0">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <p className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-twilightIndigo/45">
                    {String(activeIndex + 1).padStart(2, '0')} /{' '}
                    {String(services.length).padStart(2, '0')}
                  </p>
                  <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-aliceBlue">
                    <div
                      className="h-full rounded-full bg-racingRed transition-all duration-500"
                      style={{
                        width: `${((activeIndex + 1) / services.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <p className="truncate text-sm font-semibold text-twilightIndigo lg:hidden">
                  {services[activeIndex].title}
                </p>

                <nav
                  className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none lg:flex-col lg:gap-1 lg:overflow-visible"
                  aria-label="Core services"
                >
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => scrollToStep(index)}
                      className={`shrink-0 transition-all duration-300 lg:shrink lg:rounded-xl lg:border lg:px-3 lg:py-2.5 lg:text-left ${
                        activeIndex === index
                          ? 'flex h-9 w-9 items-center justify-center rounded-full bg-twilightIndigo text-xs font-bold text-white lg:h-auto lg:w-auto lg:rounded-xl lg:border-racingRed/30 lg:bg-twilightIndigo lg:text-sm lg:font-semibold lg:shadow-md'
                          : 'flex h-9 w-9 items-center justify-center rounded-full border border-twilightIndigo/15 bg-aliceBlue/30 text-xs font-bold text-twilightIndigo lg:h-auto lg:w-auto lg:rounded-xl lg:border-transparent lg:bg-transparent lg:font-semibold lg:hover:bg-aliceBlue/40'
                      }`}
                      aria-current={activeIndex === index ? 'true' : undefined}
                      aria-label={service.title}
                    >
                      <span className="lg:hidden">{String(index + 1).padStart(2, '0')}</span>
                      <span className="hidden text-sm leading-snug lg:block">{service.title}</span>
                    </button>
                  ))}
                </nav>
              </div>

            <AnimateOnScroll variant="scaleUp" className="services-panel relative">
                {services.map((service, index) => (
                  <ServiceContent
                    key={service.id}
                    service={service}
                    index={index}
                    isActive={activeIndex === index}
                  />
                ))}
            </AnimateOnScroll>
            </div>
          </div>
        </div>

        <div
          style={{ height: `${totalTrackVh}vh` }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
