import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer, transition, viewport } from '../../lib/motion'

export function Stagger({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={fadeUp} transition={transition}>
      {children}
    </motion.div>
  )
}
