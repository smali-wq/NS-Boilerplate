import { Zap, Shield, Cloud, Lock, BarChart3, Users } from 'lucide-react'
import { Container } from '../layouts/LayoutElements'

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: Cloud,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: Lock,
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: Zap,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: Shield,
    },
]

export function FeatureGrid() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-widest">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                        Everything you need to deploy your app
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col text-left">
                                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-slate-900 uppercase">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href="#" className="text-sm font-semibold leading-6 text-blue-600">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    )
}

const featuresThree = [
    {
        name: 'Real-time Analytics',
        description: 'Get insights into your data with our advanced analytics dashboard.',
        icon: BarChart3,
    },
    {
        name: 'Team Collaboration',
        description: 'Work together with your team in real-time, no matter where they are.',
        icon: Users,
    },
    {
        name: 'Enterprise Security',
        description: 'Bank-grade security to keep your data safe and compliant.',
        icon: Shield,
    },
]

export function FeatureThreeCol() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Everything you need</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {featuresThree.map((feature) => (
                        <div key={feature.name} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{feature.name}</h3>
                            <p className="mt-2 text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
