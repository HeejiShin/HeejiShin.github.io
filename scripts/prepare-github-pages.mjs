import { copyFile, mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputRoot = path.resolve('dist/client');
const routes = [
  { source: 'koica', destination: 'koica' },
  { source: 'koica-2', destination: 'koica-2' },
  { source: 'yuwill', destination: '유윌' },
  { source: 'tita', destination: '티타' },
  { source: 'wonhana', destination: '원하나' },
  { source: 'turtling', destination: '터틀링' },
  { source: 'gruu', destination: '그루' },
  { source: 'library', destination: '국중도' },
];

await Promise.all(
  routes.map(async ({ source, destination }) => {
    const routeDirectory = path.join(outputRoot, destination);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(
      path.join(outputRoot, `${source}.html`),
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
  '유윌/index.html',
  '티타/index.html',
  '원하나/index.html',
  '터틀링/index.html',
  '그루/index.html',
  '국중도/index.html',
  'heeji-social-preview-v3.png',
];

await Promise.all(requiredFiles.map((file) => stat(path.join(outputRoot, file))));

console.log('GitHub Pages artifact is ready.');
