import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { ASSET_IMAGES } from '../data/basketsData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'A Essência', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' }, // <- Adicionado à barra de navegação
    { label: 'Coleções', href: '#colecoes' },
    { label: 'Corporativo', href: '#corporativo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center gap-2">
            <img 
              src={ASSET_IMAGES.logoSimples} 
              alt="Cesta no Ninho" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-[#5C4033]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#E29578] transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/5521998332822"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5C4033] hover:bg-[#432F25] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4" />
            Faça seu pedido
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#5C4033] focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#EFECE6] px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#5C4033] font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5521998332822"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#5C4033] text-white w-full py-3 rounded-full text-sm font-medium mt-4"
          >
            <MessageCircle className="w-4 h-4" />
            Faça seu pedido
          </a>
        </div>
      )}
    </header>
  );
}