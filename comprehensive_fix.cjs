const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');

// Based on the audit, we need to add closing tags before each new tab section
// The pattern is: each section needs to close back to depth 1 before the next section starts

const fixes = [
    // After overlays (line ~633), depth is 2, should be 1 - need 1 closing
    { afterLine: 633, insert: '                    </div>' },

    // After forms (line ~763), depth is 5, should be 1 - need 4 closings  
    { afterLine: 763, insert: '                </div>\n            </div>\n        </div>\n    </div>' },

    // After tables (line ~1128), depth is 8, should be 1 - need 7 closings
    { afterLine: 1128, insert: '            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>' },

    // After kpi (line ~1283), depth should stay at 8 - no change needed

    // After carousel (line ~1413), depth is 9, should be 8 - need 1 closing
    { afterLine: 1413, insert: '    </div>' },

    // After interactive (line ~1620), depth should stay at 9 - no change needed

    // After screens (line ~1723), depth is 12, should be 9 - need 3 closings
    { afterLine: 1723, insert: '        </div>\n    </div>\n</div>' },

    // After ai (line ~1773), depth is 12+, need to close back to 1
    { afterLine: 1773, insert: '            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>' }
];

// Apply fixes in reverse order
fixes.sort((a, b) => b.afterLine - a.afterLine).forEach(fix => {
    const targetLine = fix.afterLine - 1; // Convert to 0-indexed
    if (targetLine >= 0 && targetLine < lines.length) {
        lines[targetLine] = lines[targetLine] + '\n' + fix.insert;
    }
});

fs.writeFileSync(path, lines.join('\n'));
console.log('Comprehensive fix applied successfully');
