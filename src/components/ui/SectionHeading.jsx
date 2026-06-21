export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center items-center'
      : 'max-w-2xl items-start'

  return (
    <div className={`mb-12 flex flex-col md:mb-16 ${alignClass} ${className}`}>
          {eyebrow && (
        <p
          className={`mb-5 text-xs font-semibold uppercase tracking-[0.24em] ${
            light ? 'text-aliceBlue/80' : 'text-twilightIndigo/55'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-[1.08] tracking-tight md:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-twilightIndigo'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? 'text-white/65' : 'text-twilightIndigo/65'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
