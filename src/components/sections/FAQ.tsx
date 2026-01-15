import { Container } from '../layouts/LayoutElements'
import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "How do you make holy water?",
        answer:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam.",
    },
    {
        question: "What do you call someone with no body and no nose?",
        answer:
            "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem.",
    },
]

export function FAQSimple() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-4xl divide-y divide-slate-900/10">
                    <h2 className="text-2xl font-black leading-10 tracking-tight text-slate-900 uppercase">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-slate-900/10">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="pt-6">
                                <dt>
                                    <h3 className="flex w-full items-start justify-between text-left text-slate-900">
                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                    </h3>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    )
}

export function FAQGrid() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl text-left">Frequently asked questions</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 text-left">
                        Have a different question and can't find the answer you're looking for? Reach out to our support team by{' '}
                        <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                            sending us an email
                        </a>
                        .
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                    {faqs.map((faq) => (
                        <div key={faq.question} className="text-left">
                            <dt className="font-black text-slate-900 uppercase tracking-tight">{faq.question}</dt>
                            <dd className="mt-1 text-slate-600">{faq.answer}</dd>
                        </div>
                    ))}
                    {/* Duplicate specifically for grid demo */}
                    {faqs.map((faq) => (
                        <div key={faq.question + 'dup'} className="text-left">
                            <dt className="font-black text-slate-900 uppercase tracking-tight">{faq.question}</dt>
                            <dd className="mt-1 text-slate-600">{faq.answer}</dd>
                        </div>
                    ))}
                </dl>
            </Container>
        </section>
    )
}
