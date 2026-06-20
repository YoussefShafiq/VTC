import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
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
        <Hero />
        <IntroCards />
        <About />
        <Services />
        <WhyVital />
        <Leadership />
        <Resources />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
