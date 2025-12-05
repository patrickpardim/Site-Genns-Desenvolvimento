import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-16 md:py-24 bg-brand-dark border-t border-white/5 overflow-hidden scroll-mt-16 md:scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-purple-600 rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipe no comando" 
                className="w-full h-auto object-cover opacity-90 hover:scale-105 transition duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase">
                    <Users size={16} />
                    Tripulação de Voo
                  </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <div className="mb-4 md:mb-6 inline-block">
                <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm border-b border-brand-primary pb-1">Quem somos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight">
              Pilotos da sua <br />
              <span className="text-brand-primary">jornada digital.</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
              {ABOUT_TEXT}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">100%</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Missões Cumpridas</p>
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Suporte em Órbita</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;