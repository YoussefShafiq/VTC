import { leadership } from '../../../data/content'
import { FLEET_IMAGE } from '../../../lib/images'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

function MemberAvatar({ member, index }) {
  const initials = member.initials || getInitials(member.name)

  return (
    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl md:h-28 md:w-28">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <img
            src={FLEET_IMAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center 25%' }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-twilightIndigo/72" aria-hidden />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl font-semibold text-white/50 md:text-3xl">
              {initials}
            </span>
            <span className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-white/30">
              Photo soon
            </span>
          </div>
        </>
      )}
      <span
        className="absolute left-2 top-2 font-display text-[10px] font-semibold text-racingRed"
        aria-hidden
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

export default function LeadershipTeam() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/10" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 bg-cover bg-no-repeat opacity-[0.035]"
        style={{ backgroundImage: `url(${FLEET_IMAGE})`, backgroundPosition: 'center 60%' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-twilightIndigo/55">
              Meet the team
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-twilightIndigo md:text-4xl">
              Three founders. One shared commitment.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-twilightIndigo/65 md:text-lg">
              Over 45 years of combined industry wisdom — delivering peace of mind with every shipment.
            </p>
          </div>
        </AnimateOnScroll>

        <Stagger className="space-y-5">
          {leadership.members.map((member, index) => (
            <StaggerItem key={member.name}>
              <article className="group relative overflow-hidden rounded-2xl border border-twilightIndigo/8 bg-white transition-all duration-300 hover:border-twilightIndigo/15 hover:shadow-[0_24px_60px_-24px_rgba(31,50,88,0.18)]">
                <div
                  className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-racingRed/60 to-racingRed/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                <div className="flex flex-col gap-6 p-7 md:flex-row md:items-start md:gap-8 md:p-9">
                  <MemberAvatar member={member} index={index} />

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-racingRed">
                      {member.role}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-twilightIndigo md:text-3xl">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-twilightIndigo/65 md:text-base md:leading-relaxed">
                      {member.bio}
                    </p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-3 inline-block text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
