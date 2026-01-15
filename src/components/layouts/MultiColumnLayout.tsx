import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * MultiColumnLayout – Versatile grid-based content layout
 */

export interface MultiColumnLayoutProps {
    sidebar?: React.ReactNode
    main: React.ReactNode
    aside?: React.ReactNode
    className?: string
}

export function MultiColumnLayout({ sidebar, main, aside, className }: MultiColumnLayoutProps) {
    return (
        <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 h-full", className)}>
            {sidebar && (
                <div className="lg:col-span-3">
                    <div className="sticky top-24 space-y-6">
                        {sidebar}
                    </div>
                </div>
            )}

            <div className={cn(
                "lg:col-span-12",
                sidebar && aside ? "lg:col-span-6" : (sidebar || aside) ? "lg:col-span-9" : ""
            )}>
                <div className="space-y-8">
                    {main}
                </div>
            </div>

            {aside && (
                <div className="lg:col-span-3">
                    <div className="sticky top-24 space-y-6">
                        {aside}
                    </div>
                </div>
            )}
        </div>
    )
}
