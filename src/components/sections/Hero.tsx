import { Button } from '../atoms/Button'
import { Container } from '../layouts/LayoutElements'

export function HeroSimple() {
    return (
        <section className="bg-white text-center py-20 lg:py-32">
            <Container>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Data to enrich your <br />
                    <span className="text-blue-600">online business</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button variant="brand" size="lg">Get started</Button>
                    <Button variant="ghost" size="lg">Learn more <span aria-hidden="true">→</span></Button>
                </div>
            </Container>
        </section>
    )
}

export function HeroSplit() {
    return (
        <section className="relative bg-slate-900 py-16 lg:py-24 overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[80rem] rounded-full bg-blue-600/10 blur-3xl -z-10" />

            <Container className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-400/30 mb-6">
                        What's new
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-6">
                        Deploy your app <br />
                        <span className="text-blue-500">with confidence</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Button variant="brand" size="lg">Get started</Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" size="lg">Live demo</Button>
                    </div>
                </div>
                <div className="relative lg:ml-auto">
                    <div className="relative rounded-2xl bg-white/5 border border-white/10 p-2 shadow-2xl">
                        <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                            alt="App screenshot"
                            className="relative rounded-xl shadow-2xl ring-1 ring-white/10 w-[600px] max-w-none"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
