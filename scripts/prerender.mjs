import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/prerender.js';
const html = await readFile('dist/index.html', 'utf8');
if (!html.includes('<div id="root"></div>'))
  throw new Error('Missing root template');
await writeFile(
  'dist/index.html',
  html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`),
);
console.log(
  'Prerendered portfolio HTML for search engines and fast first paint.',
);
