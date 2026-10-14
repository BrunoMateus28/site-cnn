import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ImageGallery from './components/ImageGallery'; // Novo componente de galeria
import BasketCard from './components/BasketCard';
import Corporate from './components/Corporate';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { BASKETS } from './data/basketsData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C221E] font-sans selection:bg-[#E29578] selection:text-white">
      <Header />
      <Hero />
      <About />

      {/* Galeria de Fotos Rotativa */}
      <ImageGallery />

      <section id="colecoes" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4A3B32]">Nossas Coleções</h2>
          <p className="text-[#6B5B52] font-light">
            Clique nos itens abaixo para customizar sua cesta em tempo real, veja o valor estimado e envie o pedido diretamente via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BASKETS.map((basket) => (
            <BasketCard key={basket.id} basket={basket} />
          ))}
        </div>
      </section>

      <Corporate />
      <Testimonials />
      <Footer />
    </div>
  );
}