import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    root,
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const appHtml = render();

    const indexPath = path.resolve(root, 'dist/index.html');
    if (!fs.existsSync(indexPath)) {
      throw new Error(`dist/index.html not found at ${indexPath}`);
    }

    let template = fs.readFileSync(indexPath, 'utf-8');

    if (!template.includes('<div id="root"></div>')) {
      // Also check if there's any whitespace inside <div id="root">
      template = template.replace(/<div id="root">\s*<\/div>/, '<div id="root"></div>');
    }

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    fs.writeFileSync(indexPath, html, 'utf-8');
    console.log('✓ Successfully pre-rendered dist/index.html with SSR content.');
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Error during prerender:', err);
  process.exit(1);
});
