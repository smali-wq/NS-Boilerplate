import * as React from "react"
import { X } from "lucide-react"
import { cn } from "../../utils/cn"

/**
 * Modal – full-screen dialog overlay
 * Manages body scrolling and escape key closing.
 */

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />
            <div
                className={cn(
                    "relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 border border-white/20 dark:border-slate-800",
                    className
                )}
            >
                {children}
            </div>
        </div>
    )
}

export function ModalHeader({
    title,
    description,
    onClose,
    icon,
}: {
    title: string
    description?: string
    onClose?: () => void
    icon?: React.ReactNode
}) {
    return (
        <div className="p-8 pb-4 flex items-start justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex items-center space-x-5">
                {icon && (
                    <div className="p-3.5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-blue-600 dark:text-blue-400 border border-slate-100 dark:border-slate-700">
                        {icon}
                    </div>
                )}
                <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{title}</h2>
                    {description && (
                        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{description}</p>
                    )}
                </div>
            </div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="p-2 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </div>
    )
}

export function ModalContent({
    children,
    className
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn("p-8 overflow-y-auto max-h-[70vh]", className)}>
            {children}
        </div>
    )
}

export function ModalFooter({
    children,
    className
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                "p-8 pt-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end space-x-4",
                className
            )}
        >
            {children}
        </div>
    )
}
