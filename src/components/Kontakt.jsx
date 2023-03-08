import React from 'react'

const absoluteCenter = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"

const Info = ({icon, context, text, href}) => {
    return (
        <div className={"flex items-center mb-4"}>
            <div className={"w-12 h-12 mr-2 rounded-full flex items-start justify-center"}>
                <i className={"text-3xl " + icon}></i>
            </div>
            <div>
                <p className={"text-xl font-semibold"}>{context}</p>
                <a href={href} className={"text-lg cursor-pointer"}>{text}</a>
            </div>
        </div>
    )
}
export default function Kontakt() {
    return (
        <div className={"relative bg-red-600 min-h-[60vh]"}>
            <div className={absoluteCenter + " p-12 shadow-md shadow-red-800 bg-neutral-100 rounded-md"}>
                <h2 className={"mb-12 text-center text-3xl font-bold"}>
                    Kontakt
                </h2>
                <div className={"grid grid-cols-2 gap-x-8 gap-y-4"}>
                    <Info icon={"fa-solid fa-map-marker-alt"} context={"Adresse"} text={"Ringstrasse 23, 03050 Cottbus"}/>
                    <Info icon={"fa-solid fa-phone"} context={"Telefon"} text={"0355 1234567"} href={"tel:03551234567"}/>
                    <Info icon={"fa-solid fa-mobile-alt"} context={"Handy"} text={"0172 5675856"} href={"tel:01725675856"}/>
                    <Info icon={"fa-solid fa-envelope"} context={"E-Mail"} text={"behnke-olaf@t-online.de"} href={"mailto:behnke-olaf@t-online.de"}/>
                </div>
            </div>
        </div>
    )
}