import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const serverDir = path.resolve('dist-server');

const { render } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
);

const indexPath = path.join(dist, 'index.html');
const template = fs.readFileSync(indexPath, 'utf-8');
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
  throw new Error('Placeholder <div id="root"></div> não encontrado no dist/index.html');
}

fs.writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
fs.rmSync(serverDir, { recursive: true, force: true });

console.log('✔ Página inicial pré-renderizada em dist/index.html');