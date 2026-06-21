import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SectionFade from './components/ui/SectionFade'
import Hero from './components/sections/Hero'
import IntroCards from './components/sections/IntroCards'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WhyVital from './components/sections/WhyVital'
import Leadership from './components/sections/Leadership'
import Resources from './components/sections/Resources'
import CtaBanner from './components/sections/CtaBanner'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <SectionFade animate={false}>
          <Hero />
        </SectionFade>

        <SectionFade fadeBottom="light">
          <IntroCards />
        </SectionFade>

        <SectionFade>
          <About />
        </SectionFade>

        <SectionFade fadeBottom="dark" animate={false}>
          <Services />
        </SectionFade>

        <WhyVital />

        <SectionFade fadeBottom="dark">
          <Leadership />
        </SectionFade>

        {/* <SectionFade fadeBottom="light"> */}
        <Resources />
        {/* </SectionFade> */}

        <CtaBanner />
      </main>

      <Footer />
    </div>
  )
}

export default App
