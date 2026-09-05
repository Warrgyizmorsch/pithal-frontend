import type { ProductDetailData } from "./productDetailTypes";

export const primeBucketData: ProductDetailData = {
  slug: "prime-bucket",
  images: [
    {
      src: "/product-hero/Prime Bucket Crusher banner.webp",
      alt: "Prime Bucket Crusher Hero – excavator-mounted jaw crusher on demolition site",
    },
    {
      src: "/primebucket/overview1.png",
      alt: "Prime Bucket Crusher Overview – crusher bucket detail and attachment system",
    },
   
  ],
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "PrimeBucket", href: "/products/prime-bucket" },
    ],
    eyebrow: "Prime Crusher Bucket",
    title: "PRIME CRUSHER",
    highlightedTitle: "BUCKET",
    subtitle: "BUILT FOR ON-SITE CRUSHING. ENGINEERED FOR VERSATILITY.",
    description:
      "Prime Bucket Crusher is engineered for efficient on-site material crushing, offering a practical and versatile solution for excavator-based crushing applications across construction, quarrying, mining and material-processing operations.",
    descriptionHighlight: "efficient on-site material crushing",
    image: {
      src: "/product-hero/Prime Bucket Crusher banner.webp",
      alt: "Pithal Prime Bucket Crusher operating on a demolition site",
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
    title: "PRIME CRUSHER BUCKET",
    highlight: "PERFORMANCE AND KEY TECHNICAL DETAILS",
    subtitle:
      "Discover the engineering and technical details behind efficient on-site crushing, dependable operation and versatile material-processing performance.",
    ctaText: "Crush On Site. Save Costs. Build Faster.",
  },
  stats: [
    { label: "Excavator", value: "8 - 50", unit: "Ton", description: "Standard carrier machine range", icon: "truck" },
    { label: "Feed Size", value: "Up to 1500", unit: "mm (Max)", description: "Handles large debris", icon: "feeder" },
    { label: "Oil Flow", value: "80 - 240", unit: "LPM", description: "Standard excavator circuit", icon: "zap" },
    { label: "Output Size", value: "20 - 160", unit: "mm", description: "Adjustable discharge setting", icon: "layers" },
    { label: "Weight", value: "1,850 - 4,800", unit: "kg", description: "Optimized for stability", icon: "scale" },
  ],
  intro: {
    eyebrow: "Product Overview",
    title: "PRIME CRUSHER BUCKET",
    highlight: "PRODUCT OVERVIEW",
    description:
      "Prime Bucket Crusher is designed to deliver crushing directly to the job site, enabling operators to process materials efficiently with an excavator-mounted solution. Built for demanding applications, it supports practical material reduction across construction, quarrying, mining, demolition and recycling operations.",
    image: {
      src: "/primebucket/overview1.png",
      alt: "Prime Bucket Crusher excavator attachment system",
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
      {
        label: "Universal Hitch",
        text: "Easy mounting on standard excavators",
        position: "leftTop",
        layout: {
          dotClass: "left-[30%] top-[20%]",
          cardClass: "left-[1%] top-[2%] w-[168px]",
        },
      },
      {
        label: "Manganese Jaws",
        text: "High-grade steel for maximum wear life",
        position: "leftBottom",
        layout: {
          dotClass: "left-[48%] top-[40%]",
          cardClass: "left-[1%] top-[32%] w-[168px]",
        },
      },
      {
        label: "Reversible Jaws",
        text: "Increased operating life and lower cost",
        position: "bottomCenter",
        layout: {
          dotClass: "left-[48%] top-[62%]",
          cardClass: "left-[1%] top-[62%] w-[168px]",
        },
      },
      {
        label: "Heavy Duty Drive",
        text: "Direct hydraulic drive from excavator circuit",
        position: "rightTop",
        layout: {
          dotClass: "right-[16%] top-[34%]",
          cardClass: "right-[1%] top-[2%] w-[168px]",
        },
      },
      {
        label: "Wear Chamber",
        text: "Hardox reinforced chamber for tough aggregate crushing",
        position: "rightBottom",
        layout: {
          dotClass: "right-[26%] top-[56%]",
          cardClass: "right-[1%] top-[58%] w-[168px]",
        },
      },
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
    eyebrow: "Technical Specifications",
    title: "PRIME CRUSHER BUCKET",
    highlight: "TECHNICAL DATA",
    subtitle:
      "Explore the technical details behind the Prime Bucket Crusher’s performance, compatibility, crushing capability and reliable operation across different applications.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Suitable Excavator", key: "excavatorSize" },
      { label: "Bucket Capacity", key: "bucketCapacity", emphasis: "secondary" },
      { label: "Feed Opening", key: "feedOpening" },
      { label: "Production", key: "production", emphasis: "primary" },
      { label: "Adjustable Output Size", key: "outputSize" },
      { label: "Weight", key: "weight" },
    ],
    note: "Specifications are subject to change based on excavator configuration and material properties.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    {
      model: "PB70",
      excavatorSize: "8–12 Ton",
      bucketCapacity: "0.30 m³",
      feedOpening: "700 × 450 mm",
      production: "15–35 TPH",
      outputSize: "20 – 100 mm",
      weight: "1,850 kg",
    },
    {
      model: "PB90",
      excavatorSize: "12–20 Ton",
      bucketCapacity: "0.55 m³",
      feedOpening: "900 × 500 mm",
      production: "25–60 TPH",
      outputSize: "20 – 120 mm",
      weight: "2,650 kg",
    },
    {
      model: "PB120",
      excavatorSize: "20–35 Ton",
      bucketCapacity: "0.80 m³",
      feedOpening: "1200 × 550 mm",
      production: "50–100 TPH",
      outputSize: "20 – 140 mm",
      weight: "3,600 kg",
    },
    {
      model: "PB150",
      excavatorSize: "35–50 Ton",
      bucketCapacity: "1.20 m³",
      feedOpening: "1500 × 700 mm",
      production: "80–150 TPH",
      outputSize: "20 – 160 mm",
      weight: "4,800 kg",
    },
  ],
  industriesSection: {
    eyebrow: "Market Sectors",
    title: "PRIME BUCKET CRUSHER",
    highlight: "APPLICATIONS",
    subtitle:
      "Engineered for flexible on-site crushing across construction, quarrying, mining, demolition, recycling and other material-processing applications.",
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
    title: "PRIME BUCKET CRUSHER",
    highlight: "WORKING PROCESS",
    subtitle:
      "A practical on-site crushing process designed to reduce excavated or processed material efficiently and deliver usable output directly at the project location.",
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
      "Watch Prime Bucket Crusher transform demolition waste into valuable aggregates in seconds.",
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
      alt: "Prime Bucket Crusher performance video thumbnail",
    },
    caption: "DEMOLITION SITE RECYCLING",
    subCaption: "Crush, recycle, and reuse on the spot.",
    duration: "1:30",
    button: { label: "WATCH DEMO VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    eyebrow: "CRUSHING EQUIPMENT",
    title: "EXPLORE OUR",
    highlight: "CRUSHING EQUIPMENT",
    subtitle:
      "Explore Pithal Machines’ range of reliable crushing and screening solutions engineered to meet diverse material-processing requirements and demanding industrial applications.",
  },
  relatedMachines: [
    { title: "PRIMESCREEN", description: "Screening bucket for accurate material separation.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Screening Bucket" }, category: "Screening", icon: "screen", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMESORT", description: "Sorting grapple for efficient demolition management.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Sorting Grapple" }, category: "Sorting", icon: "layers", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMEPULVERIZER", description: "Secondary processing for concrete and rebar.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Pulverizer" }, category: "Recycling", icon: "settings", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMESHEAR", description: "Heavy-duty steel and rebar cutting attachment.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "Shear" }, category: "Demolition", icon: "shield", href: "#", actionLabel: "COMING SOON" },
    { title: "PRIMEDRUM", description: "Rotary screening bucket for topsoil and aggregates.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Rotary Drum" }, category: "Screening", icon: "layers", href: "#", actionLabel: "COMING SOON" },
  ],
  contactSection: {
    id: "contact",
    eyebrow: "REQUEST EXPERT ADVICE",
    title: "REDUCE COSTS ON",
    highlight: "YOUR NEXT SITE.",
    description:
      "Tell us your excavator model and site requirements, and we'll recommend the best Prime Bucket Crusher for you.",
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
      phone: "+91 98875 37129",
      email: "info@pithalmachine.com",
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
    title: "Prime Bucket Crusher",
    highlight: "Downloads",
    subtitle:
      "Access product brochures, technical specifications and detailed documentation to explore the Prime Bucket Crusher’s features, capabilities, applications and operating requirements.",
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
  faqSection: {
    eyebrow: "FAQ",
    title: "Frequently Asked",
    highlight: "Questions",
    faqs: [
      {
        question: "1. What is a crusher bucket?",
        answer: "A crusher bucket is an excavator attachment designed to crush concrete, stones, bricks and other suitable construction and demolition materials directly at the job site."
      },
      {
        question: "2. What materials can a crusher bucket crush?",
        answer: "Crusher buckets can crush materials such as concrete, reinforced concrete, bricks, stones, asphalt and suitable demolition waste, depending on the model and application."
      },
      {
        question: "3. What are the main benefits of using a crusher bucket?",
        answer: "A crusher bucket enables on-site crushing, reduces material transportation, supports material recycling and can eliminate the need for a separate crushing machine for certain applications."
      },
      {
        question: "4. How do I choose the right crusher bucket for my excavator?",
        answer: "Choose a crusher bucket based on your excavator's operating weight, hydraulic flow and pressure, material type, required crushing capacity and desired output size."
      },
      {
        question: "5. Can a crusher bucket be used for recycling construction waste?",
        answer: "Yes. A crusher bucket can process suitable concrete, bricks, masonry and other mineral-based waste into reusable material, helping support on-site recycling and waste reduction."
      },
      {
        question: "6. How does a crusher bucket work?",
        answer: "The crusher bucket is mounted directly onto a compatible excavator and uses the excavator's hydraulic power to operate its crushing mechanism. Material is fed into the bucket and crushed to the required size."
      },
      {
        question: "7. Why choose a Pithal crusher bucket?",
        answer: "Pithal crusher buckets are designed to provide an efficient excavator-mounted solution for crushing and processing suitable materials on-site. The appropriate model can be selected based on the excavator and the specific project requirements."
      }
    ]
  },
  longContent: {
    content: `## Prime Crusher Bucket for Efficient On-Site Crushing

The Prime Crusher Bucket is designed for efficient on-site crushing of concrete, rocks, asphalt, demolition waste and other suitable materials. Mounted directly onto a compatible excavator, the crusher bucket allows material to be processed at the job site without requiring a separate crushing machine for suitable applications.

With a robust Hardox body, manganese steel jaws, hydraulic drive, adjustable output and hydraulic reverse function, the Prime Bucket is built for demanding applications across construction, demolition, roadwork, mining, quarrying, infrastructure and material recycling.

### Why Choose Prime Crusher Bucket from Pithal Machine

Choosing the right bucket crusher can directly influence material handling, project productivity and operating efficiency. The Prime Crusher Bucket is engineered to bring crushing capability directly to the excavation or demolition site, allowing suitable materials to be reduced where they are generated.

Unlike conventional stationary crushing equipment, a crusher bucket for excavator applications can move with the machine from one working area to another. This provides greater flexibility for projects where material processing requirements change across the site.

The hydraulic design also allows the bucket to use the compatible excavator's hydraulic system, making it a practical solution for contractors looking for a mobile crushing attachment.

### Crusher Bucket for Excavator Applications

A crusher bucket for excavator is designed to combine excavation and crushing capabilities in one machine. The Prime Crusher Bucket is mounted directly onto a compatible excavator and uses hydraulic power to operate its crushing mechanism.

This setup allows an excavator with crusher attachment to process suitable concrete, rocks, asphalt and demolition materials directly at the project location.

Using an excavator crusher can help reduce unnecessary material movement and simplify site operations. Instead of transporting all suitable material to an external crushing plant, contractors can process it closer to where it is generated.

### Efficient Material Reduction

The Prime Crusher Bucket uses a jaw crushing mechanism to apply compressive force to suitable feed material and reduce it into smaller, more manageable sizes.

The bucket features an adjustable CSS system, allowing the crushing output to be adjusted from approximately 20 mm to 100 mm according to application requirements.

This flexibility makes the bucket crusher suitable for different material-processing requirements, including construction waste recycling, roadwork, backfilling applications and other projects where controlled material reduction is required.

Actual crushing performance depends on material characteristics, feed size, excavator specifications, operating conditions and the selected Prime Bucket model.

### Built for Demanding Crushing Applications

The Prime Crusher Bucket is designed for demanding environments where crushing equipment is exposed to heavy loads and abrasive materials.

Its Hardox body provides a strong and wear-resistant structure, while manganese steel jaws are designed to withstand the demanding conditions associated with crushing.

The reversible jaw configuration can help improve wear-component utilization, while the hydraulic reverse function assists in clearing suitable material blockages from the crushing chamber.

These features make the Prime Crusher Bucket a dependable solution for construction, demolition, quarrying, mining, infrastructure and recycling applications.

### Hydraulic Excavator Crusher for Flexible Operation

The Prime Bucket operates using the hydraulic system of a compatible excavator. This means the attachment does not require a separate engine or independent power unit for its crushing operation.

The hydraulic drive allows the excavator crusher to combine mobility with material-processing capability. Contractors can move the crusher around the site using the excavator and process suitable material at different working locations.

For optimum performance, the excavator's hydraulic flow, pressure, operating weight and attachment compatibility should be checked before selecting a crusher bucket model.

### Anti-Jamming Hydraulic Reverse

Material blockages can affect crushing productivity and interrupt normal operation. Prime Crusher Bucket incorporates a hydraulic reverse function designed to help clear blockages from the crushing mechanism.

The hydraulic reverse allows the operator to reverse the crushing action when required, helping manage suitable blockages and reduce unnecessary interruptions during crushing.

This feature is particularly useful for demanding applications where material characteristics can vary during operation.

### Crusher Bucket for Construction and Demolition

Construction and demolition sites can generate substantial quantities of concrete, bricks, asphalt and other mineral-based materials. Transporting this material away from the site can increase handling requirements and project logistics.

A crusher bucket for excavator applications allows suitable material to be processed directly at the source. This can help contractors reduce material movement and make better use of suitable demolition and excavation materials.

The Prime Crusher Bucket can be used for suitable concrete recycling, demolition waste processing and material reduction applications, depending on project requirements.

### Crusher Bucket for Road and Infrastructure Projects

Road construction and infrastructure projects often involve excavation, demolition and removal of existing materials. Suitable rock, concrete, asphalt and other mineral-based materials may require crushing before they can be reused or transported.

An excavator with crusher attachment provides the flexibility to process suitable materials close to the work area.

The Prime Crusher Bucket can support road construction, road reconstruction, highway development, infrastructure projects and other applications where mobile on-site crushing can improve material-handling efficiency.

### Crusher Bucket for Mining and Quarrying

Mining and quarrying operations require equipment capable of handling hard and abrasive materials. The Prime Crusher Bucket is designed for suitable rock and mineral processing applications where material needs to be reduced at or close to the source.

The combination of heavy-duty construction, manganese jaws, hydraulic operation and adjustable output makes the Prime Bucket suitable for selected mining and quarrying applications.

The correct model should be selected according to the excavator, feed material, production requirement and operating conditions.

### Reliable Bucket Crusher for Material Recycling

Recycling suitable construction and demolition material can help reduce waste and improve material utilization. The Prime Crusher Bucket allows suitable concrete, masonry, asphalt and other mineral-based materials to be processed directly at the project site.

Using a bucket crusher can reduce the amount of material that needs to be transported to an external processing facility. Crushed material may also be suitable for applications such as backfilling, roadwork and other construction uses, depending on the material quality and project specifications.

### Prime Crusher Bucket Models

The Prime Bucket range includes different models designed for excavators of different operating sizes and crushing requirements.

| Model | Excavator Size | Bucket Capacity | Feed Opening | Production |
|---|---|---|---|---|
| PB70 | 8–12 Ton | 0.30 m³ | 700 × 450 mm | 15–35 TPH |
| PB90 | 12–20 Ton | 0.55 m³ | 900 × 500 mm | 25–60 TPH |
| PB120 | 20–35 Ton | 0.80 m³ | 1200 × 550 mm | 50–100 TPH |
| PB150 | 35–50 Ton | 1.20 m³ | 1500 × 700 mm | 80–150 TPH |

The Prime Bucket range provides crushing capacity from approximately 15 TPH to 150 TPH, depending on the model and operating conditions.

### How to Select the Right Crusher Bucket

Selecting the correct crusher bucket for excavator applications requires more than simply choosing a bucket based on physical size. The excavator's operating weight, hydraulic oil flow, hydraulic pressure, attachment compatibility, feed material, feed size, required output and production target should all be considered.

For example, smaller excavators may require a compact model, while larger excavators used for high-volume crushing applications may require a higher-capacity Prime Bucket.

Matching the crusher bucket with the excavator correctly helps ensure efficient hydraulic performance and reliable crushing operation.

### Understanding Bucket Crusher Price

The bucket crusher price can vary depending on the selected model, excavator compatibility, production capacity, specifications and configuration. Larger models with higher crushing capacities and larger feed openings generally have different pricing from compact models.

When comparing a bucket crusher price, it is important to consider more than the initial purchase cost. Factors such as production capacity, material transportation savings, equipment utilization, maintenance requirements and expected operating life can influence the overall value of the investment.

For an accurate price, buyers should provide their excavator details and application requirements to the manufacturer.

### JCB Crusher Bucket Applications

A JCB crusher bucket can be considered for compatible JCB excavators where the machine meets the hydraulic and attachment requirements of the selected crusher bucket.

Before purchasing a JCB crusher bucket, contractors should verify the excavator's operating weight, hydraulic flow, hydraulic pressure, mounting arrangement and other technical requirements.

The same principle applies when comparing a JCB crusher bucket price. Pricing depends on the specific crusher bucket model, capacity, configuration and application rather than only the excavator brand.

Pithal Machine can help customers identify the appropriate Prime Bucket model based on their excavator and crushing requirements.

### Durable Crusher Bucket for Long-Term Operation

Durability is an important consideration when investing in crushing equipment. The Prime Crusher Bucket is manufactured with a focus on structural strength and wear resistance for demanding applications.

The Hardox body, manganese steel jaws, reversible jaw design, hydraulic drive and hydraulic reverse system are designed to support reliable operation and practical maintenance.

With proper operation, routine inspection and recommended maintenance, the Prime Crusher Bucket can provide dependable performance across a wide range of suitable crushing applications.

### Get the Right Prime Crusher Bucket for Your Application

Every project has different crushing requirements based on material type, excavator size, hydraulic capacity, feed size, desired output and production capacity. Selecting the right crusher bucket is therefore essential for achieving efficient and reliable performance.

[Pithal Machine](https://www.pithalmachine.com/) offers the Prime Bucket range for suitable excavator-mounted crushing applications. Contact the Pithal team with your excavator model and project requirements to identify the right bucket crusher for excavator applications, obtain detailed technical information, and enquire about the bucket crusher price.

Choose Prime Crusher Bucket for flexible, durable and efficient on-site material crushing.`
  }
};

export type PrimeBucketData = ProductDetailData;
