import { Menu, X, Search, Bell } from "lucide-react"
import { useState } from "react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"
import { Avatar } from "../atoms/Avatar"
import { Badge } from "../atoms/Badge"

interface NavItem {
    label: string
    href: string
    active?: boolean
}

interface NavbarProps {
    logo?: React.ReactNode
    items: NavItem[]
    className?: string
}

export function Navbar({
    logo = "UB",
    items,
    className,
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={cn("bg-[#0F172A] border-b border-white/5", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">
                                {logo}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-1">
                                {items.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className={cn(
                                            "px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all",
                                            item.active
                                                ? "bg-white/10 text-white"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                                <Bell size={18} />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0F172A]" />
                            </button>
                            <div className="h-8 w-px bg-white/10 mx-2" />
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-white uppercase tracking-tight">Alice Johnson</p>
                                    <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Admin</p>
                                </div>
                                <Avatar
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                    fallback="AJ"
                                    size="sm"
                                    className="ring-2 ring-white/10"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-400 hover:text-white"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {items.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "block px-3 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                                item.active
                                    ? "bg-white/10 text-white"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="pt-4 pb-3 border-t border-white/5">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <Avatar
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                fallback="AJ"
                                size="sm"
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-xs font-black text-white uppercase">Alice Johnson</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase">alice@example.com</div>
                        </div>
                        <button className="ml-auto flex-shrink-0 p-2 text-slate-400 hover:text-white transition-colors">
                            <Bell size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
