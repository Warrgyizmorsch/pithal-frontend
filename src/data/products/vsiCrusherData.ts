import type { ProductDetailData } from "./productDetailTypes";

export const vsiCrusherData: ProductDetailData = {
  slug: "vsi-crushers",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Prime Vertical Shaft Impactor", href: "/products/vsi-crushers" },
    ],
    eyebrow: "Prime Vertical Shaft Impactor",
    title: "PRIME VERTICAL SHAFT",
    highlightedTitle: "IMPACTOR",
    subtitle: "BUILT FOR PRECISION. ENGINEERED FOR PERFORMANCE.",
    description:
      "Vertical Shaft Impactors engineered for efficient crushing, particle shaping and reliable performance across demanding aggregate, mining, quarrying and construction applications.",
    descriptionHighlight: "efficient crushing, particle shaping",
    image: {
      src: "/product-hero/new Prime VSI banner.webp",
      alt: "Pithal VSI crusher operating in an aggregate plant",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
    quickStats: [
      { label: "50 - 300", value: "TPH Capacity", icon: "gauge" },
      { label: "Up to 60", value: "MM Feed Size", icon: "ruler" },
      { label: "55 - 250", value: "KW Motor Power", icon: "zap" },
      { label: "M-Sand / Aggregates", value: "Application", icon: "boxes" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "VERTICAL SHAFT IMPACTOR",
    highlight: "PERFORMANCE AND KEY TECHNICAL DETAILS",
    subtitle:
      "Discover the technical specifications behind efficient impact crushing, precise particle shaping and reliable material-processing performance.",
    ctaText: "Built for Performance. Engineered for Results.",
    cta: { label: "Talk to Technical Expert", href: "#contact", variant: "primary", icon: "arrow" },
  },
  stats: [
    { label: "Capacity", value: "50 - 300", unit: "TPH", description: "Production range by model and configuration", icon: "gauge" },
    { label: "Feed Size", value: "Up to 60", unit: "MM", description: "Designed for demanding material flow", icon: "feeder" },
    { label: "Motor Power", value: "55 - 250", unit: "kW", description: "Efficient drive options", icon: "zap" },
    { label: "Crushing Action", value: "High Speed", unit: "Impact", description: "Rock-on-rock and rock-on-anvil", icon: "shield" },
    { label: "Application", value: "M-Sand / Aggregates", unit: "", description: "Cubical aggregate and sand production", icon: "boxes" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "PRIME VERTICAL SHAFT IMPACTOR",
    highlight: "PRODUCT OVERVIEW",
    description:
      "Prime Vertical Shaft Impactor is engineered for efficient crushing, improved particle shape and consistent output. Built to process suitable hard and abrasive materials across mining, quarrying, aggregate production and construction applications.",
    image: {
      src: "/images/products/vsi-crusher/product-review.png",
      alt: "VSI crusher machine product view",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "Cubical Shape", text: "Optimized impact chamber for superior aggregate shape", icon: "boxes" },
      { title: "High Speed Rotor", text: "Balanced rotor design for consistent impact performance", icon: "settings" },
      { title: "Low Wear Cost", text: "Durable liners and wear parts reduce operating cost", icon: "shield" },
      { title: "Fine Output Control", text: "Ideal for M-Sand and controlled fine aggregate production", icon: "layers" },
    ],
    callouts: [
      { label: "Central Feed Cylinder", text: "Controlled feed entry guides material directly into the rotor", position: "leftTop", layout: { dotClass: "right-[34%] top-[24%]", cardClass: "right-[1%] top-[2%] w-[172px]" } },
      { label: "Impact Crushing Chamber", text: "Rock-on-rock impact chamber produces superior cubical aggregate", position: "rightTop", layout: { dotClass: "right-[30%] top-[36%]", cardClass: "right-[1%] top-[28%] w-[174px]" } },
      { label: "Service Platform", text: "Walkway with safety handrails for safe maintenance and inspection", position: "rightMiddle", layout: { dotClass: "right-[44%] top-[38%]", cardClass: "left-[1%] top-[2%] w-[172px]" } },
      { label: "Floor Mount Drive", text: "High-performance motor drive for fine sand and shaping operations", position: "rightBottom", layout: { dotClass: "left-[44%] top-[64%]", cardClass: "left-[1%] top-[68%] w-[172px]" } },
      { label: "Elevated Skid Structure", text: "Heavy-duty structural legs allow clean conveyor discharge underneath", position: "bottomCenter", layout: { dotClass: "right-[34%] top-[62%]", cardClass: "right-[1%] top-[54%] w-[176px]" } },
    ],
    applications: {
      eyebrow: "Applications",
      description: "Configured for reliable performance across demanding industrial applications.",
      items: [
        { label: "Aggregates", icon: "mountain" },
        { label: "Construction", icon: "building" },
        { label: "Infrastructure", icon: "hardHat" },
        { label: "Cement", icon: "factory" },
        { label: "Recycling", icon: "recycle" },
      ],
    },
  },
  performanceSection: {
    eyebrow: "Key Features",
    title: "Key Features of",
    highlight: "Prime Vertical Shaft Impactor",
    subtitle:
      "Engineered for efficient and precise crushing, the Prime VSI Crusher combines robust construction with reliable performance for demanding material-processing applications.",
  },
  performanceFeatures: [
    { title: "Superior Shape", description: "Produces cubical aggregate with excellent particle profile.", icon: "boxes" },
    { title: "High Throughput", description: "Efficient rotor design supports consistent plant capacity.", icon: "gauge" },
    { title: "Wear Protection", description: "Protected impact zones help extend part life.", icon: "shield" },
    { title: "Easy Inspection", description: "Service-friendly access improves planned maintenance.", icon: "wrench" },
    { title: "M-Sand Ready", description: "Configured for sand shaping and final aggregate improvement.", icon: "layers" },
  ],
  specificationsSection: {
    eyebrow: "Technical Specifications",
    title: "PRIME VSI CRUSHER MACHINE",
    highlight: "TECHNICAL DATA",
    subtitle:
      "Discover the technical details behind the Prime VSI Crusher Machine’s crushing efficiency, production capability and reliable performance.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Machine Type", key: "machineType" },
      { label: "Crushing Principle", key: "crushingPrinciple" },
      { label: "Recommended Capacity", key: "capacity", emphasis: "primary" },
      { label: "Maximum Feed Size", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Rotor Diameter", key: "rotorDiameter" },
      { label: "Rotor Speed", key: "rotorSpeed" },
      { label: "Cascade Ratio", key: "cascadeRatio" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Lubrication", key: "lubrication" },
      { label: "Hydraulic Opening", key: "hydraulicOpening" },
      { label: "Approx. Weight", key: "weight" },
    ],
    note: "Specifications are subject to change based on configuration and application.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    {
      model: "PVSI-50",
      machineType: "Vertical Shaft Impactor",
      crushingPrinciple: "Rock-on-Rock / Rock-on-Anvil",
      capacity: "50 TPH",
      maxFeedSize: "35 mm",
      rotorDiameter: "550 mm",
      rotorSpeed: "1000–3000 RPM",
      cascadeRatio: "Adjustable",
      motorPower: "55 kW",
      lubrication: "Automatic Grease/Oil",
      hydraulicOpening: "Optional",
      weight: "6,500 kg",
    },
    {
      model: "PVSI-100",
      machineType: "Vertical Shaft Impactor",
      crushingPrinciple: "Rock-on-Rock / Rock-on-Anvil",
      capacity: "100 TPH",
      maxFeedSize: "45 mm",
      rotorDiameter: "720 mm",
      rotorSpeed: "1000–2600 RPM",
      cascadeRatio: "Adjustable",
      motorPower: "90 kW",
      lubrication: "Automatic Grease/Oil",
      hydraulicOpening: "Optional",
      weight: "8,500 kg",
    },
    {
      model: "PVSI-150",
      machineType: "Vertical Shaft Impactor",
      crushingPrinciple: "Rock-on-Rock / Rock-on-Anvil",
      capacity: "150 TPH",
      maxFeedSize: "50 mm",
      rotorDiameter: "840 mm",
      rotorSpeed: "1000–2400 RPM",
      cascadeRatio: "Adjustable",
      motorPower: "132 kW",
      lubrication: "Automatic Grease/Oil",
      hydraulicOpening: "Optional",
      weight: "12,800 kg",
    },
    {
      model: "PVSI-200",
      machineType: "Vertical Shaft Impactor",
      crushingPrinciple: "Rock-on-Rock / Rock-on-Anvil",
      capacity: "200 TPH",
      maxFeedSize: "55 mm",
      rotorDiameter: "890 mm",
      rotorSpeed: "750–2200 RPM",
      cascadeRatio: "Adjustable",
      motorPower: "160 kW",
      lubrication: "Automatic Grease/Oil",
      hydraulicOpening: "Optional",
      weight: "12,800 kg",
    },
    {
      model: "PVSI-300",
      machineType: "Vertical Shaft Impactor",
      crushingPrinciple: "Rock-on-Rock / Rock-on-Anvil",
      capacity: "300 TPH",
      maxFeedSize: "60 mm",
      rotorDiameter: "900 mm",
      rotorSpeed: "750–2000 RPM",
      cascadeRatio: "Adjustable",
      motorPower: "250 kW",
      lubrication: "Automatic Grease/Oil",
      hydraulicOpening: "Standard",
      weight: "14,500 kg",
    },
  ],
  industriesSection: {
    eyebrow: "Market Sectors",
    title: "PRIME VERTICAL SHAFT IMPACTOR",
    highlight: "APPLICATIONS",
    subtitle:
      "Engineered for efficient fine crushing and particle shaping across mining, quarrying, aggregate production, manufactured sand and construction applications.",
  },
  industries: [
    { title: "Aggregates", description: "Consistent output for quarry, road metal, and aggregate production.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregates application with Pithal equipment" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Construction", description: "High uptime solutions for infrastructure and construction sites.", image: { src: "/images/industries/construction.jpg", alt: "Construction application with Pithal equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Infrastructure", description: "Integrated equipment for large civil and infrastructure projects.", image: { src: "/images/industries/infrastructure.jpg", alt: "Infrastructure application with Pithal equipment" }, icon: "building", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Durable equipment for limestone and raw material preparation.", image: { src: "/images/industries/cement.jpg", alt: "Cement application with Pithal equipment" }, icon: "factory", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "Efficient processing for recyclable construction and demolition material.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling application with Pithal equipment" }, icon: "recycle", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Principle",
    title: "VERTICAL SHAFT IMPACTOR",
    highlight: "WORKING PROCESS",
    subtitle:
      "A high-speed impact crushing process designed to reduce materials efficiently, improve particle shape and deliver consistent output.",
  },
  processSteps: [
    {
      number: "01",
      title: "Material Intake",
      description: "Feed material enters the system through regulated flow.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Material Intake" },
    },
    {
      number: "02",
      title: "Primary Processing",
      description: "Material is reduced, conveyed, or prepared for the next stage.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Primary Processing" },
    },
    {
      number: "03",
      title: "Secondary Processing",
      description: "The system improves size control, flow, and output consistency.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/cone.png", alt: "Secondary Processing" },
    },
    {
      number: "04",
      title: "Screening & Transfer",
      description: "Screens and conveyors separate and move material efficiently.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Screening & Transfer" },
    },
    {
      number: "05",
      title: "Final Output",
      description: "Finished material is ready for stockpile, dispatch, or further use.",
      iconFile: "final-output.png",
      image: { src: "/images/process/final-output.png", alt: "Final Output" },
    },
  ],
  videoSection: {
    eyebrow: "VIDEO SHOWCASE",
    title: "SEE PERFORMANCE.",
    highlight: "IN ACTION.",
    description:
      "Watch how Pithal Prime Vertical Shaft Impactor deliver stable performance, high uptime, and reliable output in demanding plant conditions.",
    points: ["Superior Shape", "High Throughput", "Wear Protection", "Easy Inspection"],
    features: [
      { title: "Superior Shape", description: "Produces cubical aggregate with excellent particle profile.", icon: "boxes" },
      { title: "High Throughput", description: "Efficient rotor design supports consistent plant capacity.", icon: "gauge" },
      { title: "Wear Protection", description: "Protected impact zones help extend part life.", icon: "shield" },
      { title: "Easy Inspection", description: "Service-friendly access improves planned maintenance.", icon: "wrench" },
    ],
    thumbnail: {
      src: "/images/products/vsi-crusher/video-showcase.png",
      alt: "Prime Vertical Shaft Impactor performance video thumbnail",
    },
    caption: "FULL MACHINE DEMONSTRATION",
    subCaption: "Explore every detail of our vertical shaft impactor performance.",
    duration: "1:45",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "CRUSHING EQUIPMENT",
    title: "EXPLORE OUR",
    highlight: "CRUSHING EQUIPMENT",
    subtitle:
      "Explore our range of reliable crushing and screening solutions designed to meet diverse material-processing needs and demanding industrial applications.",
  },
  relatedMachines: [
    { title: "PRIME JAW CRUSHER", description: "Heavy-duty primary crushing for hard rock and large feed material.", image: { src: "/images/products/related-products/jaw-crusher.png", alt: "Prime Jaw Crusher" }, category: "Primary", icon: "jaw", href: "/products/jaw-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME CONE CRUSHER", description: "High-efficiency secondary and tertiary reduction with uniform output.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Prime Cone Crusher" }, category: "Secondary", icon: "cone", href: "/products/cone-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VIBRATING SCREEN", description: "High-performance screening for accurate size separation and higher output.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Prime Vibrating Screen" }, category: "Screening", icon: "screen", href: "/products/vibrating-screens", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VIBRATING FEEDER", description: "Consistent and controlled material feeding for smooth plant operation.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Prime Vibrating Feeder" }, category: "Feeding", icon: "feeder", href: "/products/feeders", actionLabel: "VIEW DETAILS" },
    { title: "PRIME BELT CONVEYOR", description: "Efficient material handling with robust design and long service life.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Belt Conveyor" }, category: "Conveying", icon: "conveyor", href: "/products/conveyor-systems", actionLabel: "VIEW DETAILS" },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST CONSULTATION",
    title: "LET'S BUILD THE RIGHT",
    highlight: "SOLUTION FOR YOU.",
    description:
      "Share your crushing requirement and our technical team will help you select the right Vertical Shaft Impactor model based on feed size, capacity, application, and final output requirement.",
    image: {
      src: "/images/products/vsi-crusher/contact-us.png",
      alt: "VSI crusher plant consultation support",
    },
    benefits: [
      { title: "MODEL SELECTION SUPPORT", text: "Choose the right VSI model for your feed and output.", icon: "settings" },
      { title: "PLANT LAYOUT GUIDANCE", text: "Plan crusher, feeder, screen, and conveyor flow.", icon: "clipboard" },
      { title: "CAPACITY PLANNING", text: "Match throughput targets with plant configuration.", icon: "trending" },
      { title: "AFTER-SALES SUPPORT", text: "Get spares, rotor tips, service, and technical assistance.", icon: "headphones" },
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
    title: "Prime VSI Crusher",
    highlight: "Downloads",
    subtitle:
      "Access detailed brochures, technical specifications and product documentation to explore the Prime Vertical Shaft Impactor’s features, performance and capabilities.",
    supportCta: { label: "VISIT SUPPORT CENTER", href: "#", variant: "primary", icon: "arrow" },
  },
  resources: [
    {
      type: "PDF",
      title: "VSI CRUSHER BROCHURE",
      description: "Overview of vertical shaft impactor models, strengths, and applications.",
      image: { src: "/images/products/vsi-crusher/vsi-crusher-brochure.png", alt: "VSI Crusher Brochure" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Model dimensions, rotor speeds, motor ratings, and capacity ranges.",
      image: { src: "/images/products/vsi-crusher/vsi-crusher-datasheet.png", alt: "VSI crusher technical datasheet preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "GUIDE",
      title: "INSTALLATION GUIDE",
      description: "Foundation, rotor balancing, and commissioning planning notes.",
      image: { src: "/images/products/vsi-crusher/vsi-crusher-installation-guide.png", alt: "VSI crusher installation guide preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "MAINTENANCE MANUAL",
      description: "Inspection schedule, wear parts checks, and maintenance guidance.",
      image: { src: "/images/products/vsi-crusher/vsi-crusher-maintenance-manual.png", alt: "VSI crusher maintenance manual preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "TECHNICAL SUPPORT", text: "Expert help for model selection and configuration.", icon: "shield" },
    { title: "INSTALLATION ASSISTANCE", text: "Guidance for setup, foundation, and commissioning.", icon: "clipboard" },
    { title: "SPARE PARTS SUPPORT", text: "Support for rotor tips, wear plates, and critical spares.", icon: "target" },
    { title: "WARRANTY SUPPORT", text: "Reliable assistance throughout equipment lifecycle.", icon: "headphones" },
  ],
  faqSection: {
    eyebrow: "FAQ",
    title: "Frequently Asked",
    highlight: "Questions",
    faqs: [
      {
        question: "1. What is a vertical shaft impactor?",
        answer: "A vertical shaft impactor is a crushing machine that uses high-speed impact forces to reduce and shape suitable materials. It is commonly used for fine crushing, aggregate shaping and manufactured sand production."
      },
      {
        question: "2. What is a VSI crusher used for?",
        answer: "A VSI crusher is primarily used for fine crushing, particle shaping and producing cubical aggregates. It is also widely used for manufactured VSI sand production."
      },
      {
        question: "3. What materials can a vertical shaft impactor crusher process?",
        answer: "A vertical shaft impactor crusher can process suitable rocks, aggregates and other mineral-based materials. The appropriate configuration depends on material characteristics and application requirements."
      },
      {
        question: "4. What is the difference between a VSI crusher and a conventional crusher?",
        answer: "A VSI crusher uses high-speed impact to crush and shape material, while conventional crushers may primarily use compression or other crushing forces. VSI technology is particularly useful when particle shape and fine material production are important."
      },
      {
        question: "5. What is a VSI plant?",
        answer: "A VSI plant is a material-processing setup that incorporates a VSI crusher with other equipment such as screens and conveyors to produce and separate aggregates or manufactured sand according to specific requirements."
      },
      {
        question: "6. How do I choose the right VSI crusher machine?",
        answer: "The right VSI crusher machine should be selected based on feed material, feed size, required production capacity, desired output, particle-shape requirements and overall plant configuration."
      },
      {
        question: "7. What affects the VSI crusher price?",
        answer: "The VSI crusher price depends on factors such as model, capacity, configuration, application requirements and additional plant equipment. For an accurate quotation, discuss your requirements with Pithal Machine."
      }
    ]
  },
  longContent: {
    content: `# Prime Vertical Shaft Impactor for Efficient Crushing and Particle Shaping

The Prime Vertical Shaft Impactor is designed for efficient crushing, particle shaping and size reduction of suitable hard and abrasive materials. With a robust construction and reliable impact crushing mechanism, it is suitable for demanding applications in mining, quarrying, construction, aggregate production and manufactured sand processing.

The VSI crusher is designed to deliver controlled material reduction and improved particle shape while maintaining consistent crushing performance. Its practical design makes it a dependable solution for industries that require efficient aggregate production, fine crushing and VSI sand manufacturing.

### Why Choose Prime VSI Crusher Machine from Pithal Machine

Choosing the right VSI crusher machine can directly impact productivity, product quality, operating efficiency and overall plant performance. The Pithal Prime Vertical Shaft Impactor is engineered to provide a combination of crushing efficiency, durability and dependable operation.

Its robust construction and high-speed impact crushing mechanism allow the vertical shaft impactor crusher to efficiently reduce and shape suitable materials. This makes the Prime VSI Crusher a suitable choice for businesses looking for reliable crushing and particle-shaping equipment.

### Vertical Shaft Impactor Crusher for Mining and Quarrying

Mining and quarrying operations often require equipment capable of processing hard and abrasive materials while producing consistent aggregate sizes and shapes. The Prime vertical shaft impactor crusher is designed for applications where further material reduction and particle shaping are required.

Its powerful impact crushing action makes the VSI crusher suitable for processing rocks, aggregates and other suitable materials used in demanding industrial and infrastructure applications.

### Efficient Crushing and Particle Shaping

The primary function of a vertical shaft impactor is to reduce material through high-speed impact while improving particle shape. The Prime VSI Crusher uses a high-speed rotor to accelerate material and generate impact forces that crush and reshape the particles.

The machine can be integrated into a wider VSI plant, where crushed material can be screened, separated and further processed according to the required application. This makes it suitable for aggregate production and VSI sand manufacturing.

### Built for Demanding Material-Processing Applications

Our VSI crusher machine is designed for industries where reliable equipment performance and consistent material quality are essential. From mining and quarrying to aggregate production, construction and manufactured sand applications, the machine can support a wide range of crushing requirements.

Its heavy-duty design helps provide dependable operation under demanding conditions while supporting efficient crushing, particle shaping and material processing.

### Reliable VSI Crusher for Long-Term Operation

Durability is an important consideration when selecting industrial crushing equipment. Pithal VSI crusher is manufactured with a focus on structural strength, reliable components and long-term operational performance.

With appropriate maintenance and operating practices, the machine can provide dependable service while helping businesses maintain efficient crushing and aggregate production operations.

### VSI Crusher Plant for Efficient Material Processing

The Prime VSI Crusher can be integrated into a complete VSI crusher plant according to specific production and material-processing requirements. It can work alongside primary and secondary crushers, vibrating screens and conveyor systems to create an efficient multi-stage crushing solution.

A properly configured VSI plant can help improve material flow, particle shaping and product consistency while supporting the production of aggregates and VSI sand.

### VSI Crusher Price and Machine Cost

The VSI crusher price can vary depending on the selected model, production capacity, configuration, application requirements and overall plant setup. The VSI crusher machine price may also vary when additional equipment or customized configurations are required.

When evaluating the cost of a VSI crusher, businesses should consider factors such as production capacity, material requirements, operating efficiency, maintenance and long-term performance rather than focusing only on the initial investment.

For accurate pricing, contact Pithal Machines with your application and production requirements.

### Choose a Reliable VSI Crusher Manufacturer

Selecting experienced VSI crusher manufacturers is important when investing in crushing and material-processing equipment. A reliable VSI crusher manufacturer can provide suitable equipment configurations, technical guidance and application support based on specific project requirements.

Pithal Machines provides crushing and screening solutions for demanding mining, quarrying, construction, aggregate and material-processing applications.

### Get the Right Vertical Shaft Impactor for Your Application

Every crushing operation has different requirements based on material type, feed size, required output, production capacity and desired particle shape. Selecting the appropriate vertical shaft impactor configuration is therefore important for achieving efficient plant performance.

[Pithal Machine](https://www.pithalmachine.com/) can help you identify a suitable Prime VSI Crusher configuration based on your application and crushing requirements. Contact our team to discuss your requirements and get detailed technical information, configuration options and the latest VSI crusher price.`
  }
};

export type VsiCrusherData = ProductDetailData;

