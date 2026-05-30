import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public/images/products/cone-crusher");
const coneMachine = path.join(outDir, "main-machine.png");
const conePlant = path.join(outDir, "plant-bg.jpg");

const navy = "#031B40";
const primary = "#062B66";
const orange = "#F97316";
const muted = "#6B7280";

function svg(width, height, body) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="page" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ffffff"/>
          <stop offset="1" stop-color="#f2f6fb"/>
        </linearGradient>
        <linearGradient id="navyGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#031B40"/>
          <stop offset="1" stop-color="#062B66"/>
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#031B40" flood-opacity="0.18"/>
        </filter>
      </defs>
      <style>
        .headline { font-family: Arial, Helvetica, sans-serif; font-weight: 900; letter-spacing: 1px; }
        .label { font-family: Arial, Helvetica, sans-serif; font-weight: 800; letter-spacing: 1.4px; }
        .body { font-family: Arial, Helvetica, sans-serif; font-weight: 600; }
      </style>
      ${body}
    </svg>
  `);
}

function pithalWordmark(x, y, scale = 1, dark = false) {
  const text = dark ? navy : "#ffffff";
  return `
    <g transform="translate(${x} ${y}) scale(${scale})">
      <path d="M0 38 A38 38 0 0 1 38 0 L47 14 A22 22 0 0 0 16 38 Z" fill="${orange}"/>
      <text x="54" y="38" class="headline" font-size="48" fill="${text}">PITHAL</text>
      <text x="62" y="68" class="label" font-size="17" fill="${orange}">MACHINES LTD</text>
      <text x="62" y="95" class="label" font-size="12" fill="${dark ? muted : "#ffffff"}">CRUSHING STRENGTH. DELIVERING RESULTS.</text>
    </g>
  `;
}

function iconBullet(y, title) {
  return `
    <g transform="translate(86 ${y})">
      <path d="M28 0 L54 15 V45 L28 60 L2 45 V15 Z" fill="none" stroke="${orange}" stroke-width="2"/>
      <path d="M18 31 L26 39 L42 21" fill="none" stroke="${orange}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="82" y="24" class="label" font-size="24" fill="${navy}">${title}</text>
    </g>
  `;
}

async function createContactImage() {
  const width = 790;
  const height = 930;
  const plant = await sharp(conePlant).resize(width, 560, { fit: "cover", position: "bottom" }).png().toBuffer();
  const overlay = svg(width, height, `
    <rect width="100%" height="100%" fill="#ffffff"/>
    <image href="data:image/png;base64,${plant.toString("base64")}" x="0" y="370" width="${width}" height="560"/>
    <rect x="0" y="0" width="${width}" height="${height}" fill="url(#fade)"/>
    <defs>
      <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0.00" stop-color="#ffffff"/>
        <stop offset="0.38" stop-color="#ffffff"/>
        <stop offset="0.62" stop-color="#ffffff" stop-opacity="0.18"/>
        <stop offset="1.00" stop-color="#ffffff" stop-opacity="0.86"/>
      </linearGradient>
    </defs>
  `);

  await sharp(overlay)
    .png()
    .toFile(path.join(outDir, "contact-us.png"));
}

async function createBrochureCover() {
  const width = 1022;
  const height = 1539;
  const machine = await sharp(coneMachine).resize(760, 610, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
  const cover = svg(width, height, `
    <rect width="100%" height="100%" rx="18" fill="url(#page)"/>
    <path d="M720 0 H1022 V330 Z" fill="${orange}"/>
    <path d="M780 0 H1022 V250 Z" fill="#ff6a00" opacity="0.75"/>
    <text x="78" y="190" class="headline" font-size="72" fill="${navy}">CONE CRUSHER</text>
    <text x="78" y="270" class="headline" font-size="58" fill="${orange}">PRODUCT BROCHURE</text>
    <text x="80" y="330" class="body" font-size="30" fill="${navy}">High Efficiency. Excellent Product Shape.</text>
    <rect x="80" y="370" width="84" height="4" fill="${orange}"/>
    ${iconBullet(430, "HIGH REDUCTION RATIO")}
    ${iconBullet(535, "UNIFORM PRODUCT SIZE")}
    ${iconBullet(640, "HYDRAULIC ADJUSTMENT")}
    ${iconBullet(745, "STABLE PERFORMANCE")}
    <image href="data:image/png;base64,${machine.toString("base64")}" x="250" y="530" width="760" height="610" filter="url(#softShadow)"/>
    <path d="M0 1180 L1022 1118 V1539 H0 Z" fill="url(#navyGrad)"/>
    <path d="M0 1506 H1022 V1539 H0 Z" fill="${orange}"/>
    ${pithalWordmark(88, 1280, 1.9, false)}
  `);

  await sharp(cover).png().toFile(path.join(outDir, "cone-crusher-brochure.png"));
}

async function createDatasheetCover() {
  const width = 1023;
  const height = 1537;
  const machine = await sharp(coneMachine).resize(620, 470, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
  const rows = [
    ["Model", "PMCC-300"],
    ["Cone Type", "STD"],
    ["Max. Feed Size (mm)", "265"],
    ["Capacity (TPH)", "220 - 350"],
    ["Motor Power (kW)", "220 - 315"],
    ["Weight (kg)", "26,500"],
    ["Application", "Secondary / Tertiary"],
  ];

  const rowMarkup = rows.map((row, index) => {
    const y = 915 + index * 78;
    return `
      <rect x="78" y="${y}" width="868" height="78" fill="${index % 2 === 0 ? "#ffffff" : "#f8fafc"}" stroke="#e5e7eb"/>
      <text x="178" y="${y + 49}" class="body" font-size="26" fill="${navy}">${row[0]}</text>
      <line x1="585" y1="${y + 18}" x2="585" y2="${y + 60}" stroke="#d6dde8" stroke-width="2"/>
      <text x="720" y="${y + 49}" class="body" font-size="26" text-anchor="middle" fill="${navy}">${row[1]}</text>
    `;
  }).join("");

  const cover = svg(width, height, `
    <rect width="100%" height="100%" fill="url(#page)"/>
    ${pithalWordmark(705, 82, 0.72, true)}
    <text x="88" y="190" class="headline" font-size="70" fill="${navy}">TECHNICAL</text>
    <text x="88" y="268" class="headline" font-size="70" fill="${navy}">DATASHEET</text>
    <rect x="90" y="306" width="170" height="4" fill="${orange}"/>
    <text x="90" y="370" class="headline" font-size="38" fill="${navy}">CONE CRUSHER <tspan fill="${orange}">SERIES</tspan></text>
    <image href="data:image/png;base64,${machine.toString("base64")}" x="260" y="400" width="620" height="470" filter="url(#softShadow)"/>
    <rect x="78" y="845" width="868" height="72" fill="url(#navyGrad)"/>
    <path d="M858 845 H946 V917 H800 Z" fill="${orange}"/>
    <text x="104" y="892" class="label" font-size="28" fill="#ffffff">TECHNICAL SPECIFICATIONS</text>
    ${rowMarkup}
    <rect x="0" y="1464" width="1023" height="73" fill="url(#navyGrad)"/>
    <path d="M815 1464 H1023 V1537 H760 Z" fill="${orange}"/>
    <text x="88" y="1510" class="label" font-size="22" fill="#ffffff">CRUSHING STRENGTH. <tspan fill="${orange}">DELIVERING RESULTS.</tspan></text>
  `);

  await sharp(cover).png().toFile(path.join(outDir, "cone-crusher-datasheet.png"));
}

async function createGuideCover() {
  const width = 1023;
  const height = 1537;
  const machine = await sharp(coneMachine).grayscale().modulate({ brightness: 1.15 }).resize(760, 560, { fit: "contain" }).png().toBuffer();
  const cover = svg(width, height, `
    <rect width="100%" height="100%" fill="#ffffff"/>
    <rect x="0" y="0" width="1023" height="575" fill="url(#navyGrad)"/>
    <path d="M630 0 H1023 V560 Z" fill="#ffffff"/>
    <path d="M1000 210 L660 580 L1023 946 V250 Z" fill="${orange}"/>
    <text x="90" y="190" class="headline" font-size="74" fill="#ffffff">INSTALLATION</text>
    <text x="90" y="280" class="headline" font-size="74" fill="#ffffff">GUIDE</text>
    <rect x="92" y="332" width="90" height="6" fill="${orange}"/>
    <text x="92" y="405" class="headline" font-size="42" fill="#ffffff">CONE CRUSHER</text>
    <image href="data:image/png;base64,${machine.toString("base64")}" x="145" y="520" width="760" height="560" opacity="0.92" filter="url(#softShadow)"/>
    ${pithalWordmark(640, 1165, 0.92, true)}
    <rect x="0" y="1410" width="1023" height="127" fill="url(#navyGrad)"/>
    <text x="115" y="1487" class="label" font-size="24" fill="#ffffff">FOUNDATION SETUP</text>
    <line x1="340" y1="1438" x2="340" y2="1510" stroke="#ffffff" stroke-opacity="0.28"/>
    <text x="405" y="1487" class="label" font-size="24" fill="#ffffff">COMMISSIONING</text>
    <line x1="680" y1="1438" x2="680" y2="1510" stroke="#ffffff" stroke-opacity="0.28"/>
    <text x="745" y="1487" class="label" font-size="24" fill="#ffffff">SAFE OPERATION</text>
  `);

  await sharp(cover).png().toFile(path.join(outDir, "cone-crusher-installation-guide.png"));
}

async function createManualCover() {
  const width = 1023;
  const height = 1537;
  const machine = await sharp(coneMachine).grayscale().modulate({ brightness: 1.22, contrast: 1.1 }).resize(790, 600, { fit: "contain" }).png().toBuffer();
  const cover = svg(width, height, `
    <rect width="100%" height="100%" fill="#ffffff"/>
    <rect x="0" y="0" width="1023" height="620" fill="url(#navyGrad)"/>
    <path d="M650 0 H1023 V560 Z" fill="#ffffff"/>
    <path d="M1023 220 L630 640 L1023 995 Z" fill="${orange}"/>
    <text x="88" y="185" class="headline" font-size="78" fill="#ffffff">OPERATION &amp;</text>
    <text x="88" y="280" class="headline" font-size="78" fill="#ffffff">MAINTENANCE</text>
    <text x="88" y="375" class="headline" font-size="78" fill="#ffffff">MANUAL</text>
    <rect x="92" y="430" width="90" height="6" fill="${orange}"/>
    <text x="92" y="505" class="headline" font-size="42" fill="#ffffff">CONE CRUSHER</text>
    <image href="data:image/png;base64,${machine.toString("base64")}" x="95" y="640" width="790" height="600" opacity="0.88" filter="url(#softShadow)"/>
    ${pithalWordmark(650, 1218, 0.88, true)}
    <rect x="0" y="1405" width="1023" height="132" fill="url(#navyGrad)"/>
    <text x="125" y="1482" class="label" font-size="24" fill="#ffffff">SAFE OPERATION</text>
    <line x1="330" y1="1437" x2="330" y2="1510" stroke="#ffffff" stroke-opacity="0.28"/>
    <text x="398" y="1482" class="label" font-size="24" fill="#ffffff">REGULAR MAINTENANCE</text>
    <line x1="700" y1="1437" x2="700" y2="1510" stroke="#ffffff" stroke-opacity="0.28"/>
    <text x="765" y="1482" class="label" font-size="24" fill="#ffffff">MAXIMUM PERFORMANCE</text>
    <path d="M910 1452 h30 l-24 48 h-30 z M950 1452 h30 l-24 48 h-30 z M990 1452 h30 l-24 48 h-30 z" fill="${orange}"/>
  `);

  await sharp(cover).png().toFile(path.join(outDir, "cone-crusher-maintenance-manual.png"));
}

await createContactImage();
await createBrochureCover();
await createDatasheetCover();
await createGuideCover();
await createManualCover();

console.log("Generated Cone Crusher contact and download assets.");
