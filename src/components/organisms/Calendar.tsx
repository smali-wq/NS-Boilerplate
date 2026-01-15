import * as React from "react"
import { ChevronLeft, ChevronRight, Clock, Plus } from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"

/**
 * Calendar – Versatile date and event viewer
 * Supports 'month', 'week', and 'day' views
 */

export interface CalendarEvent {
    id: string | number
    title: string
    time: string
    datetime: string
    category?: 'personal' | 'work' | 'other'
}

export type CalendarView = 'month' | 'week' | 'day'

export interface CalendarProps {
    events?: CalendarEvent[]
    initialView?: CalendarView
    className?: string
}

export function Calendar({ events = [], initialView = 'month', className }: CalendarProps) {
    const [view, setView] = React.useState<CalendarView>(initialView)

    return (
        <div className={cn("bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden", className)}>
            {/* Header */}
            <header className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-8 py-4">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">January 2026</h2>
                    <div className="flex items-center gap-1 border border-slate-200 rounded-xl p-1 bg-white">
                        <Button variant="ghost" size="icon" className="w-8 h-8"><ChevronLeft size={16} /></Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8"><ChevronRight size={16} /></Button>
                    </div>
                    <Button variant="outline" size="sm">Today</Button>
                </div>

                <div className="flex items-center gap-2">
                    <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
                        {(['month', 'week', 'day'] as const).map((v) => (
                            <button
                                key={v}
                                onClick={() => setView(v)}
                                className={cn(
                                    "px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                                    view === v ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"
                                )}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                    <Button variant="brand" size="sm" icon={Plus}>Add Event</Button>
                </div>
            </header>

            {/* View Content */}
            <div className="p-1">
                {view === 'month' && <MonthView events={events} />}
                {view === 'week' && <WeekView events={events} />}
                {view === 'day' && <DayView events={events} />}
            </div>
        </div>
    )
}

function MonthView({ events }: { events: CalendarEvent[] }) {
    const days = Array.from({ length: 35 }, (_, i) => i - 3) // Mock days
    return (
        <div className="grid grid-cols-7 border-t border-l border-slate-100">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="bg-slate-50/50 py-3 text-center text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] border-r border-b border-slate-100">
                    {d}
                </div>
            ))}
            {days.map((day, idx) => {
                const isCurrentMonth = day > 0 && day <= 31
                return (
                    <div key={idx} className={cn(
                        "min-h-[120px] p-2 bg-white border-r border-b border-slate-100 transition-colors hover:bg-slate-50/30",
                        !isCurrentMonth && "bg-slate-50/30 text-slate-300"
                    )}>
                        <time className={cn(
                            "inline-flex w-7 h-7 items-center justify-center text-xs font-black",
                            day === 15 && "bg-blue-600 text-white rounded-full"
                        )}>
                            {day > 0 ? (day > 31 ? day - 31 : day) : 31 + day}
                        </time>
                        <div className="mt-2 space-y-1">
                            {events.filter(e => e.datetime.includes(`-15`)).slice(0, 2).map((e, ei) => (
                                day === 15 && (
                                    <div key={ei} className="px-2 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[9px] font-bold text-blue-700 truncate">
                                        {e.title}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function WeekView({ events }: { events: CalendarEvent[] }) {
    return (
        <div className="flex flex-col">
            <div className="flex border-b border-slate-100 bg-slate-50/50">
                <div className="w-16 border-r border-slate-100" />
                {['Sun 12', 'Mon 13', 'Tue 14', 'Wed 15', 'Thu 16', 'Fri 17', 'Sat 18'].map(d => (
                    <div key={d} className="flex-1 py-4 text-center border-r border-slate-100">
                        <span className="text-[10px] font-black uppercase text-slate-400 block">{d.split(' ')[0]}</span>
                        <span className="text-sm font-black text-slate-900">{d.split(' ')[1]}</span>
                    </div>
                ))}
            </div>
            <div className="flex h-[400px] overflow-auto">
                <div className="w-16 flex-none bg-slate-50/50 border-r border-slate-100">
                    {[9, 10, 11, 12, 1, 2, 3, 4, 5].map(h => (
                        <div key={h} className="h-20 border-b border-slate-100 flex items-start justify-center pt-2 text-[9px] font-black text-slate-400">
                            {h}:00 {h < 9 || h === 12 ? 'PM' : 'AM'}
                        </div>
                    ))}
                </div>
                <div className="flex-1 grid grid-cols-7 relative">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="border-r border-slate-100 h-full relative">
                            {i === 3 && (
                                <div className="absolute inset-x-1 top-24 bg-blue-600/10 border-l-4 border-blue-600 p-2 rounded-r-lg">
                                    <p className="text-[10px] font-black text-blue-700">Enterprise Review</p>
                                    <p className="text-[8px] font-bold text-blue-500 uppercase">10:00 AM - 11:30 AM</p>
                                </div>
                            )}
                        </div>
                    ))}
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="absolute inset-x-0 border-b border-slate-100" style={{ top: `${(i + 1) * 80}px` }} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function DayView({ events }: { events: CalendarEvent[] }) {
    return (
        <div className="flex min-h-[500px]">
            <div className="w-20 bg-slate-50/50 border-r border-slate-100 py-6">
                {[8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6].map(h => (
                    <div key={h} className="h-24 px-4 text-right text-[10px] font-black text-slate-400">
                        {h}:00
                    </div>
                ))}
            </div>
            <div className="flex-1 p-6 relative">
                <div className="absolute inset-x-6 top-32 bg-emerald-600/10 border-l-4 border-emerald-600 p-4 rounded-r-2xl shadow-sm">
                    <h4 className="text-sm font-black text-emerald-900 leading-none">Design System Sync</h4>
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1.5 flex items-center gap-1">
                        <Clock size={10} /> 9:30 AM - 10:30 AM
                    </p>
                </div>
                <div className="absolute inset-x-6 top-80 bg-blue-600/10 border-l-4 border-blue-600 p-4 rounded-r-2xl shadow-sm">
                    <h4 className="text-sm font-black text-blue-900 leading-none">Global Architecture Board</h4>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1.5 flex items-center gap-1">
                        <Clock size={10} /> 1:00 PM - 3:00 PM
                    </p>
                </div>
                {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="h-24 border-b border-slate-50 last:border-0" />
                ))}
            </div>
        </div>
    )
}
