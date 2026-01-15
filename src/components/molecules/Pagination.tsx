import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange?: (page: number) => void
    className?: string
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className,
}: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <nav className={cn("flex items-center justify-between px-4 sm:px-0", className)}>
            <div className="-mt-px flex w-0 flex-1">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onPageChange?.(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-500 hover:text-slate-900"
                >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    <span className="uppercase tracking-widest text-[10px]">Previous</span>
                </Button>
            </div>
            <div className="hidden md:-mt-px md:flex gap-1">
                {pages.map((page) => (
                    <Button
                        key={page}
                        variant={currentPage === page ? "brand" : "ghost"}
                        size="sm"
                        onClick={() => onPageChange?.(page)}
                        className={cn(
                            "w-10 h-10 rounded-xl font-black text-xs transition-all",
                            currentPage === page
                                ? "shadow-lg shadow-blue-600/20"
                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                        )}
                    >
                        {page}
                    </Button>
                ))}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onPageChange?.(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-500 hover:text-slate-900"
                >
                    <span className="uppercase tracking-widest text-[10px]">Next</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
            </div>
        </nav>
    )
}
