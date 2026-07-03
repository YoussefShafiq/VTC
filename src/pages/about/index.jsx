import SectionFade from '../../components/ui/SectionFade'
import AboutHero from './sections/AboutHero'
import OurStory from './sections/OurStory'
import Values from './sections/Values'
import Safety from './sections/Safety'
import Founders from './sections/Founders'
import AboutCta from './sections/AboutCta'

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <SectionFade>
        <OurStory />
      </SectionFade>

      <SectionFade>
        <Values />
      </SectionFade>

      <SectionFade>
        <Safety />
      </SectionFade>

      <SectionFade>
        <Founders />
      </SectionFade>

      <SectionFade fadeBottom="dark">
        <AboutCta />
      </SectionFade>
    </>
  )
}
