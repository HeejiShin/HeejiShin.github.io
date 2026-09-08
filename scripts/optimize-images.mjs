import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceRoot = path.resolve('source-assets');
const outputRoot = path.resolve('public/assets/optimized');

const caseStudies = [
  { name: 'case-yuwill', height: 11740 },
  { name: 'case-tita', height: 12140 },
  { name: 'case-wonhana', height: 10800 },
  { name: 'case-turtling', height: 9640 },
  { name: 'case-gruu', height: 11360 },
  { name: 'case-library', height: 4320 },
];

const projectImages = [
  'project-yuwill',
  'project-tita',
  'project-wonhana',
  'project-turtling',
  'project-gruu',
  'project-library',
  'project-koica',
];

const koicaSlides = Array.from({ length: 6 }, (_, index) =>
  `koica-${String(index + 1).padStart(2, '0')}`,
);

const webpOptions = {
  quality: 90,
  alphaQuality: 100,
  effort: 6,
  smartSubsample: true,
  preset: 'text',
};

async function createCaseStudySegments({ name, height }) {
  const input = path.join(sourceRoot, `${name}.png`);
  const sectionCount = Math.ceil(height / 1080);
  const outputDirectory = path.join(outputRoot, name);
  await mkdir(outputDirectory, { recursive: true });

  for (const width of [1280, 1920, 3840]) {
    const resized = sharp(input).resize({ width });
    const buffer = await resized.png().toBuffer();
    const resizedHeight = (await sharp(buffer).metadata()).height;

    for (let index = 0; index < sectionCount; index += 1) {
      const logicalTop = index * 1080;
      const logicalBottom = Math.min((index + 1) * 1080, height);
      const top = Math.round((logicalTop / height) * resizedHeight);
      const bottom = index === sectionCount - 1
        ? resizedHeight
        : Math.round((logicalBottom / height) * resizedHeight);

      await sharp(buffer)
        .extract({ left: 0, top, width, height: bottom - top })
        .webp(webpOptions)
        .toFile(path.join(outputDirectory, `section-${String(index + 1).padStart(2, '0')}-${width}.webp`));
    }
  }
}

async function createResponsiveImage(name, widths) {
  const input = path.join(sourceRoot, `${name}.png`);
  const outputDirectory = path.join(outputRoot, name);
  await mkdir(outputDirectory, { recursive: true });

  await Promise.all(widths.map((width) =>
    sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp(webpOptions)
      .toFile(path.join(outputDirectory, `${name}-${width}.webp`)),
  ));
}

for (const caseStudy of caseStudies) {
  console.log(`Optimizing ${caseStudy.name}…`);
  await createCaseStudySegments(caseStudy);
}

for (const image of projectImages) {
  console.log(`Optimizing ${image}…`);
  await createResponsiveImage(image, [640, 960, 1920]);
}

for (const slide of koicaSlides) {
  console.log(`Optimizing ${slide}…`);
  await createResponsiveImage(slide, [1280, 1920, 3840]);
}

console.log('Responsive WebP assets are ready.');
