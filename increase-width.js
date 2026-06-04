const fs = require('fs');
let content = fs.readFileSync('src/app/careers/page.tsx', 'utf8');
content = content.replace(/max-w-7xl/g, 'max-w-[1520px]');
fs.writeFileSync('src/app/careers/page.tsx', content);
console.log('Replaced max-w-7xl with max-w-[1520px]');
