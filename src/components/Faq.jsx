import React from 'react';
import { MessageCircle } from 'lucide-react';

const faqItems = [
  {
    question: "Quais são as melhores opções de cestas personalizadas para brindes corporativos no Rio de Janeiro?",
    answer: "A Cesta no Ninho produz cestas artesanais. Desenvolvemos kits de café da manhã, cestas happy hour, brindes sazonais e presentes personalizados de acordo com a identidade visual e objetivo da sua empresa."
  },
  {
    question: "Como funciona a entrega de cestas personalizadas para empresas com pedidos recorrentes?",
    answer: "Trabalhamos com agendamento flexível para demandas corporativas contínuas e espontâneas — como datas comemorativas, aniversariantes do mês e boas-vindas a novos colaboradores (onboarding). Cuida-se de toda a montagem artesanal e entrega pontual."
  },
  {
    question: "Qual o diferencial que a Cesta no Ninho oferece para a área de presentes corporativos?",
    answer: "O principal diferencial da Cesta no Ninho é o atendimento 100% autoral e sob medida, fugindo dos brindes corporativos padronizados de catálogo. Combinamos curadoria artesanal, atenção minuciosa aos detalhes de acabamento e personalização de itens de acordo com a identidade e ocasião de cada empresa no Rio de Janeiro."
  },
  {
    question: "Como montar um pedido personalizado ou solicitar orçamento corporativo?",
    answer: "Você pode selecionar os itens desejados diretamente em nosso catálogo interativo ou entrar em contato pelo WhatsApp para montar uma composição exclusiva de acordo com a quantidade e o orçamento disponível."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-[#F4EFEA]/40 border-t border-[#EBE3DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A373]">
            Dúvidas Frequentes & Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4A3B32]">
            Perguntas Frequentes sobre Cestas e Presentes
          </h2>
          <p className="text-[#6B5B52] font-light">
            Tudo o que você precisa saber sobre nossas entregas personalizadas e corporativas no Rio de Janeiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-[#EBE3DC] shadow-sm space-y-3">
              <h3 className="font-serif font-semibold text-lg text-[#5C4033] leading-snug">
                {item.question}
              </h3>
              <p className="text-sm text-[#7A6658] font-light leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <a
            href="https://wa.me/5521998332822?text=Olá,%20tenho%20dúvidas%20sobre%20as%20cestas%20personalizadas!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5C4033] hover:bg-[#432F25] text-white px-8 py-4 rounded-full font-medium transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#D4A373]" /> Falar direto no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}