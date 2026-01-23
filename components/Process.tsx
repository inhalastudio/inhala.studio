
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Analizamos",
    desc: "Revisamos tu Instagram actual y entendemos tu negocio y objetivos."
  },
  {
    num: "02",
    title: "Optimizamos",
    desc: "Mejoramos tu perfil, bio y estética para atraer a tu clienta ideal."
  },
  {
    num: "03",
    title: "Construimos",
    desc: "Creamos un sistema de conversión que transforma seguidoras en alumnas."
  },
  {
    num: "04",
    title: "Acompañamos",
    desc: "Te guiamos con ajustes mensuales para que tu sistema siga creciendo."
  }
];

const Process: React.FC = () => {
  return (
    <div className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h4 className="text-xs font-bold text-[#50b2b6] uppercase tracking-[0.4em] mb-4">PROCESO</h4>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1e4b4d] mb-6 font-serif italic">Cómo trabajamos juntas</h2>
          <p className="text-[#4b6a6c] max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Un proceso claro y calmado para transformar tu presencia digital <span className="text-[#50b2b6] font-medium">sin estrés ni agobios</span>.
          </p>
        </div>
        
        <div className="relative">
          {/* Línea decorativa sutil */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5de0e5]/30 to-transparent hidden lg:block -translate-y-12 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group text-center lg:text-left">
                <div className="bg-white p-12 rounded-[50px] border border-[#5de0e5]/20 shadow-xl shadow-[#50b2b6]/5 hover:border-[#50b2b6] transition-all duration-700 hover:-translate-y-6">
                  <div className="text-[#50b2b6] font-bold text-5xl mb-8 font-serif italic drop-shadow-sm">{step.num}</div>
                  <h3 className="text-2xl font-bold mb-5 font-serif text-[#1e4b4d]">{step.title}</h3>
                  <p className="text-[#4b6a6c] text-[13px] leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
