import { Button } from '../atoms/Button'
import { Container } from '../layouts/LayoutElements'

export function CTASimple() {
    return (
        <section className="bg-blue-600 py-24 sm:py-32">
            <Container className="text-center">
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Boost your productivity today.<br />
                    Start using our app for free.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button variant="outline" className="text-blue-600 bg-white hover:bg-blue-50 border-transparent shadow-xl" size="lg">Get started</Button>
                    <Button variant="ghost" className="text-white hover:text-blue-100 hover:bg-blue-700" size="lg">Learn more <span aria-hidden="true">→</span></Button>
                </div>
            </Container>
        </section>
    )
}

export function CTASplit() {
    return (
        <section className="bg-slate-900 py-16">
            <Container>
                <div className="relative isolate overflow-hidden bg-slate-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#gradient-cta)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="gradient-cta">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Block out the noise.<br />
                            Start listening to your customers.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Button variant="brand" size="lg">Get started</Button>
                            <Button variant="ghost" className="text-white" size="lg">Learn more <span aria-hidden="true">→</span></Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
