import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function compressImage(imagePath) {
  try {
    const fullPath = path.join(__dirname, imagePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${imagePath}`);
      return;
    }

    const originalStats = fs.statSync(fullPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    // Very aggressive optimization
    await sharp(fullPath)
      .resize(600, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({ 
        quality: 70,
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true
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

async function compressAll() {
  console.log('🔥 Running aggressive compression on course discovery images...\n');
  
  await compressImage('public/dis/Screenshot 2026-06-05 143933.png');
  await compressImage('public/dis/Screenshot 2026-06-05 144119.png');
  
  console.log('✨ Done!\n');
}

compressAll();
