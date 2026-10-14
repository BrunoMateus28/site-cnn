import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { ASSET_IMAGES } from '../data/basketsData';

export default function Footer() {
  return (
    <footer className="bg-[#5f6971] text-[#F4EFEA] pt-16 pb-12 border-t border-[#F4EFEA]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#F4EFEA]/10">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={ASSET_IMAGES.logoSimples} 
                alt="Cesta no Ninho" 
                className="w-12 h-12 rounded-full object-contain bg-white p-1 border border-[#EBE3DC]" 
              />
              <span className="font-serif text-2xl tracking-wide text-white">Cesta no Ninho</span>
            </div>
            <p className="text-sm text-[#F4EFEA]/80 font-light leading-relaxed max-w-sm">
              Presentes personalizados, cestas de café da manhã e corporativas. Cuidado e atenção aos detalhes em cada entrega.
            </p>
            <a
              href="https://wa.me/5521998332822"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#c29161] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> Fale Conosco
            </a>
          </div>

          {/* Coluna 2: Contato e Localização */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-white font-medium">Contato & Localização</h3>
            <ul className="space-y-3 text-sm text-[#F4EFEA]/80">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#D4A373] shrink-0" />
                <span>Tijuca, Rio de Janeiro, RJ, Brasil</span>
              </li>
              <li>
                <a
                  href="tel:+5521998332822"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <span>+55 (21) 99833-2822</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cestanoninho@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <span className="break-all">cestanoninho@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-white font-medium">Acompanhe</h3>
            <p className="text-sm text-[#F4EFEA]/80 font-light">
              Fique por dentro das novidades e coleções sazonais no Instagram.
            </p>
            <div>
              <a
                href="https://www.instagram.com/cestanoninho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-[#F4EFEA]/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D4A373]" /> Siga-nos no Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4EFEA]/60 font-light">
          <p>© Cesta no Ninho. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Feito com carinho para momentos inesquecíveis.</p>
        </div>
      </div>
    </footer>
  );
}