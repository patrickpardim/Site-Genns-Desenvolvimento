import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Rocket } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden scroll-mt-16 md:scroll-mt-24 border-t border-brand-primary/20">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000&auto=format&fit=crop" 
           alt="Astronauta explorando o espaço digital" 
           className="w-full h-full object-cover object-center opacity-60"
         />
         {/* Heavy Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-[#1e1b3a]/90 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b3a] via-[#1e1b3a]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
             
             {/* Decorative Background Glow behind text */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px] -z-10"></div>

             <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-6 text-white drop-shadow-lg uppercase">
              Pronto para iniciar a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400">Contagem Regressiva</span> do seu sucesso?
             </h2>
             
             <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                 O universo é vasto, mas sua marca não precisa se perder nele. Vamos traçar a rota hoje mesmo.
             </p>
             
             <div className="flex justify-center">
               <a 
                href="https://wa.me/5528992752202?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20base%20da%20Genns%21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-4 rounded font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(90,58,189,0.5)] cursor-pointer text-sm md:text-base border border-white/10"
               >
                   <Rocket size={20} />
                   Contatar Base
               </a>
             </div>

         </div>
      </div>
    </section>
  );
};

export default Contact;