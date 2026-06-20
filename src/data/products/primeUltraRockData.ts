import type { ProductDetailData } from "./productDetailTypes";

export const primeUltraRockData: ProductDetailData = {
  slug: "prime-ultrarock",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "Prime UltraRock", href: "/products/prime-ultrarock" },
    ],
    eyebrow: "Prime UltraRock",
    title: "PRIME",
    highlightedTitle: "ULTRAROCK",
    subtitle: "Ultimate Power. Unmatched Durability.",
    description:
      "Next-generation primary crushing solution engineered for higher throughput, superior reduction ratio, and lower operating costs in mining and quarrying.",
    descriptionHighlight: "higher throughput and superior reduction",
    image: {
      src: "/ultrarock/heroprime.png",
      alt: "Pithal Prime UltraRock high-capacity primary crusher",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
    quickStats: [
      { label: "High", value: "Throughput", icon: "gauge" },
      { label: "Compact", value: "Footprint", icon: "layers" },
      { label: "Smart", value: "Automation", icon: "settings" },
      { label: "Hydraulic", value: "Maintenance", icon: "wrench" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "PERFORMANCE IN",
    highlight: "EVERY DETAIL",
    subtitle:
      "Advanced primary crushing technology designed for the most demanding mining operations globally.",
    ctaText: "Built for Performance. Engineered for Results.",
  },
  stats: [
    { label: "Capacity", value: "Up to 2500", unit: "TPH", description: "Extreme high-volume range", icon: "gauge" },
    { label: "Max Feed", value: "Up to 1100", unit: "mm", description: "Handles massive rock feed", icon: "feeder" },
    { label: "Motor Power", value: "Up to 400", unit: "kW", description: "Powerful drive options", icon: "zap" },
    { label: "Reduction Ratio", value: "7:1", unit: "Ratio", description: "Superior crushing efficiency", icon: "trending" },
    { label: "Maintenance", value: "Hydraulic", unit: "System", description: "Safe and fast servicing", icon: "settings" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "NEXT-GEN.",
    highlight: "PRIMARY CRUSHING.",
    description:
      "Prime UltraRock is engineered for mining, quarrying, cement, and aggregate applications. It focuses on high throughput, compact footprint, and smart automation to deliver lower operating costs compared to conventional crushers.",
    image: {
      src: "/ultrarock/primeultravideo.png",
      alt: "Prime UltraRock advanced primary crusher machine",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "High Throughput", text: "Optimized for maximum material processing", icon: "gauge" },
      { title: "Compact Design", text: "Lower civil and installation costs", icon: "layers" },
      { title: "Hydraulic Safety", text: "Protection against tramp iron and overloads", icon: "shield" },
      { title: "Smart Automation", text: "PITHAL SMART CRUSH™ for remote diagnostics", icon: "settings" },
    ],
    callouts: [
      { label: "High Stroke", text: "Constant high stroke for better feed acceptance", position: "leftTop" },
      { label: "Integrated Scalper", text: "Removes fines before crushing to reduce wear", position: "rightTop" },
      { label: "Hydraulic CSS", text: "Automatic adjustment for consistent output", position: "rightMiddle" },
      { label: "Predictive Maint.", text: "Sensors for liner wear and vibration monitoring", position: "rightBottom" },
      { label: "Robust Frame", text: "Designed for underground and space-constrained mines", position: "bottomCenter" },
    ],
    applications: {
      eyebrow: "Target Industries",
      description:
        "Ideal for processing hard rock, ores, and large size materials across various industrial sectors.",
      items: [
        { label: "Mining (Iron, Copper, Gold)", icon: "pickaxe" },
        { label: "Aggregates (Granite, Basalt)", icon: "mountain" },
        { label: "Cement (Limestone)", icon: "factory" },
        { label: "Infrastructure (Road/Rail)", icon: "construction" },
        { label: "Coal Processing", icon: "layers" },
      ],
    },
  },
  performanceSection: {
    eyebrow: "Core Advantages",
    title: "ENGINEERED FOR",
    highlight: "HIGH EFFICIENCY",
    subtitle:
      "Advanced systems designed to maximize productivity while minimizing downtime.",
  },
  performanceFeatures: [
    { title: "Constant High Stroke", description: "Maintains aggressive crushing action throughout the chamber for higher reduction.", icon: "target" },
    { title: "Hydraulic Overload", description: "Automatic release mechanism protects the crusher from tramp iron.", icon: "shield" },
    { title: "Integrated Scalping", description: "Improves efficiency by removing fines and reducing energy consumption.", icon: "gauge" },
    { title: "Smart Automation", description: "CSS adjustment, capacity monitoring, and predictive maintenance via SMART CRUSH™.", icon: "settings" },
    { title: "Compact Footprint", description: "Reduced structural steel and easier installation in constrained spaces.", icon: "layers" },
  ],
  specificationsSection: {
    eyebrow: "Technical Data",
    title: "BUILT WITH PRECISION.",
    highlight: "DELIVERING PERFORMANCE.",
    subtitle:
      "Select the right Prime UltraRock model for your large-scale mining and aggregate operations.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Feed Opening", key: "feedOpening" },
      { label: "Max Feed Size", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Capacity", key: "capacity", emphasis: "primary" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Weight", key: "weight" },
      { label: "Reduction Ratio", key: "reductionRatio" },
    ],
    note: "Specifications are subject to change based on configuration and application.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    { model: "TJ1200", feedOpening: "1200 x 900 mm", maxFeedSize: "750 mm", capacity: "600 - 900 TPH", motorPower: "185 KW", weight: "47 Ton", reductionRatio: "6:1" },
    { model: "TJ1400", feedOpening: "1400 x 1100 mm", maxFeedSize: "950 mm", capacity: "1000 - 1600 TPH", motorPower: "250 KW", weight: "87 Ton", reductionRatio: "7:1" },
    { model: "TJ1600", feedOpening: "1600 x 1200 mm", maxFeedSize: "1100 mm", capacity: "1800 - 2500 TPH", motorPower: "400 KW", weight: "147 Ton", reductionRatio: "7:1" },
  ],
  industriesSection: {
    eyebrow: "Applications",
    title: "BUILT FOR",
    highlight: "EVERY INDUSTRY.",
    subtitle:
      "Prime UltraRock solutions engineered for high-capacity primary applications.",
  },
  industries: [
    { title: "Mining", description: "Iron Ore, Copper Ore, Gold Ore, and Zinc Ore processing.", image: { src: "/images/industries/mining.jpg", alt: "Mining site with crushing equipment" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Aggregates", description: "Granite, Basalt, Gabbro, and Quartzite reduction.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregate quarry conveyors and stockpiles" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Limestone and Dolomite preparation for cement plants.", image: { src: "/images/industries/cement.jpg", alt: "Cement industry processing plant" }, icon: "factory", href: "#", actionLabel: "Explore" },
    { title: "Infrastructure", description: "Road Projects, Railway Projects, and Smart Cities.", image: { src: "/images/industries/construction.jpg", alt: "Construction site with industrial equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "C&D Waste, Concrete Recycling, and Reclaimed Aggregate production.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling facility with crushed material" }, icon: "recycle", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Process",
    title: "ADVANCED",
    highlight: "CRUSHING FLOW.",
    subtitle:
      "Integrated systems that maximize throughput while protecting the machine from wear and overloads.",
  },
  processSteps: [
    {
      number: "01",
      title: "Material Input",
      description: "Raw material is fed into the compact plant design.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Raw material entering Prime UltraRock" },
    },
    {
      number: "02",
      title: "Integrated Scalping",
      description: "Fines are removed before crushing to improve efficiency.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Scalping stage" },
    },
    {
      number: "03",
      title: "Primary Crushing",
      description: "Aggressive nip angle reduces rocks with high reduction ratio.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Crushing stage" },
    },
    {
      number: "04",
      title: "Smart Monitoring",
      description: "SMART CRUSH™ monitors CSS, liners, and vibration.",
      iconFile: "final-output.png",
      image: { src: "/images/process/final-output.png", alt: "Automation monitoring" },
    },
    {
      number: "05",
      title: "Hydraulic Adjustment",
      description: "Fast setting control and overload protection release.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/secondary-crusher.png", alt: "Hydraulic control" },
    },
  ],
  videoSection: {
    eyebrow: "VIDEO SHOWCASE",
    title: "SEE PERFORMANCE.",
    highlight: "IN ACTION.",
    description:
      "Watch Prime UltraRock deliver extreme high capacity and superior reduction in a large mining environment.",
    points: [
      "High Throughput",
      "Hydraulic Overload Safety",
      "Smart Automation",
      "Compact Installation",
    ],
    features: [
      {
        title: "High Throughput",
        description: "Built for extreme mining and aggregate capacity.",
        icon: "gauge",
      },
      {
        title: "Hydraulic Safety",
        description: "Automatic release against tramp iron.",
        icon: "shield",
      },
      {
        title: "Smart Automation",
        description: "Remote diagnostics and predictive maintenance.",
        icon: "settings",
      },
      {
        title: "Compact Design",
        description: "Lower installation and civil costs.",
        icon: "layers",
      },
    ],
    thumbnail: {
      src: "/ultrarock/primeultrarock2.png",
      alt: "Prime UltraRock performance showcase video thumbnail",
      
    },
    caption: "LARGE MINING OPERATION",
    subCaption: "Explore the next generation of primary crushing.",
    duration: "2:30",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "RELATED PRODUCTS",
    title: "COMPLETE YOUR",
    highlight: "CRUSHING SOLUTION.",
    subtitle:
      "High-performance equipment designed to work seamlessly with Prime UltraRock.",
  },
  relatedMachines: [
    { title: "CONE CRUSHER", description: "High-efficiency secondary crushing with excellent particle shape.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Cone Crusher" }, category: "Secondary", icon: "cone", href: "/products/cone-crushers", actionLabel: "VIEW DETAILS" },
    { title: "VSI CRUSHER", description: "Advanced crushing technology for superior cubical shape and reliability.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "VSI Crusher" }, category: "Crushing", icon: "vsi", href: "/products/vsi-crushers", actionLabel: "VIEW DETAILS" },
    { title: "VIBRATING FEEDER", description: "Consistent and controlled material feeding for smooth plant operation.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Vibrating Feeder" }, category: "Feeding", icon: "feeder", href: "/products/feeders", actionLabel: "VIEW DETAILS" },
    { title: "VIBRATING SCREEN", description: "High-performance screening for accurate size separation and higher output.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Vibrating Screen" }, category: "Screening", icon: "screen", href: "/products/vibrating-screens", actionLabel: "VIEW DETAILS" },
    { title: "BELT CONVEYOR", description: "Efficient material handling with robust design and long service life.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Belt Conveyor" }, category: "Conveying", icon: "conveyor", href: "/products/conveyor-systems", actionLabel: "VIEW DETAILS" },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST CONSULTATION",
    title: "LET'S BUILD THE RIGHT",
    highlight: "SOLUTION FOR YOU.",
    description:
      "Share your mining or aggregate requirements and our experts will recommend the best Prime UltraRock solution.",
    image: {
      src: "/images/products/jaw-crusher/contact-us.png",
      alt: "Mining plant consultation support",
    },
    benefits: [
      { title: "EXPERT CONSULTATION", text: "Get the right solution from industry experts.", icon: "settings" },
      { title: "TAILORED RECOMMENDATION", text: "Custom advice based on your material and goals.", icon: "clipboard" },
      { title: "PREDICTIVE MAINTENANCE", text: "Maximize productivity and reduce downtime.", icon: "trending" },
      { title: "GLOBAL SUPPORT", text: "Remote diagnostics and technical service.", icon: "headphones" },
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
        placeholder: "Enter required capacity (TPH)\ne.g. 1000 - 2500 TPH",
      },
      button: "REQUEST CONSULTATION",
    },
  },
  resourcesSection: {
    id: "resources",
    eyebrow: "Downloads",
    title: "RESOURCES TO",
    highlight: "SUPPORT YOUR SUCCESS.",
    subtitle:
      "Access detailed brochures and technical catalogues for Prime UltraRock primary crushers.",
    supportCta: { label: "REQUEST DOCUMENT", href: "#", variant: "primary", icon: "arrow" },
  },
  resources: [
    {
      type: "PDF",
      title: "PRODUCT BROCHURE",
      description: "Comprehensive overview of Prime UltraRock features and benefits.",
      image: { src: "/images/products/jaw-crusher/product-brochure.png", alt: "PRODUCT BROCHURE" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Detailed technical specifications and range performance data.",
      image: { src: "/images/products/jaw-crusher/technical-datasheet.png", alt: "TECHNICAL DATASHEET" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "OPERATION & MAINTENANCE MANUAL",
      description: "Step-by-step guide for safe operation and hydraulic maintenance.",
      image: { src: "/images/products/jaw-crusher/operation-maintanance-manual.png", alt: "OPERATION & MAINTENANCE MANUAL" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "SMART DIAGNOSTICS", text: "Remote monitoring for proactive support.", icon: "shield" },
    { title: "EASY ACCESS", text: "Instant technical downloads anytime.", icon: "clipboard" },
    { title: "HYDRAULIC SAFETY", text: "Fast and safe maintenance procedures.", icon: "target" },
    { title: "EXPERT SUPPORT", text: "Our team is here for large-scale mining projects.", icon: "headphones" },
  ],
};

export type PrimeUltraRockData = ProductDetailData;
