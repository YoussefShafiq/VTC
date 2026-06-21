import { leadership } from '../../data/content'
import { FLEET_IMAGE, fleetImagePositions } from '../../lib/images'
import SectionHeading from '../ui/SectionHeading'

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 bg-cover bg-no-repeat opacity-[0.05]"
        style={{ backgroundImage: `url(${FLEET_IMAGE})`, backgroundPosition: 'center 60%' }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title={leadership.title}
          description={leadership.subtitle}
        />

        <div className="space-y-0 divide-y divide-twilightIndigo/8">
          {leadership.members.map((member, index) => {
            const reversed = index % 2 === 1
            const initials = member.name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)

            return (
              <article
                key={`${member.name}-${index}`}
                className={`grid items-center gap-10 py-14 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={`relative ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <div className="relative aspect-[5/6] max-w-sm overflow-hidden rounded-2xl">
                    <img
                      src={FLEET_IMAGE}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ objectPosition: fleetImagePositions[index % fleetImagePositions.length] }}
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo via-twilightIndigo/70 to-twilightIndigo/40" aria-hidden />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-6xl font-semibold text-white/25 md:text-7xl">
                        {initials}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-twilightIndigo/80 p-4 backdrop-blur-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        Leadership photo placeholder
                      </p>
                    </div>
                    <span
                      className="absolute left-4 top-4 font-display text-sm font-semibold text-racingRed"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className={`${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-racingRed">
                    {member.role}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-twilightIndigo md:text-4xl">
                    {member.name}
                  </h3>
                  <p className="mt-6 max-w-lg text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                    {member.bio}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
