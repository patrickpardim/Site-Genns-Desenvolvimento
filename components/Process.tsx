import React from 'react';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="processo" className="relative py-24 bg-brand-dark scroll-mt-16 md:scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Plano de <span className="text-brand-primary">Voo</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-purple-900 to-transparent hidden md:block"></div>

            <div className="flex flex-col space-y-12">
            {PROCESS.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content Box */}
                    <div className="flex-1 w-full bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors relative group">
                         <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-primary rounded-full shadow-[0_0_10px_#5a3abd] ${index % 2 !== 0 ? '-right-[50px]' : '-left-[50px]'}`}></div>
                        
                        <div className="flex items-center gap-4 mb-3 text-brand-primary">
                            <item.icon size={24} />
                            <h3 className="font-bold text-lg uppercase tracking-wider text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>

                    {/* Timeline Dot (Mobile) */}
                    <div className="hidden"></div> 

                    {/* Timeframe Box */}
                    <div className="flex-1 w-full flex justify-center md:justify-start">
                        <div className={`inline-flex items-center justify-center px-6 py-2 rounded-full border border-brand-primary/30 text-white font-mono text-sm bg-brand-primary/5 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                             {item.timeframe}
                        </div>
                    </div>

                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;