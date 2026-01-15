import { Check } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Container } from '../layouts/LayoutElements'

const tiers = [
    {
        name: 'Freelancer',
        id: 'tier-freelancer',
        href: '#',
        priceMonthly: '$24',
        description: 'The essentials to provide your best work for clients.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        mostPopular: false,
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$32',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$48',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
        ],
        mostPopular: false,
    },
]

export function PricingThreeTier() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
                        in. Explicabo id ut laborum.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={`
                                relative rounded-3xl p-8 ring-1 
                                ${tier.mostPopular ? 'bg-slate-900 shadow-2xl ring-slate-900 scale-105 z-10' : 'bg-white ring-slate-200 sm:mx-8 lg:mx-0'}
                            `}
                        >
                            <h3
                                id={tier.id}
                                className={`text-base font-black uppercase tracking-widest ${tier.mostPopular ? 'text-blue-400' : 'text-blue-600'}`}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span className={`text-5xl font-bold tracking-tight ${tier.mostPopular ? 'text-white' : 'text-slate-900'}`}>
                                    {tier.priceMonthly}
                                </span>
                                <span className={`text-base font-semibold ${tier.mostPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                                    /month
                                </span>
                            </p>
                            <p className={`mt-6 text-base leading-7 ${tier.mostPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                                {tier.description}
                            </p>
                            <ul
                                role="list"
                                className={`mt-8 space-y-3 text-sm leading-6 ${tier.mostPopular ? 'text-slate-300' : 'text-slate-600'}`}
                            >
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className={`h-6 w-5 flex-none ${tier.mostPopular ? 'text-blue-400' : 'text-blue-600'}`} aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={`
                                    mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    ${tier.mostPopular
                                        ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-500'
                                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100 ring-1 ring-inset ring-blue-200 focus-visible:outline-blue-600'
                                    }
                                `}
                            >
                                Buy plan
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
