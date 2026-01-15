import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Input – basic text input component
 * Supports error states and standardized padding/radius
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean | string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-2xl border bg-slate-50 px-5 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                    error ? "border-red-500 focus-visible:ring-red-500" : "border-slate-200",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
