import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/basketsData';

const galleryItems = [
  { src: ASSET_IMAGES.cestaRomantica, title: 'Cestas Românticas' },
  { src: ASSET_IMAGES.cestaHappyHour, title: 'Cestas Happy Hour' },
  { src: ASSET_IMAGES.caneca, title: 'Cesta Barista' },
  { src: ASSET_IMAGES.cestaSazional, title: 'Cestas Sazonais' },
  { src: ASSET_IMAGES.brindeSazional, title: 'Brindes Sazonais' },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática deslizando a cada 4.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

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

        {/* Trilha de Deslizamento Contínuo */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {/* Duplicamos os itens para garantir o preenchimento fluido da trilha de 3 em 3 */}
            {[...galleryItems, ...galleryItems, ...galleryItems].map((item, idx) => (
              <div 
                key={idx} 
                className="w-full md:w-[calc(33.333%-16px)] shrink-0 relative h-[380px] rounded-3xl overflow-hidden shadow-sm border border-[#EBE3DC] group"
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