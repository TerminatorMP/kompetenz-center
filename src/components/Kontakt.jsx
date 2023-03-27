import React from 'react'
import FromLeft from "./animation/FromLeft";


const Info = ({icon, context, text, href}) => {
    return (
        <FromLeft>
            <div className={"flex flex-col text-md md:text-xl mb-4 p-2 pl-4 md:pl-8 border-solid border-l-2 border-neutral-900 "}>
                <div className="flex items-center mb-2">
                    <i className={"mr-2 " + icon}></i>
                    <p className={"font-semibold"}>{context}</p>
                </div>
                <a href={href} className={"cursor-pointer"}>{text}</a>
            </div>
        </FromLeft>
    )
}
export default function Kontakt() {
    return (
        <div id={"contact"} className={"flex justify-center items-center bg-red-600 p-10 md:p-16"}>
            <div className={"w-9/10 max-w-[700px] p-12 shadow-lg shadow-red-900 bg-neutral-100 rounded-md"}>
                <h2 className={"mb-6 md:mb-12 text-center text-xl md:text-3xl font-bold"}>
                    Kontakt
                </h2>
                <div className={"grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2"}>
                    <Info icon={"fa-solid fa-map-marker-alt"} context={"Adresse"}
                          text={"Ringstrasse 23, 03050 Cottbus"} href={"https://goo.gl/maps/AKdmiasjfY8GNGhX9"}/>
                    <Info icon={"fa-solid fa-phone"} context={"Telefon"} text={"0355 1234567"}
                          href={"tel:03551234567"}/>
                    <Info icon={"fa-solid fa-mobile-alt"} context={"Handy"} text={"0172 5675856"}
                          href={"tel:01725675856"}/>
                    <Info icon={"fa-solid fa-envelope"} context={"E-Mail"} text={"behnke-olaf@t-online.de"}
                          href={"mailto:behnke-olaf@t-online.de"}/>
                </div>
            </div>
        </div>
    )
}