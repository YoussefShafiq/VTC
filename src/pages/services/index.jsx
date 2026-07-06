import SectionFade from '../../components/ui/SectionFade'
import ServicesHero from './sections/ServicesHero'
import ServicesList from './sections/ServicesList'
import ServicesCta from './sections/ServicesCta'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <SectionFade>
        <ServicesList />
      </SectionFade>

      <SectionFade fadeBottom="dark">
        <ServicesCta />
      </SectionFade>
    </>
  )
}
