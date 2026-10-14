import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#F4EFEA] border-t border-[#EBE3DC] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#E3DBD3]">
        <div className="space-y-4">
          <h3 className="text-xl font-serif font-bold text-[#5C4033]">Cesta no Ninho</h3>
          <p className="text-sm text-[#7A6658] font-light leading-relaxed">
            Presentes personalizados, cestas de café da manhã e corporativas. Cuidado e atenção aos detalhes em cada entrega.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif font-bold text-[#5C4033]">Contato & Localização</h4>
          <ul className="space-y-3 text-sm text-[#7A6658]">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#D4A373] shrink-0" /> Tijuca, Rio de Janeiro, RJ, Brasil
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#D4A373] shrink-0" /> +55 (21) 99833-2822
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#D4A373] shrink-0" /> cestanoninho@gmail.com
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif font-bold text-[#5C4033]">Redes Sociais</h4>
          <p className="text-sm text-[#7A6658] font-light">Acompanhe nossas novidades e bastidores diários.</p>
          <a
            href="https://www.instagram.com/cestanoninho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5C4033] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#432F25] transition-colors"
          >
            Siga-nos no Instagram
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C6D53]">
        <p>© Cesta no Ninho. Todos os direitos reservados.</p>
        <a href="https://wa.me/5521998332822" target="_blank" rel="noopener noreferrer" className="mt-4 sm:mt-0 hover:underline">
          Fale Conosco via WhatsApp
        </a>
      </div>
    </footer>
  );
}