import type { ProductDetailData, SpecificationRow } from "./productDetailTypes";

type CalloutLayout = {
  lineClass?: string;
  dotClass?: string;
  cardClass?: string;
};

type ProductConfig = {
  slug: string;
  crumb: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  description: string;
  descriptionHighlight?: string;
  folder: string;
  heroImage?: string;
  heroAlt: string;
  introImage?: string;
  machineAlt: string;
  capacity: string;
  feedSize: string;
  motorPower: string;
  applicationValue: string;
  introTitle: string;
  introHighlight: string;
  introDescription: string;
  specificationTitle?: string;
  specificationHighlight?: string;
  specificationSubtitle?: string;
  specificationColumns?: Array<{ label: string; key: string; emphasis?: "primary" | "secondary" }>;
  specificationNote?: string;
  stats: SpecificationRow[];
  specs: Array<{ title: string; text: string; icon: string }>;
  features: Array<{ title: string; description: string; icon: string }>;
  callouts: Array<{ label: string; text: string; layout?: CalloutLayout }>;
  applications: string[];
  process: Array<{ title: string; description: string; image: string; iconFile: string }>;
  related: Array<{ title: string; href: string; image: string; icon: string; category: string; description: string }>;
};

const industryImages: Record<string, { src: string; icon: string; description: string }> = {
  Mining: {
    src: "/images/industries/mining.jpg",
    icon: "pickaxe",
    description: "Reliable production for hard rock, ore, and mineral processing plants.",
  },
  Aggregates: {
    src: "/images/industries/aggregates.jpg",
    icon: "layers",
    description: "Consistent output for quarry, road metal, and aggregate production.",
  },
  Cement: {
    src: "/images/industries/cement.jpg",
    icon: "factory",
    description: "Durable equipment for limestone and raw material preparation.",
  },
  Construction: {
    src: "/images/industries/construction.jpg",
    icon: "hardHat",
    description: "High uptime solutions for infrastructure and construction sites.",
  },
  Recycling: {
    src: "/images/industries/recycling.jpg",
    icon: "recycle",
    description: "Efficient processing for recyclable construction and demolition material.",
  },
  Infrastructure: {
    src: "/images/industries/infrastructure.jpg",
    icon: "building",
    description: "Integrated equipment for large civil and infrastructure projects.",
  },
};

const specificationColumns = [
  { label: "Model", key: "model", emphasis: "primary" as const },
  { label: "Feed / Deck Size", key: "feedOpening" },
  { label: "Max Feed Size", key: "maxFeedSize", emphasis: "secondary" as const },
  { label: "Capacity", key: "capacity", emphasis: "primary" as const },
  { label: "Motor Power", key: "motorPower" },
  { label: "Weight", key: "weight" },
  { label: "Application", key: "dimension" },
];

const supportFeatures = [
  { title: "TRUSTED INFORMATION", text: "Verified and updated technical content.", icon: "shield" },
  { title: "EASY ACCESS", text: "Instant downloads anytime, anywhere.", icon: "clipboard" },
  { title: "MAKE INFORMED DECISIONS", text: "All the data you need to choose the right equipment.", icon: "target" },
  { title: "EXPERT SUPPORT", text: "Our team is here to help with any questions.", icon: "headphones" },
];

function toApplicationItems(items: string[]) {
  const iconMap: Record<string, string> = {
    Mining: "basket",
    Aggregates: "mountain",
    Construction: "building",
    Cement: "factory",
    Recycling: "recycle",
    Infrastructure: "hardHat",
  };

  return items.map((label) => ({ label, icon: iconMap[label] ?? "factory" }));
}

function createProductData(config: ProductConfig): ProductDetailData {
  const folderPath = `/images/products/${config.folder}`;
  const calloutPositions = ["leftTop", "rightTop", "rightMiddle", "rightBottom", "bottomCenter"] as const;

  return {
    slug: config.slug,
    hero: {
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: config.crumb, href: `/products/${config.slug}` },
      ],
      eyebrow: config.eyebrow,
      title: config.title,
      highlightedTitle: config.highlightedTitle,
      subtitle: config.subtitle,
      description: config.description,
      descriptionHighlight: config.descriptionHighlight,
      image: {
        src: config.heroImage || `${folderPath}/hero.png`,
        alt: config.heroAlt,
      },
      ctas: [
        { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
        { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
      ],
      quickStats: [
        { label: config.capacity, value: "Capacity", icon: "gauge" },
        { label: config.feedSize, value: "Feed Range", icon: "ruler" },
        { label: config.motorPower, value: "Motor Power", icon: "zap" },
        { label: config.applicationValue, value: "Application", icon: "boxes" },
      ],
    },
    statsSection: {
      eyebrow: "Technical Highlights",
      title: "PERFORMANCE IN",
      highlight: "EVERY DETAIL",
      subtitle: "Engineered for reliable output, simple maintenance, and long service life in demanding plant conditions.",
      ctaText: "Built for Performance. Engineered for Results.",
      cta: { label: "Talk to Technical Expert", href: "#contact", variant: "primary", icon: "arrow" },
    },
    stats: [
      { label: "Capacity", value: config.capacity, unit: "", description: "Production range by model and configuration", icon: "gauge" },
      { label: "Feed Size", value: config.feedSize, unit: "", description: "Designed for demanding material flow", icon: "feeder" },
      { label: "Motor Power", value: config.motorPower, unit: "", description: "Efficient drive options", icon: "zap" },
      { label: "Build Type", value: "Heavy Duty", unit: "", description: "Robust industrial construction", icon: "shield" },
      { label: "Application", value: config.applicationValue, unit: "", description: "", icon: "boxes" },
    ],
    intro: {
      eyebrow: "Product Overview",
      title: config.introTitle,
      highlight: config.introHighlight,
      description: config.introDescription,
      image: {
        src: config.introImage || `${folderPath}/product-review.png`,
        alt: config.machineAlt,
      },
      ctas: [
        { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
        { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
      ],
      features: config.specs,
      callouts: config.callouts.map((callout, index) => ({
        ...callout,
        position: calloutPositions[index % calloutPositions.length],
      })),
      applications: {
        eyebrow: "Applications",
        description: "Configured for reliable performance across demanding industrial applications.",
        items: toApplicationItems(config.applications),
      },
    },
    performanceSection: {
      eyebrow: "Core Advantages",
      title: "ENGINEERED FOR",
      highlight: "SUPERIOR PERFORMANCE",
      subtitle: "Core systems designed to keep output stable, operation efficient, and maintenance predictable.",
    },
    performanceFeatures: config.features,
    specificationsSection: {
      eyebrow: "Technical Data",
      title: config.specificationTitle ?? "BUILT WITH PRECISION.",
      highlight: config.specificationHighlight ?? "DELIVERING PERFORMANCE.",
      subtitle: config.specificationSubtitle ?? `Select the right ${config.crumb.toLowerCase()} model for your capacity, feed size, and plant layout.`,
      columns: config.specificationColumns ?? specificationColumns,
      note: config.specificationNote ?? "Specifications are subject to change based on configuration and application.",
      ctas: [
        { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
        { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
      ],
    },
    specifications: config.stats,
    industriesSection: {
      eyebrow: "Applications",
      title: "BUILT FOR",
      highlight: "EVERY INDUSTRY.",
      subtitle: `${config.crumb} engineered for reliable performance across demanding industrial sectors.`,
    },
    industries: config.applications.map((industry) => ({
      title: industry,
      description: industryImages[industry]?.description ?? "Reliable performance for demanding industrial use.",
      image: {
        src: industryImages[industry]?.src ?? "/images/industries/aggregates.jpg",
        alt: `${industry} application with Pithal equipment`,
      },
      icon: industryImages[industry]?.icon ?? "factory",
      href: "#",
      actionLabel: "Explore",
    })),
    processSection: {
      eyebrow: "Working Process",
      title: "FROM MATERIAL TO",
      highlight: "RESULTS.",
      subtitle: "A controlled process flow designed to deliver consistent output with dependable plant performance.",
    },
    processSteps: config.process.map((step, index) => ({
      number: String(index + 1).padStart(2, "0"),
      title: step.title,
      description: step.description,
      iconFile: step.iconFile,
      image: {
        src: step.image,
        alt: step.title,
      },
    })),
    videoSection: {
      eyebrow: "VIDEO SHOWCASE",
      title: "SEE PERFORMANCE.",
      highlight: "IN ACTION.",
      description: `Watch how Pithal ${config.crumb} deliver stable performance, high uptime, and reliable output in demanding plant conditions.`,
      points: config.features.slice(0, 4).map((feature) => feature.title),
      features: config.features.slice(0, 4),
      thumbnail: {
        src: `${folderPath}/video-showcase.png`,
        alt: `${config.crumb} performance video thumbnail`,
      },
      caption: "FULL MACHINE DEMONSTRATION",
      subCaption: `Explore every detail of our ${config.crumb.toLowerCase()} performance.`,
      duration: "1:45",
      button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
    },
    relatedSection: {
      eyebrow: "RELATED PRODUCTS",
      title: "COMPLETE YOUR",
      highlight: "PROCESSING SOLUTION.",
      subtitle: "Explore machines designed to work together for maximum plant productivity and efficiency.",
    },
    relatedMachines: config.related.map((machine) => ({
      ...machine,
      image: { src: machine.image, alt: machine.title },
      actionLabel: "VIEW DETAILS",
    })),
    contactSection: {
      id: "contact",
      eyebrow: "REQUEST CONSULTATION",
      title: "LET'S BUILD THE RIGHT",
      highlight: "SOLUTION FOR YOU.",
      description: `Share your requirement and our technical team will help you select the right ${config.crumb} configuration based on feed size, capacity, application, and final output requirement.`,
      image: {
        src: `${folderPath}/contact-us.svg`,
        alt: `${config.crumb} consultation support`,
      },
      benefits: [
        { title: "EXPERT CONSULTATION", text: "Get the right solution from industry experts.", icon: "settings" },
        { title: "TAILORED RECOMMENDATION", text: "Custom advice based on your material and goals.", icon: "clipboard" },
        { title: "OPTIMIZED PERFORMANCE", text: "Maximize productivity and reduce downtime.", icon: "trending" },
        { title: "END TO END SUPPORT", text: "From selection to after-sales service.", icon: "headphones" },
      ],
      contactStrip: {
        phone: "+91 98875 37129",
        email: "info@pithalmachine.com",
      },
      form: {
        title: "REQUEST EXPERT CONSULTATION",
        fields: [
          { label: "FULL NAME", name: "name", type: "text", placeholder: "Enter your full name" },
          { label: "COMPANY NAME", name: "company", type: "text", placeholder: "Enter your company name" },
          { label: "COUNTRY", name: "country", type: "text", placeholder: "Select your country" },
        ],
        dropdown: {
          label: "REQUIREMENT / APPLICATION",
          name: "requirement",
          options: ["Describe your material type, application and any specific requirements..."],
        },
        textarea: {
          label: "CAPACITY NEEDED",
          name: "capacity",
          placeholder: "Enter required capacity (TPH)\ne.g. 100 - 150 TPH",
        },
        button: "REQUEST CONSULTATION",
      },
    },
    resourcesSection: {
      id: "resources",
      eyebrow: "Downloads",
      title: "RESOURCES TO",
      highlight: "SUPPORT YOUR SUCCESS.",
      subtitle: `Access brochures, technical datasheets, and manuals to learn more about our ${config.crumb.toLowerCase()} and performance.`,
      supportCta: { label: "REQUEST DOCUMENT", href: "#", variant: "primary", icon: "arrow" },
    },
    resources: [
      {
      type: "PDF",
      title: "PRODUCT BROCHURE",
      description: "Comprehensive overview of features, benefits and applications.",
        image: { src: `${folderPath}/product-brochure.svg`, alt: "PRODUCT BROCHURE" },
      href: "",
      actionLabel: "DOWNLOAD PDF",
    },
      {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Detailed technical specifications and performance data.",
        image: { src: `${folderPath}/technical-datasheet.svg`, alt: "TECHNICAL DATASHEET" },
      href: "",
      actionLabel: "DOWNLOAD PDF",
    },
      {
      type: "MANUAL",
      title: "OPERATION & MAINTENANCE MANUAL",
      description: "Step-by-step guide for safe operation, maintenance and best practices.",
        image: { src: `${folderPath}/operation-maintenance-manual.svg`, alt: "OPERATION & MAINTENANCE MANUAL" },
      href: "",
      actionLabel: "DOWNLOAD PDF",
    },
    ],
    supportFeatures,
  };
}

const commonRelated = {
  jaw: {
    title: "JAW CRUSHER",
    href: "/products/jaw-crushers",
    image: "/images/products/related-products/jaw-crusher.png",
    icon: "fuel",
    category: "Primary",
    description: "Heavy-duty primary crushing for hard rock and large feed material.",
  },
  cone: {
    title: "CONE CRUSHER",
    href: "/products/cone-crushers",
    image: "/images/products/related-products/cone-crusher.png",
    icon: "cone",
    category: "Secondary",
    description: "High-efficiency secondary crushing with excellent particle shape.",
  },
  vsi: {
    title: "VSI CRUSHER",
    href: "/products/vsi-crushers",
    image: "/images/products/related-products/vsi-crusher.png",
    icon: "impact",
    category: "Shaping",
    description: "Cubical shaping and fine crushing for premium aggregate output.",
  },
  feeder: {
    title: "VIBRATING FEEDER",
    href: "/products/feeders",
    image: "/images/products/related-products/vibrating-feeder.png",
    icon: "feeder",
    category: "Feeding",
    description: "Controlled material feed for stable plant operation.",
  },
  screen: {
    title: "VIBRATING SCREEN",
    href: "/products/vibrating-screens",
    image: "/images/products/related-products/vibrating-screen.png",
    icon: "screen",
    category: "Screening",
    description: "Accurate material separation for final product grades.",
  },
  conveyor: {
    title: "PRIME BELT CONVEYOR",
    href: "/products/conveyor-systems",
    image: "/images/products/related-products/belt-conveyor.png",
    icon: "conveyor",
    category: "Conveying",
    description: "Reliable material transfer across crushing and screening plants.",
  },
};

const defaultProcess = [
  { title: "Material Input", description: "Raw material enters the plant through the feeding circuit.", iconFile: "material-input.png", image: "/images/process/raw-material.png" },
  { title: "Primary Processing", description: "Material is reduced, conveyed, or prepared for the next stage.", iconFile: "primary-crushing.png", image: "/images/process/primary-crusher.png" },
  { title: "Secondary Processing", description: "The system improves size control, flow, and output consistency.", iconFile: "secondary-crushing.png", image: "/images/process/cone.png" },
  { title: "Screening & Transfer", description: "Screens and conveyors separate and move material efficiently.", iconFile: "screening.png", image: "/images/process/screening.png" },
  { title: "Final Output", description: "Finished material is ready for stockpile, dispatch, or further use.", iconFile: "final-output.png", image: "/images/process/final-output.png" },
];

export { vsiCrusherData } from "./vsiCrusherData";

export { vibratingScreenData } from "./vibratingScreenData";

export const vibratingFeederData = createProductData({
  slug: "feeders",
  crumb: "Prime Vibrating Feeders",
  eyebrow: "Controlled Feeding",
  title: "VIBRATING",
  highlightedTitle: "FEEDERS",
  subtitle: "Steady Feed. Smooth Operation.",
  description: "Vibrating feeders provide controlled, continuous material flow for crushers and screens, improving plant stability, equipment protection, and production consistency.",
  descriptionHighlight: "controlled, continuous material flow",
  folder: "vibrating-feeder",
  heroImage: "/product-hero/New Prime Feeder.webp",
  heroAlt: "Pithal vibrating feeder feeding rock into a crushing plant",
  machineAlt: "Vibrating feeder machine product view",
  capacity: "50 - 600 TPH",
  feedSize: "Up to 700 mm",
  motorPower: "2 × 0.7 kW to 2 × 7.5 kW",
  applicationValue: "Primary Feeding",
  introTitle: "FEEDS WITH CONTROL.",
  introHighlight: "PROTECTS YOUR PLANT.",
  introDescription: "Pithal Vibrating Feeders are built for uniform material supply, controlled feed rates, and reliable operation before primary crushing and screening stages.",
  specificationTitle: "PRIME VIBRO FEEDERS",
  specificationHighlight: "TECHNICAL DATA",
  specificationSubtitle: "Select the right vibro feeder model for uniform feeding, controlled flow, and crusher protection.",
  specificationColumns: [
    { label: "Model", key: "model", emphasis: "primary" },
    { label: "Feeder Size (W × L)", key: "feederSize" },
    { label: "Capacity (TPH)*", key: "capacity", emphasis: "primary" },
    { label: "Max. Feed Size", key: "maxFeedSize", emphasis: "secondary" },
    { label: "Motor Power", key: "motorPower" },
    { label: "No. of Motors", key: "noOfMotors" },
    { label: "Speed (RPM)", key: "speed" },
    { label: "Approx. Weight", key: "weight" },
  ],
  specificationNote: "*Capacities vary depending on feed gradation, moisture content, bulk density, and feeder inclination.",
  stats: [
    {
      model: "PVF-8016",
      feederSize: "800 × 1600 mm",
      capacity: "50–100 TPH",
      maxFeedSize: "300 mm",
      motorPower: "2 × 0.7 kW (1 HP)",
      noOfMotors: "2",
      speed: "960 RPM",
      weight: "800 kg",
    },
    {
      model: "PVF-8020",
      feederSize: "800 × 2000 mm",
      capacity: "80–150 TPH",
      maxFeedSize: "350 mm",
      motorPower: "2 × 1.47 kW (2 HP)",
      noOfMotors: "2",
      speed: "960 RPM",
      weight: "1.1 Ton",
    },
    {
      model: "PVF-1030",
      feederSize: "1000 × 3000 mm",
      capacity: "120–220 TPH",
      maxFeedSize: "450 mm",
      motorPower: "2 × 2.2 kW (3 HP)",
      noOfMotors: "2",
      speed: "960 RPM",
      weight: "6 Ton",
    },
    {
      model: "PVF-1230",
      feederSize: "1200 × 3000 mm",
      capacity: "180–300 TPH",
      maxFeedSize: "500 mm",
      motorPower: "2 × 2.2 kW (3 HP)",
      noOfMotors: "2",
      speed: "960 RPM",
      weight: "6.5 Ton",
    },
    {
      model: "PVF-1240",
      feederSize: "1200 × 4000 mm",
      capacity: "250–400 TPH",
      maxFeedSize: "600 mm",
      motorPower: "2 × 3.7 kW (5 HP)",
      noOfMotors: "2",
      speed: "960 RPM",
      weight: "7 Ton",
    },
    {
      model: "PVF-1550",
      feederSize: "1500 × 5000 mm",
      capacity: "350–600 TPH",
      maxFeedSize: "700 mm",
      motorPower: "2 × 7.5 kW (10 HP)",
      noOfMotors: "2",
      speed: "960 RPM",
      weight: "9 Ton",
    },
  ],
  specs: [
    { title: "Uniform Feed", text: "Consistent flow improves crusher performance", icon: "feeder" },
    { title: "Adjustable Speed", text: "Control feed rate according to plant demand", icon: "sliders" },
    { title: "Grizzly Section", text: "Scalping bars remove fines before crushing", icon: "layers" },
    { title: "Robust Build", text: "Heavy-duty construction handles large rock feed", icon: "shield" },
  ],
  features: [
    { title: "Consistent Material Flow", description: "Stable feeding reduces crusher surges and interruptions.", icon: "feeder" },
    { title: "Crusher Protection", description: "Controlled flow and scalping reduce impact load.", icon: "shield" },
    { title: "Adjustable Feed Rate", description: "Speed control supports changing production needs.", icon: "sliders" },
    { title: "Heavy-Duty Bed", description: "Strong tray design handles abrasive feed material.", icon: "layers" },
    { title: "Easy Maintenance", description: "Accessible drive and wear surfaces simplify service.", icon: "wrench" },
  ],
  callouts: [
    { label: "Feed Hopper", text: "High-capacity hopper receives blasted rock and raw material", layout: { dotClass: "left-[30%] top-[20%]", cardClass: "left-[1%] top-[2%] w-[168px]" } },
    { label: "Flared Wear Liners", text: "Wear-resistant liners protect hopper from heavy impact", layout: { dotClass: "right-[34%] top-[20%]", cardClass: "right-[1%] top-[2%] w-[168px]" } },
    { label: "Grizzly Scalping Bars", text: "Heavy-duty tapered bars scalp fines before primary crushing", layout: { dotClass: "left-[26%] top-[56%]", cardClass: "left-[1%] top-[48%] w-[168px]" } },
    { label: "Vibration Drive Motor", text: "Twin unbalance motors deliver consistent linear feed motion", layout: { dotClass: "right-[34%] top-[58%]", cardClass: "right-[1%] top-[48%] w-[172px]" } },
    { label: "Heavy-Duty Bed & Springs", text: "Reinforced steel bed with heavy coil isolation springs", layout: { dotClass: "left-[44%] top-[68%]", cardClass: "left-[28%] top-[82%] w-[180px]" } },
  ],
  applications: ["Mining", "Aggregates", "Construction", "Cement", "Recycling"],
  process: defaultProcess,
  related: [commonRelated.jaw, commonRelated.cone, commonRelated.vsi, commonRelated.screen, commonRelated.conveyor],
});

export { conveyorSystemData } from "./conveyorSystemData";

export const completePlantsData = createProductData({
  slug: "complete-plants",
  crumb: "Prime Complete Plants",
  eyebrow: "Turnkey Processing Solutions",
  title: "COMPLETE",
  highlightedTitle: "PLANTS",
  subtitle: "Integrated Systems. Higher Productivity.",
  description: "Complete plants combine crushing, screening, feeding, conveying, and control systems into optimized layouts for dependable production and faster project execution.",
  descriptionHighlight: "optimized layouts",
  folder: "complete-plants",
  heroImage: "/product-hero/COMPLETE PLANT SOLUTIONS banner.webp",
  heroAlt: "Complete crushing and screening plant system",
  machineAlt: "Complete mobile crushing and screening plant product view",
  capacity: "100 - 1200 TPH",
  feedSize: "Custom Feed",
  motorPower: "Plant Based",
  applicationValue: "Turnkey Plants",
  introTitle: "INTEGRATED BY DESIGN.",
  introHighlight: "BUILT FOR OUTPUT.",
  introDescription: "Pithal Complete Plants are engineered as full processing systems, combining the right machines, conveyors, screens, structures, and controls for your application.",
  stats: [
    { model: "PMCP-100", feedOpening: "1 Stage", maxFeedSize: "Custom", capacity: "100 - 200 TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "Compact Plant" },
    { model: "PMCP-250", feedOpening: "2 Stage", maxFeedSize: "Custom", capacity: "200 - 350 TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "Aggregate Plant" },
    { model: "PMCP-500", feedOpening: "3 Stage", maxFeedSize: "Custom", capacity: "350 - 650 TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "High Output Plant" },
    { model: "PMCP-1000", feedOpening: "4 Stage", maxFeedSize: "Custom", capacity: "650 - 1200 TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "Large Processing Plant" },
  ],
  specs: [
    { title: "Turnkey Design", text: "Complete system planned around your material and output", icon: "layout" },
    { title: "Integrated Flow", text: "Crushers, screens, feeders, and conveyors work together", icon: "settings" },
    { title: "Custom Capacity", text: "Configured for project-specific production goals", icon: "gauge" },
    { title: "Full Support", text: "Engineering, installation, and commissioning assistance", icon: "headphones" },
  ],
  features: [
    { title: "Optimized Plant Layout", description: "Integrated flow improves uptime and production balance.", icon: "layout" },
    { title: "Custom Engineering", description: "Designed around material, site layout, and output targets.", icon: "settings" },
    { title: "End-To-End Equipment", description: "Crushing, screening, feeding, conveying, and stockpiling in one system.", icon: "factory" },
    { title: "Scalable Capacity", description: "Plant designs support future expansion and higher output.", icon: "trending" },
    { title: "Project Support", description: "Technical support from selection through commissioning.", icon: "headphones" },
  ],
  callouts: [
    { label: "Primary Stage", text: "Jaw crusher handles large feed material", layout: { dotClass: "left-[30%] top-[26%]", lineClass: "left-[14%] top-[8%] h-[130px] w-[110px] border-b border-l", cardClass: "left-[1%] top-[2%] w-[166px]" } },
    { label: "Secondary Stage", text: "Cone or VSI crusher controls final reduction", layout: { dotClass: "right-[32%] top-[20%]", lineClass: "right-[8%] top-[4%] h-[118px] w-[162px] border-b border-r", cardClass: "right-[1%] top-[2%] w-[166px]" } },
    { label: "Screening Unit", text: "Separates material into required grades", layout: { dotClass: "right-[22%] top-[36%]", lineClass: "right-[8%] top-[30%] h-px w-[96px] border-t", cardClass: "right-[1%] top-[23%] w-[172px]" } },
    { label: "Conveyors", text: "Connect every process stage efficiently", layout: { dotClass: "right-[14%] top-[54%]", lineClass: "right-[8%] top-[48%] h-[48px] w-[40px] border-r border-t", cardClass: "right-[1%] top-[60%] w-[172px]" } },
    { label: "Control Layout", text: "Plant designed for smooth operation and service", layout: { dotClass: "left-[44%] top-[68%]", lineClass: "left-[38%] top-[70%] h-[52px] border-l", cardClass: "left-[26%] top-[78%] w-[176px]" } },
  ],
  applications: ["Mining", "Aggregates", "Infrastructure", "Construction", "Cement"],
  process: defaultProcess,
  related: [commonRelated.jaw, commonRelated.cone, commonRelated.vsi, commonRelated.feeder, commonRelated.screen],
});
