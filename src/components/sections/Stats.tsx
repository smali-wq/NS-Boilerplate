import { Container } from '../layouts/LayoutElements'

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
]

export function StatsSimple() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <Container>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-slate-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Container>
        </section>
    )
}

export function StatsSplit() {
    return (
        <section className="bg-slate-900 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl uppercase">Trusted by developers worldwide</h2>
                        <p className="mt-4 text-lg leading-8 text-slate-300">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: 'Open Source Projects', value: '8,000+' },
                            { name: 'Uptime Guarantee', value: '99.9%' },
                            { name: 'Server Locations', value: '150+' },
                            { name: 'Customer Satisfaction', value: '4.9/5' },
                        ].map((stat) => (
                            <div key={stat.name} className="flex flex-col bg-slate-400/5 p-8">
                                <dt className="text-sm font-semibold leading-6 text-slate-300 uppercase tracking-widest">{stat.name}</dt>
                                <dd className="order-first text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    )
}
