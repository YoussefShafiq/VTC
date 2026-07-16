import { Link, useLocation } from 'react-router-dom'
import { legalContact, legalLinks } from '../../data/content'

function LegalSection({ section }) {
  return (
    <article className="border-b border-twilightIndigo/8 pb-10 last:border-b-0 last:pb-0">
      <h2 className="font-display text-xl font-semibold tracking-tight text-twilightIndigo md:text-2xl">
        {section.heading}
      </h2>

      {section.paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 text-sm leading-relaxed text-twilightIndigo/70 md:text-base"
        >
          {paragraph}
        </p>
      ))}

      {section.bullets && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-twilightIndigo/70 md:text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racingRed" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.paragraphsAfter?.map((paragraph, index) => (
        <p
          key={`after-${index}`}
          className="mt-4 text-sm leading-relaxed text-twilightIndigo/70 md:text-base"
        >
          {paragraph}
        </p>
      ))}

      {section.note && (
        <p className="mt-4 rounded-xl border border-racingRed/15 bg-racingRed/5 px-4 py-3 text-sm font-medium leading-relaxed text-twilightIndigo/80 md:text-base">
          <span className="font-semibold text-racingRed">Note: </span>
          {section.note}
        </p>
      )}

      {section.examples && (
        <div className="mt-5 space-y-3">
          {section.examples.map((example) => (
            <div
              key={example.label}
              className="rounded-xl border border-twilightIndigo/10 bg-aliceBlue/25 px-4 py-4 md:px-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-racingRed">
                {example.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-twilightIndigo/75 md:text-base">
                &ldquo;{example.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      )}

      {section.contact && (
        <div className="mt-5 rounded-2xl border border-twilightIndigo/10 bg-aliceBlue/20 p-5 md:p-6">
          <p className="text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
            {legalContact.address}
          </p>
          <a
            href={`mailto:${legalContact.email}`}
            className="mt-2 block text-sm font-semibold text-twilightIndigo transition-colors hover:text-racingRed md:text-base"
          >
            Email: {legalContact.email}
          </a>
          <a
            href={`tel:${legalContact.phone.replace(/[^\d+]/g, '')}`}
            className="mt-1 block text-sm font-semibold text-twilightIndigo transition-colors hover:text-racingRed md:text-base"
          >
            Phone: {legalContact.phone}
          </a>
        </div>
      )}
    </article>
  )
}

export default function LegalDocument({ page }) {
  const { pathname } = useLocation()

  return (
    <>
      <section className="relative overflow-hidden bg-twilightIndigo pb-16 pt-36 text-white md:pb-20 md:pt-44">
        <div className="absolute inset-0 bg-gradient-to-br from-twilightIndigo via-twilightIndigo to-[#162544]" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-aliceBlue/70">
              <span className="h-px w-8 bg-racingRed" aria-hidden />
              {page.eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl">
              {page.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-3">
              <div className="sticky top-28 rounded-2xl border border-twilightIndigo/10 bg-[#f4f8ff] p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
                  Legal
                </p>
                <ul className="mt-4 space-y-2">
                  {legalLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            isActive
                              ? 'bg-white font-semibold text-twilightIndigo shadow-sm'
                              : 'text-twilightIndigo/65 hover:bg-white/70 hover:text-twilightIndigo'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-9 content-body">
              <div className="rounded-2xl border border-twilightIndigo/8 bg-white p-6 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.1)] md:p-10 lg:p-12">
                {page.intro?.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm leading-relaxed text-twilightIndigo/70 md:text-base ${
                      index > 0 ? 'mt-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mt-10 space-y-10">
                  {page.sections.map((section) => (
                    <LegalSection key={section.heading} section={section} />
                  ))}
                </div>

                {page.closing && (
                  <p className="mt-10 border-t border-twilightIndigo/8 pt-8 text-sm font-medium leading-relaxed text-twilightIndigo/75 md:text-base">
                    {page.closing}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
