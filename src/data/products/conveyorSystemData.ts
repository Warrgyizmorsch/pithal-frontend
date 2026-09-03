import type { ProductDetailData } from "./productDetailTypes";

export const conveyorSystemData: ProductDetailData = {
  slug: "conveyor-systems",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Prime Conveyor System", href: "/products/conveyor-systems" },
    ],
    eyebrow: "Prime Conveyor System",
    title: "PRIME CONVEYOR",
    highlightedTitle: "SYSTEM",
    subtitle: "BUILT FOR CONTINUOUS FLOW. ENGINEERED FOR RELIABILITY.",
    description:
      "Prime Conveyor System is engineered for efficient material transport, delivering reliable performance and continuous material handling in demanding mining, quarrying and aggregate applications.",
    descriptionHighlight: "efficient material transport, delivering reliable performance",
    image: {
      src: "/product-hero/New Prime Conveyor banner.webp",
      alt: "Pithal conveyor system moving aggregate material",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
    quickStats: [
      { label: "40 - 1000", value: "TPH Capacity", icon: "gauge" },
      { label: "Up to 700", value: "MM Lump Size", icon: "ruler" },
      { label: "3 - 60", value: "HP Motor Power", icon: "zap" },
      { label: "Transfer / Stockpile", value: "Application", icon: "boxes" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "PRIME CONVEYOR SYSTEM",
    highlight: "PERFORMANCE AND KEY TECHNICAL DETAILS",
    subtitle:
      "Discover the engineering and technical details behind efficient material handling, continuous flow and reliable performance.",
    ctaText: "Built for Performance. Engineered for Results.",
    cta: { label: "Talk to Technical Expert", href: "#contact", variant: "primary", icon: "arrow" },
  },
  stats: [
    { label: "Capacity", value: "40 - 1000", unit: "TPH", description: "Material transfer capability", icon: "gauge" },
    { label: "Feed Lump Size", value: "Up to 700", unit: "MM", description: "Designed for demanding material flow", icon: "feeder" },
    { label: "Motor Power", value: "3 - 60", unit: "HP", description: "High-efficiency drive motor options", icon: "zap" },
    { label: "Belt Width", value: "500 - 1400", unit: "MM", description: "Multi-ply heavy-duty rubber belt", icon: "conveyor" },
    { label: "Application", value: "Transfer / Stockpile", unit: "", description: "Bulk material transportation", icon: "boxes" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "PRIME CONVEYOR SYSTEM",
    highlight: "PRODUCT OVERVIEW",
    description:
      "Prime Conveyor System is designed to deliver efficient and continuous transportation of bulk materials. Built for demanding applications, this conveyor system supports reliable material movement across mining, quarrying, aggregate production, construction and material-processing operations.",
    image: {
      src: "/images/products/belt-conveyor/product-review.png",
      alt: "Prime Belt Conveyor system product view",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "Stable Transfer", text: "Reliable movement between plant stages", icon: "conveyor" },
      { title: "Custom Lengths", text: "Configured to match site layout and stockpile needs", icon: "ruler" },
      { title: "Robust Frame", text: "Heavy-duty structure for continuous operation", icon: "shield" },
      { title: "Efficient Drive", text: "Optimized motor and pulley systems reduce power waste", icon: "zap" },
    ],
    callouts: [
      { label: "Head Pulley & Drive", text: "High-torque head pulley for steady material discharge", position: "leftTop", layout: { dotClass: "left-[14%] top-[12%]", cardClass: "left-[1%] top-[2%] w-[168px]" } },
      { label: "Safety Handrails", text: "Full-length walkway and safety railings for operator protection", position: "rightTop", layout: { dotClass: "left-[42%] top-[34%]", cardClass: "left-[1%] top-[34%] w-[170px]" } },
      { label: "Support Idlers", text: "Precision-balanced idler rollers ensure smooth belt travel", position: "rightMiddle", layout: { dotClass: "left-[50%] top-[54%]", cardClass: "left-[1%] top-[62%] w-[168px]" } },
      { label: "Truss Structure", text: "Robust structural steel truss supports long spans without sagging", position: "rightBottom", layout: { dotClass: "left-[26%] top-[58%]", cardClass: "left-[20%] top-[82%] w-[176px]" } },
      { label: "Feed Receiving Boot", text: "Impact-absorbing feed hopper guides material onto the belt", position: "bottomCenter", layout: { dotClass: "right-[18%] top-[82%]", cardClass: "right-[1%] top-[68%] w-[172px]" } },
      { label: "Durable Belt", text: "Heavy-duty multi-ply rubber belt engineered for abrasive materials", position: "bottomCenter", layout: { dotClass: "right-[34%] top-[58%]", cardClass: "right-[1%] top-[34%] w-[172px]" } },
    ],
    applications: {
      eyebrow: "Applications",
      description: "Configured for reliable performance across demanding industrial applications.",
      items: [
        { label: "Aggregates", icon: "mountain" },
        { label: "Mining", icon: "basket" },
        { label: "Construction", icon: "building" },
        { label: "Cement", icon: "factory" },
        { label: "Infrastructure", icon: "hardHat" },
      ],
    },
  },
  performanceSection: {
    eyebrow: "Key Features",
    title: "Key Features of",
    highlight: "Prime Conveyor System",
    subtitle:
      "Engineered for efficient and reliable material handling, the Prime Conveyor System combines robust construction with dependable performance for demanding industrial applications.",
  },
  performanceFeatures: [
    { title: "Reliable Material Flow", description: "Keeps crushers and screens supplied with steady transfer.", icon: "conveyor" },
    { title: "Custom Layouts", description: "Designed for plant geometry, elevation, and discharge points.", icon: "ruler" },
    { title: "Heavy-Duty Structure", description: "Strong frames and supports withstand site conditions.", icon: "shield" },
    { title: "Low Maintenance", description: "Accessible rollers and drives support quick inspection.", icon: "wrench" },
    { title: "Efficient Stockpiling", description: "Moves final aggregates cleanly to storage areas.", icon: "boxes" },
  ],
  specificationsSection: {
    eyebrow: "Technical Specifications",
    title: "PRIME CONVEYOR SYSTEM",
    highlight: "TECHNICAL DATA",
    subtitle:
      "Explore the technical details behind the Prime Conveyor System’s material-handling capacity, operating requirements and reliability.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Belt Width (mm)", key: "beltWidth" },
      { label: "Conveyor Length (m)", key: "conveyorLength" },
      { label: "Capacity (TPH)*", key: "capacity", emphasis: "primary" },
      { label: "Belt Speed (m/s)", key: "beltSpeed" },
      { label: "Max. Lump Size", key: "maxLumpSize", emphasis: "secondary" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Idler Size", key: "idlerSize" },
      { label: "Approx. Weight", key: "weight" },
    ],
    note: "*Capacities vary depending on material bulk density, lump size, belt speed, and conveyor inclination.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    {
      model: "PCS-500",
      beltWidth: "500 mm",
      conveyorLength: "5–25 m",
      capacity: "40–100 TPH",
      beltSpeed: "1.0–1.6 m/s",
      maxLumpSize: "150 mm",
      motorPower: "3–7.5 HP",
      idlerSize: "89 mm",
      weight: "0.8–2.0 Ton",
    },
    {
      model: "PCS-650",
      beltWidth: "650 mm",
      conveyorLength: "5–30 m",
      capacity: "80–180 TPH",
      beltSpeed: "1.0–1.8 m/s",
      maxLumpSize: "250 mm",
      motorPower: "5–10 HP",
      idlerSize: "89/108 mm",
      weight: "1.2–3.0 Ton",
    },
    {
      model: "PCS-800",
      beltWidth: "800 mm",
      conveyorLength: "5–35 m",
      capacity: "150–300 TPH",
      beltSpeed: "1.2–2.0 m/s",
      maxLumpSize: "350 mm",
      motorPower: "10–20 HP",
      idlerSize: "108 mm",
      weight: "2.0–4.5 Ton",
    },
    {
      model: "PCS-1000",
      beltWidth: "1000 mm",
      conveyorLength: "5–40 m",
      capacity: "250–500 TPH",
      beltSpeed: "1.2–2.5 m/s",
      maxLumpSize: "450 mm",
      motorPower: "15–30 HP",
      idlerSize: "108/133 mm",
      weight: "3.5–6.5 Ton",
    },
    {
      model: "PCS-1200",
      beltWidth: "1200 mm",
      conveyorLength: "10–50 m",
      capacity: "400–700 TPH",
      beltSpeed: "1.5–2.8 m/s",
      maxLumpSize: "600 mm",
      motorPower: "25–40 HP",
      idlerSize: "133 mm",
      weight: "5.0–8.5 Ton",
    },
    {
      model: "PCS-1400",
      beltWidth: "1400 mm",
      conveyorLength: "10–60 m",
      capacity: "600–1000 TPH",
      beltSpeed: "1.5–3.2 m/s",
      maxLumpSize: "700 mm",
      motorPower: "40–60 HP",
      idlerSize: "133/159 mm",
      weight: "7.0–12 Ton",
    },
  ],
  industriesSection: {
    eyebrow: "Market Sectors",
    title: "PRIME CONVEYOR SYSTEM",
    highlight: "APPLICATIONS",
    subtitle:
      "Engineered for efficient material transportation across mining, quarrying, aggregate production, construction and material-processing applications.",
  },
  industries: [
    { title: "Aggregates", description: "Consistent output for quarry, road metal, and aggregate production.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregates application with Pithal equipment" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Mining", description: "Reliable production for hard rock, ore, and mineral processing plants.", image: { src: "/images/industries/mining.jpg", alt: "Mining application with Pithal equipment" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Construction", description: "High uptime solutions for infrastructure and construction sites.", image: { src: "/images/industries/construction.jpg", alt: "Construction application with Pithal equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Durable equipment for limestone and raw material preparation.", image: { src: "/images/industries/cement.jpg", alt: "Cement application with Pithal equipment" }, icon: "factory", href: "#", actionLabel: "Explore" },
    { title: "Infrastructure", description: "Integrated equipment for large civil and infrastructure projects.", image: { src: "/images/industries/infrastructure.jpg", alt: "Infrastructure application with Pithal equipment" }, icon: "building", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Principle",
    title: "PRIME CONVEYOR SYSTEM",
    highlight: "WORKING PROCESS",
    subtitle:
      "A continuous material-handling process designed to transport bulk materials efficiently and deliver consistent material flow with reliable performance.",
  },
  processSteps: [
    {
      number: "01",
      title: "Material Loading",
      description: "Bulk material enters the conveyor through a regulated feed boot.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Material Loading" },
    },
    {
      number: "02",
      title: "Trough Idler Support",
      description: "Shaped idlers cradle the belt to prevent spillage during transfer.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Trough Idler Support" },
    },
    {
      number: "03",
      title: "Continuous Movement",
      description: "High-torque electric motor drive moves the belt steadily across distance.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/cone.png", alt: "Continuous Movement" },
    },
    {
      number: "04",
      title: "Transfer & Distribution",
      description: "Material is directed to subsequent crushers, screens, or wash plants.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Transfer & Distribution" },
    },
    {
      number: "05",
      title: "Discharge & Stockpiling",
      description: "Finished aggregates are cleanly discharged into stockpiles or bins.",
      iconFile: "final-output.png",
      image: { src: "/images/process/final-output.png", alt: "Discharge & Stockpiling" },
    },
  ],
  videoSection: {
    eyebrow: "VIDEO SHOWCASE",
    title: "SEE PERFORMANCE.",
    highlight: "IN ACTION.",
    description:
      "Watch how Pithal Prime Conveyor Systems deliver stable performance, high uptime, and reliable output in demanding plant conditions.",
    points: ["Reliable Material Flow", "Custom Layouts", "Heavy-Duty Structure", "Low Maintenance"],
    features: [
      { title: "Reliable Material Flow", description: "Keeps crushers and screens supplied with steady transfer.", icon: "conveyor" },
      { title: "Custom Layouts", description: "Designed for plant geometry, elevation, and discharge points.", icon: "ruler" },
      { title: "Heavy-Duty Structure", description: "Strong frames and supports withstand site conditions.", icon: "shield" },
      { title: "Low Maintenance", description: "Accessible rollers and drives support quick inspection.", icon: "wrench" },
    ],
    thumbnail: {
      src: "/images/products/belt-conveyor/video-showcase.png",
      alt: "Prime Conveyor System performance video thumbnail",
    },
    caption: "FULL MACHINE DEMONSTRATION",
    subCaption: "Explore every detail of our conveyor system performance.",
    duration: "1:45",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "CRUSHING EQUIPMENT",
    title: "EXPLORE OUR",
    highlight: "CRUSHING EQUIPMENT",
    subtitle:
      "Explore Pithal Machines’ range of reliable crushing, screening and conveying solutions engineered to meet diverse material-processing requirements and demanding industrial applications.",
  },
  relatedMachines: [
    { title: "PRIME JAW CRUSHER", description: "Heavy-duty primary crushing for hard rock and large feed material.", image: { src: "/images/products/related-products/jaw-crusher.png", alt: "Prime Jaw Crusher" }, category: "Primary", icon: "jaw", href: "/products/jaw-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME CONE CRUSHER", description: "High-efficiency secondary and tertiary reduction with uniform output.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Prime Cone Crusher" }, category: "Secondary", icon: "cone", href: "/products/cone-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VSI CRUSHER", description: "Precision particle shaping and high-quality manufactured sand production.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "Prime VSI Crusher" }, category: "Shaping", icon: "vsi", href: "/products/vsi-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VIBRATING SCREEN", description: "High-performance screening for accurate size separation and higher output.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Prime Vibrating Screen" }, category: "Screening", icon: "screen", href: "/products/vibrating-screens", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VIBRATING FEEDER", description: "Consistent and controlled material feeding for smooth plant operation.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Prime Vibrating Feeder" }, category: "Feeding", icon: "feeder", href: "/products/feeders", actionLabel: "VIEW DETAILS" },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST CONSULTATION",
    title: "LET'S BUILD THE RIGHT",
    highlight: "SOLUTION FOR YOU.",
    description:
      "Share your material transfer requirement and our technical team will help you select the right Conveyor System configuration based on length, belt width, capacity, and plant geometry.",
    image: {
      src: "/images/products/belt-conveyor/contact-us.png",
      alt: "Conveyor system plant consultation support",
    },
    benefits: [
      { title: "MODEL SELECTION SUPPORT", text: "Choose the right belt width and drive for your throughput.", icon: "settings" },
      { title: "PLANT LAYOUT GUIDANCE", text: "Plan conveyor path, inclination angle, and stockpile zones.", icon: "clipboard" },
      { title: "CAPACITY PLANNING", text: "Match transfer targets with crusher and screen outputs.", icon: "trending" },
      { title: "AFTER-SALES SUPPORT", text: "Get rollers, belts, pulleys, and technical assistance.", icon: "headphones" },
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
    title: "Prime Conveyor System",
    highlight: "Downloads",
    subtitle:
      "Access product brochures, technical specifications and detailed documentation to explore the Prime Conveyor System’s features, capabilities, applications and operating requirements.",
    supportCta: { label: "VISIT SUPPORT CENTER", href: "#", variant: "primary", icon: "arrow" },
  },
  resources: [
    {
      type: "PDF",
      title: "CONVEYOR SYSTEM BROCHURE",
      description: "Overview of belt conveyor models, configurations, and applications.",
      image: { src: "/images/products/belt-conveyor/belt-conveyor-brochure.png", alt: "Conveyor System Brochure" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Belt widths, idler dimensions, drive power, and capacity ranges.",
      image: { src: "/images/products/belt-conveyor/belt-conveyor-datasheet.png", alt: "Conveyor system technical datasheet preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "GUIDE",
      title: "INSTALLATION GUIDE",
      description: "Truss erection, belt tracking, and tensioning setup procedures.",
      image: { src: "/images/products/belt-conveyor/belt-conveyor-installation-guide.png", alt: "Conveyor system installation guide preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "MAINTENANCE MANUAL",
      description: "Belt splicing, idler roller greasing, and maintenance guidance.",
      image: { src: "/images/products/belt-conveyor/belt-conveyor-maintenance-manual.png", alt: "Conveyor system maintenance manual preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "TECHNICAL SUPPORT", text: "Expert help for conveyor sizing and plant routing.", icon: "shield" },
    { title: "INSTALLATION ASSISTANCE", text: "Guidance for truss assembly, tracking, and alignment.", icon: "clipboard" },
    { title: "SPARE PARTS SUPPORT", text: "Support for idlers, pulleys, belt cleaners, and motors.", icon: "target" },
    { title: "WARRANTY SUPPORT", text: "Reliable assistance throughout equipment lifecycle.", icon: "headphones" },
  ],
  faqSection: {
    eyebrow: "FAQ",
    title: "Frequently Asked",
    highlight: "Questions",
    faqs: [
      {
        question: "1. What is a Conveyor System?",
        answer: "Prime Conveyor System is designed for efficient and continuous transportation of bulk materials in mining, quarrying, construction and aggregate applications."
      },
      {
        question: "2. What materials can a Conveyor System handle?",
        answer: "It can handle suitable bulk materials such as rocks, stones, crushed aggregates and other materials, depending on the model and application."
      },
      {
        question: "3. Where is Prime Conveyor System used?",
        answer: "Prime Conveyor System is suitable for mining, quarrying, aggregate production, construction, crushing plants and other material-processing applications."
      },
      {
        question: "4. How does a conveyor system work?",
        answer: "A conveyor system transports material using a continuously moving conveyor belt supported by rollers and driven by a motor, moving material from one point to another."
      },
      {
        question: "5. What are the benefits of using a conveyor system?",
        answer: "A conveyor system provides efficient material transportation, continuous material flow, reduced manual handling and reliable performance for demanding industrial applications."
      },
      {
        question: "6. How do I choose the right Conveyor System?",
        answer: "Selection depends on material type, required production capacity, conveying distance, belt size, operating conditions and the overall plant configuration."
      },
      {
        question: "7. Can Prime Conveyor System be used in a complete crushing plant?",
        answer: "Yes. Prime Conveyor System can be integrated with crushers, vibrating screens and other equipment to create an efficient material-handling and processing plant."
      }
    ]
  },
  longContent: {
    content: `# Prime Conveyor System for Efficient Material Handling

The Prime Conveyor System is designed for efficient and continuous transportation of bulk materials. With robust construction and reliable material-handling performance, it is suitable for demanding applications in mining, quarrying, construction, aggregate production and material processing.

The conveyor belt is designed to maintain consistent material flow while reducing the need for manual material handling. Its heavy-duty design makes it a dependable solution for industries that require continuous transportation and efficient movement of bulk materials.

### Why Choose Prime Conveyor System from Pithal Machine

Choosing the right conveyor system can have a direct impact on productivity, operating efficiency and overall plant performance. The Pithal Prime Conveyor System is engineered to provide a combination of reliable material handling, durability and dependable operation.

Its strong construction allows the conveyor machine to perform effectively in demanding working environments, while its practical design supports continuous material transportation. This makes the Prime Conveyor System a suitable choice for businesses looking for reliable material-handling equipment.

### Conveyor System for Mining and Quarrying

Mining and quarrying operations often require equipment capable of transporting large quantities of bulk material efficiently. The Prime Conveyor System is designed for material-handling applications where processed material needs to be moved between different stages of a plant.

As part of conveyors and conveying system solutions, the equipment can support material movement from crushers and screens to stockpiles or other processing stages. Its robust construction makes it suitable for handling rocks, aggregates and other bulk materials.

### Efficient Material Transportation

The primary function of a conveyor is to transport materials continuously from one point to another. The Prime Conveyor System uses a moving belted conveyor mechanism to provide consistent material flow across the required conveying distance.

The conveyor belt moves over supporting components while the drive system provides continuous movement. The machine can be integrated into a wider crushing and screening plant where materials are transferred between crushers, screens and stockpiling areas.

### Built for Demanding Industrial Applications

Our conveyor machine is designed for industries where reliable material transportation is essential. From mining and quarrying to aggregate production and construction material processing, the machine can support a wide range of material-handling requirements.

Its heavy-duty design helps provide dependable operation under demanding conditions while supporting continuous material flow and efficient plant operations.

### Reliable Conveyor Machine for Long-Term Operation

Durability is an important consideration when selecting industrial material-handling equipment. Pithal Conveyor System is manufactured with a focus on structural strength, reliable components and long-term operational performance.

With appropriate maintenance and operating practices, the equipment can provide dependable service while helping businesses maintain efficient material transportation operations.

### Conveyor Belt Price and Machine Cost

The conveyor belt price depends on factors such as conveyor length, belt width, material-handling capacity, configuration and application requirements. The overall cost may also vary according to the plant layout and additional equipment requirements.

When evaluating the cost of a conveyor system, businesses should consider not only the initial investment but also operating efficiency, durability, maintenance requirements and long-term performance.

Pithal Machine can provide pricing based on the specific conveyor configuration and material-handling requirements.

### Choose a Reliable Conveyor Manufacturer

Selecting experienced conveyor manufacturers is important when investing in industrial material-handling equipment. The right manufacturer can provide suitable equipment configuration, technical guidance and application support.

Pithal Machine focuses on providing reliable crushing, screening and conveying solutions designed for demanding mining, quarrying, construction and aggregate-processing applications. As a conveyor belt manufacturer, Pithal Machine provides practical conveying solutions for efficient bulk-material transportation.

### Get the Right Conveyor System for Your Application

Every material-handling operation has different requirements based on material type, conveying distance, required capacity and plant configuration. Selecting the appropriate conveyor system is therefore important for achieving efficient plant performance.

[Pithal Machine](https://www.pithalmachine.com/) can help you identify a suitable Prime Conveyor System configuration based on your application and material-handling requirements. Contact our team to discuss your requirements and get detailed technical information and the latest pricing from an experienced conveyor system manufacturer.`
  }
};

export type ConveyorSystemData = ProductDetailData;

