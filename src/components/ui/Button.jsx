import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-racingRed text-white hover:bg-racingRed/90 shadow-lg shadow-racingRed/20',
  secondary:
    'border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
  outline:
    'border border-twilightIndigo/20 text-twilightIndigo hover:bg-aliceBlue/60 bg-white',
  ghost: 'text-twilightIndigo hover:bg-aliceBlue/50',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
