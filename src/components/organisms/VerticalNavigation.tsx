import type { LucideIcon } from "lucide-react"
import { cn } from "../../utils/cn"

/**
 * VerticalNavigation – Standard sidebar navigation
 */

export interface NavItem {
    label: string
    href: string
    icon: LucideIcon
    active?: boolean
    badge?: string
}

export function VerticalNavigation({ items, className }: { items: NavItem[]; className?: string }) {
    return (
        <nav className={cn("space-y-1", className)} aria-label="Sidebar">
            {items.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                        "group flex items-center px-4 py-3 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all",
                        item.active
                            ? "bg-[#0F172A] text-white shadow-lg shadow-slate-900/20"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    )}
                >
                    <item.icon
                        className={cn(
                            "mr-3 h-5 w-5 shrink-0 transition-colors",
                            item.active ? "text-white" : "text-slate-400 group-hover:text-slate-500"
                        )}
                        aria-hidden="true"
                    />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                        <span className={cn(
                            "ml-3 rounded-full px-2 py-0.5 text-[9px]",
                            item.active ? "bg-white/10 text-white" : "bg-slate-100 text-slate-500"
                        )}>
                            {item.badge}
                        </span>
                    )}
                </a>
            ))}
        </nav>
    )
}
