import brindeSazional from '../assets/brinde-sazional.png';
import caneca from '../assets/caneca.png';
import capemisaBone from '../assets/capemisa-bone.png';
import capemisaTote from '../assets/capemisa-tote.png';
import cestaHappyHour from '../assets/cesta-happy-hour.png';
import cestaBarista from '../assets/cesta-barista.png';
import cestaRomantica from '../assets/cesta-romantica.png';
import cestaSazional from '../assets/cesta-sazional.png';
import copo from '../assets/copo.png';
import espumante from '../assets/espumante.png';
import fundoPano from '../assets/fundo-pano.png';
import logoParede from '../assets/logo-parede.png';
import logoSimples from '../assets/logo-simples.png';
import logo from '../assets/logo.png';
import totes from '../assets/totes.png';

export const ASSET_IMAGES = {
  brindeSazional,
  caneca,
  capemisaBone,
  capemisaTote,
  cestaHappyHour,
  cestaBarista,
  cestaRomantica,
  cestaSazional,
  copo,
  espumante,
  fundoPano,
  logoParede,
  logoSimples,
  logo,
  totes,
};

export const BASKETS_DATA = [
  {
    id: 'romantica',
    title: 'Cestas Românticas',
    description: 'Surpreenda quem você ama com uma seleção sofisticada e romântica.',
    image: ASSET_IMAGES.cestaRomantica,
    defaultItems: [
      { name: 'Pão baguette', price: 15 },
      { name: 'Champagne', price: 120 },
      { name: 'Chocolates Lindt', price: 35 },
      { name: 'Pasta de atum', price: 20 },
      { name: 'Queijo Brie', price: 45 },
      { name: 'Cartão personalizado', price: 5 }
    ]
  },
  {
    id: 'happy-hour',
    title: 'Cestas Happy Hour',
    description: 'Perfeito para celebrar momentos descontraídos com ótimos petiscos.',
    image: ASSET_IMAGES.cestaHappyHour,
    defaultItems: [
      { name: 'Queijos prato e mussarela', price: 30 },
      { name: 'Azeitonas sem caroço', price: 15 },
      { name: 'Presunto', price: 20 },
      { name: 'Salaminho', price: 25 },
      { name: 'Grissini', price: 12 },
      { name: 'Cerveja long neck', price: 10 }
    ]
  },
  {
    id: 'barista',
    title: 'Cesta Barista',
    description: 'Uma experiência aromática e aconchegante para os amantes de café.',
    image: ASSET_IMAGES.cestaBarista,
    defaultItems: [
      { name: 'Prensa francesa', price: 80 },
      { name: 'Caneca personalizada', price: 35 },
      { name: 'Café em pó artesanal', price: 40 },
      { name: 'Chocolate 50% 1891', price: 22 },
      { name: 'Caixa temática', price: 25 }
    ]
  },
  {
    id: 'sazonais',
    title: 'Cestas Sazonais',
    description: 'Edições limitadas preparadas especialmente para datas comemorativas.',
    image: ASSET_IMAGES.cestaSazional,
    defaultItems: [
      { name: 'Seleção especial da época', price: 90 },
      { name: 'Embalagem temática exclusiva', price: 35 },
      { name: 'Cartão com mensagem especial', price: 5 }
    ]
  },
  {
    id: 'brindes',
    title: 'Brindes Sazonais',
    description: 'Opções delicadas e marcantes para presentear com elegância.',
    image: ASSET_IMAGES.brindeSazional,
    defaultItems: [
      { name: 'Caneca personalizada', price: 35 },
      { name: 'Embalagem de presente', price: 15 }
    ]
  }
];

export const BASKETS = BASKETS_DATA;
export default BASKETS_DATA;

export const TESTIMONIALS_DATA = [
  {
    quote: "Eu não me canso de elogiar o seu trabalho. É muito mais que uma 'simples' cesta de café da manhã. É cuidado com cada detalhe, é capricho, é amor pelo que faz.",
    author: "Renata Laranjeira"
  },
  {
    quote: "Não tenho como agradecer por essa surpresa, sem palavras. Em cada detalhe senti o carinho, quanto capricho!",
    author: "Cliente Satisfeita"
  },
  {
    quote: "Foi a melhor opção em disparado! Confio de olhos fechados! Apresentei o trabalho, pessoal confiou em mim e todos amaram cada detalhe!",
    author: "Jô"
  },
  {
    quote: "Você dá o seu toque pessoal, o que diferencia de outras cestas comuns que são vendidas por aí. Tudo lindo e de muito bom gosto.",
    author: "Judite"
  }
];