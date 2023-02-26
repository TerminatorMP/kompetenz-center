import React from "react";

import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline';
import HeadingSection from "./HeadingSection";


const supportLinks = [
    {
        name: 'Brandschutz',
        href: '#',
        description:
            'Brandschutz ist unerlässlich. Wir bieten Lösungen für maximale Sicherheit. ' +
            'Überlassen Sie es uns, Ihr Zuhause oder Geschäft zu schützen.',
        icon: "fas fa-fire",
    },
    {
        name: 'Sicherheitstechnik',
        href: '#',
        description:
            'Sicherheitstechnik ist unverzichtbar für den Schutz von Menschen, Eigentum und Gebäuden. ' +
            'Wir bieten innovative Lösungen für effektive Sicherheit. Überlassen Sie uns die Verantwortung für Ihre Sicherheit.',
        icon: "fa-solid fa-sensor-fire",
    },
    {
        name: 'Arbeitsschutz',
        href: '#',
        description:
            'Arbeitsschutz ist wichtig für Mitarbeiter-Sicherheit. Wir bieten Lösungen für geschützte Arbeitsplätze. ' +
            'Überlassen Sie uns Ihre Arbeitsschutzbedürfnisse. Gemeinsam schützen wir Ihre Mitarbeiter und Ihr Unternehmen.',
        icon: "fa-solid fa-helmet-safety",
    },
]
export default function Feature() {
    return (
        <div>
            {/* Header */}
            <div className="relative bg-neutral-900 pb-28 mt-[-1px]">
                <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-24 lg:px-8">
                    <HeadingSection type={"light"}>
                        Leistungen
                    </HeadingSection>
                </div>
            </div>

            {/* Overlapping cards */}
            <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                        <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-red-600 p-5 shadow-lg">
                                    <div className="h-6 w-6 text-white text-xl flex justify-center" aria-hidden="true">
                                        <i className={link.icon} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                <p className="mt-4 text-base text-gray-500">{link.description}</p>
                            </div>
                            <div className="rounded-bl-2xl rounded-br-2xl bg-neutral-100 p-6 md:px-8">
                                <a href={link.href} className="text-base font-medium text-red-700 hover:text-red-600">
                                    Contact us<span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}