import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Container - Standardized width constraint
 */
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    )
}

/**
 * Divider - Stylized horizontal separator
 */
export function Divider({ label, className }: { label?: string; className?: string }) {
    return (
        <div className={cn("relative my-8", className)}>
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            {label && (
                <div className="relative flex justify-center">
                    <span className="bg-white dark:bg-slate-950 px-3 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">
                        {label}
                    </span>
                </div>
            )}
        </div>
    )
}
