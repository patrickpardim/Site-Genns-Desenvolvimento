import React from 'react';
import { PLANS } from '../constants';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="planos" className="relative py-16 md:py-24 bg-[#1e1b3a] overflow-hidden scroll-mt-16 md:scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Combustível & <span className="text-brand-primary">Manutenção</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
            Mantenha sua nave em órbita segura com nossos planos de suporte contínuo.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center max-w-lg lg:max-w-none mx-auto">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden flex flex-col transition-all duration-300 relative border w-full
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20
                ${plan.highlight 
                    ? 'bg-brand-primary/20 border-brand-primary shadow-[0_0_30px_rgba(90,58,189,0.3)] md:scale-105 z-10 hover:border-brand-primary' 
                    : 'bg-white/5 border-white/10 hover:border-brand-primary/50'
                }
              `}
            >
              {plan.highlight && (
                  <div className="bg-brand-primary text-white text-xs font-bold text-center py-1 uppercase tracking-widest flex items-center justify-center gap-1">
                      <Star size={12} fill="currentColor" /> Recomendado pelo Capitão
                  </div>
              )}

              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-center mb-2 text-white">
                  {plan.name}
                </h3>
                <div className="text-center mb-8">
                     <p className="text-2xl md:text-3xl font-bold text-white">{plan.price}<span className="text-sm text-gray-400 font-normal">/mês</span></p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 text-center border-t border-white/5">
                 <a 
                   href="#contato"
                   onClick={scrollToContact}
                   className={`block w-full py-3 rounded uppercase font-bold text-xs md:text-sm tracking-widest transition-colors cursor-pointer ${plan.highlight ? 'bg-brand-primary text-white hover:bg-brand-primary/80' : 'bg-white/10 text-white hover:bg-white/20'}`}
                 >
                     Solicitar Acesso
                 </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center p-4 bg-brand-primary/10 rounded-lg inline-block mx-auto w-full md:w-auto border border-brand-primary/20">
          <p className="text-white text-xs md:text-sm font-medium">
            ⚠ Nota do Comando: Contratação mínima de 06 ciclos lunares (meses).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;