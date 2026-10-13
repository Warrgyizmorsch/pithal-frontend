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
      src: "/images/products/prime-vsi-crusher.png",
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
        question: "1. What is a VSI crusher used for?",
        answer:
          "A VSI crusher is used for further crushing and shaping suitable rock materials through high-speed impact. Common applications include manufactured sand production, aggregate shaping and tertiary crushing.",
      },
      {
        question: "2. Can a VSI crusher produce M-sand?",
        answer:
          "Yes. A suitably configured VSI crusher plant can produce manufactured sand from appropriate feed material. Screening, washing and classification may be required to achieve the specified grading and quality.",
      },
      {
        question: "3. What factors affect VSI crusher price?",
        answer:
          "The price depends on capacity, rotor design, motor power, construction, wear components and the equipment included in the supply. Installation and supporting plant equipment can also affect the total project cost.",
      },
      {
        question: "4. How do I choose the right VSI crusher manufacturer?",
        answer:
          "Evaluate the manufacturer's technical specifications, application suitability, spare-part availability, maintenance requirements and support arrangements. Provide clear information about your material and production target before requesting a quotation.",
      },
      {
        question: "5. Can a VSI crusher be added to an existing crushing plant?",
        answer:
          "Yes, provided the existing equipment can accommodate the required material flow. The capacities of upstream crushers, feeders, screens and conveyors should be assessed before installation.",
      },
      {
        question: "6. What affects the quality of VSI sand?",
        answer:
          "Sand quality depends on the feed material, particle-size distribution, crusher settings and downstream screening or classification. Washing may also be required, depending on the material and intended use.",
      },
    ],
  },
  longContent: {
    content: `## Prime VSI Crusher Manufacturer in India for Manufactured Sand and Aggregates

Manufactured sand production requires more than just crushing rocks into smaller pieces. The finished material must have suitable particle shape, grading and quality for its intended construction application. This is where a VSI crusher becomes an important part of a modern crushing and screening plant.

A VSI crusher, also known as a vertical shaft impactor, uses high-speed impact to reduce the size of suitable feed material and improve aggregate shape. It is commonly used in the tertiary crushing stage, particularly when the objective is to produce manufactured sand (M-sand) or better-shaped aggregates for concrete, asphalt and road construction.

For crushing plant operators, the challenge is to achieve the required product quality without allowing power consumption, wear-part replacement and maintenance to drive up production costs. Selecting the right VSI crusher machine requires a clear understanding of the feed material, production target and finished-product specifications.

Pithal Machines offers crushing and screening equipment solutions for industrial material processing. Businesses planning a new sand-making facility or upgrading an existing crushing plant should evaluate the VSI configuration according to their actual production requirements.

### What Is a Vertical Shaft Impactor?

A vertical shaft impactor is a crushing machine that uses a high-speed rotor to accelerate material towards a crushing zone. Instead of relying mainly on compression, as a jaw crusher does, it breaks material through impact between particles or against wear-resistant surfaces.

This crushing action makes the vertical shaft impactor crusher particularly useful for shaping aggregates and producing fine material from suitable rock. Depending on the machine design, it can operate using a rock-on-rock or rock-on-metal crushing arrangement.

In a rock-on-rock configuration, particles collide with a layer of rock inside the crushing chamber. In a rock-on-metal arrangement, material strikes metal anvils or other wear-resistant surfaces. The appropriate configuration depends on the feed material, desired reduction, product requirements and wear costs.

A VSI crusher is generally used after primary or secondary crushing rather than as the first machine in a conventional hard-rock crushing circuit. Jaw crushers and cone crushers reduce larger rocks, while the VSI provides further crushing and shaping when required.

This combination is particularly useful in aggregate plants where particle shape and manufactured sand quality are important considerations.

### How Does a VSI Crusher Machine Work?

The working principle of a VSI crusher machine centres on centrifugal acceleration and high-speed impact.

Feed material enters the machine through the feed opening and moves towards the rotating rotor. The rotor accelerates the particles and directs them into the crushing chamber, where repeated collisions break the material into smaller pieces.

The crushed material then leaves the machine and moves to the next stage of processing. Vibrating screens separate the output into different size fractions, while material that does not meet the required specifications may be returned for further crushing in a closed-circuit arrangement.

Several operating factors influence the final result. Rotor speed affects the intensity of impact, while feed rate and feed-size distribution influence the load on the machine. Rock hardness and abrasiveness affect both crushing behaviour and wear-part consumption.

For example, an inconsistent feed can make it difficult to maintain stable output. Similarly, feeding material outside the machine's specified size range may increase wear and affect performance.

A well-matched crushing circuit helps maintain a consistent material flow and allows the VSI crusher to perform its intended role without creating unnecessary bottlenecks.

### Key Benefits of a VSI Crusher

A VSI crusher improves aggregate shape, supports consistent manufactured sand production and helps meet the quality requirements of modern construction projects.

#### Better Particle Shape

Particle shape matters when crushed aggregates are used in concrete, asphalt and other construction applications. Poorly shaped particles can affect packing, workability and the properties of the finished mix.

A VSI crusher can help produce more cubical aggregates by breaking material through repeated impact. The actual improvement depends on the rock type, feed characteristics, rotor settings and the performance of the complete crushing circuit.

#### Suitable for Manufactured Sand Production

Manufactured sand is produced by processing suitable rock through crushing, screening and where required, washing or classification. A VSI crusher can play an important role in this process by reducing particle size and improving shape.

The quality of VSI sand depends on the grading of the feed, crusher operation and downstream processing. Excess fines, moisture and variations in feed material must be managed to meet the specifications of the intended application.

For plants supplying sand to concrete manufacturers, product testing and regular grading checks are essential. A crusher alone cannot guarantee compliance with a particular sand specification.

#### Better Control Over the Finished Product

When correctly configured with suitable screens and material-handling equipment, a VSI crusher plant can help operators manage product-size distribution and separate aggregates into usable fractions.

Closed-circuit operation may be appropriate where material requires additional crushing to meet the target size. However, the amount of recirculating material must be considered when sizing the crusher, screens and conveyors.

#### Integration With Existing Equipment

A VSI crusher can be incorporated into an existing crushing line or included in a new plant layout. Its effectiveness depends on how well the machine matches the upstream crushers and downstream screening equipment.

Proper coordination between feeders, crushers, screens and conveyors helps avoid uneven loading and unnecessary material handling.

### Applications of a VSI Crusher Plant

A VSI crusher plant is commonly used where aggregate shaping or manufactured sand production is required. Its suitability depends on the characteristics of the material being processed and the specifications of the final product.

* **M-sand manufacturing:** Suitable crushed rock is processed into fine aggregate for construction applications. Screening and washing may be required to achieve the desired grading and manage excess fines.
* **Concrete aggregate production:** VSI crushing can improve particle shape for aggregates intended for concrete production. The final material must still meet the applicable grading and quality requirements.
* **Road and highway construction:** VSI-produced aggregates can be used in road construction and asphalt applications when their size, shape and other properties meet project specifications.
* **Quarrying and stone crushing:** Existing crushing plants may use a VSI crusher as a tertiary stage to improve aggregate shape or produce additional fine fractions.
* **Selected mining applications:** A VSI can be useful for further crushing or shaping suitable materials in mineral-processing operations, depending on the process requirements.

Before selecting a machine for any of these applications, operators should assess the feed material, required throughput and intended product. These details determine whether a VSI is the appropriate solution and how it should be integrated into the plant.

### Factors to Consider When Selecting a VSI Crusher Machine

The right machine depends on the production target and the material being processed. Comparing crushers solely by their stated capacity can lead to poor equipment selection because actual performance varies with operating conditions.

* **Feed material and size:** Identify the type of rock, maximum feed size, hardness and abrasiveness. The feed must remain within the manufacturer's specified limits for the selected configuration.
* **Required capacity:** Define the expected throughput in tonnes per hour. It is also important to distinguish total crusher throughput from saleable finished-product output, particularly when the plant operates with recirculation.
* **Product grading:** Specify the required sand or aggregate size distribution. This helps determine the crusher configuration and the screening or classification equipment needed after crushing.
* **Rotor and crushing configuration:** Rock-on-rock and rock-on-metal arrangements offer different operating characteristics. The choice should reflect the material's abrasiveness, required reduction and expected wear costs.
* **Power and operating expenses:** Consider the machine's power requirements alongside the expected production rate, wear-part consumption and maintenance needs. The lowest initial purchase price does not necessarily represent the lowest cost per tonne.
* **Maintenance and service access:** Ask about inspection procedures, replacement wear parts, routine maintenance and spare-part availability. These factors affect machine downtime and long-term operating reliability.
* **Compatibility with the plant:** Check whether the existing feeder, upstream crushers, screens and conveyors can handle the intended material flow. If the plant is new, these components should be designed as one coordinated system.

Discussing these requirements with the supplier before purchase helps identify a machine that fits the application instead of relying on general capacity claims.

### Choosing Pithal Machines for VSI Crushing Solutions

Selecting a VSI crusher manufacturer involves more than finding a machine with the required capacity. Buyers need to understand whether the proposed equipment is suitable for their material, production process and finished-product requirements.

Pithal Machines provides crushing and screening equipment solutions for businesses involved in aggregate production, mining and manufactured sand processing. Its VSI crushing solutions can be evaluated according to the requirements of a proposed installation or an existing crushing operation.

When discussing your requirements with Pithal Machines, share details about the feed material, desired output, target grading and available equipment. This information helps establish the intended application and identify the technical details that need to be confirmed before purchasing.

Before finalising an order, request the applicable technical specifications, capacity information, power requirements, wear-part details and scope of supply. These details are important for planning installation, estimating operating expenses and coordinating the crusher with the rest of the plant.

Looking for a VSI crusher for manufactured sand or aggregate production? Contact [Pithal Machines](https://www.pithalmachine.com/) to discuss your application, production requirements and suitable crushing and screening configuration.

### Discuss Your VSI Crusher Requirements With Pithal Machines

Manufactured sand and aggregate production depend on suitable feed material, the right crushing process and effective screening. A VSI crusher can improve particle shape and support the production of fine aggregates when its configuration matches the application.

For businesses planning a new sand-making plant or upgrading an existing crushing line, equipment selection should begin with the required output, material characteristics and finished-product specifications.

Contact Pithal Machines to discuss your VSI crusher requirements and request a suitable crushing solution for your operation.`,
  },
};

export type VsiCrusherData = ProductDetailData;

