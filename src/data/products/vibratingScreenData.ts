import type { ProductDetailData } from "./productDetailTypes";

export const vibratingScreenData: ProductDetailData = {
  slug: "vibrating-screens",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Prime Vibrating Screens", href: "/products/vibrating-screens" },
    ],
    eyebrow: "Prime Vibrating Screens",
    title: "PRIME VIBRATING",
    highlightedTitle: "SCREENS",
    subtitle: "BUILT FOR ACCURATE SCREENING. ENGINEERED FOR PERFORMANCE.",
    description:
      "Vibrating Screens engineered for efficient material separation, consistent screening and reliable performance across mining, quarrying and aggregate applications.",
    descriptionHighlight: "efficient material separation, consistent screening",
    image: {
      src: "/product-hero/new Prime Screen banner.webp",
      alt: "Pithal vibrating screen in a crushing and screening plant",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
    quickStats: [
      { label: "80 - 700", value: "TPH Capacity", icon: "gauge" },
      { label: "Up to 350", value: "MM Feed Size", icon: "ruler" },
      { label: "15 - 50", value: "HP Motor Power", icon: "zap" },
      { label: "Sizing / Grading", value: "Application", icon: "boxes" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "VIBRATING SCREEN",
    highlight: "PERFORMANCE AND KEY TECHNICAL DETAILS",
    subtitle:
      "Explore the technical specifications behind efficient screening, accurate separation and dependable performance.",
    ctaText: "Built for Performance. Engineered for Results.",
    cta: { label: "Talk to Technical Expert", href: "#contact", variant: "primary", icon: "arrow" },
  },
  stats: [
    { label: "Capacity", value: "80 - 700", unit: "TPH", description: "High screening output range", icon: "gauge" },
    { label: "Feed Size", value: "Up to 350", unit: "MM", description: "Designed for demanding material flow", icon: "feeder" },
    { label: "Motor Power", value: "15 - 50", unit: "HP", description: "Efficient drive power range", icon: "zap" },
    { label: "Screen Motion", value: "Circular / Linear", unit: "", description: "Accurate multi-deck classification", icon: "layers" },
    { label: "Application", value: "Aggregates / Mining", unit: "", description: "Screening and particle sizing", icon: "boxes" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "PRIME VIBRATING SCREENS",
    highlight: "PRODUCT OVERVIEW",
    description:
      "Prime Vibrating Screens are designed for efficient material separation, high throughput and reliable operation in demanding mining, quarrying, aggregate and crushing applications.",
    image: {
      src: "/images/products/vibrating-screen/product-review.png",
      alt: "Vibrating screen machine product view",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "Accurate Sizing", text: "Deck layouts configured for precise material grades", icon: "target" },
      { title: "Multi Deck Options", text: "Available in single, double, triple, and four deck layouts", icon: "layers" },
      { title: "Strong Exciter", text: "Reliable vibration mechanism for consistent screening", icon: "settings" },
      { title: "Easy Mesh Change", text: "Service-friendly access for faster screen media changes", icon: "wrench" },
    ],
    callouts: [
      { label: "Feed Box", text: "Distributes material evenly across the top screen deck", position: "leftTop", layout: { dotClass: "left-[22%] top-[18%]", cardClass: "left-[1%] top-[2%] w-[168px]" } },
      { label: "Enclosed Discharge Hood", text: "Dust encapsulation and directed material flow", position: "rightTop", layout: { dotClass: "right-[36%] top-[34%]", cardClass: "right-[1%] top-[2%] w-[172px]" } },
      { label: "Vibration Exciter", text: "Robust eccentric drive creates high-frequency screening motion", position: "rightMiddle", layout: { dotClass: "left-[32%] top-[32%]", cardClass: "left-[1%] top-[32%] w-[172px]" } },
      { label: "Isolation Springs", text: "Heavy-duty coil springs isolate dynamic forces from structure", position: "rightBottom", layout: { dotClass: "left-[20%] top-[38%]", cardClass: "left-[1%] top-[60%] w-[170px]" } },
      { label: "Support Structure", text: "Heavy-duty structural steel stand with maintenance walkway", position: "bottomCenter", layout: { dotClass: "right-[24%] top-[50%]", cardClass: "right-[1%] top-[34%] w-[172px]" } },
      { label: "Discharge Chutes", text: "Multi-deck separate chutes deliver classified aggregate grades", position: "bottomCenter", layout: { dotClass: "left-[56%] top-[70%]", cardClass: "right-[1%] top-[64%] w-[176px]" } },
    ],
    applications: {
      eyebrow: "Applications",
      description: "Configured for reliable performance across demanding industrial applications.",
      items: [
        { label: "Aggregates", icon: "mountain" },
        { label: "Mining", icon: "basket" },
        { label: "Construction", icon: "building" },
        { label: "Recycling", icon: "recycle" },
        { label: "Cement", icon: "factory" },
      ],
    },
  },
  performanceSection: {
    eyebrow: "Key Features",
    title: "Key Features of",
    highlight: "Prime Vibrating Screens",
    subtitle:
      "Built for efficient screening, the Prime Vibrating Screen combines robust construction, reliable vibration and consistent material separation.",
  },
  performanceFeatures: [
    { title: "High Screening Efficiency", description: "Optimized stroke and speed improve material stratification.", icon: "gauge" },
    { title: "Flexible Decks", description: "Multiple deck options suit different product sizes.", icon: "layers" },
    { title: "Robust Structure", description: "Heavy-duty frame handles tough continuous duty.", icon: "shield" },
    { title: "Low Maintenance", description: "Accessible decks and drive parts reduce downtime.", icon: "wrench" },
    { title: "Consistent Grades", description: "Reliable separation helps maintain product quality.", icon: "target" },
  ],
  specificationsSection: {
    eyebrow: "Technical Specifications",
    title: "PRIME VIBRATING SCREEN",
    highlight: "TECHNICAL DATA",
    subtitle:
      "Discover the technical details behind the Prime Vibrating Screen’s efficient screening performance and reliable operation.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Screen Size (L × W)", key: "screenSize" },
      { label: "Decks", key: "decks" },
      { label: "Capacity (TPH)*", key: "capacity", emphasis: "primary" },
      { label: "Feed Size (Max.)", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Speed (RPM)", key: "speed" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Approx. Weight", key: "weight" },
    ],
    note: "*Capacities vary depending on feed gradation, moisture content, deck configuration, and separation size.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    {
      model: "PVS-14×05",
      screenSize: "4200 × 1500 mm",
      decks: "2, 3, 4",
      capacity: "80–200 TPH",
      maxFeedSize: "200 mm",
      speed: "850–950 RPM",
      motorPower: "15–20 HP",
      weight: "5.5–7.5 Ton",
    },
    {
      model: "PVS-16×06",
      screenSize: "4800 × 1800 mm",
      decks: "2, 3, 4",
      capacity: "180–400 TPH",
      maxFeedSize: "250 mm",
      speed: "850–950 RPM",
      motorPower: "25–30 HP",
      weight: "12–14 Ton",
    },
    {
      model: "PVS-18×05",
      screenSize: "5400 × 1500 mm",
      decks: "2, 3, 4",
      capacity: "150–350 TPH",
      maxFeedSize: "250 mm",
      speed: "850–950 RPM",
      motorPower: "20–25 HP",
      weight: "8.0–11 Ton",
    },
    {
      model: "PVS-20×06",
      screenSize: "6000 × 1800 mm",
      decks: "2, 3, 4",
      capacity: "250–500 TPH",
      maxFeedSize: "300 mm",
      speed: "850–950 RPM",
      motorPower: "25–40 HP",
      weight: "13–16 Ton",
    },
    {
      model: "PVS-24×06",
      screenSize: "7200 × 1800 mm",
      decks: "2, 3, 4",
      capacity: "350–700 TPH",
      maxFeedSize: "350 mm",
      speed: "800–900 RPM",
      motorPower: "40–50 HP",
      weight: "15–18 Ton",
    },
  ],
  industriesSection: {
    eyebrow: "Market Sectors",
    title: "PRIME VIBRATING SCREENS",
    highlight: "APPLICATIONS",
    subtitle:
      "Designed for efficient material separation across mining, quarrying, aggregate production, stone crushing and construction applications.",
  },
  industries: [
    { title: "Aggregates", description: "Consistent output for quarry, road metal, and aggregate production.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregates application with Pithal equipment" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Mining", description: "Reliable production for hard rock, ore, and mineral processing plants.", image: { src: "/images/industries/mining.jpg", alt: "Mining application with Pithal equipment" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Construction", description: "High uptime solutions for infrastructure and construction sites.", image: { src: "/images/industries/construction.jpg", alt: "Construction application with Pithal equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "Efficient processing for recyclable construction and demolition material.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling application with Pithal equipment" }, icon: "recycle", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Durable equipment for limestone and raw material preparation.", image: { src: "/images/industries/cement.jpg", alt: "Cement application with Pithal equipment" }, icon: "factory", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Principle",
    title: "VIBRATING SCREEN",
    highlight: "WORKING PROCESS",
    subtitle:
      "A controlled vibrating process that moves, separates and classifies materials according to size for efficient processing.",
  },
  processSteps: [
    {
      number: "01",
      title: "Material Intake",
      description: "Feed material enters the screen deck through regulated flow.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Material Intake" },
    },
    {
      number: "02",
      title: "Stratification",
      description: "Vibration motion stratifies material bed by particle size.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Stratification" },
    },
    {
      number: "03",
      title: "Size Separation",
      description: "Fines pass through the wire mesh while oversize moves forward.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Size Separation" },
    },
    {
      number: "04",
      title: "Deck Classification",
      description: "Multi-deck design divides material into distinct grade sizes.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/cone.png", alt: "Deck Classification" },
    },
    {
      number: "05",
      title: "Graded Output",
      description: "Separated material discharges onto conveyors for stockpiling.",
      iconFile: "final-output.png",
      image: { src: "/images/process/final-output.png", alt: "Graded Output" },
    },
  ],
  videoSection: {
    eyebrow: "VIDEO SHOWCASE",
    title: "SEE PERFORMANCE.",
    highlight: "IN ACTION.",
    description:
      "Watch how Pithal Prime Vibrating Screens deliver stable performance, high uptime, and reliable output in demanding plant conditions.",
    points: ["High Screening Efficiency", "Flexible Decks", "Robust Structure", "Low Maintenance"],
    features: [
      { title: "High Screening Efficiency", description: "Optimized stroke and speed improve material stratification.", icon: "gauge" },
      { title: "Flexible Decks", description: "Multiple deck options suit different product sizes.", icon: "layers" },
      { title: "Robust Structure", description: "Heavy-duty frame handles tough continuous duty.", icon: "shield" },
      { title: "Low Maintenance", description: "Accessible decks and drive parts reduce downtime.", icon: "wrench" },
    ],
    thumbnail: {
      src: "/images/products/vibrating-screen/video-showcase.png",
      alt: "Prime Vibrating Screens performance video thumbnail",
    },
    caption: "FULL MACHINE DEMONSTRATION",
    subCaption: "Explore every detail of our vibrating screen performance.",
    duration: "1:45",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "CRUSHING & SCREENING EQUIPMENT",
    title: "EXPLORE OUR",
    highlight: "CRUSHING AND SCREENING EQUIPMENT",
    subtitle:
      "Explore reliable crushing and screening solutions engineered for demanding material processing requirements.",
  },
  relatedMachines: [
    { title: "PRIME JAW CRUSHER", description: "Heavy-duty primary crushing for hard rock and large feed material.", image: { src: "/images/products/related-products/jaw-crusher.png", alt: "Prime Jaw Crusher" }, category: "Primary", icon: "jaw", href: "/products/jaw-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME CONE CRUSHER", description: "High-efficiency secondary and tertiary reduction with uniform output.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Prime Cone Crusher" }, category: "Secondary", icon: "cone", href: "/products/cone-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VSI CRUSHER", description: "Precision particle shaping and high-quality manufactured sand production.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "Prime VSI Crusher" }, category: "Shaping", icon: "vsi", href: "/products/vsi-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VIBRATING FEEDER", description: "Consistent and controlled material feeding for smooth plant operation.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Prime Vibrating Feeder" }, category: "Feeding", icon: "feeder", href: "/products/feeders", actionLabel: "VIEW DETAILS" },
    { title: "PRIME BELT CONVEYOR", description: "Efficient material handling with robust design and long service life.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Belt Conveyor" }, category: "Conveying", icon: "conveyor", href: "/products/conveyor-systems", actionLabel: "VIEW DETAILS" },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST CONSULTATION",
    title: "LET'S BUILD THE RIGHT",
    highlight: "SOLUTION FOR YOU.",
    description:
      "Share your screening requirement and our technical team will help you select the right Vibrating Screen model based on material type, capacity, deck sizes, and separation requirements.",
    image: {
      src: "/images/products/vibrating-screen/contact-us.png",
      alt: "Vibrating screen plant consultation support",
    },
    benefits: [
      { title: "MODEL SELECTION SUPPORT", text: "Choose the right screen size and decks for your feed.", icon: "settings" },
      { title: "PLANT LAYOUT GUIDANCE", text: "Plan screen, crusher, feeder, and conveyor flow.", icon: "clipboard" },
      { title: "CAPACITY PLANNING", text: "Match throughput targets with plant configuration.", icon: "trending" },
      { title: "AFTER-SALES SUPPORT", text: "Get mesh, springs, service, and technical assistance.", icon: "headphones" },
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
    title: "Prime Vibrating Screens",
    highlight: "Downloads",
    subtitle:
      "Access product brochures, technical specifications and documentation to learn more about Prime Vibrating Screens.",
    supportCta: { label: "VISIT SUPPORT CENTER", href: "#", variant: "primary", icon: "arrow" },
  },
  resources: [
    {
      type: "PDF",
      title: "VIBRATING SCREEN BROCHURE",
      description: "Overview of vibrating screen models, strengths, and applications.",
      image: { src: "/images/products/vibrating-screen/vibrating-screen-brochure.png", alt: "Vibrating Screen Brochure" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Model dimensions, deck options, speed, and capacity ranges.",
      image: { src: "/images/products/vibrating-screen/vibrating-screen-datasheet.png", alt: "Vibrating screen technical datasheet preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "GUIDE",
      title: "INSTALLATION GUIDE",
      description: "Foundation, springs, and commissioning planning notes.",
      image: { src: "/images/products/vibrating-screen/vibrating-screen-installation-guide.png", alt: "Vibrating screen installation guide preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "MAINTENANCE MANUAL",
      description: "Screen mesh changes, lubrication, and maintenance guidance.",
      image: { src: "/images/products/vibrating-screen/vibrating-screen-maintenance-manual.png", alt: "Vibrating screen maintenance manual preview" },
      href: "#",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "TECHNICAL SUPPORT", text: "Expert help for model selection and configuration.", icon: "shield" },
    { title: "INSTALLATION ASSISTANCE", text: "Guidance for setup, foundation, and commissioning.", icon: "clipboard" },
    { title: "SPARE PARTS SUPPORT", text: "Support for screen cloth, springs, and critical spares.", icon: "target" },
    { title: "WARRANTY SUPPORT", text: "Reliable assistance throughout equipment lifecycle.", icon: "headphones" },
  ],
  faqSection: {
    eyebrow: "FAQ",
    title: "Frequently Asked",
    highlight: "Questions",
    faqs: [
      {
        question: "What is a Vibrating Screen?",
        answer: "A Vibrating Screen is an industrial screening machine designed to separate and classify materials according to particle size. It uses controlled vibration to move material across a screening surface, allowing smaller particles to pass through while larger particles continue toward the discharge point. It is commonly used in mining, quarrying, aggregate production and stone crushing applications."
      },
      {
        question: "What materials can a Vibrating Screen handle?",
        answer: "Vibrating Screens can be used for screening materials such as crushed stone, rocks, aggregates, sand, gravel and various mineral materials. The suitable configuration depends on the material characteristics, feed size, moisture content and required screening output."
      },
      {
        question: "What is a vibrating sieve used for?",
        answer: "A vibrating sieve is used to separate materials into different size fractions by passing smaller particles through a screening surface while retaining larger particles. In industrial applications, vibrating sieves can be used for material classification, screening and size separation."
      },
      {
        question: "Can Prime Vibrating Screens be used with stone crushers?",
        answer: "Yes. Prime Vibrating Screens can be integrated into crushing and screening plants and used as a vibrating screen for stone crusher applications. They help separate crushed material into different sizes and can improve the efficiency of downstream crushing and screening processes."
      },
      {
        question: "How do I choose the right Prime Vibrating Screen?",
        answer: "The right vibrating screen depends on factors such as material type, feed size, required capacity, desired separation sizes, number of decks and operating conditions. Pithal Machine can help identify a suitable configuration based on your specific screening requirements."
      },
      {
        question: "How can I get the price of a Prime Vibrating Screen?",
        answer: "The price of a vibrating screen depends on its model, size, configuration, capacity and application requirements. Contact Pithal Machine with your material type and production requirements to receive a suitable machine recommendation and quotation."
      },
      {
        question: "How can I request a quotation for a Prime Vibrating Screen?",
        answer: "You can contact Pithal Machine through the enquiry form or contact details available on the website. Share your required capacity, material type, feed size and screening requirements to receive a suitable recommendation and quotation."
      }
    ]
  },
  longContent: {
    content: `## Prime Vibrating Screens for Efficient Material Separation

The Prime Vibrating Screens are designed for efficient screening, accurate material separation and reliable performance across demanding mining, quarrying, construction and aggregate-processing applications. This versatile vibro screener helps separate materials according to size while maintaining consistent material flow.

Built for demanding industrial environments, Prime Vibrating Screens offer a practical screening solution for crushing plants, mining operations and material-processing applications where efficient classification and reliable operation are essential.

### Why Choose Prime Vibrating Screens from Pithal Machine

Choosing the right screening equipment can directly affect plant productivity, material quality and overall processing efficiency. Pithal Prime Vibrating Screens are engineered to provide effective screening performance, robust construction and dependable operation.

The machine is designed to handle continuous material flow while separating different particle sizes efficiently. Its practical design makes it suitable for applications requiring reliable and consistent screening.

### Vibrating Screens for Mining and Quarrying

Mining and quarrying operations require durable equipment capable of handling large volumes of material. Prime vibrating mining screens are designed to screen rocks, minerals, aggregates and other materials according to the required size.

The controlled vibration helps move material across the screening surface, allowing smaller particles to pass through while larger particles continue toward the discharge section.

### Efficient Material Separation

The main purpose of vibrating screens is to classify materials into different sizes for further processing or final use. Prime screens use controlled vibration to create effective material movement and separation.

Depending on the application and screen configuration, the machine can be used as a vibrating sieve for separating different particle sizes and improving the efficiency of material-processing operations.

### Linear Vibrating Screen for Consistent Screening

A linear vibrating screen is designed to move material across the screening surface in a controlled direction while separating particles according to size. This type of screening system is suitable for applications that require continuous material flow and consistent classification.

Prime Vibrating Screens can be configured according to the specific requirements of the material, capacity and screening application.

### Built for Crushing and Screening Plants

Prime Vibrating Screens are suitable for integration with crushing and screening plants. A vibrating screen for stone crusher applications helps separate crushed material into different sizes, allowing suitable material to move to the next processing stage.

The equipment can also be used as a crusher vibrating screen alongside crushers, conveyors and other material-processing equipment to support an efficient multi-stage crushing and screening process.

### Reliable Vibrating Sieve Shaker Performance

The controlled vibration generated by the screening mechanism enables effective material movement across the screen deck. As material passes over the screening surface, particles smaller than the selected openings pass through while larger particles are discharged separately.

This vibrating sieve shaker principle helps improve screening efficiency and provides consistent material classification for various industrial applications.

### Durable Screening Equipment for Long-Term Operation

Durability is an important factor when selecting screening equipment for mining and aggregate operations. Prime Vibrating Screens are manufactured with a focus on structural strength, dependable components and reliable operation.

With proper installation, maintenance and operating practices, the equipment is designed to support continuous screening operations in demanding working environments.

### Choose a Reliable Vibrating Screen Manufacturer

Selecting experienced vibrating screen manufacturers is important when investing in industrial screening equipment. The right manufacturer can help with machine selection, configuration, technical requirements and application-specific solutions.

Pithal Machine provides crushing and screening equipment designed for demanding mining, quarrying, aggregate and construction applications. As a vibro screen manufacturer, Pithal Machine focuses on delivering practical and reliable screening solutions for different material-processing requirements.

### Vibrating Screen Price and Machine Cost

The vibrating screen price depends on factors such as screen size, capacity, configuration, number of decks, application requirements and overall plant setup. The total cost may also vary depending on customization and additional equipment.

When evaluating screening equipment, businesses should consider screening capacity, material characteristics, operating requirements, maintenance and long-term performance rather than focusing only on the initial machine cost.

Pithal Machine can provide pricing based on the selected vibrating screen configuration and specific application requirements.

### Get the Right Vibrating Screen for Your Application

Every screening operation has different requirements based on material type, feed size, required output, production capacity and desired separation. Selecting the right vibrating screen configuration is therefore important for maintaining efficient plant performance.

[Pithal Machine](https://www.pithalmachine.com/) can help you identify a suitable Prime Vibrating Screen based on your material-processing and screening requirements. Contact our team to discuss your application, technical requirements and get detailed product information and pricing.`
  }
};

export type VibratingScreenData = ProductDetailData;

