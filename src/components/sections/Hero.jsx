import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-primary flex items-center justify-center p-6 pt-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-white/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-black/5"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse block"></span>
          <span className="text-sm font-medium text-black">Disponível para novos projetos</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl md:text-8xl lg:text-[110px] leading-[0.9] font-bold uppercase tracking-tighter text-black"
        >
          Sua <span className="text-accent italic font-display lowercase text-6xl md:text-9xl relative top-2">história</span> <br/>
          Com <span className="text-black underline decoration-accent decoration-wavy decoration-2 underline-offset-8">Propósito</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-black/70 max-w-xl mx-auto font-light"
        >
          Sou a <strong className="text-black font-medium">Yasmin Rocha</strong>, storymaker de 19 anos unindo os conceitos da Publicidade e Propaganda para criar experiências visuais que convertem e engajam.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#portfolio" className="bg-black text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-300 group">
            Veja meus trabalhos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="bg-white/50 border border-black/10 text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white transition-all duration-300">
            Conheça minha trajetória
          </a>
        </motion.div>
      </div>
    </section>
  )
}
