const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
let lines = fs.readFileSync(path, 'utf8').split('\n');

const linesToDelete = [
    567, 568, // Navigation
    634, 635, 636, // Overlays
    766, 768, // Forms
    1134, 1135, 1136, 1137, // Tables
    1425, 1427, // Carousel
    1738, 1739, 1740, 1741, // Screens
    1790, 1792, 1793 // AI
];

// Sort descending to avoid index shifting problems
linesToDelete.sort((a, b) => b - a).forEach(lineNum => {
    lines.splice(lineNum - 1, 1);
});

fs.writeFileSync(path, lines.join('\n'));
console.log('Final surgical cleanup applied.');
