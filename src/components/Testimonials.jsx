import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Eu não me canso de elogiar o seu trabalho. É muito mais que uma 'simples' cesta de café da manhã. É cuidado com cada detalhe, é capricho, é amor pelo que faz.",
    author: "Renata Laranjeira"
  },
  {
    quote: "Não tenho como agradecer por essa surpresa, sem palavras. Em cada detalhe senti o carinho, quanto capricho!",
    author: "Cliente Satisfeita"
  },
  {
    quote: "Foi a melhor opção em disparado! Confio de olhos fechados! Apresentei o trabalho, pessoal confiou em mim e todos amaram cada detalhe!",
    author: "Jô"
  },
  {
    quote: "Você dá o seu toque pessoal, o que diferencia de outras cestas comuns que são vendidas por aí. Tudo lindo e de muito bom gosto.",
    author: "Judite"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática deslizando a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="depoimentos" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif text-[#4A3B32]">Palavras de Carinho</h2>
        <p className="text-[#6B5B52] font-light">O que nossos clientes dizem sobre nossas experiências[cite: 1].</p>
      </div>

      <div className="relative max-w-3xl mx-auto overflow-hidden px-4">
        {/* Trilha de Deslizamento para 1 depoimento por vez */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div 
              key={idx} 
              className="w-full shrink-0 bg-white p-8 sm:p-14 rounded-3xl border border-[#EBE3DC] shadow-sm text-center"
            >
              <div className="flex justify-center text-[#D4A373] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-lg sm:text-xl text-[#6B5B52] italic font-light leading-relaxed min-h-[90px] flex items-center justify-center">
                "{item.quote}"
              </p>

              <div className="mt-6 font-serif font-bold text-[#5C4033] text-base tracking-wide">
                — {item.author}
              </div>
            </div>
          ))}
        </div>

        {/* Setas de Navegação */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#F4EFEA] text-[#5C4033] p-3 rounded-full border border-[#EBE3DC] shadow-sm transition-colors cursor-pointer z-10"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#F4EFEA] text-[#5C4033] p-3 rounded-full border border-[#EBE3DC] shadow-sm transition-colors cursor-pointer z-10"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicadores (Bolinhas) */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentIndex === idx ? 'bg-[#D4A373] w-6' : 'bg-gray-300'}`}
            aria-label={`Ir para depoimento ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}