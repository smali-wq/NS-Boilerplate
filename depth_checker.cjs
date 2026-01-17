const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
const content = fs.readFileSync(path, 'utf8').split('\n');
let depth = 0;
content.forEach((line, i) => {
    // Basic regex for tags, ignoring complex attributes for now
    const opens = (line.match(/<div(\s|>)/g) || []).length;
    const closes = (line.match(/<\/div>/g) || []).length;
    const prevDepth = depth;
    depth += opens - closes;
    if (line.includes('activeTab ===')) {
        console.log(`Line ${i + 1}: ${line.trim()} | Depth: ${depth} (prev: ${prevDepth})`);
    }
});
console.log(`Final depth: ${depth}`);
