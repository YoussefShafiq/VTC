import { motion, useReducedMotion } from 'framer-motion'
import { transition, variants, viewport } from '../../lib/motion'

export default function AnimateOnScroll({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as = 'div',
  viewport: viewportOverride,
}) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduceMotion) {
    const Tag = as === 'div' ? 'div' : as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOverride ?? viewport}
      variants={variants[variant] ?? variants.fadeUp}
      transition={{ ...transition, delay }}
    >
      {children}
    </Component>
  )
}
