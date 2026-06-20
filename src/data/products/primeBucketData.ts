import type { ProductDetailData } from "./productDetailTypes";

export const primeBucketData: ProductDetailData = {
  slug: "prime-bucket",
  images: [
    {
      src: "/primebucket/banner.png",
      alt: "Prime Bucket Crusher™ Hero – excavator-mounted jaw crusher on demolition site",
    },
    {
      src: "/primebucket/overview1.png",
      alt: "Prime Bucket Crusher™ Overview – crusher bucket detail and attachment system",
    },
   
  ],
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "PrimeBucket", href: "/products/prime-bucket" },
    ],
    eyebrow: "PrimeBucket™",
    title: "PRIME",
    highlightedTitle: "BUCKET",
    subtitle: "Crush On Site. Save Time. Reduce Cost.",
    description:
      "Excavator-mounted jaw crusher bucket designed to crush demolition waste, concrete, and natural rock directly on site, reducing transportation and fuel costs.",
    descriptionHighlight: "crush directly on site",
    image: {
      src: "/primebucket/banner.png",
      alt: "Pithal Prime Bucket Crusher™ operating on a demolition site",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
    quickStats: [
      { label: "Fast", value: "Completion", icon: "gauge" },
      { label: "Fuel", value: "Savings", icon: "fuel" },
      { label: "Hardox", value: "Body", icon: "shield" },
      { label: "Hydraulic", value: "Drive", icon: "settings" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "EFFICIENCY AT",
    highlight: "THE SOURCE",
    subtitle:
      "Transform your excavator into a high-performance mobile crushing plant with Prime Bucket Crusher™ technology.",
    ctaText: "Crush On Site. Save Costs. Build Faster.",
  },
  stats: [
    { label: "Production", value: "Up to 150", unit: "TPH", description: "High-volume site crushing", icon: "gauge" },
    { label: "Feed Opening", value: "1500 x 700", unit: "mm (Max)", description: "Handles large debris", icon: "feeder" },
    { label: "Oil Flow", value: "180 - 250", unit: "LPM", description: "Standard excavator circuit", icon: "zap" },
    { label: "Output Size", value: "20 - 100", unit: "mm", description: "Adjustable CSS setting", icon: "layers" },
    { label: "Weight", value: "Up to 3200", unit: "kg", description: "Optimized for stability", icon: "anchor" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "CRUSH ON SITE.",
    highlight: "REDUCE WASTE.",
    description:
      "Pithal Prime Bucket Crusher™ is an excavator-mounted jaw crusher bucket that processes concrete, asphalt, and natural rock on-site. It eliminates the need for material transport to a central plant, significantly reducing fuel and handling costs.",
    image: {
      src: "/primebucket/overview1.png",
      alt: "Prime Bucket Crusher™ excavator attachment system",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "Hydraulic Drive", text: "Direct operation from excavator circuit", icon: "settings" },
      { title: "Hardox Body", text: "High abrasion resistance for long life", icon: "shield" },
      { title: "Adjustable CSS", text: "Control output size from 20mm to 100mm", icon: "layers" },
      { title: "Anti-Jamming", text: "Hydraulic reverse for blockage removal", icon: "wrench" },
    ],
    callouts: [
      { label: "Manganese Jaws", text: "High-grade steel for maximum wear life", position: "leftTop" },
      { label: "Reversible Jaws", text: "Increased operating life and lower cost", position: "rightTop" },
      { label: "Wear Chamber", text: "Optimized geometry for faster crushing", position: "rightMiddle" },
      { label: "Universal Hitch", text: "Easy mounting on standard excavators", position: "rightBottom" },
      { label: "Heavy Duty Drive", text: "No separate engine required for power", position: "bottomCenter" },
    ],
    applications: {
      eyebrow: "Applications",
      description:
        "Ideal for demolition, infrastructure projects, and space-constrained recycling sites.",
      items: [
        { label: "C&D Waste Recycling", icon: "recycle" },
        { label: "Road Reconstruction", icon: "construction" },
        { label: "Mining & Quarrying", icon: "pickaxe" },
        { label: "Smart City Projects", icon: "factory" },
        { label: "Concrete Recycling", icon: "layers" },
      ],
    },
  },
  performanceSection: {
    eyebrow: "Customer Benefits",
    title: "SAVE TIME.",
    highlight: "REDUCE COST.",
    subtitle:
      "Maximize your project's ROI by eliminating unnecessary transportation and handling.",
  },
  performanceFeatures: [
    { title: "Cost Savings", description: "Lower transportation and diesel consumption by crushing at the source.", icon: "handCoins" },
    { title: "Revenue Generation", description: "Sell recycled aggregates or reuse crushed concrete immediately.", icon: "trending" },
    { title: "Faster Completion", description: "Reduced material handling speeds up project timelines.", icon: "clock" },
    { title: "Environmental", description: "Lower carbon emissions and less landfill waste production.", icon: "mountain" },
    { title: "Sustainable", description: "Promotes circular economy through on-site recycling.", icon: "recycle" },
  ],
  specificationsSection: {
    eyebrow: "Technical Data",
    title: "BUILT FOR",
    highlight: "THE TOUGHEST JOBS.",
    subtitle:
      "Explore our range of excavator-mounted crusher buckets for various machine sizes.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Excavator Size", key: "excavatorSize" },
      { label: "Bucket Capacity", key: "bucketCapacity", emphasis: "secondary" },
      { label: "Feed Opening", key: "feedOpening" },
      { label: "Production", key: "production", emphasis: "primary" },
    ],
    note: "Production data varies based on material hardness and moisture content.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    { model: "PB70", excavatorSize: "8 - 12 Ton", bucketCapacity: "0.30 m³", feedOpening: "700 x 450 mm", production: "15 - 35 TPH" },
    { model: "PB90", excavatorSize: "12 - 20 Ton", bucketCapacity: "0.55 m³", feedOpening: "900 x 500 mm", production: "25 - 60 TPH" },
    { model: "PB120", excavatorSize: "20 - 35 Ton", bucketCapacity: "0.80 m³", feedOpening: "1200 x 550 mm", production: "50 - 100 TPH" },
    { model: "PB150", excavatorSize: "35 - 50 Ton", bucketCapacity: "1.20 m³", feedOpening: "1500 x 700 mm", production: "80 - 150 TPH" },
  ],
  industriesSection: {
    eyebrow: "Market Sectors",
    title: "VERSATILE",
    highlight: "CRUSHING SOLUTIONS.",
    subtitle:
      "Engineered for flexibility across construction, demolition, and infrastructure projects.",
  },
  industries: [
    { title: "Construction", description: "RCC Demolition, Building Recycling, and Road Reconstruction.", image: { src: "/images/industries/construction.jpg", alt: "Construction site recycling" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Infrastructure", description: "Highways, Railways, Metro, and Smart City Projects.", image: { src: "/images/industries/infrastructure.jpg", alt: "Infrastructure project site" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Mining", description: "Limestone, Granite, Basalt, and Marble waste processing.", image: { src: "/images/industries/mining.jpg", alt: "Quarry waste handling" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "Sustainable processing of asphalt and concrete debris.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling facility" }, icon: "recycle", href: "#", actionLabel: "Explore" },
    { title: "Aggregates", description: "On-site aggregate production for roads, backfilling, and drainage.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregate production from crushed material" }, icon: "mountain", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Principle",
    title: "HOW IT",
    highlight: "WORKS.",
    subtitle:
      "Simple, efficient, and direct material processing using your excavator's hydraulic power.",
  },
  processSteps: [
    {
      number: "01",
      title: "Material Pick",
      description: "Excavator bucket picks material from the site directly.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Picking material" },
    },
    {
      number: "02",
      title: "Chamber Feed",
      description: "Material is fed into the integrated crushing chamber.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Feeding chamber" },
    },
    {
      number: "03",
      title: "Jaw Crushing",
      description: "Heavy-duty jaw plates crush material to desired size.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/secondary-crusher.png", alt: "Crushing process" },
    },
    {
      number: "04",
      title: "Discharge",
      description: "Crushed material is discharged from the bottom.",
      iconFile: "final-output.png",
      image: { src: "/images/process/final-output.png", alt: "Discharging material" },
    },
    {
      number: "05",
      title: "Direct Reuse",
      description: "Recycled aggregate is ready for immediate reuse on-site.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Site reuse" },
    },
  ],
  videoSection: {
    eyebrow: "PERFORMANCE VIDEO",
    title: "SITE CRUSHING.",
    highlight: "SIMPLIFIED.",
    description:
      "Watch Prime Bucket Crusher™ transform demolition waste into valuable aggregates in seconds.",
    points: [
      "No Transport Needed",
      "Hydraulic Reverse Function",
      "Direct On-Site Recycling",
      "Reduced Fuel Costs",
    ],
    features: [
      {
        title: "No Transport",
        description: "Eliminate trucking costs and logistics headaches.",
        icon: "gauge",
      },
      {
        title: "Hydraulic Reverse",
        description: "Fast blockage removal for continuous operation.",
        icon: "shield",
      },
      {
        title: "Site Recycling",
        description: "Promote sustainability and circular economy.",
        icon: "settings",
      },
      {
        title: "Reduced Costs",
        description: "Lower manpower and equipment requirements.",
        icon: "handCoins",
      },
    ],
    thumbnail: {
      src: "/primebucket/video-showcase.png",
      alt: "Prime Bucket Crusher™ performance video thumbnail",
    },
    caption: "DEMOLITION SITE RECYCLING",
    subCaption: "Crush, recycle, and reuse on the spot.",
    duration: "1:30",
    button: { label: "WATCH DEMO VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "FUTURE ATTACHMENTS",
    title: "EXPAND YOUR",
    highlight: "FLEET CAPABILITY.",
    subtitle:
      "Explore upcoming Prime Series attachments for your excavator.",
  },
  relatedMachines: [
    { title: "PRIMESCREEN™", description: "Screening bucket for accurate material separation.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Screening Bucket" }, category: "Screening", icon: "screen", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMESORT™", description: "Sorting grapple for efficient demolition management.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Sorting Grapple" }, category: "Sorting", icon: "layers", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMEPULVERIZER™", description: "Secondary processing for concrete and rebar.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Pulverizer" }, category: "Recycling", icon: "settings", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMESHEAR™", description: "Heavy-duty steel and rebar cutting attachment.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "Shear" }, category: "Demolition", icon: "shield", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMEDRUM™", description: "Rotary screening bucket for topsoil and aggregates.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Rotary Drum" }, category: "Screening", icon: "layers", href: "#", actionLabel: "COMING SOON" },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST EXPERT ADVICE",
    title: "REDUCE COSTS ON",
    highlight: "YOUR NEXT SITE.",
    description:
      "Tell us your excavator model and site requirements, and we'll recommend the best Prime Bucket Crusher™ for you.",
    image: {
      src: "/images/products/jaw-crusher/contact-us.png",
      alt: "On-site crushing consultation",
    },
    benefits: [
      { title: "LOCAL MANUFACTURING", text: "Fast delivery and easy spare parts access.", icon: "settings" },
      { title: "SITE ANALYSIS", text: "Custom advice on recycling your specific waste.", icon: "clipboard" },
      { title: "ROI CALCULATION", text: "See exactly how much you can save per TPH.", icon: "trending" },
      { title: "END TO END SUPPORT", text: "Training for your operators and maintenance.", icon: "headphones" },
    ],
    contactStrip: {
      phone: "+91 98797 16000",
      email: "info@pithalmachines.com",
    },
    form: {
      title: "REQUEST CONSULTATION",
      fields: [
        { label: "FULL NAME", name: "name", type: "text", placeholder: "Enter your full name" },
        { label: "EXCAVATOR MODEL", name: "excavator", type: "text", placeholder: "e.g. Tata Hitachi EX210" },
        { label: "CITY / STATE", name: "location", type: "text", placeholder: "Enter your location" },
      ],
      dropdown: {
        label: "MAIN APPLICATION",
        name: "application",
        options: ["Concrete Recycling", "Road Demolition", "Quarry Waste", "Other Applications"],
      },
      textarea: {
        label: "SPECIFIC REQUIREMENTS",
        name: "message",
        placeholder: "Tell us about your project requirements...",
      },
      button: "GET EXPERT ADVICE",
    },
  },
  resourcesSection: {
    id: "resources",
    eyebrow: "Downloads",
    title: "LEARN MORE",
    highlight: "ABOUT Prime Bucket Crusher™.",
    subtitle:
      "Download our brochures and technical guides to start saving on your project today.",
    supportCta: { label: "REQUEST BROCHURE", href: "#", variant: "primary", icon: "arrow" },
  },
  resources: [
    {
      type: "PDF",
      title: "PRODUCT BROCHURE",
      description: "Overview of site crushing benefits and model range.",
      image: { src: "/images/products/jaw-crusher/product-brochure.png", alt: "PRODUCT BROCHURE" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Detailed hydraulic requirements and dimensions.",
      image: { src: "/images/products/jaw-crusher/technical-datasheet.png", alt: "TECHNICAL DATASHEET" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "OPERATOR MANUAL",
      description: "Best practices for installation and efficient operation.",
      image: { src: "/images/products/jaw-crusher/operation-maintanance-manual.png", alt: "OPERATOR MANUAL" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "FAST DELIVERY", text: "Local manufacturing ensures short lead times.", icon: "clock" },
    { title: "SPARES SUPPORT", text: "Ready stock of jaw plates and seal kits.", icon: "shield" },
    { title: "ON-SITE TRAINING", text: "We help your team master site crushing.", icon: "target" },
    { title: "24/7 HELPLINE", text: "Technical support for excavator hydraulic questions.", icon: "headphones" },
  ],
};

export type PrimeBucketData = ProductDetailData;
