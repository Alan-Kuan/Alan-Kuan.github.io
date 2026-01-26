import fs from 'node:fs';
import path from 'node:path';

import { encode } from 'blurhash';
import sharp from 'sharp';

const img_pattern = /!\[.*?\]\((https?:\/\/[^\s)]+)(?:\s+".*?")?\)/g;
const frontmatter_pattern = /^---\r?\n([\s\S]*?)\r?\n---/;
const banner_url_pattern = /banner:\s*\r?\n\s+url:\s*(?:'([^']+)'|"([^"]+)"|([^\s]+))/;

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('No file is provided');
    return;
  }

  for (const file_path of args) {
    if (!fs.existsSync(file_path)) {
      console.warn(`File not found: ${file_path}`);
      continue;
    }
    if (!file_path.startsWith('src/content')) continue;
    if (!file_path.endsWith('.mdx')) continue;

    const collection_name = file_path.split('/')[2];
    const blurhash_dir = `src/content/blurhashes/${collection_name}`;

    await processFile(file_path, blurhash_dir);
  }
}

async function processFile(file_path: string, blurhash_dir: string) {
  console.log(`[blurhash] Processing ${file_path}`)

  const file_name = path.basename(file_path, path.extname(file_path));
  const cache_path = path.join(blurhash_dir, `${file_name}.json`);

  let existing_cache: Record<string, string> = {};
  const new_cache: Record<string, string> = {};

  const post_content = fs.readFileSync(file_path, 'utf-8');
  const img_urls = extractImageUrls(post_content);

  // load blurhash cache if exists
  if (fs.existsSync(cache_path)) {
    existing_cache = JSON.parse(fs.readFileSync(cache_path, 'utf-8'));
  }

  // update blurhash cache
  for (const img_url of img_urls) {
    new_cache[img_url] = existing_cache[img_url] ?? await calculateBlurhash(img_url);
  }

  // update cache file only if there're changes
  if (!keysAreAllSame(existing_cache, new_cache)) {
    if (!fs.existsSync(blurhash_dir)) {
      fs.mkdirSync(blurhash_dir, { recursive: true });
    }
    fs.writeFileSync(cache_path, JSON.stringify(new_cache, null, 2));
    console.log(`[blurhash] Updated blurhash cache for ${file_path}`);
  } else {
    console.log(`[blurhash] No update for ${file_path}`);
  }
}

function keysAreAllSame(a: Record<string, string>, b: Record<string, string>) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  return Object.keys(a).every(key => Object.hasOwn(b, key));
}

function extractImageUrls(content: string) {
  const urls = new Set<string>();

  // Extract banner
  const frontmatter_match = content.match(frontmatter_pattern);
  if (frontmatter_match) {
    const frontmatter = frontmatter_match[1];
    const banner_url_match = frontmatter.match(banner_url_pattern);
    if (banner_url_match) {
      urls.add(banner_url_match[1] || banner_url_match[2] || banner_url_match[3]);
    }
  }

  // Extract content images
  const body = frontmatter_match ? content.slice(frontmatter_match[0].length) : content;
  for (const match of body.matchAll(img_pattern)) {
    urls.add(match[1]);
  }

  return Array.from(urls);
}

async function calculateBlurhash(url: string) {
  console.log(`[blurhash] Fetching ${url}`);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);

    const arr_buf = await res.arrayBuffer();
    const buf = Buffer.from(arr_buf);

    const { data, info } = await sharp(buf)
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: 'inside' })
      .toBuffer({ resolveWithObject: true });

    return encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);
  } catch (err) {
    console.error(`[blurhash] Error processing ${url}:`, err);
    return undefined;
  }
}

main().catch(console.error);