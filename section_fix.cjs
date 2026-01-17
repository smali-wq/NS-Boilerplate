const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');

// Current state: overlays starts at depth 2, should be 1 - need to close 1 div before it
// Find line before overlays section and add closing div

// Strategy: Add closing divs right before each new section starts
const sectionStarts = [
    { name: 'overlays', searchFor: '{/* OVERLAYS SECTION */', closingsNeeded: 1 },
    { name: 'forms', searchFor: '{/* FORMS SECTION */', closingsNeeded: 0 }, // Already at 2
    { name: 'tables', searchFor: '{/* TABLES SECTION */', closingsNeeded: 0 }, // Already at 2
    { name: 'display', searchFor: '{/* DISPLAY SECTION */', closingsNeeded: 3 }, // Need to go from 5 to 2
    { name: 'kpi', searchFor: '{/* KPI SECTION */', closingsNeeded: 0 }, // Already at 5
    { name: 'application', searchFor: '{/* APPLICATION SECTION */', closingsNeeded: 1 }, // 6 to 5
    { name: 'carousel', searchFor: '{/* CAROUSEL SECTION */', closingsNeeded: 1 }, // 7 to 6
    { name: 'sections', searchFor: '{/* SECTIONS TAB */', closingsNeeded: 0 }, // Already at 7
    { name: 'interactive', searchFor: '{/* INTERACTIVE TAB */', closingsNeeded: 0 }, // Already at 7
    { name: 'ai', searchFor: '{/* AI Preview SECTION */', closingsNeeded: 0 }, // Already at 7
];

sectionStarts.forEach(section => {
    if (section.closingsNeeded === 0) return;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(section.searchFor)) {
            // Insert closing divs on the line before
            const closings = '                    </div>\n'.repeat(section.closingsNeeded);
            lines[i - 1] = lines[i - 1] + '\n' + closings.trimEnd();
            console.log(`Added ${section.closingsNeeded} closing(s) before ${section.name} at line ${i}`);
            break;
        }
    }
});

fs.writeFileSync(path, lines.join('\n'));
console.log('Section fixes applied');
