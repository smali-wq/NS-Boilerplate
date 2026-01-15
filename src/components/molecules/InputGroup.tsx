import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "../../utils/cn"

export interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
    prefixElement?: React.ReactNode
    suffixElement?: React.ReactNode
    prefixIcon?: LucideIcon
    suffixIcon?: LucideIcon
    containerClassName?: string
}

export const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
    ({ className, containerClassName, prefixElement, suffixElement, prefixIcon: PrefixIcon, suffixIcon: SuffixIcon, type, ...props }, ref) => {
        return (
            <div className={cn(
                "group relative flex items-stretch rounded-2xl border border-slate-200 bg-white transition-all focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/10",
                containerClassName
            )}>
                {(prefixElement || PrefixIcon) && (
                    <div className="flex items-center px-4 border-r border-slate-100 bg-slate-50/50 rounded-l-2xl text-slate-500 shrink-0">
                        {PrefixIcon && <PrefixIcon size={16} className="text-slate-400" />}
                        {prefixElement}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full bg-transparent px-4 py-2 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {(suffixElement || SuffixIcon) && (
                    <div className="flex items-center px-4 border-l border-slate-100 bg-slate-50/50 rounded-r-2xl text-slate-500 shrink-0">
                        {suffixElement}
                        {SuffixIcon && <SuffixIcon size={16} className="text-slate-400" />}
                    </div>
                )}
            </div>
        )
    }
)
InputGroup.displayName = "InputGroup"
