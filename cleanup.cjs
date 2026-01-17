const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
let content = fs.readFileSync(path, 'utf8').split('\n');

// Line numbers from view_file (1-indexed)
// 497, 498, 499 -> 0-indexed: 496, 497, 498
// 632, 633 -> 0-indexed: 631, 632

// We remove high indices first to avoid index shifting affecting low indices
// 633, 632
content.splice(632, 1);
content.splice(631, 1);

// 499, 498, 497
content.splice(498, 1);
content.splice(497, 1);
content.splice(496, 1);

fs.writeFileSync(path, content.join('\n'));
console.log('Cleanup successful');
