import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "../../utils/cn"

/**
 * Button component – reusable action component
 * 
 * Variants: primary | secondary | destructive | outline | ghost | brand
 * Sizes: sm | md | lg | icon
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'brand'
    size?: 'sm' | 'md' | 'lg' | 'icon'
    isLoading?: boolean
    icon?: LucideIcon
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, icon: Icon, children, disabled, ...props }, ref) => {
        const variants = {
            primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
            brand: "bg-[#550c2f] text-white hover:opacity-90 shadow-lg shadow-[#550c2f]/20 uppercase tracking-widest font-black",
            secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
            destructive: "bg-red-600 text-white hover:bg-red-700",
            outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
            ghost: "hover:bg-slate-100 text-slate-600 hover:text-slate-900",
        }

        const sizes = {
            sm: "h-8 px-3 text-xs rounded-lg",
            md: "h-10 px-4 py-2 rounded-xl text-sm",
            lg: "h-12 px-8 rounded-2xl text-sm",
            icon: "h-10 w-10 p-2 rounded-xl flex items-center justify-center",
        }

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(
                    "inline-flex items-center justify-center font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 gap-2",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : Icon ? (
                    <Icon className={cn("w-4 h-4", children ? "mr-0" : "")} />
                ) : null}
                {children}
            </button>
        )
    }
)

Button.displayName = "Button"

export { Button }
