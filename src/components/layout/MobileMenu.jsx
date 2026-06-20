import { motion } from 'framer-motion'
import { company } from '../../data/content'
import Button from '../ui/Button'

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeOut', duration: 0.2 },
  },
}

export default function MobileMenu({ links, onClose }) {
  return (
    <motion.div className="space-y-1 px-2 pb-4 pt-2">
      {links.map((link) => (
        <motion.div key={link.href} variants={menuItemVariants}>
          <a
            href={link.href}
            onClick={onClose}
            className="block rounded-md px-3 py-2 text-base font-medium text-white/70 transition duration-300 hover:text-white"
          >
            {link.label}
          </a>
        </motion.div>
      ))}
      <motion.div variants={menuItemVariants}>
        <a
          href={`tel:${company.phone}`}
          onClick={onClose}
          className="block rounded-md px-3 py-2 text-base font-semibold text-white/90"
        >
          {company.phone}
        </a>
      </motion.div>
      <motion.div variants={menuItemVariants} className="px-3 pt-2">
        <Button href="#contact" className="w-full" onClick={onClose}>
          Contact Us
        </Button>
      </motion.div>
    </motion.div>
  )
}
