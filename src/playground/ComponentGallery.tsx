import { useState } from 'react'
import { cn } from '../utils/cn'
import {
    Activity, Layout as LayoutIcon, Settings, Users, BarChart3,
    Package, Plus, Inbox, History, Globe,
    Edit2, Trash2, Eye, ChevronDown, ChevronUp,
    FileText, Image as ImageIcon, Video, MoreHorizontal,
    CheckCircle2, Clock, AlertCircle, ChevronLeft, ChevronRight, Lock,
    Shield, Zap, Cloud, CreditCard, Terminal,
    Info, AlertTriangle
} from 'lucide-react'

// Atoms
import { Button } from '../components/atoms/Button'
import { Input } from '../components/atoms/Input'
import { Label } from '../components/atoms/Label'
import { Badge } from '../components/atoms/Badge'
import { Select } from '../components/atoms/Select'
import { Switch } from '../components/atoms/Switch'
import { Checkbox } from '../components/atoms/Checkbox'
import { Textarea } from '../components/atoms/Textarea'
import { Avatar } from '../components/atoms/Avatar'
import { RadioGroup } from '../components/atoms/RadioGroup'
import { ProgressBar } from '../components/atoms/ProgressBar'

// Molecules
import { FormField } from '../components/molecules/FormField'
import { InputGroup } from '../components/molecules/InputGroup'
import { ActionPanel } from '../components/molecules/ActionPanel'
import { Alert, AlertDescription, AlertTitle } from '../components/molecules/Alert'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/molecules/Card'
import { StatsCard } from '../components/molecules/StatsCard'
import { EmptyState } from '../components/molecules/EmptyState'
import { Pagination } from '../components/molecules/Pagination'
import { Dropdown } from '../components/molecules/Dropdown'
import { Notification, NotificationContainer } from '../components/molecules/Notification'
import { ButtonGroup } from '../components/molecules/ButtonGroup'
import { MediaObject } from '../components/molecules/MediaObject'
import { ListContainer, ListItem } from '../components/molecules/ListContainer'

// Organisms
import { Modal, ModalContent, ModalFooter, ModalHeader } from '../components/organisms/Modal'
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter, TableCaption
} from '../components/organisms/Table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/organisms/Tabs'
import { VerticalNavigation } from '../components/organisms/VerticalNavigation'
import { Breadcrumbs } from '../components/organisms/Breadcrumbs'
import { Drawer } from '../components/organisms/Drawer'
import { Steps } from '../components/organisms/Steps'
import { DataTable } from '../components/organisms/DataTable'
import { DescriptionList, Feed } from '../components/organisms/DataDisplay'
import { Calendar } from '../components/organisms/Calendar'
import { SignInForm, RegistrationForm } from '../components/organisms/AuthForms'
import { ValidatedForm } from '../components/organisms/ValidatedForm'
import { Navbar } from '../components/organisms/Navbar'
import { MegaMenu } from '../components/organisms/MegaMenu'

// Layouts
import { Divider, Container } from '../components/layouts/LayoutElements'
import { SidebarLayout } from '../components/layouts/SidebarLayout'
import { StackedLayout } from '../components/layouts/StackedLayout'
import { MultiColumnLayout } from '../components/layouts/MultiColumnLayout'

// Sections
import { HeroSimple, HeroSplit } from '../components/sections/Hero'
import { FeatureGrid, FeatureThreeCol } from '../components/sections/Features'
import { CTASimple, CTASplit } from '../components/sections/CallToAction'
import { FAQSimple, FAQGrid } from '../components/sections/FAQ'
import { StatsSimple, StatsSplit } from '../components/sections/Stats'
import { LogoCloudSimple } from '../components/sections/LogoCloud'
import { FooterSimple, FooterLarge } from '../components/sections/Footer'
import { HeaderSimple, HeaderFlyout } from '../components/sections/Header'
import { Error404 } from '../components/sections/ErrorPages'

// Interactive
import { Autocomplete, CommandPalette } from '../components/interactive/SearchComponents'
import { DialogDemo, PopoverDemo, DropdownMenuDemo } from '../components/interactive/Overlays'
import { DisclosureDemo, TabsDemo, VerticalTabs } from '../components/interactive/DisclosureTabs'
import { SelectDemo, CopyButton } from '../components/interactive/FormElements'




export function ComponentGallery() {
    const [activeTab, setActiveTab] = useState('layout')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerSide, setDrawerSide] = useState<'left' | 'right' | 'top' | 'bottom'>('right')
    const [switchState, setSwitchState] = useState(false)

    // Shell Demo State
    const [activeShell, setActiveShell] = useState<'sidebar' | 'stacked' | 'multi' | null>(null)
    const [notifications, setNotifications] = useState<{ id: string, title: string, description?: string, type?: 'success' | 'error' | 'info' | 'warning' }[]>([])

    const addNotification = (title: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
        const id = Math.random().toString(36).substr(2, 9)
        setNotifications(prev => [...prev, { id, title, type, description: "System event logged at " + new Date().toLocaleTimeString() }])
    }
    const [kpiCarouselIndex, setKpiCarouselIndex] = useState(0)

    const kpiSlides = [
        { title: 'System Throughput', value: '45.2 GB/s', change: '+12%', trend: 'up' as const, color: 'blue' as const },
        { title: 'Concurrent Users', value: '12,403', change: '+5%', trend: 'up' as const, color: 'emerald' as const },
        { title: 'Error Rate', value: '0.04%', change: '-2%', trend: 'down' as const, color: 'rose' as const },
    ]

    const nextKpi = () => setKpiCarouselIndex(i => (i + 1) % kpiSlides.length)
    const prevKpi = () => setKpiCarouselIndex(i => (i - 1 + kpiSlides.length) % kpiSlides.length)

    if (activeShell === 'sidebar') {
        return (
            <SidebarLayout
                navigation={[
                    { label: 'Dashboard', href: '#', icon: LayoutIcon, active: true },
                    { label: 'Analytics', href: '#', icon: BarChart3 },
                    { label: 'Community', href: '#', icon: Users },
                    { label: 'Resources', href: '#', icon: Package },
                ]}
                user={{ name: 'Alice Johnson', role: 'Enterprise Admin' }}
            >
                <div className="space-y-8">
                    <header className="flex justify-between items-end">
                        <div className="text-left">
                            <Breadcrumbs items={[{ label: 'System', href: '#' }, { label: 'Sidebar Shell', active: true }]} />
                            <h2 className="mt-2 text-2xl font-black text-slate-900 uppercase tracking-tight">Sidebar Layout Preview</h2>
                        </div>
                        <Button variant="brand" onClick={() => setActiveShell(null)}>Exit Shell Preview</Button>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatsCard title="Nodes Online" value="1,043" change="+12" trend="up" icon={Globe} />
                        <StatsCard title="Memory Usage" value="89.4%" change="+4.2%" trend="down" icon={Activity} />
                        <StatsCard title="Active Jobs" value="234" icon={History} />
                    </div>
                </div>
            </SidebarLayout>
        )
    }

    if (activeShell === 'stacked') {
        return (
            <StackedLayout
                navigation={[
                    { label: 'Overview', href: '#', active: true },
                    { label: 'Inventory', href: '#' },
                    { label: 'Deployment', href: '#' },
                    { label: 'Audits', href: '#' },
                ]}
            >
                <div className="space-y-8 text-left">
                    <header className="flex justify-between items-center">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Stacked Layout View</h2>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Condensed top-nav architecture</p>
                        </div>
                        <Button variant="brand" onClick={() => setActiveShell(null)}>Exit Shell Preview</Button>
                    </header>
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome back, Alice</CardTitle>
                            <CardDescription>Your organization has 3 pending tasks for internal audits.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-48 flex items-center justify-center">
                            <EmptyState title="No Active Audits" description="You have completed all pending enterprise compliance tasks." icon={Inbox} />
                        </CardContent>
                    </Card>
                </div>
            </StackedLayout>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* STICKY HEADER */}
            <header className="fixed top-0 left-0 right-0 bg-[#0F172A] border-b border-white/5 z-40 px-8 py-4 flex justify-between items-center shadow-2xl">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">UB</div>
                    <div>
                        <h1 className="text-xl font-black text-white tracking-tight uppercase">NSUI</h1>
                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Component Documentation</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    <Tabs defaultValue="layout" onValueChange={setActiveTab}>
                        <TabsList className="bg-white/5 border-white/10 p-1">
                            <TabsTrigger value="layout" className="text-white/50 hover:text-white data-[state=active]:bg-blue-400 data-[state=active]:text-slate-900">Layout</TabsTrigger>
                            <TabsTrigger value="elements" className="text-white/50 hover:text-white data-[state=active]:bg-emerald-400 data-[state=active]:text-slate-900">Elements</TabsTrigger>
                            <TabsTrigger value="navigation" className="text-white/50 hover:text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white">Navigation</TabsTrigger>
                            <TabsTrigger value="overlays" className="text-white/50 hover:text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Overlays</TabsTrigger>
                            <TabsTrigger value="forms" className="text-white/50 hover:text-white data-[state=active]:bg-emerald-500 data-[state=active]:text-white">Forms</TabsTrigger>
                            <TabsTrigger value="tables" className="text-white/50 hover:text-white data-[state=active]:bg-amber-500 data-[state=active]:text-white">Tables</TabsTrigger>
                            <TabsTrigger value="display" className="text-white/50 hover:text-white data-[state=active]:bg-indigo-600 data-[state=active]:text-white">Display</TabsTrigger>
                            <TabsTrigger value="kpi" className="text-white/50 hover:text-white data-[state=active]:bg-rose-600 data-[state=active]:text-white">KPI</TabsTrigger>
                            <TabsTrigger value="application" className="text-white/50 hover:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white">App UI</TabsTrigger>
                            <TabsTrigger value="shells" className="text-white/50 hover:text-white data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Shells</TabsTrigger>
                            <TabsTrigger value="sections" className="text-white/50 hover:text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Sections</TabsTrigger>
                            <TabsTrigger value="interactive" className="text-white/50 hover:text-white data-[state=active]:bg-amber-500 data-[state=active]:text-white">Interactive</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </header>

            <main className="pt-32 pb-20 px-8">
                <Container>


                    {/* LAYOUT SECTION */}
                    {activeTab === 'layout' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">03. Layout & Structure</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Foundational components for site structure and content organization.</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Containers & Spacing */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.1 Containers & Constraints</h3>
                                    <div className="space-y-4">
                                        <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200">
                                            <Container className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm text-center">
                                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Centered Max-Width Container (1280px)</p>
                                            </Container>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Standardized horizontal constraints for content alignment.</p>
                                    </div>
                                </div>

                                {/* Dividers */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.2 Stylized Dividers</h3>
                                    <div className="space-y-2">
                                        <Divider />
                                        <Divider label="Section Break" />
                                        <Divider label="Continue" className="my-12" />
                                    </div>
                                </div>

                                {/* Media Objects */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.3 Media Objects</h3>
                                    <Card>
                                        <CardContent className="p-8 space-y-8">
                                            <MediaObject
                                                title="Production Cluster"
                                                description="Primary Kubernetes environment monitoring 14 nodes."
                                                icon={Zap}
                                                iconBackground="bg-amber-100"
                                            />
                                            <MediaObject
                                                title="Cloud Storage"
                                                description="Distributed S3-compatible object storage with 99.999% durability."
                                                icon={Cloud}
                                                iconBackground="bg-blue-100"
                                                align="center"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* List Containers */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.4 List Containers</h3>
                                    <ListContainer>
                                        <ListItem action={<Badge variant="success">Active</Badge>}>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">System Core v4.2</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Updated 4 hours ago</p>
                                        </ListItem>
                                        <ListItem onClick={() => { }} action={<ChevronRight size={16} className="text-slate-400" />}>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Billing Settings</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Manage enterprise subscriptions</p>
                                        </ListItem>
                                        <ListItem action={<Button variant="outline" size="sm">Manage</Button>}>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Security Audit</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Last scan: Oct 12, 2026</p>
                                        </ListItem>
                                    </ListContainer>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ELEMENTS SECTION */}
                    {activeTab === 'elements' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">04. UI Elements</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Foundational components for actions, identity, and feedback.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Buttons & Groups */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">Buttons & Actions</h3>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-sm">Action Basics</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="flex flex-wrap gap-2">
                                                <Button size="sm">Primary</Button>
                                                <Button variant="brand" size="sm">Brand</Button>
                                                <Button variant="outline" size="sm">Outline</Button>
                                                <Button variant="ghost" size="sm">Ghost</Button>
                                            </div>
                                            <div className="space-y-3">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Button Groups</p>
                                                <ButtonGroup>
                                                    <Button variant="outline" size="sm" icon={LayoutIcon}>View</Button>
                                                    <Button variant="outline" size="sm" icon={Edit2}>Edit</Button>
                                                    <Button variant="outline" size="sm" icon={Trash2} className="text-red-600">Delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Identity & Status */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">Identity & Badges</h3>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-sm">Avatars & Status</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <Avatar fallback="AJ" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" size="lg" />
                                                <Avatar fallback="BS" size="md" className="bg-blue-100 text-blue-600 border-blue-200" />
                                                <Avatar fallback="JD" size="sm" />
                                            </div>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <Badge variant="success">Active</Badge>
                                                <Badge variant="warning">In Review</Badge>
                                                <Badge variant="destructive">Critical</Badge>
                                                <Badge variant="default">Idle</Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Contextual Overlays */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">Contextual Menus</h3>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-sm">Dropdown Controls</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <Dropdown
                                                trigger={
                                                    <Button variant="outline" size="sm" icon={MoreHorizontal}>Manage Selection</Button>
                                                }
                                                items={[
                                                    { label: 'Bulk Edit', icon: Edit2 },
                                                    { label: 'Export Data', icon: Globe },
                                                    { label: 'Archive Record', icon: Package, divider: true },
                                                    { label: 'Delete Permanently', icon: Trash2, variant: 'destructive' },
                                                ]}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Feedback & Alerts */}
                                <div className="space-y-8 lg:col-span-2">
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">Alerts & System Feedback</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <Alert variant="default">
                                                <AlertTitle>System Maintenance</AlertTitle>
                                                <AlertDescription>We are upgrading our edge clusters tonight at 02:00 GMT.</AlertDescription>
                                            </Alert>
                                            <Alert variant="warning">
                                                <AlertTitle>Expiring Token</AlertTitle>
                                                <AlertDescription>Your API access token will expire in less than 24 hours.</AlertDescription>
                                            </Alert>
                                        </div>
                                        <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                                            <EmptyState
                                                title="No Documentation Found"
                                                description="Search returned no matching components. Adjust your filters and try again."
                                                icon={Inbox}
                                                actionLabel="Clear Filters"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* NAVIGATION SECTION */}
                    {activeTab === 'navigation' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">05. Navigation</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Wayfinding and progress indicators for complex interfaces.</p>
                            </div>

                            {/* Global Header & MegaMenu */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">04.1 Global & Contextual Overlays</h3>
                                <div className="flex items-center gap-6 p-6 bg-slate-900 rounded-[32px] shadow-2xl relative min-h-[80px]">
                                    <MegaMenu
                                        trigger={
                                            <div className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors">
                                                Solutions <ChevronDown className="w-3 h-3" />
                                            </div>
                                        }
                                        categories={[
                                            {
                                                title: 'Infrastructure',
                                                items: [
                                                    { label: 'Cloud Compute', description: 'Elastic scaling for enterprise.', href: '#', icon: Cloud },
                                                    { label: 'Security Grids', description: 'Zero-trust architecture.', href: '#', icon: Shield },
                                                    { label: 'Edge Nodes', description: 'Ultra-low latency delivery.', href: '#', icon: Zap },
                                                ]
                                            },
                                            {
                                                title: 'Development',
                                                items: [
                                                    { label: 'API Management', description: 'Universal gateway control.', href: '#', icon: Terminal },
                                                    { label: 'CI/CD Pipelines', description: 'Automated delivery flows.', href: '#', icon: Activity },
                                                    { label: 'Version Control', description: 'Distributed team sync.', href: '#', icon: History },
                                                ]
                                            }
                                        ]}
                                        footer={{ label: 'View all enterprise solutions', href: '#' }}
                                    />
                                    <div className="h-4 w-px bg-white/10" />
                                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 uppercase tracking-widest text-[10px] font-black">
                                        Account <MoreHorizontal className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                                <Navbar
                                    items={[
                                        { label: 'Dashboard', href: '#', active: true },
                                        { label: 'Analytics', href: '#' },
                                        { label: 'Infrastructure', href: '#' },
                                        { label: 'Settings', href: '#' },
                                    ]}
                                    className="rounded-[32px] overflow-hidden shadow-xl"
                                />
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                                {/* Structural Navigation */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.2 Structured Menus</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Card className="h-full">
                                            <CardHeader>
                                                <CardTitle className="text-sm">Vertical Navigation</CardTitle>
                                            </CardHeader>
                                            <CardContent className="px-2 pb-6">
                                                <VerticalNavigation items={[
                                                    { label: 'Overview', href: '#', icon: LayoutIcon, active: true },
                                                    { label: 'Resources', href: '#', icon: Package, badge: '4' },
                                                    { label: 'Team', href: '#', icon: Users },
                                                    { label: 'History', href: '#', icon: History },
                                                ]} />
                                            </CardContent>
                                        </Card>
                                        <div className="space-y-6">
                                            <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Breadcrumbs</p>
                                                <Breadcrumbs items={[
                                                    { label: 'Cloud', href: '#' },
                                                    { label: 'Clusters', href: '#' },
                                                    { label: 'US-EAST-1', active: true },
                                                ]} />
                                            </div>
                                            <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Tabs Interface</p>
                                                <Tabs defaultValue="overview">
                                                    <TabsList className="w-full bg-slate-50 border-slate-100 p-1">
                                                        <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                                                        <TabsTrigger value="metrics" className="flex-1">Metrics</TabsTrigger>
                                                        <TabsTrigger value="logs" className="flex-1">Logs</TabsTrigger>
                                                    </TabsList>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress & Pagination */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.3 Progress & Pagination</h3>
                                    <div className="space-y-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-sm">Progress Indicators</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <ProgressBar value={75} showValue variant="blue" />
                                                <ProgressBar value={40} showValue variant="emerald" size="sm" />
                                                <ProgressBar value={90} variant="rose" size="lg" />
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-sm">Steppers</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Steps steps={[
                                                    { id: '01', name: 'Identity', status: 'complete' },
                                                    { id: '02', name: 'Subscription', status: 'current' },
                                                    { id: '03', name: 'Review', status: 'upcoming' },
                                                ]} />
                                            </CardContent>
                                        </Card>
                                        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Pagination Controls</p>
                                            <Pagination currentPage={3} totalPages={8} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* LAYOUT SECTION */}
                    {activeTab === 'layout' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">03. Layout & Structure</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Foundational components for site structure and content organization.</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Containers & Spacing */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.1 Containers & Constraints</h3>
                                    <div className="space-y-4">
                                        <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200">
                                            <Container className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm text-center">
                                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Centered Max-Width Container (1280px)</p>
                                            </Container>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Standardized horizontal constraints for content alignment.</p>
                                    </div>
                                </div>

                                {/* Dividers */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.2 Stylized Dividers</h3>
                                    <div className="space-y-2">
                                        <Divider />
                                        <Divider label="Section Break" />
                                        <Divider label="Continue" className="my-12" />
                                    </div>
                                </div>

                                {/* Media Objects */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.3 Media Objects</h3>
                                    <Card>
                                        <CardContent className="p-8 space-y-8">
                                            <MediaObject
                                                title="Production Cluster"
                                                description="Primary Kubernetes environment monitoring 14 nodes."
                                                icon={Zap}
                                                iconBackground="bg-amber-100"
                                            />
                                            <MediaObject
                                                title="Cloud Storage"
                                                description="Distributed S3-compatible object storage with 99.999% durability."
                                                icon={Cloud}
                                                iconBackground="bg-blue-100"
                                                align="center"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* List Containers */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">03.4 List Containers</h3>
                                    <ListContainer>
                                        <ListItem action={<Badge variant="success">Active</Badge>}>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">System Core v4.2</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Updated 4 hours ago</p>
                                        </ListItem>
                                        <ListItem onClick={() => { }} action={<ChevronRight size={16} className="text-slate-400" />}>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Billing Settings</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Manage enterprise subscriptions</p>
                                        </ListItem>
                                        <ListItem action={<Button variant="outline" size="sm">Manage</Button>}>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Security Audit</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Last scan: Oct 12, 2026</p>
                                        </ListItem>
                                    </ListContainer>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* OVERLAYS SECTION */}
                    {activeTab === 'overlays' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">05. Overlays & Feedback</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Contextual layers for focus, configuration, and alerting.</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Modals & Dialogs */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-purple-600 tracking-[0.2em] border-l-4 border-purple-600 pl-4">05.1 Modal Dialogs</h3>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Standard Modals</CardTitle>
                                            <CardDescription>Interruption-style dialogs for critical actions.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex flex-wrap gap-4">
                                            <Button variant="brand" onClick={() => setIsModalOpen(true)}>Launch System Modal</Button>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Drawers / Slide-overs */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-purple-600 tracking-[0.2em] border-l-4 border-purple-600 pl-4">05.2 Slide-over Drawers</h3>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Directional Drawers</CardTitle>
                                            <CardDescription>Contextual panels sliding from any screen edge.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex flex-wrap gap-3">
                                            <Button variant="outline" size="sm" onClick={() => { setDrawerSide('left'); setIsDrawerOpen(true); }}>Left Drawer</Button>
                                            <Button variant="outline" size="sm" onClick={() => { setDrawerSide('right'); setIsDrawerOpen(true); }}>Right Drawer</Button>
                                            <Button variant="outline" size="sm" onClick={() => { setDrawerSide('top'); setIsDrawerOpen(true); }}>Top Drawer</Button>
                                            <Button variant="outline" size="sm" onClick={() => { setDrawerSide('bottom'); setIsDrawerOpen(true); }}>Bottom Drawer</Button>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Notifications */}
                                <div className="space-y-8 lg:col-span-2">
                                    <h3 className="text-sm font-black uppercase text-purple-600 tracking-[0.2em] border-l-4 border-purple-600 pl-4">05.3 Transient Notifications</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <Button variant="outline" className="h-24 flex-col gap-2 border-emerald-100 hover:bg-emerald-50 text-emerald-600" onClick={() => addNotification('Operation Successful', 'success')}>
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span className="text-[10px] uppercase font-black tracking-widest">Success Toast</span>
                                        </Button>
                                        <Button variant="outline" className="h-24 flex-col gap-2 border-rose-100 hover:bg-rose-50 text-rose-600" onClick={() => addNotification('Access Denied', 'error')}>
                                            <AlertCircle className="w-5 h-5" />
                                            <span className="text-[10px] uppercase font-black tracking-widest">Error Toast</span>
                                        </Button>
                                        <Button variant="outline" className="h-24 flex-col gap-2 border-blue-100 hover:bg-blue-50 text-blue-600" onClick={() => addNotification('New System Update', 'info')}>
                                            <Info className="w-5 h-5" />
                                            <span className="text-[10px] uppercase font-black tracking-widest">Info Toast</span>
                                        </Button>
                                        <Button variant="outline" className="h-24 flex-col gap-2 border-amber-100 hover:bg-amber-50 text-amber-600" onClick={() => addNotification('Low Disk Space', 'warning')}>
                                            <AlertTriangle className="w-5 h-5" />
                                            <span className="text-[10px] uppercase font-black tracking-widest">Warning Toast</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FORMS SECTION */}
                    {activeTab === 'forms' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">06. Forms & Authentication</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Complete form ecosystem from atoms to auth templates.</p>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                                {/* Basic Controls */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">06.1 Input & Control Atoms</h3>
                                    <Card>
                                        <CardContent className="p-8 space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label>Default Input</Label>
                                                    <Input placeholder="Standard field" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Select Menu</Label>
                                                    <Select>
                                                        <option>Standard Option</option>
                                                        <option>Pro Plan</option>
                                                        <option>Enterprise</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="flex gap-12 p-6 bg-slate-50 rounded-[32px] border border-slate-100">
                                                <div className="flex items-center gap-3">
                                                    <Switch checked={switchState} onCheckedChange={setSwitchState} />
                                                    <Label className="mb-0">Toggle State</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Checkbox />
                                                    <Label className="mb-0">Option Check</Label>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Text Area</Label>
                                                <Textarea placeholder="Detailed description..." rows={3} />
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Moved from Atoms/Molecules */}
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">06.0 Form Primitives</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Input primitives</CardTitle>
                                                <CardDescription>Standardized fields and selects.</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <Input placeholder="Standard Input" />
                                                <Select>
                                                    <option>Dropdown Option</option>
                                                </Select>
                                                <Textarea placeholder="Textarea field..." rows={2} />
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Form Molecules</CardTitle>
                                                <CardDescription>FormField grouping with labels and validation.</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <FormField id="sm1" label="Organization Name" placeholder="Happometer Inc." />
                                                <FormField id="sm2" label="Recovery Email" error="Please enter a valid email address" defaultValue="invalid-email" />
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">06.2 Selection Groups</h3>
                                    <RadioGroup
                                        name="plan-selection"
                                        defaultValue="standard"
                                        options={[
                                            { id: 'opt1', value: 'standard', label: 'Standard License', description: 'Up to 5 nodes. Shared support.' },
                                            { id: 'opt2', value: 'pro', label: 'Professional Plan', description: 'Unlimited nodes. Priority email support.' },
                                            { id: 'opt3', value: 'enterprise', label: 'Enterprise Tier', description: 'Custom terms. Dedicated success manager.', disabled: true },
                                        ]}
                                    />
                                </div>

                                {/* Advanced Form Patterns */}
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">06.3 Input Groups (Addons)</h3>
                                    <div className="space-y-4">
                                        <InputGroup placeholder="Search inventory..." prefixIcon={Package} />
                                        <InputGroup placeholder="your-domain" suffixElement={<span className="text-[10px] font-black uppercase tracking-widest text-slate-400">.happometer.io</span>} />
                                        <InputGroup type="password" placeholder="API Secret" prefixIcon={Lock} suffixIcon={Eye} />
                                        <InputGroup placeholder="Discount Code" suffixElement={<Button variant="brand" size="sm" className="h-8 rounded-xl px-4">Apply</Button>} />
                                    </div>

                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">06.4 Action Panels</h3>
                                    <ActionPanel
                                        title="Danger Zone"
                                        description="Irreversible actions for your enterprise organization."
                                        footer={<div className="flex justify-end gap-3"><Button variant="outline" size="sm">Deactivate</Button><Button variant="brand" size="sm" className="bg-red-600 hover:bg-red-700 shadow-red-600/20">Delete Org</Button></div>}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-black text-slate-900 uppercase text-xs tracking-tight">Delete this repository</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Once deleted, it cannot be recovered.</p>
                                            </div>
                                        </div>
                                    </ActionPanel>
                                </div>
                                <div className="grid grid-cols-1 gap-16">
                                    <h3 className="text-sm font-black uppercase text-emerald-600 tracking-[0.2em] border-l-4 border-emerald-600 pl-4">06.5 Authentication Full-Page Templates</h3>
                                    <div className="space-y-6">
                                        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Sign-In Pattern</p>
                                        <SignInForm className="border-2 border-slate-200" />
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Multi-Column Registration Pattern</p>
                                        <RegistrationForm className="border-2 border-slate-200" />
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Field Validation Pattern</p>
                                        <ValidatedForm className="border-2 border-slate-200" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TABLES SECTION */}
                    {activeTab === 'tables' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">07. Table Ecosystem</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Comprehensive list of 20+ utility-first table styles.</p>
                            </div>

                            {/* DYNAMIC DATA TABLE */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4">07.0 Dynamic Data Table</h3>
                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interactive Filtration, Column Swapping & Transposition</p>
                                    <DataTable
                                        columns={[
                                            { key: 'id', label: 'Node ID' },
                                            { key: 'region', label: 'Region' },
                                            { key: 'load', label: 'Peak Load' },
                                            { key: 'uptime', label: 'Uptime' },
                                            { key: 'status', label: 'Status' }
                                        ]}
                                        data={[
                                            { id: 'US-EAST-01', region: 'Virginia', load: '45%', uptime: '99.99%', status: 'Stable' },
                                            { id: 'EU-WEST-04', region: 'Ireland', load: '82%', uptime: '98.50%', status: 'Degraded' },
                                            { id: 'ASIA-NORTHEAST-02', region: 'Tokyo', load: '12%', uptime: '100%', status: 'Stable' },
                                            { id: 'SA-EAST-01', region: 'São Paulo', load: '31%', uptime: '99.90%', status: 'Stable' },
                                        ]}
                                    />
                                </div>
                            </div>

                            {/* BASIC LAYOUTS */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4">07.1 Basic Layouts</h3>
                                <div className="grid grid-cols-1 gap-12">
                                    {/* Simple Table */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Simple Table</p>
                                        <Table>
                                            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Title</TableHead><TableHead>Status</TableHead><TableHead>Role</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow><TableCell className="font-bold">Lindsay Walton</TableCell><TableCell>Front-end Developer</TableCell><TableCell>Active</TableCell><TableCell>Member</TableCell></TableRow>
                                                <TableRow><TableCell className="font-bold">Courtney Henry</TableCell><TableCell>Designer</TableCell><TableCell>Active</TableCell><TableCell>Admin</TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    {/* Striped Rows */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Striped Rows (Zebra)</p>
                                        <Table striped>
                                            <TableHeader><TableRow><TableHead>Transaction</TableHead><TableHead>Amount</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow><TableCell>Payment to Azure</TableCell><TableCell>-$150.00</TableCell><TableCell>Oct 12, 2026</TableCell></TableRow>
                                                <TableRow><TableCell>Refund from AWS</TableCell><TableCell>+$45.00</TableCell><TableCell>Oct 13, 2026</TableCell></TableRow>
                                                <TableRow><TableCell>Invoice #4521</TableCell><TableCell>-$1,200.00</TableCell><TableCell>Oct 14, 2026</TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    {/* Borderless Table */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Borderless Table</p>
                                        <Table borderless className="bg-transparent border-0 shadow-none">
                                            <TableHeader className="bg-transparent border-0"><TableRow className="border-0"><TableHead className="px-0">Key</TableHead><TableHead className="px-0">Value</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow className="border-0"><TableCell className="px-0 font-bold text-slate-400">Environment</TableCell><TableCell className="px-0">Production</TableCell></TableRow>
                                                <TableRow className="border-0"><TableCell className="px-0 font-bold text-slate-400">Node Cluster</TableCell><TableCell className="px-0">US-EAST-1</TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>

                            {/* FUNCTIONAL & INTERACTIVE */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4">07.2 Functional & Interactive</h3>
                                <div className="grid grid-cols-1 gap-12">
                                    {/* Sticky Header */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">With Sticky Header & Checkboxes</p>
                                        <div className="h-48 overflow-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
                                            <Table fullWidth={false} borderless className="shadow-none rounded-none">
                                                <TableHeader sticky>
                                                    <TableRow>
                                                        <TableHead className="w-12"><Checkbox /></TableHead>
                                                        <TableHead>System Node</TableHead>
                                                        <TableHead>Latency</TableHead>
                                                        <TableHead>Uptime</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                                        <TableRow key={i}>
                                                            <TableCell><Checkbox /></TableCell>
                                                            <TableCell className="font-black">NODE-{i * 100}</TableCell>
                                                            <TableCell className="text-emerald-500 font-mono">{10 + i}ms</TableCell>
                                                            <TableCell className="text-slate-500 uppercase text-[10px] font-bold">99.99%</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>

                                    {/* Sortable & Action Links */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Sortable Headers & Action Links</p>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="cursor-pointer hover:bg-slate-100/50">
                                                        <div className="flex items-center">Name <ChevronUp size={12} className="ml-1" /></div>
                                                    </TableHead>
                                                    <TableHead className="cursor-pointer hover:bg-slate-100/50">
                                                        <div className="flex items-center">Updated <ChevronDown size={12} className="ml-1" /></div>
                                                    </TableHead>
                                                    <TableHead className="text-right">Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-bold">Quarterly Report.pdf</TableCell>
                                                    <TableCell className="text-slate-500">2h ago</TableCell>
                                                    <TableCell className="text-right flex justify-end gap-2">
                                                        <Button size="icon" variant="ghost" className="w-8 h-8"><Eye size={14} /></Button>
                                                        <Button size="icon" variant="ghost" className="w-8 h-8"><Edit2 size={14} /></Button>
                                                        <Button size="icon" variant="ghost" className="w-8 h-8 text-red-500"><Trash2 size={14} /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableFooter>
                                                <TableRow>
                                                    <TableCell className="font-black text-[10px] uppercase">Summary</TableCell>
                                                    <TableCell colSpan={2} className="text-right font-black text-[10px] uppercase text-slate-400">Showing 1 of 1 records</TableCell>
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT-RICH STYLES */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4">07.3 Content-Rich Styles</h3>
                                <div className="grid grid-cols-1 gap-12">
                                    {/* Avatars & Multi-line */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Avatars, Multi-line & Badges</p>
                                        <Table>
                                            <TableHeader><TableRow><TableHead>Member</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Performance</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="flex items-center gap-3">
                                                            <Avatar fallback="LH" size="sm" />
                                                            <div>
                                                                <p className="font-black text-slate-900 leading-none">Leon Hunt</p>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">leon@example.com</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-[10px] font-black uppercase text-slate-500">Product Manager</TableCell>
                                                    <TableCell><Badge variant="success">Active</Badge></TableCell>
                                                    <TableCell>
                                                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                            <div className="bg-emerald-500 h-full w-[85%]" />
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="flex items-center gap-3">
                                                            <Avatar fallback="KM" size="sm" variant="outline" />
                                                            <div>
                                                                <p className="font-black text-slate-900 leading-none">Kelly Moon</p>
                                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">kelly@example.com</p>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-[10px] font-black uppercase text-slate-500">Tech Lead</TableCell>
                                                    <TableCell><Badge variant="warning">On Leave</Badge></TableCell>
                                                    <TableCell>
                                                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                            <div className="bg-amber-500 h-full w-[45%]" />
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    {/* Icons & Category Grouping */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Iconography & Row Grouping</p>
                                        <Table>
                                            <TableHeader><TableRow><TableHead>Resource</TableHead><TableHead>Type</TableHead><TableHead>Size</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                {/* Group Header */}
                                                <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                                                    <TableCell colSpan={3} className="py-2"><span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">Assets / Images</span></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><div className="flex items-center gap-2"><ImageIcon size={14} className="text-slate-400" /> profile_v1.png</div></TableCell>
                                                    <TableCell>PNG Image</TableCell>
                                                    <TableCell>2.4 MB</TableCell>
                                                </TableRow>
                                                <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                                                    <TableCell colSpan={3} className="py-2"><span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">Assets / Videos</span></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><div className="flex items-center gap-2"><Video size={14} className="text-slate-400" /> demo_intro.mp4</div></TableCell>
                                                    <TableCell>MP4 Video</TableCell>
                                                    <TableCell>145 MB</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>

                            {/* ADVANCED ORGANIZATIONAL */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4">07.4 Specialized Views</h3>
                                <div className="grid grid-cols-1 gap-12">
                                    {/* Responsive Stacked */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Stacked on Mobile (Responsive Demo)</p>
                                        <div className="block md:hidden space-y-4">
                                            {[1, 2].map(i => (
                                                <Card key={i} className="p-4 space-y-3">
                                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                                        <span className="font-black text-[10px] uppercase text-slate-400">Order ID</span>
                                                        <span className="font-bold text-slate-900">#ORD-672{i}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                                        <span className="font-black text-[10px] uppercase text-slate-400">Customer</span>
                                                        <span className="font-bold text-slate-900">John Doe</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-black text-[10px] uppercase text-slate-400">Status</span>
                                                        <Badge variant="success">Delivered</Badge>
                                                    </div>
                                                </Card>
                                            ))}
                                            <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-widest italic pt-2">Rows transform to cards on small screens</p>
                                        </div>
                                        <div className="hidden md:block bg-slate-50 p-12 rounded-[32px] border-2 border-dashed border-slate-200 text-center">
                                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Resize viewport to mobile to see stacked view</p>
                                        </div>
                                    </div>

                                    {/* Condensed & Full-width */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Condensed Table (High density)</p>
                                        <Table condensed>
                                            <TableHeader><TableRow><TableHead>Task</TableHead><TableHead>Priority</TableHead><TableHead>Assignee</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow><TableCell>Bug fix #102</TableCell><TableCell><Badge variant="destructive" className="scale-75 origin-left">High</Badge></TableCell><TableCell>Al</TableCell></TableRow>
                                                <TableRow><TableCell>Update docs</TableCell><TableCell><Badge className="scale-75 origin-left">Low</Badge></TableCell><TableCell>Bob</TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    {/* Horizontal Scroll & Hidden Columns */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Horizontal Scroll & Hidden Columns</p>
                                        <div className="overflow-x-auto">
                                            <Table className="min-w-[800px]">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>System Name</TableHead>
                                                        <TableHead>CPU Usage</TableHead>
                                                        <TableHead className="hidden lg:table-cell">Memory (Detailed)</TableHead>
                                                        <TableHead className="hidden xl:table-cell">Swap Usage</TableHead>
                                                        <TableHead>Status</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-black">CORE-SERVER-01</TableCell>
                                                        <TableCell>12%</TableCell>
                                                        <TableCell className="hidden lg:table-cell text-slate-500">12.4GB / 32GB (38%)</TableCell>
                                                        <TableCell className="hidden xl:table-cell text-slate-500">2GB / 8GB</TableCell>
                                                        <TableCell><div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-500 rounded-full" /> Healthy</div></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                        <TableCaption>Columns for Memory and Swap are hidden on small/medium viewports respectively.</TableCaption>
                                    </div>

                                    {/* Secondary Column View */}
                                    <div className="space-y-4">
                                        <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest">Secondary Column View (Split-screen optimized)</p>
                                        <div className="max-w-md">
                                            <Table condensed borderless className="bg-slate-50/50 shadow-none border-0">
                                                <TableBody>
                                                    <TableRow className="bg-transparent">
                                                        <TableCell className="font-bold text-slate-400 text-[10px] uppercase">Plan</TableCell>
                                                        <TableCell className="text-right font-black">Enterprise Pro</TableCell>
                                                    </TableRow>
                                                    <TableRow className="bg-transparent">
                                                        <TableCell className="font-bold text-slate-400 text-[10px] uppercase">Renewal</TableCell>
                                                        <TableCell className="text-right font-black text-blue-600">Jan 12, 2027</TableCell>
                                                    </TableRow>
                                                    <TableRow className="bg-transparent">
                                                        <TableCell className="font-bold text-slate-400 text-[10px] uppercase">Usage</TableCell>
                                                        <TableCell className="text-right font-black">89% Cap</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* SYSTEM EVENTS - MOVED FROM ORGANISMS */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4">07.5 Data Logs</h3>
                                <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden text-left">
                                    <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
                                        <div>
                                            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">System Events</h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Journal of current production activities</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline" onClick={() => setIsDrawerOpen(true)}>Configure</Button>
                                            <Button size="sm" variant="brand" icon={Plus}>Add Event</Button>
                                        </div>
                                    </div>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Event Type</TableHead>
                                                <TableHead>Timestamp</TableHead>
                                                <TableHead>Outcome</TableHead>
                                                <TableHead className="text-right">Latency</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {[
                                                { type: 'AUTH_SUCCESS', time: '12:45:01', status: 'Success', val: '12ms' },
                                                { type: 'DB_QUERY_INIT', time: '12:45:05', status: 'Pending', val: '45ms' },
                                                { type: 'API_GATEWAY_ERR', time: '12:46:12', status: 'Failure', val: '2ms' },
                                            ].map((row) => (
                                                <TableRow key={row.type}>
                                                    <TableCell className="font-black text-slate-900">{row.type}</TableCell>
                                                    <TableCell className="text-slate-500 font-bold uppercase tracking-tight text-[10px]">{row.time}</TableCell>
                                                    <TableCell>
                                                        <Badge variant={row.status === 'Success' ? 'success' : row.status === 'Failure' ? 'destructive' : 'warning'}>
                                                            {row.status}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-right font-mono text-sm text-slate-600">{row.val}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* DISPLAY SECTION */}
                    {activeTab === 'display' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">08. Data Display</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Information-rich components for data visualization.</p>
                            </div>

                            <div className="space-y-12">
                                {/* Calendar Section - Full Width */}
                                <div className="space-y-6">
                                    <h3 className="text-sm font-black uppercase text-indigo-600 tracking-[0.2em] border-l-4 border-indigo-600 pl-4">08.1 Calendar Systems</h3>
                                    <Calendar
                                        events={[
                                            { id: 1, title: 'Release v1.0', time: '10:00 AM', datetime: '2026-01-15T10:00' },
                                            { id: 2, title: 'Stakeholder Review', time: '1:00 PM', datetime: '2026-01-15T13:00' }
                                        ]}
                                    />
                                </div>

                                {/* Feed & Description List - 2 Column Grid */}
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-sm font-black uppercase text-indigo-600 tracking-[0.2em] border-l-4 border-indigo-600 pl-4">08.2 Activity Feeds</h3>
                                        <Card>
                                            <CardContent className="pt-8">
                                                <Feed items={[
                                                    { id: 1, content: 'Alice Johnson created', target: 'Project Phoenix', date: '2h ago', datetime: '2026-01-15T10:00', icon: Plus, iconBackground: 'bg-emerald-100' },
                                                    { id: 2, content: 'Deployment successful on', target: 'Production', date: '4h ago', datetime: '2026-01-15T08:00', icon: Activity, iconBackground: 'bg-blue-100' },
                                                    { id: 3, content: 'System alert triggered in', target: 'Region US-EAST', date: '6h ago', datetime: '2026-01-15T06:00', icon: AlertCircle, iconBackground: 'bg-red-100' },
                                                ]} />
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-sm font-black uppercase text-indigo-600 tracking-[0.2em] border-l-4 border-indigo-600 pl-4">08.3 Description Lists</h3>
                                        <Card>
                                            <CardContent className="pt-8">
                                                <DescriptionList items={[
                                                    { label: 'Application ID', value: 'APP-92384-LX' },
                                                    { label: 'Owner', value: 'Enterprise Engineering' },
                                                    { label: 'Status', value: <Badge variant="success">Optimized</Badge> },
                                                ]} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                    {/* KPI SECTION */}
                    {activeTab === 'kpi' && (
                        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">09. Key Performance Indicators</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">High-impact summary data and metric visualizations.</p>
                            </div>

                            {/* KPI Carousel */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-black uppercase text-rose-600 tracking-[0.2em] border-l-4 border-rose-600 pl-4">09.1 KPI Carousel</h3>
                                <div className="relative group max-w-xl mx-auto">
                                    <div className="overflow-hidden rounded-[32px]">
                                        <div className="transition-transform duration-500 ease-out flex" style={{ transform: `translateX(-${kpiCarouselIndex * 100}%)` }}>
                                            {kpiSlides.map((slide, idx) => (
                                                <div key={idx} className="w-full flex-none">
                                                    <StatsCard
                                                        title={slide.title}
                                                        value={slide.value}
                                                        change={slide.change}
                                                        trend={slide.trend}
                                                        variant="brand"
                                                        color={slide.color}
                                                        icon={BarChart3}
                                                        className="h-full border-0 rounded-none p-12"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900"
                                        onClick={prevKpi}
                                    >
                                        <ChevronLeft size={20} />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900"
                                        onClick={nextKpi}
                                    >
                                        <ChevronRight size={20} />
                                    </Button>
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
                                        {kpiSlides.map((_, idx) => (
                                            <div key={idx} className={cn(
                                                "h-1 rounded-full transition-all",
                                                kpiCarouselIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/30"
                                            )} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stats from Molecules */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <StatsCard title="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" icon={BarChart3} />
                                <StatsCard title="Active Subscriptions" value="1,200" change="-4.5%" trend="down" icon={Users} />
                                <StatsCard title="Conversion Rate" value="12.3%" change="+1.2%" trend="up" icon={Activity} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="space-y-6">
                                    <h3 className="text-sm font-black uppercase text-rose-600 tracking-[0.2em] border-l-4 border-rose-600 pl-4">09.2 Flat Colors</h3>
                                    <StatsCard title="Revenue" value="$42.5k" variant="flat" color="blue" icon={Activity} />
                                    <StatsCard title="Growth" value="+18%" variant="flat" color="emerald" trend="up" change="4.2%" />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-sm font-black uppercase text-rose-600 tracking-[0.2em] border-l-4 border-rose-600 pl-4">09.3 Outline Styles</h3>
                                    <StatsCard title="Nodes" value="1,042" variant="outline" color="indigo" icon={Globe} />
                                    <StatsCard title="Alerts" value="0" variant="outline" color="slate" icon={Inbox} />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-sm font-black uppercase text-rose-600 tracking-[0.2em] border-l-4 border-rose-600 pl-4">09.4 Brand Dark</h3>
                                    <StatsCard title="Security Score" value="A+" variant="brand" icon={CheckCircle2} />
                                    <StatsCard title="Compliance" value="100%" variant="brand" color="emerald" />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-sm font-black uppercase text-rose-600 tracking-[0.2em] border-l-4 border-rose-600 pl-4">09.5 Vibrant</h3>
                                    <StatsCard title="Danger Zone" value="EXPOSED" variant="flat" color="rose" icon={AlertCircle} trend="down" change="CRITICAL" />
                                    <StatsCard title="New Orders" value="234" variant="flat" color="amber" icon={Package} trend="up" change="+12" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* APPLICATION SECTION */}
                    {activeTab === 'application' && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="border-b border-slate-200 pb-4 text-left">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">11. Application UI</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Composite layouts and dashboard specific tools.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <EmptyState
                                    title="No notifications"
                                    description="You are all caught up. New updates will appear here when they are available."
                                    icon={Inbox}
                                    actionLabel="Refresh View"
                                />
                                <Card>
                                    <CardHeader>
                                        <CardTitle>System Status</CardTitle>
                                        <CardDescription>Real-time cluster health overview</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                                            <div>
                                                <p className="text-xs font-black text-emerald-900 uppercase">Primary Cluster</p>
                                                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5">Optimal Performance</p>
                                            </div>
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        </div>
                                        <Alert variant="default">
                                            <AlertTitle>Network Check</AlertTitle>
                                            <AlertDescription>All edge nodes are responding within 20ms.</AlertDescription>
                                        </Alert>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}

                    {/* SHELLS SECTION */}
                    {activeTab === 'shells' && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                            <div className="border-b border-slate-200 pb-4">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">12. Application Shells</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">High-level structural frameworks for entire applications.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <Card className="hover:border-emerald-500 transition-colors group cursor-pointer" onClick={() => setActiveShell('sidebar')}>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-emerald-600">Sidebar Shell</CardTitle>
                                        <CardDescription>Collapsible left-nav architecture</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center">
                                            <Button variant="outline" size="sm">Launch Preview</Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="hover:border-emerald-500 transition-colors group cursor-pointer" onClick={() => setActiveShell('stacked')}>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-emerald-600">Stacked Shell</CardTitle>
                                        <CardDescription>Top-navigation centered architecture</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center">
                                            <Button variant="outline" size="sm">Launch Preview</Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Multi-Column</CardTitle>
                                        <CardDescription>Flexible 3-column content grid</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="aspect-video bg-slate-100 rounded-2xl p-4 flex gap-2">
                                            <div className="w-1/4 h-full bg-slate-200 rounded-lg animate-pulse" />
                                            <div className="w-1/2 h-full bg-slate-200 rounded-lg animate-pulse" />
                                            <div className="w-1/4 h-full bg-slate-200 rounded-lg animate-pulse" />
                                        </div>
                                        <p className="mt-4 text-[10px] font-black uppercase text-slate-400 text-center tracking-widest">Structural Utility</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}
                    {/* SECTIONS TAB */}
                    {activeTab === 'sections' && (
                        <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="border-b border-slate-200 pb-4 text-left">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">00. Page Sections</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">High-level page components for marketing websites.</p>
                            </div>

                            {/* Hero Sections */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">Hero Sections</h3>
                                <div className="space-y-12">
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <HeroSimple />
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <HeroSplit />
                                    </div>
                                </div>
                            </div>

                            {/* Feature Sections */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">Feature Sections</h3>
                                <div className="space-y-12">
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <FeatureGrid />
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <FeatureThreeCol />
                                    </div>
                                </div>
                            </div>


                            {/* CTA Sections */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">CTA Sections</h3>
                                <div className="space-y-12">
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <CTASimple />
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <CTASplit />
                                    </div>
                                </div>
                            </div>

                            {/* Stats Sections */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">Stats Sections</h3>
                                <div className="space-y-12">
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <StatsSimple />
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <StatsSplit />
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Sections */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">FAQ Sections</h3>
                                <div className="space-y-12">
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <FAQSimple />
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <FAQGrid />
                                    </div>
                                </div>
                            </div>

                            {/* Logo Cloud Sections */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">Logo Clouds</h3>
                                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <LogoCloudSimple />
                                </div>
                            </div>

                            {/* STRUCTURAL ELEMENTS */}
                            <div className="border-b border-slate-200 pb-4 text-left mt-12">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">00.2 Structural Elements</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Headers, Footers, and Error Pages.</p>
                            </div>

                            {/* Headers */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">Headers</h3>
                                <div className="space-y-12">
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-gray-100">
                                        <HeaderSimple />
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-gray-100 h-96">
                                        <HeaderFlyout />
                                        <div className="p-10 text-center text-slate-400 text-sm">Scroll or interact to see flyout behavior</div>
                                    </div>
                                </div>
                            </div>

                            {/* Footers */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">Footers</h3>
                                <div className="space-y-12">
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <FooterSimple />
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                        <FooterLarge />
                                    </div>
                                </div>
                            </div>

                            {/* Error Pages */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-blue-600 tracking-[0.2em] border-l-4 border-blue-600 pl-4 text-left">Error Pages</h3>
                                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <Error404 />
                                </div>
                            </div>
                        </div>
                    )}
                    {/* INTERACTIVE TAB */}
                    {activeTab === 'interactive' && (
                        <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="border-b border-slate-200 pb-4 text-left">
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">00.3 Interactive Elements</h2>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Headless UI components with JavaScript behavior.</p>
                            </div>

                            {/* Search Components */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4 text-left">Search & Command</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white min-h-[300px]">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Autocomplete</p>
                                        <Autocomplete />
                                    </div>
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center min-h-[300px]">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Command Palette</p>
                                        <CommandPalette />
                                    </div>
                                </div>
                            </div>

                            {/* Overlays */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4 text-left">Overlays</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center min-h-[240px]">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Modal Dialog</p>
                                        <DialogDemo />
                                    </div>
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center min-h-[240px]">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Popover</p>
                                        <PopoverDemo />
                                    </div>
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col items-center justify-center min-h-[240px]">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Dropdown Menu</p>
                                        <DropdownMenuDemo />
                                    </div>
                                </div>
                            </div>

                            {/* Disclosure & Tabs */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4 text-left">Content Switching</h3>
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Disclosure (Accordion)</p>
                                        <DisclosureDemo />
                                    </div>
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Tabs (Horizontal)</p>
                                        <TabsDemo />
                                    </div>
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white col-span-1 xl:col-span-2">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Tabs (Vertical)</p>
                                        <VerticalTabs />
                                    </div>
                                </div>
                            </div>

                            {/* Form Elements */}
                            <div className="space-y-8">
                                <h3 className="text-sm font-black uppercase text-amber-600 tracking-[0.2em] border-l-4 border-amber-600 pl-4 text-left">Form Elements</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white min-h-[300px]">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Custom Select</p>
                                        <SelectDemo />
                                    </div>
                                    <div className="p-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white min-h-[300px] flex flex-col items-center justify-center">
                                        <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Copy Button</p>
                                        <CopyButton />
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </Container>
            </main>

            {/* OVERLAYS */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalHeader title="Quick Actions" description="Access common system commands" icon={<Activity className="w-5 h-5" />} onClose={() => setIsModalOpen(false)} />
                <ModalContent className="space-y-4">
                    <Button className="w-full justify-start" variant="outline" icon={Plus}>New Project</Button>
                    <Button className="w-full justify-start" variant="outline" icon={Users}>Invite Team</Button>
                    <Button className="w-full justify-start text-red-600 border-red-100 hover:bg-red-50" variant="outline" icon={LayoutIcon}>Reset Configuration</Button>
                </ModalContent>
                <ModalFooter>
                    <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                side={drawerSide}
                title="Panel Settings"
                description="Global dashboard preferences"
                footer={<Button variant="brand" className="w-full" onClick={() => setIsDrawerOpen(false)}>Save Changes</Button>}
            >
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div>
                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Dark Mode</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Sync with system</p>
                        </div>
                        <Switch checked={switchState} onCheckedChange={setSwitchState} />
                    </div>
                </div>
            </Drawer>


            <footer className="bg-[#0F172A] border-t border-white/5 py-8 mt-20">
                <Container className="flex justify-between items-center text-slate-400 text-sm">
                    <p>&copy; 2026 NSUI Design System. All rights reserved.</p>
                    <Button variant="brand" size="sm" className="bg-blue-600 shadow-blue-600/20">v1.0.0-alpha</Button>
                </Container>
            </footer>

            <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 w-full max-w-sm">
                {notifications.map(n => (
                    <Notification key={n.id} {...n} onClose={(id) => setNotifications(prev => prev.filter(x => x.id !== id))} />
                ))}
            </div>
        </div >
    )
}
