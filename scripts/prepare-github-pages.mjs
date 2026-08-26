import { copyFile, mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputRoot = path.resolve('dist/client');
const routes = ['koica', 'koica-2'];

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = path.join(outputRoot, route);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(
      path.join(outputRoot, `${route}.html`),
      path.join(routeDirectory, 'index.html'),
    );
  }),
);

await writeFile(path.join(outputRoot, '.nojekyll'), '');

const requiredFiles = [
  'index.html',
  '404.html',
  'koica/index.html',
  'koica-2/index.html',
  'heeji-social-preview-v2.png',
];

await Promise.all(requiredFiles.map((file) => stat(path.join(outputRoot, file))));

console.log('GitHub Pages artifact is ready.');
