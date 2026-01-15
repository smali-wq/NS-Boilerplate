import { cn } from "../../utils/cn"

/**
 * Steps – Multi-step progress indicator
 */

export interface Step {
    id: string
    name: string
    status: 'complete' | 'current' | 'upcoming'
}

export function Steps({ steps }: { steps: Step[] }) {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                {steps.map((step, idx) => (
                    <li key={step.name} className="md:flex-1">
                        {step.status === 'complete' ? (
                            <div className="group flex flex-col border-l-4 border-blue-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                                <span className="text-[12px] font-black uppercase tracking-widest text-blue-600">Step {idx + 1}</span>
                                <span className="text-sm font-black uppercase text-slate-900 dark:text-white">{step.name}</span>
                            </div>
                        ) : step.status === 'current' ? (
                            <div className="flex flex-col border-l-4 border-blue-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" aria-current="step">
                                <span className="text-[12px] font-black uppercase tracking-widest text-blue-600">Step {idx + 1}</span>
                                <span className="text-sm font-black uppercase text-slate-900 dark:text-white">{step.name}</span>
                            </div>
                        ) : (
                            <div className="group flex flex-col border-l-4 border-slate-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                                <span className="text-[12px] font-black uppercase tracking-widest text-slate-400">Step {idx + 1}</span>
                                <span className="text-sm font-black uppercase text-slate-400">{step.name}</span>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
