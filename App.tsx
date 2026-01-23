
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section id="inicio" className="scroll-mt-32">
          <Hero />
        </section>
        <section id="para-ti" className="scroll-mt-24">
          <TargetAudience />
        </section>
        <section id="retos" className="scroll-mt-24">
          <PainPoints />
        </section>
        <section id="servicios" className="bg-[#f0f9fa] scroll-mt-24">
          <Services />
        </section>
        <section id="proceso" className="bg-[#50b2b6]/5 scroll-mt-24">
          <Process />
        </section>
        <section id="testimonios" className="bg-white scroll-mt-24">
          <Testimonials />
        </section>
        <section id="contacto" className="scroll-mt-24">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
