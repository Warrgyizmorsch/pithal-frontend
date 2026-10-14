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
      src: "/images/products/prime-vibrating-screen.png",
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
        question: "1. What is the main purpose of vibrating screens?",
        answer:
          "Vibrating screens separate materials into different particle sizes. They are widely used in stone crushing, mining, quarrying and aggregate production to control product grading and direct material to the appropriate processing stage.",
      },
      {
        question: "2. How do I choose a vibrating screen for a stone crusher plant?",
        answer:
          "Consider the crusher's output, feed-size distribution, required aggregate fractions, material characteristics and expected production capacity. The deck arrangement and screen openings should match the plant's separation requirements.",
      },
      {
        question: "3. What is the difference between a linear vibrating screen and a vibro screener?",
        answer:
          "A linear vibrating screen uses linear vibration to move material across its screening surface and is used in various industrial applications. A vibro screener commonly refers to equipment used for separating powders, granules and smaller particles. The appropriate choice depends on the material and process.",
      },
      {
        question: "4. What factors affect vibrating screen performance?",
        answer:
          "Screen performance depends on feed rate, particle-size distribution, moisture content, screen aperture, deck arrangement, feed distribution and the condition of the screening surface. Blocked openings and uneven feeding can reduce separation effectiveness.",
      },
      {
        question: "5. Are vibrating mining screens suitable for aggregate production?",
        answer:
          "Screening equipment may be used in both mining and aggregate processing, provided its design and configuration suit the material and operating requirements. Capacity, abrasiveness, feed size and target grading should be evaluated before selection.",
      },
      {
        question: "6. How do I select a vibrating screen manufacturer in India?",
        answer:
          "Evaluate the manufacturer's relevant product range, technical specifications, available configurations, application suitability and support arrangements. Share your feed material, feed size, expected throughput and required output grading when requesting a recommendation.",
      },
    ],
  },
  longContent: {
    content: `## Vibrating Screens Manufacturer in India – Pithal Machines

In a stone crushing plant, crushing the material is only part of the process. The crushed material must also be separated into the correct sizes before it can be used in construction or sent for further processing. Vibrating screens perform this essential task by classifying aggregates, removing correctly sized material from the crushing circuit and directing oversized particles for additional crushing when required.

Pithal Machines provides crushing and screening equipment for stone crushing, mining, quarrying and aggregate processing applications. Our vibrating screen solutions are intended to support material classification at different stages of production, helping operators manage material flow and achieve the required product grading.

For businesses looking for a vibrating screen manufacturer in India, selecting the right equipment starts with understanding the feed material, required production capacity, output sizes and overall plant configuration.

### What Is a Vibrating Screen?

A vibrating screen is a mechanical screening machine that separates bulk materials according to particle size. It uses controlled vibration to move material across a screening surface. Particles smaller than the screen openings pass through, while larger particles travel along the deck towards the discharge point.

In a typical crushing plant, the vibrating screen receives material from a crusher and separates it into different size fractions. Depending on the plant arrangement, the separated material may be sent to stockpiles, transferred to another processing stage or returned for further crushing.

The screening process influences the grading of the final product. Screen aperture size, deck arrangement, feed distribution, moisture content and material characteristics all affect how effectively particles are separated.

### Vibrating Screen for Stone Crusher Plants

A vibrating screen for stone crusher applications helps separate crushed rock into the sizes required for construction aggregates and other uses. It works alongside crushing equipment to maintain the desired product grading and prevent material from moving unnecessarily through the production circuit.

Consider a plant producing several aggregate sizes. After crushing, the material enters the screening stage, where different fractions are separated according to the screen openings. Material that meets the required size can move to stockpiling, while oversized particles may return to the crusher for further reduction.

In a closed-circuit arrangement, the crusher vibrating screen plays an important role in controlling the return of oversized material. If the screen is undersized or poorly matched to the feed rate, material can accumulate and restrict the performance of the entire plant.

When selecting a screening machine, buyers should consider the crusher's output, feed-size distribution, number of required product fractions and expected throughput. The screening equipment should be capable of handling the actual operating conditions rather than being selected on nominal capacity alone.

### Vibrating Mining Screens for Mineral Processing

Mining and quarrying operations process materials that can vary considerably in hardness, abrasiveness, moisture and particle size. Vibrating mining screens help classify these materials at different stages of the processing circuit.

Screening may take place before crushing, between crushing stages or after the final crusher. Pre-screening can separate smaller particles before they enter a crusher, while post-crushing screening separates the processed material into the required size fractions.

Material characteristics are especially important in mining applications. Abrasive feed can accelerate screen-media wear, while wet or sticky material may block the openings and reduce the effective screening area. Feed distribution and the required separation size also influence the equipment configuration.

Understanding these conditions before selecting a screen helps businesses choose equipment that fits their production requirements and plant layout.

### Types of Vibrating Screening Equipment

Screening machines are available in different designs and their suitability depends on the material being processed and the required separation. The following terms describe related screening equipment, although they are not interchangeable in every application.

#### Linear Vibrating Screen

A linear vibrating screen uses a linear vibration pattern to move material across the screening surface. It is used in various industrial applications for separating and grading bulk materials.

Its suitability depends on the feed characteristics, required throughput, screen openings and installation conditions. For heavy-duty crushing applications, buyers should confirm that the machine is designed for the expected material load and operating environment.

#### Vibro Screener

A vibro screener uses vibration to separate particles through a mesh or screening surface. The term is commonly associated with machines used for powders, granules and smaller particles in industries such as food processing and chemicals.

A vibro screener should not automatically be treated as equivalent to a heavy-duty vibrating screen for stone crushing. The equipment must match the material size, volume and operating conditions of the intended application.

#### Vibrating Sieve and Vibrating Sieve Shaker

A vibrating sieve separates particles according to the size of the openings in its screening surface. The term is used across different industries, depending on the equipment design and scale of operation.

A vibrating sieve shaker is generally used for laboratory testing and particle-size analysis. It passes a material sample through a series of test sieves to determine the distribution of particle sizes.

For commercial crushing and mining operations, industrial vibrating screens are selected according to production capacity, material characteristics and the required grading. Understanding this distinction helps buyers identify equipment suitable for their actual process.

### How to Choose the Right Vibrating Screen

The performance of a screening system depends on how well the equipment matches the material and the production targets. Before purchasing a screen, businesses should evaluate the following factors:

* **Required capacity:** The machine must handle the expected feed rate without restricting the crushing circuit. Actual screening capacity depends on the material, feed distribution, moisture and required separation accuracy.
* **Screen openings and deck arrangement:** Aperture size determines which particles pass through the screen. A multi-deck arrangement can separate material into several size fractions, depending on the required product grading and machine configuration.
* **Material characteristics:** Particle size, shape, hardness, abrasiveness and moisture influence screening performance. Wet or sticky feed can block the openings, while abrasive materials can increase wear on screen panels.
* **Feed distribution:** Material should be spread appropriately across the screening surface. Uneven feeding can leave portions of the deck underused and reduce the consistency of separation.
* **Maintenance requirements:** Screen panels, drive components, bearings and supporting structures require regular inspection. Maintenance schedules should follow the manufacturer's recommendations and account for the material being processed.
* **Plant compatibility:** The screen must work effectively with the crusher, conveyors and downstream processing equipment. A machine that cannot handle the incoming material may become a bottleneck even when the crusher has sufficient capacity.

Providing these details to the manufacturer helps narrow down the available configurations and identify a screening solution suited to the project.

### How Vibrating Screens Affect Crushing Plant Performance

Screening directly influences how material moves through a crushing plant. If the particles are not properly sized, they may undergo unnecessary crushing. If oversized material passes into a stage that cannot handle it efficiently, product quality and downstream processing may be affected.

A properly configured screening system separates material into the required fractions and directs each fraction to the appropriate destination. In closed-circuit plants, this helps manage the return of oversized particles. In plants producing multiple aggregate sizes, it allows different fractions to be collected separately.

Operating conditions also matter. Excessive feed, blocked screen openings, uneven material distribution and worn screen media can reduce screening effectiveness. Regular inspections and timely maintenance help operators identify these issues before they cause extended production interruptions.

For this reason, vibrating screens should be selected as part of the complete crushing and screening circuit, with the crusher output, conveyor arrangement and final product requirements considered together.

### Why Choose Pithal Machines for Vibrating Screens?

Choosing a vibrating screen manufacturer involves evaluating the suitability of the equipment, available configurations, technical specifications and compatibility with the intended processing application.

Pithal Machines provides crushing and screening equipment for material-processing operations, including jaw crushers, cone crushers, VSI crushers, crusher buckets and vibrating screens. These machines serve different stages of material reduction, classification and handling.

For buyers planning a new crushing plant or upgrading an existing setup, the screening requirement should be considered alongside the crushing process. Feed size, expected throughput, material properties, target aggregate grading and available installation space all influence the equipment selection.

Businesses searching for a vibro screen manufacturer or an industrial screening solution should confirm the machine's technical details and intended application before making a purchase. Comparing equipment on suitability and operating requirements provides a more useful basis for selection than price alone.

Pithal Machines can help prospective buyers explore its crushing and screening equipment according to their project requirements.

### Discuss Your Vibrating Screen Requirements with Pithal Machines

Choosing suitable screening equipment helps maintain aggregate grading and manage material flow through crushing and mining operations. The right configuration depends on the material, expected production capacity, and required output sizes.

[Contact Pithal Machines](https://www.pithalmachine.com/) to discuss your screening requirements. Share your feed material, feed size, required capacity and target product grading to help identify a suitable crushing and screening configuration for your plant.`,
  },
};

export type VibratingScreenData = ProductDetailData;

