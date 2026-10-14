import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/basketsData';

const galleryItems = [
  { src: ASSET_IMAGES.cestaRomantica, title: 'Cestas Românticas' },
  { src: ASSET_IMAGES.cestaHappyHour, title: 'Cestas Happy Hour' },
  { src: ASSET_IMAGES.caneca, title: 'Cesta Barista' },
  { src: ASSET_IMAGES.cestaSazional, title: 'Cestas Sazonais' },
  { src: ASSET_IMAGES.brindeSazional, title: 'Brindes Sazonais' },
];

const N = galleryItems.length;
const GAP = 24; // gap-6 = 1.5rem = 24px
const LOOP_ITEMS = [...galleryItems, ...galleryItems, ...galleryItems];

export default function ImageGallery() {
  // Começa na cópia do meio (índice N) para poder ir para os dois lados
  const [index, setIndex] = useState(N);
  const [animate, setAnimate] = useState(true);
  const [step, setStep] = useState(0);

  const firstItemRef = useRef(null);
  const lockedRef = useRef(false);

  // Mede a largura real do card + gap (funciona no mobile e no desktop)
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
    if (lockedRef.current) return; // ignora cliques durante a animação
    lockedRef.current = true;
    setAnimate(true);
    setIndex((prev) => prev + direction);
  }, []);

  const nextSlide = useCallback(() => move(1), [move]);
  const prevSlide = useCallback(() => move(-1), [move]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Ao terminar a animação, se saiu da cópia do meio, "teletransporta"
  // para a posição equivalente na cópia do meio, sem animação.
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

  return (
    <section id="galeria" className="py-24 bg-[#F4EFEA]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#4A3B32]">Galeria de Inspirações</h2>
            <p className="text-[#6B5B52] font-light">Detalhes que encantam e transformam momentos em memórias inesquecíveis.</p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-[#F4EFEA] text-[#5C4033] p-3 rounded-full border border-[#EBE3DC] shadow-sm transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-[#F4EFEA] text-[#5C4033] p-3 rounded-full border border-[#EBE3DC] shadow-sm transition-colors cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${animate ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${index * step}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {LOOP_ITEMS.map((item, idx) => (
              <div
                key={idx}
                ref={idx === 0 ? firstItemRef : null}
                className="w-full md:w-[calc((100%-48px)/3)] shrink-0 relative h-[380px] rounded-3xl overflow-hidden shadow-sm border border-[#EBE3DC] group"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}