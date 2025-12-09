import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentView: 'home' | 'privacy' | 'terms';
  onViewChange: (view: 'home' | 'privacy' | 'terms') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Tripulação', href: '#sobre' },
    { name: 'Missões', href: '#servicos' },
    { name: 'Tecnologia', href: '#vantagens' },
    { name: 'Plano de Voo', href: '#processo' },
    { name: 'Combustível', href: '#planos' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentView !== 'home') {
      onViewChange('home');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const id = targetId.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const id = targetId.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
        onViewChange('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3 border-b border-brand-primary/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <Logo className="h-8 md:h-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-colors relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-brand-primary transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-t border-brand-primary/20 shadow-xl h-screen">
          <div className="flex flex-col py-8 px-8 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-xl font-bold uppercase tracking-widest hover:text-brand-primary border-b border-white/5 pb-2 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;