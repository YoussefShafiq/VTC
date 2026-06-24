import SectionFade from '../../components/ui/SectionFade'
import About from '../home/sections/About'
import WhyVital from '../home/sections/WhyVital'
import Leadership from '../home/sections/Leadership'

export default function AboutPage() {
  return (
    <>
      <SectionFade>
        <About />
      </SectionFade>

      <SectionFade>
        <WhyVital />
      </SectionFade>

      <SectionFade fadeBottom="dark">
        <Leadership />
      </SectionFade>
    </>
  )
}
