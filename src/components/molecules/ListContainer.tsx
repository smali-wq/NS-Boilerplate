import * as React from "react"
import { cn } from "../../utils/cn"

export interface ListContainerProps {
    children: React.ReactNode
    className?: string
    divided?: boolean
}

export function ListContainer({ children, className, divided = true }: ListContainerProps) {
    return (
        <div className={cn(
            "bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden",
            className
        )}>
            <ul className={cn("list-none p-0 m-0", divided && "divide-y divide-slate-100")}>
                {children}
            </ul>
        </div>
    )
}

export function ListItem({
    children,
    className,
    onClick,
    action
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    action?: React.ReactNode;
}) {
    return (
        <li className={cn(
            "flex items-center justify-between p-6 transition-colors",
            onClick && "cursor-pointer hover:bg-slate-50",
            className
        )} onClick={onClick}>
            <div className="flex-1 min-w-0">
                {children}
            </div>
            {action && (
                <div className="ml-4 flex-shrink-0">
                    {action}
                </div>
            )}
        </li>
    )
}
