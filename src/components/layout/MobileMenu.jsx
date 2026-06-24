import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { company, routes } from '../../data/content'
import Button from '../ui/Button'

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeOut', duration: 0.2 },
  },
}

export default function MobileMenu({ links, serviceLinks, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <motion.div className="space-y-1 px-2 pb-4 pt-2">
      {links.map((link) => {
        if (link.label === 'Services') {
          return (
            <motion.div key={link.href} variants={menuItemVariants}>
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-medium text-twilightIndigo/70 transition duration-300 hover:text-twilightIndigo"
              >
                <span>{link.label}</span>
                <Icon
                  icon="mdi:chevron-down"
                  className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>

              {servicesOpen && (
                <div className="mt-1 space-y-1 border-l border-twilightIndigo/10 pl-3">
                  <Link
                    to={link.href}
                    onClick={onClose}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-twilightIndigo transition duration-300 hover:bg-aliceBlue/40"
                  >
                    All services
                  </Link>
                  {serviceLinks.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-2 text-sm text-twilightIndigo/70 transition duration-300 hover:bg-aliceBlue/40 hover:text-twilightIndigo"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )
        }

        return (
          <motion.div key={link.href} variants={menuItemVariants}>
            <Link
              to={link.href}
              onClick={onClose}
              className="block rounded-md px-3 py-2 font-medium text-twilightIndigo/70 transition duration-300 hover:text-twilightIndigo"
            >
              {link.label}
            </Link>
          </motion.div>
        )
      })}

      <motion.div variants={menuItemVariants}>
        <a
          href={`tel:${company.phone}`}
          onClick={onClose}
          className="block rounded-md px-3 py-2 font-semibold text-twilightIndigo/90"
        >
          {company.phone}
        </a>
      </motion.div>

      <motion.div variants={menuItemVariants} className="px-3 pt-2">
        <Button
          to={{ pathname: routes.home, hash: 'contact' }}
          className="w-full"
          onClick={onClose}
        >
          Contact Us
        </Button>
      </motion.div>
    </motion.div>
  )
}
