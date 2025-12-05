import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-dark relative scroll-mt-16 md:scroll-mt-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-brand-primary/20 rounded-full mb-4">
                <HelpCircle className="text-brand-primary" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Dados da <span className="text-brand-primary">Estação Espacial</span>
            </h2>
            <p className="text-gray-400">Respostas para as dúvidas mais comuns dos viajantes.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'bg-white/10 border-brand-primary' : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                    {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-primary" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 border-t border-white/10 mt-2 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;