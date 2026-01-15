import React, { useState, useEffect } from 'react'
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '../../utils/cn'

export interface NotificationProps {
    id: string
    title: string
    description?: string
    type?: 'success' | 'error' | 'info' | 'warning'
    duration?: number
    onClose: (id: string) => void
}

export const Notification: React.FC<NotificationProps> = ({
    id,
    title,
    description,
    type = 'info',
    duration = 5000,
    onClose
}) => {
    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => onClose(id), duration)
            return () => clearTimeout(timer)
        }
    }, [id, duration, onClose])

    const icons = {
        success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
        error: <AlertCircle className="w-5 h-5 text-rose-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />,
        warning: <AlertTriangle className="w-5 h-5 text-amber-500" />
    }

    const backgrounds = {
        success: "bg-emerald-50 border-emerald-100",
        error: "bg-rose-50 border-rose-100",
        info: "bg-blue-50 border-blue-100",
        warning: "bg-amber-50 border-amber-100"
    }

    return (
        <div className={cn(
            "w-full max-w-sm bg-white rounded-[24px] shadow-2xl border p-4 animate-in slide-in-from-right-full fade-in duration-300",
            backgrounds[type]
        )}>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                    {icons[type]}
                </div>
                <div className="flex-1">
                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{title}</p>
                    {description && (
                        <p className="mt-1 text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
                <button
                    onClick={() => onClose(id)}
                    className="flex-shrink-0 p-1 text-slate-400 hover:text-slate-900 hover:bg-white/50 rounded-lg transition-all"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

// Notification Provider / Manager for demo purposes in ComponentGallery
export const NotificationContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Omit<NotificationProps, 'onClose'>[]>([])

    const addNotification = (notif: Omit<NotificationProps, 'onClose'>) => {
        setNotifications(prev => [...prev, notif])
    }

    const removeNotification = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id))
    }

    return (
        <div className="relative">
            {children}
            <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 w-full max-w-sm">
                {notifications.map(n => (
                    <Notification key={n.id} {...n} onClose={removeNotification} />
                ))}
            </div>
        </div>
    )
}
