import type { ProductDetailData } from "./productDetailTypes";

export const mSandPlantData: ProductDetailData = {
  slug: "m-sand-plant",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Prime M-Sand Crusher Plant", href: "/products/m-sand-plant" },
    ],
    eyebrow: "M-Sand Manufacturing Solutions",
    title: "M-Sand Crusher",
    highlightedTitle: "Plant",
    subtitle: "M-SAND MANUFACTURING SOLUTIONS. ENGINEERED FOR CONSISTENT QUALITY AND HIGH PRODUCTIVITY.",
    description:
      "M-Sand Crusher Plants combine crushing, shaping, screening, conveying and controls into optimized layouts for producing high-quality manufactured sand for construction, concrete, road and infrastructure applications.",
    image: {
      src: "/product-hero/COMPLETE PLANT SOLUTIONS banner.webp",
      alt: "M-Sand Crusher Plant system",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
    quickStats: [
      { label: "50 - 500+ TPH", value: "Capacity Range", icon: "gauge" },
      { label: "VSI Shaping", value: "Technology", icon: "ruler" },
      { label: "High Yield", value: "Cubical Sand", icon: "zap" },
      { label: "Turnkey Plants", value: "Application", icon: "boxes" },
    ],
  },
  statsSection: {
    eyebrow: "Technical Highlights",
    title: "M-Sand Crusher Plant Performance and",
    highlight: "Key Technical Details",
    subtitle:
      "Discover the engineering and technical details behind efficient crushing, accurate screening and consistent M-sand production.",
    ctaText: "Built for Performance. Engineered for Results.",
    cta: { label: "Talk to Technical Expert", href: "#contact", variant: "primary", icon: "arrow" },
  },
  stats: [
    { label: "Capacity Range", value: "50 - 500+", unit: "TPH", description: "2-stage, 3-stage and VSI configurations", icon: "gauge" },
    { label: "Feed Size", value: "Custom", unit: "Feed", description: "Designed for demanding material flow", icon: "feeder" },
    { label: "Motor Power", value: "Plant Based", unit: "", description: "Efficient drive options", icon: "zap" },
    { label: "Plant Mobility", value: "Stationary & Semi-Mobile", unit: "", description: "Stationary, semi-mobile, track & wheel mounted", icon: "shield" },
    { label: "Application", value: "M-Sand, Aggregates, Concrete, Infrastructure", unit: "", description: "", icon: "boxes" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "M-Sand Crusher Plant Product",
    highlight: "Overview",
    description:
      "M-Sand Crusher Plant is designed to process hard rock into high-quality manufactured sand with integrated crushing, shaping and screening operations.",
    image: {
      src: "/images/products/prime-m-sand-plant.png",
      alt: "M-Sand Crusher Plant system overview",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "Turnkey Design", text: "Complete system planned around your material and output", icon: "layout" },
      { title: "Integrated Flow", text: "Crushers, VSI, screens, feeders, and conveyors work together", icon: "settings" },
      { title: "Custom Capacity", text: "Configured for project-specific sand production goals", icon: "gauge" },
      { title: "Full Support", text: "Engineering, installation, and commissioning assistance", icon: "headphones" },
    ],
    callouts: [
      { label: "Primary Stage", text: "Jaw crusher handles large feed material", position: "leftTop" },
      { label: "Secondary Stage", text: "Cone crusher controls intermediate reduction", position: "rightTop" },
      { label: "VSI Shaping", text: "Vertical shaft impactor produces cubical sand", position: "rightMiddle" },
      { label: "Screening & Washing", text: "Separates and cleans manufactured sand", position: "rightBottom" },
      { label: "Control Layout", text: "Plant designed for smooth operation and service", position: "bottomCenter" },
    ],
    applications: {
      eyebrow: "Applications",
      description: "Engineered for M-sand production across construction, ready-mix concrete, road building, quarrying, precast and infrastructure projects.",
      items: [
        { label: "Construction", icon: "building" },
        { label: "Ready-Mix", icon: "factory" },
        { label: "Aggregates", icon: "mountain" },
        { label: "Precast", icon: "boxes" },
        { label: "Infrastructure", icon: "hardHat" },
      ],
    },
  },
  performanceSection: {
    eyebrow: "Core Advantages",
    title: "Key Features of M-Sand Crusher",
    highlight: "Plant",
    subtitle:
      "Engineered for reliable sand production, the M-Sand Crusher Plant combines robust crushers, VSI technology, precision screens and optional washing systems.",
  },
  performanceFeatures: [
    { title: "VSI Shaping Technology", description: "Produces cubical, well-graded manufactured sand particles.", icon: "settings" },
    { title: "Optimized Plant Layout", description: "Integrated flow improves uptime and production balance.", icon: "layout" },
    { title: "End-To-End Equipment", description: "Crushing, VSI shaping, screening, washing and stockpiling in one system.", icon: "factory" },
    { title: "Scalable Capacity", description: "Plant designs support future expansion and higher output.", icon: "trending" },
    { title: "Project Support", description: "Technical support from selection through commissioning.", icon: "headphones" },
  ],
  specificationsSection: {
    eyebrow: "Technical Data",
    title: "M-Sand Crusher Plant Technical",
    highlight: "Data",
    subtitle:
      "Explore the technical details behind plant capacity, crusher configuration, power requirements and manufactured sand quality.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Configuration", key: "feedOpening" },
      { label: "Feed Size", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Capacity Range", key: "capacity", emphasis: "primary" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Plant Type", key: "dimension" },
    ],
    note: "Specifications are subject to change based on project requirements and custom plant configuration.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    { model: "PMSP-100", feedOpening: "2-Stage VSI Plant", maxFeedSize: "Up to 400 mm", capacity: "50 - 100 TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "Stationary / Semi-Mobile" },
    { model: "PMSP-200", feedOpening: "3-Stage M-Sand Plant", maxFeedSize: "Up to 550 mm", capacity: "100 - 200 TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "Aggregate & Sand Plant" },
    { model: "PMSP-350", feedOpening: "3-Stage M-Sand Plant", maxFeedSize: "Up to 700 mm", capacity: "200 - 350 TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "High Output Sand Plant" },
    { model: "PMSP-500", feedOpening: "4-Stage Turnkey Plant", maxFeedSize: "Up to 800 mm", capacity: "350 - 500+ TPH", motorPower: "Plant Based", weight: "Project Based", dimension: "Complete Turnkey Plant" },
  ],
  industriesSection: {
    eyebrow: "Applications",
    title: "M-Sand Crusher Plant",
    highlight: "Applications",
    subtitle:
      "Engineered for M-sand production across construction, ready-mix concrete, road building, quarrying, precast and infrastructure projects.",
  },
  industries: [
    {
      title: "Ready-Mix Concrete",
      description: "Consistent cubical sand ideal for high-strength RMC and batching plants.",
      image: { src: "/images/industries/construction.jpg", alt: "Ready-mix concrete application" },
      icon: "building",
      href: "#",
      actionLabel: "Explore",
    },
    {
      title: "Construction & Building",
      description: "Well-graded manufactured sand for plastering, masonry, and civil structures.",
      image: { src: "/images/industries/aggregates.jpg", alt: "Construction application" },
      icon: "layers",
      href: "#",
      actionLabel: "Explore",
    },
    {
      title: "Roads & Highways",
      description: "Meets strict grading curves for asphalt mixes and road base layers.",
      image: { src: "/images/industries/infrastructure.jpg", alt: "Road infrastructure application" },
      icon: "hardHat",
      href: "#",
      actionLabel: "Explore",
    },
    {
      title: "Precast Concrete",
      description: "Controlled particle distribution for durable pipes, blocks, and precast panels.",
      image: { src: "/images/industries/cement.jpg", alt: "Precast application" },
      icon: "factory",
      href: "#",
      actionLabel: "Explore",
    },
    {
      title: "Quarrying & Mining",
      description: "Maximizes quarry profitability by converting stone fines and scalpings into premium sand.",
      image: { src: "/images/industries/mining.jpg", alt: "Quarrying application" },
      icon: "pickaxe",
      href: "#",
      actionLabel: "Explore",
    },
  ],
  processSection: {
    eyebrow: "Working Process",
    title: "M-Sand Crusher Plant Working",
    highlight: "Process",
    subtitle:
      "A systematic process of feeding, primary crushing, secondary crushing, VSI shaping, screening and washing transforms raw rock into graded manufactured sand.",
  },
  processSteps: [
    {
      number: "01",
      title: "Raw Material Feeding",
      description: "Vibrating feeder regulates the continuous flow of raw rock into the primary stage.",
      iconFile: "feeder",
      image: { src: "/images/products/complete-plants/process-1.png", alt: "Feeding stage" },
    },
    {
      number: "02",
      title: "Primary & Secondary Crushing",
      description: "Jaw and cone crushers reduce large stones into manageable feed for the sand-making stage.",
      iconFile: "jaw",
      image: { src: "/images/products/complete-plants/process-2.png", alt: "Crushing stage" },
    },
    {
      number: "03",
      title: "VSI Sand Making & Shaping",
      description: "Vertical Shaft Impactor applies high-velocity impact for cubical shaping and sand generation.",
      iconFile: "vsi",
      image: { src: "/images/products/complete-plants/process-3.png", alt: "VSI shaping stage" },
    },
    {
      number: "04",
      title: "Screening & Washing",
      description: "Precision vibrating screens classify sand fractions while optional washers remove excess fines.",
      iconFile: "screen",
      image: { src: "/images/products/complete-plants/process-4.png", alt: "Screening and washing stage" },
    },
  ],
  videoSection: {
    eyebrow: "VIDEO SHOWCASE",
    title: "SEE M-SAND PLANT.",
    highlight: "IN ACTION.",
    description:
      "Watch how Pithal M-Sand Crusher Plants deliver stable performance, high uptime, and reliable manufactured sand quality.",
    points: ["VSI Shaping Technology", "Optimized Plant Layout", "End-To-End Equipment", "Scalable Capacity"],
    features: [
      { title: "VSI Shaping Technology", description: "Produces cubical, well-graded manufactured sand particles.", icon: "settings" },
      { title: "Optimized Plant Layout", description: "Integrated flow improves uptime and production balance.", icon: "layout" },
      { title: "End-To-End Equipment", description: "Crushing, VSI shaping, screening, washing and stockpiling in one system.", icon: "factory" },
      { title: "Scalable Capacity", description: "Plant designs support future expansion and higher output.", icon: "trending" },
    ],
    thumbnail: {
      src: "/images/products/complete-plants/video-showcase.png",
      alt: "M-Sand Crusher Plant performance video thumbnail",
    },
    caption: "M-SAND PLANT DEMONSTRATION",
    subCaption: "Explore every detail of our manufactured sand plant performance.",
    duration: "2:15",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "RELATED EQUIPMENT",
    title: "Explore Our Crushing",
    highlight: "Equipment",
    subtitle:
      "Explore Pithal Machines' range of reliable M-sand machines, VSI crushers, screens, feeders, conveyors and complete crushing solutions.",
  },
  relatedMachines: [
    {
      title: "Prime VSI Crusher",
      href: "/products/vsi-crushers",
      image: { src: "/images/products/vsi-crusher/card.png", alt: "Prime VSI Crusher" },
      icon: "vsi",
      category: "Crushers",
      description: "Tertiary shaping and manufactured sand production with cubical yield.",
      actionLabel: "VIEW DETAILS",
    },
    {
      title: "Prime Cone Crusher",
      href: "/products/cone-crushers",
      image: { src: "/images/products/cone-crusher/card.png", alt: "Prime Cone Crusher" },
      icon: "cone",
      category: "Crushers",
      description: "Secondary and tertiary crushing for tight product sizing and high output.",
      actionLabel: "VIEW DETAILS",
    },
    {
      title: "Prime Jaw Crusher",
      href: "/products/jaw-crushers",
      image: { src: "/images/products/jaw-crusher/card.png", alt: "Prime Jaw Crusher" },
      icon: "jaw",
      category: "Crushers",
      description: "Primary crushing solution engineered for heavy rock and high durability.",
      actionLabel: "VIEW DETAILS",
    },
    {
      title: "Vibrating Screens",
      href: "/products/vibrating-screens",
      image: { src: "/images/products/vibrating-screen/card.png", alt: "Vibrating Screens" },
      icon: "screen",
      category: "Screening",
      description: "Multi-deck screening systems for precise aggregate classification.",
      actionLabel: "VIEW DETAILS",
    },
    {
      title: "Complete Crusher Plant",
      href: "/products/complete-plants",
      image: { src: "/images/products/complete-plants/product-review.png", alt: "Complete Crusher Plant" },
      icon: "factory",
      category: "Turnkey Plants",
      description: "Complete turnkey crushing and screening plants for high-volume aggregate production.",
      actionLabel: "VIEW DETAILS",
    },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST CONSULTATION",
    title: "LET'S BUILD THE RIGHT",
    highlight: "SOLUTION FOR YOU.",
    description:
      "Share your project requirement and our technical team will help you select the right M-Sand Crusher Plant configuration based on feed size, capacity, application, and final output requirement.",
    image: {
      src: "/images/products/complete-plants/contact-us.svg",
      alt: "M-Sand Crusher Plant consultation support",
    },
    benefits: [
      { title: "EXPERT CONSULTATION", text: "Get the right solution from industry experts.", icon: "settings" },
      { title: "TAILORED RECOMMENDATION", text: "Custom advice based on your material and goals.", icon: "clipboard" },
      { title: "OPTIMIZED PERFORMANCE", text: "Maximize productivity and reduce downtime.", icon: "trending" },
      { title: "END TO END SUPPORT", text: "From selection to after-sales service.", icon: "headphones" },
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
    title: "M-Sand Crusher Plant",
    highlight: "Downloads",
    subtitle:
      "Access brochures, layout drawings, technical specifications and project references to explore the M-Sand Crusher Plant's features and capabilities.",
    supportCta: { label: "REQUEST DOCUMENT", href: "#", variant: "primary", icon: "arrow" },
  },
  resources: [
    {
      type: "PDF",
      title: "PRODUCT BROCHURE",
      description: "Comprehensive overview of features, benefits and applications.",
      image: { src: "/images/products/complete-plants/product-brochure.svg", alt: "PRODUCT BROCHURE" },
      href: "",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "DATASHEET",
      title: "TECHNICAL DATASHEET",
      description: "Detailed technical data, capacity tables and dimensions.",
      image: { src: "/images/products/complete-plants/technical-datasheet.svg", alt: "TECHNICAL DATASHEET" },
      href: "",
      actionLabel: "DOWNLOAD PDF",
    },
    {
      type: "MANUAL",
      title: "OPERATION & MAINTENANCE",
      description: "Essential guidelines for operation, maintenance and safety.",
      image: { src: "/images/products/complete-plants/operation-maintanance-manual.png", alt: "OPERATION & MAINTENANCE MANUAL" },
      href: "",
      actionLabel: "DOWNLOAD PDF",
    },
  ],
  supportFeatures: [
    { title: "TRUSTED INFORMATION", text: "Verified and updated technical content.", icon: "shield" },
    { title: "EASY ACCESS", text: "Instant downloads anytime, anywhere.", icon: "clipboard" },
    { title: "MAKE INFORMED DECISIONS", text: "All the data you need to choose the right equipment.", icon: "target" },
    { title: "EXPERT SUPPORT", text: "Our team is here to help with any questions.", icon: "headphones" },
  ],
  faqSection: {
    title: "M-Sand Crusher Plant",
    highlight: "FAQs",
    faqs: [
      {
        question: "1. What equipment is required for an M sand plant?",
        answer:
          "An M sand plant generally requires crushing equipment, a sand-making machine, vibrating screens, feeders and belt conveyors. Additional crushing stages, recirculation or washing may be required depending on the raw material.",
      },
      {
        question: "2. What determines M sand plant cost?",
        answer:
          "Cost depends on production capacity, raw material characteristics, machinery selection, screening and washing requirements, installation and site infrastructure. Operating expenses should also be considered.",
      },
      {
        question: "3. Which machine is used to manufacture M sand?",
        answer:
          "Manufactured sand is produced using crushing and sand-making equipment. A VSI may be suitable when particle shaping is required, depending on the feed material and product specifications.",
      },
      {
        question: "4. Is washing necessary in an M sand manufacturing plant?",
        answer:
          "Not always. Washing depends on the impurities in the raw material and the cleanliness requirements of the finished sand.",
      },
      {
        question: "5. How do I choose an M sand machine manufacturer in India?",
        answer:
          "Compare equipment suitability, technical specifications, plant configuration, maintenance requirements and the scope of supply. Share your capacity, raw material type, feed size and finished sand specifications to support equipment selection.",
      },
    ],
  },
  longContent: {
    content: `## M Sand Plant Manufacturer in India – Pithal Machines

Pithal Machines provides crushing and screening equipment solutions for manufactured sand production, aggregate processing and construction material applications. A properly configured M sand crusher plant combines crushing, sand making, screening and material handling to produce manufactured sand according to the required grading and application specifications.

Plant configuration depends on the raw material, feed size, required production capacity, finished sand quality and site conditions. Selecting compatible equipment helps maintain material flow and avoid bottlenecks across processing stages.

Pithal Machines helps businesses assess their crushing and screening requirements to identify suitable equipment for their manufactured sand production projects.

### What Is Manufactured Sand?

Manufactured sand, commonly known as M sand, is a fine aggregate produced by mechanically processing suitable rock or stone. The process generally involves crushing, particle shaping and screening to obtain the required particle-size distribution.

Unlike naturally sourced river sand, manufactured sand is produced through a controlled mechanical process. Its quality depends on the source rock, crushing method, particle shape, grading and the presence of unwanted fines or impurities.

A well-planned sand plant converts raw stone into usable fine aggregate through coordinated processing stages. Manufactured sand can be used in concrete, mortar, plastering, precast products and infrastructure projects when it meets the relevant quality requirements.

### M Sand Plant Working Process

An M sand manufacturing plant typically includes crushing, sand making, screening and conveying. Additional crushing stages, material recirculation or washing may be required depending on the raw material and finished product specifications.

#### 1. Primary Crushing
Primary crushing reduces large rocks into smaller pieces suitable for further processing. The crusher is selected according to the maximum feed size, rock hardness, abrasiveness, required reduction and target production capacity.

#### 2. Secondary Crushing
Secondary crushing further reduces material when the primary crusher does not produce the required feed size for the sand-making stage. The need for this stage depends on the raw material and the selected equipment configuration.

#### 3. Sand Making and Particle Shaping
The sand-making stage processes crushed stone into fine aggregate. A suitable sand making machine is selected according to feed size, material properties, particle shape and required output.

A vertical shaft impactor (VSI) may be appropriate when additional particle shaping is required. The final selection depends on the rock characteristics and finished sand specifications.

#### 4. Screening and Size Separation
Vibrating screens separate processed material according to particle size. Screen openings, deck configuration and capacity should match the required grading and material flow.

Where the plant design permits, oversized material can be returned for further processing. Proper screening helps maintain product consistency and prevents downstream bottlenecks.

#### 5. Washing and Material Handling
Washing may be included when clay, dust or other impurities need to be reduced to meet product requirements. Feeders and belt conveyors transport material between processing stages and should be sized to maintain consistent material flow.

### Equipment Required for an M Sand Plant

The machinery required depends on the raw material, production target and finished sand specifications. Equipment should be selected as part of an integrated processing system.

#### M Sand Crusher Machine
An M sand crusher machine reduces rock into smaller sizes for further processing. Primary and secondary crushing arrangements are selected according to feed size, material hardness, required reduction and expected throughput.

#### M Sand Making Machine
An M sand making machine converts suitable crushed material into fine aggregate. A VSI or another suitable sand-making configuration may be considered based on feed compatibility, particle shape, grading and production requirements.

#### Sand Crusher Machine and Sand Making Crusher Machine
A sand crusher machine may be used to reduce rock size, while a sand-making crusher machine is intended to produce or shape fine aggregate from crushed material. Buyers should confirm the machine's role, feed-size limits, and output specifications before selecting equipment.

#### Vibrating Screens
Vibrating screens separate material into size fractions and help control finished sand grading. Their capacity and configuration should match the quantity and characteristics of the material entering the screening stage.

#### Feeders and Belt Conveyors
Feeders regulate material supply, while belt conveyors transport material between machines. Suitable sizing and layout support efficient material handling and allow practical access for inspection and maintenance.

Pithal Machines provides crushing and screening equipment solutions for industrial material processing. Evaluating the equipment together helps businesses plan a coordinated manufactured sand production setup.

### M Sand Plant Cost and Investment Factors

The M sand plant cost depends on production capacity, raw material characteristics, machinery selection, site conditions and required processing stages. A reliable estimate should be based on the proposed equipment configuration rather than a generic price.

Key cost factors include:

* **Production capacity:** Influences the sizing and arrangement of crushers, sand-making machines, screens, feeders and conveyors.
* **Raw material:** Rock hardness, abrasiveness, moisture and feed size affect equipment selection and wear-part requirements.
* **Screening and washing:** Required grading, product fractions and cleaning needs influence the equipment configuration.
* **Installation and infrastructure:** Foundations, electrical arrangements, site layout, material storage and installation requirements affect the overall investment.
* **Operating costs:** Power consumption, wear parts, maintenance, labour and downtime influence the cost of producing each tonne of sand.

The M sand manufacturing plant cost should therefore be evaluated alongside long-term operating expenses. Buyers should compare quotations using consistent assumptions about capacity, equipment scope, installation and included components.

For a project-specific assessment, prepare the required capacity, raw material type, feed size, finished sand specifications, washing requirements and relevant site details.

### Applications of Manufactured Sand

Manufactured sand can serve as fine aggregate in several construction applications when it meets the required specifications.

* **Concrete production:** Used as fine aggregate when suitable for the mix design and applicable material standards.
* **Mortar and masonry:** Used in applications requiring appropriately graded sand.
* **Plastering:** Requires suitable grading, texture, and cleanliness for the specified finish.
* **Precast products:** Used when the material meets the relevant production and product requirements.
* **Roads and infrastructure:** Applied in accordance with project specifications and material requirements.

Finished sand should be tested for its intended use. Equipment selection supports production but quality also depends on the raw material, operating conditions and quality-control process.

### Choosing M Sand Machine Manufacturers in India

When comparing M sand machine manufacturers in India, consider how well the proposed equipment matches the project's actual requirements rather than focusing only on purchase price.

* **Material assessment:** The supplier should consider rock type, feed size, hardness, abrasiveness and required output.
* **Equipment compatibility:** Crushers, sand-making machines, screens, feeders and conveyors should work together within the proposed process.
* **Product specifications:** The configuration should reflect the required sand grading, particle characteristics and intended application.
* **Plant layout:** Space availability, foundations, material flow and maintenance access should be evaluated before equipment is finalised.
* **Technical and operating requirements:** Review available specifications, power requirements, wear parts, maintenance needs and the stated scope of supply.

Pithal Machines works in crushing and screening equipment for industrial material processing. Businesses can discuss their feed material and production requirements to assess the equipment needed for a suitable M sand production setup.

### Plan Your M Sand Plant with Pithal Machines

Planning an M sand plant begins with understanding the raw material, required output and finished sand specifications. These factors determine the appropriate combination of crushing, sand-making, screening and conveying equipment.

[Contact Pithal Machines](https://www.pithalmachine.com/) with your production capacity, raw material details, feed size and target sand specifications to discuss a suitable equipment configuration for your project.`,
  },
};
