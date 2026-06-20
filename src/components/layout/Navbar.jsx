import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from './MobileMenu'
import { company, navLinks } from '../../data/content'
import Button from '../ui/Button'

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 top-3 lg:top-5 left-3 right-3 w-auto lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:max-w-7xl lg:w-[calc(100%-2.5rem)] rounded-3xl shadow-lg shadow-black/10 backdrop-blur-sm ${
        scrolled
          ? 'border border-white/15 bg-twilightIndigo/50'
          : 'border border-white/10 bg-twilightIndigo/50'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="#" className="group flex shrink-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-racingRed text-lg font-bold text-white shadow-lg shadow-racingRed/30">
              V
            </span>
            <div className="text-left">
              <p className="font-display text-lg font-semibold leading-none text-white">
                {company.shortName}
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                Transportation Corp.
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white/60 transition duration-300 hover:border-white/20 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`tel:${company.phone}`}
              className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              {company.phone}
            </a>
            <Button href="#contact" className="!px-5 !py-2.5 !text-xs">
              Contact Us
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 transition duration-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <Icon icon="mdi:close" className="h-6 w-6" />
              ) : (
                <Icon icon="mdi:menu" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <MobileMenu
              links={navLinks}
              onClose={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
