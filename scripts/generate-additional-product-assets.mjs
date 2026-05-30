import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();

const products = [
  {
    folder: "vsi-crusher",
    label: "VSI Crusher",
    title: "VSI",
    highlight: "CRUSHER",
    subtitle: "Cubical shaping and fine aggregate production",
    accent: "Precision Impact Crushing",
  },
  {
    folder: "vibrating-screen",
    label: "Vibrating Screen",
    title: "VIBRATING",
    highlight: "SCREEN",
    subtitle: "Accurate sizing and high-efficiency separation",
    accent: "Screening Technology",
  },
  {
    folder: "vibrating-feeder",
    label: "Vibrating Feeder",
    title: "VIBRATING",
    highlight: "FEEDER",
    subtitle: "Controlled material feed for stable crushing plants",
    accent: "Controlled Feeding",
  },
  {
    folder: "belt-conveyor",
    label: "Conveyor System",
    title: "CONVEYOR",
    highlight: "SYSTEM",
    subtitle: "Reliable bulk material transfer and stockpiling",
    accent: "Material Handling",
  },
  {
    folder: "complete-plants",
    label: "Complete Plant",
    title: "COMPLETE",
    highlight: "PLANT",
    subtitle: "Integrated crushing, screening and conveying systems",
    accent: "Turnkey Processing",
  },
];

function esc(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function out(folder, name, svg) {
  const file = join(root, "public", "images", "products", folder, name);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, svg, "utf8");
}

function defs() {
  return `
    <defs>
      <linearGradient id="navy" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#031b40"/>
        <stop offset="1" stop-color="#092a5c"/>
      </linearGradient>
      <linearGradient id="orange" x1="0" x2="1">
        <stop offset="0" stop-color="#fa5902"/>
        <stop offset="1" stop-color="#ff8a00"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#031b40" flood-opacity=".18"/>
      </filter>
      <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
        <path d="M42 0H0v42" fill="none" stroke="#092a5c" stroke-width="1" opacity=".08"/>
      </pattern>
    </defs>`;
}

function slashes(x, y) {
  return `
    <g fill="#fa5902" transform="translate(${x} ${y}) skewX(-28)">
      <rect width="10" height="24" rx="1"/>
      <rect x="16" width="10" height="24" rx="1"/>
      <rect x="32" width="10" height="24" rx="1"/>
    </g>`;
}

function documentCover(product, variant) {
  const variantCopy = {
    brochure: ["PRODUCT BROCHURE", "FEATURES / APPLICATIONS / BENEFITS", "Built for productivity, uptime and long-term value."],
    datasheet: ["TECHNICAL DATASHEET", "CAPACITY / POWER / MODEL RANGE", "Essential engineering data for product selection."],
    manual: ["OPERATION & MAINTENANCE", "SAFETY / SERVICE / BEST PRACTICES", "Clear guidance for reliable operation and maintenance."],
  }[variant];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1022" height="1539" viewBox="0 0 1022 1539">
    ${defs()}
    <rect width="1022" height="1539" fill="#f8fafc"/>
    <rect width="1022" height="1539" fill="url(#grid)"/>
    <path d="M0 0h1022v390H0z" fill="url(#navy)"/>
    <path d="M0 338h1022v96L0 505z" fill="#fff"/>
    ${slashes(72, 82)}
    <text x="130" y="104" font-family="Arial, sans-serif" font-size="28" font-weight="800" fill="#fff" letter-spacing="3">PITHAL MACHINES</text>
    <text x="72" y="218" font-family="Impact, Arial Black, sans-serif" font-size="82" font-weight="900" fill="#fff" letter-spacing="2">${esc(product.title)}</text>
    <text x="72" y="306" font-family="Impact, Arial Black, sans-serif" font-size="82" font-weight="900" fill="#fa5902" letter-spacing="2">${esc(product.highlight)}</text>
    <text x="72" y="402" font-family="Arial, sans-serif" font-size="25" font-weight="800" fill="#fa5902" letter-spacing="4">${variantCopy[0]}</text>
    <text x="72" y="452" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#092a5c" letter-spacing="2">${variantCopy[1]}</text>
    <rect x="72" y="512" width="878" height="510" rx="28" fill="#fff" filter="url(#shadow)"/>
    <image href="/images/products/${product.folder}/main-machine.png" x="118" y="545" width="786" height="430" preserveAspectRatio="xMidYMid meet"/>
    <rect x="72" y="1088" width="878" height="258" rx="24" fill="#fff" stroke="#e5e7eb"/>
    <text x="118" y="1162" font-family="Arial, sans-serif" font-size="34" font-weight="900" fill="#031b40">${esc(product.label)}</text>
    <rect x="118" y="1192" width="72" height="5" fill="#fa5902"/>
    <text x="118" y="1256" font-family="Arial, sans-serif" font-size="24" fill="#111827">${esc(variantCopy[2])}</text>
    <g font-family="Arial, sans-serif" font-size="19" font-weight="700" fill="#092a5c">
      <text x="118" y="1314">ENGINEERED FOR DEMANDING INDUSTRIAL APPLICATIONS</text>
      <text x="118" y="1362">ROBUST BUILD / EASY SERVICE / HIGH PERFORMANCE</text>
    </g>
    <path d="M72 1430h878" stroke="#fa5902" stroke-width="4"/>
    <text x="72" y="1485" font-family="Arial, sans-serif" font-size="18" font-weight="800" fill="#6b7280" letter-spacing="3">PITHAL MACHINES PVT. LTD.</text>
  </svg>`;
}

function contactArt(product) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="790" height="930" viewBox="0 0 790 930">
    ${defs()}
    <rect width="790" height="930" rx="28" fill="#f8fafc"/>
    <image href="/images/products/${product.folder}/hero.png" x="-220" y="0" width="1230" height="676" preserveAspectRatio="xMidYMid slice" opacity=".9"/>
    <rect width="790" height="930" fill="url(#grid)" opacity=".8"/>
    <rect y="500" width="790" height="430" fill="url(#navy)"/>
    <path d="M0 448h790v120L0 648z" fill="url(#navy)" opacity=".96"/>
    ${slashes(56, 548)}
    <text x="56" y="620" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#fa5902" letter-spacing="3">REQUEST CONSULTATION</text>
    <text x="56" y="704" font-family="Impact, Arial Black, sans-serif" font-size="66" font-weight="900" fill="#fff">${esc(product.title)}</text>
    <text x="56" y="774" font-family="Impact, Arial Black, sans-serif" font-size="66" font-weight="900" fill="#fa5902">${esc(product.highlight)}</text>
    <text x="56" y="830" font-family="Arial, sans-serif" font-size="23" fill="#fff" opacity=".84">${esc(product.subtitle)}</text>
    <circle cx="664" cy="726" r="66" fill="#fa5902"/>
    <path d="M638 720c25 48 55 46 81 14" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round"/>
    <path d="M641 679h52v52h-52z" fill="none" stroke="#fff" stroke-width="11" stroke-linejoin="round"/>
  </svg>`;
}

function videoArt(product) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1498" height="1050" viewBox="0 0 1498 1050">
    ${defs()}
    <rect width="1498" height="1050" fill="#031b40"/>
    <image href="/images/products/${product.folder}/hero.png" x="0" y="0" width="1498" height="850" preserveAspectRatio="xMidYMid slice"/>
    <rect width="1498" height="1050" fill="url(#navy)" opacity=".55"/>
    <rect y="742" width="1498" height="308" fill="#031b40" opacity=".92"/>
    <circle cx="749" cy="454" r="118" fill="#fa5902" filter="url(#shadow)"/>
    <path d="M718 394v120l104-60z" fill="#fff"/>
    ${slashes(88, 804)}
    <text x="88" y="884" font-family="Impact, Arial Black, sans-serif" font-size="76" fill="#fff">${esc(product.title)} <tspan fill="#fa5902">${esc(product.highlight)}</tspan></text>
    <text x="92" y="946" font-family="Arial, sans-serif" font-size="25" font-weight="800" fill="#fff" opacity=".82" letter-spacing="3">PERFORMANCE VIDEO SHOWCASE</text>
    <rect x="1106" y="826" width="246" height="70" rx="35" fill="#fa5902"/>
    <text x="1162" y="870" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#fff" letter-spacing="2">WATCH NOW</text>
  </svg>`;
}

function reviewArt(product) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1504" height="1046" viewBox="0 0 1504 1046">
    ${defs()}
    <rect width="1504" height="1046" fill="#f8fafc"/>
    <rect width="1504" height="1046" fill="url(#grid)"/>
    <path d="M0 0h1504v1046H0z" fill="url(#grid)" opacity=".45"/>
    <circle cx="752" cy="520" r="390" fill="#fff" filter="url(#shadow)"/>
    <circle cx="752" cy="520" r="440" fill="none" stroke="#fa5902" stroke-width="8" stroke-dasharray="120 32"/>
    <image href="/images/products/${product.folder}/main-machine.png" x="132" y="168" width="1240" height="710" preserveAspectRatio="xMidYMid meet"/>
    <rect x="76" y="72" width="530" height="164" rx="24" fill="#fff" stroke="#e5e7eb"/>
    ${slashes(112, 110)}
    <text x="178" y="130" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#fa5902" letter-spacing="3">${esc(product.accent)}</text>
    <text x="112" y="198" font-family="Impact, Arial Black, sans-serif" font-size="58" fill="#031b40">${esc(product.label)}</text>
    <rect x="1048" y="758" width="356" height="166" rx="24" fill="#031b40"/>
    <text x="1088" y="824" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#fa5902" letter-spacing="3">PRODUCT REVIEW</text>
    <text x="1088" y="872" font-family="Arial, sans-serif" font-size="24" font-weight="800" fill="#fff">Key systems, service points,</text>
    <text x="1088" y="908" font-family="Arial, sans-serif" font-size="24" font-weight="800" fill="#fff">and performance features.</text>
  </svg>`;
}

for (const product of products) {
  out(product.folder, "product-brochure.svg", documentCover(product, "brochure"));
  out(product.folder, "technical-datasheet.svg", documentCover(product, "datasheet"));
  out(product.folder, "operation-maintenance-manual.svg", documentCover(product, "manual"));
  out(product.folder, "contact-us.svg", contactArt(product));
  out(product.folder, "video-showcase.svg", videoArt(product));
  out(product.folder, "product-review.svg", reviewArt(product));
}
