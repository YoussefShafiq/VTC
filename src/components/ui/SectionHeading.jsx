export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-racingRed' : 'text-racingRed'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-twilightIndigo'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-white/75' : 'text-twilightIndigo/70'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
