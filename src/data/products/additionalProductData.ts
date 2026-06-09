import type { ProductDetailData, SpecificationRow } from "./productDetailTypes";

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
  heroAlt: string;
  machineAlt: string;
  capacity: string;
  feedSize: string;
  motorPower: string;
  applicationValue: string;
  introTitle: string;
  introHighlight: string;
  introDescription: string;
  stats: SpecificationRow[];
  specs: Array<{ title: string; text: string; icon: string }>;
  features: Array<{ title: string; description: string; icon: string }>;
  callouts: Array<{ label: string; text: string }>;
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
  { label: "Model", key: "model" as const, emphasis: "primary" as const },
  { label: "Feed / Deck Size", key: "feedOpening" as const },
  { label: "Max Feed Size", key: "maxFeedSize" as const, emphasis: "secondary" as const },
  { label: "Capacity", key: "capacity" as const, emphasis: "primary" as const },
  { label: "Motor Power", key: "motorPower" as const },
  { label: "Weight", key: "weight" as const },
  { label: "Application", key: "dimension" as const },
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
        src: `${folderPath}/hero.png`,
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
        src: `${folderPath}/product-review.png`,
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
      title: "BUILT WITH PRECISION.",
      highlight: "DELIVERING PERFORMANCE.",
      subtitle: `Select the right ${config.crumb.toLowerCase()} model for your capacity, feed size, and plant layout.`,
      columns: specificationColumns,
      note: "Specifications are subject to change based on configuration and application.",
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
        phone: "+91 98797 16000",
        email: "info@pithalmachines.com",
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
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
      {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Detailed technical specifications and performance data.",
        image: { src: `${folderPath}/technical-datasheet.svg`, alt: "TECHNICAL DATASHEET" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
      {
      type: "MANUAL",
      title: "OPERATION & MAINTENANCE MANUAL",
      description: "Step-by-step guide for safe operation, maintenance and best practices.",
        image: { src: `${folderPath}/operation-maintenance-manual.svg`, alt: "OPERATION & MAINTENANCE MANUAL" },
      href: "#",
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
    title: "BELT CONVEYOR",
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

export const vsiCrusherData = createProductData({
  slug: "vsi-crushers",
  crumb: "VSI Crushers",
  eyebrow: "Vertical Shaft Impact Crushing",
  title: "VSI",
  highlightedTitle: "CRUSHERS",
  subtitle: "Cubical Shape. Precision Output.",
  description: "VSI crushers are engineered for fine crushing and aggregate shaping, delivering premium cubical product for concrete, road, and manufactured sand applications.",
  descriptionHighlight: "premium cubical product",
  folder: "vsi-crusher",
  heroAlt: "Pithal VSI crusher operating in an aggregate plant",
  machineAlt: "VSI crusher machine product view",
  capacity: "60 - 350 TPH",
  feedSize: "Up to 65 mm",
  motorPower: "75 - 315 kW",
  applicationValue: "M-Sand / Aggregates",
  introTitle: "SHAPES WITH PRECISION.",
  introHighlight: "DELIVERS VALUE.",
  introDescription: "Pithal VSI Crushers combine high-speed impact crushing with robust construction to produce superior particle shape, controlled fines, and reliable throughput.",
  stats: [
    { model: "PMVSI-600", feedOpening: "Rotor 600 mm", maxFeedSize: "35 mm", capacity: "60 - 100 TPH", motorPower: "75 - 110 kW", weight: "8,500 kg", dimension: "M-Sand / Fine Crushing" },
    { model: "PMVSI-800", feedOpening: "Rotor 800 mm", maxFeedSize: "45 mm", capacity: "100 - 180 TPH", motorPower: "132 - 185 kW", weight: "12,500 kg", dimension: "Aggregate Shaping" },
    { model: "PMVSI-1000", feedOpening: "Rotor 1000 mm", maxFeedSize: "55 mm", capacity: "180 - 280 TPH", motorPower: "200 - 250 kW", weight: "17,800 kg", dimension: "High Output Shaping" },
    { model: "PMVSI-1200", feedOpening: "Rotor 1200 mm", maxFeedSize: "65 mm", capacity: "260 - 350 TPH", motorPower: "250 - 315 kW", weight: "23,500 kg", dimension: "Premium Sand Plants" },
  ],
  specs: [
    { title: "Cubical Shape", text: "Optimized impact chamber for superior aggregate shape", icon: "boxes" },
    { title: "High Speed Rotor", text: "Balanced rotor design for consistent impact performance", icon: "settings" },
    { title: "Low Wear Cost", text: "Durable liners and wear parts reduce operating cost", icon: "shield" },
    { title: "Fine Output Control", text: "Ideal for M-Sand and controlled fine aggregate production", icon: "layers" },
  ],
  features: [
    { title: "Superior Shape", description: "Produces cubical aggregate with excellent particle profile.", icon: "boxes" },
    { title: "High Throughput", description: "Efficient rotor design supports consistent plant capacity.", icon: "gauge" },
    { title: "Wear Protection", description: "Protected impact zones help extend part life.", icon: "shield" },
    { title: "Easy Inspection", description: "Service-friendly access improves planned maintenance.", icon: "wrench" },
    { title: "M-Sand Ready", description: "Configured for sand shaping and final aggregate improvement.", icon: "layers" },
  ],
  callouts: [
    { label: "Feed Tube", text: "Controlled feed entry for stable rotor loading" },
    { label: "High-Speed Rotor", text: "Balanced rotor delivers strong impact energy" },
    { label: "Crushing Chamber", text: "Optimized chamber creates cubical output" },
    { label: "Wear Liners", text: "Protected surfaces reduce wear cost" },
    { label: "Discharge Zone", text: "Smooth material exit supports steady output" },
  ],
  applications: ["Aggregates", "Construction", "Infrastructure", "Cement", "Recycling"],
  process: defaultProcess,
  related: [commonRelated.jaw, commonRelated.cone, commonRelated.screen, commonRelated.feeder, commonRelated.conveyor],
});

export const vibratingScreenData = createProductData({
  slug: "vibrating-screens",
  crumb: "Vibrating Screens",
  eyebrow: "Precision Screening",
  title: "VIBRATING",
  highlightedTitle: "SCREENS",
  subtitle: "Accurate Separation. Higher Output.",
  description: "Vibrating screens are designed for accurate material separation, high screening efficiency, and dependable operation in aggregate, mining, recycling, and cement plants.",
  descriptionHighlight: "accurate material separation",
  folder: "vibrating-screen",
  heroAlt: "Pithal vibrating screen in a crushing and screening plant",
  machineAlt: "Vibrating screen machine product view",
  capacity: "100 - 800 TPH",
  feedSize: "Up to 250 mm",
  motorPower: "7.5 - 45 kW",
  applicationValue: "Sizing / Grading",
  introTitle: "SEPARATES WITH ACCURACY.",
  introHighlight: "RUNS WITH RELIABILITY.",
  introDescription: "Pithal Vibrating Screens deliver efficient classification with robust decks, reliable drive systems, and flexible configurations for demanding materials.",
  stats: [
    { model: "PMVS-1548", feedOpening: "1500 x 4800 mm", maxFeedSize: "150 mm", capacity: "100 - 250 TPH", motorPower: "7.5 - 15 kW", weight: "6,500 kg", dimension: "2 / 3 Deck Screening" },
    { model: "PMVS-1860", feedOpening: "1800 x 6000 mm", maxFeedSize: "200 mm", capacity: "220 - 450 TPH", motorPower: "15 - 22 kW", weight: "9,800 kg", dimension: "Aggregate Sizing" },
    { model: "PMVS-2160", feedOpening: "2100 x 6000 mm", maxFeedSize: "250 mm", capacity: "350 - 650 TPH", motorPower: "22 - 37 kW", weight: "13,500 kg", dimension: "High Capacity Screening" },
    { model: "PMVS-2460", feedOpening: "2400 x 6000 mm", maxFeedSize: "250 mm", capacity: "500 - 800 TPH", motorPower: "37 - 45 kW", weight: "17,500 kg", dimension: "Heavy-Duty Screening" },
  ],
  specs: [
    { title: "Accurate Sizing", text: "Deck layouts configured for precise material grades", icon: "target" },
    { title: "Multi Deck Options", text: "Available in single, double, triple, and four deck layouts", icon: "layers" },
    { title: "Strong Exciter", text: "Reliable vibration mechanism for consistent screening", icon: "settings" },
    { title: "Easy Mesh Change", text: "Service-friendly access for faster screen media changes", icon: "wrench" },
  ],
  features: [
    { title: "High Screening Efficiency", description: "Optimized stroke and speed improve material stratification.", icon: "gauge" },
    { title: "Flexible Decks", description: "Multiple deck options suit different product sizes.", icon: "layers" },
    { title: "Robust Structure", description: "Heavy-duty frame handles tough continuous duty.", icon: "shield" },
    { title: "Low Maintenance", description: "Accessible decks and drive parts reduce downtime.", icon: "wrench" },
    { title: "Consistent Grades", description: "Reliable separation helps maintain product quality.", icon: "target" },
  ],
  callouts: [
    { label: "Feed Box", text: "Distributes material evenly across the deck" },
    { label: "Screen Decks", text: "Configurable decks for multiple product sizes" },
    { label: "Vibration Drive", text: "Reliable exciter system creates consistent motion" },
    { label: "Screen Media", text: "Mesh options selected for material and output" },
    { label: "Discharge Chutes", text: "Separate product streams move to stockpiles" },
  ],
  applications: ["Aggregates", "Mining", "Construction", "Recycling", "Cement"],
  process: defaultProcess,
  related: [commonRelated.jaw, commonRelated.cone, commonRelated.vsi, commonRelated.feeder, commonRelated.conveyor],
});

export const vibratingFeederData = createProductData({
  slug: "feeders",
  crumb: "Vibrating Feeders",
  eyebrow: "Controlled Feeding",
  title: "VIBRATING",
  highlightedTitle: "FEEDERS",
  subtitle: "Steady Feed. Smooth Operation.",
  description: "Vibrating feeders provide controlled, continuous material flow for crushers and screens, improving plant stability, equipment protection, and production consistency.",
  descriptionHighlight: "controlled, continuous material flow",
  folder: "vibrating-feeder",
  heroAlt: "Pithal vibrating feeder feeding rock into a crushing plant",
  machineAlt: "Vibrating feeder machine product view",
  capacity: "50 - 800 TPH",
  feedSize: "Up to 800 mm",
  motorPower: "1.5 - 30 kW",
  applicationValue: "Primary Feeding",
  introTitle: "FEEDS WITH CONTROL.",
  introHighlight: "PROTECTS YOUR PLANT.",
  introDescription: "Pithal Vibrating Feeders are built for uniform material supply, controlled feed rates, and reliable operation before primary crushing and screening stages.",
  stats: [
    { model: "PMVF-0936", feedOpening: "900 x 3600 mm", maxFeedSize: "450 mm", capacity: "50 - 150 TPH", motorPower: "1.5 - 5.5 kW", weight: "3,200 kg", dimension: "Small / Medium Plants" },
    { model: "PMVF-1142", feedOpening: "1100 x 4200 mm", maxFeedSize: "600 mm", capacity: "150 - 350 TPH", motorPower: "5.5 - 11 kW", weight: "5,800 kg", dimension: "Primary Feeding" },
    { model: "PMVF-1348", feedOpening: "1300 x 4800 mm", maxFeedSize: "700 mm", capacity: "300 - 550 TPH", motorPower: "11 - 22 kW", weight: "8,900 kg", dimension: "Heavy-Duty Feed" },
    { model: "PMVF-1560", feedOpening: "1500 x 6000 mm", maxFeedSize: "800 mm", capacity: "500 - 800 TPH", motorPower: "22 - 30 kW", weight: "13,500 kg", dimension: "High Capacity Plants" },
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
    { label: "Feed Hopper", text: "Receives blasted rock or raw material" },
    { label: "Grizzly Bars", text: "Scalps fines before primary crushing" },
    { label: "Vibration Drive", text: "Provides controlled material movement" },
    { label: "Wear Liners", text: "Protect tray surfaces from abrasive feed" },
    { label: "Discharge End", text: "Delivers steady feed to the crusher" },
  ],
  applications: ["Mining", "Aggregates", "Construction", "Cement", "Recycling"],
  process: defaultProcess,
  related: [commonRelated.jaw, commonRelated.cone, commonRelated.vsi, commonRelated.screen, commonRelated.conveyor],
});

export const conveyorSystemData = createProductData({
  slug: "conveyor-systems",
  crumb: "Conveyor Systems",
  eyebrow: "Material Handling",
  title: "CONVEYOR",
  highlightedTitle: "SYSTEMS",
  subtitle: "Efficient Transfer. Reliable Flow.",
  description: "Conveyor systems are engineered for efficient material transfer across crushing, screening, washing, and stockpiling operations with robust frames and reliable drives.",
  descriptionHighlight: "efficient material transfer",
  folder: "belt-conveyor",
  heroAlt: "Pithal conveyor system moving aggregate material",
  machineAlt: "Belt conveyor system product view",
  capacity: "50 - 1200 TPH",
  feedSize: "Bulk Material",
  motorPower: "3 - 75 kW",
  applicationValue: "Transfer / Stockpile",
  introTitle: "MOVES MATERIAL.",
  introHighlight: "KEEPS PLANTS RUNNING.",
  introDescription: "Pithal Belt Conveyors are designed for dependable transfer, stockpiling, and inter-stage movement in complete crushing and screening plants.",
  stats: [
    { model: "PMBC-500", feedOpening: "500 mm Belt", maxFeedSize: "Bulk Material", capacity: "50 - 150 TPH", motorPower: "3 - 7.5 kW", weight: "Custom", dimension: "Light Transfer" },
    { model: "PMBC-650", feedOpening: "650 mm Belt", maxFeedSize: "Bulk Material", capacity: "120 - 300 TPH", motorPower: "7.5 - 15 kW", weight: "Custom", dimension: "Aggregate Plants" },
    { model: "PMBC-800", feedOpening: "800 mm Belt", maxFeedSize: "Bulk Material", capacity: "250 - 600 TPH", motorPower: "15 - 37 kW", weight: "Custom", dimension: "Primary Transfer" },
    { model: "PMBC-1000", feedOpening: "1000 mm Belt", maxFeedSize: "Bulk Material", capacity: "500 - 1200 TPH", motorPower: "37 - 75 kW", weight: "Custom", dimension: "High Capacity Stockpile" },
  ],
  specs: [
    { title: "Stable Transfer", text: "Reliable movement between plant stages", icon: "conveyor" },
    { title: "Custom Lengths", text: "Configured to match site layout and stockpile needs", icon: "ruler" },
    { title: "Robust Frame", text: "Heavy-duty structure for continuous operation", icon: "shield" },
    { title: "Efficient Drive", text: "Optimized motor and pulley systems reduce power waste", icon: "zap" },
  ],
  features: [
    { title: "Reliable Material Flow", description: "Keeps crushers and screens supplied with steady transfer.", icon: "conveyor" },
    { title: "Custom Layouts", description: "Designed for plant geometry, elevation, and discharge points.", icon: "ruler" },
    { title: "Heavy-Duty Structure", description: "Strong frames and supports withstand site conditions.", icon: "shield" },
    { title: "Low Maintenance", description: "Accessible rollers and drives support quick inspection.", icon: "wrench" },
    { title: "Efficient Stockpiling", description: "Moves final aggregates cleanly to storage areas.", icon: "boxes" },
  ],
  callouts: [
    { label: "Head Pulley", text: "Reliable drive system for steady belt motion" },
    { label: "Belt System", text: "Durable belt selected for material and capacity" },
    { label: "Idlers", text: "Support rollers maintain smooth movement" },
    { label: "Frame Structure", text: "Strong truss frame supports long spans" },
    { label: "Discharge Point", text: "Optimized transfer into stockpiles or equipment" },
  ],
  applications: ["Aggregates", "Mining", "Construction", "Cement", "Infrastructure"],
  process: defaultProcess,
  related: [commonRelated.jaw, commonRelated.cone, commonRelated.vsi, commonRelated.feeder, commonRelated.screen],
});

export const completePlantsData = createProductData({
  slug: "complete-plants",
  crumb: "Complete Plants",
  eyebrow: "Turnkey Processing Solutions",
  title: "COMPLETE",
  highlightedTitle: "PLANTS",
  subtitle: "Integrated Systems. Higher Productivity.",
  description: "Complete plants combine crushing, screening, feeding, conveying, and control systems into optimized layouts for dependable production and faster project execution.",
  descriptionHighlight: "optimized layouts",
  folder: "complete-plants",
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
    { label: "Primary Stage", text: "Jaw crusher handles large feed material" },
    { label: "Secondary Stage", text: "Cone or VSI crusher controls final reduction" },
    { label: "Screening Unit", text: "Separates material into required grades" },
    { label: "Conveyors", text: "Connect every process stage efficiently" },
    { label: "Control Layout", text: "Plant designed for smooth operation and service" },
  ],
  applications: ["Mining", "Aggregates", "Infrastructure", "Construction", "Cement"],
  process: defaultProcess,
  related: [commonRelated.jaw, commonRelated.cone, commonRelated.vsi, commonRelated.feeder, commonRelated.screen],
});
