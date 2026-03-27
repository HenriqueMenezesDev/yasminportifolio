import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Equipments from './components/sections/Equipments'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="text-black min-h-screen font-body selection:bg-accent selection:text-white">
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Equipments />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App
