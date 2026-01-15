import { Disclosure, Tab } from '@headlessui/react'
import { ChevronUp } from 'lucide-react'
import { cn } from '../../utils/cn'
import { useState } from 'react'

// --- Disclosure (Accordion) ---

export function DisclosureDemo() {
    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
                {({ open }: { open: boolean }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>What is your refund policy?</span>
                            <ChevronUp
                                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-500">
                            If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
                {({ open }: { open: boolean }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Do you offer technical support?</span>
                            <ChevronUp
                                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-500">
                            No.
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

// --- Tabs ---

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function TabsDemo() {
    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }: { selected: boolean }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {/* @ts-ignore */}
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative rounded-md p-3 hover:bg-slate-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.title}
                                        </h3>

                                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-slate-500">
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>{post.commentCount} comments</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a
                                            href="#"
                                            className={classNames(
                                                'absolute inset-0 rounded-md',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export function VerticalTabs() {
    let [categories] = useState({
        'My Account': [
            {
                id: 1,
                title: 'Profile Settings',
                description: 'Manage your public profile and bio.',
                action: 'Edit Profile'
            },
            {
                id: 2,
                title: 'Notifications',
                description: 'Configure email and push alerts.',
                action: 'Manage'
            }
        ],
        'Company': [
            {
                id: 1,
                title: 'Organization Details',
                description: 'Business name, address and tax ID.',
                action: 'Update'
            },
            {
                id: 2,
                title: 'Members',
                description: 'Manage team access and roles.',
                action: 'View Team'
            }
        ],
        'Billing': [
            {
                id: 1,
                title: 'Payment Methods',
                description: 'Manage credit cards and bank accounts.',
                action: 'Manage'
            },
            {
                id: 2,
                title: 'Invoices',
                description: 'View and download past invoices.',
                action: 'View History'
            }
        ],
    })

    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group vertical>
                <div className="flex gap-8">
                    <Tab.List className="flex flex-col space-y-1 rounded-xl bg-slate-100 p-1 min-w-[150px]">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }: { selected: boolean }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700 text-left px-4',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-slate-500 hover:bg-white/[0.12] hover:text-slate-600'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="w-full">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <ul className="space-y-3">
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative rounded-md p-3 hover:bg-slate-50 border border-slate-100 transition-colors"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>
                                            {/* @ts-ignore */}
                                            <p className="text-xs text-slate-500 mt-1">{post.description}</p>
                                            <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    )
}

