const fs = require('fs');
let content = fs.readFileSync('src/app/careers/page.tsx', 'utf8');

// The current values are likely `mx-auto max-w-[1520px] px-6`
// or `max-w-[1520px] mx-auto px-6`
content = content.replace(/mx-auto max-w-\[1520px\] px-4/g, 'mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10');
content = content.replace(/mx-auto max-w-\[1520px\] px-6/g, 'mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10');
content = content.replace(/max-w-\[1520px\] mx-auto px-6/g, 'mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10');
content = content.replace(/max-w-\[1520px\] mx-auto px-4/g, 'mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10');

// One previously replaced might have been: mx-auto max-w-6xl px-4 (I didn't replace that one because I only replaced max-w-7xl)
// Let's also check max-w-6xl just in case
content = content.replace(/mx-auto max-w-6xl px-4/g, 'mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10');
content = content.replace(/mx-auto max-w-6xl px-6/g, 'mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10');

fs.writeFileSync('src/app/careers/page.tsx', content);
console.log('Replaced custom mx-auto classes with exact container classes.');
