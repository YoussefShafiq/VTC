import { hero, company } from '../../data/content'
import Button from '../ui/Button'
import HeroModel from './HeroModel'

const HERO_BG_IMAGE = '/marcin-jozwiak-kGoPcmpPT7c-unsplash.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-twilightIndigo">
      <div
        className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-twilightIndigo/90 from-35% via-twilightIndigo/40 via-50% to-twilightIndigo/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-twilightIndigo/85 via-twilightIndigo/20 to-twilightIndigo/40"
        aria-hidden
      />

      <div className="absolute inset-y-0 left-0 z-[1] w-px bg-white/10" aria-hidden />
      <div className="absolute inset-x-0 top-0 z-[1] h-px bg-racingRed" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20 lg:px-8 lg:py-32">
        <div className="max-w-xl lg:max-w-none">
          <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/80">
            <span className="h-px w-8 bg-racingRed" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
            {hero.title}
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/65 md:text-lg md:leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button href="#contact">{hero.primaryCta}</Button>
            <Button href="#solutions" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="sr-only">Founded</dt>
              <dd className="font-display text-2xl font-semibold text-white">
                {company.since}
              </dd>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                Founded
              </dd>
            </div>
            <div>
              <dt className="sr-only">Port region</dt>
              <dd className="font-display text-2xl font-semibold text-white">
                NY/NJ
              </dd>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                Port region
              </dd>
            </div>
            <div>
              <dt className="sr-only">Dispatch</dt>
              <dd className="font-display text-2xl font-semibold text-white">
                24/7
              </dd>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                Dispatch
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative -mx-2 lg:-mx-2 ">
          <div className="hero-model-frame">
            <HeroModel />
          </div>
        </div>
      </div>
    </section>
  )
}
