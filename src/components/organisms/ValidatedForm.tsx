import * as React from "react"
import { Button } from "../atoms/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../molecules/Card"
import { FormField } from "../molecules/FormField"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "../../utils/cn"

export function ValidatedForm({ className }: { className?: string }) {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        company: ""
    })
    const [errors, setErrors] = React.useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const validate = (data: typeof formData) => {
        const newErrors: Record<string, string> = {}

        if (!data.username) {
            newErrors.username = "Username is required"
        } else if (data.username.length < 3) {
            newErrors.username = "Username must be at least 3 characters"
        }

        if (!data.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Invalid email address"
        }

        if (!data.company) {
            newErrors.company = "Company name is required for enterprise access"
        }

        return newErrors
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))

        // Real-time clearing of errors
        if (errors[id]) {
            setErrors(prev => {
                const updated = { ...prev }
                delete updated[id]
                return updated
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSuccess(false)

        const newErrors = validate(formData)
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
        setFormData({ username: "", email: "", company: "" })
    }

    return (
        <Card className={cn("w-full max-w-md mx-auto overflow-hidden border-2", className)}>
            <CardHeader>
                <CardTitle className="text-xl font-black text-slate-900 uppercase tracking-tight">Enterprise Registration</CardTitle>
                <CardDescription className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Complete all fields to continue</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                    {isSuccess && (
                        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl animate-in fade-in slide-in-from-top-4">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <p className="text-[10px] font-black text-emerald-900 uppercase tracking-widest leading-relaxed">Account created successfully! Check your inbox.</p>
                        </div>
                    )}

                    <FormField
                        id="username"
                        label="Username"
                        placeholder="janesmith"
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.username}
                        disabled={isSubmitting}
                    />

                    <FormField
                        id="email"
                        label="Email Address"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        disabled={isSubmitting}
                    />

                    <FormField
                        id="company"
                        label="Organization"
                        placeholder="ACME Corp"
                        value={formData.company}
                        onChange={handleChange}
                        error={errors.company}
                        disabled={isSubmitting}
                    />
                </CardContent>
                <CardFooter className="bg-slate-50/50 border-t border-slate-100 flex-col gap-4">
                    <Button
                        type="submit"
                        variant="brand"
                        className="w-full h-12 flex gap-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            "Processing Request..."
                        ) : (
                            <>Confirm Registration <AlertCircle size={16} /></>
                        )}
                    </Button>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">
                        Validation uses real-time state management
                    </p>
                </CardFooter>
            </form>
        </Card>
    )
}
