import * as React from "react"
import { cn } from "../../utils/cn"

export interface MediaObjectProps {
    title: string
    description: string
    image?: string
    icon?: React.ElementType
    iconBackground?: string
    align?: 'top' | 'center'
    className?: string
}

export function MediaObject({
    title,
    description,
    image,
    icon: Icon,
    iconBackground = "bg-slate-100",
    align = 'top',
    className
}: MediaObjectProps) {
    return (
        <div className={cn("flex gap-4", className)}>
            <div className={cn(
                "flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden",
                align === 'top' ? 'self-start' : 'self-center',
                image ? "w-12 h-12" : cn("w-10 h-10", iconBackground)
            )}>
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : Icon ? (
                    <Icon className="w-5 h-5 text-slate-600" />
                ) : null}
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{title}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mt-0.5">
                    {description}
                </p>
            </div>
        </div>
    )
}
