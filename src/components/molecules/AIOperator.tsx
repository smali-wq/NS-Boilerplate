import * as React from "react"
import { LucideSmile, Sparkles, X, Send, Bot, User } from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../molecules/Card"
import { Input } from "../atoms/Input"

export function AIOperator() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [messages, setMessages] = React.useState([
        { role: 'assistant', content: 'Hello! I am your NSUI Assistant. How can I help you build today?' }
    ])
    const [inputValue, setInputValue] = React.useState("")

    const handleSend = () => {
        if (!inputValue.trim()) return

        const newMessages = [...messages, { role: 'user', content: inputValue }]
        setMessages(newMessages)
        setInputValue("")

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm currently in a demonstration mode, but I can see you're interested in building something great! This UI boilerplate is designed to be highly customizable and AI-ready."
            }])
        }, 1000)
    }

    return (
        <div className="relative inline-block">
            {/* The Smiley Button */}
            <Button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Sparkles className="h-6 w-6 animate-pulse" />
                </div>
                <LucideSmile className="h-8 w-8 transition-transform group-hover:rotate-12" />
            </Button>

            {/* AI Overlay/Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <Card className="w-full max-w-lg shadow-2xl border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-300">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-black uppercase tracking-tight">AI Assistant</CardTitle>
                                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Always Online</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-xl">
                                <X className="h-5 w-5" />
                            </Button>
                        </CardHeader>

                        <CardContent className="p-0">
                            <div className="h-[400px] flex flex-col p-6 space-y-4 overflow-y-auto bg-slate-50/50 dark:bg-slate-950/20">
                                {messages.map((m, i) => (
                                    <div key={i} className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                                    )}>
                                        <div className={cn(
                                            "w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center",
                                            m.role === 'user' ? "bg-slate-200 dark:bg-slate-800" : "bg-blue-600 text-white"
                                        )}>
                                            {m.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                        </div>
                                        <div className={cn(
                                            "p-4 rounded-2xl text-[14px]",
                                            m.role === 'user'
                                                ? "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                                                : "bg-blue-600 text-white shadow-lg shadow-blue-500/10"
                                        )}>
                                            {m.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
                                <Input
                                    placeholder="Ask anything..."
                                    className="flex-1 rounded-xl border-slate-200 dark:border-slate-800"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <Button size="icon" variant="brand" className="rounded-xl" onClick={handleSend}>
                                    <Send className="h-5 w-5" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}
