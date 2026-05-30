import type { ProductDetailData } from "./productDetailTypes";

export const jawCrusherData: ProductDetailData = {
  slug: "jaw-crushers",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "Jaw Crushers", href: "/products/jaw-crushers" },
    ],
    eyebrow: "Jaw Crushers",
    title: "JAW",
    highlightedTitle: "CRUSHERS",
    subtitle: "Built to Crush. Engineered to Last.",
    description:
      "Heavy duty primary crushers designed for high crushing ratio and superior performance in the toughest mining conditions.",
    descriptionHighlight: "toughest mining conditions",
    image: {
      src: "/images/products/jaw-crusher/hero-scene.png",
      alt: "Pithal heavy-duty jaw crusher operating in a quarry",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
    quickStats: [
      { label: "High", value: "Crushing Ratio", icon: "fuel" },
      { label: "Robust", value: "Construction", icon: "shield" },
      { label: "Low", value: "Maintenance", icon: "settings" },
      { label: "Reliable", value: "Performance", icon: "trending" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "PERFORMANCE IN",
    highlight: "EVERY DETAIL",
    subtitle:
      "Engineered for high efficiency, built for the toughest conditions. These key specifications ensure maximum productivity and reliability.",
    ctaText: "Built for Performance. Engineered for Results.",
  },
  stats: [
    { label: "Capacity", value: "50 - 600", unit: "TPH", description: "High-volume crushing range", icon: "gauge" },
    { label: "Feed Size", value: "550", unit: "mm (Max)", description: "Handles large rock feed", icon: "feeder" },
    { label: "Motor Power", value: "55 - 250", unit: "kW", description: "Efficient drive options", icon: "zap" },
    { label: "Output Size", value: "40 - 150", unit: "mm", description: "Adjustable discharge setting", icon: "layers" },
    { label: "Application", value: "Mining, Aggregates, Construction, Recycling & More", unit: "", description: "", icon: "boxes" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "BUILT STRONG.",
    highlight: "CRUSHES STRONGER.",
    description:
      "Pithal Jaw Crushers are engineered for maximum crushing efficiency, high durability, and low operating cost. Designed to handle the toughest materials with ease in mining, quarrying and construction.",
    image: {
      src: "/images/products/jaw-crusher/main-machine.png",
      alt: "Jaw crusher machine with technical part callouts",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "High Durability", text: "Heavy-duty structure for long service life", icon: "shield" },
      { title: "High Efficiency", text: "Optimized chamber design for more output", icon: "settings" },
      { title: "Low Maintenance", text: "Easy access design reduces downtime", icon: "trending" },
      { title: "Cost Effective", text: "Low operating cost high return on investment", icon: "handCoins" },
    ],
    callouts: [
      { label: "Feed Opening", text: "Wide feed opening for large size material", position: "leftTop" },
      { label: "Flywheel", text: "Heavy-duty flywheel for smooth operations", position: "rightTop" },
      { label: "Jaw Plates", text: "High manganese steel for maximum wear resistance", position: "rightMiddle" },
      { label: "Adjustment System", text: "Hydraulic adjustment for easy setting control", position: "rightBottom" },
      { label: "Robust Frame", text: "Reinforced structure for extra strength and stability", position: "bottomCenter" },
    ],
    applications: {
      eyebrow: "Applications",
      description:
        "Ideal for primary crushing of hard, abrasive and large size materials. Widely used in a variety of industries and applications.",
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
      "Core systems designed to keep crushing output stable and maintenance predictable.",
  },
  performanceFeatures: [
    { title: "Precision Build", description: "Accurate alignment and robust fabrication keep the crusher stable under heavy load.", icon: "target" },
    { title: "Low Maintenance", description: "Service-friendly access points reduce inspection time and planned shutdown effort.", icon: "wrench" },
    { title: "High Efficiency", description: "Optimized chamber geometry improves material flow and crushing efficiency.", icon: "gauge" },
    { title: "Easy Operation", description: "Simple adjustment systems support quick control of output size.", icon: "settings" },
    { title: "Long Service Life", description: "Wear-resistant jaw plates and balanced components extend operating life.", icon: "shield" },
  ],
  specificationsSection: {
    eyebrow: "Technical Data",
    title: "BUILT WITH PRECISION.",
    highlight: "DELIVERING PERFORMANCE.",
    subtitle:
      "Select the right jaw crusher model for your capacity, feed size, and plant layout.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Feed Opening", key: "feedOpening" },
      { label: "Max Feed Size", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Capacity", key: "capacity", emphasis: "primary" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Weight", key: "weight" },
      { label: "Dimension", key: "dimension" },
    ],
    note: "Specifications are subject to change based on configuration and application.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    { model: "PMJC-2415", feedOpening: "610 x 380 mm", maxFeedSize: "320 mm", capacity: "50 - 90 TPH", motorPower: "55 KW", weight: "7,500 kg", dimension: "2,800 x 1,750 x 1,850 mm" },
    { model: "PMJC-3020", feedOpening: "760 x 500 mm", maxFeedSize: "425 mm", capacity: "90 - 160 TPH", motorPower: "75 KW", weight: "10,800 kg", dimension: "3,100 x 1,950 x 2,120 mm" },
    { model: "PMJC-3624", feedOpening: "915 x 610 mm", maxFeedSize: "500 mm", capacity: "150 - 250 TPH", motorPower: "110 KW", weight: "16,200 kg", dimension: "3,750 x 2,250 x 2,480 mm" },
    { model: "PMJC-4230", feedOpening: "1,065 x 760 mm", maxFeedSize: "550 mm", capacity: "220 - 350 TPH", motorPower: "160 KW", weight: "24,500 kg", dimension: "4,300 x 2,650 x 2,850 mm" },
    { model: "PMJC-4836", feedOpening: "1,220 x 915 mm", maxFeedSize: "650 mm", capacity: "320 - 500 TPH", motorPower: "200 KW", weight: "34,000 kg", dimension: "4,950 x 3,050 x 3,180 mm" },
    { model: "PMJC-6048", feedOpening: "1,525 x 1,220 mm", maxFeedSize: "850 mm", capacity: "450 - 600 TPH", motorPower: "250 KW", weight: "52,000 kg", dimension: "5,850 x 3,650 x 3,800 mm" },
  ],
  industriesSection: {
    eyebrow: "Applications",
    title: "BUILT FOR",
    highlight: "EVERY INDUSTRY.",
    subtitle:
      "Jaw crushing solutions engineered for demanding primary applications.",
  },
  industries: [
    { title: "Mining", description: "Primary crushing for hard rock, ore, and mineral processing plants.", image: { src: "/images/industries/mining.jpg", alt: "Mining site with crushing equipment" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Aggregates", description: "Reliable reduction for aggregates, road metal, and quarry production.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregate quarry conveyors and stockpiles" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Heavy-duty limestone and raw material preparation for cement plants.", image: { src: "/images/industries/cement.jpg", alt: "Cement industry processing plant" }, icon: "factory", href: "#", actionLabel: "Explore" },
    { title: "Construction", description: "Crushing equipment for infrastructure, roads, and large civil projects.", image: { src: "/images/industries/construction.jpg", alt: "Construction site with industrial equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "Strong processing for demolition waste and recyclable construction material.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling facility material processing" }, icon: "recycle", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Process",
    title: "FROM ROCK TO",
    highlight: "RESULTS.",
    subtitle:
      "Our advanced crushing process is engineered to deliver high-quality aggregates with maximum efficiency and reliability.",
  },
  processSteps: [
    {
      number: "01",
      title: "Material Input",
      description: "Raw material is fed into the system from the feeder hopper.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Raw rock material entering a crushing plant" },
    },
    {
      number: "02",
      title: "Primary Crushing",
      description: "Jaw crusher reduces large rocks into smaller, manageable sizes.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Primary jaw crusher stage" },
    },
    {
      number: "03",
      title: "Secondary Crushing",
      description: "Further size reduction using cone crusher for consistent output.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/secondary-crusher.png", alt: "Secondary crusher stage" },
    },
    {
      number: "04",
      title: "Screening",
      description: "Vibrating screens separate material into different sizes.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Screening equipment in a crushing plant" },
    },
    {
      number: "05",
      title: "Final Output",
      description: "High-quality aggregates ready for various applications.",
      iconFile: "final-output.png",
      image: { src: "/images/process/final-output.png", alt: "Finished aggregate stockpile output" },
    },
  ],
  videoSection: {
    eyebrow: "VIDEO SHOWCASE",
    title: "SEE PERFORMANCE.",
    highlight: "IN ACTION.",
    description:
      "Watch our jaw crusher in action and see how it delivers maximum crushing efficiency, reliability and consistent results.",
    points: [
      "Robust & Reliable",
      "High Crushing Efficiency",
      "Low Maintenance",
      "Consistent Results",
    ],
    features: [
      {
        title: "Robust & Reliable",
        description: "Built with heavy-duty components for continuous operation.",
        icon: "shield",
      },
      {
        title: "High Crushing Efficiency",
        description: "Advanced crushing chamber design for higher output.",
        icon: "settings",
      },
      {
        title: "Low Maintenance",
        description: "Easy access design for quick inspection and service.",
        icon: "wrench",
      },
      {
        title: "Consistent Results",
        description: "Uniform particle size with excellent shape.",
        icon: "trending",
      },
    ],
    thumbnail: {
      src: "/images/products/jaw-crusher/video-showcase.png",
      alt: "Jaw crusher plant performance testing video thumbnail",
    },
    caption: "FULL MACHINE DEMONSTRATION",
    subCaption: "Explore every detail of our jaw crusher performance.",
    duration: "1:45",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "RELATED PRODUCTS",
    title: "COMPLETE YOUR",
    highlight: "CRUSHING SOLUTION.",
    subtitle:
      "Explore our range of high-performance equipment designed to work seamlessly with jaw crushers for maximum productivity and efficiency.",
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
      "Share your requirements and our experts will recommend the best crushing solution tailored to your needs.",
    image: {
      src: "/images/products/jaw-crusher/contact-us.png",
      alt: "Industrial crushing plant consultation support",
    },
    benefits: [
      { title: "EXPERT CONSULTATION", text: "Get the right solution from industry experts.", icon: "settings" },
      { title: "TAILORED RECOMMENDATION", text: "Custom advice based on your material and goals.", icon: "clipboard" },
      { title: "OPTIMIZED PERFORMANCE", text: "Maximize productivity and reduce downtime.", icon: "trending" },
      { title: "END TO END SUPPORT", text: "From selection to after-sales service.", icon: "headphones" },
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
      "Access our detailed brochures, technical datasheets, and manuals to learn more about our crushers and their performance.",
    supportCta: { label: "REQUEST DOCUMENT", href: "#", variant: "primary", icon: "arrow" },
  },
  resources: [
    {
      type: "PDF",
      title: "PRODUCT BROCHURE",
      description: "Comprehensive overview of features, benefits and applications.",
      image: { src: "/images/products/jaw-crusher/product-brochure.png", alt: "PRODUCT BROCHURE" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Detailed technical specifications and performance data.",
      image: { src: "/images/products/jaw-crusher/technical-datasheet.png", alt: "TECHNICAL DATASHEET" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "OPERATION & MAINTENANCE MANUAL",
      description: "Step-by-step guide for safe operation, maintenance and best practices.",
      image: { src: "/images/products/jaw-crusher/operation-maintanance-manual.png", alt: "OPERATION & MAINTENANCE MANUAL" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "TRUSTED INFORMATION", text: "Verified and updated technical content.", icon: "shield" },
    { title: "EASY ACCESS", text: "Instant downloads anytime, anywhere.", icon: "clipboard" },
    { title: "MAKE INFORMED DECISIONS", text: "All the data you need to choose the right equipment.", icon: "target" },
    { title: "EXPERT SUPPORT", text: "Our team is here to help with any questions.", icon: "headphones" },
  ],
};

export type JawCrusherData = ProductDetailData;
