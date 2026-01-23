
import React from 'react';

const challenges = [
  {
    title: "Publicas contenido pero no atraes alumnas",
    desc: "Inviertes tiempo en crear contenido pero sientes que nadie te ve ni te responde.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Te abruma el marketing online",
    desc: "Sientes que tienes que estar en todas partes y no sabes por dónde empezar.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Pierdes horas gestionando el marketing",
    desc: "El tiempo que dedicas a Instagram te roba horas que podrías invertir en tus alumnas.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "No sabes convertir seguidores en clientes",
    desc: "Tienes una comunidad pero no logras que pasen de mirar a comprar.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Quieres vender sin perder tu autenticidad",
    desc: "El marketing agresivo no va contigo y buscas una forma más consciente.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "No tienes un sistema claro de ventas",
    desc: "Improvisas cada mes sin una estrategia definida que te dé resultados consistentes.",
    icon: (
      <svg className="w-8 h-8 text-[#50b2b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const PainPoints: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left mb-16">
          <h4 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">TE ENTIENDO</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e4b4d] mb-6 font-serif italic">¿Te suena familiar?</h2>
          <p className="text-[#4b6a6c] max-w-2xl leading-relaxed text-lg font-light">
            Estos son los retos más comunes que enfrentan las profesoras de bienestar cuando intentan vender online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-14">
          {challenges.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-[45px] shadow-[0_15px_45px_-15px_rgba(0,0,0,0.08)] border-2 border-[#5de0e5]/40 flex flex-col items-start gap-8 hover:border-[#50b2b6] hover:bg-[#f0fcfc] hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-[#f0fcfc] border-2 border-[#5de0e5]/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                 {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1e4b4d] mb-4 font-serif leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-[#4b6a6c] text-base leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <div className="inline-block p-1 bg-[#5de0e5]/40 rounded-full shadow-lg">
                <div className="px-12 py-5 bg-white text-[#1e4b4d] rounded-full text-xl font-bold italic font-serif border-2 border-[#5de0e5]/50 shadow-inner">
                    ¿Te identificas? Tenemos la solución.
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PainPoints;
