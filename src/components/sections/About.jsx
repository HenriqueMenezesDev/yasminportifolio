import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] w-full bg-neutral-100 rounded-3xl overflow-hidden group"
        >
          {/* Placeholder for Yasmin's Photo - we use a creative gradient background if no photo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-accent/40 mix-blend-overlay z-10"></div>
          <img 
            src="/media/yasmin.jpeg" 
            alt="Yasmin Rocha" 
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
          
          {/* Floating badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-black/10 z-20 shadow-xl"
          >
            <h3 className="font-heading text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-green-600">
              3º Período
            </h3>
            <p className="text-black/80 font-medium mt-1 text-sm">Estudante de Publicidade & Propaganda</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
              / Sobre mim
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight text-black">
              Criativa em <br/> <span className="text-accent italic font-display lowercase text-6xl">Essência</span>
            </h2>
          </div>

          <div className="space-y-6 text-black/70 font-light text-lg md:text-xl leading-relaxed">
            <p>
              Com apenas 19 anos, transformo ideias complexas em histórias estéticas e envolventes.  
              Estudando <strong className="font-semibold text-black">Publicidade e Propaganda</strong>, eu desenvolvo um olhar aguçado não apenas 
              para o visual, mas também para o impacto psicológico e estratégico do conteúdo.
            </p>
            <p>
              Design, Vídeo e Estratégia não são caixas separadas para mim. 
              Eles são ferramentas interligadas que uso para construir comunidades, gerar resultados 
              e dar voz a marcas no ambiente digital.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-black/10">
            <div>
              <h4 className="font-heading text-4xl font-bold text-black mb-2">100%</h4>
              <p className="text-black/60 text-sm">Foco & Dedicação em cada take</p>
            </div>
            <div>
              <h4 className="font-heading text-4xl font-bold text-black mb-2">360º</h4>
              <p className="text-black/60 text-sm">Visão completa: da estratégia à edição final</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
