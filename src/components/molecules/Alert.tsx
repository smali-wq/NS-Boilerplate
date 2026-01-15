import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Alert – system for displaying important messages
 * Variants: default | success | warning | destructive
 */

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'destructive' | 'success' | 'warning'
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: "bg-slate-50 border-slate-200 text-slate-900",
            destructive: "bg-red-50 border-red-200 text-red-900 [&>h5]:text-red-900",
            success: "bg-emerald-50 border-emerald-200 text-emerald-900 [&>h5]:text-emerald-900",
            warning: "bg-amber-50 border-amber-200 text-amber-900 [&>h5]:text-amber-900",
        }

        return (
            <div
                ref={ref}
                role="alert"
                className={cn(
                    "relative w-full rounded-2xl border p-4 shadow-sm transition-all",
                    variants[variant],
                    className
                )}
                {...props}
            />
        )
    }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn("mb-1 font-black text-sm uppercase tracking-tight leading-none", className)}
        {...props}
    />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-xs font-medium opacity-80 leading-relaxed", className)}
        {...props}
    />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
