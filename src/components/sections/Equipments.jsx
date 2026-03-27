import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { equipments } from '../../data/content'
import LazyImage from '../common/LazyImage'

export default function Equipments() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % equipments.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="equipments" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white text-black">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
          / Bastidores
        </span>
        <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight text-black">
          Meus <span className="text-accent italic font-display lowercase">Equipamentos</span>
        </h2>
        <p className="mt-4 text-black/60 font-medium max-w-xl">
          A união perfeita entre olhar criativo e tecnologia de ponta para entregar sempre o melhor resultado visual e sonoro.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Carousel Visuals */}
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-neutral-100 shadow-xl border border-black/5 group">
          <AnimatePresence mode="wait">
            <LazyImage
              key={currentIndex}
              src={equipments[currentIndex].image}
              alt={equipments[currentIndex].name}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              imgClassName="object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Fallback se a imagem não existir
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>
          
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-black/10 shadow-lg inline-block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    {equipments[currentIndex].icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-black text-lg">{equipments[currentIndex].name}</h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls & Info */}
        <div className="flex flex-col gap-4">
          {equipments.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                currentIndex === index
                  ? "bg-primary border-primary/50 shadow-md scale-100"
                  : "bg-white border-black/5 hover:border-black/20 hover:bg-neutral-50 scale-95 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between pointer-events-none">
                <div>
                  <h3 className={`font-heading text-2xl font-bold mb-1 transition-colors ${
                    currentIndex === index ? "text-black" : "text-black/70"
                  }`}>
                    {item.name}
                  </h3>
                  <p className={`font-medium transition-colors ${
                    currentIndex === index ? "text-black/80" : "text-black/50"
                  }`}>
                    {item.role}
                  </p>
                </div>
                {currentIndex === index && (
                  <motion.div layoutId="indicator" className="w-3 h-3 rounded-full bg-accent" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
