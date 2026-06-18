import { leadership } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function Leadership() {
  return (
    <section id="leadership" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title={leadership.title}
          description={leadership.subtitle}
        />

        <div className="space-y-8">
          {leadership.members.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="grid gap-8 rounded-3xl border border-twilightIndigo/10 bg-aliceBlue/15 p-6 md:grid-cols-[220px_1fr] md:p-8 lg:grid-cols-[280px_1fr]"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-twilightIndigo to-[#2d4675]">
                <div className="flex h-full flex-col items-center justify-center p-6 text-center text-white/70">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl font-display font-semibold text-white">
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <p className="text-xs uppercase tracking-wider">Leadership photo</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-racingRed">
                  {member.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-twilightIndigo md:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-twilightIndigo/75 md:text-base">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
