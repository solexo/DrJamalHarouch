import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  const images = [
    { src: 'public/logo.webp', width: 40, height: 40 },
    { src: 'public/scanner.webp', width: 364, height: 273 },
    { src: 'public/sonosite-hfl50x-b_orig.webp', width: 364, height: 275 }
  ];

  for (const img of images) {
    const input = path.resolve(img.src);
    const output = input; // overwrite
    await sharp(input)
      .resize(img.width, img.height, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(output + '.tmp');
    fs.renameSync(output + '.tmp', output);
    console.log(`Optimized ${img.src}`);
  }
}

optimizeImages().catch(console.error);