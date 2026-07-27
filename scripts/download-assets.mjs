/**
 * Download all assets from organicslk.com to public/
 * Run: node scripts/download-assets.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const BASE = "https://www.organicslk.com";
const CDN = "https://organicslk.sgp1.cdn.digitaloceanspaces.com";

const ASSETS = {
  // Static local assets
  local: [
    { url: `${BASE}/assets/images/logo.svg`, dest: "images/logo.svg" },
    { url: `${BASE}/assets/images/favicon.png`, dest: "seo/favicon.png" },
    { url: `${BASE}/assets/images/favicon.svg`, dest: "seo/favicon.svg" },
    { url: `${BASE}/assets/images/hero-video-still.webp`, dest: "images/hero-video-still.webp" },
    { url: `${BASE}/assets/images/organicLogoHero.png`, dest: "images/organicLogoHero.png" },
    { url: `${BASE}/assets/images/amantha.png`, dest: "images/amantha.png" },
    { url: `${BASE}/assets/images/amantha2.png`, dest: "images/amantha2.png" },
    // Hero video
    { url: `${BASE}/assets/videos/hero-light-flow.mp4`, dest: "videos/hero-light-flow.mp4" },
  ],
  // Brand logos from CDN
  brands: Array.from({ length: 36 }, (_, i) => {
    const num = i + 1;
    const suffix = num === 12 || num === 31 || num === 34 ? `-2` : "";
    return [
      { url: `${CDN}/brands/brand${num}${suffix}.webp`, dest: `images/brands/brand${num}${suffix}.webp` },
      { url: `${CDN}/brands/brand${num}.webp`, dest: `images/brands/brand${num}.webp` },
    ];
  }).flat(),
  // Gallery thumbnails
  gallery: Array.from({ length: 12 }, (_, i) => ({
    url: `${CDN}/gallery/thumbnail${i + 1}.webp`,
    dest: `images/gallery/thumbnail${i + 1}.webp`,
  })),
  // Gallery videos
  galleryVideos: (() => {
    const specific = [
      { url: `${CDN}/upalis-reel-fixed.mp4`, dest: "videos/gallery/upalis-reel-fixed.mp4" },
      { url: `${CDN}/gallery-videos/sarigamaCS-casestudy.mp4`, dest: "videos/gallery/sarigamaCS-casestudy.mp4" },
      { url: `${CDN}/gallery-videos/sarigama1.mp4`, dest: "videos/gallery/sarigama1.mp4" },
      { url: `${CDN}/gallery-videos/mezo1.mp4`, dest: "videos/gallery/mezo1.mp4" },
      { url: `${CDN}/gallery-videos/sarigama2.mp4`, dest: "videos/gallery/sarigama2.mp4" },
      { url: `${CDN}/gallery-videos/mezo2.mp4`, dest: "videos/gallery/mezo2.mp4" },
      { url: `${CDN}/gallery-videos/sarigama3.mp4`, dest: "videos/gallery/sarigama3.mp4" },
      { url: `${CDN}/gallery-videos/mezo3.mp4`, dest: "videos/gallery/mezo3.mp4" },
      { url: `${CDN}/gallery-videos/mezo4.mp4`, dest: "videos/gallery/mezo4.mp4" },
    ];
    const numbered = Array.from({ length: 12 }, (_, i) => ({
      url: `${CDN}/gallery-videos/video${i + 1}.mp4`,
      dest: `videos/gallery/video${i + 1}.mp4`,
    }));
    return [...specific, ...numbered];
  })(),
};

async function downloadFile(url, destPath) {
  const fullPath = join(PUBLIC, destPath);
  const dir = dirname(fullPath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  if (existsSync(fullPath)) {
    return { status: "skip", dest: destPath };
  }
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AssetDownloader/1.0)" },
    });
    if (!res.ok) {
      return { status: "error", dest: destPath, error: `HTTP ${res.status}` };
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(fullPath, buffer);
    return { status: "ok", dest: destPath, size: buffer.length };
  } catch (err) {
    return { status: "error", dest: destPath, error: err.message };
  }
}

async function batchDownload(items, batchSize = 4) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map((item) => downloadFile(item.url, item.dest))
    );
    results.push(...batchResults);
    process.stdout.write(
      `  Downloaded ${Math.min(i + batchSize, items.length)}/${items.length}\r`
    );
  }
  return results;
}

async function main() {
  console.log("📦 Downloading assets for organicslk.com clone...\n");

  const allItems = [
    ...ASSETS.local,
    ...ASSETS.brands,
    ...ASSETS.gallery,
    ...ASSETS.galleryVideos,
  ];

  // Deduplicate by dest path
  const seen = new Set();
  const unique = allItems.filter((item) => {
    if (seen.has(item.dest)) return false;
    seen.add(item.dest);
    return true;
  });

  console.log(`Total unique assets: ${unique.length}`);
  console.log(`  Local assets: ${ASSETS.local.length}`);
  console.log(`  Brand logos: ${ASSETS.brands.length}`);
  console.log(`  Gallery thumbnails: ${ASSETS.gallery.length}`);
  console.log(`  Gallery videos: ${ASSETS.galleryVideos.length}\n`);

  const results = await batchDownload(unique, 4);

  const ok = results.filter((r) => r.status === "ok").length;
  const skipped = results.filter((r) => r.status === "skip").length;
  const errors = results.filter((r) => r.status === "error");

  console.log(`\n✅ Done: ${ok} downloaded, ${skipped} skipped, ${errors.length} errors`);
  if (errors.length > 0) {
    console.log("\n❌ Errors:");
    errors.forEach((e) => console.log(`  ${e.dest}: ${e.error}`));
  }
}

main().catch(console.error);
