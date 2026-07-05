import { motion } from 'framer-motion'
import { careerPage } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import { fadeUp, staggerContainer, transition } from '../../../lib/motion'

export default function CareerHero() {
  const { hero } = careerPage

  return (
    <section className="relative overflow-hidden bg-twilightIndigo pb-28 pt-40 text-white md:pb-32 md:pt-48">
      <div
        className="absolute inset-0 bg-cover bg-[center_40%] bg-no-repeat"
        style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-twilightIndigo/95 via-twilightIndigo/82 to-twilightIndigo/65" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo/90 via-twilightIndigo/30 to-transparent" aria-hidden />

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/70"
          >
            <span className="h-px w-8 bg-racingRed" aria-hidden />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={transition}
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {hero.subtitle}
          </motion.p>
        </motion.div>

        <motion.dl
          className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {hero.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={transition}
              className="group"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-aliceBlue md:text-4xl">
                {stat.value}
              </dd>
              <dd className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
