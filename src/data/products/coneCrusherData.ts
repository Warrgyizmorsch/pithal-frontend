import type { ProductDetailData } from "./productDetailTypes";

export const coneCrusherData: ProductDetailData = {
  slug: "cone-crushers",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "Prime Cone Crushers", href: "/products/cone-crushers" },
    ],
    eyebrow: "Prime Cone Crusher",
    title: "PRIME CONE",
    highlightedTitle: "CRUSHER",
    subtitle: "BUILT FOR POWER. ENGINEERED FOR PRECISION.",
    description:
      "Prime Cone Crusher is engineered for efficient secondary and tertiary crushing, delivering reliable performance and consistent material reduction across demanding mining, quarrying and aggregate applications.",
    descriptionHighlight: "efficient secondary and tertiary crushing",
    image: {
      src: "/product-hero/new Cone Crusher banner.webp",
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
    title: "PRIME CONE CRUSHER",
    highlight: "PERFORMANCE AND KEY TECHNICAL DETAILS",
    subtitle:
      "Discover the engineering and technical details behind efficient crushing, consistent output and reliable performance.",
    ctaText: "Built for Performance. Engineered for Results.",
    cta: { label: "Talk to Technical Expert", href: "#contact", variant: "primary", icon: "arrow" },
  },
  stats: [
    { label: "Capacity", value: "80 - 600", unit: "TPH", description: "High output secondary crushing", icon: "gauge" },
    { label: "Max Feed Size", value: "200 - 330", unit: "MM", description: "Handles controlled feed sizes", icon: "feeder" },
    { label: "Motor Power", value: "90 - 250", unit: "KW", description: "Efficient drive power range", icon: "zap" },
    { label: "Release System", value: "Hydraulic", unit: "", description: "Automatic tramp iron release", icon: "shield" },
    { label: "Application", value: "Mining, Aggregates, Cement", unit: "", description: "", icon: "boxes" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "PRIME CONE CRUSHER",
    highlight: "PRODUCT OVERVIEW",
    description:
      "Prime Cone Crusher is designed to deliver efficient secondary and tertiary crushing of hard and abrasive materials. Built for demanding applications, this cone crusher machine supports consistent material reduction across mining, quarrying, aggregate production, construction and material-processing operations.",
    image: {
      src: "/images/products/prime-cone-crusher.png",
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
      {
        label: "Drive System",
        text: "High-performance electric motor drive for stable crushing power",
        position: "leftTop",
        layout: {
          dotClass: "left-[35%] top-[37%]",
          cardClass: "left-[1%] top-[2%] w-[176px]",
        },
      },
      {
        label: "Inspection Access",
        text: "Easy service access for maintenance and uptime",
        position: "leftBottom",
        layout: {
          dotClass: "left-[28%] top-[54%]",
          cardClass: "left-[1%] top-[48%] w-[170px]",
        },
      },
      {
        label: "Heavy-Duty Crushing Chamber",
        text: "Optimized chamber profile for high reduction ratio",
        position: "rightTop",
        layout: {
          dotClass: "right-[36%] top-[28%]",
          cardClass: "right-[1%] top-[2%] w-[176px]",
        },
      },
      {
        label: "Mantle & Concave",
        text: "Wear-resistant liners for long service life",
        position: "rightMiddle",
        layout: {
          dotClass: "right-[38%] top-[48%]",
          cardClass: "right-[1%] top-[27%] w-[176px]",
        },
      },
      {
        label: "Hydraulic Adjustment System",
        text: "Quick setting control for consistent product size",
        position: "rightBottom",
        layout: {
          dotClass: "right-[34%] top-[60%]",
          cardClass: "right-[1%] top-[52%] w-[176px]",
        },
      },
      {
        label: "Stable Base Frame",
        text: "Reinforced frame for vibration control and durability",
        position: "bottomCenter",
        layout: {
          dotClass: "left-[48%] top-[72%]",
          cardClass: "left-[30%] top-[82%] w-[182px]",
        },
      },
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
    eyebrow: "Technical Specifications",
    title: "PRIME CONE CRUSHER",
    highlight: "TECHNICAL DATA",
    subtitle:
      "Explore the technical details behind the Prime Cone Crusher’s crushing performance, capacity, operating requirements and reliable operation.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Recommended Capacity", key: "recommendedCapacity", emphasis: "primary" },
      { label: "Feed Opening", key: "feedOpening" },
      { label: "Maximum Feed Size", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Capacity Range", key: "capacity", emphasis: "primary" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Tramp Release", key: "trampRelease" },
      { label: "Lubrication", key: "lubrication" },
      { label: "Approx. Weight", key: "weight" },
    ],
    note: "Note: Capacities vary depending on feed gradation, moisture content, rock hardness, and closed side setting.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    {
      model: "PGP-125",
      recommendedCapacity: "125 TPH",
      feedOpening: "220 mm",
      maxFeedSize: "200 mm",
      capacity: "80–150 TPH",
      motorPower: "90 kW",
      trampRelease: "Hydraulic",
      lubrication: "Automatic Oil",
      weight: "8,500 kg",
    },
    {
      model: "PGP-160",
      recommendedCapacity: "160 TPH",
      feedOpening: "250 mm",
      maxFeedSize: "230 mm",
      capacity: "120–200 TPH",
      motorPower: "132 kW",
      trampRelease: "Hydraulic",
      lubrication: "Automatic Oil",
      weight: "10,500 kg",
    },
    {
      model: "PGP-220",
      recommendedCapacity: "220 TPH",
      feedOpening: "300 mm",
      maxFeedSize: "260 mm",
      capacity: "150–300 TPH",
      motorPower: "160 kW",
      trampRelease: "Hydraulic",
      lubrication: "Automatic Oil",
      weight: "12,500 kg",
    },
    {
      model: "PGP-300",
      recommendedCapacity: "300 TPH",
      feedOpening: "340 mm",
      maxFeedSize: "300 mm",
      capacity: "200–450 TPH",
      motorPower: "200 kW",
      trampRelease: "Hydraulic",
      lubrication: "Automatic Oil",
      weight: "14,500 kg",
    },
    {
      model: "PGP-400",
      recommendedCapacity: "400 TPH",
      feedOpening: "370 mm",
      maxFeedSize: "330 mm",
      capacity: "300–600 TPH",
      motorPower: "250 kW",
      trampRelease: "Hydraulic",
      lubrication: "Automatic Oil",
      weight: "18,600 kg",
    },
  ],
  industriesSection: {
    eyebrow: "Market Sectors",
    title: "PRIME CONE CRUSHER",
    highlight: "APPLICATIONS",
    subtitle:
      "Engineered for efficient secondary and tertiary crushing across mining, quarrying, aggregate production, construction and material-processing applications.",
  },
  industries: [
    { title: "Mining", description: "Reliable secondary crushing for hard rock and mineral processing.", image: { src: "/images/industries/mining.jpg", alt: "Mining site with crushing equipment" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Aggregates", description: "Produces uniform cubical aggregates for road and concrete applications.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregate quarry conveyors and stockpiles" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Efficient crushing of limestone and raw material for cement plants.", image: { src: "/images/industries/cement.jpg", alt: "Cement industry processing plant" }, icon: "factory", href: "#", actionLabel: "Explore" },
    { title: "Construction", description: "Supports infrastructure projects with consistent output material.", image: { src: "/images/industries/construction.jpg", alt: "Construction site with industrial equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "Suitable for processing recycled construction and demolition materials.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling facility material processing" }, icon: "recycle", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    eyebrow: "Working Principle",
    title: "PRIME CONE CRUSHER",
    highlight: "WORKING PROCESS",
    subtitle:
      "A powerful crushing process designed to reduce hard materials efficiently and deliver consistent output with reliable performance.",
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
    eyebrow: "CRUSHING EQUIPMENT",
    title: "EXPLORE OUR",
    highlight: "CRUSHING EQUIPMENT",
    subtitle:
      "Explore Pithal Machines’ range of reliable crushing and screening solutions engineered to meet diverse material-processing requirements and demanding industrial applications.",
  },
  relatedMachines: [
    { title: "PRIME JAW CRUSHER", description: "Heavy-duty primary crushing for hard rock and large feed material.", image: { src: "/images/products/related-products/jaw-crusher.png", alt: "Prime Jaw Crusher" }, category: "Primary", icon: "jaw", href: "/products/jaw-crushers", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VIBRATING SCREEN", description: "High-performance screening for accurate size separation and higher output.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Prime Vibrating Screen" }, category: "Screening", icon: "screen", href: "/products/vibrating-screens", actionLabel: "VIEW DETAILS" },
    { title: "PRIME VIBRATING FEEDER", description: "Consistent and controlled material feeding for smooth plant operation.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Prime Vibrating Feeder" }, category: "Feeding", icon: "feeder", href: "/products/feeders", actionLabel: "VIEW DETAILS" },
    { title: "PRIME BELT CONVEYOR", description: "Efficient material handling with robust design and long service life.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Belt Conveyor" }, category: "Conveying", icon: "conveyor", href: "/products/conveyor-systems", actionLabel: "VIEW DETAILS" },
    { title: "IMPACT CRUSHER", description: "High reduction crushing for softer stone and recycling applications.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "Impact Crusher" }, category: "Crushing", icon: "vsi", href: "#", actionLabel: "VIEW DETAILS" },
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
    title: "Prime Cone Crusher",
    highlight: "Downloads",
    subtitle:
      "Access product brochures, technical specifications and detailed documentation to explore the Prime Cone Crusher’s features, capabilities, applications and operating requirements.",
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
  faqSection: {
    eyebrow: "FAQ",
    title: "Frequently Asked",
    highlight: "Questions",
    faqs: [
      {
        question: "1. What is a cone crusher used for?",
        answer:
          "A cone crusher is primarily used for secondary and tertiary crushing of hard rock. Common applications include mining, quarrying, aggregate production and manufactured sand processing.",
      },
      {
        question: "2. What determines cone crusher capacity?",
        answer:
          "Capacity depends on feed size, material hardness, crushing chamber configuration, discharge setting and operating conditions. The performance of connected screens and conveyors also affects total plant output.",
      },
      {
        question: "3. What is the cone crusher machine price in India?",
        answer:
          "The price varies according to capacity, technical specifications, configuration and supporting equipment. Contact the manufacturer with your application requirements to request a suitable quotation.",
      },
      {
        question: "4. What is a hydraulic cone crusher?",
        answer:
          "A hydraulic cone crusher uses hydraulic systems for functions that may include setting adjustment and overload protection, depending on its design and configuration.",
      },
      {
        question: "5. Can a cone crusher be used for manufactured sand?",
        answer:
          "Yes. A cone crusher can reduce rock size within a manufactured sand production line. A VSI crusher may be required for additional particle shaping, depending on the feed material and final sand specifications.",
      },
      {
        question: "6. How do I choose the right cone crusher manufacturer?",
        answer:
          "Evaluate technical specifications, application suitability, maintenance requirements, spare parts availability and after-sales support. Confirm that the proposed machine matches your required production conditions before purchasing.",
      },
    ],
  },
  longContent: {
    content: `## Cone Crusher Manufacturer in India – Pithal Machines

A cone crusher is an important part of crushing operations where hard rock needs to be reduced into smaller, consistently sized aggregates. It is widely used in mining, quarrying, road construction and aggregate production, particularly when material requires further processing after primary crushing.

Pithal Machines provides crushing and screening equipment for industrial material-processing applications. Selecting the right cone crusher machine depends on the type of rock, feed size, required output, production target and the specifications of the finished material. These factors influence machine selection, operating efficiency and long-term maintenance costs.

Whether you are establishing a new crushing plant or expanding an existing operation, understanding the equipment's working principle and application requirements helps you make a more informed investment.

### What Is a Cone Crusher?

A cone crusher is a compression-based machine that breaks rocks and minerals by squeezing them between a moving inner cone and a stationary outer crushing surface. This action reduces larger pieces into smaller particles suitable for further processing.

Cone crushers are generally used for secondary and tertiary crushing, after primary equipment such as a jaw crusher has reduced the initial feed size. The processed material may then pass through vibrating screens to separate aggregates according to the required grading.

These machines are commonly considered for hard and abrasive materials such as granite, basalt and other types of rock. Their suitability depends on the material characteristics, required product size and overall crushing circuit.

### How Does a Cone Crusher Machine Work?

The working process begins when pre-crushed material enters the crushing chamber. An eccentric mechanism moves the inner cone, creating a continuous compression action against the outer crushing surface.

As the gap between the surfaces changes, the material is compressed and fractured into smaller pieces. The crushed material gradually moves through the chamber and exits through the discharge opening.

The final product size depends on the discharge setting, feed characteristics, crushing chamber configuration and condition of the wear components. A consistent feed supply also helps maintain stable operation.

In a complete crushing plant, the cone crusher machine works alongside feeding equipment, vibrating screens and belt conveyors. When these components are properly matched, the plant can maintain a more consistent material flow and reduce unnecessary production interruptions.

### Key Features of a Cone Crusher

The performance of a cone crusher depends on its construction, crushing mechanism and suitability for the material being processed. These factors influence product grading, component wear and operating requirements.

#### Durable Crushing Components

Cone crushers operate under repeated compressive loads, particularly when handling hard rock. Durable crushing surfaces and a suitably designed supporting structure are important for managing wear and maintaining reliable operation.

#### Controlled Product Size

The crushing chamber and discharge setting influence the size of the finished material. Correct configuration helps operators achieve the required aggregate grading for subsequent processing and end-use applications.

#### Hydraulic Adjustment

A hydraulic cone crusher may use hydraulic systems for discharge-setting adjustment, overload protection or clearing certain blockages, depending on the model. Buyers should confirm the specific functions available in the proposed machine rather than assume that every hydraulic crusher offers identical features.

#### Integration with Other Equipment

Cone crushers can be integrated with jaw crushers, vibrating screens and conveyors to create a coordinated crushing circuit. Proper equipment selection helps ensure that material can move through each processing stage without creating unnecessary bottlenecks.

### Applications of a Cone Stone Crusher

A cone stone crusher is used in several industries where hard rock must be processed into smaller aggregate sizes.

* **Mining and quarrying:** Cone crushers reduce pre-crushed rock for subsequent processing. The appropriate configuration depends on the material's hardness, abrasiveness and required output.
* **Aggregate production:** Construction projects require aggregates in specified sizes and grading ranges. Cone crushing helps prepare material for screening and separation into different grades.
* **Road construction:** Crushed aggregates are used in road foundations and pavement layers according to project specifications. A suitable crushing and screening arrangement helps produce material that meets the required grading.
* **Manufactured sand production:** Cone crushers can reduce rock size before additional processing. Where further particle shaping is necessary, a vertical shaft impactor (VSI) crusher may be included in the production line.

The final equipment arrangement should reflect the raw material, intended application and quality requirements of the finished product.

### Cone Crusher Cost and Machine Price in India

The cone crusher cost depends on the machine's capacity, configuration, technical specifications and intended application. The overall investment may also include feeders, conveyors, vibrating screens, electrical systems and installation.

When comparing the cone crusher machine price, consider operating expenses alongside the initial purchase cost. Wear parts, spare parts availability, maintenance requirements and technical support can influence the total cost of ownership.

A machine that is unsuitable for the feed material or production target may result in reduced output and unnecessary wear. On the other hand, selecting excessive capacity can increase investment without providing a corresponding operational benefit.

For a meaningful quotation, share your required capacity, material type, maximum feed size and desired final product grading with the manufacturer. These details help establish whether the proposed equipment suits your production requirements.

### How to Choose the Right Cone Crusher Manufacturer

Choosing between cone crusher manufacturers requires careful evaluation of equipment suitability, technical support and long-term operating requirements.

Start by defining the material you need to process and the production rate your plant must achieve. Review the manufacturer's specifications for feed size, discharge adjustment, power requirements and available operating features.

Next, understand the maintenance requirements, replacement liner availability and access to spare parts. Installation requirements and compatibility with existing crushing equipment should also be considered before placing an order.

Pithal Machines offers crushing and screening equipment for industrial material-processing applications. Discussing your project requirements with the supplier can help you assess a suitable arrangement for your crushing circuit.

Before finalising a purchase, confirm the machine specifications, expected operating conditions, delivery scope and installation requirements. A clear understanding of these details helps reduce uncertainty during equipment selection.

### Crushing Solutions from Pithal Machines

Selecting a cone crusher requires more than comparing machine prices. The equipment must suit the feed material, required output and operating conditions of the plant.

Pithal Machines provides crushing and screening solutions for applications across mining, quarrying, construction and aggregate processing. When planning a new installation or upgrading an existing facility, consider how the crusher will work with the feeding, screening and conveying equipment.

Reviewing these requirements before purchase helps identify a suitable configuration and avoid capacity mismatches across the production line.

[Contact Pithal Machines](https://www.pithalmachine.com/) to discuss your crushing requirements and request a quotation for your project.`,
  },
};

export type ConeCrusherData = ProductDetailData;
