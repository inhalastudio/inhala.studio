
import React from 'react';

const mainServices = [
  {
    name: "Primeros Pasos",
    price: "17 €",
    description: "Tu primer paso hacia un Instagram que atrae.",
    ideal: "Ideal para quienes quieren empezar a construir un Instagram alineado con su propósito.",
    includes: [
      "Checklist de pasos básicos",
      "2 ebooks bonus: venta auténtica",
      "Victoria rápida: qué cambiar"
    ],
    benefit: "Obtienes claridad y dirección inmediata sin sentirte perdida.",
    cta: "Lo quiero",
    style: "bg-white border-2 border-[#5de0e5]/30 shadow-xl shadow-[#50b2b6]/5"
  },
  {
    name: "Auditoría y Plan",
    price: "297 €",
    description: "Claridad y dirección estratégica sin reorganizar todo tu perfil.",
    ideal: "Ideal para quienes quieren mejorar su conversión sin un cambio total de estructura.",
    includes: [
      "Auditoría completa de Instagram",
      "Plan estratégico de 4-6 semanas",
      "Mini guía de branding y voz",
      "Checklist de acciones prácticas"
    ],
    benefit: "Obtienes claridad, enfoque y primeros resultados.",
    cta: "Quiero claridad",
    style: "bg-[#f0fcfc] border-2 border-[#5de0e5]/50 shadow-xl shadow-[#50b2b6]/10"
  },
  {
    name: "Inhala Reset",
    price: "777 €",
    description: "Claridad, posicionamiento y transformación profunda.",
    ideal: "La base para que tu negocio deje de depender de tu energía constante.",
    popular: true,
    includes: [
      "Revisión profunda de IG",
      "Identidad visual consciente",
      "Bio optimizada",
      "Mini landing de servicios",
      "5 piezas de contenido listas",
      "Formato done with you"
    ],
    benefit: "Tu Instagram sostiene tu negocio en lugar de agotarte.",
    cta: "Quiero esto",
    style: "bg-[#1e4b4d] text-white shadow-2xl shadow-[#1e4b4d]/30 scale-105"
  },
  {
    name: "Inhala Growth",
    price: "1.111 €",
    description: "Sistema de captación consciente sin depender de tu presencia constante.",
    ideal: "Ideal para quienes quieren crecer de manera sostenible.",
    includes: [
      "Estrategia avanzada de conversión",
      "Sistema de captación IG → email",
      "Automatizaciones básicas",
      "Optimización del recorrido alumna",
      "Acompañamiento personalizado"
    ],
    benefit: "Libera tu tiempo emocional y multiplica tus ventas.",
    cta: "Transforma tu negocio",
    style: "bg-white border-2 border-[#50b2b6] shadow-2xl shadow-[#50b2b6]/20"
  }
];

const miniServices = [
  {
    name: "Landing Page Estratégica",
    price: "197 €",
    desc: "Convierte visitantes en clientes con una página persuasiva.",
    includes: "Landing lista + secciones beneficios + CTA + Formulario integrado."
  },
  {
    name: "Configuración Calendly",
    price: "147 €",
    desc: "Automatiza tus reservas y libera tiempo de gestión.",
    includes: "Integración Calendly + Emails automáticos + Ajustes disponibilidad."
  },
  {
    name: "Mini-Web One-Page",
    price: "297 €",
    desc: "Tu negocio online listo para mostrar al mundo profesionalmente.",
    includes: "Página simple bio/servicios/contacto + Diseño coherente."
  },
  {
    name: "Lead Magnet + Auto",
    price: "197 €",
    desc: "Captación de leads sin esfuerzo constante.",
    includes: "Diseño Lead Magnet + Sistema entrega email + Integración web."
  }
];

const Services: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34648805231&text=%C2%A1%20Hola%20!%20Quiero%20empezar%20a%20mejorar%20mi%20Instagram,%20%C2%BFc%C3%B3mo%20empezamos?";

  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h4 className="text-xs font-bold text-[#50b2b6] uppercase tracking-[0.4em] mb-4">SERVICIOS</h4>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1e4b4d] mb-6 font-serif italic">Tu camino hacia ventas conscientes</h2>
          <p className="text-[#4b6a6c] max-w-2xl mx-auto leading-relaxed text-xl font-light">
            Elige el nivel de acompañamiento que necesitas. Cada paso te acerca a un sistema de ventas alineado con tus valores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {mainServices.map((service, idx) => (
            <div key={idx} className={`relative flex flex-col p-12 rounded-[60px] transition-all duration-500 ${service.style} ${service.popular ? 'z-10' : 'hover:shadow-2xl'}`}>
              {service.popular && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#5de0e5] text-[#1e4b4d] text-xs font-bold uppercase tracking-[0.3em] px-10 py-3 rounded-full shadow-2xl border border-white/20">
                  Más Popular
                </span>
              )}
              
              <div className="mb-10">
                <h3 className={`text-4xl font-bold mb-3 font-serif ${service.popular ? 'text-white' : 'text-[#1e4b4d]'}`}>{service.name}</h3>
                <div className={`text-6xl font-bold mb-6 ${service.popular ? 'text-[#5de0e5]' : 'text-[#50b2b6]'}`}>{service.price}</div>
                <p className={`text-xl font-medium italic leading-relaxed ${service.popular ? 'text-white/80' : 'text-[#4b6a6c]'}`}>{service.description}</p>
              </div>
              
              <div className="flex-grow">
                <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-8 ${service.popular ? 'text-[#5de0e5]' : 'text-[#50b2b6]'}`}>¿Qué incluye?</h4>
                <ul className="space-y-6 mb-12">
                  {service.includes.map((inc, i) => (
                    <li key={i} className={`text-lg flex items-start gap-4 ${service.popular ? 'text-white/90' : 'text-[#2d5b5d]'}`}>
                      <span className={`font-bold mt-1 ${service.popular ? 'text-[#5de0e5]' : 'text-[#50b2b6]'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <p className={`text-base mb-10 font-medium italic border-t py-6 ${service.popular ? 'text-white/60 border-white/10' : 'text-[#50b2b6] border-primary/10'}`}>{service.benefit}</p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-6 rounded-full font-bold transition-all text-sm uppercase tracking-widest shadow-xl ${service.popular ? 'bg-[#5de0e5] text-[#1e4b4d] hover:scale-105 shadow-[#5de0e5]/30' : 'bg-[#1e4b4d] text-white hover:bg-stone-800'}`}
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f0fcfc] rounded-[70px] p-12 md:p-24 border border-[#5de0e5]/30 shadow-inner">
            <div className="text-center mb-20">
                <span className="text-[#50b2b6] font-bold text-sm uppercase tracking-widest mb-4 inline-block">Soluciones específicas</span>
                <h3 className="text-5xl md:text-6xl font-bold text-[#1e4b4d] mb-6 font-serif italic leading-tight">Mini-Servicios</h3>
                <p className="text-[#4b6a6c] max-w-2xl mx-auto font-light leading-relaxed text-xl">Soluciones puntuales que mejoran tu presencia y ventas sin complicaciones.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                {miniServices.map((mini, i) => (
                    <div key={i} className="p-12 rounded-[45px] bg-white border border-transparent hover:border-[#5de0e5] transition-all duration-500 shadow-lg hover:shadow-2xl group flex flex-col items-start">
                        <div className="flex justify-between w-full items-start mb-8">
                          <h4 className="font-bold text-3xl text-[#1e4b4d] font-serif group-hover:text-[#50b2b6] transition-colors leading-tight">{mini.name}</h4>
                          <div className="text-3xl font-bold text-[#50b2b6]">{mini.price}</div>
                        </div>
                        <p className="text-lg text-[#4b6a6c] mb-10 leading-relaxed font-normal">{mini.desc}</p>
                        <div className="text-sm text-[#2d5b5d] mb-10 bg-[#f4fbfc] p-8 rounded-3xl italic w-full border border-[#5de0e5]/20">
                           {mini.includes}
                        </div>
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-[#50b2b6] border-b-2 border-[#5de0e5]/40 hover:border-[#50b2b6] pb-1 uppercase tracking-[0.2em] transition-all mt-auto"
                        >
                          Saber más
                        </a>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-[#50b2b6] to-[#5de0e5] p-1.5 rounded-[50px] shadow-2xl shadow-[#50b2b6]/20">
            <div className="bg-white p-14 rounded-[48px] flex flex-col md:flex-row items-center gap-12">
                <div className="flex-grow text-center md:text-left">
                    <h3 className="text-4xl font-bold text-[#1e4b4d] font-serif italic mb-3">Inhala Care</h3>
                    <p className="text-lg text-[#4b6a6c] mb-6 font-light">Soporte estratégico continuo para evolucionar sin estrés.</p>
                    <div className="text-5xl font-bold text-[#1e4b4d]">333 €<span className="text-lg font-medium text-[#50b2b6] ml-3 italic">/ mes</span></div>
                </div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-16 py-6 bg-[#1e4b4d] text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest text-center"
                >
                    Mantén el ritmo
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
