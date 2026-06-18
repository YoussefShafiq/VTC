import { useState } from 'react'
import { company, navLinks } from '../../data/content'
import Button from '../ui/Button'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-twilightIndigo/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-racingRed text-lg font-bold text-white shadow-lg shadow-racingRed/30">
            V
          </span>
          <div className="text-left">
            <p className="font-display text-lg font-semibold leading-none text-white">
              Vital
            </p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
              Transportation Corp.
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${company.phone}`}
            className="text-sm font-semibold text-white/90 hover:text-white"
          >
            {company.phone}
          </a>
          <Button href="#contact" className="!px-5 !py-2.5 !text-xs">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="text-xl leading-none">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-twilightIndigo px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-medium text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={`tel:${company.phone}`} className="py-2 text-sm font-semibold text-white">
              {company.phone}
            </a>
            <Button href="#contact" className="mt-2 w-full">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
