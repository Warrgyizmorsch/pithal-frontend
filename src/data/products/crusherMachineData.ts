import type { ProductDetailData } from "./productDetailTypes";

export const crusherMachineData: ProductDetailData = {
  slug: "crusher-machine",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Prime Crusher Machine", href: "/products/crusher-machine" },
    ],
    title: "Crusher Machine",
    highlightedTitle: "Manufacturer in India",
    subtitle: "POWERFUL CRUSHING SOLUTIONS. BUILT FOR HIGH PERFORMANCE, DURABILITY AND MAXIMUM OUTPUT.",
    description:
      "Crusher Machines from Pithal Machines are engineered to reduce hard rock, minerals and construction aggregates into required sizes for quarrying, mining, construction and infrastructure applications.",
    descriptionHighlight: "quarrying, mining, construction and infrastructure applications",
    image: {
      src: "/product-hero/new Prime Jaw banner.webp",
      alt: "Pithal industrial crusher machine operating in quarry",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
  },
  statsSection: {
    title: "Crusher Machine Performance and",
    highlight: "Key Technical Details",
    subtitle:
      "Discover the engineering and technical details behind high-capacity crushing, durable construction and consistent aggregate production.",
    ctaText: "Built for Performance. Engineered for Results.",
  },
  stats: [
    { label: "Capacity Range", value: "50 - 600+", unit: "TPH", description: "Configurable crushing range", icon: "gauge" },
    { label: "Feed Size", value: "Up to 850", unit: "mm (Max)", description: "Handles large rock feed", icon: "feeder" },
    { label: "Motor Power", value: "30 - 250", unit: "kW", description: "Energy-efficient drives", icon: "zap" },
    { label: "Output Size", value: "Custom", unit: "Graded", description: "Adjustable product settings", icon: "layers" },
    { label: "Application", value: "Quarrying, Mining, Aggregates, Infrastructure", unit: "", description: "", icon: "boxes" },
  ],
  intro: {
    title: "Prime Crusher Machine Product",
    highlight: "Overview",
    description:
      "Crusher Machine is designed to break large stones, rocks and minerals into smaller, uniform sizes for further processing or direct use.",
    image: {
      src: "/images/products/prime-crusher-machine.png",
      alt: "Crusher machine with technical part callouts",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineNavy", icon: "download" },
    ],
    features: [
      { title: "High Durability", text: "Heavy-duty structure for long service life", icon: "shield" },
      { title: "High Efficiency", text: "Optimized chamber design for more output", icon: "gauge" },
      { title: "Low Maintenance", text: "Easy access design reduces downtime", icon: "wrench" },
      { title: "Cost Effective", text: "Low operating cost high return on investment", icon: "handCoins" },
    ],
    callouts: [
      {
        label: "Feed Opening",
        text: "Wide feed opening for large size rock material",
        position: "leftTop",
        layout: {
          dotClass: "left-[34%] top-[18%]",
          cardClass: "left-[1%] top-[2%] w-[172px]",
        },
      },
      {
        label: "Crushing Chamber",
        text: "Wear-resistant liners for maximum component life",
        position: "leftBottom",
        layout: {
          dotClass: "left-[22%] top-[35%]",
          cardClass: "left-[1%] top-[32%] w-[172px]",
        },
      },
      {
        label: "Flywheel & Drive",
        text: "Balanced flywheel with high transmission efficiency",
        position: "rightTop",
        layout: {
          dotClass: "right-[26%] top-[34%]",
          cardClass: "right-[1%] top-[2%] w-[172px]",
        },
      },
      {
        label: "Adjustment System",
        text: "Hydraulic adjustment for rapid discharge setting control",
        position: "rightBottom",
        layout: {
          dotClass: "right-[24%] top-[65%]",
          cardClass: "right-[1%] top-[60%] w-[176px]",
        },
      },
      {
        label: "Heavy-Duty Frame",
        text: "Stress-relieved fabrication for extreme stability",
        position: "bottomCenter",
        layout: {
          dotClass: "left-[36%] top-[76%]",
          cardClass: "left-[28%] top-[84%] w-[180px]",
        },
      },
    ],
  },
  performanceSection: {
    title: "Key Features of",
    highlight: "Crusher Machine",
    subtitle:
      "Engineered for reliable crushing performance, the crusher machine combines robust construction, advanced crushing technology and easy maintenance.",
  },
  performanceFeatures: [
    { title: "Robust Construction", description: "Accurate alignment and heavy-duty fabrication keep the machine stable under extreme crushing loads.", icon: "target" },
    { title: "Advanced Crushing Technology", description: "Optimized chamber geometry delivers higher reduction ratios and cubical aggregate shape.", icon: "gauge" },
    { title: "Easy Maintenance", description: "Service-friendly inspection doors and fast-replacement wear parts minimize planned shutdowns.", icon: "wrench" },
    { title: "Quick Discharge Setting", description: "Convenient adjustment mechanisms ensure accurate control over output size fractions.", icon: "settings" },
    { title: "Long Service Life", description: "High-grade alloy wear parts and heavy-duty bearings ensure dependable long-term operation.", icon: "shield" },
  ],
  specificationsSection: {
    eyebrow: "Technical Data",
    title: "Crusher Machine Technical",
    highlight: "Data",
    subtitle:
      "Explore the technical details behind crusher capacity, feed size, output size, power requirements and application suitability.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Feed Opening", key: "feedOpening" },
      { label: "Max Feed Size", key: "maxFeedSize", emphasis: "secondary" },
      { label: "CSS Range", key: "cssRange" },
      { label: "Capacity", key: "capacity", emphasis: "primary" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Weight", key: "weight" },
      { label: "Lubrication", key: "lubrication" },
    ],
    note: "Note: Capacities vary depending on feed gradation, moisture content, rock hardness, and closed side setting.",
    ctas: [
      { label: "Download Specification", href: "#resources", variant: "outlineNavy", icon: "download" },
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "arrow" },
    ],
  },
  specifications: [
    {
      model: "PMC 30×24",
      feedOpening: "750 × 600 mm",
      maxFeedSize: "500 mm",
      cssRange: "80–150 mm",
      capacity: "80–150 TPH",
      motorPower: "55 kW",
      weight: "12,000 kg",
      lubrication: "Grease / Centralized",
    },
    {
      model: "PMC 36×24",
      feedOpening: "900 × 600 mm",
      maxFeedSize: "550 mm",
      cssRange: "80–175 mm",
      capacity: "120–200 TPH",
      motorPower: "75 kW",
      weight: "17,000 kg",
      lubrication: "Grease / Centralized",
    },
    {
      model: "PMC 36×30",
      feedOpening: "900 × 750 mm",
      maxFeedSize: "650 mm",
      cssRange: "90–200 mm",
      capacity: "150–300 TPH",
      motorPower: "95 kW",
      weight: "21,000 kg",
      lubrication: "Grease / Centralized",
    },
    {
      model: "PMC 42×32",
      feedOpening: "1067 × 813 mm",
      maxFeedSize: "750 mm",
      cssRange: "100–225 mm",
      capacity: "200–450 TPH",
      motorPower: "110 kW",
      weight: "24,000 kg",
      lubrication: "Grease / Centralized",
    },
    {
      model: "PMC 48×32",
      feedOpening: "1219 × 813 mm",
      maxFeedSize: "850 mm",
      cssRange: "100–250 mm",
      capacity: "300–600 TPH",
      motorPower: "132 kW",
      weight: "27,000 kg",
      lubrication: "Grease / Centralized",
    },
  ],
  industriesSection: {
    title: "Crusher Machine",
    highlight: "Applications",
    subtitle:
      "Engineered for crushing applications across quarrying, mining, construction, road building, recycling and infrastructure projects.",
  },
  industries: [
    { title: "Quarrying", description: "Efficient processing of granite, basalt, limestone, and quarry stone into sized aggregates.", image: { src: "/images/industries/aggregates.jpg", alt: "Quarry stone crushing application" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Mining", description: "Heavy-duty crushing for hard rock, iron ore, copper ore, and mineral extraction.", image: { src: "/images/industries/mining.jpg", alt: "Mining operation with crusher" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Road & Highway Construction", description: "Produces precisely sized sub-base, GSB, and asphalt aggregates meeting highway standards.", image: { src: "/images/industries/infrastructure.jpg", alt: "Highway road building project" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Building & Civil Construction", description: "Reliable equipment providing continuous aggregate supply for ready-mix and building sites.", image: { src: "/images/industries/construction.jpg", alt: "Building construction project" }, icon: "building", href: "#", actionLabel: "Explore" },
    { title: "Recycling & Demolition", description: "Processes demolition concrete, masonry, and recyclable materials into usable construction aggregates.", image: { src: "/images/industries/recycling.jpg", alt: "Demolition concrete recycling" }, icon: "recycle", href: "#", actionLabel: "Explore" },
  ],
  processSection: {
    title: "Crusher Machine Working",
    highlight: "Process",
    subtitle:
      "A systematic process of feeding, crushing, screening and conveying transforms large rocks into required aggregate sizes.",
  },
  processSteps: [
    {
      number: "01",
      title: "Material Feeding",
      description: "Raw stone, ore or construction material is fed into the crusher machine through a vibrating feeder or loader.",
      iconFile: "material-input.png",
      image: { src: "/images/process/raw-material.png", alt: "Material feeding stage" },
    },
    {
      number: "02",
      title: "Primary Crushing",
      description: "A jaw crusher breaks large rocks into smaller, manageable sizes.",
      iconFile: "primary-crushing.png",
      image: { src: "/images/process/primary-crusher.png", alt: "Primary crushing stage" },
    },
    {
      number: "03",
      title: "Secondary & Tertiary Crushing",
      description: "A cone crusher or impact crusher further reduces material, while a VSI crusher shapes particles.",
      iconFile: "secondary-crushing.png",
      image: { src: "/images/process/secondary-crusher.png", alt: "Secondary and tertiary crushing stage" },
    },
    {
      number: "04",
      title: "Screening & Stockpiling",
      description: "Vibrating screens separate crushed material into required aggregate sizes, and conveyors transport to stockpiles.",
      iconFile: "screening.png",
      image: { src: "/images/process/screening.png", alt: "Screening and stockpiling stage" },
    },
  ],
  videoSection: {
    title: "SEE PERFORMANCE.",
    highlight: "IN ACTION.",
    description:
      "Watch our crusher machines in action and see how they deliver maximum crushing efficiency, reliability and consistent results.",
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
      alt: "Crusher machine performance demonstration thumbnail",
    },
    caption: "FULL MACHINE DEMONSTRATION",
    subCaption: "Explore every detail of our crusher machine performance.",
    duration: "1:45",
    button: { label: "WATCH FULL VIDEO", href: "#", variant: "primary", icon: "arrow" },
  },
  relatedSection: {
    title: "Explore Our Crushing",
    highlight: "Equipment",
    subtitle:
      "Explore Pithal Machines' range of reliable jaw crushers, cone crushers, impact crushers, VSI crushers, screens, feeders, conveyors and complete crushing solutions.",
  },
  relatedMachines: [
    { title: "PRIME JAW CRUSHER", description: "Heavy-duty primary crushing engineered for hard rock and high reduction ratios.", image: { src: "/images/products/jaw-crusher/card.png", alt: "Prime Jaw Crusher" }, category: "Primary Crushing", icon: "jaw", href: "/products/jaw-crushers", actionLabel: "VIEW DETAILS" },
    { title: "CONE CRUSHER", description: "High-efficiency secondary crushing with tight output control and excellent shape.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Cone Crusher" }, category: "Secondary Crushing", icon: "cone", href: "/products/cone-crushers", actionLabel: "VIEW DETAILS" },
    { title: "VSI CRUSHER", description: "Advanced impact technology for manufactured sand and superior cubical aggregate shaping.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "VSI Crusher" }, category: "Sand Making", icon: "vsi", href: "/products/vsi-crushers", actionLabel: "VIEW DETAILS" },
    { title: "VIBRATING SCREEN", description: "Multi-deck screening systems for precise material classification and high throughput.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Vibrating Screen" }, category: "Screening", icon: "screen", href: "/products/vibrating-screens", actionLabel: "VIEW DETAILS" },
    { title: "COMPLETE CRUSHING PLANT", description: "Turnkey crushing and screening plant solutions engineered for maximum productivity.", image: { src: "/images/products/complete-plants/product-review.png", alt: "Complete Crushing Plant" }, category: "Turnkey Plants", icon: "factory", href: "/products/complete-plants", actionLabel: "VIEW DETAILS" },
  ],
  contactSection: {
    id: "contact",
    title: "LET'S BUILD THE RIGHT",
    highlight: "SOLUTION FOR YOU.",
    description:
      "Share your requirements and our experts will recommend the best crusher machine configuration tailored to your needs.",
    image: {
      src: "/images/products/jaw-crusher/contact-us.png",
      alt: "Crusher machine consultation support",
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
    title: "Crusher Machine",
    highlight: "Downloads",
    subtitle:
      "Access brochures, technical specifications, layout drawings and project references to explore the crusher machine's features and capabilities.",
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
  faqSection: {
    title: "Crusher Machine",
    highlight: "FAQs",
    faqs: [
      {
        question: "What is a crusher machine?",
        answer:
          "A crusher machine is heavy-duty equipment used to break large rocks, stones, minerals and construction waste into smaller sizes. It is widely used in quarrying, mining, road construction, concrete production and M-sand manufacturing.",
      },
      {
        question: "What types of crusher machines are available?",
        answer:
          "Pithal Machines offers jaw crushers, cone crushers, impact crushers and VSI crushers. Jaw crushers are used for primary crushing, cone crushers for secondary and tertiary crushing, impact crushers for shaping and VSI crushers for M-sand production.",
      },
      {
        question: "What is the crusher machine price?",
        answer:
          "The crusher machine price depends on the crusher type, capacity, material hardness, configuration and automation level. For an accurate crusher machine price, share your required production capacity, feed size, output size and material type.",
      },
      {
        question: "What is the cost of crusher machine installation?",
        answer:
          "The cost of crusher machine installation depends on the plant layout, civil work, electrical setup, conveyors, screens and optional equipment such as washing systems. Pithal Machines provides complete crusher plant installation and commissioning support.",
      },
      {
        question: "Can a crusher plant be customized?",
        answer:
          "Yes. Every crusher plant can be customized according to raw material type, production capacity, required output sizes, site space, power availability and budget. Pithal Machines designs both stationary and customized crushing solutions.",
      },
      {
        question: "Which materials can be processed in a crusher machine?",
        answer:
          "Crusher machines can process granite, basalt, limestone, river stone, hard rock, black stone, minerals and construction demolition waste. The suitable crusher type depends on material hardness, abrasiveness and required final product.",
      },
      {
        question: "How much power does a crusher machine require?",
        answer:
          "Power requirement depends on the crusher type, model, capacity and material hardness. Jaw crushers, cone crushers, impact crushers and VSI crushers have different motor ratings, so the exact power requirement is confirmed with the selected crusher configuration.",
      },
      {
        question: "What maintenance does a crusher machine require?",
        answer:
          "Regular maintenance includes checking wear parts, lubrication, belt tension, bearings, electrical connections and crushing chamber condition. Timely maintenance improves crusher performance, reduces downtime and lowers the overall cost of crusher machine operation.",
      },
    ],
  },
  longContent: {
    content: `## Crusher Machine for Mining, Quarrying and Aggregate Production

When you need to crush hard rock, minerals, concrete or natural stone, choosing the right crusher machine is essential. A reliable crusher machine reduces large materials into smaller sizes for construction, aggregate production, mining and further processing.

As an experienced crusher manufacturer, Pithal Machines supplies durable crushing equipment and complete crusher plant solutions for mining, quarrying, construction, recycling and infrastructure projects. Our machines are designed for dependable performance, easy maintenance, high productivity and long service life in demanding working conditions.

Whether you need a primary crusher for a mining crusher plant, a stone crusher for a quarry or a complete crushing setup for aggregate production, we can recommend the right solution based on your material, capacity and output requirements.

### What Is a Crusher Machine?

A crusher machine is a heavy-duty machine used to break large rocks, stones, ores and construction waste into smaller, uniform sizes. It works by applying compression, impact or attrition force to reduce material size.

Crusher machines are commonly used in the first stage of a crusher plant to process blasted rock, quarry stone, river material and minerals. The crushed material can then be sent to secondary crushers, vibrating screens, conveyors or washing systems for further processing.

The final output depends on the crusher type, crushing chamber design, material hardness, feed size, discharge setting and production capacity. Crusher machines are widely used to process granite, basalt, limestone, sandstone, river stone, iron ore, copper ore, manganese ore and recycled concrete.

### Types of Crusher Machines

Choose the right crusher machine based on your material, feed size, output requirement and production capacity.

| Crusher Type | Best Application | Key Benefit |
| :--- | :--- | :--- |
| **Jaw Crusher** | Primary crushing of hard rock and large stones | High reduction ratio and robust performance |
| **Cone Crusher** | Secondary and tertiary crushing | Fine output and consistent aggregate shape |
| **Impact Crusher** | Shaping and medium-hard material crushing | Better cubical particle shape |
| **VSI Crusher** | M-sand and manufactured sand production | Superior sand shape and grading |

### Our Crusher Machine Range

Our crusher machine range is designed for mines, quarries, aggregate plants, construction sites and recycling applications.

Pithal Machines manufactures jaw crushers, cone crushers, impact crushers, VSI crushers and complete crusher plants. Each machine is selected based on the application, including material hardness, maximum feed size, required capacity and desired output size.

Strong frames, durable crushing components, reliable shafts and heavy-duty bearings support stable operation. Our crusher machines can be supplied as standalone units or integrated with vibrating feeders, belt conveyors, vibrating screens, sand washing systems and secondary crushers.

A properly selected crusher machine helps improve crusher plant productivity while reducing blockages, excessive wear, power consumption and unexpected downtime.

### Primary Crusher Applications

A primary crusher is installed at the first stage of a crusher plant to reduce large material before secondary crushing and screening.

Primary crusher machines receive large blasted rock, run-of-mine ore or quarry material and reduce it to a manageable size. Jaw crushers are commonly used for primary crushing, while cone crushers and impact crushers are used for secondary and tertiary crushing.

Primary crushers are used for granite, basalt, limestone, sandstone, river stone, iron ore, copper ore, manganese ore and quartz. The crusher size should be selected according to the maximum feed size, material properties, production capacity and required output.

The correct primary crusher improves the performance of the complete crusher plant. An undersized machine may cause overloading, while an unnecessarily large machine can increase the crusher machine price, investment cost and operating expenses.

### Crusher Machine for Mining

Crusher machines for mining are designed to handle hard, abrasive ores and continuous heavy-duty operation.

A mining crusher plant requires reliable equipment that can operate under heavy loads and challenging conditions. Mining operations often process hard and abrasive materials for long working hours.

Our crusher machines can be used for the initial crushing of iron ore, copper ore, gold-bearing rock, manganese ore and other minerals. The crushed material can then move to secondary crushers, screens, grinding equipment or mineral processing systems.

Hard and abrasive ores may require heavy-duty construction and wear-resistant crushing components. The right crusher selection depends on ore characteristics, feed size, required capacity and crusher plant design.

### Crusher Machine Working Process

A systematic process of feeding, crushing, screening and conveying transforms large rocks into required aggregate sizes.

- **Feeding**: Raw stone, ore or construction material is fed into the crusher machine through a vibrating feeder or loader.
- **Primary Crushing**: A jaw crusher breaks large rocks into smaller, manageable sizes.
- **Secondary Crushing**: A cone crusher or impact crusher further reduces material size.
- **Tertiary Shaping**: A VSI crusher improves particle shape and produces manufactured sand where required.
- **Screening**: Vibrating screens separate crushed material into different aggregate sizes.
- **Conveying**: Belt conveyors transfer material between crushers, screens and storage areas.
- **Stockpiling**: Finished aggregates or M-sand are stored or loaded for transport.

### Choosing the Right Crusher Machine

Select the right crusher machine based on material, feed size, capacity, output requirement and plant layout.

- Identify the material you want to process, such as granite, basalt, limestone, iron ore or recycled concrete
- Confirm the maximum feed size suitable for the crusher opening
- Determine the required production capacity in tonnes per hour
- Select the required output size and downstream crushing equipment
- Check moisture and clay content, as sticky material may reduce capacity or cause blockages
- Choose a stationary crusher machine for a fixed quarry or mining plant
- Choose a mobile crusher for road construction, demolition recycling or changing work sites
- Consider power consumption, wear-part life, maintenance and after-sales support

### Maintenance and Safety

Regular maintenance improves crusher performance, extends equipment life and reduces downtime.

- Inspect jaw plates, liners, blow bars, bearings, belts, fasteners and lubrication points regularly
- Maintain proper lubrication of bearings and moving components
- Replace worn crushing parts before they affect product size or damage other components
- Investigate unusual noise, vibration, overheating or oil leakage immediately
- Maintain correct feed size and steady feeding to avoid overloading
- Stop, isolate and secure the machine before maintenance or blockage removal
- Never enter the crushing chamber while the crusher machine is running

### Why Choose Pithal Machines Crusher Machine?

Pithal Machines is a trusted crusher manufacturer offering durable and efficient crushing solutions for mining, quarrying, construction and aggregate applications.

We help customers select the right crusher machine based on material type, feed size, capacity, output and crusher plant layout. Along with manufacturing, we provide technical guidance, spare parts support and after-sales service.

From primary jaw crushers to complete crusher plants with feeders, screens and conveyors, [Pithal Machines](https://www.pithalmachine.com/) delivers practical solutions designed for reliable performance and long-term value.

### Request a Quote

Are you looking for reliable crusher manufacturers for mining, quarrying, construction or recycling?

Contact Pithal Machines with your project details. Whether you need a crusher machine for mining, a stone crusher for a quarry or a complete crusher plant for aggregate production, our team can recommend a practical solution.

Get in touch today for product information, technical support and a customised crusher machine price based on your actual requirements.`
  },
};
