
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3 group cursor-pointer">
          <div className="flex-shrink-0">
             <img 
                src="logo.png" 
                alt="Inhala Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
             />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#1e4b4d] leading-none font-serif">inhala</span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-[#50b2b6] font-bold">marketing consciente</span>
          </div>
        </a>
        
        <div className="hidden md:flex space-x-10 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e4b4d]">
          <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#para-ti" className="hover:text-primary transition-colors">Para ti</a>
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#contacto" className="px-6 py-2.5 bg-[#50b2b6] text-white rounded-full hover:bg-[#45a1a5] transition-all shadow-md">
            Contacto
          </a>
        </div>

        <div className="md:hidden text-[#1e4b4d]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
