import { ChevronRight, Home } from "lucide-react"
import { cn } from "../../utils/cn"

/**
 * Breadcrumbs – Path-based navigation helper
 */

export interface BreadcrumbItem {
    label: string
    href?: string
    active?: boolean
}

export function Breadcrumbs({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
    return (
        <nav className={cn("flex", className)} aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                    <div>
                        <a href="#" className="text-slate-400 hover:text-slate-500 transition-colors">
                            <Home className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {items.map((item, idx) => (
                    <li key={idx}>
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                            <a
                                href={item.href || "#"}
                                className={cn(
                                    "ml-2 text-[10px] font-black uppercase tracking-widest transition-colors",
                                    item.active ? "text-slate-900 pointer-events-none" : "text-slate-500 hover:text-slate-700"
                                )}
                                aria-current={item.active ? 'page' : undefined}
                            >
                                {item.label}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
