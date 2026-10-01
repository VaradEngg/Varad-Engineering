const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

function createIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(count, 4); // count

  let currentOffset = 6 + (16 * count);
  const entries = [];
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    entries.push(entry);
    currentOffset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function buildAllLogosAndIcons() {
  const root = path.resolve(__dirname, '..');
  const publicVarad = path.join(root, 'public', 'images', 'varad');
  const appDir = path.join(root, 'app');
  const publicDir = path.join(root, 'public');

  const srcLogo = path.join(publicVarad, 'new-logo-src.jpg');
  const srcFavicon = path.join(publicVarad, 'new-favicon-src.png');

  console.log('Building assets from:');
  console.log('  Logo:', srcLogo);
  console.log('  Favicon:', srcFavicon);

  // 1. Master logo.png (1024x1024 square with new logo centered)
  const logoMeta = await sharp(srcLogo).metadata();
  const maxDim = Math.max(logoMeta.width, logoMeta.height);
  const padX = Math.round((maxDim - logoMeta.width) / 2);
  const padY = Math.round((maxDim - logoMeta.height) / 2);

  // Background color of logo is rgb(1, 127, 160)
  const masterLogo = await sharp(srcLogo)
    .extend({
      top: padY,
      bottom: maxDim - logoMeta.height - padY,
      left: padX,
      right: maxDim - logoMeta.width - padX,
      background: { r: 1, g: 127, b: 160 }
    })
    .resize(1024, 1024)
    .png()
    .toBuffer();

  await sharp(masterLogo).toFile(path.join(publicVarad, 'logo.png'));
  console.log('✓ Saved public/images/varad/logo.png (1024x1024)');

  // 2. High-res Circular Badge for emblem & icons
  // Emblem center is at cx=502, cy=479 in 1024x980
  const badgeSize = 880;
  const squareCrop = await sharp(srcLogo)
    .extract({
      left: Math.round(502 - badgeSize / 2),
      top: Math.round(479 - badgeSize / 2),
      width: badgeSize,
      height: badgeSize
    })
    .toBuffer();

  const circleMask = Buffer.from(
    `<svg width="${badgeSize}" height="${badgeSize}"><circle cx="${badgeSize/2}" cy="${badgeSize/2}" r="${badgeSize/2 - 2}" fill="#fff" /></svg>`
  );

  const circularBadge = await sharp(squareCrop)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp(circularBadge).resize(512, 512).toFile(path.join(publicVarad, 'logo-mark.png'));
  console.log('✓ Saved public/images/varad/logo-mark.png (512x512)');

  await sharp(circularBadge).resize(512, 512).toFile(path.join(publicVarad, 'logo-mark-white.png'));
  console.log('✓ Saved public/images/varad/logo-mark-white.png (512x512)');

  // 3. Horizontal Lockup for Header (logo-horizontal.png)
  const badgeH = 240;
  const badgeRes = await sharp(circularBadge).resize(badgeH, badgeH).png().toBuffer();

  const textW = 660;
  const textH = 240;
  const gap = 36;
  const canvasW = badgeH + gap + textW;
  const canvasH = 240;

  // Header typography (deep navy for both VARAD and ENGINEERING for maximum readability)
  const svgLight = Buffer.from(`
    <svg width="${textW}" height="${textH}" viewBox="0 0 ${textW} ${textH}" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="105" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Arial Black', sans-serif" font-weight="900" font-size="86" fill="#092d49" letter-spacing="2">VARAD</text>
      <text x="2" y="172" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Arial Black', sans-serif" font-weight="800" font-size="46" fill="#092d49" letter-spacing="8">ENGINEERING</text>
    </svg>
  `);
  const textLightPng = await sharp(svgLight).png().toBuffer();

  const horizontalPng = await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  }).composite([
    { input: badgeRes, top: 0, left: 0 },
    { input: textLightPng, top: 0, left: badgeH + gap }
  ]).png().toBuffer();

  await sharp(horizontalPng).toFile(path.join(publicVarad, 'logo-horizontal.png'));
  console.log('✓ Saved public/images/varad/logo-horizontal.png', `${canvasW}x${canvasH}`);

  // 4. Horizontal Lockup for Dark Footer (logo-horizontal-white.png)
  // Footer typography: Pure crisp white for both VARAD and bold visible ENGINEERING
  const svgDark = Buffer.from(`
    <svg width="${textW}" height="${textH}" viewBox="0 0 ${textW} ${textH}" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="105" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Arial Black', sans-serif" font-weight="900" font-size="86" fill="#ffffff" letter-spacing="2">VARAD</text>
      <text x="2" y="172" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Arial Black', sans-serif" font-weight="800" font-size="46" fill="#ffffff" letter-spacing="8">ENGINEERING</text>
    </svg>
  `);
  const textDarkPng = await sharp(svgDark).png().toBuffer();

  const horizontalWhitePng = await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  }).composite([
    { input: badgeRes, top: 0, left: 0 },
    { input: textDarkPng, top: 0, left: badgeH + gap }
  ]).png().toBuffer();

  await sharp(horizontalWhitePng).toFile(path.join(publicVarad, 'logo-horizontal-white.png'));
  console.log('✓ Saved public/images/varad/logo-horizontal-white.png', `${canvasW}x${canvasH}`);

  // 5. Favicon and App Icons
  // app/icon.png (32x32) - use user provided 32x32 directly
  const fav32Buffer = fs.readFileSync(srcFavicon);
  fs.writeFileSync(path.join(appDir, 'icon.png'), fav32Buffer);
  console.log('✓ Saved app/icon.png (32x32 from attachment)');

  // app/favicon.ico (multi-size: 16x16, 32x32, 48x48)
  const ico16 = await sharp(srcFavicon).resize(16, 16).png().toBuffer();
  const ico32 = fav32Buffer;
  const ico48 = await sharp(circularBadge).resize(48, 48).png().toBuffer();
  const icoData = createIco([ico16, ico32, ico48], [16, 32, 48]);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoData);
  console.log('✓ Saved app/favicon.ico (16, 32, 48 sizes)');

  // app/apple-icon.png (180x180)
  await sharp(circularBadge).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));
  console.log('✓ Saved app/apple-icon.png (180x180)');

  // public/icon-192.png (192x192)
  await sharp(circularBadge).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Saved public/icon-192.png (192x192)');

  // public/icon-512.png (512x512)
  await sharp(circularBadge).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Saved public/icon-512.png (512x512)');

  console.log('\nAll logos and favicons successfully built and updated!');
}

buildAllLogosAndIcons().catch(console.error);
