import { useId, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Fuse from 'fuse.js'
import { resourcesCategories, resourcesFaqs } from '../../../data/resources'
import { routes } from '../../../data/content'
import SectionHeading from '../../../components/ui/SectionHeading'

const categoryStyles = {
  general: {
    chip: 'border-twilightIndigo/15 bg-twilightIndigo/5 text-twilightIndigo hover:border-twilightIndigo/25',
    chipActive: 'border-twilightIndigo bg-twilightIndigo text-white shadow-md',
    accent: 'border-twilightIndigo/20',
    dot: 'bg-twilightIndigo',
  },
  shipment: {
    chip: 'border-racingRed/15 bg-racingRed/5 text-twilightIndigo hover:border-racingRed/25',
    chipActive: 'border-racingRed bg-racingRed text-white shadow-md',
    accent: 'border-racingRed/25',
    dot: 'bg-racingRed',
  },
  service: {
    chip: 'border-twilightIndigo/15 bg-aliceBlue/80 text-twilightIndigo hover:border-twilightIndigo/25',
    chipActive: 'border-twilightIndigo bg-twilightIndigo text-white shadow-md',
    accent: 'border-twilightIndigo/15',
    dot: 'bg-twilightIndigo/70',
  },
  pricing: {
    chip: 'border-racingRed/10 bg-white text-twilightIndigo hover:border-racingRed/20',
    chipActive: 'border-racingRed bg-racingRed text-white shadow-md',
    accent: 'border-racingRed/20',
    dot: 'bg-racingRed/80',
  },
  preparation: {
    chip: 'border-twilightIndigo/10 bg-white text-twilightIndigo hover:border-twilightIndigo/20',
    chipActive: 'border-twilightIndigo bg-twilightIndigo text-white shadow-md',
    accent: 'border-twilightIndigo/15',
    dot: 'bg-twilightIndigo/60',
  },
}

function getCategoryMeta(categoryId) {
  return resourcesCategories.find((c) => c.id === categoryId) ?? resourcesCategories[1]
}

function FaqAccordionItem({ item, isOpen, onToggle }) {
  const panelId = useId()
  const buttonId = useId()
  const style = categoryStyles[item.category] ?? categoryStyles.general
  const category = getCategoryMeta(item.category)

  return (
    <article className="group">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-start justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 md:gap-5 md:px-6 md:py-5 ${
            isOpen
              ? `bg-white shadow-[0_18px_50px_-28px_rgba(31,50,88,0.35)] ${style.accent}`
              : 'border-transparent bg-transparent hover:border-twilightIndigo/10 hover:bg-white/80'
          }`}
        >
          <span className="min-w-0 flex-1">
            <span className="mb-2 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${style.chip}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden />
                {category.label}
              </span>
            </span>
            <span className="block font-display text-base font-semibold leading-snug tracking-tight text-twilightIndigo md:text-lg">
              {item.question}
            </span>
          </span>
          <span
            className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
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
            <div className="px-5 pb-5 pt-1 md:px-6 md:pb-6">
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

export default function ResourcesFaq() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openId, setOpenId] = useState(null)

  const fuse = useMemo(
    () =>
      new Fuse(resourcesFaqs, {
        keys: ['question', 'answer', 'category'],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [],
  )

  const filteredFaqs = useMemo(() => {
    const categoryFiltered =
      activeCategory === 'all'
        ? resourcesFaqs
        : resourcesFaqs.filter((item) => item.category === activeCategory)

    const query = searchQuery.trim()
    if (!query) return categoryFiltered

    const searched = fuse.search(query).map((result) => result.item)
    if (activeCategory === 'all') return searched

    return searched.filter((item) => item.category === activeCategory)
  }, [activeCategory, searchQuery, fuse])

  const activeCategoryMeta = getCategoryMeta(activeCategory === 'all' ? 'general' : activeCategory)
  const categoryDescription =
    activeCategory === 'all'
      ? 'Search or filter by topic to find answers on freight, shipping, services, billing, and preparation.'
      : resourcesCategories.find((c) => c.id === activeCategory)?.description

  const categoryCounts = useMemo(() => {
    const counts = { all: resourcesFaqs.length }
    resourcesFaqs.forEach((item) => {
      counts[item.category] = (counts[item.category] ?? 0) + 1
    })
    return counts
  }, [])

  return (
    <section id="faq" className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/10" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ / Resources"
          title="Find answers fast"
          description="Every question from our resources library — filter by topic or search across all answers."
          align="center"
          animate={false}
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <aside className="sticky top-20 z-10 self-start sm:top-24 lg:top-28">
            <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain rounded-2xl border border-twilightIndigo/10 bg-[#f4f8ff] p-5 scrollbar-none md:p-6 sm:max-h-[calc(100dvh-7rem)] lg:max-h-[calc(100dvh-8rem)]">
              <label htmlFor="faq-search" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
                Search
              </label>
              <div className="relative mt-3">
                <svg
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-twilightIndigo/35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  id="faq-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full rounded-xl border border-twilightIndigo/10 bg-white py-3 pl-10 pr-4 text-sm text-twilightIndigo outline-none transition-colors placeholder:text-twilightIndigo/35 focus:border-twilightIndigo/25 focus:ring-2 focus:ring-aliceBlue"
                />
              </div>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
                Categories
              </p>
              <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
                {resourcesCategories.map((category) => {
                  const isActive = activeCategory === category.id
                  const count = categoryCounts[category.id] ?? 0
                  const chipStyle =
                    category.id === 'all'
                      ? isActive
                        ? 'border-twilightIndigo bg-twilightIndigo text-white shadow-md'
                        : 'border-twilightIndigo/15 bg-white text-twilightIndigo hover:border-twilightIndigo/25'
                      : isActive
                        ? categoryStyles[category.id]?.chipActive
                        : categoryStyles[category.id]?.chip

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(category.id)
                        setOpenId(null)
                      }}
                      className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-all duration-300 ${chipStyle}`}
                    >
                      <span>{category.label}</span>
                      <span className={`text-xs font-bold ${isActive ? 'text-white/70' : 'text-twilightIndigo/40'}`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 hidden rounded-xl border border-twilightIndigo/10 bg-white p-4 lg:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
                  Still need help?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-twilightIndigo/65">
                  Our dispatch team is available for direct support on shipments, leasing, and warehouse programs.
                </p>
                <Link
                  to={{ pathname: routes.home, hash: 'contact' }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
                >
                  Request a quote
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-3 border-b border-twilightIndigo/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-racingRed">
                  {activeCategory === 'all' ? 'All topics' : activeCategoryMeta.label}
                </p>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-twilightIndigo/65 md:text-base">
                  {categoryDescription}
                </p>
              </div>
              <p className="shrink-0 text-sm font-semibold text-twilightIndigo/50">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'}
              </p>
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-twilightIndigo/15 bg-aliceBlue/20 px-6 py-16 text-center">
                <p className="font-display text-xl font-semibold text-twilightIndigo">No matches found</p>
                <p className="mt-2 text-sm text-twilightIndigo/60">
                  Try a different search term or browse another category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('all')
                  }}
                  className="mt-6 text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="divide-y divide-twilightIndigo/10 rounded-[1.75rem] border border-twilightIndigo/10 bg-[#f4f8ff]/50 p-2 md:p-3">
                {filteredFaqs.map((item) => (
                  <FaqAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
