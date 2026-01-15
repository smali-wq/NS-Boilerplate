import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

interface MegaMenuCategory {
    title: string
    items: {
        label: string
        description?: string
        href: string
        icon?: React.ElementType
    }[]
}

interface MegaMenuProps {
    trigger: React.ReactNode
    categories: MegaMenuCategory[]
    footer?: {
        label: string
        href: string
        icon?: React.ElementType
    }
    className?: string
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
    trigger,
    categories,
    footer,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={cn("inline-block", className)} ref={menuRef}>
            <div
                onMouseEnter={() => setIsOpen(true)}
                className="cursor-pointer"
            >
                {trigger}
            </div>

            {isOpen && (
                <div
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute left-0 right-0 z-50 mt-2 mx-auto max-w-7xl px-4 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                    <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-100 ring-1 ring-black ring-opacity-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 p-12">
                            {categories.map((category, idx) => (
                                <div key={idx} className="space-y-6">
                                    <h4 className="text-[10px] font-black uppercase text-blue-600 tracking-[0.3em] border-l-2 border-blue-600 pl-4">
                                        {category.title}
                                    </h4>
                                    <ul className="space-y-4">
                                        {category.items.map((item, itemIdx) => (
                                            <li key={itemIdx}>
                                                <a
                                                    href={item.href}
                                                    className="group flex items-start gap-3 rounded-2xl p-2 -m-2 transition-colors hover:bg-slate-50"
                                                >
                                                    {item.icon && (
                                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
                                                            <item.icon className="w-4 h-4" />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                                                            {item.label}
                                                        </p>
                                                        {item.description && (
                                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mt-0.5 line-clamp-1">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {footer && (
                            <div className="bg-slate-50 p-8 flex items-center justify-between border-t border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        Ready to scale? Explore our enterprise frameworks.
                                    </p>
                                </div>
                                <a
                                    href={footer.href}
                                    className="group flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 tracking-widest hover:text-blue-700 transition-colors"
                                >
                                    {footer.label}
                                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
