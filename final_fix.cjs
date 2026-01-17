const fs = require('fs');
const path = 'd:/Projects/NS-Boilerplate/src/playground/ComponentGallery.tsx';
let lines = fs.readFileSync(path, 'utf8').split('\n');

const fixes = [
    { line: 567, content: '                            </div>\n                        )\n                    }' },
    { line: 633, content: '                                    </div>\n                                </div>\n                            )\n                        }' },
    { line: 763, content: '                            )\n                        }' },
    { line: 1128, content: '                                    </div>\n                                </div>\n                            </div>\n                        )\n                    }' },
    { line: 1182, content: '                            )\n                        }' },
    { line: 1275, content: '                                </div>\n                            )\n                        }' },
    { line: 1315, content: '                                </div>\n                            )\n                        }' },
    { line: 1412, content: '                            )\n                        }' },
    { line: 1538, content: '                            )\n                        }' },
    { line: 1618, content: '                            )\n                        }' },
    { line: 1720, content: '                                    </div>\n                                </div>\n                            </div>\n                        )\n                    }' },
    { line: 1770, content: '                                </div>\n                            )\n                        }' }
];

// Apply fixes in reverse order to maintain line indices
fixes.sort((a, b) => b.line - a.line).forEach(fix => {
    // Audit line numbers are 1-indexed
    lines[fix.line - 1] = fix.content;
});

fs.writeFileSync(path, lines.join('\n'));
console.log('Final structural fix applied successfully');
