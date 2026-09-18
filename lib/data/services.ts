import { images } from "./images";

export interface SubService {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  panelDescription: string;
  image: string;
  sectionImage: string;
  icon: "av" | "it" | "interior" | "electrical";
  services: SubService[];
  acousticSolutions?: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "av-integration",
    number: "01",
    title: "AV Integration",
    slug: "av-integration",
    description:
      "Immersive audio, visual and communication solutions engineered for modern spaces.",
    panelDescription:
      "Conference rooms, auditoriums, LED walls and digital signage — engineered for impact.",
    image: images.av.category,
    sectionImage: images.av.category,
    icon: "av",
    services: [
      {
        title: "Video Conferencing",
        slug: "video-conferencing",
        shortDescription: "HD collaboration for boardrooms and huddle spaces.",
        description:
          "Enterprise-grade video conferencing with seamless platform integration, wireless presentation and room management for modern workplaces.",
        image: images.av["video-conferencing"],
      },
      {
        title: "Background Audio",
        slug: "background-audio",
        shortDescription: "Distributed audio for uniform ambient coverage.",
        description:
          "Zone-based background music and paging systems designed for retail, hospitality, offices and public venues.",
        image: images.av["background-audio"],
      },
      {
        title: "Large PA & Line Arrays",
        slug: "large-pa-line-arrays",
        shortDescription: "Sound reinforcement for auditoriums and venues.",
        description:
          "Professional PA systems with line arrays, digital mixing and acoustic modeling for large-scale venues.",
        image: images.av["large-pa-line-arrays"],
      },
      {
        title: "Projection",
        slug: "projection",
        shortDescription: "Laser and 4K projection for any environment.",
        description:
          "From ultra-short throw to large-format projection with edge blending and professional calibration.",
        image: images.av.projection,
      },
      {
        title: "LED & Video Wall",
        slug: "led-video-wall",
        shortDescription: "High-impact visual displays for any scale.",
        description:
          "Fine-pitch LED walls and video walls for command centers, lobbies, auditoriums and outdoor installations.",
        image: images.av["led-video-wall"],
      },
      {
        title: "Commercial TV Screens",
        slug: "commercial-tv-screens",
        shortDescription: "24/7 commercial displays from leading brands.",
        description:
          "Professional-grade displays from Samsung, LG, Sony and more — built for continuous commercial operation.",
        image: images.av["commercial-tv-screens"],
      },
      {
        title: "Interactive Touch Screens",
        slug: "interactive-touch-screens",
        shortDescription: "Collaborative multi-touch displays.",
        description:
          "Interactive displays with wireless sharing, whiteboarding and video conferencing integration.",
        image: images.av["interactive-touch-screens"],
      },
      {
        title: "Digital Signage",
        slug: "digital-signage",
        shortDescription: "Dynamic content across single or networked screens.",
        description:
          "Cloud-managed digital signage with scheduling, real-time updates and multi-location control.",
        image: images.av["digital-signage"],
      },
      {
        title: "Stage & Concert Lighting",
        slug: "stage-concert-lighting",
        shortDescription: "Performance lighting design and installation.",
        description:
          "Intelligent lighting systems with DMX control for theaters, auditoriums and performance venues.",
        image: images.av["stage-concert-lighting"],
      },
    ],
  },
  {
    id: "it-integration",
    number: "02",
    title: "IT Integration",
    slug: "it-integration",
    description:
      "Connected digital infrastructure and software solutions designed for modern businesses.",
    panelDescription:
      "Web platforms, application integration and APIs that power connected enterprises.",
    image: images.it.category,
    sectionImage: images.it.category,
    icon: "it",
    services: [
      {
        title: "Web Development",
        slug: "web-development",
        shortDescription: "Custom web applications and platforms.",
        description:
          "Responsive, performant web solutions built with modern frameworks — from corporate sites to complex web applications.",
        image: images.it["web-development"],
      },
      {
        title: "Application Integration",
        slug: "application-integration",
        shortDescription: "Connect disparate systems seamlessly.",
        description:
          "Bridge legacy and modern systems with middleware, cloud integration and real-time data synchronization.",
        image: images.it["application-integration"],
      },
      {
        title: "ERP",
        slug: "erp",
        shortDescription: "Enterprise resource planning implementation and integration.",
        description:
          "Implementation, customization and integration of ERP platforms to unify finance, operations, inventory, HR and business processes across your organization.",
        image: images.it.erp,
      },
      {
        title: "Web Services",
        slug: "web-services",
        shortDescription: "Secure, scalable service architectures.",
        description:
          "Microservices, API gateways and distributed architectures for reliable enterprise communication.",
        image: images.it["web-services"],
      },
      {
        title: "REST APIs",
        slug: "rest-apis",
        shortDescription: "Well-documented, secure API interfaces.",
        description:
          "RESTful API design and development with versioning, authentication and comprehensive documentation.",
        image: images.it["rest-apis"],
      },
    ],
  },
  {
    id: "interior-acoustics",
    number: "03",
    title: "Interior & Acoustics",
    slug: "interior-acoustics",
    description:
      "Spaces engineered for comfort, functionality, aesthetics and acoustic performance.",
    panelDescription:
      "Workplace furniture, storage solutions and acoustic engineering for productive environments.",
    image: images.interior.category,
    sectionImage: images.interior.category,
    icon: "interior",
    services: [
      {
        title: "Work Stations",
        slug: "work-stations",
        shortDescription: "Ergonomic, modular workstation solutions.",
        description:
          "Adaptable workstations with integrated cable management and acoustic considerations.",
        image: images.interior["work-stations"],
      },
      {
        title: "Office Table & Chairs",
        slug: "office-table-chairs",
        shortDescription: "Executive and collaborative furniture.",
        description:
          "Premium office furniture including conference tables, executive desks and ergonomic seating.",
        image: images.interior["office-table-chairs"],
      },
      {
        title: "Cupboard & Storage Racks",
        slug: "cupboard-storage-racks",
        shortDescription: "Organized storage for modern workspaces.",
        description:
          "Filing systems, lockers and open shelving designed for efficient space utilization.",
        image: images.interior["cupboard-storage-racks"],
      },
      {
        title: "Computer Table & Study Desks",
        slug: "computer-table-study-desks",
        shortDescription: "Functional desks for work and study.",
        description:
          "Height-adjustable and space-efficient desks for offices, labs and educational environments.",
        image: images.interior["computer-table-study-desks"],
      },
      {
        title: "Data Center Storage Racks",
        slug: "data-center-storage-racks",
        shortDescription: "Server racks and network infrastructure.",
        description:
          "Professional-grade server racks with cable management, cooling and power distribution.",
        image: images.interior["data-center-storage-racks"],
      },
      {
        title: "Customized All Kinds of Furniture",
        slug: "customized-furniture",
        shortDescription: "Bespoke furniture tailored to your space.",
        description:
          "Custom-designed furniture with 3D visualization, material selection and professional installation.",
        image: images.interior["customized-furniture"],
      },
    ],
    acousticSolutions: [
      {
        title: "Acoustic Treatment",
        slug: "acoustic-treatment",
        shortDescription: "Optimize room acoustics for clarity.",
        description:
          "Professional acoustic treatment for studios, offices, auditoriums and performance spaces.",
        image: images.interior["acoustic-treatment"],
      },
      {
        title: "Soundproofing",
        slug: "soundproofing",
        shortDescription: "Isolate spaces from external noise.",
        description:
          "Comprehensive soundproofing solutions for meeting rooms, studios and sensitive environments.",
        image: images.interior.soundproofing,
      },
      {
        title: "Acoustic Panels",
        slug: "acoustic-panels",
        shortDescription: "Decorative panels that absorb sound.",
        description:
          "Wall and ceiling acoustic panels in various finishes to complement interior design.",
        image: images.interior["acoustic-panels"],
      },
      {
        title: "False Ceiling Solutions",
        slug: "false-ceiling-solutions",
        shortDescription: "Integrated ceiling systems with acoustics.",
        description:
          "Suspended ceiling systems combining aesthetics, lighting integration and acoustic performance.",
        image: images.interior["false-ceiling-solutions"],
      },
      {
        title: "Acoustic Insulation",
        slug: "acoustic-insulation",
        shortDescription: "Building-level acoustic insulation.",
        description:
          "Structural acoustic insulation for walls, floors and partitions in commercial buildings.",
        image: images.interior["acoustic-insulation"],
      },
    ],
  },
  {
    id: "electrical-projects",
    number: "04",
    title: "Electrical Projects",
    slug: "electrical-projects",
    description:
      "Reliable electrical infrastructure engineered for commercial and industrial environments.",
    panelDescription:
      "HT/LT installations, industrial wiring and control panels for mission-critical power systems.",
    image: images.electrical.category,
    sectionImage: images.electrical.category,
    icon: "electrical",
    services: [
      {
        title: "HT & LT Installations",
        slug: "ht-lt-installations",
        shortDescription: "High and low tension power systems.",
        description:
          "Complete HT/LT electrical installations with switchgear, transformers and distribution panels.",
        image: images.electrical["ht-lt-installations"],
      },
      {
        title: "Industrial Wiring",
        slug: "industrial-wiring",
        shortDescription: "Robust wiring for manufacturing facilities.",
        description:
          "Machine wiring, motor control circuits and instrumentation for industrial environments.",
        image: images.electrical["industrial-wiring"],
      },
      {
        title: "Electrical Design",
        slug: "electrical-design",
        shortDescription: "Engineering drawings and load analysis.",
        description:
          "Single-line diagrams, load calculations, lighting design and AutoCAD electrical drawings.",
        image: images.electrical["electrical-design"],
      },
      {
        title: "Control Panels",
        slug: "control-panels",
        shortDescription: "Custom automation and control systems.",
        description:
          "PLC/SCADA panels, motor control centers and VFD panels built to specification.",
        image: images.electrical["control-panels"],
      },
      {
        title: "Maintenance Contracts",
        slug: "maintenance-contracts",
        shortDescription: "Preventive maintenance programs.",
        description:
          "Scheduled inspections, thermographic scanning and 24/7 emergency support contracts.",
        image: images.electrical["maintenance-contracts"],
      },
      {
        title: "Repair Services",
        slug: "repair-services",
        shortDescription: "Rapid fault diagnosis and repair.",
        description:
          "Emergency breakdown repairs, fault finding and equipment restoration services.",
        image: images.electrical["repair-services"],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceCategories.find((s) => s.slug === slug);
}

export function getAllSubServices() {
  return serviceCategories.flatMap((cat) => [
    ...cat.services.map((s) => ({ ...s, category: cat.title, categorySlug: cat.slug })),
    ...(cat.acousticSolutions?.map((s) => ({ ...s, category: cat.title, categorySlug: cat.slug })) ?? []),
  ]);
}
