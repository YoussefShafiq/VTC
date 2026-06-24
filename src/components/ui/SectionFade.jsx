import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, transition, viewport } from '../../lib/motion'

export default function SectionFade({
  children,
  fadeTop,
  fadeBottom,
  animate = true,
  className = '',
}) {
  const reduceMotion = useReducedMotion()

  const content =
    animate && !reduceMotion ? (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        transition={transition}
      >
        {children}
      </motion.div>
    ) : (
      children
    )

  return (
    <div className={`relative ${className}`}>
      {fadeTop && (
        <div
          className={`section-blend-top section-blend-top--${fadeTop}`}
          aria-hidden
        />
      )}
      {fadeBottom && (
        <div
          className={`section-blend-bottom section-blend-bottom--${fadeBottom}`}
          aria-hidden
        />
      )}
      {content}
    </div>
  )
}
