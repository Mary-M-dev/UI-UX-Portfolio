import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DTMA case study images to optimize
const imagesToOptimize = [
  // Screenshots folder
  { path: 'public/Screenshots/22.png', maxWidth: 1200 },
  { path: 'public/Screenshots/2.png', maxWidth: 1400 },
  { path: 'public/Screenshots/3.png', maxWidth: 1400 },
  { path: 'public/Screenshots/Screenshot 2026-06-05 115131.png', maxWidth: 800 },
  { path: 'public/Screenshots/Screenshot 2026-06-05 115533.png', maxWidth: 800 },
  { path: 'public/Screenshots/Screenshot 2026-06-05 115845.png', maxWidth: 800 },
  { path: 'public/Screenshots/Screenshot 2026-06-05 115948.png', maxWidth: 800 },
  { path: 'public/Screenshots/Screenshot 2026-06-05 120153.png', maxWidth: 800 },
  { path: 'public/Screenshots/Screenshot 2026-06-05 120911.png', maxWidth: 800 },
  { path: 'public/Screenshots/Screenshot 2026-06-05 121028.png', maxWidth: 800 },
  
  // AILearn folder
  { path: 'public/AILearn/Screenshot 2026-06-05 122517.png', maxWidth: 800 },
  { path: 'public/AILearn/Screenshot 2026-06-05 122559.png', maxWidth: 800 },
  
  // Cetification folder (DTMA certification screens)
  { path: 'public/Cetification/Screenshot 2026-06-05 123446.png', maxWidth: 800 },
  { path: 'public/Cetification/Screenshot 2026-06-05 123539.png', maxWidth: 800 },
  
  // dis folder
  { path: 'public/dis/Screenshot 2026-06-05 143933.png', maxWidth: 800 },
  { path: 'public/dis/Screenshot 2026-06-05 144119.png', maxWidth: 800 },
  
  // en folder
  { path: 'public/en/Screenshot 2026-06-05 141110.png', maxWidth: 800 },
  { path: 'public/en/Screenshot 2026-06-05 143737.png', maxWidth: 800 },
  { path: 'public/en/Screenshot 2026-06-05 143825.png', maxWidth: 800 },
  { path: 'public/en/Screenshot 2026-06-05 144516.png', maxWidth: 800 },
  
  // ff folder (DTMA screens)
  { path: 'public/ff/20.png', maxWidth: 800 },
  { path: 'public/ff/21.png', maxWidth: 800 },
  { path: 'public/ff/22.png', maxWidth: 800 },
  { path: 'public/ff/23.png', maxWidth: 800 },
  { path: 'public/ff/24.png', maxWidth: 800 },
  { path: 'public/ff/25.png', maxWidth: 800 },
  { path: 'public/ff/26.png', maxWidth: 800 },
  { path: 'public/ff/27.png', maxWidth: 800 },
  { path: 'public/ff/28.png', maxWidth: 800 },
  
  // au folder (DTMA screens)
  { path: 'public/au/au.png', maxWidth: 800 },
  { path: 'public/au/au1.png', maxWidth: 800 },
  { path: 'public/au/au2.png', maxWidth: 800 },
  { path: 'public/au/au3.png', maxWidth: 800 },
  
  // DS folder
  { path: 'public/DS/Screenshot 2026-06-12 152544.png', maxWidth: 800 },
];

async function optimizeImage(imagePath, maxWidth) {
  try {
    const fullPath = path.join(__dirname, imagePath);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${imagePath}`);
      return;
    }

    // Get original file size
    const originalStats = fs.statSync(fullPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    // Create backup
    const backupPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.original.$1');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
    }

    // Get image metadata
    const metadata = await sharp(fullPath).metadata();

    // Optimize image
    await sharp(fullPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({ 
        quality: 85,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(fullPath + '.tmp');

    // Replace original with optimized
    fs.renameSync(fullPath + '.tmp', fullPath);

    // Get new file size
    const newStats = fs.statSync(fullPath);
    const newSizeKB = (newStats.size / 1024).toFixed(2);
    const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`✅ ${path.basename(imagePath)}`);
    console.log(`   ${originalSizeKB} KB → ${newSizeKB} KB (${savings}% reduction)`);
    console.log(`   Original dimensions: ${metadata.width}x${metadata.height}`);
    console.log('');

  } catch (error) {
    console.error(`❌ Error optimizing ${imagePath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting DTMA Image Optimization...\n');
  console.log('📦 Original images are backed up with .original extension\n');
  
  for (const image of imagesToOptimize) {
    await optimizeImage(image.path, image.maxWidth);
  }
  
  console.log('✨ Optimization complete!\n');
  console.log('💡 Tip: If you want to revert, delete the optimized files and rename .original files');
}

optimizeAllImages();
