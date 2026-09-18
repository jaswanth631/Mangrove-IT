import { serviceCategories } from "./services";
import { siteConfig } from "./site";

export interface ChatLink {
  label: string;
  href: string;
}

export interface ChatReply {
  text: string;
  links?: ChatLink[];
  suggestions?: string[];
}

export const quickActions = [
  "Our Services",
  "AV Solutions",
  "Get a Quote",
  "Contact Details",
  "Business Hours",
];

const categoryList = serviceCategories
  .map((c) => `• ${c.title} — ${c.panelDescription}`)
  .join("\n");

const avServices = serviceCategories
  .find((c) => c.slug === "av-integration")
  ?.services.map((s) => s.title)
  .join(", ");

const itServices = serviceCategories
  .find((c) => c.slug === "it-integration")
  ?.services.map((s) => s.title)
  .join(", ");

const interiorServices = [
  ...(serviceCategories.find((c) => c.slug === "interior-acoustics")?.services ?? []),
  ...(serviceCategories.find((c) => c.slug === "interior-acoustics")?.acousticSolutions ?? []),
]
  .map((s) => s.title)
  .join(", ");

const electricalServices = serviceCategories
  .find((c) => c.slug === "electrical-projects")
  ?.services.map((s) => s.title)
  .join(", ");

function matches(text: string, patterns: string[]) {
  const lower = text.toLowerCase();
  return patterns.some((p) => lower.includes(p));
}

export function getChatbotReply(input: string): ChatReply {
  const text = input.trim();
  const lower = text.toLowerCase();

  if (!text) {
    return {
      text: "Please type a message or pick one of the options below.",
      suggestions: quickActions,
    };
  }

  if (matches(lower, ["hello", "hi", "hey", "good morning", "good evening", "namaste"])) {
    return {
      text: `Hello! Welcome to ${siteConfig.legalName}. I'm here to help you explore our AV, IT, interior, acoustic and electrical solutions.\n\nWhat would you like to know?`,
      suggestions: quickActions,
    };
  }

  if (matches(lower, ["thank", "thanks", "thx"])) {
    return {
      text: "You're welcome! If you need anything else, just ask — or reach our team directly via the contact section.",
      suggestions: ["Contact Details", "Get a Quote"],
    };
  }

  if (
    matches(lower, [
      "quote",
      "quotation",
      "estimate",
      "proposal",
      "project",
      "start a project",
      "get a quote",
      "pricing",
      "cost",
      "budget",
    ])
  ) {
    return {
      text:
        "We'd be happy to discuss your project. Share your requirements through our contact form and our engineering team will respond with a tailored proposal.\n\nTypical turnkey scope: consultation → design → installation → commissioning → support.",
      links: [{ label: "Request a Quote", href: "#contact" }],
      suggestions: ["Our Services", "Turnkey Projects", "Contact Details"],
    };
  }

  if (matches(lower, ["turnkey", "end to end", "end-to-end", "complete project"])) {
    return {
      text: `${siteConfig.turnkey.intro}\n\n${siteConfig.turnkey.closing}`,
      links: [
        { label: "About Turnkey", href: "#about" },
        { label: "Contact Us", href: "#contact" },
      ],
      suggestions: ["Our Services", "Get a Quote"],
    };
  }

  if (matches(lower, ["contact", "phone", "call", "email", "reach", "talk to"])) {
    const { phone, emails, address, businessHours } = siteConfig.contact;
    return {
      text: `Here's how to reach us:\n\n📞 ${phone}\n✉️ ${emails[0]}\n📍 ${address}\n\nWeekdays: ${businessHours.weekdays}\nSaturday: ${businessHours.saturday}\nSunday: ${businessHours.sunday}`,
      links: [
        { label: "Contact Form", href: "#contact" },
        { label: `Call ${phone}`, href: `tel:${phone.replace(/\s/g, "")}` },
        { label: "Email Us", href: `mailto:${emails[0]}` },
      ],
    };
  }

  if (matches(lower, ["hour", "timing", "open", "closed", "when are you"])) {
    const { businessHours } = siteConfig.contact;
    return {
      text: `Our business hours:\n\nWeekdays: ${businessHours.weekdays}\nSaturday: ${businessHours.saturday}\nSunday: ${businessHours.sunday}`,
      suggestions: ["Contact Details", "Get a Quote"],
    };
  }

  if (matches(lower, ["address", "location", "office", "where", "bangalore", "bengaluru"])) {
    return {
      text: `We're based in Bangalore:\n\n${siteConfig.contact.address}`,
      links: [{ label: "Contact Us", href: "#contact" }],
    };
  }

  if (
    matches(lower, [
      "av",
      "audio",
      "video",
      "conference",
      "boardroom",
      "led",
      "projection",
      "signage",
      "pa system",
      "line array",
    ])
  ) {
    return {
      text: `Our AV Integration services include:\n${avServices}\n\nWe design and deploy conference rooms, auditoriums, LED walls, digital signage and more.`,
      links: [{ label: "Explore AV Integration", href: "#av-integration" }],
      suggestions: ["Get a Quote", "Our Services"],
    };
  }

  if (
    matches(lower, [
      "it",
      "software",
      "web",
      "api",
      "erp",
      "integration",
      "development",
      "application",
    ])
  ) {
    return {
      text: `Our IT Integration services include:\n${itServices}\n\nFrom web platforms to enterprise APIs and ERP — we build connected digital infrastructure.`,
      links: [{ label: "Explore IT Integration", href: "#it-integration" }],
      suggestions: ["Get a Quote", "Contact Details"],
    };
  }

  if (
    matches(lower, [
      "interior",
      "acoustic",
      "furniture",
      "workstation",
      "soundproof",
      "false ceiling",
      "office fit",
    ])
  ) {
    return {
      text: `Our Interior & Acoustics solutions include:\n${interiorServices}\n\nWorkplace fit-outs, custom furniture and professional acoustic engineering.`,
      links: [{ label: "Explore Interior & Acoustics", href: "#interior-acoustics" }],
      suggestions: ["Get a Quote", "AV Solutions"],
    };
  }

  if (
    matches(lower, [
      "electrical",
      "wiring",
      "ht",
      "lt",
      "panel",
      "switchgear",
      "power",
      "maintenance contract",
    ])
  ) {
    return {
      text: `Our Electrical Projects include:\n${electricalServices}\n\nHT/LT installations, industrial wiring, control panels and AMC support.`,
      links: [{ label: "Explore Electrical Projects", href: "#electrical-projects" }],
      suggestions: ["Get a Quote", "Contact Details"],
    };
  }

  if (matches(lower, ["service", "what do you do", "solutions", "offer", "capabilities"])) {
    return {
      text: `MISPL delivers integrated technology across four core disciplines:\n\n${categoryList}`,
      links: [
        { label: "View All Services", href: "#services" },
        { label: "Get a Quote", href: "#contact" },
      ],
      suggestions: ["AV Solutions", "IT Integration", "Electrical Projects"],
    };
  }

  if (matches(lower, ["industr", "sector", "healthcare", "hospitality", "retail", "corporate"])) {
    return {
      text:
        "We serve corporate, education, healthcare, hospitality, retail, industrial, government, infrastructure and more — with solutions tailored to each environment.",
      links: [{ label: "View Industries", href: "#industries" }],
      suggestions: ["Our Services", "Featured Projects"],
    };
  }

  if (matches(lower, ["project", "portfolio", "work", "case study", "featured"])) {
    return {
      text:
        "Browse our featured projects across AV boardrooms, auditorium PA systems, LED video walls, enterprise IT platforms, office interiors and industrial electrical installations.",
      links: [{ label: "View Projects", href: "#projects" }],
      suggestions: ["AV Solutions", "Get a Quote"],
    };
  }

  if (matches(lower, ["process", "how it works", "methodology", "steps", "workflow"])) {
    const steps = siteConfig.process
      .map((p) => `${p.step} ${p.title} — ${p.description}`)
      .join("\n");
    return {
      text: `Our delivery process:\n\n${steps}`,
      links: [{ label: "Contact Us", href: "#contact" }],
      suggestions: ["Get a Quote", "Turnkey Projects"],
    };
  }

  if (matches(lower, ["why", "choose", "mispl", "mangrove", "about", "who are you"])) {
    const points = siteConfig.whyChooseUs
      .slice(0, 4)
      .map((w) => `• ${w.title}: ${w.description}`)
      .join("\n");
    return {
      text: `${siteConfig.legalName} — ${siteConfig.tagline}\n\n${points}`,
      links: [{ label: "About Us", href: "#about" }],
      suggestions: ["Our Services", "Contact Details"],
    };
  }

  // Map quick action labels directly
  const quickMap: Record<string, ChatReply> = {
    "our services": getChatbotReply("services"),
    "av solutions": getChatbotReply("av integration"),
    "get a quote": getChatbotReply("quote"),
    "contact details": getChatbotReply("contact"),
    "business hours": getChatbotReply("hours"),
    "it integration": getChatbotReply("it"),
    "electrical projects": getChatbotReply("electrical"),
    "featured projects": getChatbotReply("projects"),
    "turnkey projects": getChatbotReply("turnkey"),
  };

  const quick = quickMap[lower];
  if (quick) return quick;

  return {
    text:
      "I can help with our services, AV/IT/interior/electrical solutions, project quotes, contact details and business hours.\n\nTry one of the options below, or ask a specific question.",
    links: [{ label: "Contact Our Team", href: "#contact" }],
    suggestions: quickActions,
  };
}

export const welcomeMessage =
  `Hi! I'm the ${siteConfig.name} assistant. Ask me about our services, request a project quote, or get contact details.`;
