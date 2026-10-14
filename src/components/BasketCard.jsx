import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsAppOrder } from '../utils/whatsapp';

export default function BasketCard({ basket }) {
  const [selectedItems, setSelectedItems] = useState(() => {
    const initial = {};
    basket.defaultItems.forEach((item) => {
      initial[item.name] = true;
    });
    return initial;
  });

  const toggleItem = (itemName) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const calculateTotal = () => {
    return basket.defaultItems.reduce((acc, item) => {
      return selectedItems[item.name] ? acc + item.price : acc;
    }, 0);
  };

  const total = calculateTotal();

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#EBE3DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="relative h-64 overflow-hidden">
          <img
            src={basket.image}
            alt={basket.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
            <h3 className="text-2xl font-serif text-white font-medium">{basket.title}</h3>
          </div>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-[#6B5B52] font-light">{basket.description}</p>

          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#8C6D53] uppercase block">
              Personalize os itens (Marque/Desmarque):
            </span>
            <div className="space-y-2.5 bg-[#FDFBF7] p-4 rounded-2xl border border-[#F0ECE6]">
              {basket.defaultItems.map((item, idx) => {
                const isChecked = selectedItems[item.name] ?? true;

                return (
                  <label key={`${basket.id}-${idx}`} className="flex items-center justify-between cursor-pointer group py-1">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleItem(item.name)}
                        className="w-4 h-4 accent-[#D4A373] rounded cursor-pointer"
                      />
                      <span className={`text-sm transition-colors ${isChecked ? 'text-[#2C221E] font-medium' : 'text-gray-400 line-through'}`}>
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-[#8C6D53] font-medium">+ R$ {item.price.toFixed(2)}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#F0ECE6] mt-6">
        <div>
          <span className="text-xs text-[#8C6D53] block uppercase tracking-wider">Valor Estimado</span>
          <span className="text-2xl font-serif font-bold text-[#5C4033]">R$ {total.toFixed(2)}</span>
        </div>
        <button
          onClick={() => openWhatsAppOrder(basket, selectedItems)}
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow"
        >
          <MessageCircle className="w-4 h-4" />
          Montar Pedido
        </button>
      </div>
    </div>
  );
}