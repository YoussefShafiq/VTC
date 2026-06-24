import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from './MobileMenu'
import { company, navLinks, routes, services } from '../../data/content'
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

const serviceLinks = services.map((service) => ({
  label: service.title,
  href: `${routes.services}#${service.id}`,
}))

function NavItem({ link, pathname }) {
  const isActive =
    link.href === routes.home
      ? pathname === routes.home
      : pathname === link.href || pathname.startsWith(`${link.href}/`)

  const linkClass = `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition duration-300 ${
    isActive
      ? 'border-racingRed/50 text-twilightIndigo'
      : 'border-transparent text-twilightIndigo/60 hover:border-twilightIndigo/20 hover:text-twilightIndigo'
  }`

  if (link.label === 'Services') {
    return (
      <div className="group relative">
        <Link to={link.href} className={`${linkClass} gap-1`}>
          {link.label}
          <Icon
            icon="mdi:chevron-down"
            className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
            aria-hidden
          />
        </Link>

        <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
          <div className="overflow-hidden rounded-2xl border border-twilightIndigo/10 bg-white/95 shadow-[0_24px_60px_-24px_rgba(31,50,88,0.45)] backdrop-blur-md">
            <div className="border-b border-twilightIndigo/8 px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
                Core services
              </p>
              <p className="mt-1 text-sm text-twilightIndigo/65">
                Explore Vital&apos;s end-to-end logistics capabilities.
              </p>
            </div>
            <ul className="max-h-[24rem] overflow-y-auto py-2">
              {serviceLinks.map((child) => (
                <li key={child.href}>
                  <Link
                    to={child.href}
                    className="block px-5 py-3 text-sm leading-snug text-twilightIndigo/75 transition-colors hover:bg-aliceBlue/50 hover:text-twilightIndigo"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-twilightIndigo/8 px-5 py-3">
              <Link
                to={routes.services}
                className="text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
              >
                View all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link to={link.href} className={linkClass}>
      {link.label}
    </Link>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 top-3 lg:top-5 left-3 right-3 w-auto lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:max-w-7xl lg:w-[calc(100%-2.5rem)] rounded-3xl shadow-lg shadow-black/10 backdrop-blur-sm ${
        scrolled
          ? 'border border-white/15 bg-white/80'
          : 'border border-white/10 bg-white/100'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to={routes.home} className="shrink-0">
            <img
              src="/logoDark.png"
              alt={company.name}
              width={140}
              height={40}
              className="h-auto w-[100px] md:w-[120px] lg:w-[140px]"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} pathname={pathname} />
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`tel:${company.phone}`}
              className="text-sm font-semibold text-twilightIndigo/85 transition-colors hover:text-twilightIndigo"
            >
              {company.phone}
            </a>
            <Button to={{ pathname: routes.home, hash: 'contact' }} className="!px-5 !py-2.5 !text-xs">
              Contact Us
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-twilightIndigo/70 transition duration-300 hover:text-twilightIndigo focus:outline-none"
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
              serviceLinks={serviceLinks}
              onClose={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
