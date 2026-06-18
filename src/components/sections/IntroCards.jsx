import { introCards } from '../../data/content'

export default function IntroCards() {
  return (
    <section className="relative z-10 -mt-8 pb-20 md:-mt-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3 lg:px-8">
        {introCards.map((card, index) => (
          <article
            key={card.title}
            className="group rounded-3xl border border-twilightIndigo/8 bg-white p-8 shadow-xl shadow-twilightIndigo/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-twilightIndigo/10"
          >
            <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-aliceBlue text-sm font-bold text-twilightIndigo">
              0{index + 1}
            </span>
            <h3 className="font-display text-xl font-semibold text-twilightIndigo">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-twilightIndigo/70">
              {card.description}
            </p>
            <a
              href={card.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-racingRed transition-transform group-hover:gap-3"
            >
              {card.cta}
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
