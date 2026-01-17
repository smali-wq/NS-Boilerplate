const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');

let depths = {
    div: 0,
    Container: 0,
    main: 0,
    exp: 0
};

let output = 'Line | Change | Depths (D/C/M/E) | Content\n';

lines.forEach((line, i) => {
    const lineNum = i + 1;
    const trimmed = line.trim();

    const oldDepths = { ...depths };

    // Track expression depth { ... }
    depths.exp += (trimmed.match(/{/g) || []).length;
    depths.exp -= (trimmed.match(/}/g) || []).length;

    // Track tag depths
    depths.div += (trimmed.match(/<div(\s|>)/g) || []).length;
    depths.div -= (trimmed.match(/<\/div>/g) || []).length;

    depths.Container += (trimmed.match(/<Container(\s|>)/g) || []).length;
    depths.Container -= (trimmed.match(/<\/Container>/g) || []).length;

    depths.main += (trimmed.match(/<main(\s|>)/g) || []).length;
    depths.main -= (trimmed.match(/<\/main>/g) || []).length;

    const changed = Object.keys(depths).some(k => depths[k] !== oldDepths[k]);

    if (changed || trimmed.includes('activeTab ===')) {
        let changeStr = '';
        if (depths.div !== oldDepths.div) changeStr += `D${depths.div > oldDepths.div ? '+' : '-'}${Math.abs(depths.div - oldDepths.div)} `;
        if (depths.Container !== oldDepths.Container) changeStr += `C${depths.Container > oldDepths.Container ? '+' : '-'}${Math.abs(depths.Container - oldDepths.Container)} `;
        if (depths.main !== oldDepths.main) changeStr += `M${depths.main > oldDepths.main ? '+' : '-'}${Math.abs(depths.main - oldDepths.main)} `;
        if (depths.exp !== oldDepths.exp) changeStr += `E${depths.exp > oldDepths.exp ? '+' : '-'}${Math.abs(depths.exp - oldDepths.exp)} `;

        output += `${lineNum.toString().padEnd(4)} | ${changeStr.padEnd(8)} | ${depths.div}/${depths.Container}/${depths.main}/${depths.exp} | ${trimmed.substring(0, 80)}\n`;
    }
});

fs.writeFileSync('d:/Projects/NS-Boilerplate/audit_output.txt', output);
console.log('Audit complete, output saved to audit_output.txt');
