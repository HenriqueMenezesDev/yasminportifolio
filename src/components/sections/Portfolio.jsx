import { useState, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronRight, ChevronLeft, Play } from 'lucide-react'
import { projects } from '../../data/content'
import LazyImage from '../common/LazyImage'
import LazyVideo from '../common/LazyVideo'

// Sub-componente mágico para lidar individualmente com Imagens, Vídeos (Hover) e Carrosséis
// Memoizado via React.memo para evitar re-renderizações no filtro central
const MediaCard = memo(({ project, isPlaying, onTogglePlay }) => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const videoRef = useRef(null)

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIdx((prev) => (prev + 1) % project.images.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIdx((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleClick = (e) => {
    // Se for vídeo, alterna o play
    if (project.type === 'video') {
      onTogglePlay()
    }
    // Para imagens/carrosséis, o comportamento padrão do layout é mantido (nenhum clique especial exceto setas)
  }

  return (
    <div 
      className="absolute inset-0 bg-neutral-100"
      onClick={handleClick}
    >
      {project.type === 'image' && (
        <LazyImage 
          src={project.src} 
          alt={project.title}
          className="w-full h-full"
          imgClassName="scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out filter grayscale-0 md:grayscale-[50%] md:group-hover:grayscale-0"
        />
      )}

      {project.type === 'video' && (
        <div className="w-full h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div 
                key="poster"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                {/* Poster Image or Fallback */}
                {project.poster ? (
                  <LazyImage 
                    src={project.poster} 
                    alt={project.title}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color.replace('from-', 'from-')}/20 to-neutral-200 flex items-center justify-center`}>
                    <div className="text-black/5 uppercase tracking-tighter text-9xl font-bold select-none rotate-12">
                      VIDEO
                    </div>
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <LazyVideo 
                  ref={videoRef}
                  src={project.src} 
                  autoPlay
                  className="w-full h-full"
                  videoClassName="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1s]"
                  posterColor={project.color ? project.color.replace('from-', '#') : '#f5f5f5'}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {project.type === 'carousel' && (
        <div className="w-full h-full relative">
          <AnimatePresence mode="wait">
            <LazyImage
              key={currentIdx}
              src={project.images[currentIdx]}
              alt={`${project.title} - ${currentIdx}`}
              className="absolute inset-0 w-full h-full"
              imgClassName="scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={handlePrev} className="bg-white/80 p-2 rounded-full text-black hover:bg-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="bg-white/80 p-2 rounded-full text-black hover:bg-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-4 inset-x-0 flex justify-center gap-2 z-30">
            {project.images.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIdx ? 'w-6 bg-accent' : 'w-2 bg-white/50'}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
})

Portfolio.displayName = 'Portfolio'

export default function Portfolio() {
  const [filter, setFilter] = useState("Todos")
  const [playingProjectId, setPlayingProjectId] = useState(null)
  
  const filters = ["Todos", "Vídeos", "Fotos"]
  
  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.filter === filter)

  const handleTogglePlay = (id) => {
    setPlayingProjectId(prev => prev === id ? null : id)
  }

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white text-black">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            / Trabalhos Selecionados
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tight text-black">
            Meu <span className="text-accent italic font-display lowercase">Portfólio</span>
          </h2>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex gap-2 flex-wrap"
        >
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => {
                setFilter(f)
                setPlayingProjectId(null) // Reset playback on filter change
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === f 
                ? "bg-black text-white border-black shadow-md" 
                : "bg-transparent text-black/60 border-black/20 hover:border-black/60 hover:text-black"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow ${
                index % 2 !== 0 && typeof window !== 'undefined' && window.innerWidth >= 768 ? 'md:translate-y-12' : ''
              }`}
            >
              <MediaCard 
                project={project} 
                isPlaying={playingProjectId === project.id}
                onTogglePlay={() => handleTogglePlay(project.id)}
              />

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Data Container */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none">
                <div>
                  <p className="text-white/90 font-medium text-sm mb-2">{project.category}</p>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100 shadow-xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
