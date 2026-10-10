import type { ProductDetailData } from "./productDetailTypes";

export const jawCrusherData: ProductDetailData = {
  slug: "jaw-crushers",
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "Prime Jaw Crushers", href: "/products/jaw-crushers" },
    ],

    title: "Prime  Jaw",
    highlightedTitle: "Crusher",
    subtitle: "BUILT FOR POWER. ENGINEERED FOR PERFORMANCE.",
    description:
      "Jaw Crusher Machines engineered for high crushing efficiency and reliable performance in the most demanding mining conditions.",
    descriptionHighlight: "demanding mining conditions",
    image: {
      src: "/product-hero/new Prime Jaw banner.webp",
      alt: "Pithal heavy-duty jaw crusher operating in a quarry",
    },
    ctas: [
      { label: "Request Quote", href: "#contact", variant: "primary", icon: "file" },
      { label: "Download Brochure", href: "#resources", variant: "outlineOrange", icon: "download" },
    ],
  },
  statsSection: {
    title: "Jaw Crusher Machine Performance and",
    highlight: "Key Technical Details",
    subtitle:
      "Discover the technical specifications behind powerful, efficient and reliable crushing performance.",
    ctaText: "Built for Performance. Engineered for Results.",
  },
  stats: [
    { label: "Capacity", value: "80 - 600", unit: "TPH", description: "High-volume crushing range", icon: "gauge" },
    { label: "Feed Size", value: "850", unit: "mm (Max)", description: "Handles large rock feed", icon: "feeder" },
    { label: "Motor Power", value: "55 - 132", unit: "kW", description: "Efficient drive options", icon: "zap" },
    { label: "Output Size", value: "80 - 250", unit: "mm", description: "Adjustable CSS setting", icon: "layers" },
    { label: "Application", value: "Mining, Aggregates, Construction, Recycling & More", unit: "", description: "", icon: "boxes" },
  ],
  intro: {

    title: "Prime Jaw Crusher Product",
    highlight: "Overview",
    description:
      "Prime Jaw Crusher is engineered for powerful crushing performance, high durability, and cost-effective operation. Built to handle tough and abrasive materials across mining, quarrying, and construction applications.",
    image: {
      src: "/images/products/prime-jaw-crusher.png",
      alt: "Jaw crusher machine with technical part callouts",
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
        label: "Jaw Plates",
        text: "High manganese steel for maximum wear resistance",
        position: "leftBottom",
        layout: {
          dotClass: "left-[22%] top-[35%]",
          cardClass: "left-[1%] top-[32%] w-[172px]",
        },
      },
      {
        label: "Flywheel Guard",
        text: "Heavy-duty flywheel with balanced safety enclosure",
        position: "rightTop",
        layout: {
          dotClass: "right-[26%] top-[34%]",
          cardClass: "right-[1%] top-[2%] w-[172px]",
        },
      },
      {
        label: "Adjustment System",
        text: "Hydraulic adjustment for easy closed side setting control",
        position: "rightBottom",
        layout: {
          dotClass: "right-[24%] top-[65%]",
          cardClass: "right-[1%] top-[60%] w-[176px]",
        },
      },
      {
        label: "Robust Frame",
        text: "Reinforced structure for extra strength and stability",
        position: "bottomCenter",
        layout: {
          dotClass: "left-[36%] top-[76%]",
          cardClass: "left-[28%] top-[84%] w-[180px]",
        },
      },
    ],

  },
  performanceSection: {

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
    title: "PRIME SERIES SINGLE TOGGLE",
    highlight: "GREASE JAW CRUSHER",
    subtitle:
      "Discover the technical details behind the Prime Single Toggle Grease Jaw Crusher’s reliable performance.",
    columns: [
      { label: "Model", key: "model", emphasis: "primary" },
      { label: "Feed Opening (W × D)", key: "feedOpening" },
      { label: "Maximum Feed Size", key: "maxFeedSize", emphasis: "secondary" },
      { label: "Recommended CSS Range", key: "cssRange" },
      { label: "Capacity", key: "capacity", emphasis: "primary" },
      { label: "Motor Power", key: "motorPower" },
      { label: "Approx. Machine Weight", key: "weight" },
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
      model: "PMJ 30×24",
      feedOpening: "750 × 600 mm",
      maxFeedSize: "500 mm",
      cssRange: "80–150 mm",
      capacity: "80–150 TPH",
      motorPower: "55 kW",
      weight: "12,000 kg",
      lubrication: "Grease",
    },
    {
      model: "PMJ 36×24",
      feedOpening: "900 × 600 mm",
      maxFeedSize: "550 mm",
      cssRange: "80–175 mm",
      capacity: "120–200 TPH",
      motorPower: "75 kW",
      weight: "17,000 kg",
      lubrication: "Grease",
    },
    {
      model: "PMJ 36×30",
      feedOpening: "900 × 750 mm",
      maxFeedSize: "650 mm",
      cssRange: "90–200 mm",
      capacity: "150–300 TPH",
      motorPower: "95 kW",
      weight: "21,000 kg",
      lubrication: "Grease",
    },
    {
      model: "PMJ 42×32",
      feedOpening: "1067 × 813 mm",
      maxFeedSize: "750 mm",
      cssRange: "100–225 mm",
      capacity: "200–450 TPH",
      motorPower: "110 kW",
      weight: "24,000 kg",
      lubrication: "Grease",
    },
    {
      model: "PMJ 48×32",
      feedOpening: "1219 × 813 mm",
      maxFeedSize: "850 mm",
      cssRange: "100–250 mm",
      capacity: "300–600 TPH",
      motorPower: "132 kW",
      weight: "27,000 kg",
      lubrication: "Grease",
    },
  ],
  industriesSection: {
    title: "Prime Jaw Crusher",
    highlight: "Applications ",
    subtitle:
      "Engineered for reliable primary crushing across mining, quarrying, aggregate, and construction applications.",
  },
  industries: [
    { title: "Mining", description: "Primary crushing for hard rock, ore, and mineral processing plants.", image: { src: "/images/industries/mining.jpg", alt: "Mining site with crushing equipment" }, icon: "pickaxe", href: "#", actionLabel: "Explore" },
    { title: "Aggregates", description: "Reliable reduction for aggregates, road metal, and quarry production.", image: { src: "/images/industries/aggregates.jpg", alt: "Aggregate quarry conveyors and stockpiles" }, icon: "layers", href: "#", actionLabel: "Explore" },
    { title: "Cement", description: "Heavy-duty limestone and raw material preparation for cement plants.", image: { src: "/images/industries/cement.jpg", alt: "Cement industry processing plant" }, icon: "factory", href: "#", actionLabel: "Explore" },
    { title: "Construction", description: "Crushing equipment for infrastructure, roads, and large civil projects.", image: { src: "/images/industries/construction.jpg", alt: "Construction site with industrial equipment" }, icon: "hardHat", href: "#", actionLabel: "Explore" },
    { title: "Recycling", description: "Strong processing for demolition waste and recyclable construction material.", image: { src: "/images/industries/recycling.jpg", alt: "Recycling facility material processing" }, icon: "recycle", href: "#", actionLabel: "Explore" },
  ],
  processSection: {

    title: "Jaw Crusher",
    highlight: "Working Process",
    subtitle:
      "A powerful crushing process designed to reduce hard materials efficiently and deliver consistent output with reliable performance.",
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
    title: "Explore Our",
    highlight: "Crushing Equipment ",
    subtitle:
      "Explore our range of reliable crushing solutions designed to meet diverse material processing needs and demanding industrial applications.",
  },
  relatedMachines: [
    { title: "CONE CRUSHER", description: "High-efficiency secondary crushing with excellent particle shape.", image: { src: "/images/products/related-products/cone-crusher.png", alt: "Cone Crusher" }, category: "Secondary", icon: "cone", href: "/products/cone-crushers", actionLabel: "VIEW DETAILS" },
    { title: "VSI CRUSHER", description: "Advanced crushing technology for superior cubical shape and reliability.", image: { src: "/images/products/related-products/vsi-crusher.png", alt: "VSI Crusher" }, category: "Crushing", icon: "vsi", href: "/products/vsi-crushers", actionLabel: "VIEW DETAILS" },
    { title: "VIBRATING FEEDER", description: "Consistent and controlled material feeding for smooth plant operation.", image: { src: "/images/products/related-products/vibrating-feeder.png", alt: "Vibrating Feeder" }, category: "Feeding", icon: "feeder", href: "/products/feeders", actionLabel: "VIEW DETAILS" },
    { title: "VIBRATING SCREEN", description: "High-performance screening for accurate size separation and higher output.", image: { src: "/images/products/related-products/vibrating-screen.png", alt: "Vibrating Screen" }, category: "Screening", icon: "screen", href: "/products/vibrating-screens", actionLabel: "VIEW DETAILS" },
    { title: "PRIME BELT CONVEYOR", description: "Efficient material handling with robust design and long service life.", image: { src: "/images/products/related-products/belt-conveyor.png", alt: "Belt Conveyor" }, category: "Conveying", icon: "conveyor", href: "/products/conveyor-systems", actionLabel: "VIEW DETAILS" },
  ],
  contactSection: {
    id: "contact",

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
    title: "Prime Jaw Crusher",
    highlight: "Downloads",
    subtitle:
      "Access detailed brochures, technical specifications and product manuals to explore the Prime Jaw Crusher’s features, performance and capabilities.",
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
    title: "Prime Jaw Crusher",
    highlight: "FAQs",
    faqs: [
      {
        question: "What is a jaw crusher used for?",
        answer:
          "A jaw crusher reduces large rocks, minerals, concrete and other hard materials into smaller sizes. It is commonly used in mining, quarrying, construction, recycling and aggregate production.",
      },
      {
        question: "Is a jaw crusher suitable for mining?",
        answer:
          "Yes. A jaw crusher for mining is suitable for many hard and abrasive ores, including iron ore, copper ore, gold-bearing rock and manganese ore.",
      },
      {
        question: "What affects jaw crusher price?",
        answer:
          "Jaw crusher price depends on machine size, capacity, feed opening, motor power, jaw plates, mobility, automation, transport and installation requirements.",
      },
      {
        question: "Can a jaw crusher process granite?",
        answer:
          "Yes. Jaw crushers are commonly used for primary granite crushing. A suitable heavy-duty model and wear-resistant jaw plates may be required.",
      },
      {
        question: "Can a jaw crusher crush concrete?",
        answer:
          "Yes, selected concrete and demolition material can be processed. Reinforcing steel and other contaminants should be managed before crushing.",
      },
      {
        question: "How do I request a quotation?",
        answer:
          "Share your material type, maximum feed size, required capacity, desired output size, project location and preferred stationary or mobile configuration.",
      },
    ],
  },
  longContent: {
    content: `## Jaw Crusher Manufacturer for Mining and Quarrying

When you need to crush hard rock, minerals, concrete or natural stone, choosing the right machine is essential. A reliable jaw crusher reduces large materials into smaller sizes for construction, aggregate production and further processing.

As an experienced jaw crusher manufacturer, we supply durable crushing equipment for mining, quarrying, construction, recycling and infrastructure projects. Our machines are designed for dependable performance, easy maintenance and long service life in demanding working conditions.

Whether you need a primary jaw crusher for mining or a jaw stone crusher machine for a quarry, we can recommend a suitable solution based on your material, capacity and output requirements.

### What Is a Jaw Crusher?

A jaw crusher is a compression-type crushing machine used to break large rocks and other hard materials. It works with two jaw plates: one fixed and one moving.

Material enters the crushing chamber through the top opening. The moving jaw presses the material against the fixed jaw, breaking it into smaller pieces. The crushed material then moves downward and exits through the discharge opening.

The final output depends on the crusher model, jaw plate design, material type, feed size and discharge setting. Jaw crushers are commonly used as primary crushers because they can handle large feed material and tough rocks.

### Our Prime Jaw Crusher Machine

Our Prime jaw crusher machine range is designed for mines, quarries, aggregate plants and construction sites. Each model is selected based on the application, including material hardness, maximum feed size, required capacity and desired output.

Strong frames, durable jaw plates, reliable shafts and heavy-duty bearings support stable operation. The equipment can be supplied as a standalone crusher or integrated with feeders, conveyors, vibrating screens and secondary crushers.

A properly selected jaw crusher helps improve plant productivity while reducing blockages, excessive wear and unexpected downtime.

### Primary Jaw Crusher Applications

A primary jaw crusher is installed at the first stage of a crushing plant. It receives large blasted rock, run-of-mine ore or quarry material and reduces it before secondary crushing and screening.

Primary jaw crushers are used for granite, basalt, limestone, sandstone, river stone, iron ore, copper ore, manganese ore and quartz. The crusher size should be selected according to the maximum feed size, material properties, production capacity and required output.

The correct primary crusher improves the performance of the complete plant. An undersized machine may cause overloading, while an unnecessarily large machine can increase investment and operating costs.

### Jaw Crusher for Mining

A jaw crusher for mining must operate reliably under heavy loads and challenging conditions. Mining operations often process hard and abrasive materials for long working hours.

Our jaw crushers can be used for the initial crushing of iron ore, copper ore, gold-bearing rock, manganese ore and other minerals. The crushed material can then move to secondary crushers, screens, grinding equipment or mineral processing systems.

Hard and abrasive ores may require heavy-duty construction and wear-resistant jaw plates. The right selection depends on the ore characteristics, feed size, required capacity and plant design.

### Jaw Stone Crusher for Quarrying

A jaw stone crusher is widely used in quarries to reduce large natural rocks into useful aggregate sizes. It can process granite, basalt, limestone, sandstone, gravel and river stone.

The crushed material may be used for road construction, concrete, asphalt, railway ballast, drainage systems and general building work.

A quarry operator should select a jaw stone crusher based on the largest feed material size and required production. Compact models are suitable for smaller projects, while large quarries usually need heavy-duty machines with wide feed openings and higher capacity.

### Jaw Crusher Price and Cost

The jaw crusher price depends on the machine size, feed opening, capacity, motor power and configuration. A small crusher for a low-capacity plant will cost less than a heavy-duty primary crusher designed for continuous mining operation.

The total jaw crusher cost may also include transport, installation, electrical connection, feeders, conveyors, screens, spare parts and wear components.

Mobile jaw crushers may have a higher initial price than stationary models because they include a chassis, tracks or wheels and additional controls. However, they can reduce material transportation and installation requirements on projects where mobility is important.

The lowest purchase price does not always provide the best value. Power consumption, jaw plate life, maintenance requirements, production capacity and technical support should also be considered.

### Choosing the Right Machine

Before selecting a jaw crusher machine, identify the material you want to process. Granite, basalt, limestone, iron ore and recycled concrete may require different jaw plates and operating settings.

The maximum feed size must be suitable for the crusher opening. As a general operating guideline, the largest feed should be kept below the full opening capacity; some manufacturers recommend approximately 80% of the feed opening for effective operation.

You should also confirm the required tonnes-per-hour capacity, desired output size, operating hours and downstream equipment. Moisture and clay content should be reviewed because sticky material may reduce capacity or cause blockages.

A stationary jaw crusher is suitable for a fixed quarry or mining plant. A mobile machine may be better for road construction, demolition recycling or projects where the crushing location changes.

### Maintenance and Safety

Regular maintenance helps extend equipment life and reduce downtime. Operators should inspect jaw plates, cheek plates, toggle components, bearings, belts, fasteners and lubrication points.

Worn jaw plates should be replaced before they affect product size or damage other components. Unusual noise, vibration, overheating or oil leakage should be investigated immediately.

Before maintenance or blockage removal, the machine must be stopped, isolated and secured according to the site’s lockout procedure. Operators should never enter the crushing chamber while the equipment is running.

Correct feed size, steady feeding and avoiding overloading are important for safe and efficient performance.

### Why Choose Pithal Machines?

Pithal Machines is a trusted jaw crusher manufacturer offering durable and efficient crushing solutions for mining, quarrying, construction and aggregate applications.

We help customers select the right jaw crusher based on material type, feed size, capacity, output and plant layout. Along with manufacturing, we provide technical guidance, spare parts support and after-sales service.

From primary jaw crushers to complete plants with feeders, screens and conveyors, [Pithal Machines](https://www.pithalmachine.com/) delivers practical solutions designed for reliable performance and long-term value.

### Request a Quote

Are you looking for reliable jaw crusher manufacturers for mining, quarrying, construction or recycling?

Contact us with your project details. Whether you need a jaw crusher for mining, a primary jaw crusher for a quarry or a jaw stone crusher machine for construction work, our team can recommend a practical solution.

Get in touch today for product information, technical support and a customised jaw crusher price based on your actual requirements.`
  }
};

export type JawCrusherData = ProductDetailData;
