import { Children } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer, transition, viewport } from '../../lib/motion'

function getChildrenKey(children) {
  return Children.toArray(children)
    .map((child) => child.key ?? '')
    .join('|')
}

export function Stagger({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  const childrenKey = getChildrenKey(children)

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      key={childrenKey}
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
