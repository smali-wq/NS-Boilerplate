import { useState, Fragment } from 'react'
import { Search, Command, User, CreditCard, Settings, Smile, Calendar, Check } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '../atoms/Button'
import { cn } from '../../utils/cn'

// --- Autocomplete ---

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]

export function Autocomplete() {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(people[0])
    const [isOpen, setIsOpen] = useState(false)

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className="w-full max-w-xs relative bg-white rounded-lg">
            <label className="block text-sm font-bold text-slate-700 mb-1">Assignee</label>
            <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                    className="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-sm leading-5 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    /* onBlur={() => setTimeout(() => setIsOpen(false), 200)} */ // Simplified for demo
                    value={query || selected.name}
                    placeholder="Search people..."
                />
            </div>
            {isOpen && filteredPeople.length > 0 && (
                <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.map((person) => (
                        <li
                            key={person.id}
                            className={cn(
                                "relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-blue-50 cursor-pointer",
                                selected?.id === person.id ? "bg-blue-50 text-blue-900" : "text-slate-900"
                            )}
                            onClick={() => {
                                setSelected(person)
                                setQuery('')
                                setIsOpen(false)
                            }}
                        >
                            <span className={cn("block truncate", selected?.id === person.id && "font-semibold")}>{person.name}</span>
                            {selected?.id === person.id && (
                                <span className={cn("absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600")}>
                                    <Check className="h-5 w-5" aria-hidden="true" />
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

// --- Command Palette ---

export function CommandPalette() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="p-8 flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-sm text-slate-500 mb-4">Press <kbd className="font-sans font-semibold text-slate-900 bg-white border border-slate-300 rounded-md px-1.5 py-0.5 shadow-sm text-xs">Ctrl</kbd> + <kbd className="font-sans font-semibold text-slate-900 bg-white border border-slate-300 rounded-md px-1.5 py-0.5 shadow-sm text-xs">K</kbd> to open</p>
                <Button variant="outline" onClick={() => setOpen(true)}>Open Command Palette</Button>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-[100]" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-500 bg-opacity-25 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-slate-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                                <div className="relative">
                                    <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400" aria-hidden="true" />
                                    <input
                                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm"
                                        placeholder="Type a command or search..."
                                        autoFocus
                                    />
                                </div>
                                <ul className="max-h-96 scroll-py-3 overflow-y-auto p-3">
                                    <li className="group flex cursor-pointer select-none rounded-xl p-3 hover:bg-slate-100">
                                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 group-hover:bg-white text-slate-500 group-hover:text-blue-600">
                                            <Calendar className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <div className="ml-4 flex-auto">
                                            <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Create Event</p>
                                            <p className="text-sm text-slate-500 group-hover:text-slate-700">Add a new meeting to your calendar</p>
                                        </div>
                                    </li>
                                    <li className="group flex cursor-pointer select-none rounded-xl p-3 hover:bg-slate-100">
                                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 group-hover:bg-white text-slate-500 group-hover:text-blue-600">
                                            <User className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <div className="ml-4 flex-auto">
                                            <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Add Member</p>
                                            <p className="text-sm text-slate-500 group-hover:text-slate-700">Invite a new user to your organization</p>
                                        </div>
                                    </li>
                                    <li className="group flex cursor-pointer select-none rounded-xl p-3 hover:bg-slate-100">
                                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 group-hover:bg-white text-slate-500 group-hover:text-blue-600">
                                            <Settings className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <div className="ml-4 flex-auto">
                                            <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Settings</p>
                                            <p className="text-sm text-slate-500 group-hover:text-slate-700">Manage your profile and preferences</p>
                                        </div>
                                    </li>
                                </ul>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root >
        </>
    )
}
