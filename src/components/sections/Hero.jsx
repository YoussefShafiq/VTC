import { hero } from '../../data/content'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-twilightIndigo">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,22,34,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(223,238,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-aliceBlue">
            <span className="h-1.5 w-1.5 rounded-full bg-racingRed" />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact">{hero.primaryCta}</Button>
            <Button href="#solutions" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
            <div className="flex h-full flex-col justify-between bg-gradient-to-br from-twilightIndigo via-[#2a4270] to-[#152238] p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-racingRed">
                  Real-world capability
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-white">
                  Port drayage · OTR · Warehouse
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Replace with on-site photography — containers, fleet, warehouse operations, and dispatch in action.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Drayage', 'Intermodal', 'LTL'].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-aliceBlue">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-racingRed px-6 py-4 shadow-xl lg:block">
            <p className="text-3xl font-display font-bold text-white">Since 2011</p>
            <p className="text-xs uppercase tracking-wider text-white/80">Trusted regional carrier</p>
          </div>
        </div>
      </div>
    </section>
  )
}
