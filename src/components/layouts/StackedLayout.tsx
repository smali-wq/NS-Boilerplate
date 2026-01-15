import * as React from "react"
import { Layout, Bell, Settings, User } from "lucide-react"
import { cn } from "../../utils/cn"
import { Container } from "./LayoutElements"
import { Button } from "../atoms/Button"
import { Avatar } from "../atoms/Avatar"

/**
 * StackedLayout – Top-navigation based layout for simplified application flows
 */

export interface StackedLayoutProps {
    navigation: { label: string; href: string; active?: boolean }[]
    children: React.ReactNode
}

export function StackedLayout({ navigation, children }: StackedLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Navigation */}
            <header className="bg-[#0F172A] border-b border-white/5 shadow-xl sticky top-0 z-40">
                <Container>
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-10">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20" />
                                <span className="text-white font-black uppercase tracking-tight">Enterprise</span>
                            </div>
                            <nav className="flex items-center space-x-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={cn(
                                            "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                                            item.active
                                                ? "bg-white/10 text-white shadow-inner"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5">
                                <Bell size={18} />
                            </Button>
                            <div className="h-6 w-px bg-white/10" />
                            <Avatar fallback="AJ" size="sm" className="bg-slate-700 text-white" />
                        </div>
                    </div>
                </Container>
            </header>

            {/* Content Area */}
            <main className="flex-1 py-12">
                <Container>
                    {children}
                </Container>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-10 mt-auto">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <p>© 2026 Enterprise UI System. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-600">Terms of Service</a>
                            <a href="#" className="hover:text-slate-600">System Status</a>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}
