const sharp = require('e:/projects-rohan/Varad Engineering workshop/Varad Engineering/node_modules/sharp');
const path = require('path');
const fs = require('fs');

async function buildLogos() {
  const publicVarad = 'e:/projects-rohan/Varad Engineering workshop/Varad Engineering/public/images/varad';
  const src = path.join(publicVarad, 'logo.png');

  // Convert pure white background to alpha transparent
  function whiteToAlpha(buffer, w, h) {
    const out = Buffer.alloc(w * h * 4);
    for (let i = 0; i < w * h; i++) {
      const s = i * 3, d = i * 4;
      const r = buffer[s], g = buffer[s+1], b = buffer[s+2];
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      if (brightness >= 253) {
        out[d] = 0; out[d+1] = 0; out[d+2] = 0; out[d+3] = 0;
      } else {
        const alpha = Math.min(255, Math.round((255 - brightness) * (255 / (255 - 25))));
        const aNorm = alpha / 255;
        out[d] = Math.max(0, Math.min(255, Math.round((r - (1 - aNorm) * 255) / aNorm)));
        out[d+1] = Math.max(0, Math.min(255, Math.round((g - (1 - aNorm) * 255) / aNorm)));
        out[d+2] = Math.max(0, Math.min(255, Math.round((b - (1 - aNorm) * 255) / aNorm)));
        out[d+3] = alpha;
      }
    }
    return out;
  }

  // 1. Emblem
  const emblemRaw = await sharp(src)
    .extract({ left: 360, top: 175, width: 255, height: 395 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const emblemTrans = whiteToAlpha(emblemRaw.data, emblemRaw.info.width, emblemRaw.info.height);
  const emblemPng = await sharp(emblemTrans, { raw: { width: emblemRaw.info.width, height: emblemRaw.info.height, channels: 4 } })
    .png()
    .toBuffer();

  await sharp(emblemPng).toFile(path.join(publicVarad, 'logo-mark.png'));
  console.log('Saved logo-mark.png');

  // 2. Text (VARAD and — ENGINEERING —)
  const textRaw = await sharp(src)
    .extract({ left: 130, top: 595, width: 765, height: 195 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const textTrans = whiteToAlpha(textRaw.data, textRaw.info.width, textRaw.info.height);
  const textPng = await sharp(textTrans, { raw: { width: textRaw.info.width, height: textRaw.info.height, channels: 4 } })
    .png()
    .toBuffer();

  // 3. Compose Horizontal Lockup
  // Let emblem be height 240, text be height 150
  const embH = 240;
  const embRes = await sharp(emblemPng).resize({ height: embH }).png().toBuffer();
  const embMeta = await sharp(embRes).metadata();

  const textH = 150;
  const textRes = await sharp(textPng).resize({ height: textH }).png().toBuffer();
  const textMeta = await sharp(textRes).metadata();

  const gap = 36;
  const canvasW = embMeta.width + gap + textMeta.width;
  const canvasH = Math.max(embMeta.height, textMeta.height);
  const embTop = Math.round((canvasH - embMeta.height) / 2);
  const textTop = Math.round((canvasH - textMeta.height) / 2);

  const horizontalPng = await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  }).composite([
    { input: embRes, top: embTop, left: 0 },
    { input: textRes, top: textTop, left: embMeta.width + gap }
  ]).png().toBuffer();

  await sharp(horizontalPng).toFile(path.join(publicVarad, 'logo-horizontal.png'));
  console.log('Saved logo-horizontal.png', { width: canvasW, height: canvasH });

  // 4. White/Light version for dark backgrounds
  const rawH = await sharp(horizontalPng).raw().toBuffer({ resolveWithObject: true });
  const outWhite = Buffer.alloc(rawH.data.length);
  for (let i = 0; i < rawH.info.width * rawH.info.height; i++) {
    const idx = i * 4;
    const r = rawH.data[idx], g = rawH.data[idx+1], b = rawH.data[idx+2], a = rawH.data[idx+3];
    if (a === 0) {
      outWhite[idx] = 0; outWhite[idx+1] = 0; outWhite[idx+2] = 0; outWhite[idx+3] = 0;
    } else if (r < 75 && g < 75 && b < 85) {
      // Dark gear / brand text -> white
      outWhite[idx] = 255; outWhite[idx+1] = 255; outWhite[idx+2] = 255; outWhite[idx+3] = a;
    } else {
      // Metallic broach -> bright silver
      outWhite[idx] = Math.min(255, Math.round(r * 1.8 + 60));
      outWhite[idx+1] = Math.min(255, Math.round(g * 1.8 + 60));
      outWhite[idx+2] = Math.min(255, Math.round(b * 1.8 + 60));
      outWhite[idx+3] = a;
    }
  }

  await sharp(outWhite, { raw: rawH.info }).png().toFile(path.join(publicVarad, 'logo-horizontal-white.png'));
  console.log('Saved logo-horizontal-white.png');

  // 5. White emblem mark
  const rawMark = await sharp(emblemPng).raw().toBuffer({ resolveWithObject: true });
  const outMarkWhite = Buffer.alloc(rawMark.data.length);
  for (let i = 0; i < rawMark.info.width * rawMark.info.height; i++) {
    const idx = i * 4;
    const r = rawMark.data[idx], g = rawMark.data[idx+1], b = rawMark.data[idx+2], a = rawMark.data[idx+3];
    if (a === 0) {
      outMarkWhite[idx] = 0; outMarkWhite[idx+1] = 0; outMarkWhite[idx+2] = 0; outMarkWhite[idx+3] = 0;
    } else if (r < 75 && g < 75 && b < 85) {
      outMarkWhite[idx] = 255; outMarkWhite[idx+1] = 255; outMarkWhite[idx+2] = 255; outMarkWhite[idx+3] = a;
    } else {
      outMarkWhite[idx] = Math.min(255, Math.round(r * 1.8 + 60));
      outMarkWhite[idx+1] = Math.min(255, Math.round(g * 1.8 + 60));
      outMarkWhite[idx+2] = Math.min(255, Math.round(b * 1.8 + 60));
      outMarkWhite[idx+3] = a;
    }
  }
  await sharp(outMarkWhite, { raw: rawMark.info }).png().toFile(path.join(publicVarad, 'logo-mark-white.png'));
  console.log('Saved logo-mark-white.png');
}

buildLogos().catch(console.error);
