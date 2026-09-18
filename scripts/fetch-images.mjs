import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

// Inline source map (mirrors lib/data/images.ts imageSources)
const imageSources = {
  "/images/hero.jpg":
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&h=1080&fit=crop&q=85",
  "/images/av/category.jpg":
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop&q=85",
  "/images/av/video-conferencing.jpg":
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=800&fit=crop&q=85",
  "/images/av/background-audio.jpg":
    "https://images.unsplash.com/photo-1724858103797-6d388eb1006a?w=1200&h=800&fit=crop&q=85",
  "/images/av/large-pa-line-arrays.jpg":
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=800&fit=crop&q=85",
  "/images/av/projection.jpg":
    "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=1200&h=800&fit=crop&q=85",
  "/images/av/led-video-wall.jpg":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=85",
  "/images/av/commercial-tv-screens.jpg":
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&h=800&fit=crop&q=85",
  "/images/av/interactive-touch-screens.jpg":
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop&q=85",
  "/images/av/digital-signage.jpg":
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=800&fit=crop&q=85",
  "/images/av/stage-concert-lighting.jpg":
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop&q=85",
  "/images/it/category.jpg":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=85",
  "/images/it/web-development.jpg":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&q=85",
  "/images/it/application-integration.jpg":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=85",
  "/images/it/web-services.jpg":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&q=85",
  "/images/it/rest-apis.jpg":
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&q=85",
  "/images/it/erp.jpg":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=85",
  "/images/interior/category.jpg":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=85",
  "/images/interior/work-stations.jpg":
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&q=85",
  "/images/interior/office-table-chairs.jpg":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop&q=85",
  "/images/interior/cupboard-storage-racks.jpg":
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&h=800&fit=crop&q=85",
  "/images/interior/computer-table-study-desks.jpg":
    "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1200&h=800&fit=crop&q=85",
  "/images/interior/data-center-storage-racks.jpg":
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop&q=85",
  "/images/interior/customized-furniture.jpg":
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop&q=85",
  "/images/interior/acoustic-treatment.jpg":
    "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=1200&h=800&fit=crop&q=85",
  "/images/interior/soundproofing.jpg":
    "https://images.unsplash.com/photo-1758336716950-370f54b7a43f?w=1200&h=800&fit=crop&q=85",
  "/images/interior/acoustic-panels.jpg":
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop&q=85",
  "/images/interior/false-ceiling-solutions.jpg":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&q=85",
  "/images/interior/acoustic-insulation.jpg":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&q=85",
  "/images/electrical/category.jpg":
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=800&fit=crop&q=85",
  "/images/electrical/ht-lt-installations.jpg":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&q=85",
  "/images/electrical/industrial-wiring.jpg":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&q=85",
  "/images/electrical/electrical-design.jpg":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=85",
  "/images/electrical/control-panels.jpg":
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop&q=85",
  "/images/electrical/maintenance-contracts.jpg":
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=800&fit=crop&q=85",
  "/images/electrical/repair-services.jpg":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&q=85",
  "/images/industries/corporate.jpg":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=85",
  "/images/industries/education.jpg":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=85",
  "/images/industries/healthcare.jpg":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=85",
  "/images/industries/hospitality.jpg":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=85",
  "/images/industries/retail.jpg":
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=85",
  "/images/industries/industrial.jpg":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=85",
  "/images/industries/government.jpg":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=85",
  "/images/industries/infrastructure.jpg":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=85",
  "/images/industries/commercial.jpg":
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&q=85",
  "/images/industries/residential.jpg":
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=85",
  "/images/projects/corporate-boardroom-av.jpg":
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=800&fit=crop&q=85",
  "/images/projects/auditorium-pa-system.jpg":
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=800&fit=crop&q=85",
  "/images/projects/led-video-wall-lobby.jpg":
    "https://www.ledwallcentral.com/images/articles/Whats%20Next%20for%20Large%20Scale%20Digital%20Signage%20Mall.jpg",
  "/images/projects/enterprise-api-platform.jpg":
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&q=85",
  "/images/projects/modern-office-interiors.jpg":
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&q=85",
  "/images/projects/recording-studio-acoustics.jpg":
    "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=1200&h=800&fit=crop&q=85",
  "/images/projects/industrial-electrical-plant.jpg":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&q=85",
  "/images/projects/hospital-digital-signage.jpg":
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=800&fit=crop&q=85",
};

let ok = 0;
let fail = 0;

for (const [localPath, url] of Object.entries(imageSources)) {
  const dest = join(publicDir, localPath);
  await mkdir(dirname(dest), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`✓ ${localPath}`);
    ok++;
  } catch (err) {
    console.error(`✗ ${localPath}: ${err.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
