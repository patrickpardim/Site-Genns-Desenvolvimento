import React from 'react';
import { ADVANTAGES } from '../constants';

const Advantages: React.FC = () => {
  return (
    <section id="vantagens" className="relative py-16 md:py-24 bg-brand-dark overflow-hidden scroll-mt-16 md:scroll-mt-24">
      {/* Background Star Texture */}
      <div className="absolute inset-0 star-bg opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Header - Sticky only on LG screens */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Por que escolher a <span className="text-brand-primary">Genns</span> como copiloto?
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              No vácuo do espaço digital, a tecnologia certa é a diferença entre ficar à deriva ou conquistar novos mundos.
            </p>
            <div className="w-16 md:w-20 h-1 bg-brand-primary rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 gap-6">
            {ADVANTAGES.map((item) => (
              <div key={item.id} className="bg-brand-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-lg flex flex-col sm:flex-row gap-4 md:gap-6 hover:border-brand-primary/50 transition-colors">
                <div className="text-4xl md:text-5xl font-black text-brand-white/10 flex-shrink-0 font-mono">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-primary mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;