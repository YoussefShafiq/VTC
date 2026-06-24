export const ease = [0.22, 1, 0.36, 1]

export const viewport = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -6% 0px',
}

export const transition = {
  duration: 0.65,
  ease,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRight = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

export const variants = {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleUp,
}
