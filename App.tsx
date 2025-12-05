import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');

  return (
    <div className="min-h-screen font-sans bg-brand-dark selection:bg-brand-primary selection:text-white flex flex-col">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <About />
            <Services />
            <Advantages />
            <Testimonials />
            <Process />
            <Pricing />
            <FAQ />
            <Contact />
          </>
        ) : (
          <PrivacyPolicy />
        )}
      </main>

      <Footer onViewChange={setCurrentView} />
    </div>
  );
};

export default App;