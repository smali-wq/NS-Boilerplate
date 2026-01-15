import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Avatar – User profile image or initials placeholder
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string
    fallback: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    variant?: 'default' | 'outline'
}

export function Avatar({ src, fallback, size = 'md', variant = 'default', className, ...props }: AvatarProps) {
    const sizes = {
        sm: "w-8 h-8 text-[10px]",
        md: "w-10 h-10 text-xs",
        lg: "w-12 h-12 text-sm",
        xl: "w-16 h-16 text-base",
    }

    const variants = {
        default: "bg-slate-100 border border-slate-200 text-slate-500",
        outline: "bg-transparent border-2 border-slate-200 text-slate-900 shadow-sm",
    }

    return (
        <div
            className={cn(
                "relative flex shrink-0 overflow-hidden rounded-full items-center justify-center font-black uppercase",
                sizes[size],
                variants[variant],
                className
            )}
            {...props}
        >
            {src ? (
                <img src={src} alt={fallback} className="aspect-square h-full w-full object-cover" />
            ) : (
                <span>{fallback.substring(0, 2)}</span>
            )}
        </div>
    )
}
