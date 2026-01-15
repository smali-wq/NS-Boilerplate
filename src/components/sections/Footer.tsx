import { Container } from '../layouts/LayoutElements'

export function FooterSimple() {
    return (
        <footer className="bg-white">
            <Container className="py-12 md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-6 md:order-2">
                    {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'YouTube'].map((item) => (
                        <a key={item} href="#" className="text-slate-400 hover:text-slate-500 text-sm font-semibold uppercase tracking-widest">
                            <span className="sr-only">{item}</span>
                            {item}
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">UB</div>
                        <p className="text-center text-xs leading-5 text-slate-500">
                            &copy; 2026 UI Boilerplate, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export function FooterLarge() {
    return (
        <footer className="bg-slate-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <Container className="pb-8 pt-16 sm:pt-24 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">UB</div>
                            <span className="text-2xl font-black text-white uppercase tracking-tight">NSUI</span>
                        </div>
                        <p className="text-sm leading-6 text-slate-300">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social placeholder icons */}
                            <div className="h-6 w-6 bg-slate-700 rounded-sm"></div>
                            <div className="h-6 w-6 bg-slate-700 rounded-sm"></div>
                            <div className="h-6 w-6 bg-slate-700 rounded-sm"></div>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 text-left">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-widest">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Marketing', 'Analytics', 'Commerce', 'Insights'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-widest">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Pricing', 'Documentation', 'Guides', 'API Status'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-widest">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-widest">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {['Claim', 'Privacy', 'Terms'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm leading-6 text-slate-300 hover:text-white">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 text-left">
                    <p className="text-xs leading-5 text-slate-400">&copy; 2026 NSUI Design System, Inc. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}
