import { useState } from 'react'
import { Container } from '../layouts/LayoutElements'
import { Button } from '../atoms/Button'
import { Menu, X, ChevronDown, PieChart, MousePointer2, Fingerprint, RefreshCcw, Phone, PlayCircle } from 'lucide-react'
import { cn } from '../../utils/cn'

export function HeaderSimple() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b border-slate-100 relative z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">UB</div>
                        <span className="font-black text-slate-900 uppercase tracking-tight">NSUI</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {['Product', 'Features', 'Marketplace', 'Company'].map((item) => (
                        <a key={item} href="#" className="text-sm font-semibold leading-6 text-slate-900 uppercase tracking-wider hover:text-blue-600 transition-colors">
                            {item}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-900 self-center">
                        Log in
                    </a>
                    <Button size="sm" variant="brand">Sign up</Button>
                </div>
            </nav>
            {/* Mobile menu would go here in a real app, simplified for demo */}
        </header>
    )
}

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: PieChart },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: MousePointer2 },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: Fingerprint },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: RefreshCcw },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircle },
    { name: 'Contact sales', href: '#', icon: Phone },
]

export function HeaderFlyout() {
    const [flyoutOpen, setFlyoutOpen] = useState(false)

    return (
        <header className="bg-white border-b border-slate-100 relative z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">UB</div>
                        <span className="font-black text-slate-900 uppercase tracking-tight">NSUI</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button
                            type="button"
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 uppercase tracking-wider group"
                            onClick={() => setFlyoutOpen(!flyoutOpen)}
                        >
                            Product
                            <ChevronDown className="h-4 w-4 flex-none text-slate-400 group-hover:text-blue-600" aria-hidden="true" />
                        </button>
                        {flyoutOpen && (
                            <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-50 text-left">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-slate-600 group-hover:text-blue-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-slate-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-slate-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-slate-900/5 bg-slate-50">
                                    {callsToAction.map((item) => (
                                        <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-100">
                                            <item.icon className="h-5 w-5 flex-none text-slate-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-900 uppercase tracking-wider">Features</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-900 uppercase tracking-wider">Company</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}
