import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="relative py-16 md:py-24 bg-[#15132b] scroll-mt-16 md:scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Nossas Missões</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            O que construímos para o seu <span className="text-brand-primary">Universo</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Ferramentas de alta tecnologia para garantir sua expansão no cosmos digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-dark rounded-xl flex items-center justify-center mb-6 border border-brand-primary/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(90,58,189,0.3)]">
                        <service.icon size={28} className="text-brand-primary md:w-8 md:h-8" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 uppercase tracking-wide">
                        {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors text-sm md:text-base">
                        {service.description}
                    </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;