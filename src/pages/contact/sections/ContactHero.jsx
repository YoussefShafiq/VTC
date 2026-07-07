import { Link } from 'react-router-dom'
import { company, contactPage, routes } from '../../../data/content'
import { TOP_VIEW_IMAGE } from '../../../lib/images'

export default function ContactHero() {
  const { hero } = contactPage

  return (
    <section className="relative overflow-hidden bg-twilightIndigo pb-20 pt-36 text-white md:pb-24 md:pt-44">
      <div
        className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat"
        style={{ backgroundImage: `url(${TOP_VIEW_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-twilightIndigo/95 via-twilightIndigo/82 to-twilightIndigo/65" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo/90 via-twilightIndigo/30 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/40">
            <li>
              <Link to={routes.home} className="transition-colors hover:text-white/70">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/20">·</li>
            <li className="text-white/60">{hero.title}</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/70">
            <span className="h-px w-8 bg-racingRed" aria-hidden />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
