import { motion } from 'framer-motion'

export default function SectionFade({
  children,
  fadeTop,
  fadeBottom,
  animate = true,
  className = '',
}) {
  const content = animate ? (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: true, amount: 0.08 }}
      // transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </div>
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
