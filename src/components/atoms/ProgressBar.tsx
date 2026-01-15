import { cn } from "../../utils/cn"

interface ProgressBarProps {
  value: number
  max?: number
  variant?: "blue" | "emerald" | "rose" | "amber" | "slate"
  size?: "sm" | "md" | "lg"
  className?: string
  showValue?: boolean
}

export function ProgressBar({
  value,
  max = 100,
  variant = "blue",
  size = "md",
  className,
  showValue = false,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const variants = {
    blue: "bg-blue-600",
    emerald: "bg-emerald-500",
    rose: "bg-rose-500",
    amber: "bg-amber-500",
    slate: "bg-slate-700",
  }

  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4",
  }

  return (
    <div className={cn("w-full space-y-2", className)}>
      {showValue && (
        <div className="flex justify-between items-center px-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Progress</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={cn("w-full bg-slate-100 rounded-full overflow-hidden", sizes[size])}>
        <div
          className={cn("h-full transition-all duration-500 ease-out rounded-full", variants[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
