import { Link } from 'react-router-dom'
import { routes, serviceRegion } from '../../data/content'

/** Link to the contact page service-region map. */
export default function ServiceRegionLink({ children, className = '' }) {
  return (
    <Link
      to={{ pathname: routes.contact, hash: serviceRegion.id }}
      className={
        className ||
        'underline decoration-racingRed/40 underline-offset-2 transition-colors hover:text-racingRed hover:decoration-racingRed'
      }
    >
      {children ?? serviceRegion.title}
    </Link>
  )
}

/** Replace the service-region title in a string with a linked instance. */
export function textWithServiceRegionLink(text, linkClassName) {
  const label = serviceRegion.title
  const index = text.indexOf(label)
  if (index === -1) return text

  return (
    <>
      {text.slice(0, index)}
      <ServiceRegionLink className={linkClassName}>{label}</ServiceRegionLink>
      {text.slice(index + label.length)}
    </>
  )
}
