import * as React from "react"
import { X } from "lucide-react"
import { cn } from "../../utils/cn"

/**
 * Drawer – Slide-over overlay panel
 */

export interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description?: string
    children: React.ReactNode
    footer?: React.ReactNode
    side?: 'left' | 'right' | 'top' | 'bottom'
}

export function Drawer({ isOpen, onClose, title, description, children, footer, side = 'right' }: DrawerProps) {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    const sideStyles = {
        right: {
            container: "inset-y-0 right-0 max-w-full flex",
            translate: isOpen ? "translate-x-0" : "translate-x-full",
            width: "w-screen max-w-md",
            height: "h-full"
        },
        left: {
            container: "inset-y-0 left-0 max-w-full flex",
            translate: isOpen ? "translate-x-0" : "-translate-x-full",
            width: "w-screen max-w-md",
            height: "h-full"
        },
        top: {
            container: "inset-x-0 top-0 max-h-full flex",
            translate: isOpen ? "translate-y-0" : "-translate-y-full",
            width: "w-full",
            height: "h-auto max-h-[80vh]"
        },
        bottom: {
            container: "inset-x-0 bottom-0 max-h-full flex",
            translate: isOpen ? "translate-y-0" : "translate-y-full",
            width: "w-full",
            height: "h-auto max-h-[80vh]"
        }
    }[side]

    return (
        <div className={cn("fixed inset-0 z-50 overflow-hidden transition-all duration-75", isOpen ? "visible" : "invisible delay-300")}>
            <div
                className={cn("absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")}
                onClick={onClose}
            />
            <div className={cn(
                "absolute transition-transform duration-300 ease-in-out transform",
                sideStyles.container,
                sideStyles.translate
            )}>
                <div className={cn("bg-white shadow-2xl flex flex-col", sideStyles.width, sideStyles.height)}>
                    <div className="px-6 py-8 border-b border-slate-100">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{title}</h2>
                                {description && (
                                    <p className="mt-1 text-xs font-bold text-slate-400 uppercase tracking-widest">{description}</p>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="relative flex-1 px-6 py-8 overflow-y-auto">
                        {children}
                    </div>
                    {footer && (
                        <div className="px-6 py-8 bg-slate-50 border-t border-slate-100">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
