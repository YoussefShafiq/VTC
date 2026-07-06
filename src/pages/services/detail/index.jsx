import { useParams, Navigate } from 'react-router-dom'
import { services, routes } from '../../../data/content'
import SectionFade from '../../../components/ui/SectionFade'
import ServiceHero from './sections/ServiceHero'
import ServiceBody from './sections/ServiceBody'
import RelatedServices from './sections/RelatedServices'
import ServiceCta from './sections/ServiceCta'

export default function ServiceDetailPage() {
  const { slug } = useParams()

  const index = services.findIndex((s) => s.id === slug)

  if (index === -1) {
    return <Navigate to={routes.services} replace />
  }

  const service = services[index]

  return (
    <div key={slug}>
      <ServiceHero service={service} index={index} total={services.length} />

      <SectionFade>
        <ServiceBody service={service} />
      </SectionFade>

      <SectionFade>
        <RelatedServices currentId={service.id} />
      </SectionFade>

      <SectionFade fadeBottom="dark">
        <ServiceCta service={service} />
      </SectionFade>
    </div>
  )
}
