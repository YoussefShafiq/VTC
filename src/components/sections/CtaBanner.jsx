import { cta } from '../../data/content'
import Button from '../ui/Button'

export default function CtaBanner() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-twilightIndigo px-8 py-14 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,22,34,0.22),transparent_55%)]" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {cta.description}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#contact">{cta.button}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
