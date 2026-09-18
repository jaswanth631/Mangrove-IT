/**
 * Local image paths — each service maps to its manifest filename under public/images/.
 * Run `npm run images:services` to download/update the 27 manifest service images.
 */

import manifest from "./image_manifest.json";

export const images = {
  hero: "/images/hero.jpg",

  av: {
    category: "/images/av/01-video-conferencing.webp",
    "video-conferencing": "/images/av/01-video-conferencing.webp",
    "background-audio": "/images/av/02-background-audio.jpg",
    "large-pa-line-arrays": "/images/av/03-large-pa-line-arrays.jpg",
    projection: "/images/av/04-projection.jpg",
    "led-video-wall": "/images/av/05-led-video-wall.jpg",
    "commercial-tv-screens": "/images/av/06-commercial-tv-screens.jpg",
    "interactive-touch-screens": "/images/av/07-interactive-touch-screens.jpg",
    "digital-signage": "/images/av/08-digital-signage.jpg",
    "stage-concert-lighting": "/images/av/09-stage-concert-lighting.jpg",
  },

  it: {
    category: "/images/it/10-web-development.jpg",
    "web-development": "/images/it/10-web-development.jpg",
    "application-integration": "/images/it/11-application-integration.png",
    "web-services": "/images/it/12-web-services.jpg",
    "rest-apis": "/images/it/13-rest-apis.jpg",
    erp: "/images/it/erp.jpg",
  },

  interior: {
    category: "/images/interior/14-work-stations.png",
    "work-stations": "/images/interior/14-work-stations.png",
    "office-table-chairs": "/images/interior/15-office-table-chairs.png",
    "cupboard-storage-racks": "/images/interior/16-office-cupboard-storage.jpg",
    "computer-table-study-desks": "/images/interior/17-computer-study-desks.jpeg",
    "data-center-storage-racks": "/images/interior/18-data-center-storage-racks.jpg",
    "customized-furniture": "/images/interior/19-customized-furniture.jpg",
    "acoustic-treatment": "/images/interior/20-acoustic-treatment.jpg",
    soundproofing: "/images/interior/21-soundproofing.jpg",
    "acoustic-panels": "/images/interior/acoustic-panels.jpg",
    "false-ceiling-solutions": "/images/interior/false-ceiling-solutions.jpg",
    "acoustic-insulation": "/images/interior/acoustic-insulation.jpg",
  },

  electrical: {
    category: "/images/electrical/22-ht-lt-installations.png",
    "ht-lt-installations": "/images/electrical/22-ht-lt-installations.png",
    "industrial-wiring": "/images/electrical/23-industrial-wiring.jpg",
    "electrical-design": "/images/electrical/24-electrical-design.png",
    "control-panels": "/images/electrical/25-control-panels.jpg",
    "maintenance-contracts": "/images/electrical/26-maintenance-contracts.png",
    "repair-services": "/images/electrical/27-repair-services.jpg",
  },

  industries: {
    corporate: "/images/industries/corporate.jpg",
    education: "/images/industries/education.jpg",
    healthcare: "/images/industries/healthcare.jpg",
    hospitality: "/images/industries/hospitality.jpg",
    retail: "/images/industries/retail.jpg",
    industrial: "/images/industries/industrial.jpg",
    government: "/images/industries/government.jpg",
    infrastructure: "/images/industries/infrastructure.jpg",
    commercial: "/images/industries/commercial.jpg",
    residential: "/images/industries/residential.jpg",
  },

  projects: {
    "corporate-boardroom-av": "/images/projects/corporate-boardroom-av.jpg",
    "auditorium-pa-system": "/images/projects/auditorium-pa-system.jpg",
    "led-video-wall-lobby": "/images/projects/led-video-wall-lobby.jpg",
    "enterprise-api-platform": "/images/projects/enterprise-api-platform.jpg",
    "modern-office-interiors": "/images/projects/modern-office-interiors.jpg",
    "recording-studio-acoustics": "/images/projects/recording-studio-acoustics.jpg",
    "industrial-electrical-plant": "/images/projects/industrial-electrical-plant.jpg",
    "hospital-digital-signage": "/images/projects/hospital-digital-signage.jpg",
  },
} as const;

/** Manifest slug → local path (27 services) */
const manifestSlugMap: Record<string, string> = {
  "video-conferencing": "/images/av/01-video-conferencing.webp",
  "background-audio": "/images/av/02-background-audio.jpg",
  "large-pa-line-arrays": "/images/av/03-large-pa-line-arrays.jpg",
  projection: "/images/av/04-projection.jpg",
  "led-video-wall": "/images/av/05-led-video-wall.jpg",
  "commercial-tv-screens": "/images/av/06-commercial-tv-screens.jpg",
  "interactive-touch-screens": "/images/av/07-interactive-touch-screens.jpg",
  "digital-signage": "/images/av/08-digital-signage.jpg",
  "stage-concert-lighting": "/images/av/09-stage-concert-lighting.jpg",
  "web-development": "/images/it/10-web-development.jpg",
  "application-integration": "/images/it/11-application-integration.png",
  "web-services": "/images/it/12-web-services.jpg",
  "rest-apis": "/images/it/13-rest-apis.jpg",
  "work-stations": "/images/interior/14-work-stations.png",
  "office-table-chairs": "/images/interior/15-office-table-chairs.png",
  "cupboard-storage-racks": "/images/interior/16-office-cupboard-storage.jpg",
  "computer-table-study-desks": "/images/interior/17-computer-study-desks.jpeg",
  "data-center-storage-racks": "/images/interior/18-data-center-storage-racks.jpg",
  "customized-furniture": "/images/interior/19-customized-furniture.jpg",
  "acoustic-treatment": "/images/interior/20-acoustic-treatment.jpg",
  soundproofing: "/images/interior/21-soundproofing.jpg",
  "ht-lt-installations": "/images/electrical/22-ht-lt-installations.png",
  "industrial-wiring": "/images/electrical/23-industrial-wiring.jpg",
  "electrical-design": "/images/electrical/24-electrical-design.png",
  "control-panels": "/images/electrical/25-control-panels.jpg",
  "maintenance-contracts": "/images/electrical/26-maintenance-contracts.png",
  "repair-services": "/images/electrical/27-repair-services.jpg",
};

const manifestFilenameToSlug: Record<string, string> = {
  "01-video-conferencing.webp": "video-conferencing",
  "02-background-audio.jpg": "background-audio",
  "03-large-pa-line-arrays.jpg": "large-pa-line-arrays",
  "04-projection.jpg": "projection",
  "05-led-video-wall.jpg": "led-video-wall",
  "06-commercial-tv-screens.jpg": "commercial-tv-screens",
  "07-interactive-touch-screens.jpg": "interactive-touch-screens",
  "08-digital-signage.jpg": "digital-signage",
  "09-stage-concert-lighting.jpg": "stage-concert-lighting",
  "10-web-development.jpg": "web-development",
  "11-application-integration.png": "application-integration",
  "12-web-services.jpg": "web-services",
  "13-rest-apis.jpg": "rest-apis",
  "14-work-stations.png": "work-stations",
  "15-office-table-chairs.png": "office-table-chairs",
  "16-office-cupboard-storage.jpg": "cupboard-storage-racks",
  "17-computer-study-desks.jpeg": "computer-table-study-desks",
  "18-data-center-storage-racks.jpg": "data-center-storage-racks",
  "19-customized-furniture.jpg": "customized-furniture",
  "20-acoustic-treatment.jpg": "acoustic-treatment",
  "21-soundproofing.jpg": "soundproofing",
  "22-ht-lt-installations.png": "ht-lt-installations",
  "23-industrial-wiring.jpg": "industrial-wiring",
  "24-electrical-design.png": "electrical-design",
  "25-control-panels.jpg": "control-panels",
  "26-maintenance-contracts.png": "maintenance-contracts",
  "27-repair-services.jpg": "repair-services",
};

/** Source URLs from image_manifest.json keyed by local path */
export const imageSources: Record<string, string> = Object.fromEntries(
  (manifest as Array<{ filename: string; url: string }>).map((entry) => {
    const slug = manifestFilenameToSlug[entry.filename];
    const localPath = manifestSlugMap[slug];
    return [localPath, entry.url];
  })
);

// Non-manifest assets (hero, ERP, extra acoustic services, industries, projects)
Object.assign(imageSources, {
  "/images/hero.jpg":
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&h=1080&fit=crop&q=85",
  "/images/it/erp.jpg":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=85",
  "/images/interior/acoustic-panels.jpg":
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop&q=85",
  "/images/interior/false-ceiling-solutions.jpg":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&q=85",
  "/images/interior/acoustic-insulation.jpg":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&q=85",
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
});

export { manifestSlugMap };
