import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Badge – status and tag indicator
 * Variants: default | outline | success | warning | destructive
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outline' | 'success' | 'warning' | 'destructive' | 'brand'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: "bg-slate-100 text-slate-800 border-transparent dark:bg-slate-800 dark:text-slate-100",
        brand: "bg-blue-600 text-white border-transparent shadow-sm",
        outline: "text-slate-950 border-slate-200 dark:text-slate-100 dark:border-slate-800",
        success: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800",
        warning: "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800",
        destructive: "bg-red-50 text-red-700 border-red-100 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-black uppercase tracking-wider transition-colors",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
