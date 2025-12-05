import React from 'react';
import { QUOTE } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with CSS Gradient & Stars */}
      <div className="absolute inset-0 bg-brand-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/40 via-brand-dark to-brand-dark z-0"></div>
      <div className="absolute inset-0 star-bg opacity-70 z-0"></div>
      
      {/* Planet Decoration */}
      <div className="absolute top-20 right-[-100px] w-64 h-64 bg-brand-primary rounded-full blur-[100px] opacity-40 animate-pulse"></div>

      <div className="container mx-auto relative z-10 max-w-5xl text-center px-4 sm:px-6 pt-24 md:pt-20">
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white backdrop-blur-sm animate-fade-in-up">
          Sistemas Operacionais Online
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
          Sua Marca Merece <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-400 to-white">
            Explorar o Universo.
          </span>
        </h1>

        <blockquote className="text-base sm:text-lg md:text-2xl font-light text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto italic border-l-4 border-brand-primary pl-4 sm:pl-0 sm:border-l-0 sm:border-t-4 sm:pt-6 text-left sm:text-center">
          {QUOTE.text}
          <footer className="mt-4 text-xs md:text-sm font-bold text-brand-primary not-italic uppercase tracking-widest">
             — {QUOTE.author}
          </footer>
        </blockquote>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-12 w-full sm:w-auto px-6 sm:px-0">
            <a 
              href="https://wa.me/5528992752202?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20o%20lan%C3%A7amento%20do%20meu%20projeto%20digital%21" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-primary/80 text-white font-bold rounded-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(90,58,189,0.5)] hover:shadow-[0_0_40px_rgba(90,58,189,0.8)] cursor-pointer text-center text-sm md:text-base"
            >
                Iniciar Lançamento
            </a>
            <a 
              href="#servicos" 
              onClick={(e) => scrollToSection(e, 'servicos')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-sm tracking-widest uppercase transition-all cursor-pointer text-center text-sm md:text-base"
            >
                Ver Missões
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;