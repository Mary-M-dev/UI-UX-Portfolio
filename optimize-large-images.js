import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// More aggressive optimization for remaining large images
const imagesToOptimize = [
  { path: 'public/ff/21.png', maxWidth: 600, quality: 80 },
  { path: 'public/ff/22.png', maxWidth: 600, quality: 80 },
  { path: 'public/ff/23.png', maxWidth: 600, quality: 80 },
  { path: 'public/ff/24.png', maxWidth: 600, quality: 80 },
  { path: 'public/ff/25.png', maxWidth: 600, quality: 75 },
  { path: 'public/ff/26.png', maxWidth: 600, quality: 75 },
  { path: 'public/ff/27.png', maxWidth: 600, quality: 75 },
  { path: 'public/Cetification/Screenshot 2026-06-05 123446.png', maxWidth: 700, quality: 80 },
];

async function optimizeImage(imagePath, maxWidth, quality) {
  try {
    const fullPath = path.join(__dirname, imagePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${imagePath}`);
      return;
    }

    const originalStats = fs.statSync(fullPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    await sharp(fullPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({ 
        quality: quality,
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true // Use palette-based PNG for smaller size
      })
      .toFile(fullPath + '.tmp');

    fs.renameSync(fullPath + '.tmp', fullPath);

    const newStats = fs.statSync(fullPath);
    const newSizeKB = (newStats.size / 1024).toFixed(2);
    const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`✅ ${path.basename(imagePath)}`);
    console.log(`   ${originalSizeKB} KB → ${newSizeKB} KB (${savings}% reduction)`);
    console.log('');

  } catch (error) {
    console.error(`❌ Error optimizing ${imagePath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🔧 Running aggressive optimization on large images...\n');
  
  for (const image of imagesToOptimize) {
    await optimizeImage(image.path, image.maxWidth, image.quality);
  }
  
  console.log('✨ Aggressive optimization complete!\n');
}

optimizeAllImages();
