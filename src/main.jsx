import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);   // produção: usa o HTML já pronto
} else {
  createRoot(root).render(app); // npm run dev continua igual
}