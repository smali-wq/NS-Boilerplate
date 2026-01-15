import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

interface DropdownItem {
    label: string
    href?: string
    onClick?: () => void
    icon?: React.ElementType
    divider?: boolean
    variant?: 'default' | 'destructive'
}

interface DropdownProps {
    trigger: React.ReactNode
    items: DropdownItem[]
    align?: 'left' | 'right'
    className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
    trigger,
    items,
    align = 'left',
    className
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {trigger}
            </div>

            {isOpen && (
                <div
                    className={cn(
                        "absolute z-50 mt-2 w-56 rounded-[24px] bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none p-2 animate-in fade-in zoom-in-95 duration-100",
                        align === 'right' ? "right-0" : "left-0"
                    )}
                >
                    <div className="py-1">
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.divider && <div className="my-2 h-px bg-slate-100 mx-2" />}
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className={cn(
                                            "group flex items-center px-4 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all",
                                            item.variant === 'destructive'
                                                ? "text-rose-600 hover:bg-rose-50"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.icon && <item.icon className="mr-3 h-4 w-4 transition-transform group-hover:scale-110" />}
                                        {item.label}
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => {
                                            item.onClick?.()
                                            setIsOpen(false)
                                        }}
                                        className={cn(
                                            "group flex w-full items-center px-4 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all",
                                            item.variant === 'destructive'
                                                ? "text-rose-600 hover:bg-rose-50"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        )}
                                    >
                                        {item.icon && <item.icon className="mr-3 h-4 w-4 transition-transform group-hover:scale-110" />}
                                        {item.label}
                                    </button>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
