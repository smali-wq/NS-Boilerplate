import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Alert – system for displaying important messages
 * Variants: default | success | warning | destructive
 */

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'destructive' | 'success' | 'warning' | 'dark' | 'light' | 'primary' | 'secondary' | 'danger' | 'info'
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: "bg-slate-50 border-slate-200 text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100",
            destructive: "bg-red-50 border-red-200 text-red-900 [&>h5]:text-red-900 dark:bg-red-950 dark:border-red-900 dark:text-red-100 dark:[&>h5]:text-red-100",
            danger: "bg-red-50 border-red-200 text-red-900 [&>h5]:text-red-900 dark:bg-red-950 dark:border-red-900 dark:text-red-100 dark:[&>h5]:text-red-100",
            success: "bg-emerald-50 border-emerald-200 text-emerald-900 [&>h5]:text-emerald-900 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-100 dark:[&>h5]:text-emerald-100",
            warning: "bg-amber-50 border-amber-200 text-amber-900 [&>h5]:text-amber-900 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-100 dark:[&>h5]:text-amber-100",
            info: "bg-sky-50 border-sky-200 text-sky-900 [&>h5]:text-sky-900 dark:bg-sky-950 dark:border-sky-900 dark:text-sky-100 dark:[&>h5]:text-sky-100",
            dark: "bg-slate-900 border-slate-800 text-slate-50 [&>h5]:text-white dark:bg-slate-800 dark:border-slate-700",
            light: "bg-white border-slate-100 text-slate-600 [&>h5]:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:[&>h5]:text-slate-100",
            primary: "bg-blue-50 border-blue-200 text-blue-900 [&>h5]:text-blue-900 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-100 dark:[&>h5]:text-blue-100",
            secondary: "bg-indigo-50 border-indigo-200 text-indigo-900 [&>h5]:text-indigo-900 dark:bg-indigo-950 dark:border-indigo-900 dark:text-indigo-100 dark:[&>h5]:text-indigo-100",
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
