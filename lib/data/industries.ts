import { images } from "./images";

export interface Industry {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export const industries: Industry[] = [
  {
    title: "Corporate",
    slug: "corporate",
    description:
      "Boardrooms, collaboration spaces and enterprise AV/IT infrastructure for modern offices.",
    image: images.industries.corporate,
  },
  {
    title: "Education",
    slug: "education",
    description:
      "Smart classrooms, auditoriums and campus-wide technology integration.",
    image: images.industries.education,
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Digital signage, communication systems and infrastructure for healthcare facilities.",
    image: images.industries.healthcare,
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    description:
      "Ambient audio, digital displays and integrated technology for hotels and venues.",
    image: images.industries.hospitality,
  },
  {
    title: "Retail",
    slug: "retail",
    description:
      "Digital signage, background audio and interactive displays for retail environments.",
    image: images.industries.retail,
  },
  {
    title: "Industrial",
    slug: "industrial",
    description:
      "Electrical infrastructure, control panels and rugged IT systems for manufacturing.",
    image: images.industries.industrial,
  },
  {
    title: "Government",
    slug: "government",
    description:
      "Secure AV systems, conference facilities and infrastructure for public sector.",
    image: images.industries.government,
  },
  {
    title: "Infrastructure",
    slug: "infrastructure",
    description:
      "Large-scale electrical and technology integration for infrastructure projects.",
    image: images.industries.infrastructure,
  },
  {
    title: "Commercial",
    slug: "commercial",
    description:
      "End-to-end technology solutions for commercial buildings and business parks.",
    image: images.industries.commercial,
  },
  {
    title: "Residential",
    slug: "residential",
    description:
      "Home automation, home theater and acoustic solutions for premium residences.",
    image: images.industries.residential,
  },
];
