import { readFile, mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const manifestPath = join(root, "lib/data/image_manifest.json");

const manifestMap = {
  "01-video-conferencing.webp": { dir: "av", slug: "video-conferencing" },
  "02-background-audio.jpg": { dir: "av", slug: "background-audio" },
  "03-large-pa-line-arrays.jpg": { dir: "av", slug: "large-pa-line-arrays" },
  "04-projection.jpg": { dir: "av", slug: "projection" },
  "05-led-video-wall.jpg": { dir: "av", slug: "led-video-wall" },
  "06-commercial-tv-screens.jpg": { dir: "av", slug: "commercial-tv-screens" },
  "07-interactive-touch-screens.jpg": { dir: "av", slug: "interactive-touch-screens" },
  "08-digital-signage.jpg": { dir: "av", slug: "digital-signage" },
  "09-stage-concert-lighting.jpg": { dir: "av", slug: "stage-concert-lighting" },
  "10-web-development.jpg": { dir: "it", slug: "web-development" },
  "11-application-integration.png": { dir: "it", slug: "application-integration" },
  "12-web-services.jpg": { dir: "it", slug: "web-services" },
  "13-rest-apis.jpg": { dir: "it", slug: "rest-apis" },
  "14-work-stations.png": { dir: "interior", slug: "work-stations" },
  "15-office-table-chairs.png": { dir: "interior", slug: "office-table-chairs" },
  "16-office-cupboard-storage.jpg": { dir: "interior", slug: "cupboard-storage-racks" },
  "17-computer-study-desks.jpeg": { dir: "interior", slug: "computer-table-study-desks" },
  "18-data-center-storage-racks.jpg": { dir: "interior", slug: "data-center-storage-racks" },
  "19-customized-furniture.jpg": { dir: "interior", slug: "customized-furniture" },
  "20-acoustic-treatment.jpg": { dir: "interior", slug: "acoustic-treatment" },
  "21-soundproofing.jpg": { dir: "interior", slug: "soundproofing" },
  "22-ht-lt-installations.png": { dir: "electrical", slug: "ht-lt-installations" },
  "23-industrial-wiring.jpg": { dir: "electrical", slug: "industrial-wiring" },
  "24-electrical-design.png": { dir: "electrical", slug: "electrical-design" },
  "25-control-panels.jpg": { dir: "electrical", slug: "control-panels" },
  "26-maintenance-contracts.png": { dir: "electrical", slug: "maintenance-contracts" },
  "27-repair-services.jpg": { dir: "electrical", slug: "repair-services" },
};

/** Used only when the manifest URL is unreachable */
const fallbackUrls = {
  "08-digital-signage.jpg":
    "https://www.ledwallcentral.com/images/articles/Whats%20Next%20for%20Large%20Scale%20Digital%20Signage%20Mall.jpg",
  "15-office-table-chairs.png":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop&q=85",
  "18-data-center-storage-racks.jpg":
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop&q=85",
  "26-maintenance-contracts.png":
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=800&fit=crop&q=85",
};

async function download(url, dest) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "image/*,*/*;q=0.8",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1024) throw new Error(`File too small (${buf.length} bytes)`);
  await writeFile(dest, buf);
  return buf;
}

async function downloadWithCurl(url, dest) {
  await execFileAsync("curl", [
    "-sL",
    "-o",
    dest,
    "-H",
    "User-Agent: Mozilla/5.0",
    "-H",
    "Accept: image/*",
    url,
  ]);
  const { size } = await import("fs/promises").then((fs) => fs.stat(dest));
  if (size < 1024) throw new Error(`File too small (${size} bytes)`);
}

async function ensurePngFromJpeg(dest) {
  if (!dest.endsWith(".png")) return;
  try {
    await execFileAsync("python3", [
      "-c",
      `from PIL import Image; im=Image.open("${dest}"); im.save("${dest}", "PNG")`,
    ]);
  } catch {
    // Pillow conversion optional; keep original bytes if already PNG/JPEG
  }
}

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
let ok = 0;
let fail = 0;

for (const entry of manifest) {
  const mapping = manifestMap[entry.filename];
  if (!mapping) {
    console.error(`✗ No mapping for ${entry.filename}`);
    fail++;
    continue;
  }

  const localPath = `/images/${mapping.dir}/${entry.filename}`;
  const dest = join(publicDir, localPath);
  await mkdir(dirname(dest), { recursive: true });

  const urls = [entry.url, fallbackUrls[entry.filename]].filter(Boolean);

  let saved = false;
  for (const url of urls) {
    try {
      try {
        await download(url, dest);
      } catch {
        await downloadWithCurl(url, dest);
      }
      if (entry.filename.endsWith(".png") && fallbackUrls[entry.filename] === url) {
        await ensurePngFromJpeg(dest);
      }
      console.log(`✓ ${localPath} ← ${entry.service}${url !== entry.url ? " (fallback)" : ""}`);
      ok++;
      saved = true;
      break;
    } catch (err) {
      if (url === urls[urls.length - 1]) {
        console.error(`✗ ${entry.filename} (${entry.service}): ${err.message}`);
        fail++;
      }
    }
  }
}

console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
