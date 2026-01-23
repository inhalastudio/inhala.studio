
import React from 'react';

const targets = [
  {
    title: "Profesoras de yoga y pilates",
    desc: "Que aman lo que hacen pero sienten que el marketing no va con ellas y buscan autenticidad.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Coaches de crecimiento personal",
    desc: "Que quieren atraer clientes ideales sin sentirse invasivas, construyendo confianza real.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Emprendedoras del bienestar",
    desc: "Que buscan un sistema de ventas alineado con sus valores y que respete su energía vital.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 1.343 3 3s-1.343 3-3 3m0-6c-1.657 0-3 1.343-3 3s1.343 3 3 3m-9-3h18" />
      </svg>
    )
  }
];

const TargetAudience: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-[#f4fbfc] border-y border-[#5de0e5]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16 max-w-2xl">
          <h4 className="text-sm font-bold text-[#50b2b6] uppercase tracking-[0.4em] mb-4">PARA TI</h4>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1e4b4d] mb-6 font-serif leading-tight italic">¿Es esto para mí?</h2>
          <p className="text-xl text-[#2d5b5d] leading-relaxed font-light">
            Si tienes un negocio de bienestar y quieres <span className="text-primary font-medium">conseguir clientes online</span> sin marketing agresivo, estás en el lugar correcto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {targets.map((target, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-12 rounded-[50px] shadow-[0_20px_60px_-15px_rgba(80,178,182,0.2)] border-2 border-[#5de0e5]/40 flex flex-col items-start text-left hover:border-[#50b2b6] hover:bg-[#f0fcfc] hover:-translate-y-2 transition-all duration-500 group ${idx === 2 ? 'md:col-span-2 md:max-w-[calc(50%-1.5rem)]' : ''}`}
            >
              <div className="w-20 h-20 mb-8 rounded-[25px] bg-[#e3f4f5] border-2 border-[#5de0e5]/50 flex items-center justify-center group-hover:bg-white transition-colors">
                {target.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-[#1e4b4d] mb-6 font-serif leading-tight">{target.title}</h3>
              <p className="text-[#4b6a6c] leading-relaxed font-normal text-lg">{target.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
