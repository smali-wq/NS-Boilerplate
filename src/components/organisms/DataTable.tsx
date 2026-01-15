import * as React from "react"
import { Search, ArrowLeftRight, ArrowUpDown, Filter, RotateCcw } from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "./Table"

/**
 * DataTable – Advanced table with filtration, horizontal reordering, and transposition
 */

export interface Column {
    key: string
    label: string
    sortable?: boolean
}

export interface DataTableProps {
    columns: Column[]
    data: any[]
    className?: string
}

export function DataTable({ columns: initialColumns, data: initialData, className }: DataTableProps) {
    const [columns, setColumns] = React.useState(initialColumns)
    const [filterQuery, setFilterQuery] = React.useState("")
    const [isTransposed, setIsTransposed] = React.useState(false)

    // Filter logic
    const filteredData = React.useMemo(() => {
        if (!filterQuery) return initialData
        return initialData.filter(row =>
            Object.values(row).some(val =>
                String(val).toLowerCase().includes(filterQuery.toLowerCase())
            )
        )
    }, [filterQuery, initialData])

    // Swap Columns (Horizontal)
    const swapColumns = (idx1: number, idx2: number) => {
        const newCols = [...columns]
        const temp = newCols[idx1]
        newCols[idx1] = newCols[idx2]
        newCols[idx2] = temp
        setColumns(newCols)
    }

    // Move column left/right
    const moveColumn = (index: number, direction: 'left' | 'right') => {
        const targetIndex = direction === 'left' ? index - 1 : index + 1
        if (targetIndex >= 0 && targetIndex < columns.length) {
            swapColumns(index, targetIndex)
        }
    }

    if (isTransposed) {
        // Transposed view: Headers become first column, data follows in columns
        return (
            <div className={cn("space-y-4", className)}>
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <Input
                            placeholder="Filter records..."
                            className="pl-10"
                            value={filterQuery}
                            onChange={(e) => setFilterQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" icon={RotateCcw} onClick={() => setIsTransposed(false)}>Normal View</Button>
                    </div>
                </div>

                <Table>
                    <TableBody>
                        {columns.map((col, colIdx) => (
                            <TableRow key={col.key}>
                                <TableHead className="bg-slate-50/50 w-40 font-black border-r border-slate-100 uppercase">{col.label}</TableHead>
                                {filteredData.map((row, rowIdx) => (
                                    <TableCell key={rowIdx} className="min-w-[120px]">
                                        {row[col.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }

    return (
        <div className={cn("space-y-4", className)}>
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                        placeholder="Filter records..."
                        className="pl-10"
                        value={filterQuery}
                        onChange={(e) => setFilterQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" icon={ArrowLeftRight} onClick={() => setIsTransposed(true)}>Transpose</Button>
                    <Button variant="outline" size="sm" icon={Filter}>Advanced Filters</Button>
                </div>
            </div>

            {/* Main Table */}
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col, idx) => (
                            <TableHead key={col.key} className="group relative">
                                <div className="flex items-center justify-between">
                                    <span>{col.label}</span>
                                    <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => moveColumn(idx, 'left')}
                                            disabled={idx === 0}
                                            className="p-1 hover:text-blue-600 disabled:opacity-30"
                                        >
                                            <ArrowUpDown className="w-3 h-3 rotate-90" />
                                        </button>
                                        <button
                                            onClick={() => moveColumn(idx, 'right')}
                                            disabled={idx === columns.length - 1}
                                            className="p-1 hover:text-blue-600 disabled:opacity-30"
                                        >
                                            <ArrowUpDown className="w-3 h-3 -rotate-90" />
                                        </button>
                                    </div>
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((row, rowIdx) => (
                        <TableRow key={rowIdx}>
                            {columns.map(col => (
                                <TableCell key={col.key}>{row[col.key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                    {filteredData.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-32 text-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                                No records found matching your filter
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
