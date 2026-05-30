import type { ProductDetailData } from "./productDetailTypes";

export const coneCrusherData: ProductDetailData = {
  slug: "cone-crushers",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "Cone Crushers", href: "/products/cone-crushers" },
    ],
    eyebrow: "Secondary & Tertiary Crushing",
    title: "CONE",
    highlightedTitle: "CRUSHERS",
    subtitle: "High Efficiency. Excellent Product Shape.",
    description:
      "Cone crushers are designed for secondary and tertiary crushing applications, delivering high reduction ratio, uniform product size, hydraulic adjustment, and stable performance for mining, aggregates, cement, and infrastructure industries.",
    descriptionHighlight: "secondary and tertiary crushing",
    image: {
      src: "/images/products/cone-crusher/hero.png",
      alt: "Pithal cone crusher operating in a quarry crushing plant",
    },
    ctas: [
      { label: "Download Brochure", href: "#resources", variant: "primary", icon: "download" },
      { label: "Get Consultation", href: "#contact", variant: "outlineOrange", icon: "headphones" },
    ],
    quickStats: [
      { label: "100 - 450", value: "TPH Capacity", icon: "gauge" },
      { label: "185 - 300", value: "MM Feed Size", icon: "ruler" },
      { label: "132 - 400", value: "KW Motor Power", icon: "zap" },
      { label: "Secondary / Tertiary", value: "Crushing", icon: "cone" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "PERFORMANCE IN",
    highlight: "EVERY DETAIL",
    subtitle:
      "Engineered for high crushing efficiency, uniform output size, and reliable operation.",
    ctaText: "Built for Performance. Engineered for Results.",
    cta: { label: "Talk to Technical Expert", href: "#contact", variant: "primary", icon: "arrow" },
  },
  stats: [
    { label: "Capacity", value: "100 - 450", unit: "TPH", description: "High output secondary crushing", icon: "gauge" },
    { label: "Max Feed Size", value: "185 - 300", unit: "MM", description: "Handles controlled feed sizes", icon: "feeder" },
    { label: "Motor Power", value: "132 - 400", unit: "KW", description: "Efficient drive power range", icon: "zap" },
    { label: "Cone Type", value: "STD / SH", unit: "", description: "Standard and short-head options", icon: "cone" },
    { label: "Application", value: "Mining, Aggregates, Cement", unit: "", description: "", icon: "boxes" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "BUILT FOR PRECISION.",
    highlight: "CRUSHES WITH POWER.",
    description:
      "Pithal Cone Crushers are engineered for high reduction ratio, excellent particle shape, and consistent performance in demanding secondary and tertiary crushing operations. Built with a robust frame, hydraulic adjustment, and wear-resistant liners, these machines deliver long-term productivity with reduced downtime.",
    image: {
      src: "/images/products/cone-crusher/main-machine.png",
      alt: "Cone crusher machine with technical part callouts",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "High Reduction Ratio", text: "Optimized chamber geometry for stronger size reduction", icon: "gauge" },
      { title: "Uniform Product Size", text: "Consistent cubical output for aggregate applications", icon: "boxes" },
      { title: "Hydraulic Adjustment", text: "Fast CSS setting control for flexible operation", icon: "sliders" },
      { title: "Stable Performance", text: "Smooth crushing behavior under heavy-duty load", icon: "trending" },
      { title: "Heavy-Duty Main Frame", text: "Robust structure for long operating life", icon: "shield" },
      { title: "Wear-Resistant Liners", text: "Durable mantle and concave for longer service cycles", icon: "layers" },
      { title: "Low Operating Cost", text: "Efficient power use with strong production output", icon: "handCoins" },
      { title: "Easy Maintenance", text: "Service-friendly access for inspection and liner changes", icon: "wrench" },
    ],
    callouts: [
      { label: "Hydraulic Adjustment System", text: "Quick setting control for consistent product size", position: "leftTop" },
      { label: "Heavy-Duty Crushing Chamber", text: "Optimized chamber profile for high reduction ratio", position: "rightTop" },
      { label: "Mantle & Concave", text: "Wear-resistant liners for long service life", position: "rightMiddle" },
      { label: "Drive System", text: "High-performance drive for stable crushing output", position: "rightBottom" },
      { label: "Stable Base Frame", text: "Reinforced frame for vibration control and durability", position: "bottomCenter" },
      { label: "Inspection Access", text: "Easy service access for maintenance and uptime", position: "leftBottom" },
    ],
    applications: {
      eyebrow: "Applications",
      description:
        "Ideal for secondary and tertiary crushing of hard rock, ore, limestone, and aggregates. Widely used in mining, quarrying, cement, and construction plants.",
      items: [
        { label: "Mining", icon: "basket" },
        { label: "Aggregates", icon: "mountain" },
        { label: "Construction", icon: "building" },
        { label: "Cement", icon: "factory" },
        { label: "Recycling", icon: "recycle" },
      ],
    },
  },
  performanceSection: {
    eyebrow: "Core Advantages",
    title: "ENGINEERED FOR",
    highlight: "SUPERIOR PERFORMANCE",
    subtitle:
      "Cone crusher systems engineered for controlled output, stable operation, and reliable secondary or tertiary reduction.",
  },
  performanceFeatures: [
    { title: "High Crushing Efficiency", description: "Optimized chamber geometry delivers maximum reduction with controlled output.", icon: "gauge" },
    { title: "Uniform Product Shape", description: "Produces consistent cubical material suitable for aggregates and construction.", icon: "boxes" },
    { title: "Hydraulic Adjustment", description: "Quick CSS setting adjustment improves operational flexibility and uptime.", icon: "sliders" },
    { title: "Stable Performance", description: "Robust design ensures smooth operation even in heavy-duty applications.", icon: "shield" },
    { title: "Low Maintenance", description: "Easy access and durable liners help reduce maintenance downtime.", icon: "wrench" },
  ],
  specificationsSection: {
    eyebrow: "Technical Data",
    title: "BUILT WITH PRECISION.",
    highlight: "DELIVERING PERFORMANCE.",
    subtitle:
      "Select the right cone crusher model for feed size, capacity, cone type, and final output requirement.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Cone Type", key: "feedOpening" },
      { label: "Max Feed Size (MM)", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Capacity (TPH)", key: "capacity", emphasis: "primary" },
      { label: "Motor Power (KW)", key: "motorPower" },
      { label: "Weight (KG)", key: "weight" },
      { label: "Application", key: "dimension" },
    ],
    note: "Specifications are subject to change based on configuration and application.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    { model: "PMCC-150", feedOpening: "STD", maxFeedSize: "185", capacity: "100 - 150", motorPower: "132 - 160", weight: "12000", dimension: "Secondary Crushing" },
    { model: "PMCC-200", feedOpening: "STD", maxFeedSize: "215", capacity: "150 - 250", motorPower: "160 - 220", weight: "18500", dimension: "Secondary Crushing" },
    { model: "PMCC-300", feedOpening: "STD", maxFeedSize: "265", capacity: "220 - 350", motorPower: "220 - 315", weight: "26500", dimension: "Secondary / Tertiary" },
    { model: "PMCC-400", feedOpening: "STD", maxFeedSize: "300", capacity: "350 - 450", motorPower: "315 - 400", weight: "38500", dimension: "Heavy-Duty Crushing" },
  ],
  industriesSection: {
    eyebrow: "Applications",
    title: "BUILT FOR",
    highlight: "EVERY INDUSTRY.",
    subtitle:
      "Cone crushing solutions engineered for secondary and tertiary applications across demanding industries.",
  },
  industries: [
    { title: "Mining", description: "Reliable secondary crushing for hard rock and mineral processing.", image: { src: "/images/industries/mining.jpg", alt: "Mining site with crushing equipment" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Aggregates", description: "Produces uniform cubical aggregates for road and concrete applications.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregate quarry conveyors and stockpiles" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Efficient crushing of limestone and raw material for cement plants.", image: { src: "/images/industries/cement.jpg", alt: "Cement industry processing plant" }, icon: "factory", href: "#", actionLabel: "Explore" },
    { title: "Construction", description: "Supports infrastructure projects with consistent output material.", image: { src: "/images/industries/construction.jpg", alt: "Construction site with industrial equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "Suitable for processing recycled construction and demolition materials.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling facility material processing" }, icon: "recycle", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Process",
    title: "FROM ROCK TO",
    highlight: "RESULTS.",
    subtitle:
      "A controlled crushing flow designed to deliver high reduction, uniform shape, and classified final aggregates.",
  },
  processSteps: [
    {
      number: "01",
      title: "Raw Material Feed",
      description: "Material is loaded into the crushing circuit through feeder and conveyor system.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Raw material feed entering a crushing circuit" },
    },
    {
      number: "02",
      title: "Primary Crushing",
      description: "Large rocks are first reduced by primary crusher before cone crushing.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Primary crushing stage before cone crushing" },
    },
    {
      number: "03",
      title: "Cone Crushing",
      description: "Cone crusher reduces material to required size with high efficiency and uniform shape.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/cone.png", alt: "Cone crushing stage in a crushing plant" },
    },
    {
      number: "04",
      title: "Screening",
      description: "Vibrating screen separates material into required output sizes.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Screening stage separating aggregate sizes" },
    },
    {
      number: "05",
      title: "Final Aggregates",
      description: "Finished material is ready for mining, construction, cement, or aggregate use.",
      iconFile: "final-output.png",
      image: { src: "/images/process/final-output.png", alt: "Final aggregate output stockpile" },
    },
  ],
  videoSection: {
    eyebrow: "VIDEO SHOWCASE",
    title: "SEE PERFORMANCE.",
    highlight: "IN ACTION.",
    description:
      "Watch how Pithal Cone Crushers deliver stable crushing performance, high throughput, and uniform product shape in demanding plant conditions.",
    points: [
      "High reduction ratio",
      "Uniform cubical output",
      "Smooth hydraulic adjustment",
      "Reliable heavy-duty operation",
    ],
    features: [
      {
        title: "High Reduction Ratio",
        description: "Efficient chamber geometry for controlled secondary crushing.",
        icon: "settings",
      },
      {
        title: "Uniform Cubical Output",
        description: "Consistent product shape for aggregate and construction needs.",
        icon: "shield",
      },
      {
        title: "Smooth Hydraulic Adjustment",
        description: "Fast CSS control helps maintain uptime and output quality.",
        icon: "wrench",
      },
      {
        title: "Reliable Heavy-Duty Operation",
        description: "Stable performance in tough plant conditions.",
        icon: "trending",
      },
    ],
    thumbnail: {
      src: "/images/products/cone-crusher/performance-video.jpg",
      alt: "Cone crusher performance video thumbnail",
    },
    caption: "FULL MACHINE DEMONSTRATION",
    subCaption: "Explore every detail of our cone crusher performance.",
    duration: "1:45",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "RELATED PRODUCTS",
    title: "COMPLETE YOUR",
    highlight: "CRUSHING SOLUTION.",
    subtitle:
      "Explore machines designed to work seamlessly with cone crushers for feeding, primary crushing, screening, conveying, and final plant output.",
  },
  relatedMachines: [
    { title: "JAW CRUSHER", description: "Heavy-duty primary crushing for hard rock and large feed material.", image: { src: "/images/products/related-products/jaw-crusher.png", alt: "Jaw Crusher" }, category: "Primary", icon: "jaw", href: "/products/jaw-crushers", actionLabel: "VIEW DETAILS" },
    { title: "VIBRATING SCREEN", description: "High-performance screening for accurate size separation and higher output.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Vibrating Screen" }, category: "Screening", icon: "screen", href: "/products/vibrating-screens", actionLabel: "VIEW DETAILS" },
    { title: "VIBRATING FEEDER", description: "Consistent and controlled material feeding for smooth plant operation.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Vibrating Feeder" }, category: "Feeding", icon: "feeder", href: "/products/feeders", actionLabel: "VIEW DETAILS" },
    { title: "BELT CONVEYOR", description: "Efficient material handling with robust design and long service life.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Belt Conveyor" }, category: "Conveying", icon: "conveyor", href: "/products/conveyor-systems", actionLabel: "VIEW DETAILS" },
    { title: "IMPACT CRUSHER", description: "High reduction crushing for softer stone and recycling applications.", image: { src: "/images/products/impact-crusher.png", alt: "Impact Crusher" }, category: "Crushing", icon: "vsi", href: "#", actionLabel: "VIEW DETAILS" },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST CONSULTATION",
    title: "LET'S BUILD THE RIGHT",
    highlight: "SOLUTION FOR YOU.",
    description:
      "Share your crushing requirement and our technical team will help you select the right Cone Crusher model based on feed size, capacity, application, and final output requirement.",
    image: {
      src: "/images/products/cone-crusher/contact-us.png",
      alt: "Cone crusher plant consultation support",
    },
    benefits: [
      { title: "MODEL SELECTION SUPPORT", text: "Choose the right cone model for your feed and output.", icon: "settings" },
      { title: "PLANT LAYOUT GUIDANCE", text: "Plan crusher, feeder, screen, and conveyor flow.", icon: "clipboard" },
      { title: "CAPACITY PLANNING", text: "Match throughput targets with plant configuration.", icon: "trending" },
      { title: "AFTER-SALES SUPPORT", text: "Get spares, liner, service, and technical assistance.", icon: "headphones" },
    ],
    contactStrip: {
      phone: "+91 98765 43210",
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
    subtitle:
      "Access cone crusher brochures, technical datasheets, installation references, and maintenance guidance.",
    supportCta: { label: "VISIT SUPPORT CENTER", href: "#", variant: "primary", icon: "arrow" },
  },
  // TODO: Replace document preview artwork with final Cone Crusher brochure/datasheet/manual covers when supplied.
  resources: [
    {
      type: "PDF",
      title: "CONE CRUSHER BROCHURE",
      description: "Overview of cone crusher models, strengths, and applications.",
      image: { src: "/images/products/cone-crusher/cone-crusher-brochure.png", alt: "Cone Crusher Brochure" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Model dimensions, motor ratings, feed sizes, and capacity ranges.",
      image: { src: "/images/products/cone-crusher/cone-crusher-datasheet.png", alt: "Cone crusher technical datasheet preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "GUIDE",
      title: "INSTALLATION GUIDE",
      description: "Foundation, placement, and commissioning planning notes.",
      image: { src: "/images/products/cone-crusher/cone-crusher-installation-guide.png", alt: "Cone crusher installation guide preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "MAINTENANCE MANUAL",
      description: "Inspection schedule, liner checks, and maintenance guidance.",
      image: { src: "/images/products/cone-crusher/cone-crusher-maintenance-manual.png", alt: "Cone crusher maintenance manual preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "TECHNICAL SUPPORT", text: "Expert help for model selection and configuration.", icon: "shield" },
    { title: "INSTALLATION ASSISTANCE", text: "Guidance for setup, foundation, and commissioning.", icon: "clipboard" },
    { title: "SPARE PARTS SUPPORT", text: "Support for liners, wear parts, and critical spares.", icon: "target" },
    { title: "WARRANTY SUPPORT", text: "Reliable assistance throughout equipment lifecycle.", icon: "headphones" },
  ],
};

export type ConeCrusherData = ProductDetailData;
