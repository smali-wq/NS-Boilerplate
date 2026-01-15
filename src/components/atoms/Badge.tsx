import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Badge – status and tag indicator
 * Variants: default | outline | success | warning | destructive
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outline' | 'success' | 'warning' | 'destructive'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: "bg-slate-100 text-slate-800 border-transparent",
        outline: "text-slate-950 border-slate-200",
        success: "bg-emerald-50 text-emerald-700 border-emerald-100",
        warning: "bg-amber-50 text-amber-600 border-amber-100",
        destructive: "bg-red-50 text-red-700 border-red-100",
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
