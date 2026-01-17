const fs = require('fs');
const content = fs.readFileSync('d:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx', 'utf8');
const lines = content.split(/\r?\n/);

let divStack = [];
lines.forEach((line, i) => {
    const lineNum = i + 1;
    let pos = 0;

    // Find all <div
    while (true) {
        let match = line.indexOf('<div', pos);
        if (match === -1) break;
        // Check if it's strictly <div or <div[space]
        if (line[match + 4] === ' ' || line[match + 4] === '>') {
            divStack.push({ type: 'open', line: lineNum });
        }
        pos = match + 4;
    }

    pos = 0;
    // Find all </div>
    while (true) {
        let match = line.indexOf('</div>', pos);
        if (match === -1) break;
        divStack.push({ type: 'close', line: lineNum });
        pos = match + 6;
    }
});

console.log(`Total Opens: ${divStack.filter(d => d.type === 'open').length}`);
console.log(`Total Closes: ${divStack.filter(d => d.type === 'close').length}`);

let depth = 0;
divStack.forEach(d => {
    if (d.type === 'open') depth++;
    else depth--;
    if (depth < 0) console.log(`NEGATIVE DEPTH at line ${d.line}`);
});
console.log(`Final Depth: ${depth}`);
