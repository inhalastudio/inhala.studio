
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#e0f2f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-20">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                    <img 
                      src="logo.png" 
                      alt="Inhala Logo" 
                      className="h-12 w-auto object-contain" 
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tighter text-[#1e4b4d] leading-tight font-serif">inhala</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#50b2b6] font-semibold leading-none">marketing consciente</span>
                </div>
            </div>
            <p className="text-[#4b6a6c] max-w-sm text-sm leading-relaxed font-light">
              Marketing consciente para negocios de bienestar que quieren conseguir clientes online sin perder su autenticidad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-[10px] uppercase tracking-[0.15em] font-bold">
            <div className="flex flex-col gap-5">
              <h5 className="text-[#1e4b4d] border-b border-[#5de0e5]/30 pb-2">Navegación</h5>
              <a href="#inicio" className="text-[#4b6a6c] hover:text-primary transition-colors">Inicio</a>
              <a href="#servicios" className="text-[#4b6a6c] hover:text-primary transition-colors">Servicios</a>
              <a href="#contacto" className="text-[#4b6a6c] hover:text-primary transition-colors">Contacto</a>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-[#1e4b4d] border-b border-[#5de0e5]/30 pb-2">Legal</h5>
              <a href="#" className="text-[#4b6a6c] hover:text-primary transition-colors">Privacidad</a>
              <a href="#" className="text-[#4b6a6c] hover:text-primary transition-colors">Cookies</a>
              <a href="#" className="text-[#4b6a6c] hover:text-primary transition-colors">Legal</a>
            </div>
            <div className="hidden md:flex flex-col gap-5">
              <h5 className="text-[#1e4b4d] border-b border-[#5de0e5]/30 pb-2">Síguenos</h5>
              <a href="#" className="text-[#4b6a6c] hover:text-primary transition-colors font-bold">Instagram</a>
              <a href="#" className="text-[#4b6a6c] hover:text-primary transition-colors font-bold">Email</a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-[#e0f2f3] flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-widest text-[#4b6a6c]/60 font-bold">
          <p>© 2026 Inhala. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="font-serif italic text-sm text-[#50b2b6]">Hecho con presencia y amor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
