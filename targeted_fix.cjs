const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');

// Based on block audit:
// - overlays ends at depth 2 (should be 1) - need 1 closing
// - forms ends at depth 5 (should be 1) - need 4 closings  
// - tables ends at depth 8 (should be 1) - need 7 closings
// All other sections maintain depth 8-9 until ai which goes to 12

// Find the line numbers for each section end
const fixes = [
    // After line 632 (end of overlays `)` before forms starts)
    { searchAfter: 630, searchFor: '                            )', insertAfter: true, content: '                        </div>' },

    // After line 765 (end of forms `)` before tables starts)  
    { searchAfter: 760, searchFor: '                                        )', insertAfter: true, content: '                                    </div>\n                                </div>\n                            </div>' },
];

// Apply fixes
fixes.forEach(fix => {
    for (let i = fix.searchAfter; i < lines.length; i++) {
        if (lines[i].trim() === fix.searchFor.trim()) {
            lines[i] = lines[i] + '\n' + fix.content;
            console.log(`Applied fix after line ${i + 1}`);
            break;
        }
    }
});

fs.writeFileSync(path, lines.join('\n'));
console.log('Targeted fixes applied');
