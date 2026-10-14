import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Corporate() {
  return (
    <section id="corporativo" className="py-20 bg-[#5C4033] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A373]">Atendimento Especializado</span>
        <h2 className="text-3xl sm:text-4xl font-serif">Presentes que fortalecem relações</h2>
        <p className="text-lg text-[#EBE3DC] font-light max-w-3xl mx-auto leading-relaxed">
          Atendemos empresas com brindes personalizados, ações de fim de ano, boas-vindas de colaboradores, datas comemorativas corporativas e eventos, sempre com o mesmo cuidado artesanal e sofisticação que dedicamos a cada um de nossos trabalhos.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.me/5521998332822?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20corporativo%20com%20a%20Cesta%20no%20Ninho."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#c29161] text-white px-8 py-4 rounded-full font-medium transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" /> Solicitar orçamento corporativo
          </a>
        </div>
      </div>
    </section>
  );
}