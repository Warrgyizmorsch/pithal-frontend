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
      src: "/images/products/jaw-crusher/main-machine.png",
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
        question: "What is a Prime Jaw Crusher Machine?",
        answer: "A Prime Jaw Crusher Machine is a heavy-duty primary crushing machine designed to reduce large rocks and hard materials into smaller, manageable sizes. It is commonly used in mining, quarrying, aggregate production and construction applications."
      },
      {
        question: "What materials can a Prime Jaw Crusher crush?",
        answer: "The Prime Jaw Crusher is designed to handle hard and abrasive materials such as rocks, stones and various mineral materials. The suitable material depends on the machine configuration and application requirements."
      },
      {
        question: "What is the capacity of the Prime Jaw Crusher Machine?",
        answer: "The capacity can vary depending on the selected model and configuration. Prime Jaw Crusher Machines can be configured for different production requirements, so the appropriate model should be selected based on feed material, feed size and required output."
      },
      {
        question: "Where is the Prime Jaw Crusher used?",
        answer: "Prime Jaw Crushers are commonly used in mining, quarrying, aggregate production, construction, cement and other industries that require efficient primary crushing."
      },
      {
        question: "How does a Prime Jaw Crusher Machine work?",
        answer: "The machine uses compressive force between a fixed jaw and a moving jaw to crush incoming material. Large rocks are fed through the crusher, reduced in size and discharged through the bottom of the crushing chamber."
      },
      {
        question: "What are the benefits of using a Prime Jaw Crusher?",
        answer: "Key benefits include efficient primary crushing, robust construction, reliable performance, reduced maintenance requirements and suitability for demanding industrial applications."
      },
      {
        question: "How do I choose the right Prime Jaw Crusher Machine?",
        answer: "The right machine depends on factors such as material type, feed size, required capacity, desired output size and operating conditions. Pithal Machine can help recommend a suitable configuration based on your specific requirements."
      },
      {
        question: "How can I get the price of a Prime Jaw Crusher Machine?",
        answer: "The price depends on the model, capacity, configuration and application requirements. Contact Pithal Machine with your crushing requirements to get a suitable machine recommendation and quotation."
      },
      {
        question: "How can I request a quotation for the Prime Jaw Crusher?",
        answer: "You can contact Pithal Machine directly through the enquiry form or contact details provided on the website. Share your required capacity, material type, feed size and application to receive a suitable recommendation and quotation."
      }
    ]
  },
  longContent: {
    content: `## Prime Jaw Crusher Machine for Efficient Primary Crushing
The Prime Jaw Crusher Machine is designed for efficient primary crushing of hard, abrasive, and large-sized materials. With a robust construction and reliable crushing mechanism, it is suitable for demanding applications in mining, quarrying, construction, aggregate production, and material processing.

The crusher is designed to handle challenging feed materials while maintaining consistent crushing performance. Its heavy-duty design makes it a dependable solution for industries that require continuous crushing and efficient material reduction.

### Why Choose Prime Jaw Crusher Machine
Choosing the right jaw crusher can have a direct impact on productivity, operating costs, and overall plant performance. The Prime Jaw Crusher is engineered to provide a combination of crushing efficiency, durability, and dependable operation.

Its strong construction allows the machine to perform effectively in demanding working environments, while its practical design supports easier operation and maintenance. This makes the Prime Jaw Crusher a suitable choice for businesses looking for reliable primary crushing equipment.

### Jaw Crusher Machine for Mining and Quarrying
Mining and quarrying operations often require equipment capable of processing hard and abrasive materials. The Prime Jaw Crusher Machine is designed for primary crushing applications where large feed material needs to be reduced to a manageable size for further processing.

Its robust construction and powerful crushing action make it suitable for processing materials such as rocks, aggregates and other hard materials used in industrial applications.

### Efficient Material Reduction
The primary function of a jaw crusher is to reduce large-sized feed material into smaller and more manageable pieces. The Jaw Crusher uses a powerful jaw crushing mechanism to apply compressive force to the material, helping achieve efficient size reduction.

The machine can be integrated into a wider crushing plant where crushed material is further processed using secondary and tertiary crushing equipment.

### Built for Demanding Industrial Applications
Our Jaw Crusher is designed for industries where reliable equipment performance is essential. From mining and quarrying to aggregate production and construction material processing, the machine can support a wide range of primary crushing requirements.

Its heavy-duty design helps provide dependable operation under demanding conditions while supporting consistent production requirements.

### Reliable Jaw Crusher Machine for Long-Term Operation
Durability is an important consideration when selecting industrial crushing equipment. Pithal Jaw Crusher is manufactured with a focus on structural strength, reliable component and long-term operational performance.

With appropriate maintenance and operating practices, the machine can provide dependable service while helping businesses maintain efficient crushing operations.

### Get the Right Jaw Crusher Machine for Your Application
Every crushing operation has different requirements based on material type, feed size, required output and production capacity. Selecting the appropriate jaw crusher configuration is therefore important for achieving efficient plant performance.

[Pithal Machine](https://www.pithalmachine.com/) can help you identify a suitable Prime Jaw Crusher configuration based on your application and crushing requirements. Contact our team to discuss your requirements and get detailed technical information and pricing.`
  }
};

export type JawCrusherData = ProductDetailData;
