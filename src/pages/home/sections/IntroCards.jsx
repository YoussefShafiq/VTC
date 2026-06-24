import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { introCards } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

const cardMeta = [
  { icon: 'mdi:anchor', accent: 'from-racingRed/20 to-transparent' },
  { icon: 'mdi:account-group-outline', accent: 'from-aliceBlue/30 to-transparent' },
  { icon: 'mdi:warehouse', accent: 'from-racingRed/15 to-transparent' },
]

export default function IntroCards() {
  return (
    <section className="relative z-20 pb-28 pt-0 md:pb-36">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat"
          style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-twilightIndigo/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-twilightIndigo/40 via-transparent to-twilightIndigo/95" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Stagger className="-mt-16 grid gap-5 sm:grid-cols-2 md:-mt-24 lg:grid-cols-3 lg:gap-6">
          {introCards.map((card, index) => {
            const isFeatured = index === 0
            const { icon, accent } = cardMeta[index]

            return (
              <StaggerItem
                key={card.title}
                className={isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
              <article
                className={`group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border p-8 transition-all duration-500 md:min-h-[340px] md:p-9 ${
                  isFeatured
                    ? 'border-racingRed/30 bg-twilightIndigo/80 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.55)] backdrop-blur-md sm:col-span-2 lg:col-span-1 lg:min-h-[380px]'
                    : 'border-white/10 bg-white/[0.08] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.12]'
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  aria-hidden
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                        isFeatured
                          ? 'border-racingRed/40 bg-racingRed/15 text-racingRed'
                          : 'border-white/15 bg-white/10 text-aliceBlue group-hover:border-racingRed/30 group-hover:text-racingRed'
                      }`}
                    >
                      <Icon icon={icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-5xl font-semibold leading-none text-white/[0.07]" aria-hidden>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {card.description}
                  </p>
                </div>

                <Link
                  to={card.href}
                  className={`relative mt-9 inline-flex items-center gap-3 text-sm font-semibold transition-all duration-300 group-hover:gap-4 ${
                    isFeatured ? 'text-aliceBlue' : 'text-white/70 group-hover:text-white'
                  }`}
                >
                  <span className="h-px w-6 bg-racingRed transition-all duration-300 group-hover:w-10" />
                  {card.cta}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-xs transition-all duration-300 group-hover:border-racingRed group-hover:bg-racingRed group-hover:text-white"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
