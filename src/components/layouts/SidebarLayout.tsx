import * as React from "react"
import { Layout, Menu, X } from "lucide-react"
import { cn } from "../../utils/cn"
import { VerticalNavigation } from "../organisms/VerticalNavigation"
import type { NavItem } from "../organisms/VerticalNavigation"
import { Button } from "../atoms/Button"

/**
 * SidebarLayout – Standard dashboard shell with collapsible sidebar
 */

export interface SidebarLayoutProps {
    navigation: NavItem[]
    user: { name: string; role: string; avatar?: string }
    children: React.ReactNode
    logo?: React.ReactNode
}

export function SidebarLayout({ navigation, user, children, logo }: SidebarLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 ease-in-out bg-[#0F172A] border-r border-white/5",
                    isSidebarOpen ? "w-64" : "w-20"
                )}
            >
                {/* Logo Area */}
                <div className="h-20 flex items-center px-6 border-b border-white/5 shrink-0">
                    {logo || (
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20" />
                            {isSidebarOpen && <span className="text-white font-black uppercase tracking-tight">Enterprise</span>}
                        </div>
                    )}
                </div>

                {/* Nav Area */}
                <div className="flex-1 overflow-y-auto py-6 px-3">
                    <VerticalNavigation
                        items={navigation.map(item => ({
                            ...item,
                            label: isSidebarOpen ? item.label : ""
                        }))}
                    />
                </div>

                {/* User Area */}
                <div className="p-4 border-t border-white/5 bg-white/5">
                    <div className={cn("flex items-center", isSidebarOpen ? "space-x-3" : "justify-center")}>
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-black text-white">
                            {user.name.substring(0, 2)}
                        </div>
                        {isSidebarOpen && (
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-black text-white truncate uppercase tracking-tight">{user.name}</p>
                                <p className="text-[9px] font-bold text-slate-400 truncate uppercase tracking-widest">{user.role}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute -right-3 top-24 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all z-50 border-2 border-slate-50"
                >
                    <Menu size={10} className={cn("transition-transform", isSidebarOpen && "rotate-180")} />
                </button>
            </aside>

            {/* Main Content Area */}
            <main
                className={cn(
                    "flex-1 flex flex-col transition-all duration-300",
                    isSidebarOpen ? "ml-64" : "ml-20"
                )}
            >
                <div className="flex-1 overflow-y-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
