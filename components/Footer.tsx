import React from 'react';
import Logo from './Logo';
import { CONTACT_INFO } from '../constants';
import { Instagram, Globe, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: 'home' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // If we are passing handleNav from App, we assume this is only called when on Home, 
    // or we need to switch. But Footer is on both pages.
    // To simplify: Switch to home, then scroll.
    onViewChange('home');
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onViewChange('privacy');
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 flex flex-col items-start">
            <Logo className="h-8 md:h-9 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed text-left">
              Explorando novas fronteiras digitais. Transformamos ideias complexas em experiências online simples, poderosas e memoráveis.
            </p>
          </div>

           {/* Contact Column (New) */}
           <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-brand-primary">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Instagram size={16} className="text-brand-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{CONTACT_INFO.instagram}</span>
                </a>
              </li>
              <li>
                <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Globe size={16} className="text-brand-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{CONTACT_INFO.website}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Mail size={16} className="text-brand-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all">{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Phone size={16} className="text-brand-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{CONTACT_INFO.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-brand-primary">Navegação</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => scrollToSection(e, 'sobre')} 
                  className="text-sm hover:text-white transition-colors cursor-pointer block"
                >
                  A Tripulação
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => scrollToSection(e, 'servicos')} 
                  className="text-sm hover:text-white transition-colors cursor-pointer block"
                >
                  Missões
                </a>
              </li>
              <li>
                <a 
                  href="#vantagens" 
                  onClick={(e) => scrollToSection(e, 'vantagens')} 
                  className="text-sm hover:text-white transition-colors cursor-pointer block"
                >
                  Tecnologia
                </a>
              </li>
              <li>
                <a 
                  href="#processo" 
                  onClick={(e) => scrollToSection(e, 'processo')} 
                  className="text-sm hover:text-white transition-colors cursor-pointer block"
                >
                  Plano de Voo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal/Social Column */}
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-brand-primary">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="text-sm hover:text-white transition-colors block">Termos de Uso</a></li>
              <li>
                <a 
                  href="#" 
                  onClick={handlePrivacyClick}
                  className="text-sm hover:text-white transition-colors block cursor-pointer"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => scrollToSection(e, 'faq')} 
                  className="text-sm hover:text-white transition-colors cursor-pointer block"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Genns Desenvolvimento. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
             Desenvolvido na Terra 🌍
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;