import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs, routes } from '../../../data/content'
import SectionHeading from '../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'

function FaqItem({ item, isOpen, onToggle }) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <article className="group">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-start justify-between gap-5 rounded-2xl border px-6 py-5 text-left transition-all duration-300 md:px-7 md:py-6 ${
            isOpen
              ? 'border-twilightIndigo/15 bg-white shadow-[0_18px_50px_-28px_rgba(31,50,88,0.35)]'
              : 'border-transparent bg-transparent hover:border-twilightIndigo/10 hover:bg-white/70'
          }`}
        >
          <span className="font-display text-lg font-semibold leading-snug tracking-tight text-twilightIndigo md:text-xl">
            {item.question}
          </span>
          <span
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? 'border-racingRed/20 bg-racingRed text-white'
                : 'border-twilightIndigo/10 bg-aliceBlue/50 text-twilightIndigo group-hover:border-twilightIndigo/20'
            }`}
            aria-hidden
          >
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path d="M8 3.5v9M3.5 8h9" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 md:px-7 md:pb-7">
              <div className="border-l-2 border-racingRed/70 pl-5">
                <p className="text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
                  {item.answer}
                </p>
                {item.bullets?.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-twilightIndigo/70 md:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racingRed/80" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default function Faq() {
  const [openId, setOpenId] = useState(faqs.items[0]?.id ?? null)

  return (
    <section id="faq" className="relative overflow-hidden bg-twilightIndigo py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-twilightIndigo/10 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <AnimateOnScroll variant="fadeRight" className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={faqs.eyebrow}
              title={faqs.title}
              description={faqs.description}
              className="mb-0 md:mb-0"
              light
            />

            <div className="mt-10 hidden rounded-2xl border border-twilightIndigo/10 bg-white/80 p-6 backdrop-blur-sm lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo">
                Still need help?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-twilightIndigo/65">
                Our dispatch and account teams are available for direct support on shipments, leasing, and warehouse programs.
              </p>
              <Link
                to={{ pathname: routes.home, hash: 'contact' }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
              >
                Request a quote
                <span aria-hidden>→</span>
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeLeft" delay={0.1}>
          <Stagger className="divide-y divide-twilightIndigo/10 rounded-[1.75rem] border border-twilightIndigo/10 bg-white/80 p-2 shadow-[0_24px_80px_-48px_rgba(31,50,88,0.45)] backdrop-blur-sm md:p-3">
            {faqs.items.map((item) => (
              <StaggerItem key={item.id}>
              <FaqItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
              </StaggerItem>
            ))}
          </Stagger>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-10 lg:hidden">
        <div className="rounded-2xl border border-twilightIndigo/10 bg-white/80 p-6 backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
            Still need help?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-twilightIndigo/65">
            Reach out for shipment updates, equipment leasing, or warehouse support.
          </p>
          <Link
            to={{ pathname: routes.home, hash: 'contact' }}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
          >
            Request a quote
            <span aria-hidden>→</span>
          </Link>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
