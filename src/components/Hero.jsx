import React from 'react';
import { ChevronRight, MessageCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#5f6971]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#F4EFEA]/10 border border-[#F4EFEA]/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#F4EFEA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" /> Presentes Exclusivos Sob Encomenda
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white leading-tight">
            Seu lugar de carinho.
          </h1>
          <p className="text-lg sm:text-xl text-[#F4EFEA]/90 font-light leading-relaxed">
            Cestas e presentes que unem beleza, afeto e sofisticação. Para você. Para quem você ama. Para sua empresa.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#colecoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#c29161] text-white px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Explorar Coleções <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5521998332822"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#F4EFEA]/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#D4A373]" /> Peça agora no WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#F4EFEA]/20 text-xs font-medium uppercase tracking-wider text-[#F4EFEA]/80">
            <div>✨ Feito à mão</div>
            <div>🎁 Presentes Exclusivos</div>
            <div>📝 Sob Encomenda</div>
            <div>🤍 Atendimento Personalizado</div>
          </div>
        </div>
      </div>
    </section>
  );
}