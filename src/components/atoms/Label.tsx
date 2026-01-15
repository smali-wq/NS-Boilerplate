import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Label – consistent label for form fields
 * Features uppercase tracking and small font size
 */

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={cn(
                    "text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-1 block",
                    className
                )}
                {...props}
            />
        )
    }
)
Label.displayName = "Label"

export { Label }
