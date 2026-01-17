const fs = require('fs');
const content = fs.readFileSync('d:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx', 'utf8');
const lines = content.split(/\r?\n/);

let divDepth = 0;
let tabEndDepths = [];

lines.forEach((line, i) => {
    const lineNum = i + 1;
    const trimmed = line.trim();

    // Opening div
    let pos = 0;
    while (true) {
        let match = line.indexOf('<div', pos);
        if (match === -1) break;
        if (line[match + 4] === ' ' || line[match + 4] === '>') divDepth++;
        pos = match + 4;
    }

    // Closing div
    pos = 0;
    while (true) {
        let match = line.indexOf('</div>', pos);
        if (match === -1) break;
        divDepth--;
        pos = match + 6;
    }

    if (trimmed.includes('activeTab ===')) {
        tabEndDepths.push({ line: lineNum, content: trimmed, depth: divDepth });
    }
});

console.log('--- Tab Boundary Depths ---');
tabEndDepths.forEach(t => {
    console.log(`Line ${t.line}: Depth ${t.depth} | ${t.content}`);
});
console.log(`Final Depth at EOF: ${divDepth}`);
