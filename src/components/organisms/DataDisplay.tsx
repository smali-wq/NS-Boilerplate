import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * DescriptionList – Advanced key-value data presentation
 * Supports vertical and horizontal layouts with optional borders
 */

export interface DescriptionListItem {
    label: string
    value: React.ReactNode
}

export interface DescriptionListProps {
    items: DescriptionListItem[]
    layout?: 'horizontal' | 'vertical'
    className?: string
}

export function DescriptionList({ items, layout = 'horizontal', className }: DescriptionListProps) {
    return (
        <dl className={cn(
            "grid gap-x-8 gap-y-6",
            layout === 'horizontal' ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1",
            className
        )}>
            {items.map((item, idx) => (
                <div key={idx} className={cn(
                    "space-y-1",
                    layout === 'horizontal' ? "md:border-l md:border-slate-100 md:pl-6 first:border-0 first:pl-0" : ""
                )}>
                    <dt className="text-[12px] font-black uppercase text-slate-400 tracking-widest">{item.label}</dt>
                    <dd className="text-sm font-bold text-slate-900">{item.value}</dd>
                </div>
            ))}
        </dl>
    )
}

/**
 * Feed – Activity stream/Timeline presentation
 */

export interface FeedItem {
    id: string | number
    content: React.ReactNode
    target?: string
    date: string
    datetime: string
    icon?: React.ElementType
    iconBackground?: string
}

export interface FeedProps {
    items: FeedItem[]
    className?: string
}

export function Feed({ items, className }: FeedProps) {
    return (
        <div className={cn("flow-root", className)}>
            <ul role="list" className="-mb-8">
                {items.map((item, itemIdx) => (
                    <li key={item.id}>
                        <div className="relative pb-8">
                            {itemIdx !== items.length - 1 ? (
                                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-slate-100" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span className={cn(
                                        item.iconBackground || 'bg-slate-100',
                                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                    )}>
                                        {item.icon ? (
                                            <item.icon className="h-5 w-5 text-slate-600" aria-hidden="true" />
                                        ) : (
                                            <div className="w-2 h-2 rounded-full bg-slate-400" />
                                        )}
                                    </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            {item.content}{' '}
                                            {item.target && (
                                                <a href="#" className="font-black text-slate-900 uppercase tracking-tight">
                                                    {item.target}
                                                </a>
                                            )}
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-[12px] font-black uppercase text-slate-400 tracking-widest">
                                        <time dateTime={item.datetime}>{item.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
