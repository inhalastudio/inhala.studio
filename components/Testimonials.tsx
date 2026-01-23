
import React from 'react';

const testimonials = [
  {
    name: "Elena Garcés",
    role: "Profesora de Yoga Vinyasa",
    quote: "Gracias a Inhala Reset por fin siento que mi Instagram comunica quién soy realmente. He llenado mi próximo retiro en tiempo récord sin sentir que estaba 'vendiendo'.",
    avatar: "🧘‍♀️"
  },
  {
    name: "Marcos Sierra",
    role: "Coach de Bienestar & Mindset",
    quote: "No sabía cómo atraer clientes sin sentirme agresivo o invasivo. La estrategia de captación consciente cambió totalmente mi forma de ver el marketing digital.",
    avatar: "🌱"
  },
  {
    name: "Lucía Méndez",
    role: "Fundadora de Estudio Pilates",
    quote: "El acompañamiento personalizado es increíble. No solo mejoró mi estética visual, sino que ahora tengo un sistema automático que captura interesadas mientras doy clase.",
    avatar: "✨"
  },
  {
    name: "Sofía Rojas",
    role: "Terapeuta Holística",
    quote: "Sentía que perdía horas en redes sociales para nada. Ahora publico con intención y mis seguidoras se convierten en clientas de manera natural.",
    avatar: "🌸"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-32 relative overflow-hidden bg-white">
      {/* Decorative background circle */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4">SOCIAL PROOF</h4>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1e4b4d] mb-6 font-serif italic">Lo que dicen nuestras clientas</h2>
          <p className="text-xl text-[#4b6a6c] max-w-2xl mx-auto font-light leading-relaxed">
            Historias de transformación y marketing con alma. Negocios que crecen <span className="text-primary font-medium">respetando su esencia</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-[#f8fdfd] p-10 md:p-12 rounded-[40px] border border-[#e0f2f3] hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 flex flex-col relative group"
            >
              <div className="absolute top-8 right-10 text-6xl text-primary/10 font-serif leading-none group-hover:text-secondary/20 transition-colors">
                &ldquo;
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-secondary/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1e4b4d] leading-tight">{t.name}</h4>
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>

              <blockquote className="text-[#4b6a6c] leading-relaxed font-light italic flex-grow">
                "{t.quote}"
              </blockquote>

              <div className="mt-8 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
