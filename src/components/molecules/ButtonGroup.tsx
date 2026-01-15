import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonGroupProps {
    children: React.ReactNode
    className?: string
    orientation?: 'horizontal' | 'vertical'
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    children,
    className,
    orientation = 'horizontal'
}) => {
    return (
        <div className={cn(
            "inline-flex rounded-xl shadow-sm overflow-hidden border border-slate-200",
            orientation === 'vertical' ? "flex-col" : "flex-row",
            className
        )}>
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) return child

                const reactChild = child as React.ReactElement<any>
                return React.cloneElement(reactChild, {
                    // @ts-ignore - injecting custom styles to clear corners
                    className: cn(
                        reactChild.props.className,
                        "rounded-none border-0 border-slate-200",
                        orientation === 'horizontal'
                            ? (index !== React.Children.count(children) - 1 ? "border-r" : "")
                            : (index !== React.Children.count(children) - 1 ? "border-b" : "")
                    )
                })
            })}
        </div>
    )
}
