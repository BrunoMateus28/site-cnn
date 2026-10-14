import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
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

const N = testimonials.length;
const GAP = 32; // gap-8 = 2rem = 32px
const LOOP_ITEMS = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  // Começa na cópia do meio (índice N) para poder ir para os dois lados
  const [index, setIndex] = useState(N);
  const [animate, setAnimate] = useState(true);
  const [step, setStep] = useState(0);

  const firstItemRef = useRef(null);
  const lockedRef = useRef(false);

  // Mede a largura real do card + gap
  const measure = useCallback(() => {
    if (firstItemRef.current) {
      setStep(firstItemRef.current.offsetWidth + GAP);
    }
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const move = useCallback((direction) => {
    if (lockedRef.current) return;
    lockedRef.current = true;
    setAnimate(true);
    setIndex((prev) => prev + direction);
  }, []);

  const nextSlide = useCallback(() => move(1), [move]);
  const prevSlide = useCallback(() => move(-1), [move]);

  const goTo = (target) => {
    const realTarget = N + target; // sempre na cópia do meio
    if (lockedRef.current || realTarget === index) return;
    lockedRef.current = true;
    setAnimate(true);
    setIndex(realTarget);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Ao terminar a animação, se saiu da cópia do meio, volta para a
  // posição equivalente nela, sem animação (o salto é imperceptível).
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;

    if (index >= N * 2) {
      setAnimate(false);
      setIndex(index - N);
    } else if (index < N) {
      setAnimate(false);
      setIndex(index + N);
    }
    lockedRef.current = false;
  };

  // Reativa a animação logo após o salto silencioso
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const activeDot = ((index % N) + N) % N;

  return (
    <section id="depoimentos" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif text-[#4A3B32]">Palavras de Carinho</h2>
        <p className="text-[#6B5B52] font-light">O que nossos clientes dizem sobre nossas experiências.</p>
      </div>

      {/* Janela visível: sem padding, para não vazar o card vizinho */}
      <div className="max-w-3xl mx-auto overflow-hidden">
        <div
          className={`flex gap-8 ${animate ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${index * step}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {LOOP_ITEMS.map((item, idx) => (
            <div
              key={idx}
              ref={idx === 0 ? firstItemRef : null}
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
      </div>

      {/* Controles: seta + bolinhas + seta */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="bg-white hover:bg-[#F4EFEA] text-[#5C4033] p-3 rounded-full border border-[#EBE3DC] shadow-sm transition-colors cursor-pointer"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                activeDot === idx ? 'bg-[#D4A373] w-6' : 'bg-gray-300 w-2.5'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-white hover:bg-[#F4EFEA] text-[#5C4033] p-3 rounded-full border border-[#EBE3DC] shadow-sm transition-colors cursor-pointer"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}