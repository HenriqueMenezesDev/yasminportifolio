import { motion } from 'framer-motion'
import { ArrowRight, Mail, Instagram, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-primary relative text-black">
      <div className="max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/30 rounded-full blur-[120px] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="flex-1">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            / Contato
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 text-black">
            Vamos criar <br/> uma <span className="text-accent italic font-display lowercase pr-4">história</span>
            <span className="hidden md:inline">juntos?</span>
          </h2>
          <p className="text-black/60 font-medium text-lg mb-8 max-w-md">
            Seja para um novo lançamento, edição dinâmica ou estruturação da sua marca.
          </p>

          <form action="https://formsubmit.co/Ivoyas7@gmail.com" method="POST" className="space-y-4 max-w-md">
            {/* FormSubmit Configs */}
            <input type="hidden" name="_subject" value="Novo Orçamento - Portfólio Yasmin Rocha" />
            <input type="hidden" name="_template" value="box" />
            
            <div>
              <input type="text" name="nome" required placeholder="Seu Nome" className="w-full bg-white border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:border-accent transition-colors text-black placeholder:text-black/40" />
            </div>
            <div>
              <input type="email" name="email" required placeholder="Seu E-mail" className="w-full bg-white border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:border-accent transition-colors text-black placeholder:text-black/40" />
            </div>
            <div>
              <textarea name="mensagem" required placeholder="Mensagem" rows="4" className="w-full bg-white border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:border-accent transition-colors text-black placeholder:text-black/40 resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-black/80 transition-all group">
              Enviar Mensagem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto self-start md:self-center">
          <div className="space-y-1">
            <h4 className="text-black/50 text-sm font-medium">Email</h4>
            <a href="mailto:Ivoyas7@gmail.com" className="text-black font-semibold hover:text-accent transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Ivoyas7@gmail.com
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-black/50 text-sm font-medium">Socials</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/yr.storymaker.i/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-black">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/558291173136?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-black">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="space-y-1 mt-6 pt-6 border-t border-black/10">
            <p className="text-black/40 text-xs font-medium">
              © {new Date().getFullYear()} Yasmin Rocha. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
