import * as React from "react"
import {
    Plus, Upload, Layout as LayoutIcon, Grid as GridIcon,
    Monitor, Save, Trash2, Sparkles, Check, X,
    ChevronRight, MousePointer2, Scan, Zap, Activity,
    CreditCard, Search, Tag, AlertCircle, User,
    CheckSquare, ToggleRight, List, Calendar as CalendarIcon,
    Layers, Type, MessageSquare, Image as ImageIcon
} from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../molecules/Card"
import { Badge } from "../atoms/Badge"
import { Modal, ModalContent, ModalHeader, ModalFooter } from "../organisms/Modal"
import { StatsCard } from "../molecules/StatsCard"
import { Alert, AlertTitle, AlertDescription } from "../molecules/Alert"
import { Input } from "../atoms/Input"
import { Avatar } from "../atoms/Avatar"
import { Switch } from "../atoms/Switch"
import { Checkbox } from "../atoms/Checkbox"
import { Select } from "../atoms/Select"

// Registry of available components for the builder
const COMPONENT_REGISTRY = [
    { type: 'stats', label: 'Stats Card', icon: Activity, preview: <StatsCard title="Real-time Data" value="1,284" change="+12.5%" trend="up" className="scale-75 origin-top shadow-none border-none" /> },
    { type: 'card', label: 'Info Card', icon: CreditCard, preview: <Card className="scale-75 origin-top shadow-none"><CardContent className="p-4"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Content Block</p></CardContent></Card> },
    { type: 'button', label: 'Action Button', icon: MousePointer2, preview: <Button variant="brand" className="scale-75 uppercase text-[10px]">Action</Button> },
    { type: 'input', label: 'Search Bar', icon: Search, preview: <Input placeholder="Search..." className="scale-75" /> },
    { type: 'badge', label: 'Status Badge', icon: Tag, preview: <Badge variant="brand" className="scale-75">Active</Badge> },
    { type: 'alert', label: 'Alert Box', icon: AlertCircle, preview: <Alert className="scale-75 origin-top border-none overflow-hidden"><AlertTitle className="text-[10px]">Alert</AlertTitle></Alert> },
    { type: 'avatar', label: 'User Avatar', icon: User, preview: <Avatar size="sm" fallback="CN" src="https://github.com/shadcn.png" className="scale-75" /> },
    { type: 'switch', label: 'Toggle Switch', icon: ToggleRight, preview: <Switch checked onCheckedChange={() => { }} className="scale-75" /> },
    { type: 'checkbox', label: 'Checkbox', icon: CheckSquare, preview: <Checkbox className="scale-75" checked /> },
    { type: 'select', label: 'Dropdown', icon: List, preview: <Select className="scale-75 w-full"><option>Option 1</option></Select> },
    { type: 'calendar', label: 'Date Picker', icon: CalendarIcon, preview: <div className="scale-75 border rounded-lg p-2 flex items-center gap-2"><CalendarIcon className="w-4 h-4" /><span className="text-[10px]">Pick Date</span></div> },
    { type: 'tabs', label: 'Tabs Layout', icon: Layers, preview: <div className="scale-75 flex gap-2 border-b"><div className="border-b-2 border-blue-500 text-blue-500 font-bold text-[10px] pb-1">Tab 1</div><div className="text-slate-400 text-[10px] pb-1">Tab 2</div></div> },
    { type: 'label', label: 'Text Label', icon: Type, preview: <span className="scale-75 text-[10px] font-black uppercase tracking-widest">Section Title</span> },
    { type: 'chat', label: 'Chat Bubble', icon: MessageSquare, preview: <div className="scale-75 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-2xl rounded-tr-none text-[10px]">How can I help you today?</div> },
    { type: 'image', label: 'Media Block', icon: ImageIcon, preview: <div className="scale-75 w-20 h-12 bg-slate-100 rounded-lg flex items-center justify-center"><ImageIcon className="w-4 h-4 text-slate-300" /></div> },
]

export function ScreenBuilder({ onSave }: { onSave?: (screen: any) => void }) {
    const [step, setStep] = React.useState<'upload' | 'engine' | 'build'>('upload')
    const [layoutEngine, setLayoutEngine] = React.useState<'flex' | 'grid'>('grid')
    const [isProcessing, setIsProcessing] = React.useState(false)
    const [scanPosition, setScanPosition] = React.useState(0)
    const [gridNodes, setGridNodes] = React.useState<Record<number, string>>({})
    const [selectedCell, setSelectedCell] = React.useState<number | null>(null)
    const [isPickerOpen, setIsPickerOpen] = React.useState(false)
    const [uploadPreview, setUploadPreview] = React.useState<string | null>(null)
    const [searchQuery, setSearchQuery] = React.useState("")
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setUploadPreview(event.target?.result as string)
                startAnalysis()
            }
            reader.readAsDataURL(file)
        }
    }

    const startAnalysis = () => {
        setIsProcessing(true)

        // Scan animation effect
        const interval = setInterval(() => {
            setScanPosition(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 5
            })
        }, 100)

        setTimeout(() => {
            setIsProcessing(false)
            setStep('engine')
            // AI Suggestion: If many empty boxes detected, suggest Grid
            if (uploadPreview) {
                setLayoutEngine('grid')
            }
        }, 3000)
    }

    const magicFill = () => {
        const types = COMPONENT_REGISTRY.map(c => c.type)
        const newNodes: Record<number, string> = {}
        const count = layoutEngine === 'grid' ? 12 : 6
        for (let i = 0; i < count; i++) {
            newNodes[i] = types[Math.floor(Math.random() * types.length)]
        }
        setGridNodes(newNodes)
    }

    const handleSave = () => {
        const newScreen = {
            id: Date.now(),
            name: `AI Generated Screen ${new Date().toLocaleTimeString()}`,
            engine: layoutEngine,
            nodes: gridNodes,
            timestamp: new Date().toISOString(),
            isExported: false
        }
        onSave?.(newScreen)
        setStep('upload')
        setGridNodes({})
        setUploadPreview(null)
        setScanPosition(0)
    }

    const exportToProject = async () => {
        const componentName = `CustomScreen_${Date.now()}`
        const screenData = {
            name: componentName,
            engine: layoutEngine,
            nodes: gridNodes
        }

        // Signal the gallery to handle the file write via tool call (simulated through onSave)
        const newScreen = {
            ...screenData,
            id: Date.now(),
            timestamp: new Date().toISOString(),
            isExported: true
        }
        onSave?.(newScreen)
        setStep('upload')
        setGridNodes({})
        setUploadPreview(null)
    }

    const addComponent = (type: string) => {
        if (selectedCell !== null) {
            setGridNodes(prev => ({ ...prev, [selectedCell]: type }))
            setIsPickerOpen(false)
            setSelectedCell(null)
            setSearchQuery("")
        }
    }

    const removeComponent = (index: number) => {
        setGridNodes(prev => {
            const next = { ...prev }
            delete next[index]
            return next
        })
    }

    const renderPreview = (type: string) => {
        const comp = COMPONENT_REGISTRY.find(c => c.type === type)
        return comp ? comp.preview : null
    }

    const filteredComponents = COMPONENT_REGISTRY.filter(comp =>
        comp.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.type.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* HIDDEN FILE INPUT */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
            />

            {/* PROGRESS STEPS */}
            <div className="flex items-center justify-center gap-4 mb-12">
                <StepIndicator active={step === 'upload'} completed={step !== 'upload'} label="Vision Analysis" />
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <StepIndicator active={step === 'engine'} completed={step === 'build'} label="Architect" />
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <StepIndicator active={step === 'build'} completed={false} label="Live Canvas" />
            </div>

            {/* STAGE 1: UPLOAD */}
            {step === 'upload' && (
                <Card className="border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center py-20 text-center relative">
                        {isProcessing ? (
                            <div className="space-y-8 w-full max-w-md animate-in fade-in duration-700">
                                <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl aspect-video bg-slate-100">
                                    <img src={uploadPreview!} className="w-full h-full object-cover opacity-50 grayscale" alt="Mockup" />
                                    {/* SCAN OVERLAY */}
                                    <div
                                        className="absolute left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_#3b82f6] z-10 transition-all duration-100"
                                        style={{ top: `${scanPosition}% ` }}
                                    />
                                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-blue-100 dark:border-blue-900">
                                            <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
                                            <span className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm">AI Engine Scanning...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Deconstructing Hierarchy</h3>
                                    <div className="flex justify-center gap-2">
                                        <Badge variant="brand" className="animate-bounce delay-75">Layout</Badge>
                                        <Badge variant="brand" className="animate-bounce delay-150">Fonts</Badge>
                                        <Badge variant="brand" className="animate-bounce delay-300">Spacing</Badge>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                                <div
                                    onClick={handleUploadClick}
                                    className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] flex items-center justify-center text-white mx-auto shadow-2xl shadow-blue-500/40 relative group cursor-pointer hover:scale-110 transition-transform"
                                >
                                    <div className="absolute inset-0 bg-white/20 rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Upload className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Reconstruct Mockups</h3>
                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-3 leading-relaxed">
                                        Our vision engine converts pixel mocks into <br />production-ready NSUI layouts.
                                    </p>
                                </div>
                                <Button onClick={handleUploadClick} variant="brand" className="px-12 h-16 rounded-[24px] shadow-2xl shadow-blue-500/30 font-black uppercase tracking-[0.2em] text-sm">
                                    Choose Screenshot
                                </Button>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Supports PNG, JPG up to 10MB</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* STAGE 2: ENGINE SELECTION */}
            {step === 'engine' && (
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="brand" className="px-4 py-1.5 rounded-xl font-black mb-4">Vision Success</Badge>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Select Architecture</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">AI detected a {layoutEngine === 'grid' ? 'complex' : 'simple'} structure. Choose your implementation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <EngineCard
                            icon={GridIcon}
                            title="Tailwind CSS Grid"
                            description="Recommended for complex, staggered dashboard layouts with fine-grained control."
                            active={layoutEngine === 'grid'}
                            onClick={() => { setLayoutEngine('grid'); setStep('build'); }}
                        />
                        <EngineCard
                            icon={LayoutIcon}
                            title="Flexbox Flow"
                            description="Ideal for linear page flows, stacked sections, and simple responsive containers."
                            active={layoutEngine === 'flex'}
                            onClick={() => { setLayoutEngine('flex'); setStep('build'); }}
                        />
                    </div>
                </div>
            )}

            {/* STAGE 3: BUILDER CANVAS */}
            {step === 'build' && (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                    <header className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-xl gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                {layoutEngine === 'grid' ? <GridIcon className="w-6 h-6" /> : <LayoutIcon className="w-6 h-6" />}
                            </div>
                            <div>
                                <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-lg">AI Reconstructed Canvas</h3>
                                <div className="flex gap-2 mt-1">
                                    <Badge variant="outline" className="text-[10px] lowercase font-bold">engine: {layoutEngine}</Badge>
                                    <Badge variant="success" className="text-[10px] lowercase font-bold">vision: verified</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="outline" onClick={magicFill} icon={Sparkles} className="rounded-2xl font-black uppercase text-xs border-blue-200 text-blue-600 hover:bg-blue-50">Magic Fill</Button>
                            <Divider orientation="vertical" className="h-8 mx-2" />
                            <Button variant="outline" onClick={() => { setStep('upload'); setUploadPreview(null); }} className="rounded-2xl font-black uppercase text-xs">Discard</Button>
                            <Button variant="brand" onClick={handleSave} icon={Save} className="rounded-2xl font-black uppercase text-xs">Commit Screen</Button>
                            <Button variant="brand" onClick={exportToProject} icon={Plus} className="rounded-2xl font-black uppercase text-xs bg-indigo-600 hover:bg-indigo-700">Export to Project</Button>
                        </div>
                    </header>

                    <div className={cn(
                        "bg-slate-200/50 dark:bg-slate-950 p-12 rounded-[60px] border-8 border-white dark:border-slate-900 shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)] min-h-[700px] transition-all duration-1000",
                        layoutEngine === 'grid' ? "grid grid-cols-4 gap-6" : "flex flex-col gap-10 max-w-2xl mx-auto"
                    )}>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "relative transition-all duration-500 ease-out hover:scale-[1.02]",
                                    layoutEngine === 'grid' ? "h-48" : "w-full min-h-[140px]"
                                )}
                            >
                                {gridNodes[i] ? (
                                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col items-center justify-center group relative overflow-hidden animate-in zoom-in-50 duration-300">
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all scale-75 hover:scale-100 origin-top-right z-30">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-10 w-10 text-rose-500 bg-rose-50 dark:bg-rose-900/30 rounded-xl"
                                                onClick={() => removeComponent(i)}
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </Button>
                                        </div>
                                        <div className="w-full h-full overflow-hidden flex items-center justify-center p-4">
                                            {renderPreview(gridNodes[i])}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-sm border-t border-slate-100 dark:border-slate-700 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{gridNodes[i]}</span>
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => { setSelectedCell(i); setIsPickerOpen(true); }}
                                        className="w-full h-full border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-slate-300 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all group active:scale-95"
                                    >
                                        <div className="flex flex-col items-center gap-3">
                                            <Plus className="w-8 h-8 transition-transform group-hover:scale-125 duration-500" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Insert</span>
                                        </div>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* COMPONENT PICKER MODAL */}
            <Modal isOpen={isPickerOpen} onClose={() => { setIsPickerOpen(false); setSearchQuery(""); }}>
                <ModalHeader
                    title="System Library"
                    description="AI-mapped components ready for deployment"
                    icon={<Zap className="w-5 h-5 text-amber-500" />}
                    onClose={() => { setIsPickerOpen(false); setSearchQuery(""); }}
                />

                {/* SEARCH BAR */}
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search library components..."
                            className="pl-12 h-12 bg-white dark:bg-slate-800 rounded-2xl border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 placeholder:font-bold placeholder:uppercase placeholder:text-[10px]"
                        />
                    </div>
                </div>

                <ModalContent className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto p-6">
                    {filteredComponents.length > 0 ? (
                        filteredComponents.map(comp => (
                            <button
                                key={comp.type}
                                onClick={() => addComponent(comp.type)}
                                className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:ring-4 hover:ring-blue-500/10 transition-all text-left flex flex-col gap-4 group relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700">
                                    <comp.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-tight">{comp.label}</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Ready Component</p>
                                </div>
                            </button>
                        ))
                    ) : (
                        <div className="col-span-2 py-20 text-center space-y-4">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 mx-auto">
                                <Search className="w-8 h-8" />
                            </div>
                            <p className="font-black text-slate-900 dark:text-white uppercase tracking-tight">No components found</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Try a different search term</p>
                        </div>
                    )}
                </ModalContent>
                <ModalFooter>
                    <Button variant="secondary" onClick={() => { setIsPickerOpen(false); setSearchQuery(""); }} className="rounded-xl px-8">Back to Canvas</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

function StepIndicator({ active, completed, label }: { active: boolean, completed: boolean, label: string }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 border-2",
                active ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-110 border-blue-400" :
                    completed ? "bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 border-emerald-400" :
                        "bg-white dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-800"
            )}>
                {completed ? <Check className="w-6 h-6" /> : <Scan className={cn("w-6 h-6", active && "animate-pulse")} />}
            </div>
            <span className={cn(
                "text-[10px] font-black uppercase tracking-[0.2em]",
                active ? "text-blue-600" : completed ? "text-emerald-500" : "text-slate-400"
            )}>{label}</span>
        </div>
    )
}

const Divider = ({ orientation = 'horizontal', className }: { orientation?: 'horizontal' | 'vertical', className?: string }) => (
    <div className={cn(
        "bg-slate-200 dark:bg-slate-800",
        orientation === 'horizontal' ? "h-[1px] w-full" : "w-[1px] h-full",
        className
    )} />
)

function EngineCard({ icon: Icon, title, description, active, onClick }: any) {
    return (
        <Card
            className={cn(
                "cursor-pointer transition-all duration-500 border-2 rounded-[40px] overflow-hidden",
                active ? "border-blue-500 shadow-2xl ring-8 ring-blue-500/5 bg-blue-50/20 dark:bg-blue-900/10" : "border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 shadow-sm bg-white dark:bg-slate-900"
            )}
            onClick={onClick}
        >
            <CardContent className="p-12 flex flex-col items-center text-center space-y-8">
                <div className={cn(
                    "w-24 h-24 rounded-[36px] flex items-center justify-center transition-all duration-500",
                    active ? "bg-blue-600 text-white shadow-2xl rotate-3" : "bg-slate-50 dark:bg-slate-800 text-slate-400 shadow-inner"
                )}>
                    <Icon className="w-12 h-12" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">{title}</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed max-w-xs">{description}</p>
                </div>
                <div className={cn(
                    "w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-500",
                    active ? "border-blue-600 bg-white scale-110" : "border-slate-100 dark:border-slate-800 bg-transparent"
                )}>
                    {active ? <Check className="w-8 h-8 text-blue-600" /> : <ChevronRight className="w-6 h-6 text-slate-200" />}
                </div>
            </CardContent>
        </Card>
    )
}
