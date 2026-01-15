import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Tabs – declarative tabbed interface
 * Manages active state internally via context.
 */

interface TabsProps {
    defaultValue: string
    value?: string
    onValueChange?: (value: string) => void
    children: React.ReactNode
    className?: string
}

const TabsContext = React.createContext<{
    value: string
    onValueChange: (value: string) => void
} | null>(null)

export function Tabs({ defaultValue, value: controlledValue, onValueChange, children, className }: TabsProps) {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)

    // Use controlled value if present, otherwise internal state
    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

    const handleValueChange = (newValue: string) => {
        if (controlledValue === undefined) {
            setUncontrolledValue(newValue)
        }
        onValueChange?.(newValue)
    }

    return (
        <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
            <div className={cn("w-full", className)}>{children}</div>
        </TabsContext.Provider>
    )
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("inline-flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 p-1.5 text-slate-500 border border-slate-200 dark:border-slate-800 shadow-sm", className)}>
            {children}
        </div>
    )
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
    const context = React.useContext(TabsContext)
    if (!context) return null

    const isActive = context.value === value

    return (
        <button
            onClick={() => context.onValueChange(value)}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
                isActive
                    ? "bg-[#0F172A] text-white shadow-lg dark:bg-blue-600"
                    : "hover:bg-slate-50 text-slate-500 dark:hover:bg-slate-800 dark:text-slate-400",
                className
            )}
        >
            {children}
        </button>
    )
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
    const context = React.useContext(TabsContext)
    if (!context || context.value !== value) return null

    return (
        <div className={cn("mt-4 animate-in fade-in slide-in-from-top-1 duration-300", className)}>
            {children}
        </div>
    )
}
