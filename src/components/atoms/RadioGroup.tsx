import * as React from "react"
import { cn } from "../../utils/cn"

export interface RadioGroupOption {
    id: string
    value: string
    label: string
    description?: string
    disabled?: boolean
}

export interface RadioGroupProps {
    options: RadioGroupOption[]
    value?: string
    defaultValue?: string
    onChange?: (value: string) => void
    name?: string
    className?: string
    orientation?: 'vertical' | 'horizontal'
}

export function RadioGroup({
    options,
    value,
    defaultValue,
    onChange,
    name,
    className,
    orientation = 'vertical'
}: RadioGroupProps) {
    const [selectedValue, setSelectedValue] = React.useState(value || defaultValue)

    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value)
        }
    }, [value])

    const handleChange = (val: string) => {
        if (value === undefined) {
            setSelectedValue(val)
        }
        onChange?.(val)
    }

    return (
        <div className={cn(
            "flex gap-4",
            orientation === 'vertical' ? "flex-col" : "flex-row flex-wrap",
            className
        )}>
            {options.map((option) => (
                <label
                    key={option.id}
                    className={cn(
                        "relative flex items-start p-4 rounded-2xl border transition-all cursor-pointer group",
                        selectedValue === option.value
                            ? "bg-blue-50/50 border-blue-600 ring-1 ring-blue-600"
                            : "bg-white border-slate-200 hover:border-slate-300",
                        option.disabled && "opacity-50 cursor-not-allowed"
                    )}
                >
                    <div className="flex items-center h-5">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => !option.disabled && handleChange(option.value)}
                            disabled={option.disabled}
                            className="sr-only"
                        />
                        <div className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                            selectedValue === option.value
                                ? "border-blue-600 bg-blue-600"
                                : "border-slate-300 bg-white group-hover:border-slate-400"
                        )}>
                            <div className={cn(
                                "w-2 h-2 rounded-full bg-white transition-transform",
                                selectedValue === option.value ? "scale-100" : "scale-0"
                            )} />
                        </div>
                    </div>
                    <div className="ml-3 text-sm">
                        <span className={cn(
                            "block font-black uppercase tracking-tight",
                            selectedValue === option.value ? "text-blue-900" : "text-slate-900"
                        )}>
                            {option.label}
                        </span>
                        {option.description && (
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5 block">
                                {option.description}
                            </span>
                        )}
                    </div>
                </label>
            ))}
        </div>
    )
}
