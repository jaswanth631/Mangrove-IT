import { images } from "./images";

export type ProjectCategory = "AV" | "IT" | "Interior" | "Acoustics" | "Electrical";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  services: string[];
  year: string;
}

export const projects: Project[] = [
  {
    slug: "corporate-boardroom-av",
    name: "Corporate Boardroom AV",
    category: "AV",
    location: "Bangalore, Karnataka",
    shortDescription: "Full AV integration for a 24-seat executive boardroom.",
    description:
      "Complete audio-visual transformation of a premium corporate boardroom featuring 4K video conferencing, wireless presentation, ceiling-mounted speakers and automated room control. The system integrates seamlessly with the client's existing Microsoft Teams environment.",
    image: images.projects["corporate-boardroom-av"],
    images: [
      images.projects["corporate-boardroom-av"],
      images.av["video-conferencing"],
      images.av["commercial-tv-screens"],
    ],
    services: ["Video Conferencing", "Commercial TV Screens", "Background Audio"],
    year: "2024",
  },
  {
    slug: "auditorium-pa-system",
    name: "Auditorium PA System",
    category: "AV",
    location: "Hyderabad, Telangana",
    shortDescription: "Line array sound reinforcement for a 500-seat auditorium.",
    description:
      "Design and installation of a professional line array PA system with digital mixing console, wireless microphones and stage monitoring for a multi-purpose auditorium hosting conferences and cultural events.",
    image: images.projects["auditorium-pa-system"],
    images: [
      images.projects["auditorium-pa-system"],
      images.av["large-pa-line-arrays"],
      images.av["stage-concert-lighting"],
    ],
    services: ["Large PA & Line Arrays", "Stage & Concert Lighting"],
    year: "2023",
  },
  {
    slug: "led-video-wall-lobby",
    name: "LED Video Wall — Corporate Lobby",
    category: "AV",
    location: "Mumbai, Maharashtra",
    shortDescription: "Fine-pitch LED wall for a corporate headquarters lobby.",
    description:
      "Installation of a fine-pitch LED video wall in a corporate headquarters lobby with real-time content management, brand messaging and visitor information display capabilities.",
    image: images.projects["led-video-wall-lobby"],
    images: [
      images.projects["led-video-wall-lobby"],
      images.av["led-video-wall"],
      images.av["digital-signage"],
    ],
    services: ["LED & Video Wall", "Digital Signage"],
    year: "2024",
  },
  {
    slug: "enterprise-api-platform",
    name: "Enterprise API Platform",
    category: "IT",
    location: "Bangalore, Karnataka",
    shortDescription: "REST API integration connecting ERP, CRM and warehouse systems.",
    description:
      "Development and deployment of a centralized REST API platform enabling real-time data exchange between ERP, CRM and warehouse management systems for a logistics enterprise.",
    image: images.projects["enterprise-api-platform"],
    images: [
      images.projects["enterprise-api-platform"],
      images.it["rest-apis"],
      images.it["application-integration"],
    ],
    services: ["REST APIs", "Application Integration", "Web Services"],
    year: "2024",
  },
  {
    slug: "modern-office-interiors",
    name: "Modern Office Interiors",
    category: "Interior",
    location: "Bangalore, Karnataka",
    shortDescription: "Complete workspace fit-out for a 200-person tech office.",
    description:
      "End-to-end interior fit-out including workstations, meeting room furniture, storage solutions and collaborative spaces for a growing technology company.",
    image: images.projects["modern-office-interiors"],
    images: [
      images.projects["modern-office-interiors"],
      images.interior["work-stations"],
      images.interior["office-table-chairs"],
    ],
    services: ["Work Stations", "Office Table & Chairs", "Cupboard & Storage Racks"],
    year: "2023",
  },
  {
    slug: "recording-studio-acoustics",
    name: "Recording Studio Acoustics",
    category: "Acoustics",
    location: "Chennai, Tamil Nadu",
    shortDescription: "Acoustic treatment and soundproofing for a professional studio.",
    description:
      "Comprehensive acoustic treatment including bass traps, diffusers, acoustic panels and full room soundproofing for a professional recording and post-production studio.",
    image: images.projects["recording-studio-acoustics"],
    images: [
      images.projects["recording-studio-acoustics"],
      images.interior["acoustic-treatment"],
      images.interior.soundproofing,
    ],
    services: ["Acoustic Treatment", "Soundproofing", "Acoustic Panels"],
    year: "2023",
  },
  {
    slug: "industrial-electrical-plant",
    name: "Industrial Electrical Plant",
    category: "Electrical",
    location: "Pune, Maharashtra",
    shortDescription: "HT/LT installation and control panels for a manufacturing facility.",
    description:
      "Complete electrical infrastructure for a manufacturing plant including HT switchgear, LT distribution panels, industrial wiring, motor control centers and annual maintenance contract.",
    image: images.projects["industrial-electrical-plant"],
    images: [
      images.projects["industrial-electrical-plant"],
      images.electrical["ht-lt-installations"],
      images.electrical["control-panels"],
    ],
    services: ["HT & LT Installations", "Control Panels", "Industrial Wiring"],
    year: "2024",
  },
  {
    slug: "hospital-digital-signage",
    name: "Hospital Digital Signage Network",
    category: "AV",
    location: "Bangalore, Karnataka",
    shortDescription: "Networked digital signage across a multi-building hospital campus.",
    description:
      "Deployment of a campus-wide digital signage network with wayfinding, queue management displays and emergency messaging across multiple hospital buildings.",
    image: images.projects["hospital-digital-signage"],
    images: [
      images.projects["hospital-digital-signage"],
      images.av["digital-signage"],
      images.industries.healthcare,
    ],
    services: ["Digital Signage", "Commercial TV Screens"],
    year: "2024",
  },
];

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "AV",
  "IT",
  "Interior",
  "Acoustics",
  "Electrical",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
