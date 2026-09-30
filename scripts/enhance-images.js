const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, '../public/images/varad');
const origDir = path.join(__dirname, '../public/images/varad-original');

async function enhanceAll() {
  console.log('Starting image clarity enhancement...');

  const files = fs.readdirSync(origDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    // Skip the generated logo derivatives that were carefully crafted
    if (file.startsWith('logo-horizontal') || file.startsWith('logo-mark') || file === 'logo.png' || file === 'logo-stacked.png') {
      continue;
    }

    const inputPath = path.join(origDir, file);
    const outputPath = path.join(dir, file);
    const metadata = await sharp(inputPath).metadata();

    let pipeline = sharp(inputPath);

    const isLogo = [
      'bhavani.png', 'fairfield.png', 'flash.png', 'igw.png', 'mahindra.png',
      'manasi.png', 'pfg.png', 'sona.png', 'spicer.png', 'trans-auto.png',
      'edicon.jpg', 'evolvente.jpg', 'jagadamba.jpg', 'kalyani-forge.jpg',
      'kalyani.jpg', 'kores.jpg', 'radicon.jpg', 'rsb.jpg', 'varroc.jpg', 'wanfeng.jpg'
    ].includes(file);

    if (isLogo) {
      // For client logos: upscale small ones to at least 450px so they look crisp on 2x retina
      const targetW = Math.max(metadata.width * 2, 450);
      pipeline = pipeline.resize({
        width: Math.min(targetW, 800),
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: false
      }).sharpen({ sigma: 1.0, m1: 1.0, m2: 0.5 });

      if (ext === '.png') {
        await pipeline.png({ compressionLevel: 9, quality: 100 }).toFile(outputPath);
      } else {
        await pipeline.jpeg({ quality: 95, mozjpeg: true }).toFile(outputPath);
      }
      console.log(`Enhanced logo: ${file} (${metadata.width}x${metadata.height} -> upscaled & sharpened)`);
      continue;
    }

    // For photo assets:
    // Determine target width
    let targetWidth = metadata.width;
    if (file === 'hero-bg.jpg') {
      targetWidth = 1920; // Full HD hero
    } else if (metadata.width < 1000) {
      targetWidth = Math.min(metadata.width * 2.5, 1400); // upscale low-res photos
    } else if (metadata.width < 1400) {
      targetWidth = Math.round(metadata.width * 1.3);
    }

    // Apply high-fidelity Lanczos3 resize + unsharp mask filter
    if (targetWidth > metadata.width) {
      pipeline = pipeline.resize({
        width: Math.round(targetWidth),
        kernel: sharp.kernel.lanczos3,
      });
    }

    // Unsharp mask for crisp mechanical edges
    pipeline = pipeline.sharpen({
      sigma: 1.2,
      m1: 1.2,
      m2: 0.5
    });

    if (ext === '.png') {
      await pipeline.png({ compressionLevel: 9, quality: 100 }).toFile(outputPath);
    } else {
      await pipeline.jpeg({ quality: 95, mozjpeg: true }).toFile(outputPath);
    }

    const newMeta = await sharp(outputPath).metadata();
    console.log(`Enhanced photo: ${file} (${metadata.width}x${metadata.height} -> ${newMeta.width}x${newMeta.height})`);
  }

  console.log('All image enhancements completed successfully!');
}

enhanceAll().catch(err => {
  console.error('Enhancement error:', err);
  process.exit(1);
});
