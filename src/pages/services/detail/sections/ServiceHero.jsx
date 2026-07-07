import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { routes } from '../../../../data/content'
import { getServiceImage } from '../../../../lib/images'
import { fadeUp, staggerContainer, transition } from '../../../../lib/motion'

export default function ServiceHero({ service, index, total }) {
  return (
    <section className="relative overflow-hidden bg-twilightIndigo pb-24 pt-40 text-white md:pt-48 md:pb-28">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${getServiceImage(service.id)})`,
          backgroundPosition: service.imagePosition ?? 'center 40%',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-twilightIndigo/96 via-twilightIndigo/80 to-twilightIndigo/55" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo/90 via-transparent to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/40">
            <li>
              <Link to={routes.home} className="transition-colors hover:text-white/70">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/20">·</li>
            <li>
              <Link to={routes.services} className="transition-colors hover:text-white/70">
                Services
              </Link>
            </li>
            <li aria-hidden className="text-white/20">·</li>
            <li className="text-white/60">{service.title}</li>
          </ol>
        </nav>

        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/60"
          >
            <span className="h-px w-8 bg-racingRed" aria-hidden />
            Service {String(index + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={transition}
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-[3.2rem]"
          >
            {service.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {service.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={transition}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to={{ pathname: routes.home, hash: routes.quoteHash }}
              className="inline-flex items-center gap-2 rounded-full bg-racingRed px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-racingRed/20 transition-all duration-300 hover:bg-racingRed/90"
            >
              Request a quote
            </Link>
            <Link
              to={routes.services}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              All services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
