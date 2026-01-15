import * as React from "react"
import { cn } from "../../utils/cn"

/**
 * Table – Comprehensive data grid system
 * Supports variants: simple, striped, borderless, condensed, stickyHeader
 */

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement> & {
        striped?: boolean;
        condensed?: boolean;
        borderless?: boolean;
        stickyHeader?: boolean;
        fullWidth?: boolean;
    }
>(({ className, striped, condensed, borderless, stickyHeader, fullWidth = true, ...props }, ref) => (
    <div className={cn(
        "relative overflow-auto rounded-3xl",
        !borderless && "border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm",
        fullWidth ? "w-full" : "w-max"
    )}>
        <table
            ref={ref}
            className={cn(
                "w-full caption-bottom text-sm text-left border-collapse",
                striped && "[&_tbody_tr:nth-child(even)]:bg-slate-50/50 dark:[&_tbody_tr:nth-child(even)]:bg-slate-800/50",
                condensed && "[&_td]:py-2 [&_th]:py-2",
                className
            )}
            {...props}
        />
    </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement> & { sticky?: boolean }
>(({ className, sticky, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn(
            "[&_tr]:border-b border-slate-200 bg-slate-50/50 transition-colors dark:border-slate-800 dark:bg-slate-900/50",
            sticky && "sticky top-0 z-10 bg-white/80 backdrop-blur-md dark:bg-slate-900/80",
            className
        )}
        {...props}
    />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
    />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "border-t border-slate-200 bg-slate-50 font-medium [&>tr]:last:border-b-0 dark:border-slate-800 dark:bg-slate-900",
            className
        )}
        {...props}
    />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "border-b border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/50 data-[state=selected]:bg-slate-100 dark:data-[state=selected]:bg-slate-800",
            className
        )}
        {...props}
    />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement> & { uppercase?: boolean }
>(({ className, uppercase, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "h-12 px-6 align-middle font-black text-slate-400 text-[10px] tracking-widest",
            uppercase && "uppercase",
            className
        )}
        {...props}
    />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn("px-6 py-4 align-middle", className)}
        {...props}
    />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn("mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest", className)}
        {...props}
    />
))
TableCaption.displayName = "TableCaption"

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
