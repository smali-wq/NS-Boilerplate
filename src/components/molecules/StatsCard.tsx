import type { LucideIcon } from "lucide-react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "../../utils/cn"
import { Card } from "./Card"

/**
 * StatsCard – Key Performance Indicator display
 */

export interface StatsCardProps {
    title: string
    value: string
    change?: string
    trend?: 'up' | 'down' | 'neutral'
    icon?: LucideIcon
    className?: string
    variant?: 'default' | 'flat' | 'outline' | 'brand'
    color?: 'blue' | 'emerald' | 'amber' | 'indigo' | 'rose' | 'slate'
}

export function StatsCard({
    title,
    value,
    change,
    trend,
    icon: Icon,
    variant = 'default',
    color = 'slate',
    className
}: StatsCardProps) {
    const themes = {
        blue: "text-blue-600 bg-blue-50 border-blue-100",
        emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
        amber: "text-amber-600 bg-amber-50 border-amber-100",
        indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
        rose: "text-rose-600 bg-rose-50 border-rose-100",
        slate: "text-slate-600 bg-slate-50 border-slate-100",
    }

    const variants = {
        default: "bg-white border-slate-200",
        flat: cn(themes[color], "border-transparent"),
        outline: "bg-transparent border-slate-200 shadow-none",
        brand: "bg-slate-900 text-white border-slate-800",
    }

    return (
        <Card className={cn(
            "p-6 hover:shadow-md transition-all",
            variants[variant],
            className
        )}>
            <div className="flex items-center justify-between">
                <div>
                    <p className={cn(
                        "text-[10px] font-black uppercase tracking-widest mb-1",
                        variant === 'brand' ? "text-slate-400" : "text-slate-400"
                    )}>{title}</p>
                    <h3 className={cn(
                        "text-2xl font-black tracking-tight",
                        variant === 'brand' ? "text-white" : "text-slate-900"
                    )}>{value}</h3>
                </div>
                {Icon && (
                    <div className={cn(
                        "p-3 rounded-2xl border",
                        variant === 'brand' ? "bg-white/10 border-white/10 text-white" : themes[color]
                    )}>
                        <Icon size={20} />
                    </div>
                )}
            </div>
            {change && (
                <div className="mt-4 flex items-center space-x-2">
                    <div className={cn(
                        "flex items-center text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider",
                        trend === 'up' ? "bg-emerald-50 text-emerald-700" :
                            trend === 'down' ? "bg-red-50 text-red-700" :
                                "bg-slate-50 text-slate-500"
                    )}>
                        {trend === 'up' && <ArrowUpRight size={10} className="mr-1" />}
                        {trend === 'down' && <ArrowDownRight size={10} className="mr-1" />}
                        {change}
                    </div>
                    <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        variant === 'brand' ? "text-slate-500" : "text-slate-400"
                    )}>vs last month</span>
                </div>
            )}
        </Card>
    )
}
