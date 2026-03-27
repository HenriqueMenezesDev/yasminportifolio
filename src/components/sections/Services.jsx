import { motion } from 'framer-motion'
import { services } from '../../data/content'

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-primary relative text-black">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-[100px] -z-10"></div>
        
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
          / Minhas Skills
        </span>
        <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight max-w-2xl">
          Como eu entrego <span className="text-primary italic font-display lowercase">Valor</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group block p-8 rounded-3xl bg-neutral-900/50 hover:bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden relative"
          >
              {/* Magnetic Hover effect layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-heading text-2xl font-bold text-black/20 group-hover:text-accent transition-colors">
                    {service.num}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="font-heading text-3xl font-bold mb-4 text-black group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-black/70 font-light leading-relaxed group-hover:text-black transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
