import type { LucideIcon } from "lucide-react"
import { Plus } from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"

/**
 * EmptyState – Professional placeholder when no data exists
 */

export interface EmptyStateProps {
    title: string
    description: string
    icon: LucideIcon
    actionLabel?: string
    onAction?: () => void
    className?: string
}

export function EmptyState({ title, description, icon: Icon, actionLabel, onAction, className }: EmptyStateProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-slate-900 rounded-[32px] border-2 border-dashed border-slate-200 dark:border-slate-800", className)}>
            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-[24px] text-slate-400 dark:text-slate-500 mb-6">
                <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{title}</h3>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 max-w-xs">{description}</p>
            {actionLabel && (
                <div className="mt-8">
                    <Button variant="brand" onClick={onAction} icon={Plus}>
                        {actionLabel}
                    </Button>
                </div>
            )}
        </div>
    )
}
