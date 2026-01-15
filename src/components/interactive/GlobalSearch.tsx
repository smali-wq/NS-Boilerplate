import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Search, Hash, Layout, Type, Layers, FileText, Table, BarChart3, AppWindow, Monitor, Spline, MousePointer } from 'lucide-react'
import { cn } from '../../utils/cn'
import { Button } from '../atoms/Button'

interface GlobalSearchProps {
    onNavigate: (tab: string, sectionId?: string) => void
}

interface SearchItem {
    id: string
    title: string
    category: string
    tab: string
    icon: any
}

const SEARCH_INDEX: SearchItem[] = [
    // Layout
    { id: 'layout-containers', title: 'Containers & Spacing', category: 'Layout', tab: 'layout', icon: Layout },
    { id: 'layout-dividers', title: 'Dividers', category: 'Layout', tab: 'layout', icon: Hash },
    { id: 'layout-media', title: 'Media Objects', category: 'Layout', tab: 'layout', icon: FileText },
    { id: 'layout-lists', title: 'List Containers', category: 'Layout', tab: 'layout', icon: Layers },

    // Elements
    { id: 'elements-buttons', title: 'Buttons & Actions', category: 'Elements', tab: 'elements', icon: MousePointer },
    { id: 'elements-badges', title: 'Badges & Status', category: 'Elements', tab: 'elements', icon: Hash },
    { id: 'elements-avatars', title: 'Avatars', category: 'Elements', tab: 'elements', icon: UserIcon },
    { id: 'elements-alerts', title: 'Alerts & Feedback', category: 'Elements', tab: 'elements', icon: AlertIcon },

    // Navigation
    { id: 'nav-navbar', title: 'Navbar & MegaMenu', category: 'Navigation', tab: 'navigation', icon: AppWindow },
    { id: 'nav-vertical', title: 'Vertical Navigation', category: 'Navigation', tab: 'navigation', icon: Layout },
    { id: 'nav-tabs', title: 'Tabs', category: 'Navigation', tab: 'navigation', icon: Layers },
    { id: 'nav-steps', title: 'Steppers & Progress', category: 'Navigation', tab: 'navigation', icon: BarChart3 },

    // Overlays
    { id: 'overlays-modal', title: 'Modals', category: 'Overlays', tab: 'overlays', icon: Layers },
    { id: 'overlays-drawer', title: 'Drawers', category: 'Overlays', tab: 'overlays', icon: Layout },
    { id: 'overlays-toast', title: 'Notifications', category: 'Overlays', tab: 'overlays', icon: AlertIcon },

    // Forms
    { id: 'forms-inputs', title: 'Inputs & Controls', category: 'Forms', tab: 'forms', icon: typesIcon },
    { id: 'forms-groups', title: 'Input Groups', category: 'Forms', tab: 'forms', icon: Layers },
    { id: 'forms-auth', title: 'Auth Forms', category: 'Forms', tab: 'forms', icon: UserIcon },

    // Tables
    { id: 'tables-basic', title: 'Standard Tables', category: 'Tables', tab: 'tables', icon: Table },
    { id: 'tables-data', title: 'Data Grids', category: 'Tables', tab: 'tables', icon: Table },

    // Display
    { id: 'display-desc', title: 'Description Lists', category: 'Display', tab: 'display', icon: FileText },
    { id: 'display-cal', title: 'Calendar', category: 'Display', tab: 'display', icon: CalendarIcon },

    // Interactive
    { id: 'inter-search', title: 'Command Palette', category: 'Interactive', tab: 'interactive', icon: Search },
]

// Icons helper
function UserIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> }
function AlertIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg> }
function typesIcon(props: any) { return <Type {...props} /> }
function CalendarIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg> }


export function GlobalSearch({ onNavigate }: GlobalSearchProps) {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const filteredItems = query === ''
        ? SEARCH_INDEX
        : SEARCH_INDEX.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        )

    return (
        <>
            <Button
                variant="outline"
                size="sm"
                className="w-full max-w-sm justify-between bg-white/10 border-white/10 hover:bg-white/20 text-slate-400 hover:text-white group"
                onClick={() => setOpen(true)}
            >
                <span className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    <span className="font-normal">Search components...</span>
                </span>
                <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-slate-600 bg-slate-800 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100 sm:flex dark:bg-slate-950 dark:border-slate-800">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-[100]" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all outline-none">
                                <div className="relative">
                                    <Search className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                                    <input
                                        className="h-14 w-full border-0 bg-transparent pl-12 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 sm:text-sm font-medium"
                                        placeholder="Type a command or search..."
                                        onChange={(e) => setQuery(e.target.value)}
                                        value={query}
                                        autoFocus
                                    />
                                </div>

                                {filteredItems.length > 0 && (
                                    <ul className="max-h-[60vh] scroll-py-3 overflow-y-auto p-3">
                                        {filteredItems.map((item) => (
                                            <li
                                                key={item.id}
                                                className="group flex cursor-pointer select-none rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                                onClick={() => {
                                                    onNavigate(item.tab)
                                                    setOpen(false)
                                                    setQuery('')
                                                }}
                                            >
                                                <div className={cn(
                                                    "flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 text-slate-500 group-hover:text-blue-600 shadow-sm ring-1 ring-slate-900/5 group-hover:ring-blue-600/20 transition-all",
                                                    "group-hover:scale-110 group-hover:-rotate-3"
                                                )}>
                                                    <item.icon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <div className="ml-4 flex-auto">
                                                    <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</p>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.category}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-blue-400">Jump to</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {query !== '' && filteredItems.length === 0 && (
                                    <div className="py-14 px-6 text-center text-sm sm:px-14">
                                        <div className="mx-auto h-12 w-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 text-slate-400">
                                            <Search className="h-6 w-6" />
                                        </div>
                                        <p className="mt-4 font-black uppercase text-slate-900 dark:text-white tracking-tight">No results found</p>
                                        <p className="mt-2 text-slate-500 dark:text-slate-400">We couldn't find anything matching that term. Please try again.</p>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
