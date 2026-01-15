import * as React from 'react'

import { cn } from '../../utils/cn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../molecules/Card'
import { Label } from '../atoms/Label'
import { Button } from '../atoms/Button'
import { Copy, RefreshCw, Palette, Code, FileJson, FileCode, Check, Moon, Sun } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../organisms/Tabs'

// Simple Color Picker Component (requires react-colorful peer dep technically, but we'll mock simple input for now if package missing, or assume standard HTML5 color input for zero-dep)
// Actually user asked for "interface from design tokens", we'll use standard inputs to be safe without new deps.

const DEFAULT_TOKENS = {
    brandPrimary: '#550c2f',
    brandSecondary: '#8d144e',
    brandMuted: '#fdf2f7',
    radiusSm: '0.125rem',
    radiusMd: '0.375rem',
    radiusLg: '0.5rem',
    radiusXl: '0.75rem',
    radius2xl: '1rem',
    radius3xl: '1.5rem',
    fontFamily: 'Inter, sans-serif',
    baseFontSize: '16px',
}

export function ThemeEditor() {
    const [tokens, setTokens] = React.useState(DEFAULT_TOKENS)

    // Effect to update CSS Variables live
    React.useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--color-brand-primary', tokens.brandPrimary)
        root.style.setProperty('--color-brand-secondary', tokens.brandSecondary)
        root.style.setProperty('--color-brand-muted', tokens.brandMuted)

        root.style.setProperty('--radius-sm', tokens.radiusSm)
        root.style.setProperty('--radius-md', tokens.radiusMd)
        root.style.setProperty('--radius-lg', tokens.radiusLg)
        root.style.setProperty('--radius-xl', tokens.radiusXl)
        root.style.setProperty('--radius-2xl', tokens.radius2xl)
        root.style.setProperty('--radius-3xl', tokens.radius3xl)

        // Font settings
        root.style.setProperty('--font-sans', tokens.fontFamily)
        // Adjusting root font size for scaling (be careful with this in prod, but fine for boilerplates)
        root.style.fontSize = tokens.baseFontSize

    }, [tokens])

    const handleChange = (key: keyof typeof DEFAULT_TOKENS, value: string) => {
        setTokens(prev => ({ ...prev, [key]: value }))
    }

    const reset = () => {
        setTokens(DEFAULT_TOKENS)
        document.documentElement.style.fontSize = DEFAULT_TOKENS.baseFontSize
    }

    const generateCss = () => {
        return `
/*
   📋 CSS INSTRUCTIONS:
   1. Open 'src/index.css'
   2. Replace the existing @theme block with this one.
   3. To revert, restore the original values from git.
*/

@theme {
  --color-brand-primary: ${tokens.brandPrimary};
  --color-brand-secondary: ${tokens.brandSecondary};
  --color-brand-muted: ${tokens.brandMuted};

  --radius-sm: ${tokens.radiusSm};
  --radius-md: ${tokens.radiusMd};
  --radius-lg: ${tokens.radiusLg};
  --radius-xl: ${tokens.radiusXl};
  --radius-2xl: ${tokens.radius2xl};
  --radius-3xl: ${tokens.radius3xl};

  --font-sans: ${tokens.fontFamily};
}

/* Global Base Styles */
@layer base {
  html {
    font-size: ${tokens.baseFontSize};
  }
}
`.trim()
    }

    const generateTsColors = () => {
        return `
// 📋 TYPESCRIPT INSTRUCTIONS:
// 1. Open 'src/tokens/colors.ts'
// 2. Find the 'brand' object inside the exported 'colors' object.
// 3. Comment out the existing 'brand' block and paste this new one below it.
// 4. To revert: Delete this block and uncomment the original.

/*
// EXISTING CODE (For Reference - Comment this out)
brand: {
    primary: "...",
    secondary: "...",
    muted: "...",
},
*/

// NEW CODE (Paste this)
brand: {
    primary: "${tokens.brandPrimary}",
    secondary: "${tokens.brandSecondary}",
    muted: "${tokens.brandMuted}",
},
`.trim()
    }

    const generateTsRadius = () => {
        return `
// 📋 TYPESCRIPT INSTRUCTIONS:
// 1. Open 'src/tokens/radius.ts'
// 2. Replace the exported 'radius' object content with this block.
// 3. To revert: Undo changes or git restore file.

export const radius = {
    none: "0px",
    sm: "${tokens.radiusSm}",
    base: "0.25rem",
    md: "${tokens.radiusMd}",
    lg: "${tokens.radiusLg}",
    xl: "${tokens.radiusXl}",
    "2xl": "${tokens.radius2xl}",
    "3xl": "${tokens.radius3xl}",
    full: "9999px",
} as const
`.trim()
    }

    const CopyButton = ({ text }: { text: string }) => (
        <Button
            variant="primary"
            size="sm"
            className="bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-md absolute top-4 right-4"
            onClick={(e) => {
                navigator.clipboard.writeText(text)
                const btn = e.currentTarget
                const originalText = btn.innerHTML
                btn.innerHTML = `<div class="flex items-center"><svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!</div>`
                setTimeout(() => btn.innerHTML = originalText, 2000)
            }}
        >
            <Copy className="w-3 h-3 mr-2" /> Copy Code
        </Button>
    )

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
                <Card className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Palette className="w-4 h-4 text-blue-500" />
                            Design Tokens
                        </CardTitle>
                        <CardDescription>Live edit system variables</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {/* Colors */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Brand Colors</h4>

                            <div className="space-y-2">
                                <Label>Primary Brand</Label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={tokens.brandPrimary}
                                        onChange={(e) => handleChange('brandPrimary', e.target.value)}
                                        className="h-10 w-10 rounded-lg p-0 border-0 cursor-pointer shadow-sm"
                                    />
                                    <input
                                        type="text"
                                        value={tokens.brandPrimary}
                                        onChange={(e) => handleChange('brandPrimary', e.target.value)}
                                        className="flex-1 rounded-xl border-slate-200 text-sm font-mono"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Secondary Brand</Label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={tokens.brandSecondary}
                                        onChange={(e) => handleChange('brandSecondary', e.target.value)}
                                        className="h-10 w-10 rounded-lg p-0 border-0 cursor-pointer shadow-sm"
                                    />
                                    <input
                                        type="text"
                                        value={tokens.brandSecondary}
                                        onChange={(e) => handleChange('brandSecondary', e.target.value)}
                                        className="flex-1 rounded-xl border-slate-200 text-sm font-mono"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Typography */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Typography</h4>

                            <div className="space-y-2">
                                <Label>Font Family</Label>
                                <select
                                    className="w-full rounded-xl border-slate-200 text-sm"
                                    value={tokens.fontFamily}
                                    onChange={(e) => handleChange('fontFamily', e.target.value)}
                                >
                                    <option value="Inter, sans-serif">Inter (Default)</option>
                                    <option value="'Lato', sans-serif">Lato</option>
                                    <option value="'Open Sans', sans-serif">Open Sans</option>
                                    <option value="'Montserrat', sans-serif">Montserrat</option>
                                    <option value="'Poppins', sans-serif">Poppins</option>
                                    <option value="'Raleway', sans-serif">Raleway</option>
                                    <option value="'Nunito', sans-serif">Nunito</option>
                                    <option value="'Plus Jakarta Sans', sans-serif">Plus Jakarta Sans</option>
                                    <option value="'Outfit', sans-serif">Outfit</option>
                                    <option value="system-ui, sans-serif">System UI</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <Label>Base Size</Label>
                                    <span className="text-xs text-slate-400 font-mono">{tokens.baseFontSize}</span>
                                </div>
                                <input
                                    type="range" min="12" max="20" step="1"
                                    value={parseInt(tokens.baseFontSize)}
                                    onChange={(e) => handleChange('baseFontSize', `${e.target.value}px`)}
                                    className="w-full accent-blue-600"
                                />
                            </div>
                        </div>

                        {/* Radius */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-2">Border Radius</h4>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <Label className="mb-0">Full Radius (3XL)</Label>
                                        <span className="text-xs text-slate-400 font-mono">{tokens.radius3xl}</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="3" step="0.125"
                                        value={parseFloat(tokens.radius3xl)}
                                        onChange={(e) => handleChange('radius3xl', `${e.target.value}rem`)}
                                        className="w-full accent-blue-600"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <Label className="mb-0">Card Radius (2XL)</Label>
                                        <span className="text-xs text-slate-400 font-mono">{tokens.radius2xl}</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="2" step="0.125"
                                        value={parseFloat(tokens.radius2xl)}
                                        onChange={(e) => handleChange('radius2xl', `${e.target.value}rem`)}
                                        className="w-full accent-blue-600"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <Label className="mb-0">Button Radius (XL)</Label>
                                        <span className="text-xs text-slate-400 font-mono">{tokens.radiusXl}</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="1.5" step="0.125"
                                        value={parseFloat(tokens.radiusXl)}
                                        onChange={(e) => handleChange('radiusXl', `${e.target.value}rem`)}
                                        className="w-full accent-blue-600"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button variant="outline" className="w-full" onClick={reset} icon={RefreshCw}>Reset Defaults</Button>
                        </div>

                    </CardContent>
                </Card>

                {/* Export Section */}
                <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl relative group">
                    <Tabs defaultValue="css">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest">Global Configuration</h3>
                            <TabsList className="bg-white/10 border-white/5 text-white/50">
                                <TabsTrigger value="css" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:text-white"><FileCode className="w-3 h-3 mr-2" /> CSS</TabsTrigger>
                                <TabsTrigger value="colors" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white hover:text-white"><FileJson className="w-3 h-3 mr-2" /> TS: Colors</TabsTrigger>
                                <TabsTrigger value="radius" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:text-white"><FileJson className="w-3 h-3 mr-2" /> TS: Radius</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="css" className="relative mt-0">
                            <CopyButton text={generateCss()} />
                            <textarea
                                readOnly
                                value={generateCss()}
                                className="w-full h-80 bg-black/30 rounded-xl p-4 text-emerald-400 font-mono text-xs focus:outline-none resize-none border border-white/5"
                            />
                        </TabsContent>

                        <TabsContent value="colors" className="relative mt-0">
                            <CopyButton text={generateTsColors()} />
                            <textarea
                                readOnly
                                value={generateTsColors()}
                                className="w-full h-80 bg-black/30 rounded-xl p-4 text-blue-300 font-mono text-xs focus:outline-none resize-none border border-white/5"
                            />
                        </TabsContent>

                        <TabsContent value="radius" className="relative mt-0">
                            <CopyButton text={generateTsRadius()} />
                            <textarea
                                readOnly
                                value={generateTsRadius()}
                                className="w-full h-80 bg-black/30 rounded-xl p-4 text-purple-300 font-mono text-xs focus:outline-none resize-none border border-white/5"
                            />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
                {/* Preview Section */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-8 dark:bg-slate-900 dark:border-slate-800 transition-colors">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight dark:text-white">Theme Preview</h2>
                        <p className="text-slate-500 font-medium dark:text-slate-400">Verify your changes across standard components.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Brand Card Mockup */}
                        <div className="bg-[var(--color-brand-primary)] rounded-[var(--radius-3xl)] p-8 text-white shadow-xl shadow-[var(--color-brand-primary)]/20 transition-all duration-300">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Primary Surface</p>
                                    <h3 className="text-2xl font-black mt-1">Brand Identity</h3>
                                </div>
                                <div className="w-10 h-10 rounded-[var(--radius-xl)] bg-white/20 flex items-center justify-center">
                                    <Palette className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <p className="mt-4 text-white/80 text-sm">This card uses the primary brand color and the 3XL radius token.</p>
                            <div className="mt-6 flex gap-3">
                                <button className="bg-white text-[var(--color-brand-primary)] px-4 py-2 rounded-[var(--radius-xl)] text-sm font-bold shadow-sm hover:scale-105 transition-transform">Action</button>
                                <button className="bg-[var(--color-brand-secondary)] text-white px-4 py-2 rounded-[var(--radius-xl)] text-sm font-bold shadow-sm ring-1 ring-white/10 hover:bg-white/10 transition-colors">Secondary</button>
                            </div>
                        </div>

                        {/* Standard UI Mockup */}
                        <div className="bg-white border border-slate-200 rounded-[var(--radius-3xl)] p-8 shadow-sm transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-[var(--radius-3xl)] bg-slate-100 dark:bg-slate-700" />
                                <div>
                                    <div className="h-4 w-24 bg-slate-100 rounded-[var(--radius-md)] mb-2 dark:bg-slate-700" />
                                    <div className="h-3 w-32 bg-slate-50 rounded-[var(--radius-sm)] dark:bg-slate-700" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 w-full bg-slate-50 rounded-[var(--radius-full)] dark:bg-slate-700" />
                                <div className="h-2 w-5/6 bg-slate-50 rounded-[var(--radius-full)] dark:bg-slate-700" />
                                <div className="h-2 w-4/6 bg-slate-50 rounded-[var(--radius-full)] dark:bg-slate-700" />
                            </div>
                            <div className="mt-6">
                                <button className="w-full bg-slate-900 text-white py-2.5 rounded-[var(--radius-xl)] text-sm font-bold hover:bg-slate-800 transition-colors dark:bg-slate-950">Standard Button</button>
                            </div>
                        </div>
                    </div>

                    {/* Radius Ladder */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center text-xs font-mono text-slate-400 rounded-[var(--radius-sm)] dark:bg-slate-800 dark:border-slate-700">sm</div>
                        <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center text-xs font-mono text-slate-400 rounded-[var(--radius-md)] dark:bg-slate-800 dark:border-slate-700">md</div>
                        <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center text-xs font-mono text-slate-400 rounded-[var(--radius-xl)] dark:bg-slate-800 dark:border-slate-700">xl</div>
                        <div className="aspect-square bg-white border border-slate-200 flex items-center justify-center text-xs font-mono text-slate-400 rounded-[var(--radius-2xl)] dark:bg-slate-800 dark:border-slate-700">2xl</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
