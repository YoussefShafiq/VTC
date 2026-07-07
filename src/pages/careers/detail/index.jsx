import { useParams, Navigate } from 'react-router-dom'
import { routes } from '../../../data/content'
import { getCareerRole } from '../../../lib/careers'
import JobHero from './sections/JobHero'
import JobApplicationForm from './sections/JobApplicationForm'

function JobSection({ title, items }) {
  return (
    <section className="border-b border-twilightIndigo/8 pb-8 last:border-b-0 last:pb-0">
      <h2 className="font-display text-xl font-semibold tracking-tight text-twilightIndigo md:text-2xl">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racingRed" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function CareerJobDetailPage() {
  const { slug } = useParams()
  const role = getCareerRole(slug)

  if (!role) {
    return <Navigate to={routes.careers} replace />
  }

  return (
    <>
      <JobHero role={role} />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <div className="min-w-0 space-y-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-racingRed">
                  About this role
                </p>
                <div className="mt-4 space-y-4">
                  {role.overview.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium text-twilightIndigo md:text-base">
                  {role.ctaLine}
                </p>
              </div>

              <JobSection title="Responsibilities" items={role.responsibilities} />
              <JobSection title="Requirements" items={role.requirements} />
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <JobApplicationForm role={role} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
