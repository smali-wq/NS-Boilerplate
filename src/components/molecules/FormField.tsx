import * as React from "react"
import { Label } from "../atoms/Label"
import { Input } from "../atoms/Input"
import { cn } from "../../utils/cn"

/**
 * FormField – combined label and input with error messaging
 */

interface FormFieldProps extends Omit<React.ComponentProps<typeof Input>, 'error'> {
    label: string
    error?: string
    id: string
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
    ({ label, error, id, className, ...props }, ref) => {
        return (
            <div className={cn("space-y-1.5 w-full", className)}>
                <Label htmlFor={id}>{label}</Label>
                <Input
                    id={id}
                    ref={ref}
                    error={!!error}
                    {...props}
                />
                {error && (
                    <p className="text-[10px] text-red-500 font-bold mt-1 px-1 uppercase tracking-wider">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

FormField.displayName = "FormField"

export { FormField }
