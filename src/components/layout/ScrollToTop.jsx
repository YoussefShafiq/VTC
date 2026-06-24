import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routes, services } from '../../data/content'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')

      if (pathname === routes.services && services.some((service) => service.id === id)) {
        return
      }

      window.requestAnimationFrame(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
