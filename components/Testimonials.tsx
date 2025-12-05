import React, { useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Get the width of the first card to scroll exactly one item
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth : 300;
      const gap = 24; // Tailwind gap-6 is 24px
      
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#121024] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-10 md:mb-16 text-center">
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Diário de Bordo</span>
           <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            O que dizem nossos <span className="text-brand-primary">Parceiros</span>
          </h2>
        </div>

        {/* Container wrapper */}
        <div className="relative group/section max-w-6xl mx-auto">
            
            {/* DESKTOP Navigation Buttons - Hidden on mobile/tablet (up to XL), visible on X-Large screens */}
            <button 
                onClick={() => scroll('left')}
                className="hidden xl:flex absolute top-1/2 -translate-y-1/2 z-30 items-center justify-center
                           -left-12 2xl:-left-20
                           w-12 h-12
                           bg-brand-dark/80 backdrop-blur-md border border-white/20 text-white rounded-full 
                           shadow-[0_0_15px_rgba(0,0,0,0.5)] 
                           hover:bg-brand-primary hover:border-brand-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(90,58,189,0.4)]
                           transition-all active:scale-95"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            
            <button 
                onClick={() => scroll('right')}
                className="hidden xl:flex absolute top-1/2 -translate-y-1/2 z-30 items-center justify-center
                           -right-12 2xl:-right-20
                           w-12 h-12
                           bg-brand-dark/80 backdrop-blur-md border border-white/20 text-white rounded-full 
                           shadow-[0_0_15px_rgba(0,0,0,0.5)] 
                           hover:bg-brand-primary hover:border-brand-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(90,58,189,0.4)]
                           transition-all active:scale-95"
                aria-label="Próximo"
            >
                <ChevronRight size={24} />
            </button>

            {/* Scroll Container */}
            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {TESTIMONIALS.map((t, index) => (
                <div key={index} className="min-w-[85vw] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center bg-brand-dark border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-brand-primary/30 transition-colors h-auto select-none">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4 text-brand-primary">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                        ))}
                    </div>
                    <MessageCircle size={24} className="text-brand-primary/50 mb-4" />
                    <p className="text-sm md:text-base text-gray-300 italic mb-6 leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                    <img 
                      src={t.avatar} 
                      alt={t.author} 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-primary object-cover"
                    />
                    <div>
                      <p className="font-bold text-white text-sm md:text-base">{t.author}</p>
                      <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* MOBILE/TABLET CONTROLS - Positioned below cards. Visible up to XL screens. */}
            <div className="flex xl:hidden items-center justify-center gap-6 mt-6">
                <button 
                    onClick={() => scroll('left')}
                    className="p-3 rounded-full bg-brand-dark border border-white/10 text-white hover:bg-brand-primary hover:border-brand-primary transition-colors shadow-lg active:scale-95"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                    {TESTIMONIALS.map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    ))}
                </div>

                <button 
                    onClick={() => scroll('right')}
                    className="p-3 rounded-full bg-brand-dark border border-white/10 text-white hover:bg-brand-primary hover:border-brand-primary transition-colors shadow-lg active:scale-95"
                    aria-label="Próximo"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;