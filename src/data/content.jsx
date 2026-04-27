import { Camera, Smartphone, Mic, Activity, Video, Image as ImageIcon, Instagram, PenTool } from 'lucide-react'

export const services = [
  {
    num: "01.",
    title: "Video Editing",
    desc: "Edição dinâmica para Reels, TikToks e Shorts. Cortes rápidos, ritmo impecável, legendas animadas e estética moderna.",
    icon: <Video className="w-6 h-6" />
  },
  {
    num: "02.",
    title: "Storymaking",
    desc: "Criação de narrativas cativantes e sequências de stories focadas em retenção de audiência e conversão.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    num: "03.",
    title: "Visual Design",
    desc: "Identidade visual para social media, thumbs e peças gráficas com o embasamento prático da publicidade.",
    icon: <ImageIcon className="w-6 h-6" />
  },
  {
    num: "04.",
    title: "Social Media Strategy",
    desc: "Posicionamento e planejamento de viabilidade para alavancar marcas através do conteúdo digital.",
    icon: <Instagram className="w-6 h-6" />
  }
];

export const equipments = [
  {
    id: 1,
    name: "DJI Osmo Mobile SE",
    role: "Estabilizador: Takes fluídos e transições cinematográficas",
    image: "/media/dji-osmo.jpeg",
    icon: <Activity className="w-5 h-5" />
  },
  {
    id: 2,
    name: "iPhone",
    role: "Celular: Captura rápida e dinâmica com qualidade 4K",
    image: "/media/iphone-17.jpg",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    id: 3,
    name: "Hollyland lark m2",
    role: "Microfone: Captação de áudio limpa e profissional",
    image: "/media/hollyland-lark-m2.webp",
    icon: <Mic className="w-5 h-5" />
  },
  {
    id: 4,
    name: "Canon EOS R50",
    role: "Câmera: Qualidade de estúdio, perfeita para campanhas",
    image: "/media/canon.jpg",
    icon: <Camera className="w-5 h-5" />
  }
];

export const projects = [
  {
    id: 1,
    type: "video",
    filter: "Vídeos",
    category: "Storymaking e Edição",
    title: "Refresh",
    src: "/media/refresh.mp4",
    poster: "/media/capa video Refresh.PNG",
    color: "from-accent"
  },
  {
    id: 2,
    type: "video",
    filter: "Vídeos",
    category: "Eventos & Edição",
    title: "Confra Sanama",
    src: "/media/confra.mp4",
    poster: "/media/capa video Sanama.PNG",
    color: "from-primary"
  },
  {
    id: 3,
    type: "video",
    filter: "Vídeos",
    category: "Filmmaker",
    title: "Convenção Guido",
    src: "/media/guido.mp4",
    poster: "/media/capa video convenção guido.PNG",
    color: "from-emerald-500"
  },
  {
    id: 4,
    type: "video",
    filter: "Vídeos",
    category: "Fashion Reels",
    title: "Documentário Casa Vieira",
    src: "/media/moda.mp4",
    poster: "/media/capa video documentario casa vieira.PNG",
    color: "from-teal-500"
  },
  {
    id: 5,
    type: "image",
    filter: "Fotos",
    category: "Identidade Visual",
    title: "Ativação Pointer",
    src: "/media/ativacao-pointer.png",
    color: "from-accent"
  },
  {
    id: 6,
    type: "image",
    filter: "Fotos",
    category: "Criação de Campanha",
    title: "Ação Elevva",
    src: "/media/elevva.png",
    color: "from-primary"
  },
  {
    id: 7,
    type: "image",
    filter: "Fotos",
    category: "Social Media Design",
    title: "Campanha Criativa",
    src: "/media/campanha-criativa.png",
    color: "from-teal-500"
  },
  {
    id: 8,
    type: "carousel",
    filter: "Fotos",
    category: "Editorial",
    title: "Produção Noiva",
    images: [
      "/media/noiva-1.png",
      "/media/noiva-2.png",
      "/media/noiva-3.png",
      "/media/noiva-4.png"
    ],
    color: "from-emerald-500"
  },
  {
    id: 9,
    type: "carousel",
    filter: "Fotos",
    category: "Social Media Content",
    title: "Conjunto Essence",
    images: [
      "/media/essence-post-1.png",
      "/media/essence-2.png",
      "/media/essence-post-3.png",
      "/media/essence-post-4.png"
    ],
    color: "from-accent"
  }
];
