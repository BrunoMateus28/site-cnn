const PHONE_NUMBER = '5521998332822';

export const buildBasketMessage = (basket, selectedItems) => {
  const activeItems = basket.defaultItems.filter((item) => selectedItems[item.name]);
  const total = basket.defaultItems.reduce((sum, item) => {
    return selectedItems[item.name] ? sum + item.price : sum;
  }, 0);

  let message = `Olá! Gostaria de encomendar a *${basket.title}*:\n\n*Itens selecionados:*\n`;

  activeItems.forEach((item) => {
    message += `- ${item.name} (R$ ${item.price.toFixed(2)})\n`;
  });

  message += `\n*Valor Total Estimado:* R$ ${total.toFixed(2)}\n\nPoderia me confirmar os detalhes do pedido?`;

  return message;
};

export const openWhatsAppOrder = (basket, selectedItems) => {
  const message = buildBasketMessage(basket, selectedItems);
  const encoded = encodeURIComponent(message);

  if (typeof window !== 'undefined') {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encoded}`, '_blank');
  }
};
