
import React from 'react';

const Hero: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34648805231&text=%C2%A1%20Hola%20!%20Quiero%20empezar%20a%20mejorar%20mi%20Instagram,%20%C2%BFc%C3%B3mo%20empezamos?";

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#fdfdfd]">
      {/* Elementos decorativos suaves */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-bl from-[#f0fcfc] to-transparent opacity-60" />
      <div className="absolute -bottom-24 -left-24 -z-10 w-[500px] h-[500px] bg-[#50b2b6]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-12">
            <img 
              src="logo.png" 
              alt="Inhala Studio" 
              className="h-40 md:h-52 w-auto object-contain drop-shadow-sm" 
            />
        </div>

        <span className="inline-block px-5 py-2 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase text-[#50b2b6] border border-[#5de0e5]/40 rounded-full bg-white/50 backdrop-blur-sm">
          Marketing consciente para tu negocio
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-[#1e4b4d] mb-8 max-w-4xl leading-tight font-serif italic">
          Convierte tu presencia en ventas, <span className="font-normal text-[#50b2b6] opacity-80 underline decoration-[#5de0e5]/30 decoration-4 underline-offset-8">sin forzarte</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#4b6a6c] mb-12 max-w-2xl leading-relaxed font-light">
          Marketing para negocios de bienestar que quieren conseguir clientes online sin perder su esencia y <span className="text-[#1e4b4d] font-normal">manteniendo su autenticidad</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-4 bg-[#50b2b6] text-white rounded-full font-bold text-base shadow-xl hover:bg-[#45a1a5] hover:-translate-y-1 transition-all duration-300"
          >
            Empiezo hoy
          </a>
          <a href="#servicios" className="px-12 py-4 border border-[#50b2b6]/20 text-[#1e4b4d] bg-white rounded-full font-bold text-base hover:bg-[#f0fcfc] transition-all duration-300 shadow-sm">
            Ver servicios
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
