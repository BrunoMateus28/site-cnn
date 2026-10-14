import React from 'react';

const pillars = [
  { title: 'Qualidade', desc: 'Seleção rigorosa de cada item que compõe nossos kits.' },
  { title: 'Excelência', desc: 'Acabamento impecável em cada laço, caixa e arranjo.' },
  { title: 'Compromisso', desc: 'Pontualidade e dedicação total para entregar sorrisos.' },
  { title: 'Exclusividade', desc: 'Designs autorais e personalizados para cada ocasião.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#F4EFEA]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-serif text-[#4A3B32]">A Essência</h2>
        <p className="text-lg text-[#6B5B52] leading-relaxed max-w-3xl mx-auto font-light">
          Na Cesta no Ninho, acreditamos que presentear é uma forma de demonstrar carinho, celebrar momentos e criar memórias. Somos criadoras, artesãs, e pensamos em cestas e presentes que unem beleza, afeto e sofisticação, sempre com cuidado e atenção aos detalhes para criar experiências que transformam.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white p-6 rounded-2xl shadow-sm border border-[#EBE3DC] space-y-2 text-left">
              <h3 className="font-serif font-bold text-lg text-[#5C4033]">{pillar.title}</h3>
              <p className="text-sm text-[#7A6658] font-light leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}