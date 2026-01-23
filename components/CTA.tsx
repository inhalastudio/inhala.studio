
import React from 'react';

const CTA: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34648805231&text=%C2%A1%20Hola%20!%20Quiero%20empezar%20a%20mejorar%20mi%20Instagram,%20%C2%BFc%C3%B3mo%20empezamos?";

  return (
    <div className="py-24 bg-[#fdfdfd] overflow-hidden relative border-t border-[#5de0e5]/20">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5de0e5]/10 rounded-full -mr-40 -mt-40 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#50b2b6]/5 rounded-full -ml-40 -mb-40 blur-3xl opacity-50" />
      
      <div className="max-w-4xl mx-auto px-4 text-center text-[#1e4b4d] relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic font-serif">"Vender sin forzarte"</h2>
        <h3 className="text-2xl md:text-3xl font-medium mb-12 text-[#2d5b5d]">
          ¿Lista para transformar tu Instagram y tu negocio?
        </h3>
        <p className="text-lg mb-12 text-[#4b6a6c] max-w-xl mx-auto font-light tracking-wide">
          Da el primer paso hacia un marketing que se siente natural, profesional y alineado con tus valores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 bg-[#50b2b6] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#45a1a5] hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Empiezo hoy
          </a>
          <a href="#servicios" className="px-12 py-5 bg-white border border-[#50b2b6]/20 text-[#1e4b4d] rounded-full font-bold text-lg hover:bg-[#f0fcfc] transition-all duration-300 inline-block text-center shadow-sm">
            Ver servicios
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
