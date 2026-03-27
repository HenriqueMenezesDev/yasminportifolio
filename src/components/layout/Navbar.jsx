import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <h1 className="font-heading text-xl font-bold tracking-tight text-black">Yasmin Rocha.</h1>
      <div className="hidden md:flex gap-8 text-sm">
        <a href="#about" className="text-black/80 hover:text-accent font-medium transition-colors">Sobre mim</a>
        <a href="#services" className="text-black/80 hover:text-accent font-medium transition-colors">Serviços</a>
        <a href="#equipments" className="text-black/80 hover:text-accent font-medium transition-colors">Equipamentos</a>
        <a href="#portfolio" className="text-black/80 hover:text-accent font-medium transition-colors">Portfólio</a>
      </div>
      <a href="#contact" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent transition-all">
        Contato
      </a>
    </nav>
  );
}
