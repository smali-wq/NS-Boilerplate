import { cn } from "../../utils/cn"

/**
 * Switch – toggle switch component
 * Controlled via checked and onCheckedChange props
 */

export interface SwitchProps {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    disabled?: boolean
    className?: string
}

export function Switch({ checked, onCheckedChange, disabled, className }: SwitchProps) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onCheckedChange(!checked)}
            className={cn(
                "w-11 h-6 rounded-full transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                checked ? 'bg-blue-600' : 'bg-slate-300',
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
        >
            <span
                className={cn(
                    "absolute top-1 block h-4 w-4 bg-white rounded-full transition-all shadow-sm",
                    checked ? 'left-[calc(100%-1.25rem)]' : 'left-1'
                )}
            />
        </button>
    )
}
