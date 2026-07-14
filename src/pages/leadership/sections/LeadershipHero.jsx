import { motion } from 'framer-motion'
import { company, leadership } from '../../data/content'
import { TOP_VIEW_IMAGE } from '../../lib/images'
import { fadeUp, staggerContainer, transition } from '../../lib/motion'

export default function LeadershipHero() {
  return (
    <section className="relative overflow-hidden bg-twilightIndigo pb-28 pt-40 text-white md:pb-32 md:pt-48">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${TOP_VIEW_IMAGE})`, backgroundPosition: 'center 35%' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-twilightIndigo/95 via-twilightIndigo/85 to-twilightIndigo/65" aria-hidden />
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
            Leadership
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={transition}
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
          >
            {leadership.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {leadership.subtitle}
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-4 text-sm text-white/45"
          >
            {company.name} · Est. {company.since}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
