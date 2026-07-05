import SectionFade from '../../components/ui/SectionFade'
import CareerHero from './sections/CareerHero'
import WhatWeOffer from './sections/WhatWeOffer'
import JobRoles from './sections/JobRoles'
import EmployerTestimonials from './sections/EmployerTestimonials'
import CareerCta from './sections/CareerCta'

export default function CareersPage() {
  return (
    <>
      <CareerHero />

      <SectionFade>
        <WhatWeOffer />
      </SectionFade>

      <SectionFade>
        <JobRoles />
      </SectionFade>

        <EmployerTestimonials />

      <SectionFade fadeTop="dark" fadeBottom="dark">
        <CareerCta />
      </SectionFade>
    </>
  )
}
