import * as React from "react"
import { cn } from "../../utils/cn"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./Card"

export interface ActionPanelProps {
    title: string
    description?: string
    children: React.ReactNode
    footer?: React.ReactNode
    className?: string
}

export function ActionPanel({
    title,
    description,
    children,
    footer,
    className
}: ActionPanelProps) {
    return (
        <Card className={cn("overflow-hidden border-2", className)}>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 p-6 bg-slate-50/50 border-r border-slate-100">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{title}</h3>
                    {description && (
                        <p className="mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
                <div className="md:col-span-2">
                    <CardContent className="p-6">
                        {children}
                    </CardContent>
                    {footer && (
                        <CardFooter className="bg-slate-50/30 border-t border-slate-100 p-6">
                            {footer}
                        </CardFooter>
                    )}
                </div>
            </div>
        </Card>
    )
}
