import { leadership } from '../../data/content'
import { FLEET_IMAGE } from '../../lib/images'
import SectionHeading from '../ui/SectionHeading'

function MemberAvatar({ member, index, size = 'md' }) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  const sizeClass =
    size === 'lg'
      ? 'h-28 w-28 shrink-0 md:h-32 md:w-32'
      : 'h-14 w-14 shrink-0'

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-twilightIndigo ${sizeClass}`}
    >
      <img
        src={FLEET_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center 40%' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-twilightIndigo/75" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-display font-semibold text-white/40 ${
            size === 'lg' ? 'text-3xl md:text-4xl' : 'text-lg'
          }`}
        >
          {initials}
        </span>
      </div>
      {member.placeholder && (
        <span className="absolute bottom-1.5 left-0 right-0 text-center text-[8px] font-semibold uppercase tracking-wider text-white/35">
          Photo soon
        </span>
      )}
      {size === 'lg' && (
        <span
          className="absolute left-2 top-2 font-display text-[10px] font-semibold text-racingRed"
          aria-hidden
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
    </div>
  )
}

export default function Leadership() {
  const [ceo, ...team] = leadership.members

  return (
    <section id="leadership" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 bg-cover bg-no-repeat opacity-[0.04]"
        style={{ backgroundImage: `url(${FLEET_IMAGE})`, backgroundPosition: 'center 60%' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title={leadership.title}
          description={leadership.subtitle}
        />

        <article className="overflow-hidden rounded-2xl border border-twilightIndigo/10 bg-aliceBlue/15">
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:gap-8 md:p-8">
            <MemberAvatar member={ceo} index={0} size="lg" />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-racingRed">
                {ceo.role}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-twilightIndigo md:text-3xl">
                {ceo.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                {ceo.bio}
              </p>
            </div>
          </div>
        </article>

        {team.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {team.map((member, index) => (
              <article
                key={`${member.name}-${index}`}
                className="flex items-start gap-4 rounded-2xl border border-twilightIndigo/8 bg-white p-5 md:p-6"
              >
                <MemberAvatar member={member} index={index + 1} size="sm" />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-racingRed">
                    {member.role}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-twilightIndigo">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-twilightIndigo/60">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
