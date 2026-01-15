import * as React from "react"
import { Mail, Lock, User, Github, ArrowRight } from "lucide-react"
import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import { Checkbox } from "../atoms/Checkbox"
import { Label } from "../atoms/Label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../molecules/Card"
import { FormField } from "../molecules/FormField"
import { InputGroup } from "../molecules/InputGroup"
import { cn } from "../../utils/cn"

export function SignInForm({ className }: { className?: string }) {
    return (
        <Card className={cn("w-full max-w-md mx-auto overflow-hidden", className)}>
            <div className="h-2 bg-blue-600 w-full" />
            <CardHeader className="pt-10 pb-4 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20 mx-auto mb-4">UB</div>
                <CardTitle className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Welcome Back</CardTitle>
                <CardDescription className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mt-1">Enterprise Access Portal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-8">
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full flex gap-2 font-bold lowercase tracking-normal">
                        <Github size={16} /> GitHub
                    </Button>
                    <Button variant="outline" className="w-full flex gap-2 font-bold lowercase tracking-normal">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg> Google
                    </Button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100 dark:border-slate-800" /></div>
                    <div className="relative flex justify-center text-[9px] uppercase font-black"><span className="bg-white dark:bg-slate-900 px-2 text-slate-400 dark:text-slate-500 tracking-[0.2em]">Or continue with</span></div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <InputGroup id="email" type="email" placeholder="alice@enterprise.com" prefixIcon={Mail} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password">Password</Label>
                            <a href="#" className="text-[9px] font-black text-blue-600 uppercase tracking-widest hover:underline">Forgot?</a>
                        </div>
                        <InputGroup id="password" type="password" placeholder="••••••••" prefixIcon={Lock} />
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="mb-0 cursor-pointer">Remember device</Label>
                </div>

                <Button variant="brand" className="w-full h-12 flex gap-2">
                    Sign In <ArrowRight size={18} />
                </Button>
            </CardContent>
            <CardFooter className="bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 justify-center py-6">
                <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    New here? <a href="#" className="text-blue-600 dark:text-blue-400 font-black hover:underline">Create an account</a>
                </p>
            </CardFooter>
        </Card>
    )
}

export function RegistrationForm({ className }: { className?: string }) {
    return (
        <Card className={cn("w-full max-w-xl mx-auto overflow-hidden", className)}>
            <div className="h-2 bg-emerald-500 w-full" />
            <CardHeader className="pt-10 pb-8 px-10">
                <CardTitle className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Create Account</CardTitle>
                <CardDescription className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">Join 10,000+ teams building on our enterprise foundation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Alice" className="h-12 rounded-2xl" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Johnson" className="h-12 rounded-2xl" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="reg-email">Work Email</Label>
                    <InputGroup id="reg-email" type="email" placeholder="alice@company.com" prefixIcon={Mail} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="reg-password">Security Phrase</Label>
                    <InputGroup id="reg-password" type="password" placeholder="Choose a strong password" prefixIcon={Lock} suffixElement={
                        <div className="flex gap-1">
                            <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
                            <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
                            <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
                        </div>
                    } />
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-950/50 rounded-[32px] border border-slate-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Security Requirements</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {['Min 8 characters', 'One uppercase', 'One symbol', 'One number'].map(req => (
                            <div key={req} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                <span className="text-[12px] font-bold text-slate-600 dark:text-slate-400 uppercase">{req}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <Checkbox id="terms" className="mt-1" />
                    <Label htmlFor="terms" className="mb-0 text-[12px] normal-case font-medium text-slate-500 tracking-normal leading-relaxed">
                        I agree to the <a href="#" className="font-black text-blue-600">Enterprise Terms of Service</a> and acknowledge the <a href="#" className="font-black text-blue-600">Privacy Policy</a>.
                    </Label>
                </div>

                <Button variant="brand" className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20">
                    Get Started Now
                </Button>
            </CardContent>
            <CardFooter className="bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 justify-center py-6">
                <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    Already have an account? <a href="#" className="text-blue-600 dark:text-blue-400 font-black hover:underline">Log in here</a>
                </p>
            </CardFooter>
        </Card>
    )
}
