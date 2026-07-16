import SectionFade from '../../components/ui/SectionFade'
import Hero from './sections/Hero'
import IntroCards from './sections/IntroCards'
import CtaBanner from './sections/CtaBanner'
import Faq from './sections/Faq'
import Resources from './sections/Resources'
import Services from './sections/Services'
import About from './sections/About'
import WhyVital from './sections/WhyVital'
import Leadership from './sections/Leadership'
import ReviewsTeaser from './sections/ReviewsTeaser'

export default function HomePage() {
  return (
    <>
      <Hero />

      <IntroCards />

      <SectionFade>
        <About />
      </SectionFade>

      <SectionFade>
        <WhyVital />
      </SectionFade>

      <SectionFade>
        <Services />
      </SectionFade>

      <SectionFade>
        <ReviewsTeaser />
      </SectionFade>

      <SectionFade>
        <Resources />
      </SectionFade>

      <SectionFade>
        <Leadership />
      </SectionFade>

      <SectionFade>
        <Faq />
      </SectionFade>

      <SectionFade fadeBottom="dark">
        <CtaBanner />
      </SectionFade>
    </>
  )
}

