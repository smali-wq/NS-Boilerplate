const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
let lines = fs.readFileSync(path, 'utf8').split('\n');

// Based on block audit, add closing divs before these sections:
// Before overlays (line 610): add 1 closing div (depth 2 -> 1)
// Before display (line 1167): add 3 closing divs (depth 5 -> 2)
// Before application (line 1310): add 1 closing div (depth 6 -> 5)
// Before carousel (line 1348): add 1 closing div (depth 7 -> 6)
// At end of file: add remaining closing divs

const fixes = [
    { beforeLine: 610, closings: 1, indent: '                ' },
    { beforeLine: 1168, closings: 3, indent: '                ' },
    { beforeLine: 1311, closings: 1, indent: '                ' },
    { beforeLine: 1349, closings: 1, indent: '                ' },
];

// Apply fixes in reverse order to avoid line number shifts
fixes.reverse().forEach(fix => {
    const targetLine = fix.beforeLine - 1; // Convert to 0-indexed
    const closingTags = Array(fix.closings).fill(`${fix.indent}</div>`).join('\n');
    lines[targetLine] = closingTags + '\n' + lines[targetLine];
    console.log(`Added ${fix.closings} closing div(s) before line ${fix.beforeLine}`);
});

fs.writeFileSync(path, lines.join('\n'));
console.log('Fixes applied successfully');
